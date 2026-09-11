// Shared reef-parameter metadata + target resolution for the portal.
// Targets match the app: tank-type defaults, overridden per tank by
// tanks.default_params.targets (what the app's Log > Edit writes).

import type { SupabaseClient } from '@supabase/supabase-js';

export type ParamKey = 'alk' | 'ca' | 'mg' | 'no3' | 'po4' | 'salinity' | 'ph' | 'temp' | 'nh3' | 'no2';

export type ParamMeta = { key: ParamKey; label: string; short: string; unit: string; color: string; dec: number };

export const PARAMS: ParamMeta[] = [
  { key: 'alk', label: 'Alkalinity', short: 'Alk', unit: 'dKH', color: '#2EE6CF', dec: 2 },
  { key: 'ca', label: 'Calcium', short: 'Ca', unit: 'ppm', color: '#4F9DFF', dec: 0 },
  { key: 'mg', label: 'Magnesium', short: 'Mg', unit: 'ppm', color: '#A78BFA', dec: 0 },
  { key: 'no3', label: 'Nitrate', short: 'NO3', unit: 'ppm', color: '#F472B6', dec: 1 },
  { key: 'po4', label: 'Phosphate', short: 'PO4', unit: 'ppm', color: '#FBBF24', dec: 3 },
  { key: 'salinity', label: 'Salinity', short: 'Salinity', unit: 'SG', color: '#818CF8', dec: 3 },
  { key: 'ph', label: 'pH', short: 'pH', unit: '', color: '#E879F9', dec: 2 },
  { key: 'temp', label: 'Temperature', short: 'Temp', unit: '°F', color: '#60A5FA', dec: 1 },
  { key: 'nh3', label: 'Ammonia', short: 'NH3', unit: 'ppm', color: '#FB923C', dec: 2 },
  { key: 'no2', label: 'Nitrite', short: 'NO2', unit: 'ppm', color: '#F87171', dec: 2 },
];
export const PMAP = Object.fromEntries(PARAMS.map((p) => [p.key, p])) as Record<ParamKey, ParamMeta>;
export const CORE_KEYS: ParamKey[] = ['alk', 'ca', 'mg', 'no3', 'po4', 'salinity', 'ph', 'temp'];

const DEF: Record<string, Partial<Record<ParamKey, [number, number]>>> = {
  mixed: { alk: [8.0, 9.5], ca: [400, 450], mg: [1280, 1450], no3: [2, 10], po4: [0.03, 0.08], salinity: [1.024, 1.026], ph: [8.1, 8.4], temp: [76, 80], nh3: [0, 0.02], no2: [0, 0.05] },
  sps: { alk: [7.8, 8.6], ca: [410, 450], mg: [1280, 1400], no3: [2, 8], po4: [0.03, 0.07], salinity: [1.025, 1.026], ph: [8.1, 8.4], temp: [76, 79] },
  lps: { alk: [7.8, 9.5], ca: [400, 470], mg: [1280, 1450], no3: [5, 20], po4: [0.05, 0.12], salinity: [1.024, 1.026], ph: [8.0, 8.4], temp: [76, 80] },
  softie: { alk: [7.8, 9.5], ca: [380, 460], mg: [1250, 1500], no3: [5, 25], po4: [0.05, 0.15], salinity: [1.024, 1.026], ph: [8.0, 8.4], temp: [76, 80] },
  nano: { alk: [8.0, 9.5], ca: [400, 450], mg: [1280, 1400], no3: [2, 10], po4: [0.03, 0.08], salinity: [1.024, 1.026], ph: [8.1, 8.4], temp: [76, 79] },
  ulns: { alk: [7.6, 8.4], ca: [410, 450], mg: [1280, 1400], no3: [1, 5], po4: [0.02, 0.05], salinity: [1.025, 1.026], ph: [8.1, 8.4], temp: [76, 79] },
  fish_only: { alk: [7.0, 11.0], ca: [350, 500], mg: [1150, 1500], no3: [0, 40], po4: [0, 0.5], salinity: [1.020, 1.025], ph: [7.8, 8.4], temp: [76, 80] },
};

export type Target = { lo: number; hi: number };

export function resolveTargets(tankType: string | null | undefined, defaultParams: unknown): Record<ParamKey, Target> {
  const base = DEF[tankType && DEF[tankType] ? tankType : 'mixed'];
  const custom = (defaultParams && typeof defaultParams === 'object' && !Array.isArray(defaultParams)
    ? (defaultParams as { targets?: Record<string, { min?: unknown; max?: unknown }> }).targets
    : undefined) ?? {};
  const out = {} as Record<ParamKey, Target>;
  for (const p of PARAMS) {
    const b = base[p.key] ?? DEF.mixed[p.key] ?? [0, 0];
    const c = custom[p.key];
    const lo = c && Number.isFinite(Number(c.min)) ? Number(c.min) : b[0];
    const hi = c && Number.isFinite(Number(c.max)) ? Number(c.max) : b[1];
    out[p.key] = { lo, hi };
  }
  return out;
}

/** Params the user chose to track in the app (default_params.selected), else the core 8. */
export function selectedParams(defaultParams: unknown): ParamKey[] {
  const raw = Array.isArray(defaultParams) ? defaultParams
    : defaultParams && typeof defaultParams === 'object' ? (defaultParams as { selected?: unknown }).selected : null;
  const sel = Array.isArray(raw) ? raw.filter((k): k is ParamKey => typeof k === 'string' && k in PMAP) : [];
  return sel.length ? sel : CORE_KEYS;
}

export type LogRow = { t: number; source: string | null; notes: string | null } & Partial<Record<ParamKey, number | null>>;

/** Every log for a tank, oldest first. Pages past PostgREST's 1000-row cap. */
export async function fetchAllLogs(supabase: SupabaseClient, tankId: string, maxRows = 20000): Promise<LogRow[]> {
  const cols = 'logged_at, source, notes, alk, ca, mg, no3, po4, salinity, ph, temp, nh3, no2';
  const out: LogRow[] = [];
  const PAGE = 1000;
  for (let from = 0; from < maxRows; from += PAGE) {
    const { data, error } = await supabase.from('parameter_logs').select(cols).eq('tank_id', tankId)
      .order('logged_at', { ascending: false }).range(from, from + PAGE - 1);
    if (error || !data?.length) break;
    for (const r of data as Record<string, unknown>[]) {
      const row: LogRow = { t: new Date(String(r.logged_at)).getTime(), source: (r.source as string) ?? null, notes: (r.notes as string) ?? null };
      for (const p of PARAMS) { const v = r[p.key]; row[p.key] = v == null || v === '' ? null : Number(v); }
      out.push(row);
    }
    if (data.length < PAGE) break;
  }
  return out.reverse();
}

export function statusOf(v: number, t: Target): 'good' | 'watch' | 'bad' {
  if (v >= t.lo && v <= t.hi) return 'good';
  const span = (t.hi - t.lo) || Math.abs(t.hi) * 0.1 || 1;
  const d = v < t.lo ? t.lo - v : v - t.hi;
  return d <= span * 0.18 ? 'watch' : 'bad';
}
