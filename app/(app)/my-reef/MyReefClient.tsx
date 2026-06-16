'use client';
import { useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

type Tank = { id: string; name: string; tank_type: string; display_gallons: number | null; sump_gallons: number | null; salt_brand: string | null; setup_date: string | null; started_at: string | null; has_refugium: boolean | null; refugium_macroalgae: string | null; dominant_coral: string | null; rock_type: string | null; journey_phase: number | null };
type Live = { id: string; name: string; species: string | null; kind: string; image: string | null; care_level: string | null; quantity: number; health_status: string | null; acquired_date: string | null; notes: string | null; custom_type: string; custom_name: string; cost: number | null };
type Equip = { id: string; name: string; brand: string | null; model: string | null; kind: string; image: string | null; install_date: string | null; notes: string | null; custom_type: string; custom_name: string; cost: number | null };
type Light = { id: string; name: string; brand: string | null; model: string | null; kind: string; image: string | null; cost: number | null; on_time: string | null; off_time: string | null; distance_inches: number | null; quantity: number | null; ramp_up_minutes: number | null; ramp_down_minutes: number | null; channels: { key: string; color: string; label: string; peak_pct: number }[]; install_date: string | null; notes: string | null; custom_type: string; custom_name: string; bound: boolean; outletName: string | null };
type Dose = { id: string; brand: string; name: string; parameter: string; daily_amount: number | null; dose_unit: string; doses_per_day: number | null; schedule: string | null; system: string | null; delivery: string | null; notes: string | null; parameters_covered: string[]; bound: boolean; outletName: string | null };
type Photo = { id: string; user_id: string | null; tank_id: string | null; photo_url: string; storage_path: string; month: string; created_at: string | null };

const LIVE_TYPES = ['fish', 'sps', 'lps', 'softie', 'anemone', 'invert'];
const EQUIP_TYPES = ['light', 'pump', 'skimmer', 'heater', 'doser', 'controller', 'ato', 'reactor'];
const HEALTH = ['healthy', 'quarantine', 'sick'];
const TANK_TYPES = ['mixed', 'sps', 'lps', 'softie', 'fowlr', 'fish_only', 'nano', 'frag'];

const KIND_COLOR: Record<string, string> = { fish: '#38bdf8', sps: '#f472b6', lps: '#a78bfa', softie: '#34d399', anemone: '#fb923c', invert: '#fbbf24', other: '#8b9eb3' };
const PARAM_COLOR: Record<string, string> = { alk: '#0ea5e9', alkalinity: '#0ea5e9', ca: '#8b5cf6', calcium: '#8b5cf6', mg: '#10b981', magnesium: '#10b981', nitrate: '#22c55e', phosphate: '#f59e0b', amino: '#ec4899', iodide: '#06b6d4', kalkwasser: '#8b5cf6', custom: '#94a3b8', other: '#94a3b8' };
const PARAM_LABEL: Record<string, string> = { alk: 'Alkalinity', alkalinity: 'Alkalinity', ca: 'Calcium', calcium: 'Calcium', mg: 'Magnesium', magnesium: 'Magnesium', nitrate: 'Nitrate', phosphate: 'Phosphate', amino: 'Amino Acids', iodide: 'Iodide / Trace', kalkwasser: 'Kalkwasser', custom: 'Custom', other: 'Other' };
const DOSE_PARAMS = [{ id: 'alk', label: 'Alkalinity' }, { id: 'ca', label: 'Calcium' }, { id: 'mg', label: 'Magnesium' }, { id: 'nitrate', label: 'Nitrate' }, { id: 'phosphate', label: 'Phosphate' }, { id: 'amino', label: 'Amino Acids' }, { id: 'iodide', label: 'Iodide / Trace' }, { id: 'kalkwasser', label: 'Kalkwasser' }, { id: 'custom', label: 'Custom' }, { id: 'other', label: 'Other' }];
const DOSE_SYSTEMS = [{ id: '2part', label: '2-Part' }, { id: 'kalkwasser', label: 'Kalkwasser' }, { id: 'all_in_one', label: 'All-in-One' }, { id: '3part', label: '3-Part / Balling' }, { id: '4part', label: '4-Part' }, { id: 'ca_reactor', label: 'Ca Reactor' }, { id: 'other', label: 'Other / Manual' }];
const DOSE_DELIVERIES = [{ id: 'doser', label: 'Auto Doser' }, { id: 'manual', label: 'Manual' }];
const DOSE_FREQ = [{ id: 'daily', label: 'Daily' }, { id: 'interval', label: 'Interval' }, { id: 'as_needed', label: 'As needed' }];
const HEALTH_COLOR: Record<string, string> = { healthy: 'var(--green)', quarantine: 'var(--yellow)', sick: '#ef4444' };

const cardCss: CSSProperties = { background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 20, color: 'var(--text-light)' };
const solidCard: CSSProperties = { background: '#0c1a28', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-lg)', color: 'var(--text-light)' };
const labelCss: CSSProperties = { fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 0.6, marginBottom: 6 };
const inputCss: CSSProperties = { width: '100%', background: 'var(--bg-darker)', border: '1px solid var(--border)', borderRadius: 10, padding: '10px 12px', color: 'var(--text-light)', fontSize: 14, boxSizing: 'border-box' };
const btnCss: CSSProperties = { background: 'var(--reef)', color: '#04121e', border: 'none', borderRadius: 10, padding: '10px 16px', fontWeight: 700, cursor: 'pointer', fontSize: 14 };
const ghostCss: CSSProperties = { background: 'transparent', color: 'var(--text-muted)', border: '1px solid var(--border)', borderRadius: 10, padding: '10px 16px', cursor: 'pointer', fontSize: 14 };
const chipCss: CSSProperties = { fontSize: 12.5, color: 'var(--text-muted)', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 999, padding: '4px 11px', textTransform: 'capitalize' };

function fmtDate(d: string | null): string { if (!d) return ''; const dt = new Date(d); if (isNaN(dt.getTime())) return ''; return dt.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }); }
function monthLabel(d: string | null): string { if (!d) return ''; const dt = new Date(d); if (isNaN(dt.getTime())) return ''; return dt.toLocaleDateString('en-US', { year: 'numeric', month: 'long' }); }
function ageFrom(d: string | null): string { if (!d) return ''; const start = new Date(d).getTime(); if (isNaN(start)) return ''; const days = Math.floor((Date.now() - start) / 86400000); if (days < 0) return ''; const years = Math.floor(days / 365); const months = Math.floor((days % 365) / 30); if (years > 0) return years + 'y ' + months + 'm'; if (months > 0) return months + 'mo'; return days + 'd'; }

function Field({ label, children }: { label: string; children: any }) { return <div style={{ marginBottom: 14 }}><div style={labelCss}>{label}</div>{children}</div>; }
function Row({ children }: { children: any }) { return <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>{children}</div>; }
function ErrBox({ msg }: { msg: string }) { return <div style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.4)', color: '#fca5a5', padding: '10px 12px', borderRadius: 10, fontSize: 13, marginBottom: 12 }}>{msg}</div>; }
function Spec({ k, v }: { k: string; v: any }) { return <div><div style={{ fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 0.7, marginBottom: 4 }}>{k}</div><div style={{ fontSize: 15, fontWeight: 700 }}>{v}</div></div>; }
const KIND_LABEL: Record<string, string> = { fish: 'Fish', sps: 'SPS', lps: 'LPS', softie: 'Softies', anemone: 'Anemones', invert: 'Inverts', other: 'Other', equipment: 'Equipment' };
function CostBreakdown({ livestock, equipment, lights }: { livestock: Live[]; equipment: Equip[]; lights: Light[] }) {
  const byKind: Record<string, number> = {};
  for (const l of livestock) byKind[l.kind] = (byKind[l.kind] || 0) + (l.cost || 0) * (l.quantity || 1);
  const equipCost = equipment.reduce((s, e) => s + (e.cost || 0), 0);
  const lightCost = lights.reduce((s, l) => s + (l.cost || 0), 0);
  const rows = [
    ...Object.keys(byKind).filter((k) => byKind[k] > 0).map((k) => ({ key: k, label: KIND_LABEL[k] || k, color: KIND_COLOR[k] || KIND_COLOR.other, value: byKind[k] })),
    ...(equipCost > 0 ? [{ key: 'equipment', label: 'Equipment', color: '#2cc4d6', value: equipCost }] : []),
    ...(lightCost > 0 ? [{ key: 'lights', label: 'Lights', color: '#eab308', value: lightCost }] : []),
  ].sort((a, b) => b.value - a.value);
  const total = rows.reduce((s, r) => s + r.value, 0);
  const priced = livestock.filter((l) => l.cost != null && l.cost > 0).length + equipment.filter((e) => e.cost != null && e.cost > 0).length + lights.filter((l) => l.cost != null && l.cost > 0).length;
  const totalItems = livestock.length + equipment.length + lights.length;
  const fmt = (n: number) => '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 });
  if (total <= 0) return <div style={{ ...cardCss, marginBottom: 30, color: 'var(--text-muted)', fontSize: 14 }}>Add a cost to your livestock and equipment to see where your money goes.</div>;
  return (
    <div style={{ ...cardCss, marginBottom: 30 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 0.8 }}>Total invested</div>
          <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: -0.5, marginTop: 2 }}>{fmt(total)}</div>
        </div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{priced} of {totalItems} items priced</div>
      </div>
      <div style={{ display: 'flex', height: 14, borderRadius: 999, overflow: 'hidden', marginBottom: 18, background: 'var(--bg-darker)' }}>
        {rows.map((r) => <div key={r.key} title={r.label + ' ' + fmt(r.value)} style={{ width: (r.value / total * 100) + '%', background: r.color }} />)}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {rows.map((r) => (
          <div key={r.key} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 0', borderTop: '1px solid var(--border)' }}>
            <span style={{ width: 11, height: 11, borderRadius: 3, background: r.color, flex: '0 0 auto' }} />
            <span style={{ fontSize: 14, color: 'var(--text-light)', flex: 1 }}>{r.label}</span>
            <span style={{ fontSize: 14, fontWeight: 700, width: 96, textAlign: 'right' }}>{fmt(r.value)}</span>
            <span style={{ fontSize: 12.5, color: 'var(--text-muted)', width: 54, textAlign: 'right' }}>{Math.round(r.value / total * 100)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CatalogStep({ kind, results, busy, query, onQuery, typeFilter, onType, types, onPick, onCustom }: any) {
  return (
    <div>
      <input autoFocus placeholder={kind === 'live' ? 'Search species (clownfish, Acropora, snail)...' : 'Search equipment (brand, model)...'} style={{ ...inputCss, marginBottom: 12 }} value={query} onChange={(e: any) => onQuery(e.target.value)} />
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
        {['all', ...types].map((t: string) => (
          <button key={t} onClick={() => onType(t)} style={{ padding: '5px 12px', borderRadius: 999, fontSize: 12.5, cursor: 'pointer', textTransform: 'capitalize', border: '1px solid ' + (typeFilter === t ? 'var(--reef)' : 'var(--border)'), background: typeFilter === t ? 'var(--reef-glow)' : 'transparent', color: typeFilter === t ? 'var(--reef)' : 'var(--text-muted)' }}>{t}</button>
        ))}
      </div>
      <div style={{ maxHeight: 360, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {busy ? <div style={{ color: 'var(--text-muted)', fontSize: 13, padding: 14, textAlign: 'center' }}>Searching...</div>
          : results.length === 0 ? <div style={{ color: 'var(--text-muted)', fontSize: 13, padding: 14, textAlign: 'center' }}>No matches in the catalog. Add it as a custom entry below.</div>
          : results.map((c: any) => (
            <button key={c.id} onClick={() => onPick(c)} className={'reefcard'} style={{ ...cardCss, padding: 8, display: 'flex', gap: 12, alignItems: 'center', textAlign: 'left', cursor: 'pointer' }}>
              <div style={{ width: 48, height: 48, borderRadius: 8, overflow: 'hidden', background: 'var(--bg-darker)', flex: '0 0 auto' }}>{c.image_url ? <img src={c.image_url} alt='' style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--reef)', fontWeight: 800 }}>{((c.common_name || c.brand || '?').slice(0, 1)).toUpperCase()}</div>}</div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-light)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.common_name || ([c.brand, c.model].filter(Boolean).join(' '))}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{kind === 'live' ? [c.scientific_name, c.type].filter(Boolean).join('  -  ') : [c.brand, c.type].filter(Boolean).join('  -  ')}</div>
              </div>
              {c.type && <span style={{ fontSize: 10.5, fontWeight: 700, color: KIND_COLOR[c.type] || 'var(--reef)', textTransform: 'uppercase', letterSpacing: 0.5, flex: '0 0 auto' }}>{c.type}</span>}
            </button>
          ))}
      </div>
      <button onClick={onCustom} style={{ ...ghostCss, width: '100%', marginTop: 12 }}>Not in the catalog? Add a custom entry</button>
    </div>
  );
}

function Banner({ children }: { children: any }) {
  return <div style={{ background: 'rgba(44,196,214,0.08)', border: '1px solid var(--border-hover)', color: 'var(--reef-soft)', padding: '11px 13px', borderRadius: 10, fontSize: 12.5, marginBottom: 16, lineHeight: 1.5 }}>{children}</div>;
}
function RoView({ label, value }: { label: string; value: any }) {
  return <div style={{ marginBottom: 14 }}><div style={labelCss}>{label}</div><div style={{ fontSize: 14.5, color: 'var(--text-light)', fontWeight: 600 }}>{(value === '' || value === null || value === undefined) ? '-' : value}</div></div>;
}
function parseMin(t: string | null): number | null {
  if (!t) return null;
  const s = t.trim().toLowerCase();
  const pm = s.indexOf('pm') >= 0; const am = s.indexOf('am') >= 0;
  const clean = s.replace('am', '').replace('pm', '').trim();
  const parts = clean.split(':');
  let h = parseInt(parts[0], 10); if (isNaN(h)) return null;
  const min = parts[1] ? (parseInt(parts[1], 10) || 0) : 0;
  if (pm && h < 12) h += 12; if (am && h === 12) h = 0;
  return h * 60 + min;
}
function LightCurve({ lt }: { lt: Light }) {
  const onMin = parseMin(lt.on_time); const offMin = parseMin(lt.off_time);
  const W = 320; const H = 84; const base = H - 4; const top = 14;
  let dur = (onMin != null && offMin != null) ? (((offMin - onMin) % 1440 + 1440) % 1440) : 0;
  if (dur === 0) dur = 1440;
  const ru = Math.min(lt.ramp_up_minutes || 0, dur / 2);
  const rd = Math.min(lt.ramp_down_minutes || 0, dur / 2);
  const x1 = (ru / dur) * W; const x2 = (1 - rd / dur) * W;
  const yFor = (pct: number) => base - (Math.max(0, Math.min(100, pct)) / 100) * (base - top);
  const chans = (lt.channels || []).filter((c) => (c.peak_pct || 0) > 0).slice().sort((a, b) => (b.peak_pct || 0) - (a.peak_pct || 0));
  const area = (pct: number) => 'M 0 ' + base + ' L ' + x1.toFixed(1) + ' ' + yFor(pct).toFixed(1) + ' L ' + x2.toFixed(1) + ' ' + yFor(pct).toFixed(1) + ' L ' + W + ' ' + base + ' Z';
  const stroke = (pct: number) => 'M 0 ' + base + ' L ' + x1.toFixed(1) + ' ' + yFor(pct).toFixed(1) + ' L ' + x2.toFixed(1) + ' ' + yFor(pct).toFixed(1) + ' L ' + W + ' ' + base;
  const gid = (i: number) => 'lg' + lt.id.replace(/[^a-zA-Z0-9]/g, '') + i;
  return (
    <svg viewBox={'0 0 ' + W + ' ' + H} preserveAspectRatio='none' style={{ width: '100%', height: 84, display: 'block' }}>
      <defs>
        {chans.map((c, i) => (
          <linearGradient key={i} id={gid(i)} x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor={c.color} stopOpacity='0.5' />
            <stop offset='100%' stopColor={c.color} stopOpacity='0.03' />
          </linearGradient>
        ))}
      </defs>
      <line x1='0' y1={base} x2={W} y2={base} stroke='var(--border)' strokeWidth='1' />
      {chans.map((c, i) => <path key={'a' + i} d={area(c.peak_pct)} fill={'url(#' + gid(i) + ')'} />)}
      {chans.map((c, i) => <path key={'s' + i} d={stroke(c.peak_pct)} fill='none' stroke={c.color} strokeWidth='2' strokeOpacity='0.95' strokeLinejoin='round' strokeLinecap='round' />)}
    </svg>
  );
}
function LightCard({ lt, onClick }: { lt: Light; onClick: () => void }) {
  const chans = (lt.channels || []).filter((c) => (c.peak_pct || 0) > 0).slice().sort((a, b) => (b.peak_pct || 0) - (a.peak_pct || 0));
  const rampH = lt.ramp_up_minutes ? (Math.round((lt.ramp_up_minutes / 60) * 10) / 10) : 0;
  return (
    <button onClick={onClick} className={'reefcard'} style={{ ...cardCss, padding: 0, overflow: 'hidden', textAlign: 'left', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '13px 15px 9px' }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(234,179,8,0.14)', color: '#eab308', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flex: '0 0 auto', border: '1px solid rgba(234,179,8,0.3)', fontSize: 14 }}>{(lt.name || 'L').slice(0, 1).toUpperCase()}</div>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-light)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{lt.name || 'Light'}{lt.quantity && lt.quantity > 1 ? '  x' + lt.quantity : ''}</div>
          <div style={{ fontSize: 11.5, color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{[lt.brand, lt.model].filter(Boolean).join(' ') || 'Lighting'}</div>
        </div>
        {(lt.bound || lt.cost != null) ? <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, flex: '0 0 auto' }}>{lt.bound ? <span style={{ fontSize: 9.5, fontWeight: 800, letterSpacing: 0.5, color: '#eab308', background: 'rgba(234,179,8,0.14)', border: '1px solid rgba(234,179,8,0.35)', borderRadius: 999, padding: '3px 7px', textTransform: 'uppercase' }}>Auto</span> : null}{lt.cost != null ? <span style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--reef)' }}>${lt.cost.toFixed(0)}</span> : null}</span> : null}
      </div>
      <div style={{ position: 'relative', background: 'radial-gradient(120% 90% at 50% 120%, rgba(59,130,246,0.10), rgba(4,10,20,0) 70%)' }}>
        <LightCurve lt={lt} />
        <span style={{ position: 'absolute', left: 12, bottom: 5, fontSize: 10.5, fontWeight: 700, color: 'var(--text-light)', textShadow: '0 1px 3px #000' }}>{lt.on_time || ''}</span>
        <span style={{ position: 'absolute', right: 12, bottom: 5, fontSize: 10.5, fontWeight: 700, color: 'var(--text-light)', textShadow: '0 1px 3px #000' }}>{lt.off_time || ''}</span>
      </div>
      <div style={{ padding: '9px 15px 13px', display: 'flex', flexWrap: 'wrap', gap: '6px 10px', alignItems: 'center' }}>
        {chans.map((c, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 10.5, color: 'var(--text-muted)' }}>
            <span style={{ width: 7, height: 7, borderRadius: 999, background: c.color, boxShadow: '0 0 6px ' + c.color, flex: '0 0 auto' }} />{c.label} {c.peak_pct}%
          </span>
        ))}
        <span style={{ marginLeft: 'auto', display: 'inline-flex', gap: 10, fontSize: 10.5, color: 'var(--text-muted)' }}>
          {rampH ? <span>{rampH}h ramp</span> : null}
          {lt.distance_inches != null ? <span>{lt.distance_inches} in</span> : null}
        </span>
      </div>
    </button>
  );
}
function DoseCard({ d, onClick }: { d: Dose; onClick: () => void }) {
  const color = PARAM_COLOR[d.parameter] || PARAM_COLOR.other;
  const chips = (d.parameters_covered && d.parameters_covered.length ? d.parameters_covered : [d.parameter]);
  const sched = (d.schedule || '').toLowerCase();
  const freq = (sched === 'as_needed' || sched === 'as needed') ? 'As needed' : (d.doses_per_day ? d.doses_per_day + 'x daily' : (d.schedule || ''));
  return (
    <button onClick={onClick} className={'reefcard'} style={{ ...cardCss, display: 'flex', gap: 12, textAlign: 'left', cursor: 'pointer', width: '100%' }}>
      <div style={{ width: 42, height: 42, borderRadius: 12, background: color + '22', color: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flex: '0 0 auto', border: '1px solid ' + color + '44' }}>{(PARAM_LABEL[d.parameter] || d.parameter || '?').slice(0, 1).toUpperCase()}</div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--text-light)' }}>{[d.brand, d.name].filter(Boolean).join(' ') || 'Dosing product'}</span>{d.bound ? <span style={{ fontSize: 9.5, fontWeight: 800, letterSpacing: 0.5, color: '#f59e0b', background: 'rgba(245,158,11,0.14)', border: '1px solid rgba(245,158,11,0.35)', borderRadius: 999, padding: '2px 7px', textTransform: 'uppercase' }}>Auto</span> : null}</div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 6 }}>
          {chips.map((pp: string) => <span key={pp} style={{ fontSize: 10.5, fontWeight: 800, color: PARAM_COLOR[pp] || color, background: (PARAM_COLOR[pp] || color) + '1e', borderRadius: 6, padding: '2px 7px' }}>{PARAM_LABEL[pp] || pp}</span>)}
        </div>
        <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 8, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {d.daily_amount != null ? <span style={{ color: 'var(--text-light)', fontWeight: 600 }}>{d.daily_amount} {d.dose_unit}/day</span> : null}
          {freq ? <span>{freq}</span> : null}
          {d.delivery ? <span style={{ textTransform: 'capitalize' }}>{d.delivery}</span> : null}
        </div>
      </div>
    </button>
  );
}
function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: any }) {
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(2,8,16,0.9)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 24, zIndex: 50, overflowY: 'auto' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ ...solidCard, padding: 24, maxWidth: 540, width: '100%', marginTop: 36, boxShadow: '0 24px 60px rgba(0,0,0,0.6)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700 }}>{title}</h2>
          <button onClick={onClose} style={{ ...ghostCss, padding: '4px 12px' }}>Close</button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default function MyReefClient({ userId, tank, livestock, equipment, lights, dosing, photos }: { userId: string; tank: Tank; livestock: Live[]; equipment: Equip[]; lights: Light[]; dosing: Dose[]; photos: Photo[] }) {
  const router = useRouter();
  const [modal, setModal] = useState<null | { kind: 'tank' | 'live' | 'equip' | 'light' | 'dose'; id?: string }>(null);
  const [form, setForm] = useState<Record<string, any>>({});
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [liveFilter, setLiveFilter] = useState('all');
  const [heroIdx, setHeroIdx] = useState(0);
  const [catStep, setCatStep] = useState<'search' | 'details'>('details');
  const [catResults, setCatResults] = useState<any[]>([]);
  const [catQuery, setCatQuery] = useState('');
  const [catBusy, setCatBusy] = useState(false);
  const [catTypeFilter, setCatTypeFilter] = useState('all');

  const set = (k: string, v: any) => setForm((f) => ({ ...f, [k]: v }));
  const numOrNull = (v: any) => { if (v === '' || v === null || v === undefined) return null; const n = Number(v); return isNaN(n) ? null : n; };
  const strOrNull = (v: any) => { const s = (v === null || v === undefined ? '' : v).toString().trim(); return s === '' ? null : s; };

  const fishCount = livestock.filter((l) => l.kind === 'fish').reduce((s, l) => s + (l.quantity || 1), 0);
  const coralKinds = ['sps', 'lps', 'softie'];
  const coralCount = livestock.filter((l) => coralKinds.indexOf(l.kind) >= 0).reduce((s, l) => s + (l.quantity || 1), 0);
  const invertKinds = ['invert', 'anemone'];
  const invertCount = livestock.filter((l) => invertKinds.indexOf(l.kind) >= 0).reduce((s, l) => s + (l.quantity || 1), 0);
  const stockValue = livestock.reduce((s, l) => s + ((l.cost || 0) * (l.quantity || 1)), 0) + equipment.reduce((s, e) => s + (e.cost || 0), 0) + lights.reduce((s, l) => s + (l.cost || 0), 0);
  const liveKinds = useMemo(() => Array.from(new Set(livestock.map((l) => l.kind))), [livestock]);
  const filteredLive = liveFilter === 'all' ? livestock : livestock.filter((l) => l.kind === liveFilter);

  const timeline = useMemo(() => {
    const ev: { date: string; label: string; color: string }[] = [];
    if (tank.started_at) ev.push({ date: tank.started_at, label: 'Tank started', color: 'var(--reef)' });
    else if (tank.setup_date) ev.push({ date: tank.setup_date, label: 'Tank set up', color: 'var(--reef)' });
    for (const l of livestock) if (l.acquired_date) ev.push({ date: l.acquired_date, label: 'Added ' + l.name, color: KIND_COLOR[l.kind] || KIND_COLOR.other });
    for (const e of equipment) if (e.install_date) ev.push({ date: e.install_date, label: 'Installed ' + e.name, color: '#8b9eb3' });
    for (const p of photos) ev.push({ date: p.month, label: 'Progress photo', color: 'var(--reef-soft)' });
    return ev.filter((x) => x.date).sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [tank, livestock, equipment, photos]);

  async function searchCatalog(kind: 'live' | 'equip', q: string, typeFilter: string) {
    setCatBusy(true);
    const supabase = createClient();
    const table = kind === 'live' ? 'livestock_catalog' : 'equipment_catalog';
    let query: any = supabase.from(table).select('*').order('common_name', { ascending: true });
    const term = q.trim();
    if (term) {
      const ors = kind === 'live' ? 'common_name.ilike.%' + term + '%,scientific_name.ilike.%' + term + '%' : 'common_name.ilike.%' + term + '%,brand.ilike.%' + term + '%,model.ilike.%' + term + '%';
      query = query.or(ors);
    }
    if (typeFilter && typeFilter !== 'all') query = query.eq('type', typeFilter);
    const res = await query.limit(60);
    setCatResults(res.data || []);
    setCatBusy(false);
  }
  function pickCatalog(c: any, kind: 'live' | 'equip') {
    const name = c.common_name || [c.brand, c.model].filter(Boolean).join(' ') || 'Selected';
    setForm((f) => ({ ...f, _isCustom: false, _catalogId: c.id, _displayName: name, _image: c.image_url || null, _scientific: c.scientific_name || '', _brand: c.brand || '' }));
    setCatStep('details');
  }
  function startCustom() { setForm((f) => ({ ...f, _isCustom: true, _catalogId: null, _displayName: '' })); setCatStep('details'); }

  function openTank() { setErr(null); setForm({ name: tank.name, tank_type: tank.tank_type, display_gallons: tank.display_gallons ?? '', sump_gallons: tank.sump_gallons ?? '', salt_brand: tank.salt_brand || '', rock_type: tank.rock_type || '', dominant_coral: tank.dominant_coral || '', has_refugium: !!tank.has_refugium, refugium_macroalgae: tank.refugium_macroalgae || '', started_at: tank.started_at || '', setup_date: tank.setup_date || '' }); setModal({ kind: 'tank' }); }
  function openLiveAdd() { setErr(null); setForm({ quantity: 1, health_status: 'healthy', acquired_date: '', source: '', cost: '', notes: '', nickname: '', custom_type: 'fish', custom_name: '', _isCustom: false, _catalogId: null }); setCatQuery(''); setCatTypeFilter('all'); setCatResults([]); setCatStep('search'); setModal({ kind: 'live' }); searchCatalog('live', '', 'all'); }
  async function openLiveEdit(l: Live) { setErr(null); const supabase = createClient(); const res = await supabase.from('user_livestock').select('*').eq('id', l.id).single(); const r: any = res.data || {}; setForm({ _displayName: l.name, _isCustom: !r.catalog_id, _catalogId: r.catalog_id || null, _image: l.image, _scientific: l.species || '', custom_type: r.custom_type || l.kind || '', custom_name: r.custom_name || '', nickname: r.nickname || '', quantity: r.quantity ?? 1, health_status: r.health_status || 'healthy', acquired_date: r.acquired_date || '', source: r.source || '', cost: r.cost ?? '', notes: r.notes || '' }); setCatStep('details'); setModal({ kind: 'live', id: l.id }); }
  function openEquipAdd() { setErr(null); setForm({ install_date: '', last_maintenance: '', maintenance_interval_days: '', cost: '', notes: '', nickname: '', custom_type: 'light', custom_name: '', _isCustom: false, _catalogId: null }); setCatQuery(''); setCatTypeFilter('all'); setCatResults([]); setCatStep('search'); setModal({ kind: 'equip' }); searchCatalog('equip', '', 'all'); }
  async function openEquipEdit(e: Equip) { setErr(null); const supabase = createClient(); const res = await supabase.from('user_equipment').select('*').eq('id', e.id).single(); const r: any = res.data || {}; setForm({ _displayName: e.name, _isCustom: !r.catalog_id, _catalogId: r.catalog_id || null, _brand: e.brand, custom_type: r.custom_type || e.kind || '', custom_name: r.custom_name || '', nickname: r.nickname || '', install_date: r.install_date || '', last_maintenance: r.last_maintenance || '', maintenance_interval_days: r.maintenance_interval_days ?? '', cost: r.cost ?? '', notes: r.notes || '' }); setCatStep('details'); setModal({ kind: 'equip', id: e.id }); }

  async function saveTank() {
    setBusy(true); setErr(null);
    const supabase = createClient();
    const payload: Record<string, any> = { name: strOrNull(form.name) || tank.name, tank_type: strOrNull(form.tank_type) || tank.tank_type, display_gallons: numOrNull(form.display_gallons), sump_gallons: numOrNull(form.sump_gallons), salt_brand: strOrNull(form.salt_brand), rock_type: strOrNull(form.rock_type), dominant_coral: strOrNull(form.dominant_coral), has_refugium: !!form.has_refugium, refugium_macroalgae: strOrNull(form.refugium_macroalgae), started_at: strOrNull(form.started_at), setup_date: strOrNull(form.setup_date) };
    const resp = await supabase.from('tanks').update(payload).eq('id', tank.id);
    setBusy(false);
    if (resp.error) { setErr(resp.error.message); return; }
    setModal(null); router.refresh();
  }
  async function saveLive() {
    setBusy(true); setErr(null);
    const supabase = createClient();
    const payload: Record<string, any> = { nickname: strOrNull(form.nickname), quantity: numOrNull(form.quantity) ?? 1, health_status: strOrNull(form.health_status), acquired_date: strOrNull(form.acquired_date), source: strOrNull(form.source), cost: numOrNull(form.cost), notes: strOrNull(form.notes) };
    if (form._isCustom) { payload.custom_type = strOrNull(form.custom_type); payload.custom_name = strOrNull(form.custom_name); payload.catalog_id = null; }
    else { payload.catalog_id = form._catalogId; payload.custom_type = null; payload.custom_name = null; }
    const resp = (modal && modal.id) ? await supabase.from('user_livestock').update(payload).eq('id', modal.id) : await supabase.from('user_livestock').insert({ ...payload, user_id: userId, tank_id: tank.id });
    setBusy(false);
    if (resp.error) { setErr(resp.error.message); return; }
    setModal(null); router.refresh();
  }
  async function saveEquip() {
    setBusy(true); setErr(null);
    const supabase = createClient();
    const payload: Record<string, any> = { nickname: strOrNull(form.nickname), install_date: strOrNull(form.install_date), last_maintenance: strOrNull(form.last_maintenance), maintenance_interval_days: numOrNull(form.maintenance_interval_days), cost: numOrNull(form.cost), notes: strOrNull(form.notes) };
    if (form._isCustom) { payload.custom_type = strOrNull(form.custom_type); payload.custom_name = strOrNull(form.custom_name); payload.catalog_id = null; }
    else { payload.catalog_id = form._catalogId; payload.custom_type = null; payload.custom_name = null; }
    const resp = (modal && modal.id) ? await supabase.from('user_equipment').update(payload).eq('id', modal.id) : await supabase.from('user_equipment').insert({ ...payload, user_id: userId, tank_id: tank.id, is_active: true });
    setBusy(false);
    if (resp.error) { setErr(resp.error.message); return; }
    setModal(null); router.refresh();
  }
  function openLightEdit(lt: Light) {
    setErr(null);
    setForm({ _name: lt.name, _bound: lt.bound, _outletName: lt.outletName, _brandModel: [lt.brand, lt.model].filter(Boolean).join(' '), cost: lt.cost ?? '', quantity: lt.quantity ?? 1, distance_inches: lt.distance_inches ?? '', on_time: lt.on_time || '', off_time: lt.off_time || '', ramp_up_minutes: lt.ramp_up_minutes ?? '', ramp_down_minutes: lt.ramp_down_minutes ?? '', notes: lt.notes || '', channels: (lt.channels || []).map((c) => ({ ...c })) });
    setModal({ kind: 'light', id: lt.id });
  }
  function openDoseEdit(d: Dose) {
    setErr(null);
    const sched = (d.schedule || '').toLowerCase();
    let freqMode = 'daily'; let intervalDays = '';
    if (sched === 'as_needed' || sched === 'as needed') freqMode = 'as_needed';
    else if (sched.indexOf('every ') === 0) { freqMode = 'interval'; intervalDays = sched.split('').filter((ch) => ch >= '0' && ch <= '9').join(''); }
    setForm({ _brand: d.brand, _name: d.name, _bound: d.bound, _outletName: d.outletName, parameter: d.parameter || 'other', daily_amount: d.daily_amount ?? '', dose_unit: d.dose_unit || 'ml', doses_per_day: d.doses_per_day ?? '', freqMode, intervalDays, delivery: d.delivery || 'manual', system: d.system || 'other', notes: d.notes || '', is_active: true });
    setModal({ kind: 'dose', id: d.id });
  }
  async function saveLight() {
    setBusy(true); setErr(null);
    const supabase = createClient();
    const id = modal ? modal.id : undefined;
    if (!id) { setBusy(false); return; }
    const eqResp = await supabase.from('user_equipment').update({ cost: numOrNull(form.cost), notes: strOrNull(form.notes) }).eq('id', id);
    const schedPayload: Record<string, any> = { on_time: strOrNull(form.on_time), off_time: strOrNull(form.off_time), ramp_up_minutes: numOrNull(form.ramp_up_minutes), ramp_down_minutes: numOrNull(form.ramp_down_minutes), distance_inches: numOrNull(form.distance_inches), quantity: numOrNull(form.quantity) ?? 1, channels: form.channels || [] };
    const existing = await supabase.from('light_schedules').select('id').eq('equipment_id', id).maybeSingle();
    const schedResp = (existing.data && existing.data.id) ? await supabase.from('light_schedules').update(schedPayload).eq('id', existing.data.id) : await supabase.from('light_schedules').insert({ ...schedPayload, equipment_id: id, tank_id: tank.id, user_id: userId });
    setBusy(false);
    if (eqResp.error || schedResp.error) { setErr((eqResp.error || schedResp.error || { message: 'Error' }).message); return; }
    setModal(null); router.refresh();
  }
  async function saveDose() {
    setBusy(true); setErr(null);
    const supabase = createClient();
    const id = modal ? modal.id : undefined;
    if (!id) { setBusy(false); return; }
    let schedule: string | null = null; let dpd: number | null = null;
    if (form.freqMode === 'as_needed') schedule = 'as_needed';
    else if (form.freqMode === 'interval') schedule = 'every ' + (form.intervalDays || '1') + ' days';
    else dpd = numOrNull(form.doses_per_day);
    const payload: Record<string, any> = { parameter: strOrNull(form.parameter), daily_amount: form.freqMode === 'as_needed' ? null : numOrNull(form.daily_amount), dose_unit: strOrNull(form.dose_unit), doses_per_day: dpd, schedule, delivery: strOrNull(form.delivery), dosing_system: strOrNull(form.system), notes: strOrNull(form.notes), is_active: form.is_active !== false };
    const resp = await supabase.from('dosing_products').update(payload).eq('id', id);
    setBusy(false);
    if (resp.error) { setErr(resp.error.message); return; }
    setModal(null); router.refresh();
  }
  async function delRow(table: string, id: string) {
    if (!confirm('Remove this entry? This cannot be undone.')) return;
    setBusy(true); setErr(null);
    const supabase = createClient();
    const resp = await supabase.from(table).delete().eq('id', id);
    setBusy(false);
    if (resp.error) { setErr(resp.error.message); return; }
    setModal(null); router.refresh();
  }

  const hero = photos.length ? photos[Math.min(heroIdx, photos.length - 1)] : null;
  const typeOptions = Array.from(new Set([form.tank_type, ...TANK_TYPES].filter(Boolean)));

  return (
    <div style={{ maxWidth: 1180, margin: '0 auto', paddingBottom: 80 }}>

      <div style={{ ...cardCss, marginBottom: 24, padding: 0, overflow: 'hidden', background: 'linear-gradient(135deg, rgba(44,196,214,0.10), rgba(255,255,255,0.015))' }}>
        <div style={{ height: 3, background: 'linear-gradient(90deg, var(--reef), var(--reef-soft))' }} />
        <div style={{ padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
            <div>
              <h1 style={{ fontSize: 30, fontWeight: 800, letterSpacing: -0.5 }}>{tank.name}</h1>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
                <span style={{ ...chipCss }}>{tank.tank_type} reef</span>
                {(tank.started_at || tank.setup_date) && <span style={{ ...chipCss }}>{ageFrom(tank.started_at || tank.setup_date)} running</span>}
                {tank.journey_phase != null && <span style={{ ...chipCss, color: 'var(--reef)', borderColor: 'var(--border-hover)' }}>Phase {tank.journey_phase}</span>}
                {stockValue > 0 && <span style={{ ...chipCss, color: 'var(--reef-soft)', borderColor: 'var(--border-hover)', textTransform: 'none' }}>${stockValue.toFixed(0)} invested</span>}
              </div>
            </div>
            <button onClick={openTank} style={ghostCss}>Edit tank</button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px 36px', marginTop: 22 }}>
            <Spec k='Display' v={tank.display_gallons != null ? tank.display_gallons + ' gal' : '-'} />
            <Spec k='Sump' v={tank.sump_gallons != null ? tank.sump_gallons + ' gal' : '-'} />
            <Spec k='Salt brand' v={tank.salt_brand || '-'} />
            <Spec k='Dominant coral' v={tank.dominant_coral || '-'} />
            <Spec k='Refugium' v={tank.has_refugium ? (tank.refugium_macroalgae || 'Yes') : '-'} />
            <Spec k='Started' v={fmtDate(tank.started_at || tank.setup_date) || '-'} />
            
            
            
            
          </div>
        </div>
      </div>

      {hero ? (
        <div style={{ ...cardCss, padding: 0, overflow: 'hidden', marginBottom: 30 }}>
          <div style={{ position: 'relative', width: '100%', height: 360, background: 'var(--bg-darker)' }}>
            <img src={hero.photo_url} alt='Tank' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <span style={{ position: 'absolute', bottom: 12, left: 12, background: 'rgba(4,13,24,0.82)', padding: '6px 12px', borderRadius: 999, fontWeight: 700, fontSize: 13 }}>{monthLabel(hero.month)}</span>
          </div>
          {photos.length > 1 && (
            <div style={{ display: 'flex', gap: 8, padding: 12, overflowX: 'auto' }}>
              {photos.map((p, i) => (
                <button key={p.id} onClick={() => setHeroIdx(i)} style={{ flex: '0 0 auto', width: 64, height: 64, borderRadius: 10, overflow: 'hidden', border: i === heroIdx ? '2px solid var(--reef)' : '2px solid transparent', cursor: 'pointer', padding: 0, background: 'none' }}>
                  <img src={p.photo_url} alt='' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div style={{ ...cardCss, marginBottom: 30, color: 'var(--text-muted)', fontSize: 14, textAlign: 'center', padding: '28px 20px' }}>No tank photos yet. Add progress photos from the NextUpReef app.</div>
      )}

      <CostBreakdown livestock={livestock} equipment={equipment} lights={lights} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, marginBottom: 14 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700 }}>Livestock <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{livestock.length}</span></h2>
        <button onClick={openLiveAdd} style={btnCss}>+ Add</button>
      </div>
      {liveKinds.length > 1 && (
        <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
          {['all', ...liveKinds].map((k) => (
            <button key={k} onClick={() => setLiveFilter(k)} style={{ padding: '6px 14px', borderRadius: 999, fontSize: 13, cursor: 'pointer', textTransform: 'capitalize', border: '1px solid ' + (liveFilter === k ? 'var(--reef)' : 'var(--border)'), background: liveFilter === k ? 'var(--reef-glow)' : 'transparent', color: liveFilter === k ? 'var(--reef)' : 'var(--text-muted)' }}>{k}</button>
          ))}
        </div>
      )}
      {filteredLive.length === 0 ? (
        <div style={{ color: 'var(--text-muted)', fontSize: 14, padding: '8px 0' }}>No livestock here yet. Add your first.</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
          {filteredLive.map((l) => (
            <button key={l.id} onClick={() => openLiveEdit(l)} className={'reefcard'} style={{ ...cardCss, padding: 0, overflow: 'hidden', textAlign: 'left', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 150, background: 'var(--bg-darker)', position: 'relative' }}>
                {l.image ? <img src={l.image} alt={l.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: KIND_COLOR[l.kind] || KIND_COLOR.other, fontSize: 38, fontWeight: 800 }}>{(l.name || '?').slice(0, 1).toUpperCase()}</div>}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,17,28,0.72), rgba(7,17,28,0) 52%)' }} />
                <span style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(4,13,24,0.8)', color: KIND_COLOR[l.kind] || KIND_COLOR.other, fontSize: 10.5, fontWeight: 800, padding: '4px 9px', borderRadius: 999, textTransform: 'uppercase', letterSpacing: 0.5, border: '1px solid ' + (KIND_COLOR[l.kind] || KIND_COLOR.other) + '55' }}>{l.kind}</span>
                {l.quantity > 1 && <span style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(4,13,24,0.8)', color: 'var(--text-light)', fontSize: 11, fontWeight: 700, padding: '4px 9px', borderRadius: 999 }}>x{l.quantity}</span>}
                <div style={{ position: 'absolute', left: 12, right: 12, bottom: 10, display: 'flex', alignItems: 'center', gap: 7 }}>
                  {l.health_status && <span style={{ width: 8, height: 8, borderRadius: 999, background: HEALTH_COLOR[l.health_status] || 'var(--text-muted)', flex: '0 0 auto', boxShadow: '0 0 8px ' + (HEALTH_COLOR[l.health_status] || 'transparent') }} />}
                  <span style={{ fontWeight: 700, fontSize: 15, color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.85)', lineHeight: 1.15 }}>{l.name}</span>
                </div>
              </div>
              <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
                {l.species && <div style={{ fontSize: 12, color: 'var(--reef-soft)', fontStyle: 'italic' }}>{l.species}</div>}
                <div style={{ fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 'auto' }}>
                  {l.care_level && <span style={{ textTransform: 'capitalize' }}>{l.care_level} care</span>}
                  {l.acquired_date && <span>since {fmtDate(l.acquired_date)}</span>}
                  {l.cost != null && <span style={{ color: 'var(--reef)', fontWeight: 700 }}>${(l.cost * (l.quantity || 1)).toFixed(2)}</span>}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 30, marginBottom: 14 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700 }}>Equipment <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{equipment.length}</span></h2>
        <button onClick={openEquipAdd} style={btnCss}>+ Add</button>
      </div>
      {equipment.length === 0 ? (
        <div style={{ color: 'var(--text-muted)', fontSize: 14, padding: '8px 0' }}>No equipment logged yet.</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(460px, 1fr))', gap: 12 }}>
          {equipment.map((e) => (
            <button key={e.id} onClick={() => openEquipEdit(e)} className={'reefcard'} style={{ ...cardCss, padding: '13px 16px', textAlign: 'left', cursor: 'pointer', display: 'flex', gap: 14, alignItems: 'center' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--reef-glow)', color: 'var(--reef)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flex: '0 0 auto', border: '1px solid var(--border-hover)', fontSize: 14 }}>{(e.kind || '?').slice(0, 1).toUpperCase()}</div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--text-light)' }}>{e.name}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 3 }}><span style={{ textTransform: 'capitalize' }}>{e.kind}{e.brand ? ' - ' + e.brand : ''}</span>{e.install_date ? ' - since ' + fmtDate(e.install_date) : ''}</div>
              </div>
              {e.cost != null ? <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--reef)', flex: '0 0 auto' }}>${e.cost.toFixed(2)}</span> : null}
            </button>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 30, marginBottom: 14 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700 }}>Lighting <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{lights.length}</span></h2>
      </div>
      {lights.length === 0 ? (
        <div style={{ color: 'var(--text-muted)', fontSize: 14, padding: '8px 0' }}>No lights added yet. Add lighting in the NextUpReef app.</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(284px, 1fr))', gap: 14 }}>
          {lights.map((lt) => <LightCard key={lt.id} lt={lt} onClick={() => openLightEdit(lt)} />)}
        </div>
      )}

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 30, marginBottom: 14 }}>Dosing <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{dosing.length}</span></h2>
      {dosing.length === 0 ? (
        <div style={{ color: 'var(--text-muted)', fontSize: 14, padding: '8px 0' }}>No active dosing. Add dosing products in the NextUpReef app.</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(284px, 1fr))', gap: 14 }}>
          {dosing.map((d) => <DoseCard key={d.id} d={d} onClick={() => openDoseEdit(d)} />)}
        </div>
      )}

      <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 30, marginBottom: 14 }}>Timeline</h2>
      {timeline.length === 0 ? (
        <div style={{ color: 'var(--text-muted)', fontSize: 14 }}>No dated events yet. Add acquired or install dates to build your reef history.</div>
      ) : (
        <div style={{ ...cardCss }}>
          {timeline.map((ev, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '10px 0', borderBottom: i < timeline.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ width: 10, height: 10, borderRadius: 999, background: ev.color, marginTop: 5, flex: '0 0 auto' }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{ev.label}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{fmtDate(ev.date)}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {modal && modal.kind === 'tank' && (
        <Modal title='Edit tank' onClose={() => setModal(null)}>
          {err && <ErrBox msg={err} />}
          <Field label='Name'><input style={inputCss} value={form.name || ''} onChange={(e) => set('name', e.target.value)} /></Field>
          <Field label='Type'><select style={inputCss} value={form.tank_type || ''} onChange={(e) => set('tank_type', e.target.value)}>{typeOptions.map((t) => <option key={t} value={t}>{t}</option>)}</select></Field>
          <Row>
            <Field label='Display gallons'><input type='number' style={inputCss} value={form.display_gallons ?? ''} onChange={(e) => set('display_gallons', e.target.value)} /></Field>
            <Field label='Sump gallons'><input type='number' style={inputCss} value={form.sump_gallons ?? ''} onChange={(e) => set('sump_gallons', e.target.value)} /></Field>
          </Row>
          <Row>
            <Field label='Salt brand'><input style={inputCss} value={form.salt_brand || ''} onChange={(e) => set('salt_brand', e.target.value)} /></Field>
            <Field label='Rock type'><input style={inputCss} value={form.rock_type || ''} onChange={(e) => set('rock_type', e.target.value)} /></Field>
          </Row>
          <Field label='Dominant coral'><input style={inputCss} value={form.dominant_coral || ''} onChange={(e) => set('dominant_coral', e.target.value)} /></Field>
          <Row>
            <Field label='Started'><input type='date' style={inputCss} value={form.started_at || ''} onChange={(e) => set('started_at', e.target.value)} /></Field>
            <Field label='Setup date'><input type='date' style={inputCss} value={form.setup_date || ''} onChange={(e) => set('setup_date', e.target.value)} /></Field>
          </Row>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, fontSize: 14, cursor: 'pointer' }}>
            <input type='checkbox' checked={!!form.has_refugium} onChange={(e) => set('has_refugium', e.target.checked)} /> Has refugium
          </label>
          {form.has_refugium && <Field label='Refugium macroalgae'><input style={inputCss} value={form.refugium_macroalgae || ''} onChange={(e) => set('refugium_macroalgae', e.target.value)} /></Field>}
          <button onClick={saveTank} disabled={busy} style={{ ...btnCss, width: '100%', marginTop: 4, opacity: busy ? 0.6 : 1 }}>{busy ? 'Saving...' : 'Save tank'}</button>
        </Modal>
      )}

      {modal && modal.kind === 'live' && (
        <Modal title={modal.id ? 'Edit livestock' : (catStep === 'search' ? 'Add livestock' : 'New livestock details')} onClose={() => setModal(null)}>
          {err && <ErrBox msg={err} />}
          {(!modal.id && catStep === 'search') ? (
            <CatalogStep kind='live' results={catResults} busy={catBusy} query={catQuery} onQuery={(v: string) => { setCatQuery(v); searchCatalog('live', v, catTypeFilter); }} typeFilter={catTypeFilter} onType={(t: string) => { setCatTypeFilter(t); searchCatalog('live', catQuery, t); }} types={LIVE_TYPES} onPick={(c: any) => pickCatalog(c, 'live')} onCustom={startCustom} />
          ) : (
            <div>
              {form._isCustom ? (
                <Row>
                  <Field label='Name'><input style={inputCss} value={form.custom_name || ''} onChange={(e) => set('custom_name', e.target.value)} /></Field>
                  <Field label='Type'><select style={inputCss} value={form.custom_type || ''} onChange={(e) => set('custom_type', e.target.value)}>{LIVE_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}</select></Field>
                </Row>
              ) : (
                <Field label='Species'><div style={{ ...inputCss, display: 'flex', alignItems: 'center', gap: 10 }}>{form._image ? <img src={form._image} alt='' style={{ width: 30, height: 30, borderRadius: 6, objectFit: 'cover', flex: '0 0 auto' }} /> : null}<span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{form._displayName || 'From catalog'}{form._scientific ? '  (' + form._scientific + ')' : ''}</span></div></Field>
              )}
              <Field label='Nickname'><input style={inputCss} value={form.nickname || ''} onChange={(e) => set('nickname', e.target.value)} /></Field>
              <Row>
                <Field label='Quantity'><input type='number' style={inputCss} value={form.quantity ?? ''} onChange={(e) => set('quantity', e.target.value)} /></Field>
                <Field label='Health'><select style={inputCss} value={form.health_status || ''} onChange={(e) => set('health_status', e.target.value)}>{HEALTH.map((h) => <option key={h} value={h}>{h}</option>)}</select></Field>
              </Row>
              <Row>
                <Field label='Acquired'><input type='date' style={inputCss} value={form.acquired_date || ''} onChange={(e) => set('acquired_date', e.target.value)} /></Field>
                <Field label='Cost (each)'><input type='number' style={inputCss} value={form.cost ?? ''} onChange={(e) => set('cost', e.target.value)} /></Field>
              </Row>
              <Field label='Source'><input style={inputCss} value={form.source || ''} onChange={(e) => set('source', e.target.value)} /></Field>
              <Field label='Notes'><textarea style={{ ...inputCss, minHeight: 72, resize: 'vertical' }} value={form.notes || ''} onChange={(e) => set('notes', e.target.value)} /></Field>
              <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                <button onClick={saveLive} disabled={busy} style={{ ...btnCss, flex: 1, opacity: busy ? 0.6 : 1 }}>{busy ? 'Saving...' : 'Save'}</button>
                {modal.id && <button onClick={() => delRow('user_livestock', modal.id as string)} disabled={busy} style={{ ...ghostCss, color: '#fca5a5', borderColor: 'rgba(239,68,68,0.4)' }}>Delete</button>}
              </div>
              {!modal.id && <button onClick={() => setCatStep('search')} style={{ ...ghostCss, width: '100%', marginTop: 10 }}>Back to catalog search</button>}
            </div>
          )}
        </Modal>
      )}

      {modal && modal.kind === 'equip' && (
        <Modal title={modal.id ? 'Edit equipment' : (catStep === 'search' ? 'Add equipment' : 'New equipment details')} onClose={() => setModal(null)}>
          {err && <ErrBox msg={err} />}
          {(!modal.id && catStep === 'search') ? (
            <CatalogStep kind='equip' results={catResults} busy={catBusy} query={catQuery} onQuery={(v: string) => { setCatQuery(v); searchCatalog('equip', v, catTypeFilter); }} typeFilter={catTypeFilter} onType={(t: string) => { setCatTypeFilter(t); searchCatalog('equip', catQuery, t); }} types={EQUIP_TYPES} onPick={(c: any) => pickCatalog(c, 'equip')} onCustom={startCustom} />
          ) : (
            <div>
              {form._isCustom ? (
                <Row>
                  <Field label='Name'><input style={inputCss} value={form.custom_name || ''} onChange={(e) => set('custom_name', e.target.value)} /></Field>
                  <Field label='Type'><select style={inputCss} value={form.custom_type || ''} onChange={(e) => set('custom_type', e.target.value)}>{EQUIP_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}</select></Field>
                </Row>
              ) : (
                <Field label='Equipment'><div style={{ ...inputCss, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{form._displayName || 'From catalog'}{form._brand ? '  -  ' + form._brand : ''}</div></Field>
              )}
              <Field label='Nickname'><input style={inputCss} value={form.nickname || ''} onChange={(e) => set('nickname', e.target.value)} /></Field>
              <Row>
                <Field label='Installed'><input type='date' style={inputCss} value={form.install_date || ''} onChange={(e) => set('install_date', e.target.value)} /></Field>
                <Field label='Last maintenance'><input type='date' style={inputCss} value={form.last_maintenance || ''} onChange={(e) => set('last_maintenance', e.target.value)} /></Field>
              </Row>
              <Row>
                <Field label='Maint. interval (days)'><input type='number' style={inputCss} value={form.maintenance_interval_days ?? ''} onChange={(e) => set('maintenance_interval_days', e.target.value)} /></Field>
                <Field label='Cost'><input type='number' style={inputCss} value={form.cost ?? ''} onChange={(e) => set('cost', e.target.value)} /></Field>
              </Row>
              <Field label='Notes'><textarea style={{ ...inputCss, minHeight: 72, resize: 'vertical' }} value={form.notes || ''} onChange={(e) => set('notes', e.target.value)} /></Field>
              <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                <button onClick={saveEquip} disabled={busy} style={{ ...btnCss, flex: 1, opacity: busy ? 0.6 : 1 }}>{busy ? 'Saving...' : 'Save'}</button>
                {modal.id && <button onClick={() => delRow('user_equipment', modal.id as string)} disabled={busy} style={{ ...ghostCss, color: '#fca5a5', borderColor: 'rgba(239,68,68,0.4)' }}>Delete</button>}
              </div>
              {!modal.id && <button onClick={() => setCatStep('search')} style={{ ...ghostCss, width: '100%', marginTop: 10 }}>Back to catalog search</button>}
            </div>
          )}
        </Modal>
      )}

      {modal && modal.kind === 'light' && (
        <Modal title='Light details' onClose={() => setModal(null)}>
          {err && <ErrBox msg={err} />}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 17 }}>{form._name || 'Light'}</div>
            {form._brandModel ? <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{form._brandModel}</div> : null}
          </div>
          {form._bound ? (
            <>
              <Banner>Controlled by {form._outletName || 'a smart outlet'}. This light runs on Shelly automation, so its schedule is read-only here. Edit it in the NextUpReef app to keep the device in sync.</Banner>
              <Row><RoView label='Quantity' value={form.quantity} /><RoView label='Cost' value={(form.cost !== '' && form.cost != null) ? '$' + form.cost : '-'} /></Row>
              <Row><RoView label='On time' value={form.on_time || '-'} /><RoView label='Off time' value={form.off_time || '-'} /></Row>
              <Row><RoView label='Ramp up' value={(form.ramp_up_minutes || 0) + ' min'} /><RoView label='Ramp down' value={(form.ramp_down_minutes || 0) + ' min'} /></Row>
              <RoView label='Distance from water' value={(form.distance_inches !== '' && form.distance_inches != null) ? form.distance_inches + ' in' : '-'} />
              {(form.channels && form.channels.length > 0) ? (
                <div style={{ marginBottom: 14 }}>
                  <div style={labelCss}>Channels (peak %)</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {form.channels.map((c: any, i: number) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ width: 13, height: 13, borderRadius: 4, background: c.color, flex: '0 0 auto', boxShadow: '0 0 6px ' + c.color }} />
                        <span style={{ fontSize: 13, flex: 1, color: 'var(--text-light)' }}>{c.label}</span>
                        <span style={{ fontSize: 13, fontWeight: 700 }}>{c.peak_pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
              {form.notes ? <RoView label='Notes' value={form.notes} /> : null}
            </>
          ) : (<>
          <Row>
            <Field label='Quantity'><input type='number' style={inputCss} value={form.quantity ?? ''} onChange={(e) => set('quantity', e.target.value)} /></Field>
            <Field label='Cost'><input type='number' style={inputCss} value={form.cost ?? ''} onChange={(e) => set('cost', e.target.value)} /></Field>
          </Row>
          <Row>
            <Field label='On time'><input style={inputCss} placeholder='10:00 AM' value={form.on_time || ''} onChange={(e) => set('on_time', e.target.value)} /></Field>
            <Field label='Off time'><input style={inputCss} placeholder='10:00 PM' value={form.off_time || ''} onChange={(e) => set('off_time', e.target.value)} /></Field>
          </Row>
          <Row>
            <Field label='Ramp up (min)'><input type='number' style={inputCss} value={form.ramp_up_minutes ?? ''} onChange={(e) => set('ramp_up_minutes', e.target.value)} /></Field>
            <Field label='Ramp down (min)'><input type='number' style={inputCss} value={form.ramp_down_minutes ?? ''} onChange={(e) => set('ramp_down_minutes', e.target.value)} /></Field>
          </Row>
          <Field label='Distance from water (in)'><input type='number' style={inputCss} value={form.distance_inches ?? ''} onChange={(e) => set('distance_inches', e.target.value)} /></Field>
          {(form.channels && form.channels.length > 0) ? (
            <div style={{ marginBottom: 14 }}>
              <div style={labelCss}>Channels (peak %)</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {form.channels.map((c: any, i: number) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ width: 13, height: 13, borderRadius: 4, background: c.color, flex: '0 0 auto', boxShadow: '0 0 6px ' + c.color }} />
                    <span style={{ fontSize: 13, flex: 1, color: 'var(--text-light)' }}>{c.label}</span>
                    <input type='number' style={{ ...inputCss, width: 96 }} value={c.peak_pct ?? ''} onChange={(e) => { const v = e.target.value; setForm((f) => ({ ...f, channels: (f.channels || []).map((x: any, j: number) => (j === i ? { ...x, peak_pct: v === '' ? 0 : Number(v) } : x)) })); }} />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          <Field label='Notes'><textarea style={{ ...inputCss, minHeight: 64, resize: 'vertical' }} value={form.notes || ''} onChange={(e) => set('notes', e.target.value)} /></Field>
          <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
            <button onClick={saveLight} disabled={busy} style={{ ...btnCss, flex: 1, opacity: busy ? 0.6 : 1 }}>{busy ? 'Saving...' : 'Save'}</button>
            <button onClick={() => delRow('user_equipment', modal.id as string)} disabled={busy} style={{ ...ghostCss, color: '#fca5a5', borderColor: 'rgba(239,68,68,0.4)' }}>Delete</button>
          </div>
          </>)}
        </Modal>
      )}

      {modal && modal.kind === 'dose' && (
        <Modal title='Dosing details' onClose={() => setModal(null)}>
          {err && <ErrBox msg={err} />}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 17 }}>{[form._brand, form._name].filter(Boolean).join(' ') || 'Dosing product'}</div>
          </div>
          {form._bound ? (
            <>
              <Banner>Controlled by {form._outletName || 'a smart outlet'}. This dosing product is on Shelly automation, so its schedule is read-only here. Edit it in the NextUpReef app to keep the doser in sync.</Banner>
              <Row><RoView label='Parameter' value={PARAM_LABEL[form.parameter] || form.parameter} /><RoView label='System' value={DOSE_SYSTEMS.find((x) => x.id === form.system)?.label || form.system} /></Row>
              <RoView label='Frequency' value={form.freqMode === 'as_needed' ? 'As needed' : (form.freqMode === 'interval' ? ('Every ' + (form.intervalDays || '?') + ' days') : ((form.doses_per_day || '?') + 'x daily'))} />
              {form.freqMode !== 'as_needed' ? <RoView label='Amount' value={((form.daily_amount !== '' && form.daily_amount != null) ? form.daily_amount : '-') + ' ' + (form.dose_unit || '')} /> : null}
              <Row><RoView label='Delivery' value={DOSE_DELIVERIES.find((x) => x.id === form.delivery)?.label || form.delivery || '-'} /><RoView label='Status' value={form.is_active === false ? 'Paused' : 'Active'} /></Row>
              {form.notes ? <RoView label='Notes' value={form.notes} /> : null}
            </>
          ) : (<>
          <Row>
            <Field label='Parameter'><select style={inputCss} value={form.parameter || 'other'} onChange={(e) => set('parameter', e.target.value)}>{DOSE_PARAMS.map((pp) => <option key={pp.id} value={pp.id}>{pp.label}</option>)}</select></Field>
            <Field label='System'><select style={inputCss} value={form.system || 'other'} onChange={(e) => set('system', e.target.value)}>{DOSE_SYSTEMS.map((pp) => <option key={pp.id} value={pp.id}>{pp.label}</option>)}</select></Field>
          </Row>
          <Field label='Frequency'>
            <div style={{ display: 'flex', gap: 6 }}>
              {DOSE_FREQ.map((fm) => <button key={fm.id} onClick={() => set('freqMode', fm.id)} style={{ flex: 1, padding: '9px 0', borderRadius: 10, fontSize: 13, cursor: 'pointer', border: '1px solid ' + (form.freqMode === fm.id ? 'var(--reef)' : 'var(--border)'), background: form.freqMode === fm.id ? 'var(--reef-glow)' : 'transparent', color: form.freqMode === fm.id ? 'var(--reef)' : 'var(--text-muted)' }}>{fm.label}</button>)}
            </div>
          </Field>
          {form.freqMode !== 'as_needed' ? (
            <Row>
              <Field label='Amount'><input type='number' style={inputCss} value={form.daily_amount ?? ''} onChange={(e) => set('daily_amount', e.target.value)} /></Field>
              <Field label='Unit'><input style={inputCss} value={form.dose_unit || ''} onChange={(e) => set('dose_unit', e.target.value)} /></Field>
            </Row>
          ) : null}
          {form.freqMode === 'daily' ? <Field label='Doses per day'><input type='number' style={inputCss} value={form.doses_per_day ?? ''} onChange={(e) => set('doses_per_day', e.target.value)} /></Field> : null}
          {form.freqMode === 'interval' ? <Field label='Every N days'><input type='number' style={inputCss} value={form.intervalDays || ''} onChange={(e) => set('intervalDays', e.target.value)} /></Field> : null}
          <Field label='Delivery'><select style={inputCss} value={form.delivery || 'manual'} onChange={(e) => set('delivery', e.target.value)}>{DOSE_DELIVERIES.map((pp) => <option key={pp.id} value={pp.id}>{pp.label}</option>)}</select></Field>
          <Field label='Notes'><textarea style={{ ...inputCss, minHeight: 64, resize: 'vertical' }} value={form.notes || ''} onChange={(e) => set('notes', e.target.value)} /></Field>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, fontSize: 14, cursor: 'pointer' }}>
            <input type='checkbox' checked={form.is_active !== false} onChange={(e) => set('is_active', e.target.checked)} /> Active
          </label>
          <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
            <button onClick={saveDose} disabled={busy} style={{ ...btnCss, flex: 1, opacity: busy ? 0.6 : 1 }}>{busy ? 'Saving...' : 'Save'}</button>
            <button onClick={() => delRow('dosing_products', modal.id as string)} disabled={busy} style={{ ...ghostCss, color: '#fca5a5', borderColor: 'rgba(239,68,68,0.4)' }}>Delete</button>
          </div>
          </>)}
        </Modal>
      )}
    </div>
  );
}
