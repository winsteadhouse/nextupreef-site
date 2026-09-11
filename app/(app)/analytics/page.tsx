import { createClient } from '@/lib/supabase/server';
import { getActiveTank } from '@/lib/active-tank';
import AnalyticsClient from './AnalyticsClient';
import { fetchAllLogs, resolveTargets } from '@/lib/reef';

export default async function AnalyticsPage() {
  const supabase = await createClient();
  const { tanks, activeTankId } = await getActiveTank();
  const tank = tanks.find((t) => t.id === activeTankId) ?? null;
  if (!tank) return (<div><h1>Analytics</h1><p style={{ color: 'var(--mid)', marginTop: 8 }}>No tanks yet.</p></div>);

  const meta = ((await supabase.from('tanks').select('tank_type, default_params').eq('id', tank.id).single()).data ?? {}) as { tank_type?: string; default_params?: unknown };
  const resolved = resolveTargets(meta.tank_type ?? tank.tank_type, meta.default_params);
  const targets: Record<string, { min: number; max: number }> = {};
  for (const [k, t] of Object.entries(resolved)) targets[k] = { min: t.lo, max: t.hi };
  const allLogs = await fetchAllLogs(supabase, tank.id);
  const rawScores = ((await supabase.from('score_snapshots').select('snapshot_date, reef_score, stability_score, community_rank, community_total').eq('tank_id', tank.id).order('snapshot_date', { ascending: true })).data ?? []) as Record<string, unknown>[];
  const rawEvents = ((await supabase.rpc('analytics_events', { p_tank: tank.id })).data ?? []) as Record<string, unknown>[];
  const rawDose = ((await supabase.rpc('dose_daily', { p_tank: tank.id })).data ?? []) as Record<string, unknown>[];

  const num = (v: unknown) => (v == null ? null : Number(v));
  const logs = allLogs.map((l) => ({ t: l.t, alk: l.alk ?? null, ca: l.ca ?? null, mg: l.mg ?? null, no3: l.no3 ?? null, po4: l.po4 ?? null, salinity: l.salinity ?? null, ph: l.ph ?? null, temp: l.temp ?? null }));
  const scores = rawScores.map((s) => ({ t: new Date(String(s.snapshot_date)).getTime(), reef: num(s.reef_score), stab: num(s.stability_score), rank: num(s.community_rank), total: num(s.community_total) }));
  const events = rawEvents.filter((e) => e.t).map((e) => ({ t: new Date(String(e.t)).getTime(), type: String(e.etype), label: String(e.label) })).sort((a, b) => a.t - b.t);
  const doseDaily = rawDose.map((r) => ({ t: new Date(String(r.d) + 'T12:00:00').getTime(), product: String(r.product), param: String(r.param), ml: Number(r.ml) }));

  return <AnalyticsClient tankName={tank.name} logs={logs} scores={scores} events={events} doseDaily={doseDaily} targets={targets} />;
}
