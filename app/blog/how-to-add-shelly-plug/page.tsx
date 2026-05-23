import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Add a Shelly Smart Outlet to NextUpReef (Step-by-Step)",
  description: "Set up a Shelly Plug US Gen4 with NextUpReef in 5 steps. No Shelly app needed.",
  alternates: { canonical: "https://nextupreef.com/blog/how-to-add-shelly-plug" },
  openGraph: { title: "How to Add a Shelly Smart Outlet to NextUpReef", description: "Set up a Shelly Plug US Gen4 with NextUpReef in 5 steps. No Shelly app needed.", url: "https://nextupreef.com/blog/how-to-add-shelly-plug", images: [{ url: "/brand/splash2.png", width: 1200, height: 630 }] },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do I need the Shelly app?", acceptedAnswer: { "@type": "Answer", text: "No. NextUpReef has a built-in setup wizard. You never need to download or open the Shelly app." } },
    { "@type": "Question", name: "Does the outlet work when I'm away from home?", acceptedAnswer: { "@type": "Answer", text: "Yes. Schedules run on the outlet itself 24/7, whether your phone is home or not. Live control requires being on the same WiFi." } },
    { "@type": "Question", name: "Does NextUpReef track my dosing history?", acceptedAnswer: { "@type": "Answer", text: "Yes. NextUpReef registers a webhook on the outlet when you save a dosing schedule. Every dose is reported back and logged automatically." } },
  ],
};

const steps: Array<{ n: string; label: string; body: string; img: string; alt: string; img2?: string; alt2?: string; tip: string | null }> = [
  { n: "0", label: "Open Smart Outlets", body: "From the drawer menu, tap Control Center then Shelly Smart Outlets. Tap + Add in the top right to launch the setup wizard.", img: "/blog/shelly-setup/shelly-step-outlets.png", alt: "Shelly Smart Outlets screen", tip: "You can also reach Smart Outlets from the Devices section in the drawer." },
  { n: "1", label: "Plug it in", body: "Plug your Shelly Plug US Gen4 into a wall outlet near your tank. The LED should slowly blink white, meaning it's in setup mode.", img: "/blog/shelly-setup/shelly-step-1.png", alt: "Step 1: Plug it in", tip: "If the LED isn't blinking white, hold the button for 10 seconds to reset it, then unplug and plug back in." },
  { n: "2", label: "Join the outlet's WiFi", body: "Tap Open WiFi Settings. Connect to ShellyPlugUSG4-XXXXXX (no password). Switch back to NextUpReef and the app detects the outlet automatically.", img: "/blog/shelly-setup/shelly-step-2-checking.png", img2: "/blog/shelly-setup/shelly-step-2-connected.png", alt: "Step 2: checking for outlet", alt2: "Step 2: outlet connected", tip: "Once detected you'll see the outlet ID confirmed on screen. Tap Next." },
  { n: "3", label: "Connect to your home WiFi", body: "Tap Scan for networks. Pick your home network and enter your password. The outlet only supports 2.4GHz WiFi.", img: "/blog/shelly-setup/shelly-step-3.png", alt: "Step 3: home WiFi picker", tip: "If you see two versions of your network name, pick the 2.4GHz one, not 5GHz." },
  { n: "4", label: "Start Setup", body: "Tap Start Setup. NextUpReef sends WiFi credentials to the outlet, which reboots and joins your home network. The app finds it automatically by hardware ID.", img: "/blog/shelly-setup/shelly-step-4.png", alt: "Step 4: Start Setup", tip: "While the outlet reboots, switch your phone back to home WiFi so the app can find it." },
  { n: "5", label: "Name it and assign to a tank", body: "Give the outlet a name, choose what it controls (Doser, Heater, Skimmer, Light, Return Pump, or Other), and pick which tank it belongs to. Tap Finish Setup.", img: "/blog/shelly-setup/shelly-step-5a.png", alt: "Step 5: name and assign", tip: null },
];

const kindExplainers: [string, string][] = [
  ["Doser", "Unlocks the full dosing schedule editor. Set daily mL, doses per day, and days of the week. NextUpReef calculates burst durations and programs the outlet automatically. Dosing history is logged in real time via webhook."],
  ["Heater", "Shows the heater icon and live wattage. Manual on/off and power monitoring when on home WiFi."],
  ["Skimmer", "Skimmer icon and controls. Can be auto-paused during Feed Mode."],
  ["Light", "Unlocks the on/off schedule editor. Set an on-time and off-time; runs on the outlet 24/7."],
  ["Return Pump", "Return pump icon and controls. Can be included in Feed Mode to bulk-pause flow."],
  ["Other", "Generic icon. Use for reactors, UV sterilizers, fans, feeders, or anything else."],
];

const managingItems: [string, string][] = [
  ["Rename it", "Change the outlet name. Updates everywhere it appears in the app."],
  ["Change what it controls", "Switch between Doser, Heater, Light, Return Pump, etc. Changes which schedule tools are shown."],
  ["Clear Everything on This Outlet", "Wipes all schedules off the physical outlet and removes dosing and lighting schedules from the app. The outlet stays connected. Use this to repurpose it."],
  ["Remove This Outlet", "Removes the outlet from NextUpReef only. The physical plug is untouched and can be re-added any time."],
  ["Factory Reset Outlet", "Sends a factory reset to the physical plug. Wipes WiFi and all settings. The outlet drops offline and is removed from NextUpReef."],
];

const troubleshootItems = [
  { problem: "App says outlet is Unreachable", fixes: ["Make sure your phone is on the same WiFi as the outlet. Cellular means the app can't reach it.", "Check the outlet has power and the LED is solid, not blinking. Blinking means setup mode.", "Confirm the outlet's IP hasn't changed in your router's device list. If it has, remove and re-add it.", "Some routers block device-to-device traffic (AP isolation). Check your router settings if it never shows Online."] },
  { problem: "Setup wizard stuck at Step 4", fixes: ["Make sure your phone switches back to home WiFi after the outlet reboots.", "The outlet only supports 2.4GHz WiFi. If you entered 5GHz credentials, go back to Step 3.", "The outlet may take up to 60 seconds to appear. Tap Start Setup again if timed out."] },
  { problem: "Dosing history isn't filling in", fixes: ["Open the outlet detail, go to Schedule, and tap Save without changing anything. This re-registers the webhook.", "The outlet needs internet access to call the NextUpReef webhook. Check your home network.", "Confirm the outlet type is set to Doser. Only doser outlets have webhook-based history logging."] },
  { problem: "LED blinking / outlet won't join home WiFi", fixes: ["Slow blinking white LED means setup mode. WiFi credentials weren't saved. Run the wizard again.", "If it still fails, hold the button 10 seconds until the LED changes, then unplug and replug.", "Double-check your WiFi password. The outlet gives no error if wrong -- it just goes back to blinking."] },
  { problem: "Android 'Set up your device' pop-up", fixes: ["Tap 'Not now'. NextUpReef manages this outlet via local API -- no Matter setup needed.", "NextUpReef disables Matter advertising during setup, but it may briefly appear on first boot."] },
];

export default function HowToAddShellyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 20px" }}>

        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "32px" }}>
          <Link href="/" style={{ color: "var(--reef)" }}>Home</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <Link href="/blog" style={{ color: "var(--reef)" }}>Blog</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          How to Add a Shelly Smart Outlet
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Smart Outlets", "Setup Guide", "Pro Feature"].map((tag) => (
            <span key={tag} style={{ fontSize: "12px", fontWeight: "700", padding: "4px 14px", borderRadius: "999px", background: "var(--reef-glow)", border: "1px solid rgba(44,196,214,0.2)", color: "var(--reef)" }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "clamp(26px, 5vw, 40px)", fontWeight: "900", lineHeight: 1.15, marginBottom: "16px", letterSpacing: "-0.02em" }}>
          How to Add a Shelly Smart Outlet to NextUpReef
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "32px" }}>May 23, 2026 &middot; 5 min read &middot; NextUpReef Team</p>
        <p style={{ fontSize: "18px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "40px", fontWeight: "500" }}>
          Automate your doser, heater, skimmer, or return pump straight from your reef tracker. Setup takes about 5 minutes and you never need to install the Shelly app.
        </p>

        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "20px 24px", marginBottom: "48px" }}>
          <p style={{ fontSize: "12px", fontWeight: "900", color: "var(--reef)", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.06em" }}>What you need</p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
            {["Shelly Plug US Gen4", "NextUpReef app with Pro subscription or active trial", "Your home WiFi name and password (2.4GHz)"].map((text) => (
              <li key={text} style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text-muted)", fontWeight: "600" }}>
                <span style={{ color: "var(--reef)", flexShrink: 0 }}>&#x2713;</span>{text}
              </li>
            ))}
          </ul>
        </div>

        <h2 style={{ fontSize: "24px", fontWeight: "900", marginBottom: "32px" }}>Step-by-step setup</h2>
        {steps.map((step) => (
          <div key={step.n} style={{ marginBottom: "52px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "999px", background: "var(--reef-dark)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: "14px", fontWeight: "900", color: "white" }}>{step.n}</span>
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "900", margin: 0 }}>{step.label}</h3>
            </div>
            <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.75, margin: "0 0 20px", paddingLeft: "44px" }}>{step.body}</p>
            <div style={{ display: "flex", gap: "16px", paddingLeft: step.img2 ? "0" : "44px", justifyContent: step.img2 ? "center" : "flex-start", marginBottom: step.tip ? "16px" : "0" }}>
              <div style={{ borderRadius: "18px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 4px 24px rgba(0,0,0,0.3)", maxWidth: step.img2 ? "200px" : "260px", flexShrink: 0 }}>
                <img src={step.img} alt={step.alt} style={{ width: "100%", display: "block" }} />
              </div>
              {step.img2 && (
                <div style={{ borderRadius: "18px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 4px 24px rgba(0,0,0,0.3)", maxWidth: "200px", flexShrink: 0 }}>
                  <img src={step.img2} alt={step.alt2} style={{ width: "100%", display: "block" }} />
                </div>
              )}
            </div>
            {step.tip && (
              <div style={{ display: "flex", gap: "10px", padding: "12px 16px", background: "rgba(234,179,8,0.08)", border: "1px solid rgba(234,179,8,0.2)", borderRadius: "10px", marginLeft: "44px" }}>
                <span style={{ fontSize: "14px", flexShrink: 0 }}>&#x1F4A1;</span>
                <p style={{ fontSize: "13px", color: "var(--text-muted)", fontWeight: "700", margin: 0, lineHeight: 1.6 }}>{step.tip}</p>
              </div>
            )}
          </div>
        ))}

        <h2 style={{ fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>What each outlet type does</h2>
        <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "24px" }}>Choosing the right type unlocks the right tools in the app.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "56px" }}>
          {kindExplainers.map(([label, desc]) => (
            <div key={label} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "14px 16px", display: "flex", gap: "12px" }}>
              <span style={{ fontSize: "13px", fontWeight: "900", color: "var(--reef)", flexShrink: 0, minWidth: "90px" }}>{label}</span>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", margin: 0, lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: "14px", padding: "18px 22px", marginBottom: "56px", display: "flex", gap: "12px" }}>
          <span style={{ fontSize: "20px", flexShrink: 0 }}>&#x2705;</span>
          <div>
            <p style={{ fontSize: "14px", fontWeight: "900", color: "#34d399", margin: "0 0 4px" }}>Schedules run on the outlet, not the app</p>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>Once you save a schedule it lives on the Shelly outlet itself. Your schedules keep running 24/7 even when your phone is off or you're away from home.</p>
          </div>
        </div>

        <h2 style={{ fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>Managing an outlet after setup</h2>
        <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "20px" }}>Tap the gear icon on any outlet card to open Outlet Settings. From there you can:</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "56px" }}>
          {managingItems.map(([label, desc]) => (
            <div key={label} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "14px 18px", display: "flex", gap: "14px" }}>
              <div style={{ width: "7px", height: "7px", borderRadius: "999px", background: "var(--reef)", flexShrink: 0, marginTop: "6px" }} />
              <div>
                <p style={{ fontSize: "14px", fontWeight: "900", color: "var(--text-light)", margin: "0 0 4px" }}>{label}</p>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "24px", fontWeight: "900", marginBottom: "16px" }}>Troubleshooting</h2>
        <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "24px" }}>Everything in NextUpReef talks to Shelly outlets over your local network. No Shelly app or cloud account needed.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "56px" }}>
          {troubleshootItems.map((item) => (
            <div key={item.problem} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", overflow: "hidden" }}>
              <div style={{ padding: "14px 18px", borderBottom: "1px solid var(--border)" }}>
                <p style={{ fontSize: "14px", fontWeight: "900", color: "var(--text-light)", margin: 0 }}>{item.problem}</p>
              </div>
              <ul style={{ margin: 0, padding: "14px 18px 14px 34px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {item.fixes.map((fix, i) => (
                  <li key={i} style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>{fix}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "24px", fontWeight: "900", marginBottom: "24px" }}>Frequently asked questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "56px" }}>
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} style={{ borderBottom: "1px solid var(--border)", paddingBottom: "20px" }}>
              <p style={{ fontSize: "15px", fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px" }}>{faq.name}</p>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>{faq.acceptedAnswer.text}</p>
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
