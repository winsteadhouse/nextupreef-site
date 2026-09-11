'use client';
import { useState, useMemo, useEffect, type ReactNode } from 'react';
import { ResponsiveContainer, ComposedChart, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { createClient } from '@/lib/supabase/client';

type Series = Record<string, number | string>;
type UserRow = Record<string, unknown>;
type Eng = Record<string, any>;

const CY = '#2EE6CF', RO = '#5B8DEF', GD = '#36D89B', AM = '#F6A623', BD = '#FF5D5D', PU = '#A78BFA', PK = '#E879F9', BL = '#60A5FA';
const GRID = 'rgba(125,165,210,.08)';
const AX = { fontSize: 11, fill: '#566679' };

const fmt = (n: unknown) => (n == null ? '0' : Number(n).toLocaleString());
const pct = (a: number, b: number) => (b > 0 ? Math.round((a / b) * 100) : 0);
const d2 = (iso: unknown) => { if (!iso) return '–'; const dt = new Date(String(iso)); if (isNaN(dt.getTime())) return '–'; return (dt.getMonth() + 1) + '/' + dt.getDate() + '/' + String(dt.getFullYear()).slice(2); };
const daysAgo = (iso: unknown) => { if (!iso) return null; const t = new Date(String(iso)).getTime(); if (isNaN(t)) return null; return Math.floor((Date.now() - t) / 86400000); };
const ago = (iso: unknown) => { const d = daysAgo(iso); return d == null ? '–' : d <= 0 ? 'today' : d === 1 ? '1d ago' : d + 'd ago'; };
const agoTime = (iso: unknown) => { if (!iso) return '–'; const m = Math.floor((Date.now() - new Date(String(iso)).getTime()) / 60000); return m < 1 ? 'just now' : m < 60 ? m + 'm ago' : m < 1440 ? Math.floor(m / 60) + 'h ago' : Math.floor(m / 1440) + 'd ago'; };
const tick = (d: any) => { const p = String(d).split('-'); return p.length === 3 ? Number(p[1]) + '/' + Number(p[2]) : d; };
const tipStyle = { background: '#0C121D', border: '1px solid rgba(125,165,210,.18)', borderRadius: 8, fontSize: 12, color: '#EAF1F8' } as const;

const SEG: Record<string, { label: string; color: string; def: string }> = {
  power: { label: 'Power', color: CY, def: 'active 8+ days in the last 28' },
  regular: { label: 'Regular', color: RO, def: 'active 3–7 days in the last 28' },
  casual: { label: 'Casual', color: PU, def: 'active 1–2 days, or opened the app, in the last 28' },
  dormant: { label: 'Dormant', color: '#566679', def: 'nothing in 28+ days' },
  never_activated: { label: 'Never activated', color: BD, def: 'signed up, never created a tank or logged anything' },
};
const SEG_ORDER = ['power', 'regular', 'casual', 'dormant', 'never_activated'];
const KIND: Record<string, { label: string; color: string; feature: string }> = {
  log: { label: 'Logged parameters', color: CY, feature: 'Parameter logging' },
  water_change: { label: 'Logged a water change', color: RO, feature: 'Water change logging' },
  water_change_schedule: { label: 'Water change schedule', color: RO, feature: 'Water change schedule' },
  livestock: { label: 'Added livestock', color: GD, feature: 'Livestock' },
  equipment: { label: 'Added equipment', color: PU, feature: 'Equipment' },
  dosing: { label: 'Added a dosing product', color: AM, feature: 'Dosing' },
  lighting: { label: 'Set a light schedule', color: '#FDE047', feature: 'Light schedules' },
  reminder_set: { label: 'Created a reminder', color: BL, feature: 'Reminders' },
  reminder_done: { label: 'Completed a reminder', color: BL, feature: 'Completing reminders' },
  journal: { label: 'Wrote a journal entry', color: PK, feature: 'Tank journal' },
  photo: { label: 'Uploaded a tank photo', color: PK, feature: 'Monthly photos' },
  ai_advisor: { label: 'Ran Reef AI Advisor', color: PU, feature: 'AI Advisor' },
  ai_chat: { label: 'Asked Reef AI Chat', color: PU, feature: 'AI Chat' },
  ai_stocking: { label: 'Ran Stocking Advisor', color: PU, feature: 'Stocking Advisor' },
  like: { label: 'Liked a tank', color: BD, feature: 'Likes (community)' },
  comment: { label: 'Commented on a tank', color: BD, feature: 'Comments' },
  journey: { label: 'Checked off a New Tank Guide step', color: GD, feature: 'New Tank Guide steps' },
  tank_created: { label: 'Created a tank', color: CY, feature: 'Tanks' },
  public_tank: { label: '', color: CY, feature: 'Public tank' },
  apex: { label: '', color: RO, feature: 'Apex connected' },
  smart_outlets: { label: '', color: GD, feature: 'Smart outlets' },
  push_enabled: { label: '', color: AM, feature: 'Push notifications on' },
  new_tank_journey: { label: '', color: GD, feature: 'New Tank Guide active' },
  dose_log: { label: 'Logged a dose', color: AM, feature: 'Dose logging' },
  portal: { label: 'Opened the web portal', color: RO, feature: 'Web portal' },
  open: { label: 'Opened the app', color: '#566679', feature: 'App opens' },
};
const kindLabel = (k: string) => KIND[k]?.label || k.replace(/_/g, ' ');

/* ───────────── small pieces ───────────── */
function Kpi({ label, value, sub, color }: { label: string; value: string; sub?: ReactNode; color?: string }) {
  return (
    <div className='kpi'>
      <div className='kpi-label'>{label}</div>
      <div className='kpi-val' style={{ color: color || 'var(--hi)' }}>{value}</div>
      {sub ? <div className='kpi-sub'>{sub}</div> : null}
    </div>
  );
}
function Delta({ label, cur, prev, mode }: { label: string; cur: number; prev: number; mode?: 'wow' | 'dod' }) {
  const diff = cur - prev;
  const p = prev > 0 ? Math.round((diff / prev) * 100) : null;
  const col = diff === 0 ? 'var(--mid)' : diff > 0 ? GD : BD;
  return <Kpi label={label} value={fmt(cur)} sub={<span style={{ color: col }}>{diff === 0 ? '=' : diff > 0 ? '▲' : '▼'} {fmt(Math.abs(diff))}{p != null ? ' (' + (diff >= 0 ? '+' : '−') + Math.abs(p) + '%)' : ''} {mode === 'dod' ? 'vs yesterday' : 'vs last wk'}</span>} />;
}
function Panel({ title, sub, right, className, children }: { title: string; sub?: string; right?: ReactNode; className?: string; children: ReactNode }) {
  return (
    <section className={'dpanel ' + (className ?? '')}>
      <div className='dpanel-head'><h3>{title}{sub ? <small>{sub}</small> : null}</h3>{right}</div>
      {children}
    </section>
  );
}
function MiniStat({ label, value, color }: { label: string; value: string; color?: string }) {
  return <div className='mini'><b style={{ color: color || 'var(--hi)' }}>{value}</b><span>{label}</span></div>;
}
function HBars({ data, color = RO, max: forcedMax, suffix }: { data: { k: string; v: number; sub?: string }[]; color?: string; max?: number; suffix?: string }) {
  const max = forcedMax ?? Math.max(1, ...data.map((d) => d.v));
  return (
    <div className='hbars'>
      {data.map((d) => (
        <div key={d.k} className='hbar'>
          <span className='hbar-k'>{d.k}</span>
          <span className='hbar-track'><span style={{ width: Math.max(1, pct(d.v, max)) + '%', background: color }} /></span>
          <span className='hbar-v'>{fmt(d.v)}{suffix}{d.sub ? <small>{d.sub}</small> : null}</span>
        </div>
      ))}
    </div>
  );
}

/* ───────────── main ───────────── */
export default function AdminClient({ metrics, series, users, engagement }: { metrics: Record<string, Record<string, unknown>> | null; series: Series[]; users: UserRow[]; engagement: Eng | null }) {
  const [tab, setTab] = useState<'overview' | 'engagement' | 'users' | 'activity'>('overview');
  const [openUser, setOpenUser] = useState<string | null>(null);
  useEffect(() => { try { const t = localStorage.getItem('admin.tab'); if (t === 'overview' || t === 'engagement' || t === 'users' || t === 'activity') setTab(t); } catch { /* ignore */ } }, []);
  const pick = (t: typeof tab) => { setTab(t); try { localStorage.setItem('admin.tab', t); } catch { /* ignore */ } };

  return (
    <div className='dash admin'>
      <div className='dash-head'>
        <div>
          <h1>Admin</h1>
          <div className='dash-facts'><span>Usage, engagement and growth across all users. Visible only to you.</span></div>
        </div>
        <div className='seg' role='tablist'>
          {(['overview', 'engagement', 'users', 'activity'] as const).map((t) => <button key={t} role='tab' aria-selected={tab === t} className={tab === t ? 'on' : ''} onClick={() => pick(t)} style={{ textTransform: 'capitalize' }}>{t}</button>)}
        </div>
      </div>
      {tab === 'overview' ? <Overview metrics={metrics} series={series} engagement={engagement} /> : null}
      {tab === 'engagement' ? <Engagement e={engagement} users={users} onOpen={setOpenUser} /> : null}
      {tab === 'users' ? <Users users={users} onOpen={setOpenUser} /> : null}
      {tab === 'activity' ? <ActivityFeed e={engagement} onOpen={setOpenUser} /> : null}
      {openUser ? <UserDrawer id={openUser} onClose={() => setOpenUser(null)} /> : null}
    </div>
  );
}

/* ───────────── Overview (existing metrics) ───────────── */
function Overview({ metrics, series, engagement }: { metrics: Record<string, Record<string, unknown>> | null; series: Series[]; engagement: Eng | null }) {
  const [days, setDays] = useState(90);
  const m = metrics || {};
  const u = (m.users || {}) as Record<string, number>;
  const t = (m.tanks || {}) as Record<string, unknown>;
  const ai = (m.ai || {}) as Record<string, number>;
  const ig = (m.integrations || {}) as Record<string, unknown>;
  const ds = (m.dosing || {}) as Record<string, number>;
  const lg = (m.logging || {}) as Record<string, number>;
  const data = useMemo(() => (series || []).slice(-days), [series, days]);
  const tankTypes = useMemo(() => Object.entries((t.by_type || {}) as Record<string, number>).map(([k, v]) => ({ k: k.replace(/_/g, ' '), v })).sort((a, b) => b.v - a.v), [t]);
  const seg = (engagement?.segments ?? {}) as Record<string, number>;
  const Toggle = (
    <div className='seg'>{[30, 90].map((d) => <button key={d} className={days === d ? 'on' : ''} onClick={() => setDays(d)}>{d}d</button>)}</div>
  );
  return (
    <>
      <div className='kpis'>
        <Kpi label='Total users' value={fmt(u.total)} sub={fmt(u.active_7d) + ' active this week'} />
        <Kpi label='Paying' value={fmt(u.paid_now)} sub={pct(u.paid_now || 0, u.total || 0) + '% of users'} color={CY} />
        <Kpi label='In trial' value={fmt(u.trials_active)} sub={fmt(u.trials_ending_7d) + ' end in 7 days'} color={AM} />
        <Kpi label='Power + regular' value={fmt((seg.power || 0) + (seg.regular || 0))} sub='active 3+ days of last 28' color={GD} />
        <Kpi label='New (7d)' value={fmt(u.new_7d)} sub={fmt(u.new_30d) + ' in 30 days'} color={GD} />
        <Kpi label='Tanks' value={fmt(t.total)} sub={fmt(t.public) + ' public'} />
      </div>
      <div className='kpis'>
        <Delta label='New users / wk' cur={u.new_7d || 0} prev={u.new_prev_7d || 0} mode='wow' />
        <Delta label='New users / day' cur={u.new_today || 0} prev={u.new_yesterday || 0} mode='dod' />
        <Delta label='Active users / wk' cur={u.active_7d || 0} prev={u.active_prev_7d || 0} mode='wow' />
        <Kpi label='Active (30d)' value={fmt(u.active_30d)} sub={pct(u.active_30d || 0, u.total || 0) + '% of base'} color={BL} />
        <Kpi label='Logs (7d)' value={fmt(lg.logs_7d)} sub={fmt(lg.total) + ' all time'} />
      </div>

      <div className='dash-lower'>
        <Panel className='span-8' title='Growth' sub='signups per day · total users' right={Toggle}>
          <div style={{ height: 250 }}>
            <ResponsiveContainer width='100%' height='100%'>
              <ComposedChart data={data} margin={{ top: 6, right: 8, left: -8, bottom: 0 }}>
                <CartesianGrid stroke={GRID} vertical={false} />
                <XAxis dataKey='d' tickFormatter={tick} tick={AX} minTickGap={24} stroke={GRID} />
                <YAxis yAxisId='L' tick={AX} stroke={GRID} allowDecimals={false} />
                <YAxis yAxisId='R' orientation='right' tick={AX} stroke={GRID} />
                <Tooltip contentStyle={tipStyle} labelFormatter={tick} />
                <Bar yAxisId='L' dataKey='signups' name='Signups' fill={GD} radius={[3, 3, 0, 0]} maxBarSize={14} />
                <Line yAxisId='R' type='monotone' dataKey='cum_users' name='Total users' stroke={CY} strokeWidth={2} dot={false} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Panel>
        <Panel className='span-4' title='Subscriptions'>
          <div className='subs'>
            <div><b style={{ color: CY }}>{fmt(u.paid_now)}</b><span>paying</span></div>
            <div><b style={{ color: AM }}>{fmt(u.trials_active)}</b><span>in trial</span></div>
            <div><b>{pct(u.paid_now || 0, u.total || 0)}%</b><span>of base paying</span></div>
          </div>
          <div className='stackbar'>
            <span style={{ width: pct(u.paid_now || 0, u.total || 0) + '%', background: CY }} />
            <span style={{ width: pct(u.trials_active || 0, u.total || 0) + '%', background: AM }} />
          </div>
          <div className='dim small' style={{ marginTop: 8 }}>“Pro” tier flag: {fmt(u.pro)} users (includes trials). Paying = live subscription.</div>
          <div className='dpanel-sub'>Tank types</div>
          <HBars data={tankTypes} />
        </Panel>

        <Panel className='span-6' title='Daily active users' sub='any logged action that day'>
          <div style={{ height: 210 }}>
            <ResponsiveContainer width='100%' height='100%'>
              <ComposedChart data={data} margin={{ top: 6, right: 8, left: -8, bottom: 0 }}>
                <CartesianGrid stroke={GRID} vertical={false} />
                <XAxis dataKey='d' tickFormatter={tick} tick={AX} minTickGap={24} stroke={GRID} />
                <YAxis tick={AX} stroke={GRID} allowDecimals={false} />
                <Tooltip contentStyle={tipStyle} labelFormatter={tick} />
                <Bar dataKey='logs' name='Logs' fill='rgba(91,141,239,.35)' radius={[3, 3, 0, 0]} maxBarSize={14} />
                <Line type='monotone' dataKey='active' name='Active users' stroke={BL} strokeWidth={2} dot={false} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Panel>
        <Panel className='span-6' title='AI generations per day'>
          <div style={{ height: 210 }}>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart data={data} margin={{ top: 6, right: 8, left: -8, bottom: 0 }}>
                <CartesianGrid stroke={GRID} vertical={false} />
                <XAxis dataKey='d' tickFormatter={tick} tick={AX} minTickGap={24} stroke={GRID} />
                <YAxis tick={AX} stroke={GRID} allowDecimals={false} />
                <Tooltip contentStyle={tipStyle} labelFormatter={tick} />
                <Bar dataKey='advisor' name='Advisor' stackId='a' fill={PU} maxBarSize={16} />
                <Bar dataKey='stocking' name='Stocking' stackId='a' fill={AM} maxBarSize={16} />
                <Bar dataKey='chat' name='Chat' stackId='a' fill={PK} maxBarSize={16} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className='dim small' style={{ marginTop: 8 }}>Totals: Advisor {fmt(ai.advisor_total)} · Stocking {fmt(ai.stocking_total)} · Chat {fmt(ai.chat_total)} ({fmt((ai.advisor_7d || 0) + (ai.stocking_7d || 0) + (ai.chat_7d || 0))} in 7d)</div>
        </Panel>

        <Panel className='span-12' title='Integrations and hardware'>
          <div className='minis'>
            <MiniStat label='Apex users' value={fmt(ig.apex_active_users)} color={RO} />
            <MiniStat label='Apex synced 24h' value={fmt(ig.apex_synced_24h)} />
            <MiniStat label='Smart outlets' value={fmt(ig.shelly_outlets)} color={GD} />
            <MiniStat label='Outlet users' value={fmt(ig.shelly_users)} />
            <MiniStat label='Hubs claimed' value={fmt(ig.hub_claimed)} color={PU} />
            <MiniStat label='Hubs live 24h' value={fmt(ig.hub_active_24h)} />
            <MiniStat label='Dosing users' value={fmt(ds.users)} color={AM} />
            <MiniStat label='Dosing products' value={fmt(ds.products)} />
            <MiniStat label='Scheduled dosers' value={fmt(ds.scheduled)} />
            <MiniStat label='Dose events 7d' value={fmt(ds.dose_events_7d)} />
          </div>
        </Panel>
      </div>
    </>
  );
}

/* ───────────── Engagement ───────────── */
function Engagement({ e, users, onOpen }: { e: Eng | null; users: UserRow[]; onOpen: (id: string) => void }) {
  if (!e) return <div className='muted-block'>Engagement data didn’t load. Refresh the page.</div>;
  const seg = (e.segments ?? {}) as Record<string, number>;
  const segTotal = SEG_ORDER.reduce((a, k) => a + (seg[k] || 0), 0);
  const f = (e.funnel ?? {}) as Record<string, number>;
  const steps: [string, string][] = [['signed_up', 'Signed up'], ['created_tank', 'Created a tank'], ['first_log', 'Logged a test'], ['logged_3_days', 'Logged on 3+ days'], ['added_livestock', 'Added livestock'], ['set_reminder', 'Set a reminder / WC schedule'], ['used_ai', 'Used an AI feature'], ['paying', 'Paying']];
  const adoption = ((e.adoption ?? []) as { k: string; users: number; users_30d: number | null }[]).filter((a) => a.k !== 'open');
  const total = f.signed_up || 1;
  const wau = (e.wau ?? []) as Record<string, number | string>[];
  const retention = (e.retention ?? []) as { wk: string; size: number; w: (number | null)[] }[];
  const opens = e.opens ?? {};
  const platforms = Object.entries((e.platforms ?? {}) as Record<string, number>);
  const platTotal = platforms.reduce((a, [, n]) => a + n, 0);
  const builds = (e.app_builds ?? []) as { b: number; n: number; active: number }[];
  const trials = (e.trials_ending ?? []) as Record<string, any>[];
  const risk = (e.at_risk ?? []) as Record<string, any>[];
  const hot = trials.filter((t) => t.segment === 'power' || t.segment === 'regular').length;
  const comm = e.community ?? {};
  const tracking = opens.tracking_since ? new Date(String(opens.tracking_since) + 'T12:00:00') : null;
  const trackingDays = tracking ? Math.floor((Date.now() - tracking.getTime()) / 86400000) + 1 : 0;
  const heat = (v: number | null) => (v == null ? 'transparent' : `rgba(46,230,207,${0.08 + (v / 100) * 0.8})`);
  void users;

  return (
    <div className='dash-lower'>
      <Panel className='span-12' title='Who’s engaged' sub={segTotal + ' users, by active days in the last 28'}>
        <div className='stackbar big'>
          {SEG_ORDER.map((k) => seg[k] ? <span key={k} title={SEG[k].label + ': ' + seg[k]} style={{ width: pct(seg[k], segTotal) + '%', background: SEG[k].color }} /> : null)}
        </div>
        <div className='seg-legend'>
          {SEG_ORDER.map((k) => (
            <div key={k}><i style={{ background: SEG[k].color }} /><b>{fmt(seg[k] || 0)}</b><span>{SEG[k].label} · {pct(seg[k] || 0, segTotal)}%</span><small>{SEG[k].def}</small></div>
          ))}
        </div>
      </Panel>

      <Panel className='span-6' title='Activation funnel' sub='all-time, % of signups'>
        <div className='funnel'>
          {steps.map(([k, label], i) => {
            const v = f[k] || 0; const prev = i ? f[steps[i - 1][0]] || 0 : 0;
            return (
              <div key={k} className='fstep'>
                <span className='fstep-k'>{label}</span>
                <span className='hbar-track'><span style={{ width: Math.max(1, pct(v, total)) + '%', background: k === 'paying' ? CY : RO }} /></span>
                <span className='fstep-v'>{fmt(v)}<small>{pct(v, total)}%</small></span>
                <span className='fstep-c'>{i && i < 4 && prev ? pct(v, prev) + '% of prev' : k === 'paying' && f.started_trial ? pct(v, f.started_trial) + '% of trials' : ''}</span>
              </div>
            );
          })}
        </div>
        <div className='dim small' style={{ marginTop: 10 }}>The first four steps are a chain; the rest are independent milestones. {fmt(f.started_trial)} users have started a Pro trial. Biggest early drop: {biggestDrop(steps, f)}.</div>
      </Panel>

      <Panel className='span-6' title='Feature adoption' sub='users who ever used it · bright = used in last 30 days'>
        <div className='hbars'>
          {adoption.map((a) => (
            <div key={a.k} className='hbar'>
              <span className='hbar-k'>{KIND[a.k]?.feature ?? a.k.replace(/_/g, ' ')}</span>
              <span className='hbar-track'>
                <span style={{ width: Math.max(1, pct(a.users, total)) + '%', background: 'rgba(91,141,239,.35)' }} />
                {a.users_30d != null ? <span className='over' style={{ width: Math.max(0, pct(a.users_30d, total)) + '%', background: RO }} /> : null}
              </span>
              <span className='hbar-v'>{fmt(a.users)}{a.users_30d != null ? <small>{fmt(a.users_30d)} in 30d</small> : <small>{pct(a.users, total)}%</small>}</span>
            </div>
          ))}
        </div>
      </Panel>

      <Panel className='span-7' title='Weekly active users' sub='last 12 weeks'>
        <div style={{ height: 240 }}>
          <ResponsiveContainer width='100%' height='100%'>
            <ComposedChart data={wau} margin={{ top: 6, right: 8, left: -8, bottom: 0 }}>
              <CartesianGrid stroke={GRID} vertical={false} />
              <XAxis dataKey='wk' tickFormatter={tick} tick={AX} stroke={GRID} />
              <YAxis tick={AX} stroke={GRID} allowDecimals={false} />
              <Tooltip contentStyle={tipStyle} labelFormatter={(l) => 'Week of ' + tick(l)} />
              <Legend wrapperStyle={{ fontSize: 11.5, color: '#8FA1B6' }} iconType='plainline' />
              <Bar dataKey='signups' name='Signups' fill='rgba(54,216,155,.45)' radius={[3, 3, 0, 0]} maxBarSize={22} />
              <Line type='monotone' dataKey='active' name='Active users' stroke={CY} strokeWidth={2.2} dot={{ r: 2.5 }} />
              <Line type='monotone' dataKey='loggers' name='Logged a test' stroke={RO} strokeWidth={2} dot={{ r: 2 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </Panel>

      <Panel className='span-5' title='App opens' sub={tracking ? 'tracking since ' + tracking.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'tracking starts now'}>
        <div className='minis two'>
          <MiniStat label='users opened today' value={fmt(opens.today)} color={CY} />
          <MiniStat label='opens today' value={fmt(((opens.dau_series ?? []) as any[]).slice(-1)[0]?.opens ?? 0)} />
        </div>
        {trackingDays >= 3 ? (
          <div style={{ height: 150, marginTop: 10 }}>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart data={opens.dau_series ?? []} margin={{ top: 6, right: 4, left: -16, bottom: 0 }}>
                <XAxis dataKey='d' tickFormatter={tick} tick={AX} stroke={GRID} minTickGap={20} />
                <YAxis tick={AX} stroke={GRID} allowDecimals={false} />
                <Tooltip contentStyle={tipStyle} labelFormatter={tick} />
                <Bar dataKey='users' name='Users' fill={CY} radius={[3, 3, 0, 0]} maxBarSize={14} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : <div className='muted-block' style={{ marginTop: 10 }}>New: every app launch is now counted per user per day. A daily-opens chart appears here after a few days of data.</div>}
        <div className='dpanel-sub'>Community (last 7 days)</div>
        <div className='minis'>
          <MiniStat label='likes' value={fmt(comm.likes_7d)} />
          <MiniStat label='comments' value={fmt(comm.comments_7d)} />
          <MiniStat label='photos (30d)' value={fmt(comm.photos_30d)} />
          <MiniStat label='public tanks' value={fmt(comm.public_tanks)} />
        </div>
      </Panel>

      <PortalPanel p={e.portal} />

      <Panel className='span-12' title='Retention by signup week' sub='% of each week’s signups who did something in app week 0–7 after signing up'>
        <div className='rtable' style={{ maxHeight: 'none' }}>
          <table className='cohort'>
            <thead><tr><th>Signup week</th><th className='r'>Users</th>{Array.from({ length: 8 }, (_, i) => <th key={i} className='r'>Wk {i}</th>)}</tr></thead>
            <tbody>
              {retention.map((c) => (
                <tr key={c.wk}>
                  <td className='dim'>{tick(c.wk)}</td><td className='r'>{c.size}</td>
                  {c.w.map((v, i) => <td key={i} className='r' style={{ background: heat(v), color: v == null ? 'var(--dim)' : v >= 50 ? '#04201d' : 'var(--hi)', fontWeight: 600 }}>{v == null ? '' : v + '%'}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='dim small' style={{ marginTop: 8 }}>Counts real actions (tests, water changes, livestock, AI, reminders…) plus app opens from now on. Small weeks swing a lot, so read the bigger cohorts.</div>
      </Panel>

      <Panel className='span-7' title='Trials ending in the next 7 days' sub={trials.length + ' users · ' + hot + ' are power/regular users (best conversion bets)'}>
        <UserMiniTable rows={trials} onOpen={onOpen} cols={[
          ['Ends', (r) => d2(r.trial_ends_at)],
          ['Engagement', (r) => <SegPill s={r.segment} />],
          ['Active days (28d)', (r) => String(r.days28 ?? 0), true],
        ]} empty='No trials end this week.' />
      </Panel>
      <Panel className='span-5' title='Paying users going quiet' sub='no activity for 10+ days'>
        <UserMiniTable rows={risk} onOpen={onOpen} cols={[
          ['Idle', (r) => (r.idle_days == null ? 'never active' : r.idle_days + ' days')],
          ['Active days (28d)', (r) => String(r.days28 ?? 0), true],
        ]} empty='Every paying user has been active in the last 10 days.' />
      </Panel>

      <Panel className='span-4' title='Platforms' sub='latest device with push token'>
        <HBars data={platforms.map(([k, n]) => ({ k: k === 'ios' ? 'iOS' : k === 'android' ? 'Android' : k, v: n, sub: pct(n, platTotal) + '%' }))} color={RO} />
        <div className='dim small' style={{ marginTop: 8 }}>{fmt(platTotal)} of {fmt(total)} users have registered a device ({pct(platTotal, total)}%).</div>
      </Panel>
      <Panel className='span-4' title='App versions' sub='build · users · active in 30d'>
        {builds.length ? <HBars data={builds.map((b) => ({ k: 'Build ' + b.b, v: b.n, sub: b.active + ' active' }))} color={PU} />
          : <div className='muted-block'>No build numbers recorded yet. The app update in this release starts sending them on launch.</div>}
      </Panel>
      <ThemePanel t={e.themes} />
    </div>
  );
}
function ThemePanel({ t }: { t: Record<string, { all: number; active30: number }> | undefined }) {
  const dark = t?.dark?.active30 ?? 0, light = t?.light?.active30 ?? 0, unknown = t?.unknown?.active30 ?? 0;
  const known = dark + light;
  return (
    <Panel className='span-4' title='Dark vs light mode' sub='active users, last 30 days'>
      {known ? (
        <>
          <div className='stackbar big'>
            <span style={{ width: pct(dark, known) + '%', background: '#818CF8' }} title={'Dark: ' + dark} />
            <span style={{ width: pct(light, known) + '%', background: '#E2E8F0' }} title={'Light: ' + light} />
          </div>
          <div className='minis two' style={{ marginTop: 12 }}>
            <MiniStat label={'dark · ' + pct(dark, known) + '%'} value={fmt(dark)} color='#818CF8' />
            <MiniStat label={'light · ' + pct(light, known) + '%'} value={fmt(light)} />
          </div>
        </>
      ) : <div className='muted-block'>No one has reported a theme yet.</div>}
      <div className='dim small' style={{ marginTop: 10 }}>{fmt(unknown)} active users are on an older app version that doesn’t report a theme (the app defaults to light). This fills in as people update.</div>
    </Panel>
  );
}
function PortalPanel({ p }: { p: any }) {
  if (!p) return null;
  const since = p.tracking_since ? new Date(String(p.tracking_since) + 'T12:00:00') : null;
  const days = since ? Math.floor((Date.now() - since.getTime()) / 86400000) + 1 : 0;
  const series = (p.series ?? []) as { d: string; users: number; visits: number }[];
  return (
    <Panel className='span-12' title='Web portal' sub={'portal.nextupreef.com · paid & trial users only' + (since ? ' · tracking since ' + since.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : ' · tracking starts with the next visit')}>
      <div className='minis'>
        <MiniStat label='used it today' value={fmt(p.today)} color={CY} />
        <MiniStat label='last 7 days' value={fmt(p.d7)} />
        <MiniStat label='last 30 days' value={fmt(p.d30)} />
        <MiniStat label='ever' value={fmt(p.ever)} />
        <MiniStat label='can access (paid/trial)' value={fmt(p.eligible)} />
        <MiniStat label='of eligible used it (30d)' value={pct(p.d30 || 0, p.eligible || 0) + '%'} color={p.eligible && (p.d30 || 0) / p.eligible >= 0.2 ? GD : AM} />
      </div>
      {days >= 3 && series.length ? (
        <div style={{ height: 150, marginTop: 12 }}>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={series} margin={{ top: 6, right: 4, left: -16, bottom: 0 }}>
              <XAxis dataKey='d' tickFormatter={tick} tick={AX} stroke={GRID} minTickGap={20} />
              <YAxis tick={AX} stroke={GRID} allowDecimals={false} />
              <Tooltip contentStyle={tipStyle} labelFormatter={tick} />
              <Bar dataKey='users' name='Users' fill={RO} radius={[3, 3, 0, 0]} maxBarSize={14} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : <div className='dim small' style={{ marginTop: 10 }}>A daily chart appears after a few days of visits. Most paid and trial users likely don’t know the portal exists yet.</div>}
    </Panel>
  );
}
function biggestDrop(steps: [string, string][], f: Record<string, number>) {
  let worst = '', w = 101;
  for (let i = 1; i < 4; i++) { const prev = f[steps[i - 1][0]] || 0; if (!prev) continue; const r = pct(f[steps[i][0]] || 0, prev); if (r < w) { w = r; worst = steps[i - 1][1].toLowerCase() + ' → ' + steps[i][1].toLowerCase() + ' (' + r + '%)'; } }
  return worst || '–';
}
function SegPill({ s }: { s?: string }) {
  const m = SEG[s ?? ''] ?? { label: s ?? '–', color: '#566679' };
  return <span className='segpill' style={{ color: m.color, borderColor: m.color + '55', background: m.color + '14' }}>{m.label}</span>;
}
function UserMiniTable({ rows, cols, onOpen, empty }: { rows: Record<string, any>[]; cols: [string, (r: Record<string, any>) => ReactNode, boolean?][]; onOpen: (id: string) => void; empty: string }) {
  if (!rows.length) return <div className='muted-block'>{empty}</div>;
  return (
    <div className='rtable' style={{ maxHeight: 320 }}>
      <table>
        <thead><tr><th>User</th>{cols.map(([h, , r]) => <th key={h} className={r ? 'r' : ''}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((r) => (
          <tr key={r.id} className='click' onClick={() => onOpen(r.id)}>
            <td className='name'>{r.name}</td>{cols.map(([h, fn, right]) => <td key={h} className={right ? 'r' : ''}>{fn(r)}</td>)}
          </tr>
        ))}</tbody>
      </table>
    </div>
  );
}

/* ───────────── Users ───────────── */
function Users({ users, onOpen }: { users: UserRow[]; onOpen: (id: string) => void }) {
  const [q, setQ] = useState('');
  const [segF, setSegF] = useState('all');
  const [tierF, setTierF] = useState('all');
  const [sortKey, setSortKey] = useState('created_at');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');
  const status = (r: UserRow) => (r.paying ? 'paying' : r.trial_ends_at && new Date(String(r.trial_ends_at)).getTime() > Date.now() ? 'trial' : 'free');
  const lastActive = (r: UserRow) => { const a = r.last_action ? new Date(String(r.last_action)).getTime() : 0, b = r.last_seen_at ? new Date(String(r.last_seen_at)).getTime() : 0; return Math.max(a, b) || null; };
  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const arr = users.filter((r) => (segF === 'all' || r.segment === segF) && (tierF === 'all' || status(r) === tierF) &&
      (!needle || String(r.name ?? '').toLowerCase().includes(needle) || String(r.email ?? '').toLowerCase().includes(needle)));
    const val = (r: UserRow): number | string => {
      if (sortKey === 'last_active') return lastActive(r) ?? -Infinity;
      if (sortKey === 'created_at') return r.created_at ? new Date(String(r.created_at)).getTime() : -Infinity;
      if (sortKey === 'last_portal_at') return r.last_portal_at ? new Date(String(r.last_portal_at)).getTime() : r.web_eligible ? -1e15 : -Infinity;
      if (sortKey === 'segment') return SEG_ORDER.indexOf(String(r.segment));
      if (sortKey === 'status') return status(r);
      const v = r[sortKey]; return typeof v === 'number' ? v : String(v ?? '').toLowerCase();
    };
    return arr.sort((a, b) => { const av = val(a), bv = val(b); return (av < bv ? -1 : av > bv ? 1 : 0) * (sortDir === 'asc' ? 1 : -1); });
  }, [users, q, segF, tierF, sortKey, sortDir]);
  const th = (k: string, label: string, right?: boolean) => (
    <th key={k} className={'sortable' + (right ? ' r' : '')} onClick={() => { if (k === sortKey) setSortDir(sortDir === 'asc' ? 'desc' : 'asc'); else { setSortKey(k); setSortDir(k === 'name' || k === 'segment' ? 'asc' : 'desc'); } }} aria-sort={sortKey === k ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'}>
      {label}{sortKey === k ? (sortDir === 'asc' ? ' ↑' : ' ↓') : ''}
    </th>
  );
  const counts = useMemo(() => { const c: Record<string, number> = {}; for (const u of users) c[String(u.segment)] = (c[String(u.segment)] || 0) + 1; return c; }, [users]);
  return (
    <section className='dpanel'>
      <div className='user-tools'>
        <input type='search' placeholder='Search name or email…' value={q} onChange={(e) => setQ(e.target.value)} aria-label='Search users' />
        <div className='seg'>
          <button className={segF === 'all' ? 'on' : ''} onClick={() => setSegF('all')}>All <small>{users.length}</small></button>
          {SEG_ORDER.map((k) => <button key={k} className={segF === k ? 'on' : ''} onClick={() => setSegF(k)}><i className='sdot' style={{ background: SEG[k].color }} />{SEG[k].label} <small>{counts[k] || 0}</small></button>)}
        </div>
        <div className='seg'>
          {['all', 'paying', 'trial', 'free'].map((k) => <button key={k} className={tierF === k ? 'on' : ''} onClick={() => setTierF(k)} style={{ textTransform: 'capitalize' }}>{k}</button>)}
        </div>
        <span className='dim small' style={{ marginLeft: 'auto' }}>{rows.length} shown · click a row for details</span>
      </div>
      <div className='rtable' style={{ maxHeight: '68vh' }}>
        <table className='users'>
          <thead><tr>
            {th('name', 'User')}{th('created_at', 'Joined')}{th('segment', 'Engagement')}{th('days28', 'Days (28d)', true)}{th('last_active', 'Last active')}
            {th('status', 'Status')}{th('last_portal_at', 'Web')}{th('platform', 'Device')}{th('tanks', 'Tanks', true)}{th('logs', 'Logs', true)}{th('wcs', 'WCs', true)}{th('ai', 'AI', true)}{th('livestock', 'Stock', true)}{th('features', 'Features', true)}
            <th>Gear</th>
          </tr></thead>
          <tbody>
            {rows.map((r) => {
              const la = lastActive(r); const st = status(r);
              const gear = [r.apex ? 'Apex' : null, r.shelly ? 'Outlet' : null, r.hub ? 'Hub' : null, r.dosing ? 'Dose' : null].filter(Boolean).join(' · ');
              return (
                <tr key={String(r.id)} className='click' onClick={() => onOpen(String(r.id))}>
                  <td className='name'><div>{String(r.name)}</div><small>{r.email ? String(r.email) : ''}</small></td>
                  <td className='dim'>{d2(r.created_at)}</td>
                  <td><SegPill s={String(r.segment)} /></td>
                  <td className='r'>{fmt(r.days28)}</td>
                  <td style={{ color: la && Date.now() - la < 7 * 86400000 ? GD : 'var(--mid)' }}>{la ? ago(new Date(la).toISOString()) : '–'}</td>
                  <td><span className={'stat ' + st}>{st}</span></td>
                  <td className={r.last_portal_at ? '' : 'dim'} title={r.last_portal_at ? Number(r.portal_days_30 || 0) + ' days in the last 30' : r.web_eligible ? 'Has access, never used it' : 'No web access'}>{r.last_portal_at ? ago(r.last_portal_at) : r.web_eligible ? 'never' : '–'}</td>
                  <td className='dim'>{r.platform ? (r.platform === 'ios' ? 'iOS' : r.platform === 'android' ? 'Android' : String(r.platform)) : '–'}{r.app_build ? ' · ' + r.app_build : ''}</td>
                  <td className='r dim'>{fmt(r.tanks)}</td><td className='r'>{fmt(r.logs)}</td><td className='r dim'>{fmt(r.wcs)}</td>
                  <td className='r' style={{ color: Number(r.ai) > 0 ? PU : 'var(--dim)' }}>{fmt(r.ai)}</td>
                  <td className='r dim'>{fmt(r.livestock)}</td><td className='r dim'>{fmt(r.features)}</td>
                  <td className='dim small'>{gear || '–'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ───────────── Activity feed ───────────── */
function ActivityFeed({ e, onOpen }: { e: Eng | null; onOpen: (id: string) => void }) {
  const [kind, setKind] = useState('all');
  const feed = (e?.feed ?? []) as { at: string; kind: string; user_id: string; name: string; tank: string | null }[];
  const kinds = Array.from(new Set(feed.map((f) => f.kind)));
  const shown = kind === 'all' ? feed : feed.filter((f) => f.kind === kind);
  return (
    <section className='dpanel'>
      <div className='dpanel-head'>
        <h3>Recent activity<small>last 7 days · newest first · you are excluded</small></h3>
        <select className='sel' value={kind} onChange={(ev) => setKind(ev.target.value)} aria-label='Filter by action'>
          <option value='all'>All actions ({feed.length})</option>
          {kinds.map((k) => <option key={k} value={k}>{kindLabel(k)} ({feed.filter((f) => f.kind === k).length})</option>)}
        </select>
      </div>
      {shown.length ? (
        <div className='feed'>
          {shown.map((f, i) => (
            <button key={i} className='feed-row' onClick={() => onOpen(f.user_id)}>
              <i style={{ background: KIND[f.kind]?.color ?? '#8FA1B6' }} />
              <span className='feed-t'>{agoTime(f.at)}</span>
              <span className='feed-x'><b>{f.name}</b> {kindLabel(f.kind).toLowerCase()}{f.tank ? <em> · {f.tank}</em> : null}</span>
            </button>
          ))}
        </div>
      ) : <div className='muted-block'>No activity in the last 7 days.</div>}
    </section>
  );
}

/* ───────────── User drawer ───────────── */
function UserDrawer({ id, onClose }: { id: string; onClose: () => void }) {
  const [d, setD] = useState<Eng | null>(null);
  const [err, setErr] = useState<string | null>(null);
  useEffect(() => {
    let live = true;
    setD(null); setErr(null);
    createClient().rpc('admin_user_detail', { p_user: id }).then(({ data, error }) => { if (!live) return; if (error) setErr(error.message); else setD(data as Eng); });
    const onKey = (ev: KeyboardEvent) => { if (ev.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => { live = false; window.removeEventListener('keydown', onKey); };
  }, [id, onClose]);
  const p = d?.profile ?? {};
  const counts = Object.entries((d?.counts ?? {}) as Record<string, number>).filter(([k]) => k !== 'open').sort((a, b) => b[1] - a[1]);
  const days = new Map<string, number>(((d?.days ?? []) as { d: string; n: number }[]).map((x) => [x.d, x.n]));
  const cells = Array.from({ length: 119 }, (_, i) => { const dt = new Date(); dt.setDate(dt.getDate() - (118 - i)); const k = dt.getFullYear() + '-' + String(dt.getMonth() + 1).padStart(2, '0') + '-' + String(dt.getDate()).padStart(2, '0'); return { k, n: days.get(k) ?? 0 }; });
  const activeDays = cells.filter((c) => c.n).length;
  const status = p.paid_until && new Date(p.paid_until).getTime() > Date.now() ? 'paying' : p.trial_ends_at && new Date(p.trial_ends_at).getTime() > Date.now() ? 'trial' : 'free';
  return (
    <div className='drawer-wrap' onClick={onClose}>
      <aside className='drawer' role='dialog' aria-modal='true' aria-label='User details' onClick={(ev) => ev.stopPropagation()}>
        <div className='drawer-head'>
          <div style={{ minWidth: 0 }}>
            <h2>{p.name || (d ? 'Unnamed user' : err ? 'User' : 'Loading…')}</h2>
            <div className='dim small'>{p.email ?? ''}</div>
          </div>
          <button className='ghost-btn sm' onClick={onClose}>Close <kbd>Esc</kbd></button>
        </div>
        {err ? <div className='muted-block'>Couldn’t load this user: {err}</div> : null}
        {d ? (
          <>
            <div className='drawer-facts'>
              <div><small>Status</small><span className={'stat ' + status}>{status}</span></div>
              <div><small>Joined</small><b>{d2(p.created_at)}</b></div>
              <div><small>Last seen</small><b>{ago(p.last_seen_at)}</b></div>
              <div><small>Device</small><b>{p.platform ? (p.platform === 'ios' ? 'iOS' : 'Android') : '–'}{p.app_build ? ' · ' + p.app_build : ''}</b></div>
              <div><small>Push</small><b>{p.push ? 'On' : 'Off'}</b></div>
              <div><small>Trial ends</small><b>{d2(p.trial_ends_at)}</b></div>
              <div><small>Tanks</small><b>{((d?.tanks ?? []) as unknown[]).length}</b></div>
              <div><small>Web portal</small><b>{d?.portal?.last ? ago(d.portal.last) + ' · ' + d.portal.days + 'd' : 'never'}</b></div>
            </div>
            <div className='dpanel-sub'>Activity · last 17 weeks · {activeDays} active days</div>
            <div className='udays'>{cells.map((c) => <i key={c.k} title={c.k + (c.n ? ' · ' + c.n + ' actions' : '')} style={{ background: c.n === 0 ? 'var(--raised)' : c.n < 3 ? 'rgba(46,230,207,.35)' : c.n < 8 ? 'rgba(46,230,207,.65)' : CY }} />)}</div>
            <div className='dpanel-sub'>What they use</div>
            <div className='chips'>{counts.length ? counts.map(([k, n]) => <span key={k} className='chip'><b>{fmt(n)}</b> {KIND[k]?.feature ?? k}</span>) : <span className='dim small'>Nothing yet.</span>}</div>
            <div className='dpanel-sub'>Tanks</div>
            {((d.tanks ?? []) as Record<string, any>[]).map((t) => (
              <div key={t.id} className='utank'>
                <div><b>{t.name}</b><span className='dim'> · {String(t.type ?? '').replace(/_/g, ' ')}{t.gallons ? ' · ' + t.gallons + ' gal' : ''}{t.sump ? ' + ' + t.sump : ''}{t.public ? ' · public' : ''}</span></div>
                <div className='dim small'>{fmt(t.logs)} logs{t.last_log ? ' · last ' + ago(t.last_log) : ''} · {fmt(t.livestock)} livestock · {fmt(t.equipment)} equipment{t.reef_score != null ? ' · Reef Score ' + t.reef_score : ''}{t.journey === 'active' ? ' · New Tank Guide phase ' + t.phase : ''}</div>
              </div>
            ))}
            {!(d.tanks ?? []).length ? <div className='dim small'>No tanks.</div> : null}
            <div className='dpanel-sub'>Recent actions</div>
            <div className='timeline'>
              {((d.recent ?? []) as Record<string, any>[]).slice(0, 20).map((r, i) => (
                <div key={i} className='tl-row'><i style={{ background: KIND[r.kind]?.color ?? '#8FA1B6' }} /><span className='tl-d'>{ago(r.at)}</span><span className='tl-x'>{kindLabel(r.kind)}{r.tank ? ' · ' + r.tank : ''}</span></div>
              ))}
            </div>
            {(d.chat_sample ?? []).length ? (
              <>
                <div className='dpanel-sub'>Latest AI Chat questions</div>
                {(d.chat_sample as Record<string, any>[]).map((c, i) => <div key={i} className='chatq'><span className='dim small'>{ago(c.at)}</span>{c.q}</div>)}
              </>
            ) : null}
          </>
        ) : !err ? <div className='dash-loading'>Loading…</div> : null}
      </aside>
    </div>
  );
}
