'use client';
import { useState, type MouseEvent } from 'react';

type Pt = { t: string; v: number };
type Targets = Record<string, { lo: number; hi: number; unit: string; label: string; color: string }>;

function niceTicks(min: number, max: number, count = 5) {
  const span = (max - min) || 1;
  const step0 = span / count;
  const mag = Math.pow(10, Math.floor(Math.log10(step0)));
  const norm = step0 / mag;
  const step = (norm < 1.5 ? 1 : norm < 3 ? 2 : norm < 7 ? 5 : 10) * mag;
  const lo = Math.floor(min / step) * step;
  const hi = Math.ceil(max / step) * step;
  const ticks: number[] = [];
  for (let v = lo; v <= hi + step * 1e-6; v += step) ticks.push(v);
  return { lo, hi, step, ticks };
}

function smooth(vals: number[], win: number) {
  if (win <= 1) return vals.slice();
  const h = Math.floor(win / 2);
  const out: number[] = [];
  for (let i = 0; i < vals.length; i++) {
    let s = 0, c = 0;
    for (let j = Math.max(0, i - h); j <= Math.min(vals.length - 1, i + h); j++) { s += vals[j]; c++; }
    out.push(s / c);
  }
  return out;
}

function bez(pts: { x: number; y: number }[]) {
  if (pts.length < 2) return '';
  let d = 'M ' + pts[0].x.toFixed(1) + ' ' + pts[0].y.toFixed(1);
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const c1x = p1.x + (p2.x - p0.x) / 6, c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6, c2y = p2.y - (p3.y - p1.y) / 6;
    d += ' C ' + c1x.toFixed(1) + ' ' + c1y.toFixed(1) + ' ' + c2x.toFixed(1) + ' ' + c2y.toFixed(1) + ' ' + p2.x.toFixed(1) + ' ' + p2.y.toFixed(1);
  }
  return d;
}

function gradStops(yTop: number, yBot: number, yHi: number, yLo: number) {
  const H = (yBot - yTop) || 1;
  const o = (y: number) => Math.max(0, Math.min(1, (y - yTop) / H));
  const ohi = o(yHi), olo = o(yLo);
  const m = Math.max(0, Math.min(0.18 * (olo - ohi), ohi, 1 - olo));
  const raw = [
    { o: 0, c: '#FF5D5D' },
    { o: ohi - m, c: '#F6A623' },
    { o: ohi, c: '#36D89B' },
    { o: olo, c: '#36D89B' },
    { o: olo + m, c: '#F6A623' },
    { o: 1, c: '#FF5D5D' },
  ];
  const out: { o: number; c: string }[] = [];
  let prev = -1;
  for (const st of raw) {
    let off = Math.max(0, Math.min(1, st.o));
    if (off <= prev) off = Math.min(1, prev + 0.001);
    out.push({ o: off, c: st.c });
    prev = off;
  }
  return out;
}

export default function TrendChart({ data, targets }: { data: Record<string, Pt[]>; targets: Targets }) {
  const keys = Object.keys(targets).filter((k) => (data[k] ?? []).length > 1);
  const [sel, setSel] = useState(keys[0] ?? 'alk');
  const [hov, setHov] = useState<number | null>(null);
  const pts = data[sel] ?? [];
  const tgt = targets[sel];
  const W = 760, H = 250, padL = 46, padR = 18, padT = 14, padB = 30;
  const iw = W - padL - padR, ih = H - padT - padB;

  if (!tgt || pts.length < 2) {
    return (
      <div>
        <Pills keys={keys} sel={sel} setSel={setSel} targets={targets} />
        <div style={{ color: 'var(--dim)', fontSize: 13, padding: 20 }}>Not enough data to chart this parameter.</div>
      </div>
    );
  }

  const xs = pts.map((p) => new Date(p.t).getTime());
  const vs = pts.map((p) => p.v);
  const win = vs.length > 60 ? 5 : vs.length > 30 ? 3 : 1;
  const sv = smooth(vs, win);
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const rawMin = Math.min(...vs, tgt.lo), rawMax = Math.max(...vs, tgt.hi);
  const padV = (rawMax - rawMin) * 0.08 || 1;
  const ny = niceTicks(rawMin - padV, rawMax + padV, 5);
  const minV = ny.lo, maxV = ny.hi;
  const yd = ny.step >= 1 ? 0 : ny.step >= 0.1 ? 1 : ny.step >= 0.01 ? 2 : 3;
  const xpos = (t: number) => padL + ((t - minX) / (maxX - minX || 1)) * iw;
  const ypos = (v: number) => padT + (1 - (v - minV) / (maxV - minV || 1)) * ih;

  const linePts = sv.map((v, i) => ({ x: xpos(xs[i]), y: ypos(v) }));
  const linePath = bez(linePts);
  const areaPath = linePath + ' L ' + linePts[linePts.length - 1].x.toFixed(1) + ' ' + (padT + ih) + ' L ' + linePts[0].x.toFixed(1) + ' ' + (padT + ih) + ' Z';
  const bandTop = ypos(tgt.hi), bandBot = ypos(tgt.lo);
  const last = pts[pts.length - 1];
  const lastOut = last.v < tgt.lo || last.v > tgt.hi;
  const lastY = linePts[linePts.length - 1].y;
  const showDots = win === 1 && pts.length <= 45;
  const fmt = (ms: number) => { const d = new Date(ms); return (d.getMonth() + 1) + '/' + d.getDate(); };
  const xTicks = Array.from({ length: 5 }, (_, i) => minX + ((maxX - minX) * i) / 4);
  const stops = gradStops(padT, padT + ih, bandTop, bandBot);

  const onMove = (e: MouseEvent<SVGSVGElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const sx = ((e.clientX - r.left) / r.width) * W;
    let bi = 0, bd = Infinity;
    for (let i = 0; i < xs.length; i++) { const dd = Math.abs(xpos(xs[i]) - sx); if (dd < bd) { bd = dd; bi = i; } }
    setHov(bi);
  };
  const hp = hov != null ? pts[hov] : null;
  const hx = hp ? xpos(new Date(hp.t).getTime()) : 0;

  return (
    <div>
      <Pills keys={keys} sel={sel} setSel={setSel} targets={targets} />
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, margin: '4px 0 10px' }}>
        <span style={{ fontSize: 24, fontWeight: 600, color: lastOut ? 'var(--amber)' : 'var(--hi)' }}>{last.v}</span>
        <span style={{ fontSize: 12.5, color: 'var(--mid)' }}>{tgt.unit + (tgt.unit ? ' . ' : '') + 'target ' + tgt.lo + ' to ' + tgt.hi}</span>
      </div>
      <svg viewBox={'0 0 ' + W + ' ' + H} width='100%' style={{ height: 'auto', display: 'block' }} onMouseMove={onMove} onMouseLeave={() => setHov(null)}>
        <defs>
          <linearGradient id='lineGrad' gradientUnits='userSpaceOnUse' x1='0' y1={padT} x2='0' y2={padT + ih}>
            {stops.map((s, i) => <stop key={i} offset={(s.o * 100).toFixed(2) + '%'} stopColor={s.c} />)}
          </linearGradient>
        </defs>
        {ny.ticks.map((tv, i) => (
          <g key={i}>
            <line x1={padL} y1={ypos(tv)} x2={W - padR} y2={ypos(tv)} stroke='var(--hair)' strokeWidth={1} />
            <text x={padL - 7} y={ypos(tv) + 3.5} fontSize={10} fill='var(--dim)' textAnchor='end'>{tv.toFixed(yd)}</text>
          </g>
        ))}
        <rect x={padL} y={Math.min(bandTop, bandBot)} width={iw} height={Math.abs(bandBot - bandTop)} fill='rgba(54,216,155,.10)' />
        <line x1={padL} y1={bandTop} x2={W - padR} y2={bandTop} stroke='rgba(54,216,155,.38)' strokeWidth={1} strokeDasharray='3 3' />
        <line x1={padL} y1={bandBot} x2={W - padR} y2={bandBot} stroke='rgba(54,216,155,.38)' strokeWidth={1} strokeDasharray='3 3' />
        <text x={W - padR} y={bandTop - 4} fontSize={9.5} fill='var(--good)' textAnchor='end'>{tgt.hi}</text>
        <text x={W - padR} y={bandBot + 11} fontSize={9.5} fill='var(--good)' textAnchor='end'>{tgt.lo}</text>
        <path d={areaPath} fill='rgba(125,165,210,.05)' stroke='none' />
        <path d={linePath} fill='none' stroke='url(#lineGrad)' strokeWidth={2.4} strokeLinejoin='round' strokeLinecap='round' />
        {showDots ? pts.map((p, i) => { const out = p.v < tgt.lo || p.v > tgt.hi; return <circle key={i} cx={xpos(xs[i])} cy={ypos(p.v)} r={out ? 2.8 : 1.8} fill={out ? 'var(--bad)' : 'var(--good)'} />; }) : null}
        <circle cx={linePts[linePts.length - 1].x} cy={lastY} r={4.2} fill={lastOut ? 'var(--bad)' : 'var(--good)'} stroke='var(--panel)' strokeWidth={1.5} />
        {xTicks.map((tx, i) => (<text key={i} x={xpos(tx)} y={H - 9} fontSize={10} fill='var(--dim)' textAnchor={i === 0 ? 'start' : i === 4 ? 'end' : 'middle'}>{fmt(tx)}</text>))}
        {hp ? (
          <g>
            <line x1={hx} y1={padT} x2={hx} y2={padT + ih} stroke='var(--hair-2)' strokeWidth={1} />
            <circle cx={hx} cy={ypos(hp.v)} r={3.5} fill='var(--hi)' />
            <g transform={'translate(' + Math.min(W - padR - 92, Math.max(padL, hx - 46)) + ',' + (padT + 2) + ')'}>
              <rect width={92} height={34} rx={6} fill='var(--raised)' stroke='var(--hair-2)' />
              <text x={9} y={15} fontSize={11} fill='var(--hi)' fontWeight={600}>{hp.v + (tgt.unit ? ' ' + tgt.unit : '')}</text>
              <text x={9} y={28} fontSize={10} fill='var(--mid)'>{fmt(new Date(hp.t).getTime())}</text>
            </g>
          </g>
        ) : null}
      </svg>
    </div>
  );
}

function Pills({ keys, sel, setSel, targets }: { keys: string[]; sel: string; setSel: (k: string) => void; targets: Targets }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
      {keys.map((k) => {
        const on = k === sel;
        const c = targets[k].color;
        return (
          <button key={k} onClick={() => setSel(k)} style={{ display: 'flex', alignItems: 'center', gap: 6, background: on ? c + '22' : 'var(--panel-2)', color: on ? c : 'var(--mid)', border: '1px solid ' + (on ? c : 'var(--hair)'), borderRadius: 999, padding: '5px 12px', fontSize: 12.5, fontWeight: 600, cursor: 'pointer' }}>
            <span style={{ width: 7, height: 7, borderRadius: 7, background: c, flex: 'none', opacity: on ? 1 : 0.55 }} />{targets[k].label}
          </button>
        );
      })}
    </div>
  );
}
