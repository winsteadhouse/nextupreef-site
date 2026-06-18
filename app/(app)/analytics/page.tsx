import { createClient } from '@/lib/supabase/server';
import { getActiveTank } from '@/lib/active-tank';
import AnalyticsClient from './AnalyticsClient';

export default async function AnalyticsPage() {
  const supabase = await createClient();
  const { tanks, activeTankId } = await getActiveTank();
  const tank = tanks.find((t) => t.id === activeTankId) ?? null;
  if (!tank) return (<div><h1>Analytics</h1><p style={{ color: 'var(--mid)', marginTop: 8 }}>No tanks yet.</p></div>);

  const tt = tank.tank_type ?? 'mixed';
  const rawTargets = ((await supabase.from('param_targets').select('param, min, max').eq('tank_type', tt)).data ?? []) as Record<string, unknown>[];
  const targets: Record<string, { min: number; max: number }> = {};
  for (const r of rawTargets) targets[String(r.param)] = { min: Number(r.min), max: Number(r.max) };
  const rawLogs = ((await supabase.from('parameter_logs').select('logged_at, alk, ca, mg, no3, po4, salinity, ph, temp').eq('tank_id', tank.id).order('logged_at', { ascending: true })).data ?? []) as Record<string, unknown>[];
  const rawScores = ((await supabase.from('score_snapshots').select('snapshot_date, reef_score, stability_score, community_rank, community_total').eq('tank_id', tank.id).order('snapshot_date', { ascending: true })).data ?? []) as Record<string, unknown>[];
  const rawEvents = ((await supabase.rpc('analytics_events', { p_tank: tank.id })).data ?? []) as Record<string, unknown>[];
  const rawDose = ((await supabase.rpc('dose_daily', { p_tank: tank.id })).data ?? []) as Record<string, unknown>[];

  const num = (v: unknown) => (v == null ? null : Number(v));
  const logs = rawLogs.map((l) => ({ t: new Date(String(l.logged_at)).getTime(), alk: num(l.alk), ca: num(l.ca), mg: num(l.mg), no3: num(l.no3), po4: num(l.po4), salinity: num(l.salinity), ph: num(l.ph), temp: num(l.temp) }));
  const scores = rawScores.map((s) => ({ t: new Date(String(s.snapshot_date)).getTime(), reef: num(s.reef_score), stab: num(s.stability_score), rank: num(s.community_rank), total: num(s.community_total) }));
  const events = rawEvents.filter((e) => e.t).map((e) => ({ t: new Date(String(e.t)).getTime(), type: String(e.etype), label: String(e.label) })).sort((a, b) => a.t - b.t);
  const doseDaily = rawDose.map((r) => ({ t: new Date(String(r.d) + 'T12:00:00').getTime(), product: String(r.product), param: String(r.param), ml: Number(r.ml) }));

  return <AnalyticsClient tankName={tank.name} logs={logs} scores={scores} events={events} doseDaily={doseDaily} targets={targets} />;
}
