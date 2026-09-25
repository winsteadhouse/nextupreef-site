import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const TITLE = "Turn a Tablet Into a Reef Tank Dashboard";
const DESCRIPTION =
  "Mount a spare tablet next to your aquarium and get a full-screen reef dashboard: live temperature and pH, every parameter with its trend, dosing progress and what is due next. Leave it on your WiFi and it also becomes the hub that lets you reach your Apex, ReefRun, ProfiLux or Shelly plugs from anywhere.";
const URL = "https://nextupreef.com/blog/reef-tank-tablet-dashboard";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: "A spare tablet, a stand, and five minutes. No extra hardware to buy.",
    url: URL,
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  image: "https://nextupreef.com/screenshots/site-v3/tablet-display.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-09-25",
  dateModified: "2026-09-25",
  mainEntityOfPage: URL,
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: TITLE,
  description: "Set up a spare tablet as a full-screen reef tank dashboard and as the hub that relays your equipment when you are away from home.",
  totalTime: "PT10M",
  step: [
    { "@type": "HowToStep", name: "Pick a tablet", text: "Any Android tablet or iPad that still gets updates and can sit on your home WiFi. A 7 to 11 inch screen is the sweet spot." },
    { "@type": "HowToStep", name: "Install NextUpReef and sign in", text: "Install the app on the tablet and sign in to the same account you use on your phone. Your tank and its history are already there." },
    { "@type": "HowToStep", name: "Open the tank display", text: "Open the menu and choose Tank Display. The app switches to landscape, fills the screen and keeps it awake." },
    { "@type": "HowToStep", name: "Make it your hub", text: "In Tank Hub, choose to use this device as the hub. It reads your equipment on the home network and relays it to your phone." },
    { "@type": "HowToStep", name: "Mount it and leave it charging", text: "Stand or mount the tablet near the tank on a permanent charger so it never sleeps or runs flat." },
  ],
};

const faqs: { q: string; a: string }[] = [
  {
    q: "What tablet do I need for a reef tank dashboard?",
    a: "Any Android tablet or iPad that still receives updates and stays on your home WiFi. A 7 to 11 inch screen reads well from a few feet away. The display scales to the screen it is on, so a small tablet shows the same information in a tighter layout rather than cutting anything off. An inexpensive Galaxy Tab is plenty — this is a screen and a network client, not a computer.",
  },
  {
    q: "Do I need to buy special hardware or a controller?",
    a: "No. That is the point of it. Other reef displays are a box you buy. This runs on a tablet you already own, or a cheap one you pick up for the job, and it is included with NextUpReef Pro rather than sold separately.",
  },
  {
    q: "Can I control my Apex or Shelly plugs when I am not at home?",
    a: "Yes, once a hub is set up. An Apex, ReefRun, ProfiLux or Shelly plug only answers on your home network, so normally the app can only reach them while you are on that WiFi. A tablet left on the network reads them for you and relays it, so your phone keeps working from anywhere.",
  },
  {
    q: "Will the app control my heater?",
    a: "No, and that is deliberate. You can see your heater's temperature and its on and off setpoints, and you get an alert when something is wrong, but NextUpReef will not switch a heater. A phone app with a dropped WiFi connection has no business holding a tank's temperature. Your controller does that.",
  },
  {
    q: "Does the tablet screen stay on?",
    a: "Yes. The tank display keeps the screen awake for as long as it is open, so the tablet will not drop to a lock screen while it is mounted. Leave it on a charger — a tablet holding its screen on all day will not last on battery.",
  },
  {
    q: "What happens if the tablet sleeps, loses WiFi or gets updated?",
    a: "You lose remote readings and away-from-home control until it comes back. Nothing else changes. Your equipment keeps running on its own schedules, your Apex keeps doing its job, and your dosers keep dosing. That is why the hub is described as monitoring and convenience rather than life support.",
  },
  {
    q: "Can I use my phone as the hub instead?",
    a: "You can, but you should not. A phone leaves the house with you, which is exactly when the hub needs to be at home on the WiFi. The app will warn you if you try to claim a phone as the hub. A spare tablet on a charger is the right tool.",
  },
  {
    q: "Is the tank display free?",
    a: "The tank display and the hub are part of NextUpReef Pro, $4.99 a month or $39.99 a year. Every new account gets a 30-day Pro trial with no credit card.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const h2: React.CSSProperties = { fontSize: "28px", fontWeight: 900, color: "var(--text-light)", marginTop: "56px", marginBottom: "16px", lineHeight: 1.25 };
const h3: React.CSSProperties = { fontSize: "20px", fontWeight: 900, color: "var(--text-light)", marginTop: "32px", marginBottom: "10px" };
const strong: React.CSSProperties = { color: "var(--text-light)" };
const link: React.CSSProperties = { color: "var(--reef)", fontWeight: 700 };
const callout: React.CSSProperties = { background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)", borderRadius: "14px", padding: "18px 22px", margin: "24px 0" };
const warn: React.CSSProperties = { background: "rgba(245,158,11,0.07)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: "14px", padding: "18px 22px", margin: "24px 0" };
const list: React.CSSProperties = { paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" };
const figcap: React.CSSProperties = { fontSize: "14px", color: "var(--text-muted)", textAlign: "center", marginTop: "12px" };

export default function ReefTankTabletDashboardPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 20px" }}>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: 700, marginBottom: "32px" }}>
          <Link href="/" style={{ color: "var(--reef)" }}>Home</Link>
          {" › "}
          <Link href="/blog" style={{ color: "var(--reef)" }}>Blog</Link>
          {" › "}
          Tablet dashboard
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Tablet", "Dashboard", "Tank Hub", "Remote Access", "Setup Guide", "Pro"].map((tag) => (
            <span key={tag} style={{ fontSize: "12px", fontWeight: 700, padding: "4px 12px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)" }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: 900, lineHeight: 1.2, marginBottom: "16px" }}>{TITLE}</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: 700, marginBottom: "48px" }}>
          Updated September 25, 2026 · 8 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: 1.8 }}>
          <p>
            Most of what you want to know about your reef, you want to know in passing. Is the
            temperature where it should be. Did the doser run. Is anything drifting. None of that is
            worth unlocking a phone and opening an app for, which is why it tends to go unchecked
            until something is already wrong.
          </p>
          <p>
            A tablet standing next to the tank solves it. Glance at it on the way past and you are
            done. The hardware for this is not exotic — it is a spare tablet and a stand.
          </p>
          <p>
            What most people miss is that the same tablet quietly does a second job. Because it sits
            on your home WiFi and never leaves the house, it can also reach the equipment that only
            answers on that network — your Apex, ReefRun, ProfiLux or Shelly plugs — and relay it to
            your phone. <strong style={strong}>One tablet, set up once: a screen you read at the
            tank, and a bridge your phone talks through when you are nowhere near it.</strong> This
            guide covers both.
          </p>

          <figure style={{ margin: "36px 0" }}>
            <Image
              src="/screenshots/site-v3/tablet-display.png"
              alt="A reef tank dashboard filling a tablet screen, showing live temperature and pH gauges, Reef and Stability scores, Apex outlet states, six water parameters with trend charts, dosing progress and upcoming maintenance"
              width={1548}
              height={970}
              style={{ width: "100%", height: "auto" }}
              priority
            />
            <figcaption style={figcap}>
              The whole tank on one screen — nothing to scroll, nothing to tap.
            </figcaption>
          </figure>

          <div style={callout}>
            <p style={{ margin: "0 0 8px" }}><strong style={strong}>What you need</strong></p>
            <ul style={{ ...list, margin: 0 }}>
              <li>A spare Android tablet or iPad that still gets updates</li>
              <li>A stand or wall mount, and a charger it can stay plugged into</li>
              <li>Your home WiFi</li>
              <li>NextUpReef Pro, or the free 30-day trial every new account gets</li>
            </ul>
          </div>

          <h2 style={h2}>Step 1: pick a tablet</h2>
          <p>
            Almost anything works. A 7 to 11 inch screen is the sweet spot — big enough to read from
            across the room, small enough to sit on a cabinet without dominating it. The display
            scales to whatever screen it finds, so a smaller tablet gets a tighter layout rather than
            a cropped one.
          </p>
          <p>
            Two things actually matter: it should still receive security updates, and it should hold a
            WiFi connection reliably. Everything else is preference. A budget Galaxy Tab does this job
            as well as an iPad Pro, because all you are asking of it is to draw a screen and talk to
            your network.
          </p>

          <h2 style={h2}>Step 2: install the app and open the display</h2>
          <p>
            Install NextUpReef on the tablet and sign in with the same account you use on your phone.
            Your tank, its history and your targets are already there — there is nothing to set up
            twice.
          </p>
          <p>
            Open the menu and choose <strong style={strong}>Tank Display</strong>. The app turns
            landscape, fills the screen, and keeps the screen awake for as long as it is open, so the
            tablet will not drift off to a lock screen while it is mounted.
          </p>

          <h3 style={h3}>What is actually on it</h3>
          <ul style={list}>
            <li><strong style={strong}>Live temperature and pH</strong> as large gauges, reading from your controller or probes. Anything outside your target turns amber so you catch it without reading a number.</li>
            <li><strong style={strong}>Every parameter you track</strong>, each with its trend, its average and its target range.</li>
            <li><strong style={strong}>Your Reef Score and Stability Score</strong>, so drift shows up as a shape rather than a single reading.</li>
            <li><strong style={strong}>Your equipment</strong> — which outlets are on, what your powerheads are set to, whether the controller is connected.</li>
            <li><strong style={strong}>Dosing today</strong> — how much of each supplement has gone in, out of how much it should be.</li>
            <li><strong style={strong}>Recently done and coming up</strong> — the water change you did on Tuesday, the filter socks due tomorrow.</li>
            <li><strong style={strong}>A Feed button</strong>, which is the one control worth having on a screen you press with wet hands.</li>
          </ul>

          <h2 style={h2}>Step 3: make it your hub — the part people miss</h2>
          <p>
            This is the half people skip, and it is the half that changes what the tablet is for.
            Nothing extra to buy and no second device — the tablet already showing your dashboard
            takes this on at the same time.
          </p>
          <p>
            An Apex, a Red Sea ReefRun, a GHL ProfiLux and a Shelly plug all have the same limitation:
            they answer on your home network and nowhere else. Standing in your living room, the app
            can see them. Sitting at work, it cannot. That is not a NextUpReef restriction, it is how
            the hardware works, and it is the single most common frustration people have with any of
            it.
          </p>
          <p>
            A tablet that never leaves the house does not have that problem. Tell NextUpReef to use
            that tablet as your <strong style={strong}>Tank Hub</strong> and it reads your equipment
            on the local network and relays what it finds, so your phone keeps working from anywhere.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", margin: "36px 0", alignItems: "start" }}>
            <figure style={{ margin: 0 }}>
              <Image
                src="/screenshots/site-v3/phone-hub-setup.png"
                alt="The Tank Hub screen before setup, explaining that a spare tablet on your home WiFi can read your Apex, Shelly, ReefRun or ProfiLux and relay it to your phone"
                width={777}
                height={1557}
                style={{ width: "100%", height: "auto" }}
              />
              <figcaption style={figcap}>Before: no hub set up.</figcaption>
            </figure>
            <figure style={{ margin: 0 }}>
              <Image
                src="/screenshots/site-v3/phone-tank-hub.png"
                alt="The Tank Hub screen with a Galaxy Tab reporting in as online, listing the water chemistry, Apex alarm and smart outlets it is watching"
                width={777}
                height={1557}
                style={{ width: "100%", height: "auto" }}
              />
              <figcaption style={figcap}>After: the tablet is reporting in.</figcaption>
            </figure>
          </div>

          <p>
            A hub is something you choose, never something the app decides for you. It tells you which
            device is currently the hub, when it last reported, and exactly what it can see. You can
            stop it from either device at any time.
          </p>

          <h3 style={h3}>What a hub can reach</h3>
          <ul style={list}>
            <li><strong style={strong}>Neptune Apex</strong> — probes, outlet states, and the alarm status</li>
            <li><strong style={strong}>Shelly smart outlets</strong> — on, off, and the power each one is drawing</li>
            <li><strong style={strong}>Red Sea ReefRun</strong> — return pump and skimmer speed</li>
            <li><strong style={strong}>GHL ProfiLux</strong> — probes and channels</li>
            <li><strong style={strong}>Temperature and pH probes</strong> on the network</li>
          </ul>

          <h2 style={h2}>Step 4: mount it properly</h2>
          <p>
            The part people get wrong. Two rules:
          </p>
          <ul style={list}>
            <li><strong style={strong}>Keep it on a charger.</strong> A tablet holding its screen on all day will be flat by evening. Run it permanently plugged in.</li>
            <li><strong style={strong}>Keep it out of the splash zone.</strong> Salt creep finds everything. A few feet back from the tank, or to one side of the sump, not directly over open water.</li>
          </ul>
          <p>
            A cheap adjustable stand on the cabinet is the easiest version. A wall mount beside the
            tank looks better and costs a little more effort.
          </p>

          <div style={warn}>
            <p style={{ margin: "0 0 8px" }}><strong style={strong}>What this is not</strong></p>
            <p style={{ margin: 0 }}>
              It is monitoring and convenience, not life support. A tablet can sleep, lose WiFi, or
              decide to install an update at three in the morning. Your controller must stay in charge
              of anything that matters — heaters above all. NextUpReef will show you your heater&apos;s
              temperature and setpoints and alert you when something is wrong, but it will never
              switch a heater on or off. If the tablet goes dark, every piece of equipment carries on
              exactly as before; you simply lose the remote view until it comes back.
            </p>
          </div>

          <h2 style={h2}>Why not just buy a reef display?</h2>
          <p>
            You can. There are dedicated tablets sold for this, and they are perfectly good. The
            trade is straightforward: you pay for hardware whose main advantage is that someone else
            chose it for you, and you are then tied to whatever software ships on it.
          </p>
          <p>
            The tablet approach costs whatever a spare tablet costs — often nothing, because there is
            one in a drawer — and the display and hub are included in Pro rather than sold as a
            separate product. If the tablet dies in two years, you replace the tablet.
          </p>

          <h2 style={h2}>Frequently asked questions</h2>
          {faqs.map((f) => (
            <div key={f.q} style={{ marginTop: "28px" }}>
              <h3 style={{ ...h3, marginTop: 0 }}>{f.q}</h3>
              <p style={{ margin: 0 }}>{f.a}</p>
            </div>
          ))}

          <div style={{ ...callout, marginTop: "48px" }}>
            <p style={{ margin: "0 0 10px" }}><strong style={strong}>Put your whole tank on one screen</strong></p>
            <p style={{ margin: "0 0 12px" }}>
              NextUpReef works with Neptune Apex, GHL ProfiLux, CoralVue HYDROS, Red Sea ReefRun,
              Jebao pumps and Shelly outlets — parameters, dosing, equipment and AI advice in one
              place, on your phone and on the wall.
            </p>
            <Link href="/devices" style={link}>See every supported device →</Link>
          </div>
        </div>
      </article>
    </>
  );
}
