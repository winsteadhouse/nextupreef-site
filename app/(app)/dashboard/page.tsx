import { createClient } from '@/lib/supabase/server';
import { getActiveTank } from '@/lib/active-tank';
import TrendChart from '../TrendChart';

const PRES: Record<string, { unit: string; label: string; color: string }> = {
  alk: { unit: 'dKH', label: 'Alk', color: '#2EE6CF' },
  ca: { unit: 'ppm', label: 'Ca', color: '#4F9DFF' },
  mg: { unit: 'ppm', label: 'Mg', color: '#A78BFA' },
  no3: { unit: 'ppm', label: 'NO3', color: '#F472B6' },
  po4: { unit: 'ppm', label: 'PO4', color: '#22D3EE' },
  salinity: { unit: 'sg', label: 'Salinity', color: '#818CF8' },
  ph: { unit: '', label: 'pH', color: '#E879F9' },
  temp: { unit: 'F', label: 'Temp', color: '#60A5FA' },
};
const KEYS = ['alk', 'ca', 'mg', 'no3', 'po4', 'salinity', 'ph', 'temp'];
const DEC: Record<string, number> = { alk: 1, ca: 0, mg: 0, no3: 1, po4: 2, salinity: 3, ph: 2, temp: 1 };

const DEF: Record<string, Record<string, [number, number]>> = {
  mixed: { alk: [8.0, 9.5], ca: [400, 450], mg: [1280, 1450], no3: [2, 10], po4: [0.03, 0.08], salinity: [1.024, 1.026], ph: [8.1, 8.4], temp: [76, 80] },
  sps: { alk: [7.8, 8.6], ca: [410, 450], mg: [1280, 1400], no3: [2, 8], po4: [0.03, 0.07], salinity: [1.025, 1.026], ph: [8.1, 8.4], temp: [76, 79] },
  lps: { alk: [7.8, 9.5], ca: [400, 470], mg: [1280, 1450], no3: [5, 20], po4: [0.05, 0.12], salinity: [1.024, 1.026], ph: [8.0, 8.4], temp: [76, 80] },
  softie: { alk: [7.8, 9.5], ca: [380, 460], mg: [1250, 1500], no3: [5, 25], po4: [0.05, 0.15], salinity: [1.024, 1.026], ph: [8.0, 8.4], temp: [76, 80] },
  nano: { alk: [8.0, 9.5], ca: [400, 450], mg: [1280, 1400], no3: [2, 10], po4: [0.03, 0.08], salinity: [1.024, 1.026], ph: [8.1, 8.4], temp: [76, 79] },
  ulns: { alk: [7.6, 8.4], ca: [410, 450], mg: [1280, 1400], no3: [1, 5], po4: [0.02, 0.05], salinity: [1.025, 1.026], ph: [8.1, 8.4], temp: [76, 79] },
  fish_only: { alk: [7.0, 11.0], ca: [350, 500], mg: [1150, 1500], no3: [0, 40], po4: [0, 0.5], salinity: [1.020, 1.025], ph: [7.8, 8.4], temp: [76, 80] },
};

type Pt = { t: string; v: number };
type Tgt = { lo: number; hi: number; unit: string; label: string; color: string };
type Stat3 = 'good' | 'watch' | 'bad';
type AdvItem = { title?: string; detail?: string; priority?: number; category?: string };
type Adv = { overall?: string; urgency?: string; positive?: string; watch_this_week?: string; action_items?: AdvItem[] };
const STATUS_COLOR: Record<Stat3, string> = { good: 'var(--good)', watch: 'var(--amber)', bad: 'var(--bad)' };
const STATUS_EDGE: Record<Stat3, string> = { good: 'var(--hair)', watch: 'rgba(246,166,35,.26)', bad: 'rgba(255,93,93,.34)' };
function statusOf(v: number, lo: number, hi: number): Stat3 {
  if (v >= lo && v <= hi) return 'good';
  const span = (hi - lo) || 1;
  const d = v < lo ? lo - v : v - hi;
  return d <= span * 0.18 ? 'watch' : 'bad';
}
const pillText = (v: number, lo: number, hi: number) => (v < lo ? 'low' : v > hi ? 'high' : 'in range');
const valueColor = (st: Stat3 | null) => (st == null || st === 'good' ? 'var(--hi)' : STATUS_COLOR[st]);
const scoreColor = (s: number | null) => (s == null ? 'var(--dim)' : s >= 70 ? 'var(--good)' : s >= 50 ? 'var(--amber)' : 'var(--bad)');
const relAge = (iso: string) => { const d = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000); return d <= 0 ? 'today' : d === 1 ? '1d ago' : d + 'd ago'; };
const parseDate = (s?: string | null) => { if (!s) return null; const r = String(s); return new Date(r.length <= 10 ? r + 'T12:00:00' : r).getTime(); };
const within = (iso: string | null | undefined, mins: number) => (iso ? (Date.now() - new Date(String(iso)).getTime()) <= mins * 60000 : false);
const clip = (s: string | undefined, n: number) => { if (!s) return ''; const dot = s.indexOf('. '); const end = dot > 0 && dot < n ? dot + 1 : Math.min(s.length, n); return s.slice(0, end) + (end < s.length ? '...' : ''); };
function dueLabel(nextDue?: string | null, snoozed?: string | null): { text: string; color: string } {
  if (snoozed && new Date(String(snoozed)).getTime() > Date.now()) return { text: 'snoozed', color: 'var(--dim)' };
  const t = parseDate(nextDue);
  if (t == null) return { text: '', color: 'var(--dim)' };
  const d = Math.ceil((t - Date.now()) / 86400000);
  if (d < 0) return { text: (-d) + 'd overdue', color: 'var(--amber)' };
  if (d === 0) return { text: 'due today', color: 'var(--amber)' };
  if (d === 1) return { text: 'due tomorrow', color: 'var(--mid)' };
  return { text: 'in ' + d + 'd', color: 'var(--mid)' };
}
const FREQ: Record<string, number> = { daily: 1, weekly: 7, biweekly: 14, every_two_weeks: 14, triweekly: 21, every_three_weeks: 21, monthly: 30 };

function stats30(s: Pt[]) {
  const cut = Date.now() - 30 * 86400000;
  let pts = s.filter((p) => new Date(p.t).getTime() >= cut);
  if (pts.length < 2) pts = s.slice(-8);
  if (!pts.length) return null;
  const vs = pts.map((p) => p.v);
  const avg = vs.reduce((a, b) => a + b, 0) / vs.length;
  const sd = Math.sqrt(vs.reduce((a, b) => a + (b - avg) * (b - avg), 0) / vs.length);
  return { avg, sd, n: vs.length };
}

function spark(series: Pt[], lo: number, hi: number) {
  const pts = series.slice(-30);
  if (pts.length < 2) return null;
  const vs = pts.map((p) => p.v);
  const min = Math.min(...vs, lo), max = Math.max(...vs, hi);
  const span = (max - min) || 1;
  const dx = 116 / (pts.length - 1);
  const Y = (v: number) => 32 - ((v - min) / span) * 26;
  const path = pts.map((p, i) => (i ? 'L' : 'M') + ' ' + (i * dx).toFixed(1) + ' ' + Y(p.v).toFixed(1)).join(' ');
  return { path, bandTop: Y(hi), bandBot: Y(lo) };
}

export default async function DashboardPage() {
  const supabase = await createClient();
  const { tanks, activeTankId } = await getActiveTank();
  const tank = tanks.find((t) => t.id === activeTankId) ?? null;
  if (!tank) return (<div><h1>Dashboard</h1><p style={{ color: 'var(--mid)', marginTop: 8 }}>No tanks yet. Add one in the app to get started.</p></div>);

  const logsAsc = ((await supabase.from('parameter_logs').select('logged_at, alk, ca, mg, no3, po4, salinity, ph, temp').eq('tank_id', tank.id).order('logged_at', { ascending: true }).limit(600)).data ?? []) as Record<string, unknown>[];
  const snaps = ((await supabase.from('score_snapshots').select('reef_score, stability_score, community_rank, community_total, snapshot_date').eq('tank_id', tank.id).order('snapshot_date', { ascending: false }).limit(2)).data ?? []) as Record<string, number>[];
  const meta = ((await supabase.from('tanks').select('tank_type, default_params').eq('id', tank.id).single()).data ?? {}) as { tank_type?: string; default_params?: { targets?: Record<string, { min: number; max: number }> } };
  const advRow = ((await supabase.from('ai_advisor_cache').select('response, generated_at').eq('tank_id', tank.id).order('generated_at', { ascending: false }).limit(1)).data ?? [])[0] as { response?: unknown; generated_at?: string } | undefined;
  const reminders = ((await supabase.from('maintenance_reminders').select('name, icon, frequency_days, last_completed, next_due, snoozed_until').eq('tank_id', tank.id).eq('is_active', true).order('next_due', { ascending: true })).data ?? []) as Record<string, unknown>[];
  const wcSched = ((await supabase.from('water_change_schedules').select('frequency, percent_change, last_completed, next_due').eq('tank_id', tank.id).eq('is_active', true).limit(1)).data ?? [])[0] as { frequency?: string; percent_change?: number; last_completed?: string; next_due?: string } | undefined;
  const wcs = ((await supabase.from('water_changes').select('completed_at, percent_changed, gallons_changed').eq('tank_id', tank.id).order('completed_at', { ascending: false }).limit(14)).data ?? []) as Record<string, unknown>[];
  const hub = ((await supabase.from('hub_devices').select('name, last_seen_at, is_active').eq('tank_id', tank.id).eq('is_active', true).order('last_seen_at', { ascending: false }).limit(1)).data ?? [])[0] as { name?: string; last_seen_at?: string } | undefined;
  const outletRows = ((await supabase.from('smart_outlets').select('display_name, hub_id, last_seen_at').eq('tank_id', tank.id).eq('is_active', true)).data ?? []) as Record<string, unknown>[];
  const ctrl = ((await supabase.from('controller_integrations').select('controller_type, last_sync_at, last_sync_status').eq('tank_id', tank.id).eq('is_active', true).order('last_sync_at', { ascending: false }).limit(1)).data ?? [])[0] as { controller_type?: string; last_sync_at?: string; last_sync_status?: string } | undefined;

  const tankType = (meta.tank_type && DEF[meta.tank_type]) ? meta.tank_type : 'mixed';
  const custom = meta.default_params?.targets ?? {};
  const TARGETS: Record<string, Tgt> = {};
  for (const k of KEYS) {
    const base = DEF[tankType][k] ?? DEF.mixed[k];
    const c = custom[k];
    const lo = c && Number.isFinite(Number(c.min)) ? Number(c.min) : base[0];
    const hi = c && Number.isFinite(Number(c.max)) ? Number(c.max) : base[1];
    TARGETS[k] = { lo, hi, unit: PRES[k].unit, label: PRES[k].label, color: PRES[k].color };
  }

  const series: Record<string, Pt[]> = {};
  for (const k of KEYS) series[k] = logsAsc.filter((l) => l[k] != null).map((l) => ({ t: String(l.logged_at), v: Number(l[k]) }));

  const snap = snaps[0], prev = snaps[1];
  const reefDelta = snap && prev ? Math.round(snap.reef_score - prev.reef_score) : null;
  const stabDelta = snap && prev ? Math.round(snap.stability_score - prev.stability_score) : null;

  let inRangeCount = 0, offCount = 0;
  for (const k of KEYS) { const s = series[k]; if (!s.length) continue; const v = s[s.length - 1].v, tg = TARGETS[k]; (v >= tg.lo && v <= tg.hi) ? inRangeCount++ : offCount++; }

  let adv: Adv | null = null;
  if (advRow?.response) { try { adv = (typeof advRow.response === 'string' ? JSON.parse(advRow.response) : advRow.response) as Adv; } catch { adv = null; } }
  const advItems = (adv?.action_items ?? []).slice().sort((a, b) => (a.priority ?? 9) - (b.priority ?? 9)).slice(0, 2);
  const urgColor = adv?.urgency === 'high' ? 'var(--bad)' : adv?.urgency === 'medium' ? 'var(--amber)' : 'var(--good)';

  const paramAlerts: { level: string; text: string }[] = [];
  for (const k of KEYS) {
    const s = series[k]; if (!s.length) continue;
    const v = s[s.length - 1].v, tg = TARGETS[k];
    const st = statusOf(v, tg.lo, tg.hi);
    if (st === 'good') continue;
    paramAlerts.push({ level: st === 'bad' ? 'bad' : 'amber', text: tg.label + ' ' + (v < tg.lo ? 'low' : 'high') + ' at ' + v + ' (target ' + tg.lo + ' to ' + tg.hi + ')' });
  }

  const wcLast = wcs[0];
  const wcLastDays = wcLast ? Math.floor((Date.now() - new Date(String(wcLast.completed_at)).getTime()) / 86400000) : null;
  const wcPct = wcSched?.percent_change ?? (wcLast ? Number(wcLast.percent_changed) : null);
  const wcTargetDays = wcSched?.frequency ? (FREQ[wcSched.frequency] ?? null) : null;
  const wcDue = parseDate(wcSched?.next_due);
  const wcUntil = wcDue != null ? Math.ceil((wcDue - Date.now()) / 86400000) : null;
  const times = wcs.map((w) => new Date(String(w.completed_at)).getTime()).sort((a, b) => a - b);
  const uniq: number[] = [];
  for (const t of times) { if (!uniq.length || (t - uniq[uniq.length - 1]) > 43200000) uniq.push(t); }
  const gaps: number[] = [];
  for (let i = 1; i < uniq.length; i++) gaps.push(Math.round((uniq[i] - uniq[i - 1]) / 86400000));
  const recentGaps = gaps.slice(-8);
  const avgGap = recentGaps.length ? Math.round(recentGaps.reduce((a, b) => a + b, 0) / recentGaps.length) : null;
  const gmax = Math.max(...recentGaps, wcTargetDays ?? 14, 1);
  const cadenceText = avgGap != null && wcTargetDays ? ('You average about ' + avgGap + ' days between changes (target every ' + wcTargetDays + ').') : avgGap != null ? ('You average about ' + avgGap + ' days between changes.') : 'Log a few changes to see your cadence.';

  const fallbackItems: { level: string; text: string }[] = [];
  if (wcUntil != null && wcUntil < 0) fallbackItems.push({ level: 'amber', text: 'Water change is ' + (-wcUntil) + ' days past due (' + (wcPct ?? 20) + '% biweekly).' });
  for (const r of reminders) { const dl = dueLabel(r.next_due as string, r.snoozed_until as string); if (dl.text.indexOf('overdue') >= 0 || dl.text === 'due today') fallbackItems.push({ level: 'amber', text: String(r.name) + ' ' + dl.text }); }
  for (const a of paramAlerts) fallbackItems.push(a);

  const rankPct = snap?.community_rank && snap?.community_total ? Math.max(1, Math.round((snap.community_rank / snap.community_total) * 100)) : null;

  const hubOnline = !!hub && within(hub.last_seen_at, 10);
  const outletTotal = outletRows.length;
  const outletOnline = outletRows.filter((o) => (o.hub_id && hubOnline) || within(o.last_seen_at as string, 30)).length;
  const apexOnline = !!ctrl && within(ctrl.last_sync_at, 60) && (ctrl.last_sync_status === 'ok' || ctrl.last_sync_status === 'success');
  const anyDevice = !!hub || outletTotal > 0 || !!ctrl;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <h1>{tank.name}</h1>
        <span style={{ fontSize: 13, color: 'var(--dim)' }}>{(tank.tank_type ?? 'reef') + ' . ' + (tank.display_gallons ?? '-') + ' gal'}</span>
      </div>

      <div style={{ background: 'var(--panel)', border: '1px solid var(--hair)', borderRadius: 'var(--r)', padding: '15px 18px', marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <Ring size={86} label='Reef Score' value={snap?.reef_score ?? null} delta={reefDelta} color={scoreColor(snap?.reef_score ?? null)} sub={(inRangeCount || offCount) ? inRangeCount + ' in range . ' + offCount + ' off' : undefined} />
          <Ring size={86} label='Stability' value={snap?.stability_score ?? null} delta={stabDelta} color={scoreColor(snap?.stability_score ?? null)} />
        </div>
        <div style={{ display: 'flex', gap: 22, alignItems: 'center', flexWrap: 'wrap' }}>
          {anyDevice ? (
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
              {ctrl ? <Dot label={(ctrl.controller_type === 'apex' ? 'Apex' : ctrl.controller_type ?? 'Controller')} online={apexOnline} /> : null}
              {hub ? <Dot label='Hub' online={hubOnline} /> : null}
              {outletTotal ? <Dot label={outletOnline + '/' + outletTotal + ' outlets'} online={outletOnline === outletTotal} partial={outletOnline > 0 && outletOnline < outletTotal} /> : null}
            </div>
          ) : null}
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 12, color: 'var(--mid)' }}>Community rank</div>
            <div style={{ fontSize: 20, fontWeight: 700, marginTop: 2 }}>{snap?.community_rank ? '#' + snap.community_rank : '-'}</div>
            <div style={{ fontSize: 11.5, color: 'var(--dim)' }}>{snap?.community_total ? 'of ' + snap.community_total : ''}{rankPct ? '  .  top ' + rankPct + '%' : ''}</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 14, marginTop: 14, alignItems: 'stretch' }}>
        <div style={{ background: 'var(--panel)', border: '1px solid var(--hair)', borderRadius: 'var(--r)', padding: '15px 17px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 7 }}>
            <span style={{ fontSize: 13, color: 'var(--mid)' }}>Worth a look</span>
            {adv ? <span style={{ fontSize: 11, color: urgColor, fontWeight: 600 }}>{(adv.urgency ?? 'low') + ' priority'}</span> : null}
          </div>
          {adv ? (
            <div>
              {adv.overall ? <div style={{ fontSize: 12.5, color: 'var(--mid)', marginBottom: 8, lineHeight: 1.45 }}>{clip(adv.overall, 130)}</div> : null}
              {advItems.map((it, i) => (
                <div key={i} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', padding: '7px 0', borderTop: '1px solid var(--hair)' }}>
                  <span style={{ width: 7, height: 7, borderRadius: 9, marginTop: 5, flex: 'none', background: (it.priority ?? 9) <= 1 ? 'var(--amber)' : 'var(--royal)' }} />
                  <div>
                    <div style={{ fontSize: 12.5, color: 'var(--hi)', fontWeight: 600 }}>{it.title}</div>
                    <div style={{ fontSize: 11.5, color: 'var(--mid)', marginTop: 1, lineHeight: 1.4 }}>{clip(it.detail, 110)}</div>
                  </div>
                </div>
              ))}
              {adv.watch_this_week ? <div style={{ fontSize: 11.5, color: 'var(--dim)', marginTop: 8, borderTop: '1px solid var(--hair)', paddingTop: 8, lineHeight: 1.4 }}>{'This week: ' + clip(adv.watch_this_week, 110)}</div> : null}
            </div>
          ) : (
            <div>
              {fallbackItems.length ? fallbackItems.slice(0, 4).map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', padding: '6px 0', fontSize: 12.5 }}>
                  <span style={{ width: 7, height: 7, borderRadius: 9, background: a.level === 'bad' ? 'var(--bad)' : 'var(--amber)', marginTop: 5, flex: 'none' }} />
                  <span>{a.text}</span>
                </div>
              )) : (<div style={{ display: 'flex', gap: 9, alignItems: 'center', fontSize: 12.5, color: 'var(--mid)' }}><span style={{ width: 7, height: 7, borderRadius: 9, background: 'var(--good)' }} />Everything looks good right now.</div>)}
              <div style={{ fontSize: 11.5, color: 'var(--dim)', marginTop: 10, borderTop: '1px solid var(--hair)', paddingTop: 8, lineHeight: 1.4 }}>Turn on Reef AI Advisor to get this broken down with personalized steps.</div>
            </div>
          )}
        </div>

        <div style={{ background: 'var(--panel)', border: '1px solid var(--hair)', borderRadius: 'var(--r)', padding: '15px 17px' }}>
          <div style={{ fontSize: 13, color: 'var(--mid)', marginBottom: 4 }}>Up next</div>
          {reminders.length ? reminders.map((r, i) => {
            const dl = dueLabel(r.next_due as string, r.snoozed_until as string);
            return (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderTop: i ? '1px solid var(--hair)' : 'none', fontSize: 13 }}>
                <span>{String(r.name)} <span style={{ color: 'var(--dim)', fontSize: 11.5 }}>{'every ' + Number(r.frequency_days) + 'd'}</span></span>
                <span style={{ color: dl.color, fontSize: 12.5, fontWeight: 600 }}>{dl.text}</span>
              </div>
            );
          }) : <div style={{ fontSize: 12.5, color: 'var(--dim)' }}>No reminders set yet.</div>}

          <div style={{ borderTop: '1px solid var(--hair)', marginTop: 12, paddingTop: 11 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
              <span style={{ fontSize: 13, color: 'var(--mid)' }}>Water changes</span>
              {wcUntil != null ? <span style={{ fontSize: 11.5, fontWeight: 600, color: wcUntil < 0 ? 'var(--amber)' : 'var(--mid)' }}>{wcUntil < 0 ? (-wcUntil) + 'd past due' : wcUntil === 0 ? 'due today' : 'next in ' + wcUntil + 'd'}</span> : null}
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span style={{ fontSize: 24, fontWeight: 700, color: 'var(--hi)' }}>{wcLastDays != null ? wcLastDays : '-'}</span>
              <span style={{ fontSize: 12, color: 'var(--mid)' }}>{'days since last change' + (wcPct != null ? ' . ' + wcPct + '%' : '')}</span>
            </div>
            <div style={{ fontSize: 11.5, color: 'var(--dim)', marginTop: 4, lineHeight: 1.4 }}>{cadenceText}</div>
            {recentGaps.length ? (
              <svg viewBox='0 0 100 36' width='100%' height={32} preserveAspectRatio='none' style={{ marginTop: 8, display: 'block' }}>
                {recentGaps.map((g, i) => {
                  const bw = 100 / recentGaps.length;
                  const h = Math.max(2, (g / gmax) * 28);
                  const tgt = wcTargetDays ?? 14;
                  const col = g <= tgt + 1 ? '#36D89B' : g <= tgt * 1.4 ? '#F6A623' : '#FF5D5D';
                  return <rect key={i} x={(i * bw + bw * 0.18).toFixed(1)} y={(32 - h).toFixed(1)} width={(bw * 0.64).toFixed(1)} height={h.toFixed(1)} fill={col} />;
                })}
                {wcTargetDays ? <line x1={0} x2={100} y1={(32 - (wcTargetDays / gmax) * 28).toFixed(1)} y2={(32 - (wcTargetDays / gmax) * 28).toFixed(1)} stroke='rgba(143,161,182,.45)' strokeWidth={0.7} strokeDasharray='2 2' /> : null}
              </svg>
            ) : null}
            <div style={{ fontSize: 10.5, color: 'var(--dim)', marginTop: 6 }}>{'days between changes' + (wcTargetDays ? ' . dashed = target ' + wcTargetDays + 'd' : '')}</div>
          </div>
        </div>
      </div>

      <div style={{ fontSize: 13, color: 'var(--mid)', margin: '20px 0 10px' }}>Latest parameters</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
        {KEYS.map((k) => {
          const s = series[k], tg = TARGETS[k];
          const last = s.length ? s[s.length - 1] : null;
          const before = s.length > 1 ? s[s.length - 2] : null;
          const sp = spark(s, tg.lo, tg.hi);
          const st: Stat3 | null = last ? statusOf(last.v, tg.lo, tg.hi) : null;
          const dec = DEC[k] ?? 1;
          const delta = last && before ? last.v - before.v : null;
          const agg = stats30(s);
          const span = (tg.hi - tg.lo) || 1;
          const rel = agg ? agg.sd / span : 0;
          const stabWord = !agg ? '' : rel <= 0.15 ? 'stable' : rel <= 0.4 ? 'steady' : 'variable';
          const stabColor = !agg ? 'var(--dim)' : rel <= 0.15 ? 'var(--good)' : rel <= 0.4 ? 'var(--mid)' : 'var(--amber)';
          const pillBg = st === 'good' ? 'rgba(125,165,210,.10)' : st === 'watch' ? 'rgba(246,166,35,.14)' : 'rgba(255,93,93,.14)';
          const pillFg = st === 'good' ? 'var(--mid)' : st === 'watch' ? 'var(--amber)' : 'var(--bad)';
          return (
            <div key={k} style={{ background: 'var(--panel)', border: '1px solid ' + (st ? STATUS_EDGE[st] : 'var(--hair)'), borderRadius: 14, padding: '15px 17px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12.5, color: 'var(--mid)' }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: tg.color, flex: 'none' }} />{tg.label}
                </span>
                {st ? <span style={{ fontSize: 10.5, fontWeight: 600, color: pillFg, background: pillBg, padding: '3px 8px', borderRadius: 6 }}>{pillText(last!.v, tg.lo, tg.hi)}</span> : null}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 7, marginTop: 8 }}>
                <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.5px', color: valueColor(st) }}>{last ? last.v : '-'}</span>
                <span style={{ fontSize: 12.5, color: 'var(--dim)' }}>{tg.unit}</span>
                {delta != null && Math.abs(delta) > 1e-9 ? <span style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--mid)' }}>{(delta > 0 ? '+' : '') + delta.toFixed(dec)}</span> : null}
              </div>
              {last ? <RangeBar v={last.v} lo={tg.lo} hi={tg.hi} /> : null}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 11, fontSize: 12 }}>
                <span style={{ color: 'var(--dim)' }}>30d avg <span style={{ color: 'var(--hi)', fontWeight: 600 }}>{agg ? agg.avg.toFixed(dec) : '-'}</span></span>
                {agg ? <span style={{ color: stabColor, fontWeight: 600 }}>{stabWord} <span style={{ color: 'var(--dim)', fontWeight: 400 }}>{String.fromCharCode(177) + agg.sd.toFixed(dec)}</span></span> : null}
              </div>
              {sp ? (
                <svg viewBox='0 0 120 36' width='100%' height={34} preserveAspectRatio='none' style={{ marginTop: 11, display: 'block' }}>
                  <rect x={0} y={Math.min(sp.bandTop, sp.bandBot)} width={120} height={Math.abs(sp.bandBot - sp.bandTop)} fill='rgba(54,216,155,.07)' />
                  <path d={sp.path} fill='none' stroke={tg.color} strokeWidth={1.8} />
                </svg>
              ) : <div style={{ height: 45 }} />}
              <div style={{ fontSize: 10.5, color: 'var(--dim)', marginTop: 9 }}>{'target ' + tg.lo + String.fromCharCode(8211) + tg.hi + (last ? ' . ' + relAge(last.t) : '')}</div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 24, background: 'var(--panel)', border: '1px solid var(--hair)', borderRadius: 'var(--r)', padding: '18px 20px' }}>
        <div style={{ fontSize: 13, color: 'var(--mid)', marginBottom: 12 }}>Trends</div>
        <TrendChart data={series} targets={TARGETS} />
      </div>
    </div>
  );
}

function Dot({ label, online, partial }: { label: string; online: boolean; partial?: boolean }) {
  const col = online ? 'var(--good)' : partial ? 'var(--amber)' : 'var(--dim)';
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--mid)' }}>
      <span style={{ width: 8, height: 8, borderRadius: 9, background: col, flex: 'none', boxShadow: online ? '0 0 0 3px rgba(54,216,155,.16)' : 'none' }} />{label}
    </span>
  );
}

function Ring({ label, value, delta, color, sub, size = 108 }: { label: string; value: number | null; delta: number | null; color: string; sub?: string; size?: number }) {
  const v = value ?? 0;
  const sw = size >= 100 ? 9 : 8;
  const r = (size - sw) / 2 - 3;
  const cx = size / 2;
  const c = 2 * Math.PI * r;
  const off = c - (Math.max(0, Math.min(100, v)) / 100) * c;
  const big = size >= 100 ? 24 : 20;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <svg width={size} height={size} viewBox={'0 0 ' + size + ' ' + size}>
        <circle cx={cx} cy={cx} r={r} fill='none' stroke='var(--raised)' strokeWidth={sw} />
        <circle cx={cx} cy={cx} r={r} fill='none' stroke={color} strokeWidth={sw} strokeLinecap='round' strokeDasharray={c} strokeDashoffset={off} transform={'rotate(-90 ' + cx + ' ' + cx + ')'} />
        <text x={cx} y={cx - 1} textAnchor='middle' fontSize={big} fontWeight={700} fill='var(--hi)'>{value == null ? '-' : Math.round(v)}</text>
        <text x={cx} y={cx + 13} textAnchor='middle' fontSize={8.5} fill='var(--mid)'>OF 100</text>
      </svg>
      <div>
        <div style={{ fontSize: 12.5, color: 'var(--mid)' }}>{label}</div>
        {sub ? <div style={{ fontSize: 11, color: 'var(--dim)', marginTop: 2 }}>{sub}</div> : null}
        {delta != null && delta !== 0 ? (<div style={{ fontSize: 12, marginTop: 3, color: delta > 0 ? 'var(--good)' : 'var(--amber)' }}>{(delta > 0 ? '+' : '') + delta + ' vs prev'}</div>) : null}
      </div>
    </div>
  );
}

function RangeBar({ v, lo, hi }: { v: number; lo: number; hi: number }) {
  const span = hi - lo || 1;
  const dlo = lo - span * 0.6, dhi = hi + span * 0.6, dspan = dhi - dlo;
  const clamp = (x: number) => Math.max(0, Math.min(1, x));
  const pos = clamp((v - dlo) / dspan);
  const bandL = clamp((lo - dlo) / dspan), bandR = clamp((hi - dlo) / dspan);
  const st = statusOf(v, lo, hi);
  return (
    <div style={{ position: 'relative', height: 7, background: 'var(--raised)', borderRadius: 4, marginTop: 10 }}>
      <div style={{ position: 'absolute', left: (bandL * 100).toFixed(1) + '%', width: ((bandR - bandL) * 100).toFixed(1) + '%', top: 0, bottom: 0, background: 'rgba(54,216,155,.20)', borderRadius: 4 }} />
      <div style={{ position: 'absolute', left: 'calc(' + (pos * 100).toFixed(1) + '% - 3px)', top: -2, width: 6, height: 11, borderRadius: 2, background: STATUS_COLOR[st] }} />
    </div>
  );
}
