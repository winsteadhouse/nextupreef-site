'use client';
import { useState, useMemo } from 'react';
import { ResponsiveContainer, ComposedChart, LineChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceArea, ReferenceLine, Brush } from 'recharts';

const DEG = String.fromCharCode(176);
const UP = String.fromCharCode(9650);
const DN = String.fromCharCode(9660);

type P = { key: string; label: string; unit: string; color: string; lo: number; hi: number; dec: number; axis: [number, number] };
const BASE_PARAMS: P[] = [
  { key: 'alk', label: 'Alkalinity', unit: 'dKH', color: '#38BDF8', lo: 8.0, hi: 9.5, dec: 2, axis: [6, 12] },
  { key: 'ca', label: 'Calcium', unit: 'ppm', color: '#A78BFA', lo: 400, hi: 450, dec: 0, axis: [350, 500] },
  { key: 'mg', label: 'Magnesium', unit: 'ppm', color: '#34D399', lo: 1300, hi: 1400, dec: 0, axis: [1200, 1500] },
  { key: 'no3', label: 'Nitrate', unit: 'ppm', color: '#22C55E', lo: 2, hi: 10, dec: 1, axis: [0, 25] },
  { key: 'po4', label: 'Phosphate', unit: 'ppm', color: '#F59E0B', lo: 0.03, hi: 0.10, dec: 3, axis: [0, 0.3] },
  { key: 'salinity', label: 'Salinity', unit: 'SG', color: '#2DD4BF', lo: 1.025, hi: 1.026, dec: 3, axis: [1.022, 1.028] },
  { key: 'ph', label: 'pH', unit: '', color: '#E879F9', lo: 7.9, hi: 8.4, dec: 2, axis: [7.6, 8.6] },
  { key: 'temp', label: 'Temp', unit: DEG + 'F', color: '#60A5FA', lo: 76, hi: 82, dec: 1, axis: [72, 86] },
];
const BASE_PMAP: Record<string, P> = Object.fromEntries(BASE_PARAMS.map((p) => [p.key, p] as [string, P]));

const EVENT_META: Record<string, { color: string; label: string }> = {
  wc: { color: '#5B8DEF', label: 'Water change' },
  live: { color: '#34D399', label: 'Livestock' },
  equip: { color: '#A78BFA', label: 'Equipment' },
  dose: { color: '#F6A623', label: 'Dosing change' },
};
const PARAM_FOR_DOSE: Record<string, string> = { alkalinity: 'alk', kalkwasser: 'alk', calcium: 'ca', magnesium: 'mg' };

type Log = { t: number; alk: number | null; ca: number | null; mg: number | null; no3: number | null; po4: number | null; salinity: number | null; ph: number | null; temp: number | null };
type Score = { t: number; reef: number | null; stab: number | null; rank: number | null; total: number | null };
type Ev = { t: number; type: string; label: string };
type Dose = { t: number; product: string; param: string; ml: number };
type DayRow = { t: number; [k: string]: number | null };
type Pt = { t: number; v: number };

const GRID = 'rgba(125,165,210,.10)';
const AXIS = '#566679';
const panel = { background: 'var(--panel)', border: '1px solid var(--hair)', borderRadius: 'var(--r)', padding: '16px 18px' } as const;

function gv(l: Log, k: string): number | null { return (l as unknown as Record<string, number | null>)[k]; }
function fmtDate(ms: number) { return new Date(ms).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); }
function fmtVal(v: number | null | undefined, dec: number) { return (v == null || isNaN(v)) ? '-' : v.toFixed(dec); }

function regress(pts: Pt[]): { t0: number; slope: number; intercept: number } | null {
  const n = pts.length;
  if (n < 2) return null;
  const t0 = pts[0].t;
  const xs = pts.map((p) => (p.t - t0) / 86400000);
  const ys = pts.map((p) => p.v);
  const mx = xs.reduce((a, b) => a + b, 0) / n;
  const my = ys.reduce((a, b) => a + b, 0) / n;
  let num = 0, den = 0;
  for (let i = 0; i < n; i++) { num += (xs[i] - mx) * (ys[i] - my); den += (xs[i] - mx) * (xs[i] - mx); }
  const slope = den ? num / den : 0;
  return { t0, slope, intercept: my - slope * mx };
}
function movingAvg(pts: Pt[], w: number): Map<number, number> {
  const m = new Map<number, number>();
  for (let i = 0; i < pts.length; i++) {
    const s = Math.max(0, i - w + 1);
    let sum = 0;
    for (let j = s; j <= i; j++) sum += pts[j].v;
    m.set(pts[i].t, sum / (i - s + 1));
  }
  return m;
}

function ChartTip({ active, payload, label }: { active?: boolean; payload?: { dataKey?: string; value?: number; color?: string }[]; label?: number }) {
  if (!active || !payload || !payload.length) return null;
  const rows = payload.filter((it) => it.value != null && !(it.dataKey && String(it.dataKey).indexOf('_') === 0));
  if (!rows.length) return null;
  return (
    <div style={{ background: '#0C121D', border: '1px solid rgba(125,165,210,.18)', borderRadius: 8, padding: '8px 10px', fontSize: 12 }}>
      <div style={{ color: 'var(--dim)', marginBottom: 4 }}>{label != null ? new Date(label).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}</div>
      {rows.map((it, i) => {
        const pp = it.dataKey ? BASE_PMAP[it.dataKey] : undefined;
        const lab = pp ? pp.label : (it.dataKey === 'reef' ? 'Reef Score' : it.dataKey === 'stab' ? 'Stability' : it.dataKey === 'rank' ? 'Community rank' : String(it.dataKey));
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'var(--hi)', padding: '1px 0' }}>
            <span style={{ width: 8, height: 8, borderRadius: 9, background: it.color, flex: 'none' }} />
            <span style={{ color: 'var(--mid)' }}>{lab}</span>
            <span style={{ marginLeft: 'auto', fontWeight: 700 }}>{pp ? fmtVal(it.value, pp.dec) + (pp.unit ? ' ' + pp.unit : '') : String(it.value)}</span>
          </div>
        );
      })}
    </div>
  );
}

function lastTwo(logs: Log[], key: string): [number | null, number | null] {
  const vals = logs.filter((l) => gv(l, key) != null).map((l) => gv(l, key) as number);
  const n = vals.length;
  return [n ? vals[n - 1] : null, n > 1 ? vals[n - 2] : null];
}

export default function AnalyticsClient({ tankName, logs, scores, events, doseDaily, targets }: { tankName: string; logs: Log[]; scores: Score[]; events: Ev[]; doseDaily: Dose[]; targets: Record<string, { min: number; max: number }> }) {
  const PARAMS = BASE_PARAMS.map((p) => ({ ...p, lo: targets[p.key]?.min ?? p.lo, hi: targets[p.key]?.max ?? p.hi }));
  const PMAP: Record<string, P> = Object.fromEntries(PARAMS.map((p) => [p.key, p] as [string, P]));
  const [range, setRange] = useState<string>('all');
  const [focus, setFocus] = useState<string>('alk');
  const [overlay, setOverlay] = useState<string>('none');
  const [showEvents, setShowEvents] = useState<boolean>(true);
  const [showMA, setShowMA] = useState<boolean>(false);
  const [showTrend, setShowTrend] = useState<boolean>(false);

  const cutoff = useMemo(() => (range === 'all' ? 0 : Date.now() - Number(range) * 86400000), [range]);
  const fLogs = useMemo(() => logs.filter((l) => l.t >= cutoff), [logs, cutoff]);
  const fScores = useMemo(() => scores.filter((s) => s.t >= cutoff), [scores, cutoff]);
  const fEvents = useMemo(() => events.filter((e) => e.t >= cutoff), [events, cutoff]);

  const fp = PMAP[focus];
  const op = overlay !== 'none' ? PMAP[overlay] : null;

  const focusSeries = useMemo<Pt[]>(() => fLogs.filter((l) => gv(l, focus) != null).map((l) => ({ t: l.t, v: gv(l, focus) as number })), [fLogs, focus]);
  const reg = useMemo(() => regress(focusSeries), [focusSeries]);
  const maMap = useMemo(() => movingAvg(focusSeries, 7), [focusSeries]);
  const stats = useMemo(() => {
    const vals = focusSeries.map((p) => p.v);
    const n = vals.length;
    const min = n ? Math.min(...vals) : null;
    const max = n ? Math.max(...vals) : null;
    const avg = n ? vals.reduce((a, b) => a + b, 0) / n : null;
    return { n, min, max, avg, swing: (min != null && max != null) ? max - min : null, slope: reg ? reg.slope : null, last: n ? vals[n - 1] : null };
  }, [focusSeries, reg]);
  const chartData = useMemo(() => fLogs.map((l) => ({ ...l, _ma: maMap.has(l.t) ? maMap.get(l.t) : null, _trend: reg ? (reg.intercept + reg.slope * ((l.t - reg.t0) / 86400000)) : null })), [fLogs, maMap, reg]);
  const doseProducts = useMemo(() => Array.from(new Set(doseDaily.map((d) => d.product))), [doseDaily]);
  const [doseProd, setDoseProd] = useState<string>(() => { const ps = Array.from(new Set(doseDaily.map((d) => d.product))); return ps.indexOf('Alkalinity') >= 0 ? 'Alkalinity' : (ps[0] || ''); });
  const doseView = useMemo(() => {
    const rows = doseDaily.filter((d) => d.product === doseProd && d.t >= cutoff);
    const dparam = rows.length ? rows[0].param : '';
    const tankKey = PARAM_FOR_DOSE[dparam] || '';
    const pp = tankKey ? PMAP[tankKey] : null;
    const reads: Pt[] = tankKey ? fLogs.filter((l) => gv(l, tankKey) != null).map((l) => ({ t: l.t, v: gv(l, tankKey) as number })) : [];
    const m = new Map<number, { t: number; ml?: number; pv?: number }>();
    for (const r of rows) m.set(r.t, { t: r.t, ml: r.ml });
    for (const r of reads) { const e = m.get(r.t) || { t: r.t }; e.pv = r.v; m.set(r.t, e); }
    const data = Array.from(m.values()).sort((a, b) => a.t - b.t);
    const mls = rows.map((r) => r.ml);
    const avgMl = mls.length ? mls.reduce((a, b) => a + b, 0) / mls.length : null;
    const reg2 = regress(reads);
    return { data, pp, avgMl, slope: reg2 ? reg2.slope : null, nReads: reads.length };
  }, [doseDaily, doseProd, cutoff, fLogs]);
  const dailyRows = useMemo(() => {
    const byDay = new Map<string, { t: number; sum: Record<string, number>; cnt: Record<string, number> }>();
    for (const l of fLogs) {
      const dd = new Date(l.t);
      const key = dd.getFullYear() + '-' + (dd.getMonth() + 1) + '-' + dd.getDate();
      let e = byDay.get(key);
      if (!e) { e = { t: new Date(dd.getFullYear(), dd.getMonth(), dd.getDate(), 12, 0, 0).getTime(), sum: {}, cnt: {} }; byDay.set(key, e); }
      for (const pr of PARAMS) { const v = gv(l, pr.key); if (v != null) { e.sum[pr.key] = (e.sum[pr.key] || 0) + v; e.cnt[pr.key] = (e.cnt[pr.key] || 0) + 1; } }
    }
    const rows: DayRow[] = Array.from(byDay.values()).map((e) => { const o: DayRow = { t: e.t }; for (const pr of PARAMS) o[pr.key] = e.cnt[pr.key] ? e.sum[pr.key] / e.cnt[pr.key] : null; return o; });
    rows.sort((a, b) => b.t - a.t);
    return rows;
  }, [fLogs]);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <h1>Analytics</h1>
        <span style={{ fontSize: 13, color: 'var(--dim)' }}>{tankName + ' . ' + logs.length + ' logs . ' + scores.length + ' score days'}</span>
      </div>

      <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' }}>
        {[['30', '30 days'], ['90', '90 days'], ['all', 'All time']].map(([v, lab]) => (
          <button key={v} onClick={() => setRange(v)} style={{ cursor: 'pointer', fontSize: 12, fontWeight: 600, padding: '6px 13px', borderRadius: 8, border: '1px solid ' + (range === v ? 'var(--cyan)' : 'var(--hair)'), background: range === v ? 'rgba(46,230,207,.12)' : 'transparent', color: range === v ? 'var(--cyan)' : 'var(--mid)' }}>{lab}</button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(165px, 1fr))', gap: 12, marginTop: 16 }}>
        {PARAMS.map((p) => {
          const [cur, prev] = lastTwo(fLogs, p.key);
          const inBand = cur != null && cur >= p.lo && cur <= p.hi;
          const stColor = cur == null ? 'var(--dim)' : inBand ? 'var(--good)' : 'var(--amber)';
          const delta = (cur != null && prev != null) ? cur - prev : null;
          const spark = fLogs.filter((l) => gv(l, p.key) != null).map((l) => ({ t: l.t, v: gv(l, p.key) as number }));
          const active = focus === p.key;
          return (
            <button key={p.key} onClick={() => setFocus(p.key)} style={{ textAlign: 'left', cursor: 'pointer', ...panel, padding: '12px 13px', borderColor: active ? p.color : 'var(--hair)', boxShadow: active ? '0 0 0 1px ' + p.color : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 11.5, color: 'var(--mid)', fontWeight: 600 }}>{p.label}</span>
                <span style={{ width: 7, height: 7, borderRadius: 9, background: stColor, flex: 'none' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, marginTop: 4 }}>
                <span style={{ fontSize: 21, fontWeight: 800, color: 'var(--hi)' }}>{fmtVal(cur, p.dec)}</span>
                <span style={{ fontSize: 10.5, color: 'var(--dim)' }}>{p.unit}</span>
                {delta != null && Math.abs(delta) > 0 ? (
                  <span style={{ fontSize: 10.5, color: 'var(--dim)', marginLeft: 'auto' }}>{(delta > 0 ? UP : DN) + ' ' + Math.abs(delta).toFixed(p.dec)}</span>
                ) : null}
              </div>
              <div style={{ height: 30, marginTop: 6, marginLeft: -4, marginRight: -4 }}>
                {spark.length > 1 ? (
                  <ResponsiveContainer width='100%' height='100%'>
                    <LineChart data={spark}>
                      <Line type='monotone' dataKey='v' stroke={p.color} strokeWidth={1.6} dot={false} isAnimationActive={false} />
                    </LineChart>
                  </ResponsiveContainer>
                ) : <div style={{ fontSize: 10, color: 'var(--dim)', paddingTop: 9 }}>{spark.length === 1 ? 'one reading' : 'no data'}</div>}
              </div>
              <div style={{ fontSize: 10, color: 'var(--dim)', marginTop: 4 }}>{'target ' + p.lo + ' to ' + p.hi}</div>
            </button>
          );
        })}
      </div>

      <div style={{ ...panel, marginTop: 18 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--hi)' }}>{fp.label + ' trend'}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
            <Toggle on={showEvents} onClick={() => setShowEvents(!showEvents)} label='Events' />
            <Toggle on={showMA} onClick={() => setShowMA(!showMA)} label='7-pt avg' />
            <Toggle on={showTrend} onClick={() => setShowTrend(!showTrend)} label='Trend' />
            <span style={{ fontSize: 11, color: 'var(--dim)', marginLeft: 4 }}>overlay</span>
            <select value={overlay} onChange={(e) => setOverlay(e.target.value)} style={{ fontSize: 12, background: '#0C121D', color: 'var(--hi)', border: '1px solid var(--hair)', borderRadius: 7, padding: '5px 8px' }}>
              <option value='none'>none</option>
              {PARAMS.filter((p) => p.key !== focus).map((p) => <option key={p.key} value={p.key}>{p.label}</option>)}
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', marginBottom: 14, paddingBottom: 12, borderBottom: '1px solid var(--hair)' }}>
          <Stat label='Latest' value={fmtVal(stats.last, fp.dec) + (fp.unit ? ' ' + fp.unit : '')} />
          <Stat label='Average' value={fmtVal(stats.avg, fp.dec)} />
          <Stat label='Min' value={fmtVal(stats.min, fp.dec)} />
          <Stat label='Max' value={fmtVal(stats.max, fp.dec)} />
          <Stat label='Swing' value={fmtVal(stats.swing, fp.dec)} />
          <Stat label='Trend / day' value={stats.slope == null ? '-' : (stats.slope >= 0 ? UP : DN) + ' ' + Math.abs(stats.slope).toFixed(Math.min(3, fp.dec + 1))} color={stats.slope == null ? undefined : Math.abs(stats.slope) < (fp.hi - fp.lo) / 20 ? 'var(--good)' : 'var(--amber)'} />
          <Stat label='Readings' value={String(stats.n)} />
        </div>

        <div style={{ height: 320 }}>
          <ResponsiveContainer width='100%' height='100%'>
            <ComposedChart data={chartData} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
              <CartesianGrid stroke={GRID} vertical={false} />
              <XAxis dataKey='t' type='number' scale='time' domain={['dataMin', 'dataMax']} tickFormatter={fmtDate} tick={{ fontSize: 11, fill: AXIS }} stroke={GRID} />
              <YAxis yAxisId='L' domain={fp.axis} tick={{ fontSize: 11, fill: AXIS }} stroke={GRID} width={44} />
              {op ? <YAxis yAxisId='R' orientation='right' domain={op.axis} tick={{ fontSize: 11, fill: AXIS }} stroke={GRID} width={44} /> : null}
              <ReferenceArea yAxisId='L' y1={fp.lo} y2={fp.hi} fill={fp.color} fillOpacity={0.10} stroke={fp.color} strokeOpacity={0.25} />
              {showEvents ? fEvents.map((ev, i) => <ReferenceLine key={'ev' + i} yAxisId='L' x={ev.t} stroke={EVENT_META[ev.type] ? EVENT_META[ev.type].color : '#8FA1B6'} strokeDasharray='3 4' strokeOpacity={0.55} />) : null}
              <Tooltip content={(tp: any) => <ChartTip {...tp} />} />
              <Line yAxisId='L' type='monotone' dataKey={focus} stroke={fp.color} strokeWidth={2.2} dot={{ r: 2.5, fill: fp.color }} connectNulls isAnimationActive={false} />
              {op ? <Line yAxisId='R' type='monotone' dataKey={overlay} stroke={op.color} strokeWidth={1.8} strokeDasharray='5 3' dot={{ r: 2, fill: op.color }} connectNulls isAnimationActive={false} /> : null}
              {showMA ? <Line yAxisId='L' type='monotone' dataKey='_ma' stroke={fp.color} strokeWidth={1.4} strokeDasharray='2 3' strokeOpacity={0.8} dot={false} connectNulls isAnimationActive={false} /> : null}
              {showTrend ? <Line yAxisId='L' type='linear' dataKey='_trend' stroke='#8FA1B6' strokeWidth={1.5} strokeDasharray='6 4' dot={false} connectNulls isAnimationActive={false} /> : null}
              <Brush dataKey='t' height={20} stroke='#2E3A4D' travellerWidth={8} tickFormatter={fmtDate} fill='#0C121D' />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {showEvents && fEvents.length ? (
          <div style={{ marginTop: 12 }}>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 8 }}>
              {Object.keys(EVENT_META).map((k) => (
                <span key={k} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--mid)' }}><span style={{ width: 10, height: 3, borderRadius: 2, background: EVENT_META[k].color }} />{EVENT_META[k].label}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
              {[...fEvents].reverse().map((ev, i) => (
                <div key={i} style={{ flex: 'none', display: 'flex', alignItems: 'center', gap: 7, fontSize: 11, background: '#0C121D', border: '1px solid var(--hair)', borderRadius: 8, padding: '5px 9px', whiteSpace: 'nowrap' }}>
                  <span style={{ width: 7, height: 7, borderRadius: 9, background: EVENT_META[ev.type] ? EVENT_META[ev.type].color : '#8FA1B6', flex: 'none' }} />
                  <span style={{ color: 'var(--dim)' }}>{fmtDate(ev.t)}</span>
                  <span style={{ color: 'var(--hi)' }}>{ev.label}</span>
                </div>
              ))}
            </div>
          </div>
        ) : <div style={{ fontSize: 11, color: 'var(--dim)', marginTop: 6 }}>drag the bar below the chart to zoom a date range</div>}
      </div>

      <div style={{ ...panel, marginTop: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--hi)' }}>Dosing vs uptake</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 11, color: 'var(--dim)' }}>doser</span>
            <select value={doseProd} onChange={(e) => setDoseProd(e.target.value)} style={{ fontSize: 12, background: '#0C121D', color: 'var(--hi)', border: '1px solid var(--hair)', borderRadius: 7, padding: '5px 8px' }}>
              {doseProducts.map((pr) => <option key={pr} value={pr}>{pr}</option>)}
            </select>
          </div>
        </div>
        {doseProducts.length ? (
          <>
            <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', marginBottom: 14, paddingBottom: 12, borderBottom: '1px solid var(--hair)' }}>
              <Stat label='Avg dose / day' value={doseView.avgMl == null ? '-' : Math.round(doseView.avgMl) + ' mL'} />
              <Stat label={(doseView.pp ? doseView.pp.label : 'Param') + ' readings'} value={String(doseView.nReads)} />
              <Stat label={(doseView.pp ? doseView.pp.label : 'Param') + ' trend / day'} value={doseView.slope == null ? '-' : (doseView.slope >= 0 ? UP : DN) + ' ' + Math.abs(doseView.slope).toFixed(doseView.pp ? Math.min(3, doseView.pp.dec + 1) : 2)} />
            </div>
            <div style={{ height: 280 }}>
              <ResponsiveContainer width='100%' height='100%'>
                <ComposedChart data={doseView.data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke={GRID} vertical={false} />
                  <XAxis dataKey='t' type='number' scale='time' domain={['dataMin', 'dataMax']} tickFormatter={fmtDate} tick={{ fontSize: 11, fill: AXIS }} stroke={GRID} />
                  <YAxis yAxisId='D' tick={{ fontSize: 11, fill: AXIS }} stroke={GRID} width={44} />
                  {doseView.pp ? <YAxis yAxisId='V' orientation='right' domain={doseView.pp.axis} tick={{ fontSize: 11, fill: AXIS }} stroke={GRID} width={44} /> : null}
                  {doseView.pp ? <ReferenceArea yAxisId='V' y1={doseView.pp.lo} y2={doseView.pp.hi} fill={doseView.pp.color} fillOpacity={0.08} stroke={doseView.pp.color} strokeOpacity={0.2} /> : null}
                  <Tooltip content={(tp: any) => { if (!tp || !tp.active || !tp.payload || !tp.payload.length) return null; const ml = tp.payload.find((x: any) => x.dataKey === 'ml'); const pv = tp.payload.find((x: any) => x.dataKey === 'pv'); return (<div style={{ background: '#0C121D', border: '1px solid rgba(125,165,210,.18)', borderRadius: 8, padding: '8px 10px', fontSize: 12 }}><div style={{ color: 'var(--dim)', marginBottom: 4 }}>{tp.label != null ? new Date(tp.label).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}</div>{ml && ml.value != null ? <div style={{ color: 'var(--hi)' }}>{'Dosed ' + Math.round(ml.value) + ' mL'}</div> : null}{pv && pv.value != null && doseView.pp ? <div style={{ color: doseView.pp.color }}>{doseView.pp.label + ' ' + Number(pv.value).toFixed(doseView.pp.dec) + (doseView.pp.unit ? ' ' + doseView.pp.unit : '')}</div> : null}</div>); }} />
                  <Bar yAxisId='D' dataKey='ml' fill='#5B8DEF' fillOpacity={0.55} radius={[2, 2, 0, 0]} isAnimationActive={false} />
                  {doseView.pp ? <Line yAxisId='V' type='monotone' dataKey='pv' stroke={doseView.pp.color} strokeWidth={2.2} dot={{ r: 2.5, fill: doseView.pp.color }} connectNulls isAnimationActive={false} /> : null}
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div style={{ fontSize: 11, color: 'var(--dim)', marginTop: 6 }}>bars = mL dosed per day . line = measured {doseView.pp ? doseView.pp.label : 'level'} . shaded band = target</div>
          </>
        ) : <div style={{ fontSize: 12.5, color: 'var(--dim)' }}>No automated dosing recorded.</div>}
      </div>

      <div style={{ ...panel, marginTop: 14 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--hi)', marginBottom: 6 }}>Reef and Stability scores<span style={{ fontSize: 11.5, fontWeight: 400, color: 'var(--dim)', marginLeft: 8 }}>community rank on right axis (lower is better)</span></div>
        <div style={{ height: 260 }}>
          <ResponsiveContainer width='100%' height='100%'>
            <ComposedChart data={fScores} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id='reefFill' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='0%' stopColor='#2EE6CF' stopOpacity={0.35} />
                  <stop offset='100%' stopColor='#2EE6CF' stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke={GRID} vertical={false} />
              <XAxis dataKey='t' type='number' scale='time' domain={['dataMin', 'dataMax']} tickFormatter={fmtDate} tick={{ fontSize: 11, fill: AXIS }} stroke={GRID} />
              <YAxis yAxisId='S' domain={[0, 100]} tick={{ fontSize: 11, fill: AXIS }} stroke={GRID} width={36} />
              <YAxis yAxisId='K' orientation='right' reversed domain={[1, 'dataMax']} tick={{ fontSize: 11, fill: AXIS }} stroke={GRID} width={36} />
              <Tooltip content={(tp: any) => <ChartTip {...tp} />} />
              <Area yAxisId='S' type='monotone' dataKey='reef' stroke='#2EE6CF' strokeWidth={2.2} fill='url(#reefFill)' connectNulls isAnimationActive={false} />
              <Line yAxisId='S' type='monotone' dataKey='stab' stroke='#5B8DEF' strokeWidth={2} dot={false} connectNulls isAnimationActive={false} />
              <Line yAxisId='K' type='monotone' dataKey='rank' stroke='#F6A623' strokeWidth={1.6} strokeDasharray='4 3' dot={false} connectNulls isAnimationActive={false} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div style={{ display: 'flex', gap: 16, marginTop: 6, fontSize: 11, color: 'var(--mid)', flexWrap: 'wrap' }}>
          <Legend2 c='#2EE6CF' t='Reef Score' />
          <Legend2 c='#5B8DEF' t='Stability' />
          <Legend2 c='#F6A623' t='Community rank' />
        </div>
      </div>

      <div style={{ ...panel, marginTop: 14, padding: 0, overflow: 'hidden' }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--hi)', padding: '15px 18px 10px' }}>Daily readings<span style={{ fontSize: 11.5, fontWeight: 400, color: 'var(--dim)', marginLeft: 8 }}>one row per logged day, averaged . days with no readings are skipped</span></div>
        <div style={{ overflowX: 'auto', overflowY: 'auto', maxHeight: 460 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12.5 }}>
            <thead>
              <tr>
                <th style={thStyle}>Date</th>
                {PARAMS.map((p) => <th key={p.key} style={{ ...thStyle, textAlign: 'right' }}>{p.label}</th>)}
              </tr>
            </thead>
            <tbody>
              {dailyRows.map((l, i) => (
                <tr key={i}>
                  <td style={{ ...tdStyle, color: 'var(--dim)' }}>{new Date(l.t).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</td>
                  {PARAMS.map((p) => {
                    const v = l[p.key];
                    const bad = v != null && (v < p.lo || v > p.hi);
                    return <td key={p.key} style={{ ...tdStyle, textAlign: 'right', color: v == null ? 'var(--dim)' : bad ? '#FF8585' : 'var(--hi)', background: bad ? 'rgba(255,93,93,.08)' : 'transparent', fontWeight: bad ? 700 : 400 }}>{fmtVal(v, p.dec)}</td>;
                  })}
                </tr>
              ))}
              {!dailyRows.length ? <tr><td colSpan={PARAMS.length + 1} style={{ ...tdStyle, color: 'var(--dim)' }}>No logs in range.</td></tr> : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Toggle({ on, onClick, label }: { on: boolean; onClick: () => void; label: string }) {
  return <button onClick={onClick} style={{ cursor: 'pointer', fontSize: 11.5, fontWeight: 600, padding: '6px 11px', borderRadius: 8, border: '1px solid ' + (on ? 'var(--cyan)' : 'var(--hair)'), background: on ? 'rgba(46,230,207,.12)' : 'transparent', color: on ? 'var(--cyan)' : 'var(--mid)' }}>{label}</button>;
}
function Stat({ label, value, color }: { label: string; value: string; color?: string }) {
  return <div style={{ flex: '0 0 auto', minWidth: 72 }}><div style={{ fontSize: 10, color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '.4px' }}>{label}</div><div style={{ fontSize: 16, fontWeight: 700, color: color || 'var(--hi)', marginTop: 2 }}>{value}</div></div>;
}
function Legend2({ c, t }: { c: string; t: string }) {
  return <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 10, height: 3, borderRadius: 2, background: c }} />{t}</span>;
}

const thStyle = { textAlign: 'left', padding: '9px 12px', color: 'var(--mid)', fontWeight: 600, borderBottom: '1px solid var(--hair)', whiteSpace: 'nowrap', position: 'sticky', top: 0, background: 'var(--panel)' } as const;
const tdStyle = { padding: '8px 12px', borderBottom: '1px solid var(--hair)', whiteSpace: 'nowrap' } as const;
