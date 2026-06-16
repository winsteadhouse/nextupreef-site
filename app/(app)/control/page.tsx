import { createClient } from '@/lib/supabase/server';
import { getActiveTank } from '@/lib/active-tank';

const DEG = String.fromCharCode(176);
const pan = { background: 'var(--panel)', border: '1px solid var(--hair)', borderRadius: 'var(--r)', padding: '15px 17px' } as const;
const PARAM_COLOR: Record<string, string> = { alk: '#0ea5e9', alkalinity: '#0ea5e9', ca: '#8b5cf6', calcium: '#8b5cf6', mg: '#10b981', magnesium: '#10b981', nitrate: '#22c55e', phosphate: '#f59e0b', kalkwasser: '#8b5cf6', custom: '#2EE6CF', other: '#2EE6CF' };

const within = (iso: unknown, mins: number) => (iso ? (Date.now() - new Date(String(iso)).getTime()) <= mins * 60000 : false);
function relTime(iso: unknown): string {
  if (!iso) return 'never';
  const ms = Date.now() - new Date(String(iso)).getTime();
  const m = Math.floor(ms / 60000);
  if (m < 1) return 'just now';
  if (m < 60) return m + 'm ago';
  const h = Math.floor(m / 60);
  if (h < 24) return h + 'h ago';
  return Math.floor(h / 24) + 'd ago';
}
function uptimeStr(boot: unknown): string {
  if (!boot) return '-';
  const ms = Date.now() - new Date(String(boot)).getTime();
  if (ms < 0) return '-';
  const h = Math.floor(ms / 3600000);
  if (h < 1) return Math.floor(ms / 60000) + 'm';
  if (h < 24) return h + 'h';
  return Math.floor(h / 24) + 'd ' + (h % 24) + 'h';
}
function clockTime(iso: unknown): string {
  if (!iso) return '';
  return new Date(String(iso)).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}

const NOTIF_META: Record<string, { label: string; color: string; badge: string }> = { maintenance_reminder: { label: 'Maintenance reminder', color: '#2EE6CF', badge: 'M' }, water_change_due: { label: 'Water change due', color: '#5B8DEF', badge: 'W' }, water_change_upcoming: { label: 'Water change upcoming', color: '#8FA1B6', badge: 'W' }, testing_reminder: { label: 'Testing reminder', color: '#F6A623', badge: 'T' }, param_alert: { label: 'Parameter alert', color: '#FF5D5D', badge: '!' }, dose_alert: { label: 'Dosing alert', color: '#FF5D5D', badge: '!' }, reminder: { label: 'Reminder', color: '#8FA1B6', badge: 'R' }, temp_low: { label: 'Low temperature alert', color: '#FF5D5D', badge: '!' }, temp_high: { label: 'High temperature alert', color: '#FF5D5D', badge: '!' }, ph_low: { label: 'Low pH alert', color: '#FF5D5D', badge: '!' }, ph_high: { label: 'High pH alert', color: '#FF5D5D', badge: '!' }, health_not_logging: { label: 'Hub stopped logging readings', color: '#F6A623', badge: '!' }, not_logging: { label: 'Hub stopped logging readings', color: '#F6A623', badge: '!' }, dose_capped: { label: 'Dosing capped (runaway blocked)', color: '#FF5D5D', badge: '!' } };
function notifMeta(t: string) { return NOTIF_META[t] || { label: String(t).split('_').join(' '), color: '#8FA1B6', badge: 'N' }; }
export default async function ControlPage() {
  const supabase = await createClient();
  const { tanks, activeTankId } = await getActiveTank();
  const tank = tanks.find((t) => t.id === activeTankId) ?? null;
  if (!tank) return (<div><h1>Control</h1><p style={{ color: 'var(--mid)', marginTop: 8 }}>No tanks yet.</p></div>);

  const ctrl = ((await supabase.from('controller_integrations').select('controller_type, hostname, last_sync_at, last_sync_status, last_error, is_active, probe_map').eq('tank_id', tank.id).limit(1)).data ?? [])[0] as any || null;
  const hub = ((await supabase.from('hub_devices').select('id, name, local_ip, firmware_version, available_version, update_status, ph_enabled, temp_probe_count, polls_apex, last_seen_at, last_reading_at, last_error, boot_at, wifi_rssi, wifi_ssid').eq('tank_id', tank.id).eq('is_active', true).order('last_seen_at', { ascending: false }).limit(1)).data ?? [])[0] as any || null;
  const outlets = ((await supabase.from('smart_outlets').select('id, display_name, brand, equipment_kind, local_ip, last_output_on, last_watts, last_voltage, last_current, last_temperature_c, last_state_at, last_seen_on_network, last_error, flow_rate_ml_per_sec').eq('tank_id', tank.id).eq('is_active', true).order('display_name')).data ?? []) as any[];
  const alertRules = ((await supabase.from('hub_alert_rules').select('metric, alert_enabled, high_threshold, low_threshold, cutoff_enabled, cutoff_high_temp, cutoff_recovery_temp, cutoff_active, last_alerted_at, last_alert_kind, last_health_alert_kind, last_health_alerted_at').eq('tank_id', tank.id)).data ?? []) as any[];
  const doseEvents = ((await supabase.from('dose_events').select('amount_ml, dosed_at, source, outlet_id').eq('tank_id', tank.id).order('dosed_at', { ascending: false }).limit(8)).data ?? []) as any[];
  const probeErrors = hub ? (((await supabase.from('hub_probe_errors').select('metric, reason, recorded_at').eq('hub_id', hub.id).order('recorded_at', { ascending: false }).limit(6)).data ?? []) as any[]) : [];
  const phRows = hub ? (((await supabase.from('hub_readings').select('value, recorded_at').eq('hub_id', hub.id).eq('metric', 'ph').order('recorded_at', { ascending: false }).limit(60)).data ?? []) as any[]) : [];
  const tempRows = hub ? (((await supabase.from('hub_readings').select('value, recorded_at').eq('hub_id', hub.id).eq('metric', 'temp').order('recorded_at', { ascending: false }).limit(60)).data ?? []) as any[]) : [];
  const outletIds = outlets.map((o) => o.id);
  const powerRows = outletIds.length ? (((await supabase.from('outlet_power_readings').select('outlet_id, watts, recorded_at').in('outlet_id', outletIds).order('recorded_at', { ascending: false }).limit(700)).data ?? []) as any[]) : [];
  const runtimeRows = ((await supabase.rpc('control_outlet_runtime', { p_tank: tank.id })).data ?? []) as any[];
  const doseProducts = ((await supabase.from('dosing_products').select('id, product_name, parameter, daily_amount, dose_unit, doses_per_day, outlet_id, auto_schedule').eq('tank_id', tank.id).eq('is_active', true)).data ?? []) as any[];
  const todayStart = new Date(); todayStart.setHours(0, 0, 0, 0);
  const todayDoses = ((await supabase.from('dose_events').select('amount_ml, dosed_at, product_id, outlet_id').eq('tank_id', tank.id).gte('dosed_at', todayStart.toISOString()).order('dosed_at', { ascending: true })).data ?? []) as any[];
  const { data: { user: authUser } } = await supabase.auth.getUser();
  const uid = authUser ? authUser.id : null;
  const syncLog = ctrl ? (((await supabase.from('controller_sync_log').select('synced_at, status, params_logged, error_message, source').eq('tank_id', tank.id).order('synced_at', { ascending: false }).limit(6)).data ?? []) as any[]) : [];
  const notifRecent = uid ? (((await supabase.from('notification_log').select('notification_type, sent_at, title, body').eq('user_id', uid).order('sent_at', { ascending: false }).limit(12)).data ?? []) as any[]) : [];
  const notif30 = uid ? (((await supabase.from('notification_log').select('notification_type, sent_at').eq('user_id', uid).gte('sent_at', new Date(Date.now() - 30 * 86400000).toISOString())).data ?? []) as any[]) : [];
  const notifCounts: Record<string, number> = {};
  for (const nrow of notif30) { const kk = String(nrow.notification_type); notifCounts[kk] = (notifCounts[kk] || 0) + 1; }
  const maintReminders = ((await supabase.from('maintenance_reminders').select('name, frequency_days, next_due').eq('tank_id', tank.id).eq('is_active', true).order('next_due')).data ?? []) as any[];
  const alertEvents = ((await supabase.from('alert_events').select('metric, kind, threshold, detail, created_at').eq('tank_id', tank.id).order('created_at', { ascending: false }).limit(20)).data ?? []) as any[];
  const alertFeed = alertEvents.map((a) => {
    const isHealth = String(a.kind).indexOf('health_') === 0;
    const mkey = isHealth ? String(a.kind) : ((a.kind === 'low' || a.kind === 'high') ? (a.metric + '_' + a.kind) : String(a.kind));
    const detail = (a.kind === 'low' || a.kind === 'high') ? ((a.kind === 'low' ? 'below ' : 'above ') + (a.threshold != null ? a.threshold : '') + (a.metric === 'temp' ? DEG + 'F' : '')) : (a.detail ? String(a.detail) : '');
    return { mkey, at: String(a.created_at), detail, title: '' };
  });
  const pushFeed = notifRecent.map((nr) => ({ mkey: String(nr.notification_type), at: String(nr.sent_at), detail: nr.body ? String(nr.body) : '', title: nr.title ? String(nr.title) : '' }));
  const feed = alertFeed.concat(pushFeed).sort((x, y) => new Date(y.at).getTime() - new Date(x.at).getTime()).slice(0, 16);

  const powerByOutlet: Record<string, number[]> = {};
  for (const r of powerRows) { const id = r.outlet_id as string; if (!powerByOutlet[id]) powerByOutlet[id] = []; if (powerByOutlet[id].length < 40) powerByOutlet[id].push(Number(r.watts) || 0); }
  for (const k of Object.keys(powerByOutlet)) powerByOutlet[k].reverse();
  const runtimeBy: Record<string, number> = {};
  for (const r of runtimeRows) runtimeBy[r.outlet_id] = Number(r.avg_on_hours);
  const outletNameMap: Record<string, string> = {};
  for (const o of outlets) outletNameMap[o.id] = o.display_name;
  const autoDosers = doseProducts.filter((p) => p.outlet_id && p.auto_schedule && Array.isArray(p.auto_schedule.times) && p.auto_schedule.times.length);
  const suppressedToday = ((await supabase.from('dose_events_suppressed').select('outlet_id, amount_ml').eq('tank_id', tank.id).gte('suppressed_at', todayStart.toISOString())).data ?? []) as any[];
  const suppressedBy: Record<string, { n: number; ml: number }> = {};
  for (const r of suppressedToday) { const oid = String(r.outlet_id); if (!suppressedBy[oid]) suppressedBy[oid] = { n: 0, ml: 0 }; suppressedBy[oid].n += 1; suppressedBy[oid].ml += Number(r.amount_ml) || 0; }
  const phSeries = phRows.map((r) => Number(r.value)).reverse();
  const tempSeries = tempRows.map((r) => Number(r.value)).reverse();

  const phRule = alertRules.find((a) => a.metric === 'ph') || null;
  const tempRule = alertRules.find((a) => a.metric === 'temp') || null;
  const phLast = phRows[0] ? Number(phRows[0].value) : null;
  const tempLast = tempRows[0] ? Number(tempRows[0].value) : null;

  const hubOnline = within(hub?.last_seen_at, 10);
  const hubFresh = within(hub?.last_reading_at, 20);
  const onlineOutlets = outlets.filter((o) => within(o.last_seen_on_network, 30));
  const outletOnlineCount = onlineOutlets.length;
  const apexConfigured = !!ctrl;
  const apexActive = !!ctrl?.is_active;
  const apexOnline = apexActive && within(ctrl?.last_sync_at, 180) && (ctrl?.last_sync_status === 'ok' || ctrl?.last_sync_status === 'success');
  const lastDose = doseEvents[0] || null;
  const dosingActive = lastDose ? within(lastDose.dosed_at, 90) : false;

  const issues: { tone: string; text: string }[] = [];
  if (hub && hubOnline && !hubFresh) issues.push({ tone: 'amber', text: hub.name + ' is online but has not logged a probe reading since ' + relTime(hub.last_reading_at) });
  if (hub && !hubOnline) issues.push({ tone: 'bad', text: hub.name + ' is offline (last seen ' + relTime(hub.last_seen_at) + ')' });
  if (phLast != null && phRule && (phLast < Number(phRule.low_threshold) || phLast > Number(phRule.high_threshold))) issues.push({ tone: 'bad', text: 'pH out of range at ' + phLast.toFixed(2) + ' (alert ' + phRule.low_threshold + ' to ' + phRule.high_threshold + ')' });
  if (hub && tempRows.length === 0) issues.push({ tone: 'dim', text: 'No temperature readings from the hub' });
  for (const o of outlets) if (!within(o.last_seen_on_network, 30)) issues.push({ tone: 'bad', text: o.display_name + ' outlet is offline (' + relTime(o.last_seen_on_network) + ')' });
  if (apexConfigured && !apexActive) issues.push({ tone: 'dim', text: 'Apex sync is turned off - enable it in the app to pull probe data' });

  const allGood = issues.filter((i) => i.tone !== 'dim').length === 0;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <h1>Control</h1>
        <span style={{ fontSize: 13, color: 'var(--dim)' }}>{tank.name + ' . the brain of your reef'}</span>
      </div>

      <div style={{ ...pan, marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
          <span style={{ width: 11, height: 11, borderRadius: 9, flex: 'none', background: allGood ? 'var(--good)' : 'var(--amber)', boxShadow: '0 0 0 4px ' + (allGood ? 'rgba(54,216,155,.16)' : 'rgba(246,166,35,.16)') }} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--hi)' }}>{allGood ? 'All systems nominal' : 'Needs attention'}</div>
            <div style={{ fontSize: 11.5, color: 'var(--dim)', marginTop: 1 }}>{outletOnlineCount + '/' + outlets.length + ' outlets online . hub ' + (hubOnline ? 'online' : 'offline') + (apexActive ? ' . apex ' + (apexOnline ? 'syncing' : 'idle') : '')}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          {apexConfigured ? <Dot label='Apex' online={apexOnline} partial={apexActive && !apexOnline} /> : null}
          {hub ? <Dot label='Hub' online={hubOnline} partial={hubOnline && !hubFresh} /> : null}
          <Dot label={outletOnlineCount + '/' + outlets.length + ' outlets'} online={outlets.length > 0 && outletOnlineCount === outlets.length} partial={outletOnlineCount > 0 && outletOnlineCount < outlets.length} />
          <Dot label='Dosing' online={dosingActive} partial={!dosingActive && doseEvents.length > 0} />
        </div>
      </div>

      {issues.length ? (
        <div style={{ ...pan, marginTop: 12 }}>
          <div style={{ fontSize: 12.5, color: 'var(--mid)', marginBottom: 8 }}>System checks</div>
          {issues.slice(0, 5).map((it, i) => (
            <div key={i} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', padding: '5px 0', fontSize: 12.5, color: 'var(--hi)' }}>
              <span style={{ width: 7, height: 7, borderRadius: 9, marginTop: 5, flex: 'none', background: it.tone === 'bad' ? 'var(--bad)' : it.tone === 'amber' ? 'var(--amber)' : 'var(--dim)' }} />
              <span>{it.text}</span>
            </div>
          ))}
        </div>
      ) : null}

      <div style={{ fontSize: 13, color: 'var(--mid)', margin: '20px 0 10px' }}>Live readings</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
        <ProbeTile label='pH' value={phLast} unit='' dec={2} lo={phRule ? Number(phRule.low_threshold) : null} hi={phRule ? Number(phRule.high_threshold) : null} series={phSeries} color='#E879F9' updated={phRows[0]?.recorded_at} fresh={within(phRows[0]?.recorded_at, 20)} empty={!hub?.ph_enabled} emptyText='pH probe disabled' />
        <ProbeTile label='Temperature' value={tempLast} unit={DEG + 'F'} dec={1} lo={tempRule ? Number(tempRule.low_threshold) : null} hi={tempRule ? Number(tempRule.high_threshold) : null} series={tempSeries} color='#60A5FA' updated={tempRows[0]?.recorded_at} fresh={within(tempRows[0]?.recorded_at, 20)} empty={tempRows.length === 0} emptyText='No temp readings yet' />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', margin: '22px 0 10px' }}>
        <span style={{ fontSize: 13, color: 'var(--mid)' }}>{'Smart outlets . ' + outletOnlineCount + ' of ' + outlets.length + ' online'}</span>
      </div>
      {outlets.length ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 14 }}>
          {outlets.map((o) => <OutletCard key={o.id} o={o} spark={powerByOutlet[o.id] || []} avgOn={runtimeBy[o.id]} lastDose={o.equipment_kind === 'doser' ? (doseEvents.find((d) => d.outlet_id === o.id) || null) : null} />)}
        </div>
      ) : <div style={{ ...pan, color: 'var(--dim)', fontSize: 13 }}>No smart outlets paired to this tank.</div>}

      {autoDosers.length ? (
        <div>
          <div style={{ margin: '22px 0 10px', fontSize: 13, color: 'var(--mid)' }}>Dosing today</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 14 }}>
            {autoDosers.map((p) => <DoseTimeline key={p.id} p={p} evs={todayDoses.filter((e) => e.product_id === p.id)} outletName={outletNameMap[p.outlet_id] || 'Doser'} blocked={suppressedBy[p.outlet_id] || null} />)}
          </div>
        </div>
      ) : null}

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 14, marginTop: 22, alignItems: 'start' }}>
        <div style={pan}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 13, color: 'var(--mid)' }}>Hub</span>
            {hub ? <Pill text={hubOnline ? (hubFresh ? 'online' : 'no readings') : 'offline'} tone={hubOnline ? (hubFresh ? 'good' : 'amber') : 'bad'} /> : <Pill text='none' tone='dim' />}
          </div>
          {hub ? (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 11, background: 'rgba(46,230,207,.12)', border: '1px solid rgba(46,230,207,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cyan)', fontWeight: 800, flex: 'none' }}>H</div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--hi)' }}>{hub.name}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--dim)' }}>{'fw ' + (hub.firmware_version || '-') + (hub.available_version && hub.available_version !== hub.firmware_version ? ' . update ' + hub.available_version + ' available' : '')}</div>
                </div>
              </div>
              <InfoRow k='Uptime' v={uptimeStr(hub.boot_at)} />
              <InfoRow k='Last seen' v={relTime(hub.last_seen_at)} color={hubOnline ? 'var(--good)' : 'var(--bad)'} />
              <InfoRow k='Last reading' v={relTime(hub.last_reading_at)} color={hubFresh ? 'var(--good)' : 'var(--amber)'} />
              <InfoRow k='IP address' v={hub.local_ip || '-'} />
              <InfoRow k='WiFi' v={(hub.wifi_ssid || '-')} extra={<SignalBars rssi={hub.wifi_rssi} />} />
              <InfoRow k='Probes' v={(hub.ph_enabled ? 'pH on' : 'pH off') + ' . ' + (Number(hub.temp_probe_count) || 0) + ' temp'} />
              <InfoRow k='Polls Apex' v={hub.polls_apex ? 'yes' : 'no'} last />
              {hub.last_error ? <div style={{ fontSize: 11.5, color: 'var(--bad)', marginTop: 8, borderTop: '1px solid var(--hair)', paddingTop: 8 }}>{'Error: ' + hub.last_error}</div> : null}
            </div>
          ) : <div style={{ fontSize: 12.5, color: 'var(--dim)' }}>No NextUpReef hub paired. Pair one in the app to monitor pH, temp, and dosing.</div>}
        </div>

        <div style={pan}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 13, color: 'var(--mid)' }}>Controller</span>
            {apexConfigured ? <Pill text={apexOnline ? 'synced' : apexActive ? 'stale' : 'off'} tone={apexOnline ? 'good' : apexActive ? 'amber' : 'dim'} /> : <Pill text='none' tone='dim' />}
          </div>
          {apexConfigured ? (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 11, background: 'rgba(91,141,239,.14)', border: '1px solid rgba(91,141,239,.32)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--royal)', fontWeight: 800, flex: 'none' }}>A</div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--hi)', textTransform: 'capitalize' }}>{ctrl.controller_type || 'Controller'}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--dim)' }}>{ctrl.hostname || '-'}</div>
                </div>
              </div>
              <InfoRow k='Last sync' v={relTime(ctrl.last_sync_at)} color={apexOnline ? 'var(--good)' : 'var(--mid)'} />
              <InfoRow k='Sync status' v={ctrl.last_sync_status || '-'} />
              <InfoRow k='State' v={apexActive ? 'active' : 'off'} last />
              {ctrl.probe_map ? (
                <div style={{ borderTop: '1px solid var(--hair)', marginTop: 10, paddingTop: 10 }}>
                  <div style={{ fontSize: 11.5, color: 'var(--mid)', marginBottom: 7 }}>Probe mapping</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {Object.keys(ctrl.probe_map).map((pk) => (
                      <span key={pk} style={{ fontSize: 10.5, color: 'var(--mid)', background: 'rgba(125,165,210,.08)', border: '1px solid var(--hair)', borderRadius: 6, padding: '3px 8px' }}>{pk + ' ' + String.fromCharCode(8594) + ' ' + String(ctrl.probe_map[pk])}</span>
                    ))}
                  </div>
                </div>
              ) : null}
              <div style={{ borderTop: '1px solid var(--hair)', marginTop: 10, paddingTop: 10 }}>
                <div style={{ fontSize: 11.5, color: 'var(--mid)', marginBottom: 7 }}>Sync history</div>
                {syncLog.length ? syncLog.map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0', fontSize: 11.5 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'var(--hi)' }}>
                      <span style={{ width: 6, height: 6, borderRadius: 9, flex: 'none', background: (row.status === 'ok' || row.status === 'success') ? 'var(--good)' : 'var(--bad)' }} />
                      {(row.status === 'ok' || row.status === 'success') ? ((row.params_logged != null ? row.params_logged : 0) + ' params logged') : (row.error_message ? String(row.error_message).slice(0, 40) : 'sync failed')}
                    </span>
                    <span style={{ color: 'var(--dim)' }}>{relTime(row.synced_at)}</span>
                  </div>
                )) : <div style={{ fontSize: 11.5, color: 'var(--dim)' }}>No sync history recorded yet. Pull from the app to start logging.</div>}
              </div>
              {ctrl.last_error ? <div style={{ fontSize: 11.5, color: 'var(--bad)', marginTop: 8 }}>{'Error: ' + ctrl.last_error}</div> : null}
            </div>
          ) : <div style={{ fontSize: 12.5, color: 'var(--dim)' }}>No controller connected. Link a Neptune Apex in the app to pull probe data automatically.</div>}
        </div>
      </div>

      <div style={{ ...pan, marginTop: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexWrap: 'wrap', gap: 8 }}>
          <span style={{ fontSize: 13, color: 'var(--mid)' }}>Notifications and alerts . last 30 days</span>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {Object.keys(notifCounts).sort((a, b) => notifCounts[b] - notifCounts[a]).map((k) => (
              <span key={k} style={{ fontSize: 10.5, fontWeight: 700, color: notifMeta(k).color, background: 'rgba(125,165,210,.08)', border: '1px solid var(--hair)', borderRadius: 6, padding: '3px 8px' }}>{notifMeta(k).label + ' ' + notifCounts[k]}</span>
            ))}
          </div>
        </div>
        {maintReminders.length ? (
          <div style={{ fontSize: 11, color: 'var(--dim)', marginBottom: 9, marginTop: -2 }}>{'Maintenance pushes cover: ' + maintReminders.map((r) => r.name + ' (' + r.frequency_days + 'd)').join(', ')}</div>
        ) : null}
        {feed.length ? feed.map((fr, i) => { const m = notifMeta(fr.mkey); return (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderTop: i ? '1px solid var(--hair)' : 'none', fontSize: 12.5 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'var(--hi)' }}>
              <span style={{ width: 20, height: 20, borderRadius: 6, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: m.color, background: 'rgba(125,165,210,.10)', border: '1px solid var(--hair)' }}>{m.badge}</span>
              {(fr.title ? fr.title : m.label) + (fr.detail ? ' . ' + (fr.detail.length > 64 ? fr.detail.slice(0, 64) + '...' : fr.detail) : '')}
            </span>
            <span style={{ color: 'var(--dim)' }}>{relTime(fr.at)}</span>
          </div>
        ); }) : <div style={{ fontSize: 12.5, color: 'var(--dim)' }}>No notifications sent yet.</div>}
        <div style={{ fontSize: 10.5, color: 'var(--dim)', marginTop: 9, borderTop: '1px solid var(--hair)', paddingTop: 8 }}>Reminders and threshold alerts sent to this account. Temperature and pH alerts come from your hub alert rules, not the push log.</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 14, marginTop: 14, alignItems: 'start' }}>
        <div style={pan}>
          <div style={{ fontSize: 13, color: 'var(--mid)', marginBottom: 10 }}>Safety and alerts</div>
          {alertRules.length ? alertRules.map((a, i) => (
            <div key={i} style={{ padding: '8px 0', borderTop: i ? '1px solid var(--hair)' : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 13, color: 'var(--hi)', fontWeight: 600, textTransform: 'capitalize' }}>{a.metric === 'ph' ? 'pH' : a.metric}</span>
                <Pill text={a.alert_enabled ? 'alerts on' : 'alerts off'} tone={a.alert_enabled ? 'good' : 'dim'} />
              </div>
              <div style={{ fontSize: 11.5, color: 'var(--mid)', marginTop: 3 }}>{'Alert below ' + a.low_threshold + ' or above ' + a.high_threshold}</div>
              {a.metric === 'temp' && a.cutoff_high_temp != null ? (
                <div style={{ fontSize: 11.5, color: a.cutoff_enabled ? 'var(--amber)' : 'var(--dim)', marginTop: 3 }}>{'Heater cutoff at ' + a.cutoff_high_temp + DEG + 'F, recover ' + a.cutoff_recovery_temp + DEG + 'F . ' + (a.cutoff_enabled ? (a.cutoff_active ? 'ACTIVE NOW' : 'armed') : 'off')}</div>
              ) : null}
            </div>
          )) : <div style={{ fontSize: 12.5, color: 'var(--dim)' }}>No alert rules configured.</div>}
        </div>

        <div style={pan}>
          <div style={{ fontSize: 13, color: 'var(--mid)', marginBottom: 10 }}>Recent activity</div>
          {(doseEvents.length || probeErrors.length) ? (
            <div>
              {doseEvents.slice(0, 5).map((d, i) => (
                <div key={'d' + i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderTop: i ? '1px solid var(--hair)' : 'none', fontSize: 12.5 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--hi)' }}><span style={{ width: 7, height: 7, borderRadius: 9, background: 'var(--cyan)', flex: 'none' }} />{'Dosed ' + d.amount_ml + ' mL'}</span>
                  <span style={{ color: 'var(--dim)' }}>{relTime(d.dosed_at)}</span>
                </div>
              ))}
              {probeErrors.slice(0, 3).map((e, i) => (
                <div key={'e' + i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderTop: '1px solid var(--hair)', fontSize: 12.5 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--hi)' }}><span style={{ width: 7, height: 7, borderRadius: 9, background: 'var(--amber)', flex: 'none' }} />{(e.metric === 'ph' ? 'pH' : e.metric) + ' ' + String(e.reason).replace('_', ' ')}</span>
                  <span style={{ color: 'var(--dim)' }}>{relTime(e.recorded_at)}</span>
                </div>
              ))}
            </div>
          ) : <div style={{ fontSize: 12.5, color: 'var(--dim)' }}>No recent device activity.</div>}
        </div>
      </div>
    </div>
  );
}

function Dot({ label, online, partial }: { label: string; online: boolean; partial?: boolean }) {
  const col = online ? 'var(--good)' : partial ? 'var(--amber)' : 'var(--dim)';
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--mid)' }}>
      <span style={{ width: 8, height: 8, borderRadius: 9, background: col, flex: 'none', boxShadow: online ? '0 0 0 3px rgba(54,216,155,.16)' : 'none' }} />{label}
    </span>
  );
}

function Pill({ text, tone }: { text: string; tone: string }) {
  const map: Record<string, [string, string]> = { good: ['var(--good)', 'rgba(54,216,155,.14)'], amber: ['var(--amber)', 'rgba(246,166,35,.14)'], bad: ['var(--bad)', 'rgba(255,93,93,.14)'], dim: ['var(--mid)', 'rgba(125,165,210,.10)'] };
  const c = map[tone] || map.dim;
  return <span style={{ fontSize: 10, fontWeight: 700, color: c[0], background: c[1], padding: '3px 8px', borderRadius: 6, textTransform: 'uppercase', letterSpacing: '.4px' }}>{text}</span>;
}

function InfoRow({ k, v, color, extra, last }: { k: string; v: string; color?: string; extra?: React.ReactNode; last?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderBottom: last ? 'none' : '1px solid var(--hair)', fontSize: 12.5 }}>
      <span style={{ color: 'var(--dim)' }}>{k}</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 7, color: color || 'var(--hi)', fontWeight: 600 }}>{extra}{v}</span>
    </div>
  );
}

function SignalBars({ rssi }: { rssi: number | null }) {
  const n = rssi == null ? 0 : rssi >= -55 ? 4 : rssi >= -65 ? 3 : rssi >= -75 ? 2 : 1;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'flex-end', gap: 2, height: 12 }}>
      {[1, 2, 3, 4].map((i) => <span key={i} style={{ width: 3, height: 2 + i * 2.4, borderRadius: 1, background: i <= n ? 'var(--good)' : 'var(--raised)' }} />)}
    </span>
  );
}

function Spark({ series, color }: { series: number[]; color: string }) {
  if (!series || series.length < 2) return null;
  const w = 120, h = 30;
  const min = Math.min(...series), max = Math.max(...series), span = (max - min) || 1;
  const dx = w / (series.length - 1);
  const Y = (v: number) => h - 2 - ((v - min) / span) * (h - 4);
  const path = series.map((v, i) => (i ? 'L' : 'M') + ' ' + (i * dx).toFixed(1) + ' ' + Y(v).toFixed(1)).join(' ');
  return <svg viewBox={'0 0 ' + w + ' ' + h} width='100%' height={h} preserveAspectRatio='none' style={{ display: 'block' }}><path d={path} fill='none' stroke={color} strokeWidth={1.6} strokeLinejoin='round' /></svg>;
}

function ProbeTile({ label, value, unit, dec, lo, hi, series, color, updated, fresh, empty, emptyText }: { label: string; value: number | null; unit: string; dec: number; lo: number | null; hi: number | null; series: number[]; color: string; updated: unknown; fresh: boolean; empty?: boolean; emptyText?: string }) {
  const inRange = value != null && lo != null && hi != null ? value >= lo && value <= hi : null;
  const stale = value != null && !fresh;
  const valColor = empty ? 'var(--dim)' : inRange === false ? 'var(--bad)' : 'var(--hi)';
  return (
    <div style={{ ...pan, border: '1px solid ' + (inRange === false && !empty ? 'rgba(255,93,93,.34)' : 'var(--hair)') }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12.5, color: 'var(--mid)' }}><span style={{ width: 8, height: 8, borderRadius: 2, background: color, flex: 'none' }} />{label}</span>
        {empty ? <Pill text='no probe' tone='dim' /> : inRange == null ? null : <Pill text={inRange ? 'in range' : (lo != null && value != null && value < lo ? 'low' : 'high')} tone={inRange ? 'good' : 'bad'} />}
      </div>
      {empty ? (
        <div style={{ fontSize: 13, color: 'var(--dim)', marginTop: 14, marginBottom: 6 }}>{emptyText}</div>
      ) : (
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 7, marginTop: 8 }}>
            <span style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-.5px', color: valColor }}>{value != null ? value.toFixed(dec) : '-'}</span>
            <span style={{ fontSize: 12.5, color: 'var(--dim)' }}>{unit}</span>
            {stale ? <span style={{ marginLeft: 'auto', fontSize: 10.5, fontWeight: 700, color: 'var(--amber)', textTransform: 'uppercase', letterSpacing: '.4px' }}>stale</span> : null}
          </div>
          {series && series.length > 1 ? <div style={{ marginTop: 10 }}><Spark series={series} color={color} /></div> : <div style={{ height: 30, marginTop: 10 }} />}
          <div style={{ fontSize: 10.5, color: 'var(--dim)', marginTop: 8 }}>{(lo != null && hi != null ? 'alert ' + lo + ' to ' + hi + ' . ' : '') + (value != null ? 'updated ' + relTime(updated) : 'no readings yet')}</div>
        </div>
      )}
    </div>
  );
}

function OutletCard({ o, spark, lastDose, avgOn }: { o: any; spark: number[]; lastDose: any; avgOn?: number }) {
  const online = within(o.last_seen_on_network, 30);
  const on = !!o.last_output_on;
  const isDoser = o.equipment_kind === 'doser';
  const watts = o.last_watts != null ? Number(o.last_watts) : null;
  return (
    <div style={{ ...pan, padding: 0, overflow: 'hidden' }}>
      <div style={{ padding: '13px 15px 10px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--hi)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{o.display_name}</div>
          <div style={{ fontSize: 11.5, color: 'var(--dim)', marginTop: 2, textTransform: 'capitalize' }}>{(o.equipment_kind || 'outlet') + ' . ' + (o.brand ? String(o.brand).replace(/_/g, ' ') : 'shelly')}</div>
        </div>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: online ? 'var(--good)' : 'var(--dim)', flex: 'none' }}><span style={{ width: 7, height: 7, borderRadius: 9, background: online ? 'var(--good)' : 'var(--dim)', boxShadow: online ? '0 0 0 3px rgba(54,216,155,.16)' : 'none' }} />{online ? 'online' : 'offline'}</span>
      </div>
      <div style={{ padding: '0 15px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: '.5px', color: on ? 'var(--good)' : 'var(--dim)', background: on ? 'rgba(54,216,155,.14)' : 'rgba(125,165,210,.08)', border: '1px solid ' + (on ? 'rgba(54,216,155,.3)' : 'var(--hair)'), borderRadius: 7, padding: '5px 12px' }}>{on ? 'ON' : 'OFF'}</span>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          {watts != null ? <Metric k='Power' v={watts.toFixed(1) + ' W'} /> : null}
          {o.last_voltage != null ? <Metric k='Volts' v={Number(o.last_voltage).toFixed(0) + ' V'} /> : null}
          {o.last_temperature_c != null ? <Metric k='Device' v={(Number(o.last_temperature_c) * 9 / 5 + 32).toFixed(0) + DEG + 'F'} /> : null}
        </div>
      </div>
      <div style={{ height: 34, marginTop: 8 }}>{spark && spark.length > 1 ? <Spark series={spark} color={on ? '#36D89B' : '#5B8DEF'} /> : null}</div>
      {avgOn != null ? <div style={{ padding: '0 15px 2px', fontSize: 11, color: 'var(--mid)' }}>{avgOn.toFixed(1) + ' h/day on . 7-day avg'}</div> : null}
      <div style={{ padding: '8px 15px 13px', borderTop: '1px solid var(--hair)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11, color: 'var(--dim)' }}>
        <span>{o.local_ip || 'no ip'}</span>
        <span>{isDoser ? (lastDose ? 'last dose ' + relTime(lastDose.dosed_at) : (o.flow_rate_ml_per_sec ? Number(o.flow_rate_ml_per_sec).toFixed(2) + ' mL/s' : 'doser')) : 'updated ' + relTime(o.last_state_at)}</span>
      </div>
    </div>
  );
}

function DoseTimeline({ p, evs, outletName, blocked }: { p: any; evs: any[]; outletName: string; blocked?: { n: number; ml: number } | null }) {
  const times: string[] = (p.auto_schedule && Array.isArray(p.auto_schedule.times)) ? p.auto_schedule.times : [];
  const toMin = (hm: string) => { const parts = String(hm).split(':'); return (Number(parts[0]) || 0) * 60 + (Number(parts[1]) || 0); };
  const schedMins = times.map(toMin).sort((a, b) => a - b);
  const sched = p.doses_per_day || schedMins.length || 0;
  const done = evs.length;
  const doneMl = evs.reduce((sum, e) => sum + Number(e.amount_ml || 0), 0);
  const target = Number(p.daily_amount || 0);
  const pct = sched ? Math.min(100, Math.round((done / sched) * 100)) : 0;
  const now = new Date(); const nowMin = now.getHours() * 60 + now.getMinutes();
  const nextMin = schedMins.find((m) => m > nowMin);
  const eventMins = evs.map((e) => { const d = new Date(e.dosed_at); return d.getHours() * 60 + d.getMinutes(); });
  const lastMin = eventMins.length ? eventMins[eventMins.length - 1] : null;
  const fmtMin = (m: number) => { const h = Math.floor(m / 60), mm = m % 60; const ap = h < 12 ? 'a' : 'p'; let hh = h % 12; if (hh === 0) hh = 12; return hh + (mm ? ':' + String(mm).padStart(2, '0') : '') + ap; };
  const color = PARAM_COLOR[p.parameter] || 'var(--cyan)';
  return (
    <div style={pan}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--hi)' }}>{p.product_name || 'Doser'}</div>
          <div style={{ fontSize: 11.5, color: 'var(--dim)', marginTop: 2 }}>{outletName + (target ? ' . ' + target + ' ' + (p.dose_unit || 'mL') + '/day' : '')}</div>
        </div>
        <div style={{ textAlign: 'right', flex: 'none' }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: pct >= 100 ? 'var(--good)' : 'var(--hi)' }}>{done + ' / ' + sched}</div>
          <div style={{ fontSize: 10, color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '.4px' }}>doses today</div>
        </div>
      </div>
      <div style={{ height: 6, borderRadius: 4, background: 'var(--raised)', marginTop: 12, overflow: 'hidden' }}>
        <div style={{ width: pct + '%', height: '100%', background: color }} />
      </div>
      <div style={{ position: 'relative', height: 38, marginTop: 16 }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 18, height: 2, background: 'var(--raised)', borderRadius: 2 }} />
        {[6, 12, 18].map((h) => (<div key={h} style={{ position: 'absolute', left: (h / 24 * 100) + '%', top: 10, bottom: 10, width: 1, background: 'var(--hair)' }} />))}
        {schedMins.map((m, i) => (<div key={'s' + i} style={{ position: 'absolute', left: (m / 1440 * 100) + '%', top: 12, height: 14, width: 2, marginLeft: -1, background: m <= nowMin ? 'rgba(246,166,35,.55)' : 'var(--dim)', borderRadius: 1 }} />))}
        {eventMins.map((m, i) => (<div key={'e' + i} style={{ position: 'absolute', left: (m / 1440 * 100) + '%', top: 14, width: 9, height: 9, marginLeft: -4.5, borderRadius: 9, background: color, border: '1.5px solid var(--panel)', boxShadow: '0 0 5px ' + color }} />))}
        <div style={{ position: 'absolute', left: (nowMin / 1440 * 100) + '%', top: 4, bottom: 4, width: 2, marginLeft: -1, background: 'var(--cyan)' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--dim)' }}>
        <span>12a</span><span>6a</span><span>12p</span><span>6p</span><span>12a</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12, borderTop: '1px solid var(--hair)', paddingTop: 10, fontSize: 12 }}>
        <span style={{ color: 'var(--mid)' }}>{Math.round(doneMl) + (target ? ' / ' + target : '') + ' ' + (p.dose_unit || 'mL') + ' today'}</span>
        <span style={{ color: 'var(--mid)', fontWeight: 600 }}>{nextMin != null ? 'next ' + fmtMin(nextMin) : (lastMin != null ? 'last ' + fmtMin(lastMin) : 'done for today')}</span>
      </div>
    </div>
  );
}

function Metric({ k, v }: { k: string; v: string }) {
  return <div><div style={{ fontSize: 10, color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '.4px' }}>{k}</div><div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--hi)', marginTop: 1 }}>{v}</div></div>;
}
