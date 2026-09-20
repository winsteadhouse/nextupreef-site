import type { Metadata } from "next";
import Link from "next/link";

const TITLE = "How to Connect a Jebao or Jecod Pump to NextUpReef";
const DESCRIPTION =
  "Control your Jebao and Jecod WiFi pumps from NextUpReef: set flow and wave mode from anywhere, run Feed Mode across your whole tank, and get alerted the moment a pump jams or runs dry.";
const URL = "https://nextupreef.com/blog/connect-jebao-pump";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: "Set flow and wave modes from anywhere, and get told when a pump jams or runs dry.",
    url: URL,
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  image: "https://nextupreef.com/brand/og-image.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-09-20",
  dateModified: "2026-09-20",
  mainEntityOfPage: URL,
};

const faqs: { q: string; a: string }[] = [
  {
    q: "Which Jebao and Jecod pumps work with NextUpReef?",
    a: "Any Jebao or Jecod device that appears in the Jebao Aqua app. That covers the WiFi wavemakers, return pumps and dosers going back several years, including the GMP, MOW, SLW, SOW, MLW and DCP families. The GMP-40 is the model confirmed on real hardware.",
  },
  {
    q: "Do I need to be at home to control my pump?",
    a: "No. Unlike a Neptune Apex, which is reached over your home network, Jebao pumps are reached through your Jebao account. Flow, wave mode and feed mode all work from anywhere with a signal.",
  },
  {
    q: "Do I have to enter an IP address?",
    a: "No. You sign in with your Jebao account and pick your pumps from a list. Your router can hand the pump a new address whenever it likes and nothing breaks, because the pump is identified by its device ID rather than its address.",
  },
  {
    q: "Why can't I change the wave mode on one of my pumps?",
    a: "It is almost certainly set as a Sync or Async slave, which means it takes its wave mode from a master pump and ignores mode changes of its own. Set its linkage to Independent and the wave modes become available. NextUpReef tells you when this is the reason.",
  },
  {
    q: "Is this an official Jebao integration?",
    a: "No. Jebao has no developer program. NextUpReef connects the same way their own app does, through Gizwits, the IoT platform Jebao's pumps run on. It works well, but a firmware or platform change on their side could interrupt it, and we would have to catch up.",
  },
  {
    q: "Is the Jebao integration free?",
    a: "Integrations are part of NextUpReef Pro, $4.99 a month or $39.99 a year. Every new account gets a 30-day Pro trial, no credit card needed.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const h2: React.CSSProperties = { fontSize: "28px", fontWeight: 900, color: "var(--text-light)", marginTop: "56px", marginBottom: "16px", lineHeight: 1.25 };
const h3: React.CSSProperties = { fontSize: "20px", fontWeight: 900, color: "var(--text-light)", marginTop: "32px", marginBottom: "10px" };
const strong: React.CSSProperties = { color: "var(--text-light)" };
const link: React.CSSProperties = { color: "var(--reef)", fontWeight: 700 };
const callout: React.CSSProperties = { background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)", borderRadius: "14px", padding: "18px 22px", margin: "24px 0" };
const warn: React.CSSProperties = { background: "rgba(245,158,11,0.07)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: "14px", padding: "18px 22px", margin: "24px 0" };
const list: React.CSSProperties = { paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" };

const MODES: { name: string; flow: string; use: string }[] = [
  { name: "Pulse", flow: "Full on, full off, over and over", use: "Makes the water rock back and forth. Good for soft corals and LPS, and for lifting detritus off the sand." },
  { name: "Sine", flow: "Speeds up and slows down smoothly", use: "The same swing as Pulse without the hard stops. Gentler on fish, and quieter." },
  { name: "Constant", flow: "Steady, unchanging", use: "One fixed speed. Best for a return pump, a refugium, or anywhere you want predictable flow." },
  { name: "Random", flow: "Speed and timing vary unpredictably", use: "Closest to a real reef. Stops dead spots forming and keeps corals from adapting to one direction." },
  { name: "Tide", flow: "Long slow rise and fall", use: "Imitates tides over a long cycle. Natural, and easy on fish that dislike strong flow." },
  { name: "Nutrient Delivery", flow: "Short strong bursts", use: "Kicks waste into suspension so the skimmer and filter can catch it. Run it before a water change." },
  { name: "Circulation", flow: "Steady flow driving one big circular current", use: "Pushes water in a loop around the tank. Strong, even flow for SPS-heavy tanks." },
  { name: "Feed", flow: "Slows right down", use: "Keeps food in the tank instead of blowing it into the overflow. Returns to normal on its own." },
  { name: "Custom", flow: "Whatever you set in the Jebao app", use: "Your own saved pattern. Build it there; NextUpReef switches it on." },
];

export default function ConnectJebaoPumpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 20px" }}>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: 700, marginBottom: "32px" }}>
          <Link href="/" style={{ color: "var(--reef)" }}>Home</Link>
          {" › "}
          <Link href="/blog" style={{ color: "var(--reef)" }}>Blog</Link>
          {" › "}
          Connect a Jebao pump
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Jebao", "Jecod", "Wavemaker", "Setup Guide", "Pro"].map((tag) => (
            <span key={tag} style={{ fontSize: "12px", fontWeight: 700, padding: "4px 12px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)" }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: 900, lineHeight: 1.2, marginBottom: "16px" }}>{TITLE}</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: 700, marginBottom: "48px" }}>
          Updated September 20, 2026 · 8 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: 1.8 }}>
          <p>
            Jebao and Jecod pumps have a straightforward appeal: they move a lot of water for the money. A GMP-40 pushes around 6,000 gallons an hour for about $150.
          </p>
          <p>
            What they have never had is an app you want to live in. The Jebao Aqua app gets a pump set up and running, and most people close it and leave the pump alone for months. NextUpReef connects to the same pumps and puts them next to your parameters, your scores and the rest of your equipment, so flow stops being something you set once and forget.
          </p>
          <p>
            More usefully, it watches them. Your pump already reports when its impeller is jammed or when it is running dry. Nobody was listening to that. Now something is.
          </p>

          <div style={callout}>
            <p style={{ margin: "0 0 8px" }}><strong style={strong}>What you need</strong></p>
            <ul style={{ ...list, margin: 0 }}>
              <li>A Jebao or Jecod WiFi pump, already set up in the free Jebao Aqua app</li>
              <li>The email or phone number and password for that Jebao account</li>
              <li>NextUpReef Pro, or the free 30-day trial every new account gets</li>
            </ul>
          </div>

          <h2 style={h2}>Step 1: set the pump up in Jebao&apos;s app first</h2>
          <p>
            NextUpReef connects to a pump that already works. It cannot pair one, because pairing happens over Bluetooth directly between the pump and your phone.
          </p>
          <p>
            So install <strong style={strong}>Jebao Aqua</strong>, and there is one detail that catches people out: <strong style={strong}>register a proper account with an email or phone number</strong>. The app will happily let you run a pump over Bluetooth without ever making an account, and if you do that there is nothing for NextUpReef to sign in to.
          </p>

          <div style={warn}>
            <p style={{ margin: 0 }}>
              <strong style={strong}>The 2.4GHz trap.</strong> These pumps cannot see 5GHz networks. If your router broadcasts one name for both bands, your phone is probably on 5GHz and the handover will fail with something unhelpful like &ldquo;unknown SSID&rdquo;. Split the bands temporarily, or use a 2.4GHz guest network. This is the single most common reason setup fails, and it is not your fault.
            </p>
          </div>

          <h2 style={h2}>Step 2: sign in from NextUpReef</h2>
          <p>
            Open the menu, go to <strong style={strong}>Devices &amp; Automation</strong>, and choose <strong style={strong}>Jebao / Jecod Pumps</strong>. Enter the same email or phone number and password you used in the Jebao app, then pick which of your pumps belong to this tank. If you have several, tick them all at once.
          </p>
          <p>
            <strong style={strong}>You never enter an IP address.</strong> That is worth pausing on, because it is the opposite of how a Neptune Apex works. Your pump is identified by its device ID, so your router can reassign its address nightly and nothing breaks.
          </p>
          <p>
            If sign-in fails, the most likely cause is the region. Switch it to Europe and try again before you doubt your password.
          </p>

          <h2 style={h2}>Step 3: what you can actually do</h2>
          <p>
            Each pump gets a dial you can drag, or tap to type an exact percentage. Below it are the nine wave modes, a linkage setting for multi-pump tanks, and the pump&apos;s own health.
          </p>

          <h3 style={h3}>The nine wave modes, in plain English</h3>
          <p>
            Jebao&apos;s own names tell you almost nothing about what happens in the water. Here is what each one actually does. NextUpReef shows the same description next to the mode, with a live animation of the flow pattern.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", margin: "24px 0" }}>
            {MODES.map((m) => (
              <div key={m.name} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 18px" }}>
                <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)" }}>{m.name}</div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--reef)", margin: "3px 0 6px" }}>{m.flow}</div>
                <div style={{ fontSize: "14.5px", lineHeight: 1.6 }}>{m.use}</div>
              </div>
            ))}
          </div>

          <h3 style={h3}>Pump linkage, and why a mode change sometimes does nothing</h3>
          <p>
            Every Jebao pump has a linkage setting, shown on its own screen as a single letter. It decides whether the pump runs its own pattern or follows another one:
          </p>
          <ul style={list}>
            <li><strong style={strong}>Independent</strong> (no letter) — runs its own pattern. This is what you want for a single pump.</li>
            <li><strong style={strong}>Master (M)</strong> — sets the rhythm other pumps follow.</li>
            <li><strong style={strong}>Sync Slave (S)</strong> — copies the master exactly, so both pumps push at the same moment.</li>
            <li><strong style={strong}>Async Slave (A)</strong> — runs opposite the master, so the pumps take turns and water swings across the tank.</li>
          </ul>
          <p>
            Here is the part that wastes people&apos;s evenings: <strong style={strong}>a slave pump ignores wave mode changes.</strong> It takes its mode from the master. If you change the mode and nothing happens, check the linkage. NextUpReef spots this and says so, with a button to make the pump independent.
          </p>
          <p>
            Worth knowing: pumps often arrive set to Async Slave with no master anywhere on the network, which means they are waiting on a partner that does not exist.
          </p>

          <h2 style={h2}>The part that matters: knowing when a pump fails</h2>
          <p>
            Flow control is convenient. Fault detection is the reason to bother.
          </p>
          <p>
            These pumps report seven faults, and two of them are the ones that ruin tanks:
          </p>
          <ul style={list}>
            <li><strong style={strong}>Jammed impeller</strong> — a snail, a frag, or a chunk of rock has stopped the propeller.</li>
            <li><strong style={strong}>Running dry</strong> — the pump is spinning but moving no water.</li>
          </ul>
          <p>
            Both normally get noticed the way every reefer notices them: you walk past the tank hours later and something looks too still. By then the corals in that flow path have had a bad afternoon. NextUpReef shows the fault on the pump, on the pump list, and on your dashboard.
          </p>
          <p>
            The other five — overcurrent, overvoltage, undervoltage, over-temperature, and a lost link to the motor board — show on the pump&apos;s health card as early warnings that something is wearing out.
          </p>

          <h2 style={h2}>Feed Mode across everything at once</h2>
          <p>
            Your pump joins <Link href="/devices" style={link}>Feed Mode</Link> alongside the rest of your gear. Tick what should pause — a Jebao pump, your Apex feed cycle, specific smart outlets — and one tap on the home screen starts them all.
          </p>
          <p>
            Every device counts its own time and starts itself again. The pump knows its own feed duration, the Apex runs its own feed cycle, and a Shelly plug is handed a timer it counts down itself. Nothing depends on the app staying open, which matters: an app that gets killed mid-feed must never be the reason a return pump stays off.
          </p>

          <h2 style={h2}>Your pump lands in My Reef too</h2>
          <p>
            Connecting a pump adds it to <Link href="/features" style={link}>My Reef</Link> as equipment, and keeps its flow rate honest. Run a GMP-40 at 74% and it records roughly 4,500 GPH — and updates whenever you change the speed.
          </p>
          <p>
            That number feeds your tank&apos;s turnover. Normally it is something typed in once during setup and never revisited, which makes the turnover figure a guess that ages badly. For a connected pump it is measured.
          </p>

          <h2 style={h2}>The honest limitations</h2>
          <p>
            <strong style={strong}>This is not an official integration.</strong> Jebao has no developer program. Their pumps run on Gizwits, an IoT platform Jebao rents rather than builds, and NextUpReef talks to it the same way their own app does. It works well. It is also not something Jebao has promised to keep stable, so a firmware or platform change could interrupt it.
          </p>
          <p>
            <strong style={strong}>Your Jebao password is stored</strong> so the app can refresh its connection, the same as the Apex integration.
          </p>
          <p>
            <strong style={strong}>Pairing still belongs to the Jebao app.</strong> Adding a brand new pump to WiFi needs Bluetooth, which means their app. After that you should not need it again.
          </p>

          <h2 style={h2}>FAQ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "20px" }}>
            {faqs.map((f) => (
              <div key={f.q}>
                <p style={{ fontWeight: 900, color: "var(--text-light)", margin: "0 0 6px", fontSize: "17px" }}>{f.q}</p>
                <p style={{ margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>

          <div style={{ ...callout, marginTop: "48px" }}>
            <p style={{ margin: "0 0 8px" }}><strong style={strong}>Connect your pumps</strong></p>
            <p style={{ margin: 0 }}>
              NextUpReef is free on <Link href="/" style={link}>iPhone and Android</Link>. Integrations are part of Pro, and every new account gets 30 days free. See every supported device on the{" "}
              <Link href="/devices" style={link}>integrations page</Link>.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
