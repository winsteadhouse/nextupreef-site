import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Works With Your Controller - NextUpReef',
  description: 'NextUpReef connects to CoralVue HYDROS, Neptune Apex, and Shelly smart outlets. Monitor your tank, control your gear, and automate dosing and lighting from one app. Integrations are a Pro feature.',
  alternates: { canonical: 'https://nextupreef.com/devices' },
  openGraph: {
    title: 'Works With Your Controller - NextUpReef',
    description: 'Connect HYDROS, Neptune Apex, or Shelly and manage your whole reef from one app.',
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
    id: 'hydros', icon: 'cloud', brand: 'CoralVue', heading: 'CoralVue HYDROS',
    badge: 'CLOUD CONTROLLER', badgeColor: '#7C3AED', accent: '#7C3AED',
    tagline: 'Full monitoring and control, from anywhere.',
    sell: 'HYDROS is cloud-connected, so NextUpReef reads your tank and controls your gear from anywhere - not just on your home WiFi. Live pH, temperature, salinity and ORP, continuous 24/7 trend logging, and alerts that reach you even when the app is closed. If you want the fullest picture with the least worry, this is it.',
    pros: ['Monitor and control from anywhere', 'Live probes: temp, pH, ORP, salinity, water level', 'Continuous 24/7 trends and alerts', 'Dosing and outlet control in the app'],
    cons: ['Requires HYDROS hardware', 'Probes are an added cost'],
    ctaLabel: 'Shop HYDROS', ctaUrl: 'https://www.coralvuehydros.com/',
    mfgName: 'coralvuehydros.com', mfgUrl: 'https://www.coralvuehydros.com/',
    guide: '/blog', guideLabel: 'Learn more', image: '',
  },
  {
    id: 'apex', icon: 'apex', brand: 'Neptune Systems', heading: 'Neptune Apex',
    badge: 'FULL CONTROLLER', badgeColor: '#0EA5E9', accent: '#0EA5E9',
    tagline: 'The all-in-one local controller you may already own.',
    sell: 'Already have an Apex? Connect it with no extra hardware. NextUpReef reads your probes straight into your logs and lets you control outlets, run Feed Mode, set heater temperatures, and dose - all from the app, right alongside your scores and AI advice. The best way to get more out of the Apex you already trust.',
    pros: ['Uses the Apex you already own', 'Probes plus outlet control and programs', 'Live control, Feed Mode, heater and dosing setup', 'Feeds your Reef Score and AI advisor'],
    cons: ['Local only - needs the same WiFi as your Apex', 'The Apex ecosystem is a bigger investment'],
    ctaLabel: 'Visit Neptune Systems', ctaUrl: 'https://www.neptunesystems.com/',
    mfgName: 'neptunesystems.com', mfgUrl: 'https://www.neptunesystems.com/',
    guide: '/blog', guideLabel: 'Learn more', image: '/devices/apex-app.png',
  },
  {
    id: 'shelly', icon: 'flash', brand: 'Shelly', heading: 'Shelly Smart Outlets',
    badge: 'SIMPLE CONTROL', badgeColor: '#F59E0B', accent: '#F59E0B',
    tagline: 'Simple, affordable control and schedules - no full controller needed.',
    sell: 'Shelly smart outlets are the easy, low-cost way to control and automate your gear. Switch pumps, dosers, heaters and lights on and off and on a schedule - and the schedule runs on the plug itself, so it keeps going even if your phone or internet drops. Perfect for dosing and lighting on a budget, on their own or alongside a bigger controller.',
    pros: ['Inexpensive and easy to add', 'Schedules run on the plug, even offline', 'Great for dosing and lighting', 'Use alone or with an Apex or HYDROS'],
    cons: ['Outlets only - no pH or temperature', 'Set up one plug at a time'],
    ctaLabel: 'Buy on Amazon', ctaUrl: shellyOutletUrl, ctaSponsored: true,
    mfgName: 'shelly.com', mfgUrl: 'https://www.shelly.com/en-us/products/shelly-plug-us-gen4',
    guide: '/blog/how-to-add-shelly-plug', guideLabel: 'Setup guide', image: '/devices/shelly-app.png',
  },
];

const compareRows = [
  ['What it is', 'Cloud controller', 'Local controller', 'Smart outlets'],
  ['Water monitoring (pH, temp, salinity)', 'yes', 'yes', 'no'],
  ['Works away from home', 'yes', 'wifi', 'wifi'],
  ['24/7 monitoring and alerts', 'yes', 'no', 'no'],
  ['Outlet control', 'yes', 'yes', 'yes'],
  ['Dosing automation', 'yes', 'yes', 'yes'],
  ['Trends and history', 'Continuous', 'When on network', 'no'],
  ['Hardware needed', 'HYDROS controller', 'Apex you own', 'Low-cost plugs'],
  ['Best for', 'Full control, anywhere', 'All-in-one you own', 'Budget automation'],
];

const blogPosts = [
  { title: 'How to add a Shelly smart plug', href: '/blog/how-to-add-shelly-plug' },
  { title: 'Set up automated dosing with Shelly', href: '/blog/how-to-setup-dosing-shelly' },
  { title: 'How to track your reef parameters', href: '/blog/how-to-track-saltwater-aquarium-parameters' },
];

function Cell({ v }: { v: string }) {
  if (v === 'yes') return <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#22C55E', fontWeight: 700, fontSize: '13px' }}><Ico name='check' size={15} color='#22C55E' /> Yes</span>;
  if (v === 'no') return <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>No</span>;
  if (v === 'wifi') return <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Home WiFi</span>;
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
          Connect the gear you already run, or pick the setup that fits your budget. NextUpReef works with CoralVue HYDROS, Neptune Apex, and Shelly smart outlets, so your probes, dosing, lighting, and equipment all live in one app.
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
              <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '0' }} className='device-card-grid'>
                <div style={{ background: 'rgba(44,196,214,0.04)', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '28px', minHeight: '250px', gap: '12px' }}>
                  {d.image ? (
                    <img src={d.image} alt={d.heading + ' in NextUpReef'} style={{ maxWidth: '100%', maxHeight: '270px', objectFit: 'contain', borderRadius: '18px' }} />
                  ) : (
                    <div style={{ width: '150px', height: '215px', borderRadius: '22px', border: '1px dashed var(--border)', background: 'var(--bg-card)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
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
                    <Link href={d.guide} style={{ fontSize: '13px', fontWeight: 800, color: 'var(--reef)', textDecoration: 'none' }}>{d.guideLabel} {'->'}</Link>
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
                <th style={{ textAlign: 'left', padding: '14px 16px', fontSize: '14px', fontWeight: 900, color: '#7C3AED' }}>HYDROS</th>
                <th style={{ textAlign: 'left', padding: '14px 16px', fontSize: '14px', fontWeight: 900, color: '#0EA5E9' }}>Apex</th>
                <th style={{ textAlign: 'left', padding: '14px 16px', fontSize: '14px', fontWeight: 900, color: '#B45309' }}>Shelly</th>
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
