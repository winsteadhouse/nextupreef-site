import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Works With Your Controller - NextUpReef',
  description: 'NextUpReef connects to Neptune Apex, Shelly smart outlets and CoralVue HYDROS (early access). Sync probes, control your gear, and automate dosing and lighting from one app. Integrations are a Pro feature.',
  alternates: { canonical: 'https://nextupreef.com/devices' },
  openGraph: {
    title: 'Works With Your Controller - NextUpReef',
    description: 'Connect a Neptune Apex, Shelly smart outlets or CoralVue HYDROS and run your reef from one app.',
    url: 'https://nextupreef.com/devices',
    images: [{ url: '/brand/splash2.png', width: 1200, height: 630 }],
  },
};

const shellyOutletUrl = 'https://amzn.to/4dLhHOO';

function Ico({ name, color, size }: { name: string; color?: string; size?: number }) {
  const s = size || 24;
  const c = { width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: color || 'var(--reef)', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (name) {
    case 'cloud': return <svg {...c}><path d='M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z'/></svg>;
    case 'apex': return <svg {...c}><circle cx='12' cy='12' r='9'/><path d='M12 8v4l3 3'/></svg>;
    case 'flash': return <svg {...c}><polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'/></svg>;
    case 'check': return <svg {...c} stroke='#22C55E'><polyline points='20 6 9 17 4 12'/></svg>;
    case 'minus': return <svg {...c} stroke='var(--text-muted)'><line x1='5' y1='12' x2='19' y2='12'/></svg>;
    case 'star': return <svg {...c}><polygon points='12 2 15 9 22 9.3 17 14 18.5 21 12 17 5.5 21 7 14 2 9.3 9 9 12 2'/></svg>;
    case 'external': return <svg {...c} width={14} height={14}><path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'/><polyline points='15 3 21 3 21 9'/><line x1='10' y1='14' x2='21' y2='3'/></svg>;
    default: return <svg {...c}><circle cx='12' cy='12' r='9'/></svg>;
  }
}

const integrations = [
  {
    id: 'apex', icon: 'apex', brand: 'Neptune Systems', heading: 'Neptune Apex',
    badge: 'FULL CONTROLLER', badgeColor: '#0EA5E9', accent: '#0EA5E9',
    tagline: 'Get more out of the Apex you already own.',
    sell: 'Connect your Apex with no extra hardware. NextUpReef pulls temperature, pH, salinity, ORP and Trident readings into your logs, and lets you switch outlets, run Feed Mode, set heater temperatures and schedule dosing, all next to your scores and AI advice. Dosing schedules are saved to the Apex, so they keep running when your phone is off.',
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
    sell: 'HYDROS talks to the cloud, so NextUpReef works with it from anywhere, not just on home WiFi. Connect with your HYDROS device key: pH, temperature, salinity, ORP and alkalinity tests flow into your logs around the clock. Switch outputs on, off or back to Auto, set pump levels, run Feeding or Water Change mode, and start tests. Your HYDROS confirms each change.',
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
          Neptune Systems and Apex are trademarks of Neptune Systems. CoralVue and HYDROS are trademarks of CoralVue, Inc. Shelly is a trademark of Allterco Robotics. NextUpReef is independent and is not affiliated with, endorsed by, or sponsored by these companies. Verify current pricing and specifications with the manufacturer.
        </p>
      </section>
    </>
  );
}
