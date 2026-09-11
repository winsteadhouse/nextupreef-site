import { createClient } from '@/lib/supabase/server';
import { getActiveTank } from '@/lib/active-tank';
import { fetchAllLogs, resolveTargets, selectedParams } from '@/lib/reef';
import DashboardClient, { type DashData } from './DashboardClient';

const within = (iso: unknown, mins: number) => (iso ? Date.now() - new Date(String(iso)).getTime() <= mins * 60000 : false);
const num = (v: unknown) => (v == null || v === '' ? null : Number(v));

export default async function DashboardPage() {
  const supabase = await createClient();
  const { tanks, activeTankId } = await getActiveTank();
  const lite = tanks.find((t) => t.id === activeTankId) ?? null;
  if (!lite) {
    return (
      <div className='dash-empty'>
        <h1>Dashboard</h1>
        <p>No tanks yet. Add one in the NextUpReef app and your data will show up here.</p>
      </div>
    );
  }
  const id = lite.id;

  const [tankRes, logs, snapsRes, advRes, remRes, wcSchedRes, wcRes, eventsRes, liveRes, eqRes, dosRes, lightRes, hubRes, outRes, ctrlRes] = await Promise.all([
    supabase.from('tanks').select('id, name, tank_type, display_gallons, sump_gallons, setup_date, salt_brand, has_refugium, refugium_macroalgae, is_public, rock_type, default_params').eq('id', id).single(),
    fetchAllLogs(supabase, id),
    supabase.from('score_snapshots').select('snapshot_date, reef_score, stability_score, community_rank, community_total').eq('tank_id', id).order('snapshot_date', { ascending: true }).limit(1000),
    supabase.from('ai_advisor_cache').select('response, generated_at').eq('tank_id', id).order('generated_at', { ascending: false }).limit(1),
    supabase.from('maintenance_reminders').select('name, frequency_days, last_completed, next_due, snoozed_until').eq('tank_id', id).eq('is_active', true).order('next_due', { ascending: true }),
    supabase.from('water_change_schedules').select('frequency, percent_change, last_completed, next_due').eq('tank_id', id).eq('is_active', true).limit(1),
    supabase.from('water_changes').select('completed_at, created_at, percent_changed, gallons_changed').eq('tank_id', id).order('completed_at', { ascending: false }).limit(200),
    supabase.rpc('analytics_events', { p_tank: id }),
    supabase.from('user_livestock').select('quantity, health_status, custom_type, custom_name, nickname, created_at, livestock_catalog(type, common_name)').eq('tank_id', id),
    supabase.from('user_equipment').select('custom_type, equipment_catalog(type)').eq('tank_id', id).eq('is_active', true),
    supabase.from('dosing_products').select('parameter, product_brand, product_name, daily_amount, dose_unit, method').eq('tank_id', id).eq('is_active', true),
    supabase.from('light_schedules').select('on_time, off_time, user_equipment(nickname, custom_name, equipment_catalog(brand, model))').eq('tank_id', id),
    supabase.from('hub_devices').select('last_seen_at').eq('tank_id', id).eq('is_active', true).order('last_seen_at', { ascending: false }).limit(1),
    supabase.from('smart_outlets').select('hub_id, last_seen_at, last_seen_on_network').eq('tank_id', id).eq('is_active', true),
    supabase.from('controller_integrations').select('controller_type, last_sync_at, last_sync_status').eq('tank_id', id).eq('is_active', true).order('last_sync_at', { ascending: false }).limit(1),
  ]);

  const tank = (tankRes.data ?? {}) as Record<string, unknown>;

  let advisor: DashData['advisor'] = null;
  const advRow = (advRes.data ?? [])[0] as { response?: unknown; generated_at?: string } | undefined;
  if (advRow?.response) {
    try { advisor = { ...(typeof advRow.response === 'string' ? JSON.parse(advRow.response) : advRow.response), at: advRow.generated_at ?? null }; } catch { advisor = null; }
  }

  const livestock = { fish: 0, coral: 0, invert: 0, other: 0 };
  const recentLive: { name: string; type: string; t: number }[] = [];
  for (const l of (liveRes.data ?? []) as Record<string, any>[]) {
    if (l.health_status === 'deceased') continue;
    const type = String(l.livestock_catalog?.type || l.custom_type || 'other');
    const q = Number(l.quantity) || 1;
    if (type === 'fish') livestock.fish += q;
    else if (['sps', 'lps', 'softie', 'coral', 'anemone'].includes(type)) livestock.coral += q;
    else if (type === 'invert') livestock.invert += q;
    else livestock.other += q;
    recentLive.push({ name: String(l.nickname || l.livestock_catalog?.common_name || l.custom_name || 'Livestock'), type, t: new Date(String(l.created_at)).getTime() });
  }
  recentLive.sort((a, b) => b.t - a.t);

  const eqTypes: Record<string, number> = {};
  for (const e of (eqRes.data ?? []) as Record<string, any>[]) {
    const k = String(e.equipment_catalog?.type || e.custom_type || 'other');
    eqTypes[k] = (eqTypes[k] ?? 0) + 1;
  }

  const lights = ((lightRes.data ?? []) as Record<string, any>[]).map((ls) => {
    const ue = ls.user_equipment; const c = ue?.equipment_catalog;
    const name = String(ue?.nickname || ue?.custom_name || (c ? `${c.brand ?? ''} ${c.model ?? ''}`.trim() : '') || 'Light');
    let hours: number | null = null;
    const m1 = /^(\d{1,2}):(\d{2})/.exec(String(ls.on_time ?? '')), m2 = /^(\d{1,2}):(\d{2})/.exec(String(ls.off_time ?? ''));
    if (m1 && m2) { hours = (Number(m2[1]) + Number(m2[2]) / 60) - (Number(m1[1]) + Number(m1[2]) / 60); if (hours < 0) hours += 24; }
    return { name, hours };
  });

  const hub = (hubRes.data ?? [])[0] as { last_seen_at?: string } | undefined;
  const hubOnline = !!hub && within(hub.last_seen_at, 10);
  const outlets = (outRes.data ?? []) as Record<string, unknown>[];
  const ctrl = (ctrlRes.data ?? [])[0] as { controller_type?: string; last_sync_at?: string; last_sync_status?: string } | undefined;

  const data: DashData = {
    tank: {
      id, name: String(tank.name ?? lite.name), type: (tank.tank_type as string) ?? lite.tank_type ?? 'mixed',
      gallons: num(tank.display_gallons), sump: num(tank.sump_gallons), setupDate: (tank.setup_date as string) ?? null,
      salt: (tank.salt_brand as string) ?? null, refugium: !!tank.has_refugium, macro: (tank.refugium_macroalgae as string) ?? null,
      isPublic: !!tank.is_public, rock: (tank.rock_type as string) ?? null,
    },
    logs,
    targets: resolveTargets(tank.tank_type as string, tank.default_params),
    selected: selectedParams(tank.default_params),
    scores: ((snapsRes.data ?? []) as Record<string, unknown>[]).map((s) => ({
      t: new Date(String(s.snapshot_date) + 'T12:00:00').getTime(), reef: num(s.reef_score), stab: num(s.stability_score), rank: num(s.community_rank), total: num(s.community_total),
    })),
    events: ((eventsRes.data ?? []) as Record<string, unknown>[]).filter((e) => e.t).map((e) => ({ t: new Date(String(e.t)).getTime(), type: String(e.etype), label: String(e.label) })).sort((a, b) => a.t - b.t),
    advisor,
    reminders: ((remRes.data ?? []) as Record<string, unknown>[]).map((r) => ({ name: String(r.name), every: num(r.frequency_days), nextDue: (r.next_due as string) ?? null, snoozed: (r.snoozed_until as string) ?? null })),
    wcSched: ((wcSchedRes.data ?? [])[0] as DashData['wcSched']) ?? null,
    wcs: ((wcRes.data ?? []) as Record<string, unknown>[]).map((w) => ({ t: new Date(String(w.completed_at ?? w.created_at)).getTime(), pct: num(w.percent_changed), gal: num(w.gallons_changed) })).sort((a, b) => a.t - b.t),
    livestock: { ...livestock, recent: recentLive.slice(0, 6) },
    equipment: eqTypes,
    dosing: ((dosRes.data ?? []) as Record<string, unknown>[]).map((d) => ({
      name: `${d.product_brand ?? ''} ${d.product_name ?? ''}`.trim() || String(d.parameter ?? 'Dosing'), param: String(d.parameter ?? ''),
      amount: num(d.daily_amount), unit: String(d.dose_unit ?? 'mL'), method: String(d.method ?? ''),
    })),
    lights,
    devices: {
      apex: ctrl ? { label: ctrl.controller_type === 'apex' ? 'Apex' : String(ctrl.controller_type ?? 'Controller'), online: within(ctrl.last_sync_at, 60) && ['ok', 'success'].includes(String(ctrl.last_sync_status)), lastSync: ctrl.last_sync_at ?? null } : null,
      hub: hub ? { online: hubOnline } : null,
      // Outlets are 'seen' when the app pinged them on the home LAN or the plug hit the dose webhook.
      outlets: outlets.length ? { total: outlets.length, online: outlets.filter((o) => (o.hub_id && hubOnline) || within(o.last_seen_on_network, 30) || within(o.last_seen_at, 30)).length } : null,
    },
  };

  return <DashboardClient data={data} />;
}
