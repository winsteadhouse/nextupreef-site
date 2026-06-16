import { createClient } from '@/lib/supabase/server';
import { getActiveTank } from '@/lib/active-tank';
import MyReefClient from './MyReefClient';

export const dynamic = 'force-dynamic';

export default async function MyReefPage() {
  const supabase = await createClient();
  const { user, tanks, activeTankId } = await getActiveTank();
  const tank = tanks.find((t) => t.id === activeTankId) ?? null;
  if (!tank || !user) {
    return (
      <div>
        <h1>My Reef</h1>
        <p style={{ color: 'var(--mid)', marginTop: 8 }}>No tank selected yet.</p>
      </div>
    );
  }

  const full = (await supabase
    .from('tanks')
    .select('id, name, tank_type, display_gallons, sump_gallons, salt_brand, setup_date, started_at, has_refugium, refugium_macroalgae, dominant_coral, rock_type, journey_phase')
    .eq('id', tank.id)
    .maybeSingle()).data as any;

  const live = ((await supabase.from('user_livestock').select('*').eq('tank_id', tank.id).order('created_at', { ascending: true })).data ?? []) as any[];
  const equip = ((await supabase.from('user_equipment').select('*').eq('tank_id', tank.id).order('created_at', { ascending: true })).data ?? []) as any[];
  const photos = ((await supabase.from('tank_photos').select('*').eq('tank_id', tank.id).order('month', { ascending: false })).data ?? []) as any[];

  const liveCatIds = Array.from(new Set(live.map((r) => r.catalog_id).filter(Boolean))) as string[];
  const equipCatIds = Array.from(new Set(equip.map((r) => r.catalog_id).filter(Boolean))) as string[];

  const liveCat = liveCatIds.length
    ? (((await supabase.from('livestock_catalog').select('id, common_name, scientific_name, type, image_url, care_level, reef_safe, placement').in('id', liveCatIds)).data ?? []) as any[])
    : [];
  const equipCat = equipCatIds.length
    ? (((await supabase.from('equipment_catalog').select('id, type, brand, model, common_name, image_url').in('id', equipCatIds)).data ?? []) as any[])
    : [];

  const liveMap: Record<string, any> = {};
  for (const c of liveCat) liveMap[c.id] = c;
  const equipMap: Record<string, any> = {};
  for (const c of equipCat) equipMap[c.id] = c;

  const userPaths = Array.from(new Set(live.map((r) => r.photo_url).filter(Boolean))) as string[];
  const signedMap: Record<string, string> = {};
  if (userPaths.length) {
    const signed = (await supabase.storage.from('journal-photos').createSignedUrls(userPaths, 60 * 60 * 24 * 365)).data ?? [];
    for (const sgn of signed as any[]) { if (sgn && sgn.path && sgn.signedUrl) signedMap[sgn.path] = sgn.signedUrl; }
  }
  const numOr = (v: any) => { if (v === null || v === undefined || v === '') return null; const n = Number(v); return isNaN(n) ? null : n; };

  const livestock = live.map((r) => {
    const c = r.catalog_id ? liveMap[r.catalog_id] : null;
    return {
      id: r.id,
      name: r.nickname || r.custom_name || (c && c.common_name) || 'Unnamed',
      species: (c && c.scientific_name) || null,
      kind: (r.custom_type || (c && c.type) || 'other'),
      image: (r.photo_url && signedMap[r.photo_url]) || (c && c.image_url) || null,
      care_level: (c && c.care_level) || null,
      quantity: r.quantity ?? 1,
      health_status: r.health_status || null,
      acquired_date: r.acquired_date || null,
      cost: numOr(r.cost),
      notes: r.notes || null,
      custom_type: r.custom_type || (c && c.type) || '',
      custom_name: r.custom_name || r.nickname || (c && c.common_name) || '',
    };
  });

  const equipment = equip.map((r) => {
    const c = r.catalog_id ? equipMap[r.catalog_id] : null;
    return {
      id: r.id,
      name: r.nickname || r.custom_name || (c && c.common_name) || (c && c.model) || 'Equipment',
      brand: (c && c.brand) || null,
      model: (c && c.model) || null,
      kind: (r.custom_type || (c && c.type) || 'other'),
      image: (c && c.image_url) || null,
      install_date: r.install_date || null,
      cost: numOr(r.cost),
      notes: r.notes || null,
      custom_type: r.custom_type || (c && c.type) || '',
      custom_name: r.custom_name || r.nickname || (c && c.common_name) || '',
    };
  });

  const lightScheds = ((await supabase.from('light_schedules').select('*').eq('tank_id', tank.id)).data ?? []) as any[];
  const schedByEq: Record<string, any> = {};
  for (const sc of lightScheds) { if (sc.equipment_id) schedByEq[sc.equipment_id] = sc; }
  const outletsData = ((await supabase.from('smart_outlets').select('id, display_name, doser_brand').eq('user_id', user.id)).data ?? []) as any[];
  const outletName: Record<string, string> = {};
  for (const o of outletsData) outletName[o.id] = o.display_name || o.doser_brand || 'Smart outlet';
  const linksData = ((await supabase.from('outlet_equipment_links').select('equipment_id, outlet_id')).data ?? []) as any[];
  const linkByEq: Record<string, string> = {};
  for (const lk of linksData) { if (lk.equipment_id) linkByEq[lk.equipment_id] = lk.outlet_id; }
  const lights = equipment.filter((e) => e.kind === 'light').map((e) => { const sc = schedByEq[e.id] || {}; return { ...e, on_time: sc.on_time || null, off_time: sc.off_time || null, distance_inches: sc.distance_inches != null ? Number(sc.distance_inches) : null, quantity: sc.quantity ?? null, ramp_up_minutes: sc.ramp_up_minutes ?? null, ramp_down_minutes: sc.ramp_down_minutes ?? null, channels: Array.isArray(sc.channels) ? sc.channels : [], bound: (sc.outlet_id != null) || (linkByEq[e.id] != null), outletName: sc.outlet_id ? (outletName[sc.outlet_id] || null) : (linkByEq[e.id] ? (outletName[linkByEq[e.id]] || null) : null) }; });
  const equipmentMain = equipment.filter((e) => e.kind !== 'light' && e.kind !== 'doser');
  const dosingRows = ((await supabase.from('dosing_products').select('*').eq('tank_id', tank.id).eq('is_active', true).order('created_at', { ascending: true })).data ?? []) as any[];
  const dosing = dosingRows.map((d) => ({ id: d.id, brand: d.product_brand || '', name: d.product_name || '', parameter: d.parameter || 'other', daily_amount: d.daily_amount != null ? Number(d.daily_amount) : null, dose_unit: d.dose_unit || '', doses_per_day: d.doses_per_day ?? null, schedule: d.schedule || null, system: d.dosing_system || null, delivery: d.delivery || null, notes: d.notes || null, parameters_covered: Array.isArray(d.parameters_covered) ? d.parameters_covered : [], bound: d.outlet_id != null, outletName: d.outlet_id ? (outletName[d.outlet_id] || null) : null }));

  return (
    <MyReefClient
      userId={user.id}
      tank={full}
      livestock={livestock}
      equipment={equipmentMain}
      lights={lights}
      dosing={dosing}
      photos={photos}
    />
  );
}
