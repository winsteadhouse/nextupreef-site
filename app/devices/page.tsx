import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reef Integrations: Jebao Pumps, Neptune Apex, CoralVue HYDROS & Shelly',
  description: 'NextUpReef connects to Jebao and Jecod WiFi pumps, Neptune Apex, Shelly smart outlets and CoralVue HYDROS. Set wave modes and flow, sync probes, automate dosing, and get alerted when a pump jams or runs dry. Integrations are a Pro feature.',
  alternates: { canonical: 'https://nextupreef.com/devices' },
  openGraph: {
    title: 'Works With Your Gear - NextUpReef',
    description: 'Connect Jebao pumps, a Neptune Apex, Shelly smart outlets or CoralVue HYDROS and run your reef from one app.',
    url: 'https://nextupreef.com/devices',
    images: [{ url: '/brand/og-image.png', width: 1200, height: 630 }],
  },
};

const shellyOutletUrl = 'https://amzn.to/4dLhHOO';

function Ico({ name, color, size }: { name: string; color?: string; size?: number }) {
  const s = size || 24;
  const c = { width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: color || 'var(--reef)', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (name) {
    case 'cloud': return <svg {...c}><path d='M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z'/></svg>;
    case 'apex': return <svg {...c}><circle cx='12' cy='12' r='9'/><path d='M12 8v4l3 3'/></svg>;
    case 'wave': return <svg {...c}><path d='M2 8c2.5 0 2.5 3 5 3s2.5-3 5-3 2.5 3 5 3 2.5-3 5-3'/><path d='M2 15c2.5 0 2.5 3 5 3s2.5-3 5-3 2.5 3 5 3 2.5-3 5-3'/></svg>;
    case 'flash': return <svg {...c}><polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'/></svg>;
    case 'check': return <svg {...c} stroke='#22C55E'><polyline points='20 6 9 17 4 12'/></svg>;
    case 'minus': return <svg {...c} stroke='var(--text-muted)'><line x1='5' y1='12' x2='19' y2='12'/></svg>;
    case 'star': return <svg {...c}><polygon points='12 2 15 9 22 9.3 17 14 18.5 21 12 17 5.5 21 7 14 2 9.3 9 9 12 2'/></svg>;
    case 'external': return <svg {...c} width={14} height={14}><path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'/><polyline points='15 3 21 3 21 9'/><line x1='10' y1='14' x2='21' y2='3'/></svg>;
    default: return <svg {...c}><circle cx='12' cy='12' r='9'/></svg>;
  }
}


// GMP models with their own affiliate links. Flow is from reseller listings (Jebao
// publishes no spec sheet for the G series), so it is quoted as approximate. Tank
// sizing assumes this is the only powerhead and a mixed-reef turnover of roughly
// 20-40x the display volume.
const gmpModels = [
  { model: 'GMP-20', gph: '3,200', tank: '50 - 125 gal', url: 'https://link.amazon/B00m6rWgr' },
  { model: 'GMP-30', gph: '4,800', tank: '90 - 190 gal', url: 'https://link.amazon/B09CtCzE8' },
  { model: 'GMP-40', gph: '6,100', tank: '120 - 250 gal', url: 'https://link.amazon/B0j5QTs4t' },
  { model: 'GMP-50', gph: '6,900', tank: '150 - 300 gal', url: 'https://link.amazon/B0dl3vgMY' },
  { model: 'GMP-60', gph: '7,900', tank: '180 - 350 gal', url: 'https://link.amazon/B02te6diw' },
];
const integrations = [
  {
    id: 'jebao', icon: 'wave', brand: 'Jebao / Jecod', heading: 'Jebao & Jecod Pumps',
    badge: 'NEW', badgeColor: '#0EA5E9', accent: '#0EA5E9',
    tagline: 'Real wave control, at Jebao prices.',
    sell: 'Jebao and Jecod WiFi pumps move a lot of water for the money, which is why so many reef tanks run them. This works with the WiFi models signed in to a Jebao Aqua account, not the controller-only pumps. Connect yours with your Jebao Aqua login and set flow, wave mode and feed mode from the same app as the rest of your tank. It works from anywhere, not just at home, and the app tells you when a pump reports a jammed impeller or is running dry, the two failures that quietly kill a tank overnight. Your pump also lands in My Reef with its real flow in GPH, so your turnover figure is measured instead of guessed.',
    pros: ['Works away from home, no local network needed', 'Alerts for a jammed impeller or a pump running dry', 'All nine wave modes, explained in plain English', 'Real flow in GPH feeds your turnover automatically', 'Works with WiFi Jebao wavemakers, return pumps and dosers'],
    cons: ['Only WiFi models work - controller-only and Bluetooth-only pumps cannot be connected', 'The pump must be signed in to a Jebao Aqua account first', 'Confirmed on the GMP-40; other models use the same platform but are untested', 'Not an official Jebao integration, so a firmware change could interrupt it'],
    ctaLabel: 'View the GMP series', ctaUrl: 'https://link.amazon/B0j5QTs4t', ctaSponsored: true,
    mfgName: 'jebao.com', mfgUrl: 'https://www.jebao.com/',
    guide: '/blog/connect-jebao-pump', guideLabel: 'Connect guide', image: '/devices/jebao-app-v4.png',
    alt: 'Jebao GMP-40 in NextUpReef showing a flow dial at 74 percent, pump linkage and the nine wave modes',
  },
  {
    id: 'apex', icon: 'apex', brand: 'Neptune Systems', heading: 'Neptune Apex',
    badge: 'FULL CONTROLLER', badgeColor: '#0EA5E9', accent: '#0EA5E9',
    tagline: 'Get more out of the Apex you already own.',
    sell: 'Connect your Apex with no extra hardware. NextUpReef pulls temperature, pH, salinity and Trident alk, calcium and magnesium readings into your logs, and lets you switch outlets, run Feed Mode, set heater temperatures and schedule dosing, all next to your scores and AI advice. Dosing schedules are saved to the Apex, so they keep running when your phone is off.',
    pros: ['Uses the Apex you already own', 'Probe and Trident readings go straight into your logs', 'Outlets, Feed Mode, heater temps and dosing in one app', 'Schedules are saved to the Apex and run 24/7'],
    cons: ['Your phone needs to be on the same WiFi as the Apex', 'Dosing uses a regular outlet and pump (DOS/DDR not supported yet)'],
    ctaLabel: 'Visit Neptune Systems', ctaUrl: 'https://www.neptunesystems.com/',
    mfgName: 'neptunesystems.com', mfgUrl: 'https://www.neptunesystems.com/',
    guide: '/blog/how-to-connect-apex', guideLabel: 'Connect guide', image: '/devices/apex-app-v3.png',
    alt: 'Neptune Apex in NextUpReef with live temperature and pH gauges, Feed Mode and outlet status',
  },
  {
    id: 'shelly', icon: 'flash', brand: 'Shelly', heading: 'Shelly Smart Outlets',
    badge: 'SIMPLE CONTROL', badgeColor: '#F59E0B', accent: '#F59E0B',
    tagline: 'Affordable dosing and lighting, no controller needed.',
    sell: 'A Shelly plug is the easiest way to automate a doser, light, heater or pump. Calibrate your pump once and set a daily mL target. NextUpReef saves the schedule to the plug, so it runs even when your phone or internet is off. The plug\u2019s power draw confirms each dose, and you get an alert if a dose is missed.',
    pros: ['Low cost and quick to add', 'Schedules run on the plug, even offline', 'Each dose confirmed by power draw', 'Missed-dose alerts'],
    cons: ['Outlet control only, no water probes', 'Phone and plug need the same WiFi to change settings'],
    ctaLabel: 'Buy on Amazon', ctaUrl: shellyOutletUrl, ctaSponsored: true,
    mfgName: 'shelly.com', mfgUrl: 'https://www.shelly.com/en-us/products/shelly-plug-us-gen4',
    guide: '/blog/how-to-setup-dosing-shelly', guideLabel: 'Dosing setup guide', image: '/devices/shelly-app-v3.png',
    alt: 'Shelly doser in NextUpReef showing 20 of 30 mL dosed today, confirmed by power, with the day\u2019s dose schedule',
  },
  {
    id: 'hydros', icon: 'cloud', brand: 'CoralVue', heading: 'CoralVue HYDROS',
    badge: 'EARLY ACCESS', badgeColor: '#7C3AED', accent: '#7C3AED',
    tagline: 'Monitor and control your whole HYDROS from anywhere.',
    sell: 'HYDROS talks to the cloud, so NextUpReef works with it from anywhere, not just on home WiFi. Connect with your HYDROS device key: pH, temperature, salinity and alkalinity tests flow into your logs around the clock. Switch outputs on, off or back to Auto, set pump levels, run Feeding or Water Change mode, and start tests. Your HYDROS confirms each change.',
    pros: ['Works away from home (cloud)', 'Readings sync 24/7, including alkalinity tests', 'Outputs, pump levels, Feeding and Water Change modes', 'Read-only key option if you only want readings'],
    cons: ['Early access: our newest integration', 'Programs and schedules stay in the HYDROS app'],
    ctaLabel: 'Shop HYDROS', ctaUrl: 'https://www.coralvuehydros.com/',
    mfgName: 'coralvuehydros.com', mfgUrl: 'https://www.coralvuehydros.com/',
    guide: '', guideLabel: '', image: '/devices/hydros-app-v3.png',
    alt: 'Devices and Automation screen in NextUpReef listing CoralVue HYDROS, Neptune Apex and Shelly smart outlets',
  },
];

const compareRows = [
  ['What it is', 'Local controller', 'Smart outlets', 'Cloud controller'],
  ['Status in NextUpReef', 'live', 'live', 'Early access'],
  ['Water readings (pH, temp, salinity)', 'yes', 'no', 'yes'],
  ['Outlet control', 'yes', 'yes', 'yes'],
  ['Feed / water change modes', 'Feed Mode', 'no', 'yes'],
  ['Automated dosing', 'Outlet + pump', 'yes', 'Manual dose'],
  ['Each dose confirmed + missed-dose alerts', 'no', 'yes', 'no'],
  ['Schedules run on the device (phone off)', 'yes', 'yes', 'Set in HYDROS app'],
  ['Works away from home', 'wifi', 'wifi', 'yes'],
  ['Hardware needed', 'Apex you own', 'Low-cost plugs', 'HYDROS controller'],
  ['Best for', 'All-in-one you own', 'Budget dosing + lighting', 'Full control from anywhere'],
];

const blogPosts = [
  { title: 'Connect a Jebao or Jecod pump', href: '/blog/connect-jebao-pump' },
  { title: 'Connect your Neptune Apex', href: '/blog/how-to-connect-apex' },
  { title: 'Set up automated dosing with Shelly', href: '/blog/how-to-setup-dosing-shelly' },
  { title: 'How to add a Shelly smart plug', href: '/blog/how-to-add-shelly-plug' },
  { title: 'Alkalinity, calcium and magnesium guide', href: '/blog/reef-tank-alkalinity-calcium-magnesium-guide' },
];

function Cell({ v }: { v: string }) {
  if (v === 'yes') return <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#22C55E', fontWeight: 700, fontSize: '13px' }}><Ico name='check' size={15} color='#22C55E' /> Yes</span>;
  if (v === 'no') return <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>No</span>;
  if (v === 'wifi') return <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Home WiFi</span>;
  if (v === 'live') return <span style={{ color: '#22C55E', fontWeight: 700, fontSize: '13px' }}>Live</span>;
  if (v === 'soon') return <span style={{ color: '#8B5CF6', fontWeight: 700, fontSize: '13px' }}>Coming soon</span>;
  return <span style={{ color: 'var(--text-light)', fontSize: '13px', fontWeight: 600 }}>{v}</span>;
}

function ProChip() {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '10px', fontWeight: 900, letterSpacing: '0.6px', color: '#B45309', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', padding: '3px 9px', borderRadius: '999px' }}>
      <Ico name='star' size={11} color='#B45309' /> PRO
    </span>
  );
}

export default function DevicesPage() {
  return (
    <>
      <section style={{ padding: '80px 20px 32px', textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '999px', background: 'rgba(44,196,214,0.10)', border: '1px solid rgba(44,196,214,0.25)', color: 'var(--reef)', fontWeight: 900, fontSize: '12px', letterSpacing: '0.6px', marginBottom: '22px' }}>
          INTEGRATIONS
        </div>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.03em', margin: '0 0 18px' }}>
          Works with{' '}
          <span style={{ background: 'linear-gradient(135deg, var(--reef) 0%, var(--reef-soft) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            your controller.
          </span>
        </h1>
        <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: 1.65, maxWidth: '620px', margin: '0 auto' }}>
          Connect the gear you already run, or pick the setup that fits your budget. NextUpReef works with Neptune Apex, Shelly smart outlets and CoralVue HYDROS (early access), so your probes, dosing, lighting and equipment live in one app.
        </p>
      </section>

      <section style={{ padding: '0 20px 44px', maxWidth: '880px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '14px', padding: '14px 20px', textAlign: 'center' }}>
          <span style={{ fontSize: '14px', color: 'var(--text-light)', fontWeight: 700 }}>
            Integrations are a NextUpReef Pro feature.
          </span>
          <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>New members get a 30-day free trial.</span>
          <Link href='/upgrade' style={{ fontSize: '13px', fontWeight: 900, color: 'var(--reef)', textDecoration: 'none', whiteSpace: 'nowrap' }}>See Pro plans {'->'}</Link>
        </div>
      </section>

      <section style={{ padding: '0 20px 60px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {integrations.map((d) => (
            <div key={d.id} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: '0' }} className='device-card-grid'>
                <div style={{ background: 'rgba(44,196,214,0.04)', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', minHeight: '250px', gap: '12px' }}>
                  {d.image ? (
                    <img src={d.image} alt={d.alt} loading='lazy' style={{ width: '100%', maxWidth: '260px', height: 'auto', display: 'block' }} />
                  ) : (
                    <div style={{ width: '215px', height: '310px', borderRadius: '30px', border: '1px dashed var(--border)', background: 'var(--bg-card)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(44,196,214,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Ico name={d.icon} color={d.accent} />
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '0.4px' }}>App preview</span>
                    </div>
                  )}
                </div>
                <div style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '0.7px', color: d.badgeColor, border: '1px solid ' + d.badgeColor, padding: '3px 9px', borderRadius: '999px' }}>{d.badge}</span>
                    <ProChip />
                  </div>
                  <h2 style={{ fontSize: '24px', fontWeight: 900, color: 'var(--text-light)', margin: '0 0 4px' }}>{d.heading}</h2>
                  <p style={{ fontSize: '14px', color: 'var(--reef)', fontWeight: 700, margin: '0 0 12px' }}>{d.tagline}</p>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', margin: '0 0 20px', lineHeight: 1.6 }}>{d.sell}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 24px', marginBottom: '22px' }} className='device-specs-grid'>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 900, color: '#22C55E', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '8px' }}>Pros</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {d.pros.map((x) => (
                          <div key={x} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                            <div style={{ flexShrink: 0, marginTop: '1px' }}><Ico name='check' size={16} /></div>
                            <span style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{x}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 900, color: 'var(--text-muted)', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '8px' }}>Consider</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {d.cons.map((x) => (
                          <div key={x} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                            <div style={{ flexShrink: 0, marginTop: '1px' }}><Ico name='minus' size={16} /></div>
                            <span style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{x}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {d.id === 'jebao' ? (
                    <div style={{ margin: '0 0 22px' }}>
                      <div style={{ fontSize: '13px', fontWeight: 900, color: 'var(--text-light)', marginBottom: '10px' }}>Which GMP should you buy?</div>
                      <div style={{ display: 'grid', gap: '8px' }}>
                        {gmpModels.map((m) => (
                          <a
                            key={m.model}
                            href={m.url}
                            target='_blank'
                            rel='noopener noreferrer sponsored'
                            style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', padding: '12px 14px', borderRadius: '12px', background: 'var(--card)', border: '1px solid var(--border)', textDecoration: 'none' }}
                          >
                            <span style={{ fontSize: '15px', fontWeight: 900, color: 'var(--text-light)', minWidth: '78px' }}>{m.model}</span>
                            <span style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--reef)', minWidth: '96px' }}>~{m.gph} GPH</span>
                            <span style={{ fontSize: '13px', color: 'var(--text-muted)', flex: 1 }}>Suits {m.tank}</span>
                            <span style={{ fontSize: '12.5px', fontWeight: 800, color: 'var(--reef)', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>View <Ico name='external' color='var(--reef)' /></span>
                          </a>
                        ))}
                      </div>
                      <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', margin: '10px 0 0', lineHeight: 1.6 }}>
                        Sizing assumes one powerhead and a mixed reef. These pumps are variable, so a
                        larger model turned down is usually a better buy than a smaller one at full
                        tilt - it is quieter and gentler on the motor. Two smaller pumps on opposite
                        walls beat one big pump for most tanks. Flow figures are approximate: Jebao
                        does not publish a spec sheet for this series.
                      </p>
                    </div>
                  ) : null}
                  <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <a href={d.ctaUrl} target='_blank' rel={d.ctaSponsored ? 'noopener noreferrer sponsored' : 'noopener noreferrer'} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '11px 22px', borderRadius: '10px', background: 'var(--reef)', color: 'white', fontWeight: 900, fontSize: '14px', textDecoration: 'none' }}>
                      {d.ctaLabel} <Ico name='external' color='white' />
                    </a>
                    {d.guide ? <Link href={d.guide} style={{ fontSize: '13px', fontWeight: 800, color: 'var(--reef)', textDecoration: 'none' }}>{d.guideLabel} {'->'}</Link> : null}
                    <a href={d.mfgUrl} target='_blank' rel='noopener noreferrer' style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: 'var(--text-muted)', textDecoration: 'none' }}>
                      {d.mfgName} <Ico name='external' color='var(--text-muted)' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '16px', lineHeight: 1.6, fontStyle: 'italic' }}>
          Some links are affiliate links - we may earn a small commission at no extra cost to you, which helps keep NextUpReef running.
        </p>
      </section>

      <section style={{ padding: '0 20px 60px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px', alignItems: 'center', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '32px 28px' }}>
          <div>
            <div className='section-label'>NO CONTROLLER NEEDED</div>
            <h2 style={{ fontSize: 'clamp(22px, 3.4vw, 30px)', fontWeight: 900, margin: '10px 0 12px', color: 'var(--text-light)', lineHeight: 1.15 }}>Dose by hand? The Dosing screen is for you too.</h2>
            <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>
              Every account gets the Dosing screen, with or without hardware. Pick your products from 50+ common supplements, see what&rsquo;s due today, and tap Dosed to log it. Doses on a Shelly plug or Apex show up in the same list.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { t: 'Daily checklist', d: 'Hand doses, your own dosing pump and automated doses in one list. One tap to log.', pro: false },
              { t: 'Alk, Ca and Mg balance', d: 'See whether each one is holding steady, rising or falling across your last tests.', pro: false },
              { t: 'One daily reminder', d: 'One push a day at the time you pick, only if something is still due.', pro: true },
              { t: 'Dose calculator', d: 'Set your daily dose from your own test trend, or fix a low reading safely over a few days.', pro: true },
            ].map((f) => (
              <div key={f.t} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, marginTop: '1px' }}><Ico name='check' size={16} /></div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '8px' }}>{f.t}{f.pro ? <ProChip /> : null}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.55 }}>{f.d}</div>
                </div>
              </div>
            ))}
            <Link href='/features#automation' style={{ fontSize: '13px', fontWeight: 800, color: 'var(--reef)', textDecoration: 'none', marginTop: '4px' }}>All dosing features {'->'}</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '10px 20px 60px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div className='section-label'>SIDE BY SIDE</div>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 34px)', fontWeight: 900, margin: '10px 0 0' }}>Compare the three.</h2>
        </div>
        <div style={{ overflowX: 'auto', border: '1px solid var(--border)', borderRadius: '16px' }}>
          <table style={{ width: '100%', minWidth: '620px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'rgba(44,196,214,0.05)' }}>
                <th style={{ textAlign: 'left', padding: '14px 16px', fontSize: '12px', fontWeight: 900, color: 'var(--text-muted)' }}></th>
                <th style={{ textAlign: 'left', padding: '14px 16px', fontSize: '14px', fontWeight: 900, color: '#0EA5E9' }}>Apex</th>
                <th style={{ textAlign: 'left', padding: '14px 16px', fontSize: '14px', fontWeight: 900, color: '#B45309' }}>Shelly</th>
                <th style={{ textAlign: 'left', padding: '14px 16px', fontSize: '14px', fontWeight: 900, color: '#7C3AED' }}>HYDROS</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((r, i) => (
                <tr key={r[0]} style={{ borderTop: '1px solid var(--border)' }}>
                  <td style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 700, color: 'var(--text-light)' }}>{r[0]}</td>
                  <td style={{ padding: '12px 16px' }}><Cell v={r[1]} /></td>
                  <td style={{ padding: '12px 16px' }}><Cell v={r[2]} /></td>
                  <td style={{ padding: '12px 16px' }}><Cell v={r[3]} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ padding: '0 20px 60px', maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
        <div className='section-label'>FROM THE BLOG</div>
        <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 30px)', fontWeight: 900, margin: '10px 0 20px' }}>Setup guides and reef tips.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '14px' }}>
          {blogPosts.map((b) => (
            <Link key={b.href} href={b.href} style={{ display: 'block', textAlign: 'left', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '14px', padding: '18px', textDecoration: 'none' }}>
              <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-light)', lineHeight: 1.4 }}>{b.title}</span>
              <span style={{ display: 'block', marginTop: '8px', fontSize: '13px', fontWeight: 800, color: 'var(--reef)' }}>Read more {'->'}</span>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ padding: '20px 20px 70px', maxWidth: '820px', margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(44,196,214,0.10), rgba(44,196,214,0.03))', border: '1px solid rgba(44,196,214,0.25)', borderRadius: '20px', padding: '40px 28px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 34px)', fontWeight: 900, margin: '0 0 12px', color: 'var(--text-light)' }}>Bring it all into one app.</h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 22px' }}>
            Whatever you run, NextUpReef puts your probes, dosing, control, logs, scores, and AI advisor in one place. Integrations are part of Pro - and new members get a 30-day free trial.
          </p>
          <Link href='/upgrade' style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', borderRadius: '12px', background: 'var(--reef)', color: 'white', fontWeight: 900, fontSize: '15px', textDecoration: 'none' }}>
            Start your free trial
          </Link>
        </div>
      </section>

      <section style={{ padding: '0 20px 60px', maxWidth: '860px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.6, textAlign: 'center' }}>
          Jebao and Jecod are trademarks of Jebao Co., Ltd. Neptune Systems and Apex are trademarks of Neptune Systems. CoralVue and HYDROS are trademarks of CoralVue, Inc. Shelly is a trademark of Allterco Robotics. NextUpReef is independent and is not affiliated with, endorsed by, or sponsored by these companies. Verify current pricing and specifications with the manufacturer.
        </p>
      </section>
    </>
  );
}
