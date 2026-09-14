import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CoralVue HYDROS vs Neptune Apex: Which Reef Controller Is Right for You?",
  description:
    "HYDROS vs Apex, compared fairly: local vs cloud, away-from-home access, probes, outlets, dosing and testing, plus when a couple of smart plugs are enough and how NextUpReef works with each.",
  alternates: {
    canonical: "https://nextupreef.com/blog/coralvue-hydros-vs-neptune-apex",
  },
  openGraph: {
    title: "CoralVue HYDROS vs Neptune Apex: Which Reef Controller Is Right for You?",
    description:
      "A neutral, reefer-to-reefer comparison of Neptune Apex and CoralVue HYDROS, and the practical questions that decide which one fits your tank.",
    url: "https://nextupreef.com/blog/coralvue-hydros-vs-neptune-apex",
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CoralVue HYDROS vs Neptune Apex: Which Reef Controller Is Right for You?",
  description:
    "A fair comparison of Neptune Apex and CoralVue HYDROS reef controllers: architecture, remote access, probes, outlets, dosing, testing, and how NextUpReef supports each.",
  image: "https://nextupreef.com/brand/og-image.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-09-14",
  dateModified: "2026-09-14",
  mainEntityOfPage: "https://nextupreef.com/blog/coralvue-hydros-vs-neptune-apex",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is CoralVue HYDROS better than Neptune Apex?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Neither is better overall. Neptune Apex is a long-established local controller with a large module ecosystem, which suits reefers who want a mature platform or already own one. CoralVue HYDROS is a newer, modular, cloud-connected system, which suits reefers who want to monitor and control the tank from anywhere. The right choice depends on how you use your tank, what you already own, and your budget.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a reef controller at all?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Plenty of healthy reefs run without one. A controller earns its place when you want continuous probe readings, alerts, and coordinated control of equipment. If you mainly want a doser or light on a schedule, a couple of smart plugs can be enough, and regular hand testing covers the chemistry.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use my Neptune Apex in NextUpReef when I am away from home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not for live data and control. NextUpReef connects to the Apex locally, so your phone must be on the same WiFi as the Apex. Dosing schedules are saved to the Apex and keep running while you are away. For alerts while away, use the alarms built into your Apex.",
      },
    },
    {
      "@type": "Question",
      name: "Does NextUpReef support Apex DOS or DDR dosing pumps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. NextUpReef supports Apex dosing on a regular outlet with a dosing pump, and every dosing program gets a built-in shutoff so a dose cannot run long. Apex DOS and DDR pumps are not supported, and there is no per-dose confirmation or missed-dose alert for Apex dosing.",
      },
    },
    {
      "@type": "Question",
      name: "How do I connect CoralVue HYDROS to NextUpReef?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Create a device key in the HYDROS app using the Provider ID nextupreef, choose Read and write or Read only, and enter the key in NextUpReef. HYDROS support is early access and is the newest NextUpReef integration. Integrations are part of NextUpReef Pro.",
      },
    },
  ],
};

const h2Style = {
  fontSize: "28px",
  fontWeight: "900",
  color: "var(--text-light)",
  marginTop: "48px",
  marginBottom: "16px",
} as const;

const linkStyle = { color: "var(--reef)", fontWeight: 700 } as const;
const strongStyle = { color: "var(--text-light)" } as const;

const thStyle = {
  color: "var(--text-light)",
  textAlign: "left",
  padding: "10px 12px",
  borderBottom: "1px solid rgba(255,255,255,0.12)",
  verticalAlign: "bottom",
} as const;

const tdStyle = {
  padding: "10px 12px",
  borderTop: "1px solid rgba(255,255,255,0.06)",
  verticalAlign: "top",
} as const;

const compareRows: [string, string, string][] = [
  [
    "Architecture",
    "Local controller on your home network",
    "Cloud-connected, modular system",
  ],
  [
    "Away-from-home access in NextUpReef",
    "No — live data and control need the same WiFi as the Apex",
    "Yes — works from anywhere",
  ],
  [
    "Probe readings synced to your logs",
    "Temperature, pH, salinity, plus Trident alk/Ca/Mg (nitrate/phosphate only if a probe reports them)",
    "Temperature, pH, salinity, plus alkalinity tests from a HYDROS tester (ORP shown live, not logged)",
  ],
  [
    "Outlet / output control",
    "On / Off / Auto, Feed Mode, heater temperature setpoints",
    "On / Off / Auto, pump and light levels, Feeding / Normal / Water Change and custom modes",
  ],
  [
    "Dosing",
    "Schedule on a regular outlet + pump, with a built-in shutoff; DOS/DDR not supported; no per-dose confirmation",
    "Manual dose on HYDROS dosers; dosing programs stay in the HYDROS app",
  ],
  [
    "Testing",
    "Trident alk/Ca/Mg results sync into your logs",
    "Start tests from NextUpReef; alkalinity results sync",
  ],
  [
    "Ecosystem maturity",
    "Long-established, large module ecosystem",
    "Newer platform",
  ],
  [
    "NextUpReef support",
    "Live (Pro)",
    "Early access (Pro) — our newest integration",
  ],
];

export default function CoralvueHydrosVsNeptuneApexPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 20px" }}>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "32px" }}>
          <Link href="/" style={{ color: "var(--reef)" }}>Home</Link>
          {" › "}
          <Link href="/blog" style={{ color: "var(--reef)" }}>Blog</Link>
          {" › "}
          HYDROS vs Apex
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Controllers", "Neptune Apex", "CoralVue HYDROS"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          CoralVue HYDROS vs Neptune Apex: Which Reef Controller Is Right for You?
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          September 14, 2026 · 9 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            <strong style={strongStyle}>The short answer:</strong> Neptune Apex suits reefers who want a mature, local controller with a big module ecosystem — and it’s an easy call if you already own one. CoralVue HYDROS suits reefers who want a cloud-connected system they can check and control from anywhere. And if all you really want is a doser and a light on a schedule, a couple of smart plugs may be all you need.
          </p>
          <p>
            Neither controller is “better” overall. Both run healthy reefs every day. The right one depends on how you use your tank: whether you travel, what you already have plugged in, how much you want probes watching the water, and how comfortable you are with a newer platform. This guide lays out the differences plainly so an Apex owner and a HYDROS owner would both nod along.
          </p>

          <h2 style={h2Style}>What a Reef Controller Actually Does</h2>
          <p>
            Strip away the marketing and a reef controller does four jobs:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strongStyle}>Probes.</strong> Continuous readings of temperature, pH, salinity, ORP and, with add-on testers, parameters like alkalinity. You see the whole day, not a single hand test.</li>
            <li><strong style={strongStyle}>Outlets.</strong> Switchable power for heaters, return pumps, skimmers, lights, dosers and top-off. Each outlet can be on, off, or following a program.</li>
            <li><strong style={strongStyle}>Programs.</strong> Rules that tie those together — heater off above a temperature, pumps paused during feeding, lights on a schedule.</li>
            <li><strong style={strongStyle}>Alerts.</strong> A warning when something drifts out of range, so a stuck heater gets caught in hours rather than days.</li>
          </ul>
          <p>
            Do you need one? Not necessarily. Plenty of beautiful reefs run on a timer, a good heater and a weekly test session. A controller earns its place when you have more equipment than you want to babysit, when an overheating or dead-pump event would be expensive, or when you want to see how your tank behaves overnight and while you’re at work. It doesn’t replace testing or water changes — it watches between them.
          </p>

          <h2 style={h2Style}>HYDROS vs Apex: Side by Side</h2>
          <p>
            The biggest difference is architecture. The Apex is a local controller that lives on your home network; HYDROS is built around the cloud. Almost everything else in the table flows from that. The rows below describe what each controller does inside NextUpReef, based on what our integrations support today.
          </p>

          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px" }}>
              <thead>
                <tr>
                  <th style={thStyle}></th>
                  <th style={thStyle}>Neptune Apex</th>
                  <th style={thStyle}>CoralVue HYDROS</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row[0]}>
                    <td style={{ ...tdStyle, color: "var(--text-light)", fontWeight: 700 }}>{row[0]}</td>
                    <td style={tdStyle}>{row[1]}</td>
                    <td style={tdStyle}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
            <Image
              src="/screenshots/site-v3/phones-integrations.png"
              alt="Neptune Apex screen in NextUpReef with live temperature and pH gauges, Feed Mode and outlet status, in front of the Devices list showing CoralVue HYDROS, Neptune Apex and Shelly smart outlets"
              width={1227}
              height={1434}
              style={{ width: "100%", maxWidth: 380, height: "auto" }}
            />
            <p style={{ fontSize: "13px", color: "var(--text-muted)", textAlign: "center", marginTop: "12px", marginBottom: 0 }}>
              The Apex screen (front) and the Devices list, where HYDROS, Apex and Shelly plugs sit side by side.
            </p>
          </div>

          <h2 style={h2Style}>Neptune Apex with NextUpReef</h2>
          <p>
            The Apex has been around a long time, and that shows in the best way: a large ecosystem of modules and a huge base of reefers who already know how to program it. If you own one, the best controller for you is very likely the one already on your stand.
          </p>
          <p>
            NextUpReef connects to the Apex you already own, with no extra hardware. Once connected:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strongStyle}>Probe readings go into your logs</strong> — temperature, pH, salinity, and Trident alkalinity, calcium and magnesium (plus nitrate and phosphate if a probe reports them). They feed your trend charts and scores alongside hand tests.</li>
            <li><strong style={strongStyle}>Outlet control:</strong> switch any outlet On, Off or Auto, start Feed Mode, and set heater temperature setpoints.</li>
            <li><strong style={strongStyle}>Dosing on a regular outlet with a pump.</strong> Every dosing program gets a built-in shutoff so a dose can’t run long, and the schedule is saved to the Apex so it keeps running when your phone is off.</li>
          </ul>
          <p>
            The honest limits, because you should know them before you rely on it:
          </p>
          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Apex in NextUpReef — what to expect:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={strongStyle}>Same WiFi required.</strong> The connection is local, so live data and control need your phone on the same network as the Apex.</li>
              <li><strong style={strongStyle}>DOS and DDR pumps aren’t supported.</strong> Dosing works through a regular outlet and pump.</li>
              <li><strong style={strongStyle}>No per-dose confirmation</strong> or missed-dose alerts for Apex dosing.</li>
            </ul>
          </div>
          <p>
            For alerts while you’re away, keep the alarms on your Apex itself set up. Step-by-step setup is in{" "}
            <Link href="/blog/how-to-connect-apex" style={linkStyle}>how to connect a Neptune Apex</Link>.
          </p>

          <h2 style={h2Style}>CoralVue HYDROS with NextUpReef</h2>
          <p>
            HYDROS is the newer platform: modular, and connected to the cloud from the ground up. That design is what makes it attractive to reefers who travel or just like checking the tank from the office — your phone doesn’t need to be anywhere near home.
          </p>
          <p>
            In NextUpReef, HYDROS is <strong style={strongStyle}>early access</strong> and our newest integration. It works, and we’re actively building on it, but it hasn’t had the years of real-world use our Apex integration has. Here’s what it does today:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strongStyle}>Readings sync every 15 minutes, around the clock</strong> — even with the app closed. Temperature, pH, salinity and alkalinity tests from a HYDROS tester are saved to your logs; ORP is shown live on the HYDROS screen.</li>
            <li><strong style={strongStyle}>Outputs:</strong> On, Off or Auto, plus pump and light levels.</li>
            <li><strong style={strongStyle}>Modes:</strong> Feeding, Normal, Water Change, and your custom modes.</li>
            <li><strong style={strongStyle}>Tests and dosing:</strong> start a test, or run a manual dose on a HYDROS doser.</li>
            <li><strong style={strongStyle}>Device-confirmed changes.</strong> You get a confirmation prompt before any change, and each change is confirmed by the HYDROS itself, so you know it actually took.</li>
          </ul>
          <p>
            One thing stays where it is: <strong style={strongStyle}>programs and schedules live in the HYDROS app.</strong> The HYDROS API doesn’t expose schedule editing, so NextUpReef shows and controls your system but doesn’t rewrite its programs.
          </p>
          <p>
            To connect, create a device key in the HYDROS app with the Provider ID <strong style={strongStyle}>nextupreef</strong>, and choose Read &amp; write or Read only. Read only is a good fit if you just want readings flowing into your logs and prefer to keep all control inside HYDROS.
          </p>

          <h2 style={h2Style}>When a Smart Plug Is Enough</h2>
          <p>
            Before spending on either controller, ask what problem you’re solving. If the honest answer is “I want my two-part doser to run every day without me” or “I want the refugium light on a schedule,” a Shelly smart plug handles that well.
          </p>
          <p>
            <strong style={strongStyle}>What Shelly does well:</strong> it’s low cost, the schedule runs on the plug itself (so it keeps going with your phone or internet off), the plug’s power draw confirms each dose, and you get an alert if a dose is missed. That per-dose confirmation is something neither controller integration offers in NextUpReef today.
          </p>
          <p>
            <strong style={strongStyle}>What it doesn’t do:</strong> it’s outlet control only, with no water probes, and your phone and plug need to be on the same WiFi to change settings. You still test by hand — which, for many tanks, is perfectly fine.
          </p>
          <p>
            Guides:{" "}
            <Link href="/blog/how-to-add-shelly-plug" style={linkStyle}>how to add a Shelly smart plug</Link>
            {" "}and{" "}
            <Link href="/blog/how-to-setup-dosing-shelly" style={linkStyle}>how to set up automated dosing with Shelly</Link>.
          </p>

          <h2 style={h2Style}>How to Decide: Six Practical Questions</h2>
          <ol style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={strongStyle}>Do you need to see and control the tank while away from home?</strong> If checking from work or on vacation matters, a cloud-first system like HYDROS fits naturally. If you mostly manage the tank from the couch, a local controller is no handicap.</li>
            <li><strong style={strongStyle}>Do you already own one?</strong> Switching controllers means rewiring, re-probing and reprogramming. If your Apex or HYDROS is doing its job, getting more out of it is usually smarter than replacing it.</li>
            <li><strong style={strongStyle}>Do you want continuous probe readings?</strong> If you want to see overnight pH swings or catch a heater failure early, you need probes — that means a controller. If hand testing on a regular rhythm works for you, you may not.</li>
            <li><strong style={strongStyle}>What does your dosing look like?</strong> A simple daily two-part on an outlet and pump works with Apex or Shelly. If you run Apex DOS or DDR pumps, know that NextUpReef doesn’t support them. On HYDROS, dosing programs stay in the HYDROS app, with manual doses available from NextUpReef. If per-dose confirmation matters most, Shelly is the one that provides it.</li>
            <li><strong style={strongStyle}>What’s your budget?</strong> A full controller with probes is a much bigger investment than a couple of smart plugs. Price out the exact modules you’d actually use with each manufacturer before deciding.</li>
            <li><strong style={strongStyle}>How do you feel about newer tech?</strong> A long-established platform has years of community know-how behind it. A newer platform may move faster but has had less time in the field. Both are reasonable preferences.</li>
          </ol>
          <p>
            Whichever you pick, the controller only watches the water. You still need good targets to aim for — our{" "}
            <Link href="/blog/reef-tank-parameters-chart" style={linkStyle}>reef tank parameters chart</Link>
            {" "}lays them out by tank type, and the{" "}
            <Link href="/blog/reef-tank-alkalinity-calcium-magnesium-guide" style={linkStyle}>alkalinity, calcium and magnesium guide</Link>
            {" "}explains the parameters a controller’s tester is most useful for.
          </p>

          <h2 style={h2Style}>See the Full Comparison</h2>
          <p>
            The{" "}
            <Link href="/devices" style={linkStyle}>Devices page</Link>
            {" "}compares Apex, Shelly and HYDROS side by side, with pros and trade-offs for each. All integrations are part of NextUpReef Pro, and every new account gets a 30-day Pro trial with no credit card.
          </p>

          <h2 style={h2Style}>Frequently Asked Questions</h2>

          <h3 style={{ fontSize: "20px", fontWeight: "900", color: "var(--text-light)", marginTop: "28px", marginBottom: "8px" }}>
            Is CoralVue HYDROS better than Neptune Apex?
          </h3>
          <p>
            Neither is better overall. Apex is a long-established local controller with a large module ecosystem; HYDROS is a newer, modular, cloud-connected system. Pick based on remote access needs, what you already own, and budget.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: "900", color: "var(--text-light)", marginTop: "28px", marginBottom: "8px" }}>
            Do I need a reef controller at all?
          </h3>
          <p>
            No. A controller earns its place when you want continuous probe readings, alerts and coordinated equipment control. If you mainly want a doser or light on a schedule, a couple of smart plugs can be enough, with regular hand testing for chemistry.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: "900", color: "var(--text-light)", marginTop: "28px", marginBottom: "8px" }}>
            Can I use my Neptune Apex in NextUpReef when I’m away from home?
          </h3>
          <p>
            Not for live data and control — the connection is local, so your phone must be on the same WiFi as the Apex. Dosing schedules are saved to the Apex and keep running while you’re away. For alerts while away, use the alarms built into your Apex.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: "900", color: "var(--text-light)", marginTop: "28px", marginBottom: "8px" }}>
            Does NextUpReef support Apex DOS or DDR dosing pumps?
          </h3>
          <p>
            No. Apex dosing in NextUpReef uses a regular outlet with a dosing pump, and every dosing program gets a built-in shutoff. There’s no per-dose confirmation or missed-dose alert for Apex dosing.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: "900", color: "var(--text-light)", marginTop: "28px", marginBottom: "8px" }}>
            How do I connect CoralVue HYDROS to NextUpReef?
          </h3>
          <p>
            Create a device key in the HYDROS app with the Provider ID <strong style={strongStyle}>nextupreef</strong>, choose Read &amp; write or Read only, and enter it in NextUpReef. HYDROS support is early access and part of NextUpReef Pro.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Bring your Apex, HYDROS or Shelly plugs into one app.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              NextUpReef is free on iOS and Android. Integrations are part of Pro, and every new account gets a 30-day Pro trial — no credit card.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://apps.apple.com/us/app/nextupreef/id6760728959" target="_blank" rel="noopener noreferrer" className="btn primary">
                Download on App Store
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.nextupreef.app" target="_blank" rel="noopener noreferrer" className="btn secondary">
                Download on Google Play
              </a>
            </div>
          </div>

          <p style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.6, marginTop: "32px" }}>
            Neptune Systems and Apex are trademarks of Neptune Systems. CoralVue and HYDROS are trademarks of CoralVue, Inc. NextUpReef is independent and not affiliated with either company.
          </p>
        </div>
      </article>
    </>
  );
}
