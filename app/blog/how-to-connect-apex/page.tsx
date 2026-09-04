import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Connect and Manage a Neptune Apex in NextUpReef',
  description: 'Connect the Neptune Apex you already own to NextUpReef. Sync probes into your logs, control every outlet, run Feed Mode, set heater temps, and dose - all from one app.',
  alternates: { canonical: 'https://nextupreef.com/blog/how-to-connect-apex' },
  openGraph: { title: 'How to Connect and Manage a Neptune Apex in NextUpReef', description: 'Connect your Apex, sync probes, control outlets, and dose from one app.', url: 'https://nextupreef.com/blog/how-to-connect-apex', images: [{ url: '/brand/splash2.png', width: 1200, height: 630 }] },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do I need Apex Fusion?', acceptedAnswer: { '@type': 'Answer', text: 'No. NextUpReef talks to your Apex directly on your home network. You do not need to open or set up Fusion.' } },
    { '@type': 'Question', name: 'Does it work when I am away from home?', acceptedAnswer: { '@type': 'Answer', text: 'Live data and control need your phone on the same WiFi as the Apex, because the connection is local. For alerts while you are away, use the alarm or email built into the Apex.' } },
    { '@type': 'Question', name: 'Is the Apex integration free?', acceptedAnswer: { '@type': 'Answer', text: 'Integrations are a NextUpReef Pro feature. New members get a 30-day free trial.' } },
    { '@type': 'Question', name: 'Will it change my Apex programs?', acceptedAnswer: { '@type': 'Answer', text: 'Only the things you edit in the app, like heater temperatures or a dosing schedule. Advanced programs you set on the Apex are left alone.' } },
  ],
};

const steps = [
  { n: '0', label: 'Open Neptune Apex', body: 'From the drawer, tap Device and Control, then Neptune Apex. If you have not connected one yet, you see the welcome screen. Tap Add Apex to begin.', img: '/blog/apex-setup/apex-intro.png', alt: 'Neptune Apex welcome screen in NextUpReef', tip: 'Integrations live under Device and Control, alongside HYDROS and Shelly.' },
  { n: '1', label: 'Find your Apex address and login', body: 'On your Apex or in Apex Fusion, note the local IP address of the unit (for example 192.168.50.27) and the username and password you use to sign in to it locally.', img: null, alt: '', tip: 'The IP is on the Apex network screen or in your router device list. Use the local login you set up in Fusion.' },
  { n: '2', label: 'Enter your connection details', body: 'Type in the IP address, username, and password, then tap connect. NextUpReef signs in to your Apex and pulls in your probes and outlets.', img: null, alt: '', tip: 'Your phone must be on the same WiFi as the Apex. The connection is local, so it does not go through the cloud.' },
  { n: '3', label: 'See your whole tank', body: 'The Apex screen shows live temperature and pH at the top, a Feed Mode button, and a card for every outlet with its status and power draw.', img: '/blog/apex-setup/apex-overview.png', alt: 'Neptune Apex overview screen with probes and outlet cards', tip: 'Tap any outlet card to open its detail screen for control and setup.' },
  { n: '4', label: 'Name and tag each outlet', body: 'Tap an outlet to rename it and tag what it controls - Heater, Light, Doser, Return Pump, Skimmer, Powerhead, ATO, or Other. The tag decides which controls appear.', img: null, alt: '', tip: 'Tag an outlet as Heater to edit temperatures, Light for on and off times, or Doser to open the dosing editor.' },
  { n: '5', label: 'Turn on auto-sync and check safety alerts', body: 'Open Settings from the Apex screen. Turn on Auto-sync on app open to save fresh temperature and pH each time you open the app. Review Safety Alerts to see the alarms your Apex already has, and whether they will reach you.', img: '/blog/apex-setup/apex-settings.png', alt: 'Apex Settings screen showing connection, sync, system and safety alerts', tip: 'If the Safety Alerts card says alerts are not delivered, turn on email or Fusion on your Apex so they actually notify you.' },
];

const features = [
  ['Full water monitoring', 'Temperature, pH, salinity and ORP from your Apex probes, logged to your tank with one tap.'],
  ['Control every outlet', 'Set any outlet on, off, or auto, with a confirm and read-back so you know it took.'],
  ['Feed Mode', 'Start the native Apex feed cycle from the app. Your pumps pause and resume on their own.'],
  ['Heater temperatures', 'View and edit the on and off temperatures for a heater outlet, written straight to the Apex.'],
  ['Outlet dosing', 'Calibrate a dose pump on an outlet, set a daily amount, and NextUpReef writes an even-spread schedule and turns on logging.'],
  ['Feeds your AI and scores', 'Every probe reading flows into the AI Reef Advisor and your Reef and Stability scores.'],
];

const tagExplainers = [
  ['Heater', 'Shows the on and off temperatures and lets you edit them. NextUpReef writes the setpoints straight to your Apex.'],
  ['Light', 'Opens a simple on and off time editor for a sump or refugium light. The schedule runs on the Apex.'],
  ['Doser', 'Opens the dosing editor. Calibrate the pump, set a daily amount and doses per day, and NextUpReef writes an even-spread schedule to the outlet and turns on logging so each dose is recorded.'],
  ['Return Pump, Skimmer, Powerhead', 'On, off, or auto control, with an option to pause during Feed Mode.'],
  ['ATO', 'Marks the outlet as an auto top-off so the right safety messaging appears.'],
  ['Other', 'Generic control for anything else. Complex or advanced programs are best set on the Apex itself.'],
];

const managingItems = [
  ['Rename or re-tag', 'Change the name or what an outlet controls at any time. The name is written to the Apex too.'],
  ['Edit connection details', 'Update the IP address, username, or password used to reach your Apex.'],
  ['Auto-sync', 'Turn automatic probe logging on or off. Saves temperature and pH at most every 15 minutes.'],
  ['Reset to unused', 'Clears the name, tag, and simple program on an outlet and returns it to off, so you can repurpose it.'],
  ['Disconnect Apex', 'Removes the Apex from this tank. Your logged readings are kept and you can reconnect any time.'],
];

const troubleshootItems = [
  { problem: 'No data, or the Apex shows as unreachable', fixes: ['Make sure your phone is on the same WiFi as the Apex. On cellular the app cannot reach it - the connection is local.', 'Check the IP address is still correct. If your router changed it, update it in Edit connection details.', 'Confirm the username and password are the ones you use to sign in to the Apex locally.'] },
  { problem: 'Live data does not update when I am away', fixes: ['The Apex integration is local only, so live data needs you on your home WiFi.', 'For round-the-clock alerts while away, use the alarm and email built into your Apex, or Apex Fusion.'] },
  { problem: 'An outlet is stuck on after setting up dosing', fixes: ['Open the outlet and set it to AUTO. Calibration can leave a manual override, and AUTO hands control back to the schedule.', 'Newer setups return the outlet to AUTO automatically after saving.'] },
  { problem: 'Temperature or pH looks wrong', fixes: ['Check the probe calibration and any offset on the Apex itself. NextUpReef shows what the Apex reports.', 'Give a new probe time to settle before trusting the first readings.'] },
];

export default function HowToConnectApexPage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article style={{ maxWidth: '760px', margin: '0 auto', padding: '80px 20px' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '700', marginBottom: '32px' }}>
          <Link href='/' style={{ color: 'var(--reef)' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <Link href='/blog' style={{ color: 'var(--reef)' }}>Blog</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          How to Connect a Neptune Apex
        </p>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
          {['Neptune Apex', 'Controller', 'Setup Guide', 'Pro Feature'].map((tag) => (
            <span key={tag} style={{ fontSize: '12px', fontWeight: '700', padding: '4px 14px', borderRadius: '999px', background: 'var(--reef-glow)', border: '1px solid rgba(44,196,214,0.2)', color: 'var(--reef)' }}>{tag}</span>
          ))}
        </div>
        <h1 style={{ fontSize: 'clamp(26px, 5vw, 40px)', fontWeight: '900', lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-0.02em' }}>
          How to Connect and Manage a Neptune Apex in NextUpReef
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '700', marginBottom: '32px' }}>September 4, 2026 &middot; 7 min read &middot; NextUpReef Team</p>
        <p style={{ fontSize: '18px', lineHeight: 1.75, color: 'var(--text-muted)', marginBottom: '32px', fontWeight: '500' }}>
          Connect the Neptune Apex you already own and NextUpReef becomes its control panel. Sync your probes into your logs, control every outlet, run Feed Mode, set heater temperatures, and dose - all from one app, with no extra hardware.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', background: 'rgba(245,158,11,0.08)', borderRadius: '10px', border: '1px solid rgba(245,158,11,0.25)', marginBottom: '40px' }}>
          <p style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#B45309' }}>
            Integrations are a NextUpReef Pro feature. New members get a 30-day free trial. <a href='/upgrade' style={{ color: '#B45309', textDecoration: 'underline' }}>See Pro plans &rarr;</a>
          </p>
        </div>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '20px 24px', marginBottom: '48px' }}>
          <p style={{ fontSize: '12px', fontWeight: '900', color: 'var(--reef)', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>What you need</p>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['A Neptune Apex on your home network', 'NextUpReef with a Pro subscription or active trial', 'The local IP address of your Apex, plus its username and password'].map((text) => (
              <li key={text} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: 'var(--text-muted)', fontWeight: '600' }}>
                <span style={{ color: 'var(--reef)', flexShrink: 0 }}>&#x2713;</span>{text}
              </li>
            ))}
          </ul>
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '32px' }}>Step-by-step setup</h2>
        {steps.map((step) => (
          <div key={step.n} style={{ marginBottom: '52px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '999px', background: 'var(--reef-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '14px', fontWeight: '900', color: 'white' }}>{step.n}</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '900', margin: 0 }}>{step.label}</h3>
            </div>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.75, margin: '0 0 20px', paddingLeft: '44px' }}>{step.body}</p>
            {step.img ? (
              <div style={{ paddingLeft: '44px', marginBottom: step.tip ? '16px' : '0' }}>
                <div style={{ borderRadius: '18px', overflow: 'hidden', maxWidth: '300px' }}>
                  <img src={step.img} alt={step.alt} style={{ width: '100%', display: 'block' }} />
                </div>
              </div>
            ) : null}
            {step.tip ? (
              <div style={{ display: 'flex', gap: '10px', padding: '12px 16px', background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)', borderRadius: '10px', marginLeft: '44px' }}>
                <span style={{ fontSize: '14px', flexShrink: 0 }}>&#x1F4A1;</span>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '700', margin: 0, lineHeight: 1.6 }}>{step.tip}</p>
              </div>
            ) : null}
          </div>
        ))}

        <h2 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '16px' }}>What you can do</h2>
        <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '24px' }}>Once connected, your Apex becomes part of NextUpReef.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '56px' }}>
          {features.map(([label, desc]) => (
            <div key={label} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '14px 16px', display: 'flex', gap: '12px' }}>
              <span style={{ fontSize: '13px', fontWeight: '900', color: 'var(--reef)', flexShrink: 0, minWidth: '150px' }}>{label}</span>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '16px' }}>What each outlet tag unlocks</h2>
        <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '24px' }}>Tagging an outlet tells the app what it controls, so it shows the right setup.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '56px' }}>
          {tagExplainers.map(([label, desc]) => (
            <div key={label} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '14px 16px', display: 'flex', gap: '12px' }}>
              <span style={{ fontSize: '13px', fontWeight: '900', color: 'var(--reef)', flexShrink: 0, minWidth: '150px' }}>{label}</span>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)', borderRadius: '14px', padding: '18px 22px', marginBottom: '56px', display: 'flex', gap: '12px' }}>
          <span style={{ fontSize: '20px', flexShrink: 0 }}>&#x2139;</span>
          <div>
            <p style={{ fontSize: '14px', fontWeight: '900', color: 'var(--reef)', margin: '0 0 4px' }}>The Apex connection is local</p>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>NextUpReef reaches your Apex over your home WiFi, so live data and control need your phone on the same network. For alerts while you are away, use the alarm and email built into the Apex itself.</p>
          </div>
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '16px' }}>Managing your Apex after setup</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '56px' }}>
          {managingItems.map(([label, desc]) => (
            <div key={label} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '14px 18px', display: 'flex', gap: '14px' }}>
              <div style={{ width: '7px', height: '7px', borderRadius: '999px', background: 'var(--reef)', flexShrink: 0, marginTop: '6px' }} />
              <div>
                <p style={{ fontSize: '14px', fontWeight: '900', color: 'var(--text-light)', margin: '0 0 4px' }}>{label}</p>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '24px' }}>Troubleshooting</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '56px' }}>
          {troubleshootItems.map((item) => (
            <div key={item.problem} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden' }}>
              <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--border)' }}>
                <p style={{ fontSize: '14px', fontWeight: '900', color: 'var(--text-light)', margin: 0 }}>{item.problem}</p>
              </div>
              <ul style={{ margin: 0, padding: '14px 18px 14px 34px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {item.fixes.map((fix, i) => (
                  <li key={i} style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.65 }}>{fix}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(44,196,214,0.10), rgba(44,196,214,0.03))', border: '1px solid rgba(44,196,214,0.25)', borderRadius: '18px', padding: '32px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '900', margin: '0 0 10px', color: 'var(--text-light)' }}>Bring your Apex into one app</h2>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.7, margin: '0 0 20px' }}>Probes, control, dosing, logs, scores, and AI advice - together. Integrations are part of Pro, with a 30-day free trial.</p>
          <Link href='/upgrade' style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 26px', borderRadius: '10px', background: 'var(--reef)', color: 'white', fontWeight: '900', fontSize: '15px', textDecoration: 'none' }}>Start your free trial</Link>
          <p style={{ fontSize: '13px', margin: '16px 0 0' }}><Link href='/devices' style={{ color: 'var(--reef)', fontWeight: '700', textDecoration: 'none' }}>See all integrations &rarr;</Link></p>
        </div>
      </article>
    </>
  );
}
