import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const TITLE = "How to Connect and Manage a Neptune Apex in NextUpReef";
const DESCRIPTION =
  "Connect the Neptune Apex you already own to NextUpReef. Sync probes into your logs, control every outlet, run Feed Mode, set heater temperatures, and schedule dosing with a built-in safety shutoff.";
const URL = "https://nextupreef.com/blog/how-to-connect-apex";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: "Connect your Apex, sync probes, control outlets, set heater temps and schedule dosing from one app.",
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
  datePublished: "2026-09-04",
  dateModified: "2026-09-14",
  mainEntityOfPage: URL,
};

const faqs: { q: string; a: string }[] = [
  {
    q: "Do I need Apex Fusion to connect my Apex to NextUpReef?",
    a: "No. NextUpReef talks to your Apex directly on your home network using its local IP address, username and password. You don't need to open or set up Fusion.",
  },
  {
    q: "Does the Apex integration work when I'm away from home?",
    a: "Live readings and control need your phone on the same WiFi as the Apex, because the connection is local. Schedules you save, including dosing, are written to the Apex and keep running on their own while you're away. For alerts away from home, use the alarms and email built into your Apex.",
  },
  {
    q: "Can NextUpReef control my Apex DOS or DDR dosing pump?",
    a: "Not yet. NextUpReef doses through a regular Apex outlet with a dosing pump plugged into it. Neptune's DOS and DDR pumps are not supported.",
  },
  {
    q: "Are Apex doses confirmed like Shelly doses?",
    a: "No. The Apex runs the dosing schedule itself, so today's doses in the app are estimated from the schedule, not confirmed one by one. Shelly plugs confirm each dose by power draw and can alert you to a missed dose.",
  },
  {
    q: "Will NextUpReef change my Apex programs?",
    a: "Only what you edit in the app, such as heater temperatures or a dosing schedule. When you save dosing to an outlet, NextUpReef rebuilds that outlet's program and keeps your safety lines that turn it off, like a leak or high-pH shutoff. Other outlets are left alone.",
  },
  {
    q: "Is the Apex integration free?",
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

function Shot({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure style={{ margin: "28px 0 32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
      <Image src={src} alt={alt} width={600} height={1202} style={{ width: "100%", maxWidth: "290px", height: "auto" }} />
      <figcaption style={{ fontSize: "13px", color: "var(--text-muted)", textAlign: "center", maxWidth: "440px", lineHeight: 1.55 }}>{caption}</figcaption>
    </figure>
  );
}

function ShotPair({ a, b, caption }: { a: { src: string; alt: string }; b: { src: string; alt: string }; caption: string }) {
  return (
    <figure style={{ margin: "28px 0 32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", width: "100%", maxWidth: "560px", justifyItems: "center" }}>
        <Image src={a.src} alt={a.alt} width={600} height={1202} style={{ width: "100%", maxWidth: "260px", height: "auto" }} />
        <Image src={b.src} alt={b.alt} width={600} height={1202} style={{ width: "100%", maxWidth: "260px", height: "auto" }} />
      </div>
      <figcaption style={{ fontSize: "13px", color: "var(--text-muted)", textAlign: "center", maxWidth: "480px", lineHeight: 1.55 }}>{caption}</figcaption>
    </figure>
  );
}

export default function HowToConnectApexPage() {
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
          Connect a Neptune Apex
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Neptune Apex", "Controller", "Setup Guide", "Pro"].map((tag) => (
            <span key={tag} style={{ fontSize: "12px", fontWeight: 700, padding: "4px 12px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)" }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: 900, lineHeight: 1.2, marginBottom: "16px" }}>{TITLE}</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: 700, marginBottom: "48px" }}>
          Updated September 14, 2026 · 9 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: 1.8 }}>
          <p>
            If you already own a Neptune Apex, NextUpReef can become its control panel — no extra hardware. Your probe readings flow into your logs next to your test kit results, and you can switch outlets, run Feed Mode, set heater temperatures and schedule dosing from the same app that tracks your scores and gives your AI advice.
          </p>
          <p>
            This guide walks through connecting your Apex, what each screen does, how dosing works (including the safety shutoff built into every schedule), and the honest limits of a local controller connection.
          </p>

          <div style={callout}>
            <p style={{ margin: "0 0 8px" }}><strong style={strong}>What you need</strong></p>
            <ul style={{ ...list, margin: 0 }}>
              <li>A Neptune Apex on your home network</li>
              <li>NextUpReef Pro, or the free 30-day trial every new account gets</li>
              <li>Your Apex&apos;s local IP address, plus the username and password you use to sign in to it locally</li>
              <li>Your phone on the same WiFi as the Apex while you set up</li>
            </ul>
          </div>

          <Shot
            src="/blog/apex-setup/apex-main-v3.png"
            alt="Neptune Apex screen in NextUpReef showing Office Tank online, live temperature 78.2 and pH 7.95 gauges, Pull Now and Feed Mode buttons, and equipment cards for a doser, ATO, return pump and heater"
            caption="Your Apex in NextUpReef: live temperature and pH, Pull Now, Feed Mode, and a card for every outlet."
          />

          <h2 style={h2}>Connect your Apex</h2>

          <h3 style={h3}>1. Open Neptune Apex</h3>
          <p>
            Open the menu, go to <strong style={strong}>Device &amp; Control</strong>, then <strong style={strong}>Neptune Apex</strong>. If no Apex is connected yet, tap <strong style={strong}>Add Apex</strong>.
          </p>

          <h3 style={h3}>2. Find your Apex address and login</h3>
          <p>
            You need the Apex&apos;s <strong style={strong}>local IP address</strong> (it looks like 192.168.50.27) and the username and password for signing in to it on your network. You&apos;ll find the address on the Apex display or in your router&apos;s list of connected devices.
          </p>
          <div style={callout}>
            <p style={{ margin: 0 }}>
              <strong style={strong}>Tip:</strong> give your Apex a reserved (static) IP address in your router. If the router hands it a new address later, the app can&apos;t find it until you update the address in Apex Settings.
            </p>
          </div>

          <h3 style={h3}>3. Enter your connection details</h3>
          <p>
            Type in the address, username and password and connect. NextUpReef signs in to your Apex and reads its probes and outlets. Standard probe names — temperature, pH, salinity and Trident alkalinity, calcium and magnesium — are matched to your log automatically.
          </p>

          <h3 style={h3}>4. See your whole tank</h3>
          <p>
            The Apex screen opens with live <strong style={strong}>temperature and pH gauges</strong>, a <strong style={strong}>Pull Now</strong> button that saves a fresh reading to your log, <strong style={strong}>Feed Mode</strong>, and a card for every outlet showing whether it&apos;s on, its power draw, and a short summary such as a heater&apos;s setpoints or &quot;Dosing schedule&quot;.
          </p>

          <h3 style={h3}>5. Name and tag each outlet</h3>
          <p>
            Tap an outlet to rename it and tag what it controls: <strong style={strong}>Doser, Heater, Skimmer, Light, Return Pump, Powerhead, ATO or Other</strong>. The tag decides which controls appear — heater temperatures for a heater, dosing setup for a doser.
          </p>

          <h2 style={h2}>What gets saved to your log</h2>
          <p>
            <strong style={strong}>Pull Now</strong> saves your current readings as a log entry marked as coming from your Apex. Turn on <strong style={strong}>Auto-sync on app open</strong> in Apex Settings and NextUpReef saves a fresh reading each time you open the app, at most every 15 minutes.
          </p>
          <p>
            Readings that sync: <strong style={strong}>temperature, pH, salinity, and Trident alkalinity, calcium and magnesium</strong>. ORP isn&apos;t a parameter NextUpReef logs, so it isn&apos;t saved. Once they&apos;re in your log, Apex readings feed your trend charts, your{" "}
            <Link href="/blog/reef-score-stability-score-explained" style={link}>Reef Score and Stability Score</Link>, and the Reef AI Advisor like any other test.
          </p>

          <h2 style={h2}>Control an outlet</h2>
          <ShotPair
            a={{ src: "/blog/apex-setup/apex-outlet-v3.png", alt: "Powerhead outlet screen with AUTO selected, ON and OFF overrides, outlet tag options, Pause during Feed Mode toggle and the current Apex program" }}
            b={{ src: "/blog/apex-setup/apex-heater-v3.png", alt: "Heater outlet screen showing AUTO, heater temperatures ON below 78.0 and OFF above 78.5, and an Edit temperatures button" }}
            caption="Left: any outlet can run on AUTO or be forced ON or OFF. Right: a heater outlet adds its on and off temperatures."
          />
          <ul style={list}>
            <li><strong style={strong}>AUTO</strong> hands control back to your Apex program.</li>
            <li><strong style={strong}>ON</strong> and <strong style={strong}>OFF</strong> override the program until you switch back to AUTO.</li>
            <li><strong style={strong}>Pause during Feed Mode</strong> decides whether the outlet turns off while you feed.</li>
            <li><strong style={strong}>Current program</strong> shows what the Apex is actually running for that outlet.</li>
            <li><strong style={strong}>Reset to unused</strong> clears the name, tag and simple program so you can repurpose it.</li>
          </ul>

          <h3 style={h3}>Heater temperatures</h3>
          <p>
            A heater outlet shows its <strong style={strong}>ON below</strong> and <strong style={strong}>OFF above</strong> temperatures. Tap <strong style={strong}>Edit temperatures</strong> to change them and NextUpReef writes the new setpoints straight to your Apex. The on temperature must sit below the off temperature, and both must fall within 60–95 °F, so a typo can&apos;t cook or chill the tank. For what those numbers should be, see our{" "}
            <Link href="/blog/reef-tank-temperature-guide" style={link}>reef tank temperature guide</Link>.
          </p>

          <h3 style={h3}>Feed Mode</h3>
          <p>
            Tap <strong style={strong}>Feed Mode</strong> on the Apex screen to start your Apex&apos;s own feed cycle. Pumps set to pause do so, and the Apex brings them back on by itself when the cycle ends.
          </p>

          <h2 style={h2}>Schedule dosing on an Apex outlet</h2>
          <p>
            NextUpReef doses through a <strong style={strong}>regular Apex outlet</strong> with a dosing pump plugged into it. Tag the outlet as a <strong style={strong}>Doser</strong>, then open <strong style={strong}>Set up dosing</strong>.
          </p>

          <h3 style={h3}>Calibrate the pump</h3>
          <p>
            Put the pump&apos;s output line into a measuring cup and tap Start. The pump runs for exactly 30 seconds; enter how much it pumped and NextUpReef works out its flow rate. Calibration is one-time, and you can recalibrate later if the tubing wears.
          </p>
          <div style={callout}>
            <p style={{ margin: 0 }}>
              <strong style={strong}>Stay with it for the 30 seconds.</strong> The Apex has no automatic shutoff for a manual run, so the app stops the pump. If you leave the calibration screen, the stop still happens. If the app is closed or loses WiFi mid-run, the pump keeps going until you reopen NextUpReef on your home network, which switches it back straight away. Finish calibrating before you put the phone down.
            </p>
          </div>

          <ShotPair
            a={{ src: "/blog/apex-setup/apex-calibrate-v3.png", alt: "Calibrate this pump screen running a 30-second burst with 9 seconds shown and Pump is running" }}
            b={{ src: "/blog/apex-setup/apex-dose-schedule-v3.png", alt: "Alk Doser schedule screen with Calcium selected as the bottle, 100 mL daily amount, Spread 24/7 pattern and 6 doses per day" }}
            caption="Left: the 30-second calibration burst. Right: choose what's in the bottle, the daily amount and how many doses to split it into."
          />

          <h3 style={h3}>Set the schedule</h3>
          <p>
            Choose what&apos;s in the bottle, the <strong style={strong}>daily amount</strong>, and how many <strong style={strong}>doses per day</strong> to split it into. Several smaller doses keep alkalinity and calcium steadier than one big one. A few Apex-specific rules apply, because of how Apex timers work:
          </p>
          <ul style={list}>
            <li><strong style={strong}>At least 2 doses a day.</strong> An Apex timer can&apos;t cycle once a day, so a single daily dose isn&apos;t offered.</li>
            <li><strong style={strong}>Every day.</strong> Apex dosing schedules run daily; skipping days of the week isn&apos;t available.</li>
            <li><strong style={strong}>Whole seconds, 5 seconds to 30 minutes per dose.</strong> Very short doses round badly, and very long ones usually mean the pump needs recalibrating.</li>
          </ul>

          <h3 style={h3}>Review and save to your Apex</h3>
          <p>
            Before anything is written, a confirmation lists the daily total, the amount and seconds per dose, and every dose time. Tap <strong style={strong}>Save to Apex</strong> and the schedule is written to the outlet. From then on <strong style={strong}>your Apex runs it on its own</strong> — with your phone off, the app closed, or no internet.
          </p>

          <ShotPair
            a={{ src: "/blog/apex-setup/apex-dose-confirm-v3.png", alt: "Confirm new schedule dialog showing 100 mL per day in 6 doses of 16.67 mL each, the six dose times, a note that this replaces existing dosing schedules on the outlet, and Save to Apex" }}
            b={{ src: "/blog/apex-setup/apex-dose-today-v3.png", alt: "Calcium Doser Now tab showing 2 of 6 doses today, next dose at 8:00 AM, Dose Now and Pause buttons, and today's dose times" }}
            caption="Left: review every dose time before saving. Right: the Now tab shows today's progress, the next dose, Dose Now and Pause."
          />

          <div style={warn}>
            <p style={{ margin: "0 0 8px" }}><strong style={strong}>The built-in safety shutoff</strong></p>
            <p style={{ margin: "0 0 10px" }}>
              Every dosing schedule NextUpReef writes includes a shutoff line: if the outlet is ever on longer than a dose should take, the Apex turns it off by itself and holds it off. That protects your tank if a command is lost or a program misbehaves — a stuck-on dosing pump can empty a bottle of alkalinity into a tank.
            </p>
            <p style={{ margin: 0 }}>
              When you save, the outlet&apos;s program is rebuilt. Safety lines that turn it <strong style={strong}>off</strong>, like a leak or high-pH shutoff, are kept. Anything that could turn it back on and override the dosing timer, like an old light schedule, is removed.
            </p>
          </div>

          <h3 style={h3}>Day to day</h3>
          <p>
            The <strong style={strong}>Now</strong> tab shows today&apos;s doses, the next dose and its time. <strong style={strong}>Dose Now</strong> runs a single dose immediately and logs it. <strong style={strong}>Pause</strong> stops the schedule until you resume. Your Apex doses also appear in NextUpReef&apos;s free <strong style={strong}>Dosing screen</strong>, alongside anything you dose by hand, so every dose you rely on is in one list.
          </p>
          <p>
            Today&apos;s doses are <strong style={strong}>estimated from the schedule</strong>. The Apex runs dosing itself and doesn&apos;t report each dose back, so NextUpReef can&apos;t confirm them one by one. If per-dose confirmation and missed-dose alerts matter to you, a Shelly smart plug does both — see{" "}
            <Link href="/blog/how-to-setup-dosing-shelly" style={link}>automated dosing with a Shelly outlet</Link>.
          </p>
          <p>
            Working out how much to dose? Our{" "}
            <Link href="/blog/reef-tank-dosing-calculator" style={link}>reef dosing calculator guide</Link> covers the math, and{" "}
            <Link href="/blog/two-part-vs-all-in-one-vs-kalkwasser" style={link}>2-part vs all-in-one vs kalkwasser</Link> helps you pick a method.
          </p>

          <h2 style={h2}>Apex Settings</h2>
          <Shot
            src="/blog/apex-setup/apex-settings-v3.png"
            alt="Apex Settings screen with connection address and username, Edit connection details, Auto-sync on app open turned on, firmware and update status, WiFi signal, last power outage, module errors and safety alerts"
            caption="Apex Settings: connection details, auto-sync, system status and the safety alerts already set on your Apex."
          />
          <ul style={list}>
            <li><strong style={strong}>Connection</strong> — update the IP address, username or password.</li>
            <li><strong style={strong}>Auto-sync on app open</strong> — save a fresh reading each time you open the app, at most every 15 minutes.</li>
            <li><strong style={strong}>System</strong> — firmware and available updates, WiFi signal, last power outage and module errors, as your Apex reports them.</li>
            <li><strong style={strong}>Safety alerts</strong> — the alarms already configured on your Apex, such as temperature and leak alarms.</li>
          </ul>

          <h2 style={h2}>Changing or removing things safely</h2>
          <ul style={list}>
            <li><strong style={strong}>Retagging a doser.</strong> If you change a Doser outlet to something else, NextUpReef asks first, then clears its dosing schedule so the pump doesn&apos;t keep running on a program you forgot.</li>
            <li><strong style={strong}>Remove dosing.</strong> Clears the dosing schedule from the outlet and stops tracking it.</li>
            <li><strong style={strong}>Reset to unused.</strong> Clears the outlet&apos;s name, tag and simple program and returns it to off.</li>
            <li><strong style={strong}>Disconnect.</strong> Clears the dosing schedules NextUpReef wrote to your Apex, then removes the Apex from the tank. Your logged readings stay.</li>
          </ul>

          <h2 style={h2}>Honest limits of the Apex connection</h2>
          <ul style={list}>
            <li><strong style={strong}>It&apos;s local.</strong> Live readings and control need your phone on the same WiFi as the Apex. Schedules keep running while you&apos;re away, but you can&apos;t check or change them remotely through NextUpReef.</li>
            <li><strong style={strong}>No DOS or DDR support.</strong> Dosing works through a regular outlet and pump.</li>
            <li><strong style={strong}>No per-dose confirmation.</strong> Today&apos;s doses are estimated from the schedule.</li>
            <li><strong style={strong}>Advanced programs belong on the Apex.</strong> NextUpReef edits heater setpoints and dosing schedules; complex logic is best written in the Apex itself.</li>
          </ul>
          <p>
            Weighing up controllers? Our{" "}
            <Link href="/blog/coralvue-hydros-vs-neptune-apex" style={link}>CoralVue HYDROS vs Neptune Apex</Link> comparison covers the difference between a local and a cloud controller, and{" "}
            <Link href="/devices" style={link}>Devices</Link> compares every integration side by side.
          </p>

          <h2 style={h2}>Troubleshooting</h2>
          <h3 style={h3}>The Apex shows as unreachable</h3>
          <ul style={list}>
            <li>Make sure your phone is on the same WiFi as the Apex, not cellular.</li>
            <li>Check the IP address is still right. If your router changed it, update it in Apex Settings, and reserve the address in your router so it doesn&apos;t change again.</li>
            <li>Confirm the username and password by signing in to the Apex from a browser on the same network.</li>
          </ul>
          <h3 style={h3}>A dosing outlet stays off and won&apos;t dose</h3>
          <ul style={list}>
            <li>The safety shutoff may have tripped because the outlet was on longer than a dose should take. The Apex holds it off until reset.</li>
            <li>Check the pump and tubing, recalibrate if the flow has changed, then open the outlet and set it back to AUTO.</li>
          </ul>
          <h3 style={h3}>Temperature or pH looks wrong</h3>
          <ul style={list}>
            <li>NextUpReef shows exactly what your Apex reports. Check the probe&apos;s calibration and any offset on the Apex itself.</li>
            <li>Give a new probe time to settle before trusting its first readings.</li>
          </ul>
          <h3 style={h3}>A reading didn&apos;t land in my log</h3>
          <ul style={list}>
            <li>Only probes matched to a log parameter are saved. Standard names match automatically; ORP isn&apos;t logged.</li>
            <li>Auto-sync saves at most every 15 minutes, so reopening the app right away won&apos;t add another entry. Use Pull Now for an immediate reading.</li>
          </ul>

          <h2 style={h2}>Common questions</h2>
          {faqs.map((f) => (
            <div key={f.q} style={{ marginBottom: "22px" }}>
              <h3 style={{ ...h3, marginTop: "18px", fontSize: "18px" }}>{f.q}</h3>
              <p style={{ margin: 0 }}>{f.a}</p>
            </div>
          ))}

          <div style={{ background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)", borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center" }}>
            <p style={{ fontSize: "18px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>
              Bring your Apex into one app.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Probes, outlets, heater temps, dosing, logs, scores and AI advice together. Integrations are part of Pro, with a 30-day free trial.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://apps.apple.com/us/app/nextupreef/id6760728959" target="_blank" rel="noopener noreferrer" className="btn primary">Download on App Store</a>
              <a href="https://play.google.com/store/apps/details?id=com.nextupreef.app" target="_blank" rel="noopener noreferrer" className="btn secondary">Download on Google Play</a>
            </div>
          </div>

          <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "32px", lineHeight: 1.6 }}>
            Neptune Systems and Apex are trademarks of Neptune Systems. NextUpReef is independent and not affiliated with Neptune Systems.
          </p>
        </div>
      </article>
    </>
  );
}
