'use client';
import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { ResponsiveContainer, ComposedChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceArea, ReferenceLine, Brush } from 'recharts';
import { PARAMS, PMAP, statusOf, type LogRow, type ParamKey, type Target } from '@/lib/reef';

/* ───────────── types ───────────── */
type AdvItem = { title?: string; detail?: string; priority?: number; category?: string; evidence?: string };
export type DashData = {
  tank: { id: string; name: string; type: string; gallons: number | null; sump: number | null; setupDate: string | null; salt: string | null; refugium: boolean; macro: string | null; isPublic: boolean; rock: string | null };
  logs: LogRow[];
  targets: Record<ParamKey, Target>;
  selected: ParamKey[];
  scores: { t: number; reef: number | null; stab: number | null; rank: number | null; total: number | null }[];
  events: { t: number; type: string; label: string }[];
  advisor: { overall?: string; urgency?: string; positive?: string; watch_this_week?: string; action_items?: AdvItem[]; at: string | null } | null;
  reminders: { name: string; every: number | null; nextDue: string | null; snoozed: string | null }[];
  wcSched: { frequency?: string; percent_change?: number; last_completed?: string; next_due?: string } | null;
  wcs: { t: number; pct: number | null; gal: number | null }[];
  livestock: { fish: number; coral: number; invert: number; other: number; recent: { name: string; type: string; t: number }[] };
  equipment: Record<string, number>;
  dosing: { name: string; param: string; amount: number | null; unit: string; method: string }[];
  lights: { name: string; hours: number | null }[];
  devices: { apex: { label: string; online: boolean; lastSync: string | null } | null; hub: { online: boolean } | null; outlets: { total: number; online: number } | null };
};
type Pt = { t: number; v: number };

/* ───────────── helpers ───────────── */
const DAY = 86400000;
const RANGES = [{ k: '30', label: '30D', days: 30 }, { k: '90', label: '90D', days: 90 }, { k: '180', label: '6M', days: 180 }, { k: '365', label: '1Y', days: 365 }, { k: 'all', label: 'All', days: 0 }];
const EVENT_META: Record<string, { color: string; label: string }> = {
  wc: { color: '#5B8DEF', label: 'Water change' }, live: { color: '#36D89B', label: 'Livestock' },
  equip: { color: '#A78BFA', label: 'Equipment' }, dose: { color: '#F6A623', label: 'Dosing change' },
};
const TYPE_LABEL: Record<string, string> = { mixed: 'Mixed reef', sps: 'SPS dominant', lps: 'LPS dominant', softie: 'Soft coral', nano: 'Nano reef', ulns: 'ULNS', fish_only: 'Fish only', frag: 'Frag tank', quarantine: 'Quarantine' };
const FREQ: Record<string, number> = { daily: 1, weekly: 7, biweekly: 14, every_two_weeks: 14, triweekly: 21, every_three_weeks: 21, monthly: 30 };
const freqLabel = (f?: string) => { const t = (f ?? '').replace(/_/g, ' '); return t ? t[0].toUpperCase() + t.slice(1) : 'Scheduled'; };
const GRID = 'rgba(125,165,210,.08)';
const AXIS = '#566679';

const fv = (v: number | null | undefined, dec: number) => (v == null || !Number.isFinite(v) ? '–' : String(Number(v.toFixed(dec))));
const slopeFmt = (s: number | null | undefined, dec: number) => { if (s == null) return '–'; const d = Math.min(3, dec + 1); const r = Number(Math.abs(s).toFixed(d)); return r === 0 ? 'flat' : (s > 0 ? '+' : '−') + r; };
const fmtDate = (t: number) => new Date(t).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
const fmtDateY = (t: number) => new Date(t).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
const fmtTime = (t: number) => new Date(t).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
const daysSince = (t: number) => Math.floor((Date.now() - t) / DAY);
const rel = (t: number) => { const d = daysSince(t); return d <= 0 ? 'today' : d === 1 ? 'yesterday' : d < 60 ? d + 'd ago' : Math.round(d / 30) + 'mo ago'; };
const parseDay = (s?: string | null) => (s ? new Date(s.length <= 10 ? s + 'T12:00:00' : s).getTime() : null);
const dayKey = (t: number) => { const d = new Date(t); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); };

function series(logs: LogRow[], k: ParamKey): Pt[] {
  const out: Pt[] = [];
  for (const l of logs) { const v = l[k]; if (v != null && Number.isFinite(v)) out.push({ t: l.t, v }); }
  return out;
}
function regress(pts: Pt[]) {
  if (pts.length < 3) return null;
  const t0 = pts[0].t, xs = pts.map((p) => (p.t - t0) / DAY), ys = pts.map((p) => p.v);
  const n = pts.length, mx = xs.reduce((a, b) => a + b, 0) / n, my = ys.reduce((a, b) => a + b, 0) / n;
  let num = 0, den = 0;
  for (let i = 0; i < n; i++) { num += (xs[i] - mx) * (ys[i] - my); den += (xs[i] - mx) ** 2; }
  if (!den) return null;
  const slope = num / den;
  return { t0, slope, at: (t: number) => my + slope * ((t - t0) / DAY - mx) };
}
function stats(pts: Pt[], tg: Target) {
  const n = pts.length;
  if (!n) return null;
  const vs = pts.map((p) => p.v);
  const avg = vs.reduce((a, b) => a + b, 0) / n;
  const sd = Math.sqrt(vs.reduce((a, b) => a + (b - avg) ** 2, 0) / n);
  const inRange = vs.filter((v) => v >= tg.lo && v <= tg.hi).length;
  const reg = regress(pts);
  return { n, last: pts[n - 1], prev: n > 1 ? pts[n - 2] : null, avg, sd, min: Math.min(...vs), max: Math.max(...vs), inPct: Math.round((inRange / n) * 100), slope: reg?.slope ?? null };
}
function domainFor(pts: Pt[], tg: Target, extra: number[] = []): [number, number] {
  const vs = [...pts.map((p) => p.v), tg.lo, tg.hi, ...extra];
  let lo = Math.min(...vs), hi = Math.max(...vs);
  const pad = (hi - lo) * 0.12 || Math.abs(hi) * 0.05 || 1;
  lo -= pad; hi += pad;
  if (lo < 0 && Math.min(...vs) >= 0) lo = 0;
  return [lo, hi];
}
const stColor = (s: 'good' | 'watch' | 'bad' | null) => (s === 'bad' ? 'var(--bad)' : s === 'watch' ? 'var(--amber)' : s === 'good' ? 'var(--good)' : 'var(--dim)');

/* ───────────── main ───────────── */
export default function DashboardClient({ data }: { data: DashData }) {
  const [ready, setReady] = useState(false);
  const [range, setRange] = useState('90');
  const [full, setFull] = useState(false);
  const [focus, setFocus] = useState<ParamKey | null>(null);

  useEffect(() => {
    setReady(true);
    try {
      const r = localStorage.getItem('dash.range'); if (r && RANGES.some((x) => x.k === r)) setRange(r);
      if (localStorage.getItem('dash.full') === '1') setFull(true);
    } catch { /* storage blocked */ }
  }, []);
  useEffect(() => {
    if (!ready) return;
    document.documentElement.dataset.portalFull = full ? '1' : '';
    try { localStorage.setItem('dash.full', full ? '1' : '0'); } catch { /* ignore */ }
    return () => { document.documentElement.dataset.portalFull = ''; };
  }, [full, ready]);
  const pickRange = (k: string) => { setRange(k); try { localStorage.setItem('dash.range', k); } catch { /* ignore */ } };

  const days = RANGES.find((r) => r.k === range)?.days ?? 90;
  const cutoff = days ? Date.now() - days * DAY : 0;
  const logs = useMemo(() => data.logs.filter((l) => l.t >= cutoff), [data.logs, cutoff]);

  // Params to show: the user's tracked set first, then any other param with readings in range.
  const wallKeys = useMemo(() => {
    const has = (k: ParamKey) => logs.some((l) => l[k] != null);
    const extra = PARAMS.map((p) => p.key).filter((k) => !data.selected.includes(k) && has(k));
    return [...data.selected, ...extra];
  }, [logs, data.selected]);

  if (!ready) return <div className='dash'><div className='dash-loading'>Loading your reef data…</div></div>;

  return (
    <div className='dash'>
      <Header data={data} range={range} setRange={pickRange} full={full} setFull={setFull} />
      <KpiStrip data={data} />

      <div className='dash-sec-head'>
        <h2>Parameters</h2>
        <span>{logs.length} readings in {RANGES.find((r) => r.k === range)?.label === 'All' ? 'all time' : 'the last ' + (RANGES.find((r) => r.k === range)?.label ?? '')} · click any chart to open it full screen</span>
      </div>
      <div className='dash-wall'>
        {wallKeys.map((k) => <ParamCard key={k} k={k} pts={series(logs, k)} tg={data.targets[k]} onOpen={() => setFocus(k)} />)}
      </div>

      <div className='dash-lower'>
        <Panel className='span-8' title='Reef Score & Stability' sub='daily snapshots'><ScoresChart scores={data.scores.filter((s) => s.t >= cutoff)} /></Panel>
        <Panel className='span-4' title='Testing consistency' sub='last 26 weeks'><Heatmap logs={data.logs} /></Panel>
        <Panel className='span-5' title='Reef AI Advisor' right={data.advisor?.urgency ? <Urgency u={data.advisor.urgency} /> : null}><Advisor adv={data.advisor} /></Panel>
        <Panel className='span-4' title='Up next'><UpNext data={data} /></Panel>
        <Panel className='span-3' title='Tank profile'><Profile data={data} /></Panel>
        <Panel className='span-5' title='Recent activity'><Activity data={data} logs={logs} /></Panel>
        <Panel className='span-7' title='Readings' right={<CsvButton logs={logs} keys={wallKeys} name={data.tank.name} />}><ReadingsTable logs={logs} keys={wallKeys} targets={data.targets} /></Panel>
      </div>

      {focus ? <Focus data={data} initial={focus} range={range} setRange={pickRange} onClose={() => setFocus(null)} /> : null}
    </div>
  );
}

/* ───────────── header + KPIs ───────────── */
function Header({ data, range, setRange, full, setFull }: { data: DashData; range: string; setRange: (k: string) => void; full: boolean; setFull: (b: boolean) => void }) {
  const t = data.tank;
  const age = t.setupDate ? Math.max(0, Math.floor((Date.now() - (parseDay(t.setupDate) ?? Date.now())) / (30.44 * DAY))) : null;
  const facts = [
    TYPE_LABEL[t.type] ?? t.type,
    t.gallons ? t.gallons + ' gal' + (t.sump ? ' + ' + t.sump + ' gal sump' : '') : null,
    age != null ? (age < 1 ? 'under 1 month' : age >= 24 ? Math.floor(age / 12) + ' years' : age + ' months') : null,
    t.salt,
    t.refugium ? 'Refugium' + (t.macro ? ' · ' + t.macro : '') : null,
  ].filter(Boolean);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'f' && !(e.target as HTMLElement)?.closest('input,textarea,select')) setFull(!full); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [full, setFull]);
  return (
    <div className='dash-head'>
      <div style={{ minWidth: 0 }}>
        <h1>{t.name}</h1>
        <div className='dash-facts'>{facts.map((f, i) => <span key={i}>{f}</span>)}</div>
      </div>
      <div className='dash-controls'>
        <div className='seg' role='tablist' aria-label='Date range'>
          {RANGES.map((r) => <button key={r.k} role='tab' aria-selected={range === r.k} className={range === r.k ? 'on' : ''} onClick={() => setRange(r.k)}>{r.label}</button>)}
        </div>
        <button className='ghost-btn' onClick={() => setFull(!full)} title='Toggle full screen (F)'>
          <svg width='14' height='14' viewBox='0 0 16 16' fill='none' stroke='currentColor' strokeWidth='1.6' aria-hidden>{full ? <path d='M6 1v5H1M10 1v5h5M6 15v-5H1M10 15v-5h5' /> : <path d='M1 6V1h5M15 6V1h-5M1 10v5h5M15 10v5h-5' />}</svg>
          {full ? 'Exit full screen' : 'Full screen'}
        </button>
      </div>
    </div>
  );
}

function KpiStrip({ data }: { data: DashData }) {
  const sc = data.scores;
  const last = sc.length ? sc[sc.length - 1] : null;
  const weekAgo = [...sc].reverse().find((s) => last && s.t <= last.t - 6 * DAY) ?? null;
  const d = (a: number | null | undefined, b: number | null | undefined) => (a != null && b != null ? Math.round(a - b) : null);

  const latest: Partial<Record<ParamKey, number>> = {};
  for (const k of data.selected) { for (let i = data.logs.length - 1; i >= 0; i--) { const v = data.logs[i][k]; if (v != null) { latest[k] = v; break; } } }
  const tracked = data.selected.filter((k) => latest[k] != null);
  const inRange = tracked.filter((k) => statusOf(latest[k]!, data.targets[k]) === 'good').length;
  const offList = tracked.filter((k) => statusOf(latest[k]!, data.targets[k]) !== 'good').map((k) => PMAP[k].short);

  const manual = data.logs.filter((l) => l.source !== 'apex_auto');
  const lastLog = manual.length ? manual[manual.length - 1].t : null;
  const tests30 = new Set(data.logs.filter((l) => l.t >= Date.now() - 30 * DAY && l.source !== 'apex_auto').map((l) => dayKey(l.t))).size;
  const lastWc = data.wcs.length ? data.wcs[data.wcs.length - 1].t : null;
  const wcDue = parseDay(data.wcSched?.next_due);
  const wcIn = wcDue != null ? Math.ceil((wcDue - Date.now()) / DAY) : null;
  const rankPct = last?.rank && last?.total ? Math.max(1, Math.round((last.rank / last.total) * 100)) : null;
  const dv = data.devices;

  return (
    <div className='kpis'>
      <Kpi label='Reef Score' value={last?.reef != null ? String(Math.round(last.reef)) : '–'} unit='/100' delta={d(last?.reef, weekAgo?.reef)} tone={scoreTone(last?.reef)} />
      <Kpi label='Stability' value={last?.stab != null ? String(Math.round(last.stab)) : '–'} unit='/100' delta={d(last?.stab, weekAgo?.stab)} tone={scoreTone(last?.stab)} />
      <Kpi label='Community rank' value={last?.rank ? '#' + last.rank : '–'} sub={last?.total ? 'of ' + last.total + (rankPct ? ' · top ' + rankPct + '%' : '') : data.tank.isPublic ? 'ranks daily' : 'tank is private'} />
      <Kpi label='In range' value={tracked.length ? inRange + '/' + tracked.length : '–'} sub={offList.length ? 'off: ' + offList.join(', ') : tracked.length ? 'all tracked params' : 'no readings yet'} tone={offList.length ? 'amber' : tracked.length ? 'good' : undefined} />
      <Kpi label='Last test' value={lastLog ? rel(lastLog) : '–'} sub={tests30 + ' test day' + (tests30 === 1 ? '' : 's') + ' in 30d'} tone={lastLog && daysSince(lastLog) > 10 ? 'amber' : undefined} />
      <Kpi label='Water change' value={lastWc ? rel(lastWc) : '–'} sub={wcIn == null ? (data.wcSched ? 'schedule set' : 'no schedule') : wcIn < 0 ? (-wcIn) + 'd past due' : wcIn === 0 ? 'due today' : 'next in ' + wcIn + 'd'} tone={wcIn != null && wcIn < 0 ? 'amber' : undefined} />
      {dv.apex || dv.hub || dv.outlets ? (
        <div className='kpi'>
          <div className='kpi-label'>Devices</div>
          <div className='dev-list'>
            {dv.apex ? <Dot on={dv.apex.online} label={dv.apex.label} /> : null}
            {dv.hub ? <Dot on={dv.hub.online} label='Hub' /> : null}
            {dv.outlets ? <Dot on={dv.outlets.online === dv.outlets.total} partial={dv.outlets.online > 0} label={dv.outlets.online + '/' + dv.outlets.total + ' outlets'} /> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
const scoreTone = (s: number | null | undefined) => (s == null ? undefined : s >= 70 ? 'good' : s >= 50 ? 'amber' : 'bad');
function Kpi({ label, value, unit, sub, delta, tone }: { label: string; value: string; unit?: string; sub?: string; delta?: number | null; tone?: string }) {
  return (
    <div className='kpi'>
      <div className='kpi-label'>{label}</div>
      <div className='kpi-val' style={{ color: tone === 'good' ? 'var(--good)' : tone === 'amber' ? 'var(--amber)' : tone === 'bad' ? 'var(--bad)' : 'var(--hi)' }}>
        {value}{unit ? <small>{unit}</small> : null}
        {delta ? <em className={delta > 0 ? 'up' : 'down'}>{(delta > 0 ? '▲ ' : '▼ ') + Math.abs(delta)}<i> 7d</i></em> : null}
      </div>
      {sub ? <div className='kpi-sub'>{sub}</div> : null}
    </div>
  );
}
function Dot({ on, partial, label }: { on: boolean; partial?: boolean; label: string }) {
  return <span className='dev'><i style={{ background: on ? 'var(--good)' : partial ? 'var(--amber)' : 'var(--dim)', boxShadow: on ? '0 0 0 3px rgba(54,216,155,.16)' : 'none' }} />{label}</span>;
}

/* ───────────── parameter card ───────────── */
function ParamCard({ k, pts, tg, onOpen }: { k: ParamKey; pts: Pt[]; tg: Target; onOpen: () => void }) {
  const p = PMAP[k];
  const s = stats(pts, tg);
  const st = s ? statusOf(s.last.v, tg) : null;
  const delta = s?.prev ? s.last.v - s.prev.v : null;
  const dom = domainFor(pts, tg);
  const showDots = pts.length <= 60;
  const slopeTxt = s?.slope != null ? (slopeFmt(s.slope, p.dec) === 'flat' ? 'flat' : slopeFmt(s.slope, p.dec) + '/day') : '–';
  const drifting = s?.slope != null && Math.abs(s.slope) * 14 > (tg.hi - tg.lo) * 0.5;
  return (
    <button className={'pcard st-' + (st ?? 'none')} onClick={onOpen} aria-label={'Open ' + p.label + ' chart'}>
      <div className='pcard-top'>
        <span className='pcard-name'><i style={{ background: p.color }} />{p.label}</span>
        {st ? <span className={'pill ' + st}>{s!.last.v < tg.lo ? 'low' : s!.last.v > tg.hi ? 'high' : 'in range'}</span> : <span className='pill none'>no data</span>}
      </div>
      <div className='pcard-val'>
        <b style={{ color: st && st !== 'good' ? stColor(st) : 'var(--hi)' }}>{s ? fv(s.last.v, p.dec) : '–'}</b>
        <span>{p.unit}</span>
        {delta != null && Math.abs(delta) > 1e-9 ? <em>{(delta > 0 ? '▲ ' : '▼ ') + fv(Math.abs(delta), p.dec)}</em> : null}
      </div>
      <div className='pcard-chart'>
        {pts.length > 1 ? (
          <ResponsiveContainer width='100%' height='100%'>
            <ComposedChart data={pts} margin={{ top: 4, right: 2, left: 2, bottom: 0 }}>
              <XAxis dataKey='t' type='number' scale='time' domain={['dataMin', 'dataMax']} hide />
              <YAxis domain={dom} hide />
              <ReferenceArea y1={tg.lo} y2={tg.hi} fill='#36D89B' fillOpacity={0.08} stroke='none' ifOverflow='extendDomain' />
              <Tooltip content={<MiniTip unit={p.unit} dec={p.dec} tg={tg} />} cursor={{ stroke: 'rgba(143,161,182,.35)' }} isAnimationActive={false} />
              <Area type='monotone' dataKey='v' stroke={p.color} strokeWidth={2} fill={p.color} fillOpacity={0.06} isAnimationActive={false}
                dot={showDots ? ((dp: any) => <circle key={dp.index} cx={dp.cx} cy={dp.cy} r={dp.payload.v < tg.lo || dp.payload.v > tg.hi ? 3 : 2} fill={dp.payload.v < tg.lo || dp.payload.v > tg.hi ? '#FF5D5D' : p.color} stroke='none' />) : false}
                activeDot={{ r: 4, fill: '#EAF1F8', stroke: p.color }} />
            </ComposedChart>
          </ResponsiveContainer>
        ) : <div className='pcard-empty'>{pts.length === 1 ? 'One reading in this range' : 'No readings in this range'}</div>}
      </div>
      <div className='pcard-stats'>
        <span><small>avg</small>{s ? fv(s.avg, p.dec) : '–'}</span>
        <span><small>range</small>{s ? fv(s.min, p.dec) + '–' + fv(s.max, p.dec) : '–'}</span>
        <span className={drifting ? 'warn' : ''}><small>trend</small>{slopeTxt}</span>
        <span><small>in range</small>{s ? s.inPct + '%' : '–'}</span>
      </div>
      <div className='pcard-foot'>target {fv(tg.lo, p.dec)}–{fv(tg.hi, p.dec)} {p.unit}{s ? ' · ' + s.n + ' readings · ' + rel(s.last.t) : ''}</div>
    </button>
  );
}
function MiniTip({ active, payload, unit, dec, tg }: any) {
  if (!active || !payload?.length) return null;
  const pt = payload[0].payload as Pt;
  const out = pt.v < tg.lo || pt.v > tg.hi;
  return <div className='tip'><div className='tip-d'>{fmtDateY(pt.t)} · {fmtTime(pt.t)}</div><b style={{ color: out ? '#FF8585' : '#EAF1F8' }}>{fv(pt.v, dec)} {unit}</b></div>;
}

/* ───────────── full-screen focus view ───────────── */
function Focus({ data, initial, range, setRange, onClose }: { data: DashData; initial: ParamKey; range: string; setRange: (k: string) => void; onClose: () => void }) {
  const [k, setK] = useState<ParamKey>(initial);
  const [overlay, setOverlay] = useState<ParamKey | ''>('');
  const [showEv, setShowEv] = useState(true);
  const [showMa, setShowMa] = useState(false);
  const [showTrend, setShowTrend] = useState(true);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow; document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [onClose]);

  const days = RANGES.find((r) => r.k === range)?.days ?? 90;
  const cutoff = days ? Date.now() - days * DAY : 0;
  const logs = data.logs.filter((l) => l.t >= cutoff);
  const avail = PARAMS.filter((p) => data.logs.some((l) => l[p.key] != null)).map((p) => p.key);
  const p = PMAP[k], tg = data.targets[k];
  const pts = series(logs, k);
  const s = stats(pts, tg);
  const reg = regress(pts);
  const op = overlay ? PMAP[overlay] : null;
  const events = data.events.filter((e) => e.t >= cutoff);

  const chartData = useMemo(() => {
    const ma = new Map<number, number>();
    for (let i = 0; i < pts.length; i++) { const w = pts.slice(Math.max(0, i - 6), i + 1); ma.set(pts[i].t, w.reduce((a, b) => a + b.v, 0) / w.length); }
    return logs.filter((l) => l[k] != null || (overlay && l[overlay] != null)).map((l) => ({
      t: l.t, v: l[k] ?? null, o: overlay ? (l[overlay] ?? null) : null, ma: ma.get(l.t) ?? null, tr: reg && l[k] != null ? reg.at(l.t) : null,
    }));
  }, [logs, k, overlay, pts, reg]);

  const readings = [...logs].reverse().filter((l) => l[k] != null).slice(0, 200);
  const dom = domainFor(pts, tg);

  return (
    <div className='focus' role='dialog' aria-modal='true' aria-label={p.label + ' full screen chart'}>
      <div className='focus-panel'>
        <div className='focus-bar'>
          <div className='focus-pills'>
            {avail.map((key) => (
              <button key={key} className={'fpill' + (key === k ? ' on' : '')} style={key === k ? { borderColor: PMAP[key].color, color: PMAP[key].color, background: PMAP[key].color + '1F' } : undefined} onClick={() => { setK(key); if (overlay === key) setOverlay(''); }}>
                <i style={{ background: PMAP[key].color }} />{PMAP[key].short}
              </button>
            ))}
          </div>
          <div className='focus-tools'>
            <div className='seg'>{RANGES.map((r) => <button key={r.k} className={range === r.k ? 'on' : ''} onClick={() => setRange(r.k)}>{r.label}</button>)}</div>
            <Toggle on={showEv} set={setShowEv} label='Events' />
            <Toggle on={showMa} set={setShowMa} label='7-pt avg' />
            <Toggle on={showTrend} set={setShowTrend} label='Trend' />
            <select value={overlay} onChange={(e) => setOverlay(e.target.value as ParamKey | '')} aria-label='Overlay a second parameter'>
              <option value=''>Compare with…</option>
              {avail.filter((x) => x !== k).map((x) => <option key={x} value={x}>{PMAP[x].label}</option>)}
            </select>
            <button className='ghost-btn' onClick={onClose} aria-label='Close'>Close <kbd>Esc</kbd></button>
          </div>
        </div>

        <div className='focus-stats'>
          <FStat label='Latest' value={s ? fv(s.last.v, p.dec) + ' ' + p.unit : '–'} sub={s ? rel(s.last.t) : ''} color={s ? stColor(statusOf(s.last.v, tg)) : undefined} />
          <FStat label='Target' value={fv(tg.lo, p.dec) + '–' + fv(tg.hi, p.dec)} sub={p.unit} />
          <FStat label='Average' value={s ? fv(s.avg, p.dec) : '–'} />
          <FStat label='Min / Max' value={s ? fv(s.min, p.dec) + ' / ' + fv(s.max, p.dec) : '–'} />
          <FStat label='Std dev' value={s ? '±' + fv(s.sd, Math.min(3, p.dec + 1)) : '–'} />
          <FStat label='Trend' value={slopeFmt(s?.slope, p.dec)} sub={s?.slope != null && slopeFmt(s.slope, p.dec) !== 'flat' ? p.unit + ' per day' : ''} />
          <FStat label='Time in range' value={s ? s.inPct + '%' : '–'} color={s ? (s.inPct >= 80 ? 'var(--good)' : s.inPct >= 50 ? 'var(--amber)' : 'var(--bad)') : undefined} />
          <FStat label='Readings' value={s ? String(s.n) : '0'} />
        </div>

        <div className='focus-chart'>
          {pts.length > 1 ? (
            <ResponsiveContainer width='100%' height='100%'>
              <ComposedChart data={chartData} margin={{ top: 10, right: op ? 8 : 20, left: 4, bottom: 4 }}>
                <CartesianGrid stroke={GRID} vertical={false} />
                <XAxis dataKey='t' type='number' scale='time' domain={['dataMin', 'dataMax']} tickFormatter={fmtDate} tick={{ fontSize: 11, fill: AXIS }} stroke={GRID} minTickGap={40} />
                <YAxis yAxisId='L' domain={dom} tickFormatter={(v) => fv(v, p.dec)} tick={{ fontSize: 11, fill: AXIS }} stroke={GRID} width={52} />
                {op ? <YAxis yAxisId='R' orientation='right' domain={['auto', 'auto']} tickFormatter={(v) => fv(v, op.dec)} tick={{ fontSize: 11, fill: op.color }} stroke={GRID} width={52} /> : null}
                <ReferenceArea yAxisId='L' y1={tg.lo} y2={tg.hi} fill='#36D89B' fillOpacity={0.08} stroke='#36D89B' strokeOpacity={0.25} strokeDasharray='3 3' />
                {showEv ? events.map((e, i) => <ReferenceLine key={i} yAxisId='L' x={e.t} stroke={EVENT_META[e.type]?.color ?? '#8FA1B6'} strokeDasharray='3 4' strokeOpacity={0.6} />) : null}
                <Tooltip content={<FocusTip p={p} op={op} tg={tg} events={showEv ? events : []} />} cursor={{ stroke: 'rgba(143,161,182,.4)' }} isAnimationActive={false} />
                <Area yAxisId='L' type='monotone' dataKey='v' stroke={p.color} strokeWidth={2.4} fill={p.color} fillOpacity={0.07} connectNulls isAnimationActive={false}
                  dot={pts.length <= 150 ? ((dp: any) => dp.payload.v == null ? <g key={dp.index} /> : <circle key={dp.index} cx={dp.cx} cy={dp.cy} r={dp.payload.v < tg.lo || dp.payload.v > tg.hi ? 3.4 : 2.4} fill={dp.payload.v < tg.lo || dp.payload.v > tg.hi ? '#FF5D5D' : p.color} />) : false}
                  activeDot={{ r: 5, fill: '#EAF1F8', stroke: p.color, strokeWidth: 2 }} />
                {showMa ? <Line yAxisId='L' type='monotone' dataKey='ma' stroke='#EAF1F8' strokeOpacity={0.55} strokeWidth={1.5} dot={false} connectNulls isAnimationActive={false} /> : null}
                {showTrend && reg ? <Line yAxisId='L' type='linear' dataKey='tr' stroke='#8FA1B6' strokeWidth={1.4} strokeDasharray='7 5' dot={false} connectNulls isAnimationActive={false} /> : null}
                {op ? <Line yAxisId='R' type='monotone' dataKey='o' stroke={op.color} strokeWidth={1.8} strokeDasharray='5 3' dot={{ r: 2, fill: op.color }} connectNulls isAnimationActive={false} /> : null}
                <Brush dataKey='t' height={22} stroke='#2E3A4D' fill='#0C121D' travellerWidth={9} tickFormatter={fmtDate} />
              </ComposedChart>
            </ResponsiveContainer>
          ) : <div className='pcard-empty' style={{ height: '100%' }}>Not enough {p.label.toLowerCase()} readings in this range to chart.</div>}
        </div>
        <div className='focus-legend'>
          <span><i style={{ background: p.color }} />{p.label}</span>
          <span><i style={{ background: 'rgba(54,216,155,.5)' }} />Target band</span>
          {showTrend ? <span><i className='dash' />Linear trend</span> : null}
          {op ? <span><i style={{ background: op.color }} />{op.label} (right axis)</span> : null}
          {showEv ? Object.entries(EVENT_META).map(([key, m]) => <span key={key}><i style={{ background: m.color }} />{m.label}</span>) : null}
          <span className='hint'>Drag the handles under the chart to zoom</span>
        </div>

        <div className='focus-bottom'>
          <div className='focus-list'>
            <h3>{p.label} readings <small>{readings.length}{readings.length === 200 ? '+' : ''}</small></h3>
            <div className='scroll'>
              <table>
                <thead><tr><th>Date</th><th>Time</th><th className='r'>{p.short}</th><th className='r'>Change</th><th>Source</th><th>Note</th></tr></thead>
                <tbody>
                  {readings.map((l, i) => {
                    const v = l[k]!; const nx = readings[i + 1]?.[k]; const ch = nx != null ? v - nx : null; const out = v < tg.lo || v > tg.hi;
                    return (
                      <tr key={l.t + '-' + i}>
                        <td>{fmtDateY(l.t)}</td><td className='dim'>{fmtTime(l.t)}</td>
                        <td className='r' style={{ color: out ? '#FF8585' : undefined, fontWeight: out ? 700 : 500 }}>{fv(v, p.dec)}</td>
                        <td className='r dim'>{ch == null || Math.abs(ch) < 1e-9 ? '–' : (ch > 0 ? '+' : '−') + fv(Math.abs(ch), p.dec)}</td>
                        <td className='dim'>{l.source === 'apex_auto' ? 'Apex' : l.source === 'apex_manual' ? 'Apex (manual)' : l.source === 'web' ? 'Web' : 'App'}</td>
                        <td className='dim note'>{l.notes ?? ''}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className='focus-list narrow'>
            <h3>Events in range <small>{events.length}</small></h3>
            <div className='scroll'>
              {events.length ? [...events].reverse().map((e, i) => (
                <div key={i} className='ev-row'><i style={{ background: EVENT_META[e.type]?.color ?? '#8FA1B6' }} /><span className='dim'>{fmtDate(e.t)}</span><span>{e.label}</span></div>
              )) : <div className='dim' style={{ fontSize: 12.5 }}>No water changes, livestock, equipment or dosing changes in this range.</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function FocusTip({ active, payload, label, p, op, tg, events }: any) {
  if (!active || !payload?.length) return null;
  const row = payload[0]?.payload ?? {};
  const near = (events as DashData['events']).filter((e) => Math.abs(e.t - label) < DAY * 0.75);
  return (
    <div className='tip'>
      <div className='tip-d'>{fmtDateY(label)} · {fmtTime(label)}</div>
      {row.v != null ? <div className='tip-r'><i style={{ background: p.color }} />{p.label}<b style={{ color: row.v < tg.lo || row.v > tg.hi ? '#FF8585' : undefined }}>{fv(row.v, p.dec)} {p.unit}</b></div> : null}
      {op && row.o != null ? <div className='tip-r'><i style={{ background: op.color }} />{op.label}<b>{fv(row.o, op.dec)} {op.unit}</b></div> : null}
      {near.map((e: any, i: number) => <div key={i} className='tip-r ev'><i style={{ background: EVENT_META[e.type]?.color }} />{e.label}</div>)}
    </div>
  );
}
function FStat({ label, value, sub, color }: { label: string; value: string; sub?: string; color?: string }) {
  return <div className='fstat'><small>{label}</small><b style={color ? { color } : undefined}>{value}</b>{sub ? <span>{sub}</span> : null}</div>;
}
function Toggle({ on, set, label }: { on: boolean; set: (b: boolean) => void; label: string }) {
  return <button className={'tgl' + (on ? ' on' : '')} aria-pressed={on} onClick={() => set(!on)}>{label}</button>;
}

/* ───────────── lower panels ───────────── */
function Panel({ title, sub, right, className, children }: { title: string; sub?: string; right?: ReactNode; className?: string; children: ReactNode }) {
  return (
    <section className={'dpanel ' + (className ?? '')}>
      <div className='dpanel-head'><h3>{title}{sub ? <small>{sub}</small> : null}</h3>{right}</div>
      {children}
    </section>
  );
}

function ScoresChart({ scores }: { scores: DashData['scores'] }) {
  if (scores.length < 2) return <div className='pcard-empty' style={{ height: 220 }}>Scores appear after a few days of logging.</div>;
  return (
    <>
      <div style={{ height: 240 }}>
        <ResponsiveContainer width='100%' height='100%'>
          <ComposedChart data={scores} margin={{ top: 8, right: 8, left: -6, bottom: 0 }}>
            <defs>
              <linearGradient id='reefFill' x1='0' y1='0' x2='0' y2='1'><stop offset='0%' stopColor='#2EE6CF' stopOpacity={0.28} /><stop offset='100%' stopColor='#2EE6CF' stopOpacity={0.01} /></linearGradient>
            </defs>
            <CartesianGrid stroke={GRID} vertical={false} />
            <XAxis dataKey='t' type='number' scale='time' domain={['dataMin', 'dataMax']} tickFormatter={fmtDate} tick={{ fontSize: 11, fill: AXIS }} stroke={GRID} minTickGap={40} />
            <YAxis domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} tick={{ fontSize: 11, fill: AXIS }} stroke={GRID} width={34} />
            <ReferenceLine y={70} stroke='rgba(54,216,155,.3)' strokeDasharray='3 3' />
            <Tooltip content={<ScoreTip />} isAnimationActive={false} />
            <Area type='monotone' dataKey='reef' stroke='#2EE6CF' strokeWidth={2.2} fill='url(#reefFill)' connectNulls isAnimationActive={false} dot={false} />
            <Line type='monotone' dataKey='stab' stroke='#5B8DEF' strokeWidth={2} dot={false} connectNulls isAnimationActive={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className='legend'><span><i style={{ background: '#2EE6CF' }} />Reef Score</span><span><i style={{ background: '#5B8DEF' }} />Stability</span><span><i className='dash' style={{ borderColor: 'rgba(54,216,155,.6)' }} />70 = healthy</span></div>
    </>
  );
}
function ScoreTip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  const r = payload[0].payload;
  return <div className='tip'><div className='tip-d'>{fmtDateY(label)}</div><div className='tip-r'><i style={{ background: '#2EE6CF' }} />Reef<b>{r.reef ?? '–'}</b></div><div className='tip-r'><i style={{ background: '#5B8DEF' }} />Stability<b>{r.stab ?? '–'}</b></div>{r.rank ? <div className='tip-r'>Rank<b>#{r.rank}{r.total ? ' of ' + r.total : ''}</b></div> : null}</div>;
}

function Heatmap({ logs }: { logs: LogRow[] }) {
  const WEEKS = 26, C = 13, G = 3;
  const counts = new Map<string, number>();
  for (const l of logs) {
    if (l.source === 'apex_auto') continue;
    const n = PARAMS.reduce((a, p) => a + (l[p.key] != null ? 1 : 0), 0);
    const k = dayKey(l.t); counts.set(k, Math.max(counts.get(k) ?? 0, 0) + n);
  }
  const today = new Date(); today.setHours(12, 0, 0, 0);
  const start = new Date(today); start.setDate(start.getDate() - start.getDay() - (WEEKS - 1) * 7);
  const cells: { x: number; y: number; n: number; t: number }[] = [];
  const months: { x: number; label: string }[] = [];
  let testDays = 0, gap = 0, longest = 0, lastMonth = -1;
  for (let w = 0; w < WEEKS; w++) {
    for (let d = 0; d < 7; d++) {
      const dt = new Date(start); dt.setDate(start.getDate() + w * 7 + d);
      if (dt > today) continue;
      const n = counts.get(dayKey(dt.getTime())) ?? 0;
      if (d === 0 && dt.getMonth() !== lastMonth) { months.push({ x: w * (C + G), label: dt.toLocaleDateString('en-US', { month: 'short' }) }); lastMonth = dt.getMonth(); }
      if (n) { testDays++; gap = 0; } else { gap++; longest = Math.max(longest, gap); }
      cells.push({ x: w * (C + G), y: 14 + d * (C + G), n, t: dt.getTime() });
    }
  }
  const W = WEEKS * (C + G), H = 14 + 7 * (C + G);
  const fill = (n: number) => (n === 0 ? 'var(--raised)' : n <= 2 ? 'rgba(46,230,207,.32)' : n <= 5 ? 'rgba(46,230,207,.62)' : '#2EE6CF');
  return (
    <div>
      <div style={{ overflowX: 'auto' }}>
        <svg viewBox={`0 0 ${W} ${H}`} width='100%' style={{ maxWidth: W * 1.6, display: 'block' }} role='img' aria-label={`Tested on ${testDays} days in the last 26 weeks`}>
          {months.map((m, i) => <text key={i} x={m.x} y={9} fontSize={9} fill='#566679'>{m.label}</text>)}
          {cells.map((c, i) => <rect key={i} x={c.x} y={c.y} width={C} height={C} rx={3} fill={fill(c.n)}><title>{fmtDateY(c.t) + (c.n ? ' · ' + c.n + ' values logged' : ' · no test')}</title></rect>)}
        </svg>
      </div>
      <div className='heat-sum'>
        <div><b>{testDays}</b><span>test days</span></div>
        <div><b>{(testDays / WEEKS).toFixed(1)}</b><span>per week</span></div>
        <div><b>{longest}d</b><span>longest gap</span></div>
      </div>
      <div className='legend'><span>Less</span>{[0, 1, 4, 8].map((n) => <i key={n} className='sq' style={{ background: fill(n) }} />)}<span>More values logged</span></div>
    </div>
  );
}

function Urgency({ u }: { u: string }) {
  const c = u === 'high' ? 'bad' : u === 'medium' ? 'watch' : 'good';
  return <span className={'pill ' + c}>{u} priority</span>;
}
function Advisor({ adv }: { adv: DashData['advisor'] }) {
  if (!adv) return <div className='muted-block'>No analysis yet. Open <b>Reef Pulse → Reef AI Advisor</b> in the app (Pro) and the full report shows up here.</div>;
  const items = (adv.action_items ?? []).slice().sort((a, b) => (a.priority ?? 9) - (b.priority ?? 9));
  return (
    <div className='adv'>
      {adv.overall ? <p className='adv-overall'>{adv.overall}</p> : null}
      {items.map((it, i) => (
        <div key={i} className='adv-item'>
          <span className='adv-n'>{i + 1}</span>
          <div>
            <div className='adv-t'>{it.title}{it.category ? <em>{it.category}</em> : null}</div>
            {it.detail ? <div className='adv-d'>{it.detail}</div> : null}
          </div>
        </div>
      ))}
      {adv.watch_this_week ? <div className='adv-note watch'><b>Watch this week</b>{adv.watch_this_week}</div> : null}
      {adv.positive ? <div className='adv-note good'><b>Going well</b>{adv.positive}</div> : null}
      {adv.at ? <div className='dim small'>Generated {rel(new Date(adv.at).getTime())}</div> : null}
    </div>
  );
}

function UpNext({ data }: { data: DashData }) {
  const due = (r: DashData['reminders'][number]) => {
    const sn = parseDay(r.snoozed); if (sn && sn > Date.now()) return { txt: 'snoozed', cls: 'dim', d: 999 };
    const t = parseDay(r.nextDue); if (t == null) return { txt: '', cls: 'dim', d: 998 };
    const d = Math.ceil((t - Date.now()) / DAY);
    return { txt: d < 0 ? (-d) + 'd overdue' : d === 0 ? 'due today' : d === 1 ? 'tomorrow' : 'in ' + d + 'd', cls: d <= 0 ? 'amber' : 'mid', d };
  };
  const rems = data.reminders.map((r) => ({ r, ...due(r) })).sort((a, b) => a.d - b.d);
  const times = data.wcs.map((w) => w.t);
  const uniq: number[] = []; for (const t of times) if (!uniq.length || t - uniq[uniq.length - 1] > DAY / 2) uniq.push(t);
  const gaps = uniq.slice(1).map((t, i) => Math.round((t - uniq[i]) / DAY)).slice(-10);
  const avg = gaps.length ? Math.round(gaps.reduce((a, b) => a + b, 0) / gaps.length) : null;
  const target = data.wcSched?.frequency ? FREQ[data.wcSched.frequency] ?? null : null;
  const gmax = Math.max(...gaps, target ?? 7, 1);
  const last = data.wcs.length ? data.wcs[data.wcs.length - 1] : null;
  return (
    <div>
      {rems.length ? rems.slice(0, 7).map(({ r, txt, cls }, i) => (
        <div key={i} className='row-line'><span>{r.name}{r.every ? <small>every {r.every}d</small> : null}</span><span className={cls}>{txt}</span></div>
      )) : <div className='muted-block'>No maintenance reminders yet. Add them in the app under Reminders &amp; Alerts.</div>}
      <div className='wc-block'>
        <div className='row-line' style={{ border: 'none' }}><span>Water changes</span><span className='mid'>{data.wcSched ? freqLabel(data.wcSched.frequency) + (data.wcSched.percent_change ? ' · ' + data.wcSched.percent_change + '%' : '') : 'no schedule'}</span></div>
        <div className='wc-big'><b>{last ? daysSince(last.t) : '–'}</b><span>days since last{last?.pct ? ' (' + last.pct + '%)' : ''}</span></div>
        {gaps.length ? (
          <>
            <svg viewBox='0 0 100 30' width='100%' height={34} preserveAspectRatio='none' style={{ display: 'block', marginTop: 8 }} aria-hidden>
              {gaps.map((g, i) => { const bw = 100 / gaps.length, h = Math.max(2, (g / gmax) * 27), tgt = target ?? 14; return <rect key={i} x={i * bw + bw * 0.2} y={30 - h} width={bw * 0.6} height={h} rx={1} fill={g <= tgt + 1 ? '#36D89B' : g <= tgt * 1.4 ? '#F6A623' : '#FF5D5D'} />; })}
              {target ? <line x1={0} x2={100} y1={30 - (target / gmax) * 27} y2={30 - (target / gmax) * 27} stroke='rgba(143,161,182,.5)' strokeWidth={0.6} strokeDasharray='2 2' /> : null}
            </svg>
            <div className='dim small'>Days between changes · avg {avg}d{target ? ' · target ' + target + 'd (dashed)' : ''}</div>
          </>
        ) : <div className='dim small'>Log a few water changes to see your cadence.</div>}
      </div>
    </div>
  );
}

function Profile({ data }: { data: DashData }) {
  const t = data.tank, ls = data.livestock;
  const rows: [string, string | null, boolean?][] = [
    ['Display', t.gallons ? t.gallons + ' gal' : null],
    ['Sump', t.sump ? t.sump + ' gal' : 'None'],
    ['Refugium', t.refugium ? (t.macro || 'Yes') : 'No'],
    ['Salt mix', t.salt],
    ['Rock', t.rock ? t.rock[0].toUpperCase() + t.rock.slice(1) + ' rock' : null],
    ['Community', t.isPublic ? 'Public' : 'Private'],
  ];
  const eq = Object.entries(data.equipment).sort((a, b) => b[1] - a[1]);
  const missing = rows.filter((r) => r[1] == null).map((r) => r[0]);
  return (
    <div className='profile'>
      <dl>{rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd className={v == null ? 'dim' : ''}>{v ?? 'Not set'}</dd></div>)}</dl>
      {missing.length ? <div className='hint-box'>Add {missing.join(', ').toLowerCase()} on the My Reef tab in the app for better AI advice.</div> : null}
      <div className='chips'>
        <span className='chip'><b>{ls.fish}</b> fish</span><span className='chip'><b>{ls.coral}</b> coral</span><span className='chip'><b>{ls.invert}</b> inverts</span>
        {eq.slice(0, 5).map(([k, n]) => <span key={k} className='chip'><b>{n}</b> {k.replace(/_/g, ' ')}</span>)}
      </div>
      {data.dosing.length ? (
        <div className='sub-list'>
          <h4>Dosing</h4>
          {data.dosing.slice(0, 5).map((d, i) => <div key={i} className='row-line'><span>{d.name}</span><span className='mid'>{d.amount != null ? d.amount + ' ' + d.unit + '/day' : '–'}</span></div>)}
        </div>
      ) : null}
      {data.lights.length ? (
        <div className='sub-list'>
          <h4>Lighting</h4>
          {data.lights.slice(0, 3).map((l, i) => <div key={i} className='row-line'><span>{l.name}</span><span className='mid'>{l.hours != null ? l.hours.toFixed(1) + 'h photoperiod' : '–'}</span></div>)}
        </div>
      ) : null}
    </div>
  );
}

function Activity({ data, logs }: { data: DashData; logs: LogRow[] }) {
  const items: { t: number; color: string; text: string }[] = [];
  const byDay = new Map<string, { t: number; man: Set<string>; apex: Set<string> }>();
  for (const l of logs) {
    const k = dayKey(l.t); let e = byDay.get(k);
    if (!e) { e = { t: l.t, man: new Set(), apex: new Set() }; byDay.set(k, e); }
    e.t = Math.max(e.t, l.t);
    for (const p of PARAMS) if (l[p.key] != null) (l.source === 'apex_auto' ? e.apex : e.man).add(PMAP[p.key].short);
  }
  for (const e of byDay.values()) {
    if (e.man.size) items.push({ t: e.t, color: '#2EE6CF', text: 'Tested ' + Array.from(e.man).join(', ') });
    else if (e.apex.size) items.push({ t: e.t, color: '#566679', text: 'Apex readings · ' + Array.from(e.apex).join(', ') });
  }
  const cutoff = logs.length ? logs[0].t : 0;
  for (const e of data.events) if (e.t >= cutoff) items.push({ t: e.t, color: EVENT_META[e.type]?.color ?? '#8FA1B6', text: e.label });
  items.sort((a, b) => b.t - a.t);
  if (!items.length) return <div className='muted-block'>Nothing logged in this range.</div>;
  return (
    <div className='timeline'>
      {items.slice(0, 14).map((it, i) => (
        <div key={i} className='tl-row'><i style={{ background: it.color }} /><span className='tl-d'>{fmtDate(it.t)}</span><span className='tl-x'>{it.text}</span></div>
      ))}
    </div>
  );
}

function ReadingsTable({ logs, keys, targets }: { logs: LogRow[]; keys: ParamKey[]; targets: Record<ParamKey, Target> }) {
  const rows = useMemo(() => {
    const m = new Map<string, { t: number; sum: Partial<Record<ParamKey, number>>; cnt: Partial<Record<ParamKey, number>> }>();
    for (const l of logs) {
      const k = dayKey(l.t); let e = m.get(k);
      if (!e) { e = { t: l.t, sum: {}, cnt: {} }; m.set(k, e); }
      for (const p of keys) { const v = l[p]; if (v != null) { e.sum[p] = (e.sum[p] ?? 0) + v; e.cnt[p] = (e.cnt[p] ?? 0) + 1; } }
    }
    return Array.from(m.values()).sort((a, b) => b.t - a.t).map((e) => ({ t: e.t, v: Object.fromEntries(keys.map((p) => [p, e.cnt[p] ? e.sum[p]! / e.cnt[p]! : null])) as Record<ParamKey, number | null> }));
  }, [logs, keys]);
  if (!rows.length) return <div className='muted-block'>No readings in this range.</div>;
  return (
    <div className='rtable'>
      <table>
        <thead><tr><th>Date</th>{keys.map((k) => <th key={k} className='r'>{PMAP[k].short}<small>{PMAP[k].unit}</small></th>)}</tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.t}>
              <td className='dim'>{fmtDateY(r.t)}</td>
              {keys.map((k) => { const v = r.v[k]; const out = v != null && (v < targets[k].lo || v > targets[k].hi); return <td key={k} className={'r' + (out ? ' out' : '') + (v == null ? ' dim' : '')}>{fv(v, PMAP[k].dec)}</td>; })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='dim small' style={{ padding: '8px 2px 0' }}>One row per day (averaged when you logged more than once). Red = outside your target.</div>
    </div>
  );
}

function CsvButton({ logs, keys, name }: { logs: LogRow[]; keys: ParamKey[]; name: string }) {
  const onClick = useCallback(() => {
    const head = ['date', 'time', ...keys.map((k) => PMAP[k].short + (PMAP[k].unit ? ' (' + PMAP[k].unit + ')' : '')), 'source', 'notes'];
    const esc = (s: string) => (/[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s);
    const lines = [head.join(',')];
    for (const l of logs) {
      const d = new Date(l.t);
      lines.push([d.toISOString().slice(0, 10), d.toTimeString().slice(0, 5), ...keys.map((k) => (l[k] == null ? '' : String(l[k]))), l.source ?? '', esc(l.notes ?? '')].join(','));
    }
    const blob = new Blob([lines.join('\n')], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name.replace(/[^\w-]+/g, '_') + '_readings.csv';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }, [logs, keys, name]);
  return <button className='ghost-btn sm' onClick={onClick} disabled={!logs.length}>Export CSV</button>;
}
