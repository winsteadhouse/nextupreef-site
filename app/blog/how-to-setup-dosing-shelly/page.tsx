import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Set Up Automated Dosing with NextUpReef and a Shelly Outlet",
  description: "Calibrate your dosing pump and save a schedule to your Shelly outlet. Doses run 24/7 — no phone, internet, or app needed once saved.",
  alternates: { canonical: "https://nextupreef.com/blog/how-to-setup-dosing-shelly" },
  openGraph: {
    title: "How to Set Up Automated Dosing with NextUpReef",
    description: "Calibrate your pump, set daily mL, save to the outlet. Dosing runs 24/7 even offline.",
    url: "https://nextupreef.com/blog/how-to-setup-dosing-shelly",
    images: [{ url: "/brand/splash2.png", width: 1200, height: 630 }],
  },
};

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo",
  name: "How to Set Up Automated Dosing with a Shelly Outlet in NextUpReef",
  totalTime: "PT10M",
  supply: [
    { "@type": "HowToSupply", name: "Shelly Plug US Gen4" },
    { "@type": "HowToSupply", name: "Peristaltic dosing pump" },
    { "@type": "HowToSupply", name: "Small measuring cup" },
  ],
  tool: [{ "@type": "HowToTool", name: "NextUpReef app (Pro)" }],
  step: [
    { "@type": "HowToStep", name: "Add a Shelly outlet tagged as Doser", text: "Add your Shelly outlet and set its type to Doser to unlock the dosing editor." },
    { "@type": "HowToStep", name: "Open Dosing Schedules", text: "Tap Control Center then Dosing. Tap your doser outlet." },
    { "@type": "HowToStep", name: "Calibrate the pump", text: "Pick pump brand, run a 30-second burst into a cup, measure the mL, enter it. Done once per pump." },
    { "@type": "HowToStep", name: "Set up the schedule", text: "Choose parameter, daily mL, pattern, doses per day, and active days." },
    { "@type": "HowToStep", name: "Save to plug", text: "Tap Review and Save. Schedule writes to the outlet and runs 24/7 on its own." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Does dosing stop if my phone or internet goes offline?",
      acceptedAnswer: { "@type": "Answer", text: "No. The schedule is stored on the Shelly outlet itself. Once saved it runs on its own clock with no phone, app, or internet required." } },
    { "@type": "Question", name: "How does NextUpReef track dosing history?",
      acceptedAnswer: { "@type": "Answer", text: "A webhook is registered on the outlet when you save the schedule. Each time a dose fires, the outlet calls NextUpReef and the dose is logged. Manual doses via Dose Now are also logged." } },
    { "@type": "Question", name: "What is Spread 24/7?",
      acceptedAnswer: { "@type": "Answer", text: "Spread 24/7 spaces doses evenly across 24 hours. 6 doses per day = every 4 hours: 12 AM, 4 AM, 8 AM, 12 PM, 4 PM, 8 PM." } },
    { "@type": "Question", name: "Do I need to calibrate every time?",
      acceptedAnswer: { "@type": "Answer", text: "No. Calibration is one-time per pump. Recalibrate any time from the Schedule tab if you replace the pump or tubing." } },
    { "@type": "Question", name: "Can I pause dosing during feeding?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Tap Pause on the Now tab to pause for a set time. Feed Mode in Control Center pauses other outlets but not dosers — they keep their own schedule." } },
    { "@type": "Question", name: "What happens if the power goes out?",
      acceptedAnswer: { "@type": "Answer", text: "NextUpReef sets initial_state=off on every doser outlet. If power cuts, the relay stays off when power restores. Dosing resumes at the next scheduled time." } },
  ],
};

type Step = { n: number; label: string; body: string; tip: string | null; img: string | null; alt: string };
const steps: Step[] = [
  { n: 0, label: "Prerequisite: add a Shelly outlet tagged as Doser",
    body: "The dosing editor only appears on outlets whose type is Doser. If you haven’t added your outlet yet, follow the Shelly setup guide first and choose Doser when asked what it controls.",
    tip: null, img: null, alt: "" },
  { n: 1, label: "Open Dosing Schedules",
    body: "From the app drawer tap Control Center, then Dosing. You’ll see your doser outlets grouped by tank. Outlets without a schedule show No schedule set up. Tap your outlet.",
    tip: "You can also reach the doser directly from the Control Center outlet list.",
    img: "/blog/dosing-setup/dosing-01-list.png",
    alt: "Dosing Schedules screen showing All-for-Reef Doser with No schedule set up" },
  { n: 2, label: "The Now tab — your dosing dashboard",
    body: "Before setup the Now tab shows No dosing schedule yet with a Set up schedule button. Once active, it shows a progress ring (mL confirmed today vs daily target), the next scheduled dose time, a dot timeline of today’s doses (filled dot = completed, hollow = upcoming), and Dose Now and Pause buttons at the bottom.",
    tip: "Confirmed counts doses actually logged — both manual Dose Now taps and scheduled doses the outlet reports via webhook each time it fires.",
    img: "/blog/dosing-setup/dosing-02-now-empty.png",
    alt: "Outlet Now tab showing No dosing schedule yet with Set up schedule button" },
  { n: 3, label: "Calibration step 1: pick your pump brand",
    body: "Tap Set up schedule or the Schedule tab. If the pump hasn’t been calibrated, the calibration flow appears first. Pick your brand: Jebao, Kamoer, BRS, Reef Octopus, Red Sea, or Other. Type the model name if you want — optional, stored for your reference.",
    tip: "Brand and model don’t affect calibration math — they’re just labels so you know which pump is on which outlet.",
    img: "/blog/dosing-setup/dosing-03-calibrate-brand.png",
    alt: "Calibration screen with BRS selected and pump model field showing" },
  { n: 4, label: "Calibration step 2: run the 30-second burst",
    body: "Place the pump’s output line into a small measuring cup. Tap Start 30-second burst. The outlet turns on the pump for exactly 30 seconds then cuts power automatically — you don’t need to watch it. A countdown ticks in the app.",
    tip: "The outlet uses its own hardware timer to stop the pump. Even if your phone dies during the burst, the pump stops at 30 seconds.",
    img: "/blog/dosing-setup/dosing-04-burst-running.png",
    alt: "30-second burst running: countdown at 29 seconds, Pump is running message" },
  { n: 5, label: "Calibration step 3: enter the measured mL",
    body: "When the burst finishes, measure the liquid in the cup precisely. Type the amount in mL and tap Save calibration. NextUpReef calculates your pump’s flow rate (mL per second) and saves it. This number drives every dose duration calculation from here on.",
    tip: "Precision matters here — a 0.5 mL error compounds across every dose every day. Use a graduated syringe if you have one.",
    img: null, alt: "" },
  { n: 6, label: "Choose what you are dosing",
    body: "After calibration the schedule editor opens. Pick the parameter: Alkalinity, Calcium, Magnesium, Nitrate, Phosphate, Carbon, Trace, or Custom. Type your product name — for example All-for-Reef, BRS 2-Part Alk, or Seachem Reef Fusion. This is how it appears in your dosing history.",
    tip: "The parameter you pick determines which trend chart in Reef Pulse Analytics shows your dosing history.",
    img: "/blog/dosing-setup/dosing-06-editor.png",
    alt: "Schedule editor: Alkalinity selected, 30 mL daily amount, Spread 24/7 pattern, 6 doses per day" },
  { n: 7, label: "Set your daily mL target and schedule pattern",
    body: "Use minus and plus to set total mL per day. Then pick a pattern: Spread 24/7 evenly spaces doses across the day (6 doses = every 4 hours). Specific times lets you set exact times. Once daily delivers a single bolus dose. The preview at the bottom updates live.",
    tip: "Spread 24/7 is best for alkalinity. Small frequent doses keep chemistry more stable than one large daily dose.",
    img: null, alt: "" },
  { n: 8, label: "Set doses per day and active days",
    body: "For Spread 24/7 use the stepper to pick doses per day (1—24). The label shows the interval — 6 doses shows Every 4.0 hours. Tap the day circles to toggle active days. All 7 are selected by default.",
    tip: "Most reefers dose Alk, Cal, and Mag every day. Trace elements or carbon supplements might only run certain days.",
    img: null, alt: "" },
  { n: 9, label: "Review and save to plug",
    body: "Tap Review and Save at the bottom. A confirmation modal shows the complete plan: total mL per day, number of doses, mL per dose, burst duration in seconds, and every dose time listed. Read it over — then tap Save to plug. The app writes the schedule to the outlet over your local network.",
    tip: "Example from the screenshot: 30 mL ÷ 6 doses = 5.00 mL per dose. At 0.017 mL/sec that’s 294.1 seconds per dose. NextUpReef calculates this automatically.",
    img: "/blog/dosing-setup/dosing-07-confirm.png",
    alt: "Confirm schedule modal: 30 mL/day, 6 doses, 6 dose times listed, Save to plug button" },
  { n: 10, label: "Done — your reef gets dosed no matter what",
    body: "The schedule is on the outlet now. Your tank gets dosed at the right times whether your phone is home or not, your internet is up or not, or the app is open or not. The Now tab updates to show today’s progress ring, the next upcoming dose, and a full timeline.",
    tip: null,
    img: "/blog/dosing-setup/dosing-08-now-active.png",
    alt: "Now tab with active schedule: Alkalinity ring showing 0.0 of 30 mL, next dose at 8 PM, dose timeline" },
];

const patternRows: [string, string, string][] = [
  ["Spread 24/7", "Evenly spaces doses across 24 hours", "Alk, Cal, Mag — keeps chemistry stable"],
  ["Specific times", "You pick exact dose times", "Avoiding feeding windows, matching water changes"],
  ["Once daily", "Single dose at one time of day", "Supplements where daily total matters more than frequency"],
];
const postSaveRows: [string, string][] = [
  ["Dose Now", "Triggers one full dose immediately and logs it as a manual dose."],
  ["Pause", "Pauses dosing for a set time. The outlet resumes automatically when the pause ends."],
  ["History tab", "Shows every logged dose — scheduled (webhook) and manual — with timestamps and mL amounts."],
  ["Schedule tab", "Edit the schedule or recalibrate the pump any time."],
  ["Settings (gear icon)", "Rename the outlet, update the IP address, clear all schedules, or remove the outlet."],
];
const safetyRows: [string, string][] = [
  ["Power-loss protection", "The outlet is set to initial_state=off. If power cuts, the relay stays off when power restores. Dosing resumes normally at the next scheduled time."],
  ["5-minute hardware cap", "Every burst is hardware-capped at 300 seconds (5 min). The outlet never runs a dose longer than 5 minutes regardless of what the app does."],
  ["20-job limit protection", "NextUpReef clears all existing cron jobs before writing a new schedule so schedules never conflict or exceed the Shelly’s 20-job maximum."],
  ["Off-network detection", "If your phone is on cellular or a different Wi-Fi, the app detects this and skips calling the outlet. Your schedule is unaffected."],
];

export default function DosingSetupPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 20px" }}>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "32px" }}>
          <Link href="/" style={{ color: "var(--reef)" }}>Home</Link><span style={{ margin: "0 8px" }}>/</span>
          <Link href="/blog" style={{ color: "var(--reef)" }}>Blog</Link><span style={{ margin: "0 8px" }}>/</span>
          How to Set Up Automated Dosing
        </p>
        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Dosing", "Smart Outlets", "Setup Guide", "Pro Feature"].map(tag => (
            <span key={tag} style={{ fontSize: "12px", fontWeight: "700", padding: "4px 14px", borderRadius: "999px",
              background: "var(--reef-glow)", border: "1px solid rgba(44,196,214,0.2)", color: "var(--reef)" }}>{tag}</span>
          ))}
        </div>
        <h1 style={{ fontSize: "clamp(26px,5vw,40px)", fontWeight: "900", lineHeight: 1.15, marginBottom: "16px", letterSpacing: "-0.02em" }}>
          How to Set Up Automated Dosing with a Shelly Outlet
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "32px" }}>
          May 23, 2026 &middot; 8 min read &middot; NextUpReef Team
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "24px", fontWeight: "500" }}>
          Consistent dosing is one of the highest-impact things you can do for a reef tank. Even small daily swings in alkalinity stress corals.
          NextUpReef turns a Shelly smart outlet into a fully automated doser in about 10 minutes. Once the schedule is saved to the outlet,
          your tank gets dosed on time whether your phone is home, your internet is up, or the app is open.
        </p>
        <div style={{ background: "linear-gradient(135deg,#0EA5E915 0%,#10B98115 100%)",
          border: "1px solid rgba(14,165,233,0.2)", borderRadius: "16px", padding: "24px", marginBottom: "40px" }}>
          <p style={{ fontSize: "15px", fontWeight: "800", color: "var(--text)", margin: "0 0 12px" }}>🔒 The schedule lives on the outlet, not the app</p>
          <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--text-muted)", margin: 0, fontWeight: "600" }}>
            When you tap Save to plug, NextUpReef writes the dose schedule directly to the Shelly outlet&apos;s onboard memory.
            The outlet runs every dose using its own real-time clock. Router down, phone dead, NextUpReef servers unreachable — none of it stops your dosing.
          </p>
        </div>
        <div style={{ background: "#FEF3C7", border: "1px solid #FDE68A", borderRadius: "12px",
          padding: "20px", marginBottom: "40px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
          <span style={{ fontSize: "20px", lineHeight: 1 }}>ℹ</span>
          <div>
            <p style={{ fontWeight: "900", fontSize: "14px", color: "#92400E", margin: "0 0 6px" }}>Before you start: add a Shelly outlet tagged as Doser</p>
            <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#78350F", margin: 0, fontWeight: "600" }}>
              The dosing editor only appears on outlets with their type set to <strong>Doser</strong>.
              If you haven&apos;t set up your outlet yet, follow the{" "}
              <Link href="/blog/how-to-add-shelly-plug" style={{ color: "#92400E", textDecoration: "underline" }}>Shelly outlet setup guide</Link>{" "}
              first and choose Doser when asked what it controls. That takes about 5 minutes.
            </p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 16px",
          background: "var(--reef-glow)", borderRadius: "10px", border: "1px solid rgba(44,196,214,0.2)" }}>
          <p style={{ margin: 0, fontSize: "13px", fontWeight: "700", color: "var(--reef)" }}>
            Need to buy a Shelly outlet?{" "}<a href="/devices" style={{ color: "var(--reef)", textDecoration: "underline" }}>Shop compatible hardware →</a>
          </p>
        </div>
        <h2 style={{ fontSize: "28px", fontWeight: "900", marginBottom: "32px", letterSpacing: "-0.01em" }}>The setup flow, step by step</h2>
        {steps.map((step) => (
          <div key={step.n} style={{ marginBottom: "48px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: step.img || step.tip ? "16px" : "0" }}>
              {step.n > 0 && (
                <div style={{ minWidth: "32px", height: "32px", borderRadius: "50%", background: "var(--reef)", color: "white",
                  display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "14px", marginTop: "2px", flexShrink: 0 }}>
                  {step.n}</div>
              )}
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "20px", fontWeight: "900", margin: "0 0 8px", color: "var(--text)" }}>
                  {step.n === 0 ? "🔧 " : ""}{step.label}</h3>
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--text-muted)", margin: 0, fontWeight: "500" }}>{step.body}</p>
              </div>
            </div>
            {step.img && (
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
                <div style={{ borderRadius: "18px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 4px 24px rgba(0,0,0,0.3)", maxWidth: "260px", flexShrink: 0 }}>
                  <img src={step.img} alt={step.alt} style={{ width: "100%", display: "block" }} />
                </div>
              </div>)}
            {step.tip && (
              <div style={{ background: "var(--reef-glow)", border: "1px solid rgba(14,165,233,0.2)",
                borderRadius: "10px", padding: "12px 16px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "14px", lineHeight: 1, marginTop: "1px" }}>💡</span>
                <p style={{ fontSize: "13px", fontWeight: "700", color: "var(--reef)", margin: 0, lineHeight: 1.6 }}>{step.tip}</p>
              </div>)}
          </div>))}
        <h2 style={{ fontSize: "24px", fontWeight: "900", margin: "0 0 20px" }}>Schedule patterns</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "48px" }}>
          {patternRows.map(([name,what,best]) => (
            <div key={name} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "14px 16px" }}>
              <span style={{ fontSize: "13px", fontWeight: "900", color: "var(--reef)", display: "block", marginBottom: "6px" }}>{name}</span>
              <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: 0, lineHeight: 1.65 }}>{what} — {best}</p>
            </div>
          ))}
        </div>
        <h2 style={{ fontSize: "24px", fontWeight: "900", margin: "0 0 16px" }}>After setup: what you can do</h2>
        <p style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "20px", fontWeight: "500" }}>The Now tab becomes your dosing dashboard once a schedule is active.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "48px" }}>
          {postSaveRows.map(([action,desc]) => (
            <div key={action} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "14px 16px", display: "flex", gap: "12px" }}>
              <span style={{ fontSize: "13px", fontWeight: "900", color: "var(--reef)", flexShrink: 0, minWidth: "110px" }}>{action}</span>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", margin: 0, lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
        <h2 style={{ fontSize: "24px", fontWeight: "900", margin: "0 0 16px" }}>Safety and reliability</h2>
        <p style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "20px", fontWeight: "500" }}>NextUpReef applies these protections every time a dosing schedule is saved.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "48px" }}>
          {safetyRows.map(([title,desc]) => (
            <div key={title} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "14px 16px", display: "flex", gap: "12px" }}>
              <span style={{ fontSize: "13px", fontWeight: "900", color: "var(--reef)", flexShrink: 0, minWidth: "180px" }}>{title}</span>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", margin: 0, lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
        <div style={{ background: "linear-gradient(135deg, rgba(14,165,233,0.15), rgba(44,196,214,0.1))", border: "1px solid rgba(44,196,214,0.2)", borderRadius: "16px", padding: "40px 28px", textAlign: "center" }}>
          <p style={{ fontSize: "20px", fontWeight: "900", margin: "0 0 8px" }}>Ready to automate your reef?</p>
          <p style={{ fontSize: "14px", color: "var(--text-muted)", margin: "0 0 28px", lineHeight: 1.6 }}>Shelly smart outlets are a NextUpReef Pro feature. All new users get a free 30-day Pro trial.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://apps.apple.com/us/app/nextupreef/id6760728959" target="_blank" rel="noopener noreferrer" className="btn primary large">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              App Store
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.nextupreef.app" target="_blank" rel="noopener noreferrer" className="btn secondary large">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}><path d="M3.18 23.76c.3.17.64.24.99.2l13.29-13.29L13.9 7.1 3.18 23.76z" fill="#EA4335"/><path d="M20.96 10.34L18.1 8.7l-3.66 3.66 3.66 3.66 2.89-1.66c.82-.47.82-1.55-.03-2.02z" fill="#FBBC04"/><path d="M3.18.24C2.83.2 2.49.27 2.19.44.94 1.16.94 2.84 2.19 3.56L13.9 17.1l3.56-3.56L3.18.24z" fill="#34A853"/><path d="M2.19.44C1.37.91 1 1.76 1 2.64v18.72c0 .88.37 1.72 1.19 2.2L13.9 12 2.19.44z" fill="#4285F4"/></svg>
              Google Play
            </a>
          </div>
        </div>
      </article>
    </>
  );
}