import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "How to Add a Shelly Smart Plug to NextUpReef (Step-by-Step)",
  description:
    "Set up a Shelly Plug US Gen4 with NextUpReef in minutes — no Shelly app needed. Control your doser, heater, skimmer, or return pump from inside the reef app, with automated dosing schedules and live power monitoring.",
  alternates: {
    canonical: "https://nextupreef.com/blog/how-to-add-shelly-smart-plug",
  },
  openGraph: {
    title: "How to Add a Shelly Smart Plug to NextUpReef",
    description:
      "Set up a Shelly Plug US Gen4 with NextUpReef in minutes — no Shelly app needed. Automate your doser, heater, or skimmer straight from your reef tracker.",
    url: "https://nextupreef.com/blog/how-to-add-shelly-smart-plug",
    images: [{ url: "/brand/splash2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Add a Shelly Smart Plug to NextUpReef",
  description:
    "Set up a Shelly Plug US Gen4 with NextUpReef in 5 steps — no Shelly app needed. Control and automate your reef equipment directly from NextUpReef.",
  image: "https://nextupreef.com/brand/splash2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-05-23",
  dateModified: "2026-05-23",
  totalTime: "PT5M",
  supply: [
    { "@type": "HowToSupply", name: "Shelly Plug US Gen4" },
    { "@type": "HowToSupply", name: "NextUpReef Pro subscription or trial" },
    { "@type": "HowToSupply", name: "2.4GHz home WiFi network" },
  ],
  step: [
    {
      "@type": "HowToStep",
      name: "Plug it in",
      text: "Plug your Shelly Plug US Gen4 into an outlet near your tank. The front LED should slowly blink white — that means it's ready to set up.",
      position: 1,
    },
    {
      "@type": "HowToStep",
      name: "Join the plug's WiFi",
      text: "Open your phone's WiFi settings and connect to the network named ShellyPlugUSG4-XXXXXX. Return to NextUpReef — the app detects the plug automatically.",
      position: 2,
    },
    {
      "@type": "HowToStep",
      name: "Connect to your home WiFi",
      text: "Scan for networks, pick your home WiFi (2.4GHz), and enter your password.",
      position: 3,
    },
    {
      "@type": "HowToStep",
      name: "Start setup",
      text: "Tap Start Setup. NextUpReef sends your WiFi credentials to the plug, reboots it, and finds it automatically on your home network.",
      position: 4,
    },
    {
      "@type": "HowToStep",
      name: "Name it and assign to a tank",
      text: "Give the plug a name, tell NextUpReef what it controls (doser, heater, skimmer, etc.), and pick which tank it belongs to.",
      position: 5,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need the Shelly app to use a Shelly plug with NextUpReef?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. NextUpReef has a built-in setup wizard that configures the Shelly Plug US Gen4 entirely within the app. You never need to download or open the Shelly app.",
      },
    },
    {
      "@type": "Question",
      name: "What Shelly plugs work with NextUpReef?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NextUpReef is designed for the Shelly Plug US Gen4. It uses Shelly's local Gen2+ JSON-RPC API, so other Gen2+ Shelly devices may also work, but the Plug US Gen4 is the tested and supported model.",
      },
    },
    {
      "@type": "Question",
      name: "Does the plug work when I'm away from home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — schedules run on the plug itself, not through the app. Once set up, your dosing and on/off schedules keep running 24/7 whether your phone is home or not. Live control (manual on/off, power readings) requires being on the same WiFi as the plug.",
      },
    },
    {
      "@type": "Question",
      name: "What can I automate with a Shelly plug in NextUpReef?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dosers: set a daily mL amount, number of doses per day, and days of the week — NextUpReef calculates the burst duration and programs the plug automatically. Lights and other equipment: set a simple on/off schedule. All schedules run on the device, so they work even when your phone is off.",
      },
    },
    {
      "@type": "Question",
      name: "Does NextUpReef track my dosing history?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. When you save a dosing schedule, NextUpReef registers a webhook on the plug. Every time the doser relay fires, the plug reports it back and NextUpReef logs a confirmed dose event. Your History tab fills automatically — no manual logging required.",
      },
    },
  ],
};

export default function HowToAddShellyPage() {
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

      <div style={{ maxWidth: 740, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* Back link */}
        <div style={{ marginBottom: 28 }}>
          <Link
            href="/blog"
            style={{ fontSize: 13, fontWeight: 700, color: "#0EA5E9", textDecoration: "none" }}
          >
            ← Back to Blog
          </Link>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{
            display: "inline-block",
            backgroundColor: "#F0FAFF",
            border: "1px solid #BAE6FD",
            borderRadius: 999,
            padding: "4px 14px",
            fontSize: 12,
            fontWeight: 800,
            color: "#0EA5E9",
            marginBottom: 16,
            letterSpacing: "0.03em",
          }}>
            CONTROL CENTER · PRO FEATURE
          </div>
          <h1 style={{
            fontSize: "clamp(26px, 5vw, 38px)",
            fontWeight: 900,
            color: "#0F172A",
            lineHeight: 1.2,
            margin: "0 0 16px",
          }}>
            How to Add a Shelly Smart Plug to NextUpReef
          </h1>
          <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.7, margin: 0 }}>
            Automate your doser, heater, skimmer, or return pump straight from your reef tracker —
            no Shelly app needed. Setup takes about 5 minutes.
          </p>
          <div style={{ marginTop: 16, fontSize: 13, color: "#94A3B8", fontWeight: 700 }}>
            May 23, 2026 · NextUpReef Team
          </div>
        </div>

        {/* What you need */}
        <div style={{
          backgroundColor: "#F8FAFC",
          border: "1px solid #E2E8F0",
          borderRadius: 14,
          padding: "20px 24px",
          marginBottom: 40,
        }}>
          <p style={{ fontSize: 13, fontWeight: 900, color: "#0F172A", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            What you need
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              ["📦", "Shelly Plug US Gen4 (available on Amazon)"],
              ["🐠", "NextUpReef app with a Pro subscription or active trial"],
              ["📶", "Your home WiFi network name and password (2.4GHz)"],
            ].map(([icon, text]) => (
              <li key={text as string} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, color: "#334155", fontWeight: 700 }}>
                <span style={{ fontSize: 16 }}>{icon}</span>
                <span>{text as string}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Intro */}
        <p style={{ fontSize: 15, color: "#334155", lineHeight: 1.75, marginBottom: 40 }}>
          NextUpReef's Control Center lets you manage Shelly smart outlets directly —
          turning equipment on and off, setting automated schedules, and tracking dosing history.
          The setup wizard in the app handles everything: connecting the plug to your WiFi,
          assigning it to your tank, and configuring it for the right equipment type.
          All communication happens over your local network, so your reef keeps running
          even when the cloud is down.
        </p>

        {/* Step-by-step */}
        <h2 style={{ fontSize: 22, fontWeight: 900, color: "#0F172A", margin: "0 0 28px" }}>
          Step-by-step setup
        </h2>

        {/* STEP 0 — Navigate to Outlets */}
        <StepBlock
          number="0"
          label="Open Smart Outlets"
          intro="From the drawer menu, tap Control Center, then Shelly Smart Outlets. Tap + Add in the top right corner to launch the setup wizard."
          screenshot="/blog/shelly-setup/shelly-step-outlets.png"
          screenshotAlt="Shelly Smart Outlets screen showing the All-for-reef doser outlet and an Add button"
          tip="You can also reach Smart Outlets from the Devices section in the drawer."
        />

        {/* STEP 1 */}
        <StepBlock
          number="1"
          label="Plug it in"
          intro="Plug your Shelly Plug US Gen4 into a wall outlet near your tank. The LED on the front should slowly blink white — that means it's in setup mode and ready to pair."
          screenshot="/blog/shelly-setup/shelly-step-1.png"
          screenshotAlt="Step 1: Plug it in — app screen showing instructions to plug in the Shelly and look for a blinking white LED"
          tip="If the LED isn't blinking white, hold the button on the front for 10 seconds to factory reset it, then unplug and plug back in."
        />

        {/* STEP 2 */}
        <StepBlock
          number="2"
          label="Join the plug's WiFi"
          intro={
            <>
              Tap <strong>Open WiFi Settings</strong>. Your phone will open the system WiFi picker.
              Look for a network named <strong>ShellyPlugUSG4-XXXXXX</strong> (the X's will be
              letters and numbers unique to your plug) — it's an open network with no password.
              Connect to it, then switch back to NextUpReef.
            </>
          }
          screenshot="/blog/shelly-setup/shelly-step-2-checking.png"
          screenshotAlt="Step 2: Join the plug's WiFi — app showing Open WiFi Settings button and Checking status"
          screenshot2="/blog/shelly-setup/shelly-step-2-connected.png"
          screenshot2Alt="Step 2 success: Connected to plug — app showing the plug ID shellyplugusg4-acebe6f4cc0c detected"
          tip="The app polls automatically. Once it detects the plug, you'll see 'Connected to plug' with the device ID. Tap Next."
        />

        {/* STEP 3 */}
        <StepBlock
          number="3"
          label="Connect to your home WiFi"
          intro="Tap Scan for networks. NextUpReef asks the plug to scan nearby WiFi networks and shows them sorted by signal strength. Pick your home network and enter your password."
          screenshot="/blog/shelly-setup/shelly-step-3.png"
          screenshotAlt="Step 3: Connect to your home WiFi — app showing Scan for networks button with 2.4GHz note"
          tip="The Shelly Plug US Gen4 only supports 2.4GHz WiFi — not 5GHz. Most home routers broadcast both bands; pick the 2.4GHz version of your network name if you see two options."
        />

        {/* STEP 4 */}
        <StepBlock
          number="4"
          label="Start Setup"
          intro="Tap Start Setup. NextUpReef sends your WiFi credentials to the plug over the local connection, then the plug reboots and joins your home network. This usually takes about a minute. The app then scans your network to find the plug automatically by its hardware ID."
          screenshot="/blog/shelly-setup/shelly-step-4.png"
          screenshotAlt="Step 4: Setting up — app showing Start Setup button and explanation that plug will reboot and rejoin home network"
          tip="While the plug reboots, switch your phone back to your home WiFi — the app needs to be on the same network to find the plug after it comes back online."
        />

        {/* STEP 5 */}
        <StepBlock
          number="5"
          label="Name it and assign to a tank"
          intro="Once the plug is found on your network, you'll see its IP address confirmed. Give the outlet a name, tell NextUpReef what it controls, and pick which tank it belongs to. Then tap Finish Setup."
          screenshot="/blog/shelly-setup/shelly-step-5a.png"
          screenshotAlt="Step 5: One last thing — naming the outlet, picking equipment type and tank"
          tip={null}
        />

        {/* Equipment types callout */}
        <div style={{
          backgroundColor: "#F0FAFF",
          border: "1px solid #BAE6FD",
          borderRadius: 14,
          padding: "20px 24px",
          margin: "12px 0 48px",
        }}>
          <p style={{ fontSize: 13, fontWeight: 900, color: "#0F172A", margin: "0 0 14px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            What each equipment type does
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              ["⚕️", "Doser", "Unlocks the full dosing schedule editor. Set daily mL, doses per day, and days of the week. NextUpReef calculates burst durations and programs the plug automatically. Dosing history is logged in real time via webhook."],
              ["🔥", "Heater", "Shows the heater icon and wattage in the Control Center. Manual on/off and live power monitoring."],
              ["💧", "Skimmer", "Skimmer icon and controls. Useful for Feed Mode — skimmers can be auto-paused when you feed so they don't pull surface film."],
              ["💡", "Light", "Unlocks the on/off schedule editor for simple timed lighting. Set an on-time and off-time; the schedule runs on the plug 24/7."],
              ["↕️", "Return Pump", "Return pump icon and controls. Can be included in Feed Mode to bulk-pause flow while you feed."],
              ["⚡", "Other", "Generic icon. Use for anything that doesn't fit the above — reactors, UV sterilizers, fans, feeders."],
            ].map(([icon, label, desc]) => (
              <div key={label as string} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>{icon}</span>
                <div>
                  <span style={{ fontSize: 14, fontWeight: 900, color: "#0F172A" }}>{label as string} — </span>
                  <span style={{ fontSize: 14, color: "#475569", lineHeight: 1.6 }}>{desc as string}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What happens after */}
        <h2 style={{ fontSize: 22, fontWeight: 900, color: "#0F172A", margin: "0 0 16px" }}>
          What happens after setup
        </h2>
        <p style={{ fontSize: 15, color: "#334155", lineHeight: 1.75, marginBottom: 16 }}>
          Once set up, your outlet appears in the Control Center and the Shelly Smart Outlets list.
          From there you can:
        </p>
        <ul style={{ padding: "0 0 0 20px", margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            "Toggle the outlet on or off manually from the app",
            "Set a dosing schedule (for dosers) — NextUpReef programs the plug and logs every dose automatically",
            "Set an on/off schedule (for lights and other equipment)",
            "See live wattage and online/offline status when you're on the same WiFi",
            "Use Feed Mode to pause all opted-in outlets at once while you feed your tank",
          ].map((item) => (
            <li key={item} style={{ fontSize: 15, color: "#334155", lineHeight: 1.65 }}>
              {item}
            </li>
          ))}
        </ul>

        {/* Schedules run on device callout */}
        <div style={{
          backgroundColor: "#F0FDF4",
          border: "1px solid #BBF7D0",
          borderRadius: 14,
          padding: "18px 22px",
          marginBottom: 48,
          display: "flex",
          gap: 12,
          alignItems: "flex-start",
        }}>
          <span style={{ fontSize: 20, flexShrink: 0 }}>✅</span>
          <div>
            <p style={{ fontSize: 14, fontWeight: 900, color: "#166534", margin: "0 0 4px" }}>
              Schedules run on the plug — not the app
            </p>
            <p style={{ fontSize: 14, color: "#166534", margin: 0, lineHeight: 1.6 }}>
              Once you save a schedule, it lives on the Shelly plug itself. Your dosing
              and equipment schedules keep running 24/7 even when your phone is off,
              the app is closed, or you're away from home.
            </p>
          </div>
        </div>

        {/* Dosing history section */}
        <h2 style={{ fontSize: 22, fontWeight: 900, color: "#0F172A", margin: "0 0 16px" }}>
          Dosing history — automatic, no manual logging
        </h2>
        <p style={{ fontSize: 15, color: "#334155", lineHeight: 1.75, marginBottom: 32 }}>
          When you save a dosing schedule, NextUpReef also registers a webhook on the plug.
          Every time the doser relay closes, the plug reports the dose back to NextUpReef
          in real time. Your History tab fills automatically — you don't have to log
          anything manually. If the plug hasn't drawn any power for 26+ hours, the app
          will alert you that the doser may not be running.
        </p>


        {/* Managing your outlet */}
        <h2 style={{ fontSize: 22, fontWeight: 900, color: '#0F172A', margin: '0 0 16px' }}>
          Managing an outlet after setup
        </h2>
        <p style={{ fontSize: 15, color: '#334155', lineHeight: 1.75, marginBottom: 20 }}>
          Tap the gear icon on any outlet card to open Outlet Settings. From there you can:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 48 }}>
          {[
            ['Rename it', 'Change the outlet name. The new name updates everywhere it appears in the app automatically.'],
            ['Change what it controls', 'Switch it from Doser to Heater, Light, Return Pump, or Other. This changes which schedule tools and icons are shown for that outlet.'],
            ['Clear Everything on This Outlet', 'Wipes every schedule off the physical outlet and removes dosing and lighting schedules from the app. The outlet stays connected at its IP address. Use this to repurpose an outlet for something new.'],
            ['Remove This Outlet', 'Removes the outlet from NextUpReef only. The physical Shelly plug is untouched and can be added again any time by going through the Add Outlet wizard.'],
            ['Factory Reset Plug', 'Sends a factory reset command to the physical plug. This wipes its WiFi config and all settings. The plug drops off your network and the outlet is removed from NextUpReef. Use this if you want to move the plug to a different network or start completely fresh.'],
          ].map(([label, desc]) => (
            <div key={label} style={{ display: 'flex', gap: 14, padding: '16px 18px', backgroundColor: '#F8FAFC', borderRadius: 12, border: '1px solid #E2E8F0' }}>
              <div style={{ width: 8, height: 8, borderRadius: 999, backgroundColor: '#0EA5E9', flexShrink: 0, marginTop: 6 }} />
              <div>
                <p style={{ fontSize: 14, fontWeight: 900, color: '#0F172A', margin: '0 0 4px' }}>{label}</p>
                <p style={{ fontSize: 14, color: '#475569', margin: 0, lineHeight: 1.6 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Troubleshooting */}
        <h2 style={{ fontSize: 22, fontWeight: 900, color: '#0F172A', margin: '0 0 16px' }}>
          Troubleshooting
        </h2>
        <p style={{ fontSize: 15, color: '#334155', lineHeight: 1.75, marginBottom: 24 }}>
          Everything in NextUpReef talks to Shelly outlets over your local network. No Shelly app or cloud account needed. If something isn't working, work through these in order.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 48 }}>
          {[
            {
              problem: "App says outlet is Unreachable",
              solutions: [
                "Make sure your phone is on the same WiFi network as the outlet. If you're on cellular or a different network, the app can't reach it.",
                "Check that the outlet has power and the LED is solid (not blinking). A blinking LED usually means it's in setup mode.",
                "Check your router's device list to confirm the outlet's IP hasn't changed. If it has, remove the outlet in NextUpReef and add it again.",
                "Some routers block device-to-device communication (AP isolation or client isolation setting). If your outlet never shows as Online, check your router settings and disable client isolation if it's on.",
              ]
            },
            {
              problem: "Setup wizard got stuck at Step 4 (couldn't find the outlet on home network)",
              solutions: [
                "After the outlet reboots, make sure your phone switches back to your home WiFi automatically. Some phones stay on the outlet's AP WiFi temporarily.",
                "The outlet only supports 2.4GHz WiFi. If you entered credentials for a 5GHz-only network, the outlet won't join. Go back to Step 3 and pick the 2.4GHz version of your network.",
                "If your router assigns IPs via DHCP, the outlet may take up to 60 seconds to appear. Tap Start Setup again if the first attempt timed out.",
              ]
            },
            {
              problem: "Dosing history isn't filling in",
              solutions: [
                "Open the outlet detail, go to the Schedule tab, and tap Save (without changing anything). This re-registers the webhook on the outlet so it reports each dose back to NextUpReef.",
                "The outlet needs internet access to call the NextUpReef webhook. Make sure your home network has internet connectivity.",
                "Check that your outlet's equipment type is set to Doser in Outlet Settings. Only doser-type outlets have webhook-based history logging.",
              ]
            },
            {
              problem: "LED is blinking white / outlet won't join home WiFi",
              solutions: [
                "A slow blinking white LED means the outlet is in setup mode (AP mode). This usually means the WiFi credentials weren't saved. Run the Add Outlet wizard again from the start.",
                "If the outlet still won't connect after two attempts, hold the button on the front for 10 seconds until the LED changes, release, then unplug and plug back in. This factory resets it and puts it back in setup mode.",
                "Double-check your WiFi password. The outlet gives no error if the password is wrong; it simply fails to join and goes back to blinking.",
              ]
            },
            {
              problem: "Android shows a 'Set up your device' pop-up for the outlet",
              solutions: [
                "This is Android (Google Home) detecting a new Matter-capable device on your network. Tap 'Not now' or 'Dismiss'. NextUpReef manages this outlet directly via local API, so no Matter setup is needed.",
                "The pop-up should stop appearing after a few days. NextUpReef automatically disables Matter advertising on new outlets during setup to prevent this, but it may appear briefly on first boot.",
              ]
            },
          ].map((item) => (
            <div key={item.problem} style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 14, overflow: 'hidden' }}>
              <div style={{ padding: '14px 18px', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                <p style={{ fontSize: 14, fontWeight: 900, color: '#0F172A', margin: 0 }}>{item.problem}</p>
              </div>
              <ul style={{ margin: 0, padding: '14px 18px 14px 34px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {item.solutions.map((s, i) => (
                  <li key={i} style={{ fontSize: 14, color: '#475569', lineHeight: 1.65 }}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: 22, fontWeight: 900, color: "#0F172A", margin: "0 0 24px" }}>
          Frequently asked questions
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 56 }}>
          {faqSchema.mainEntity.map((faq) => (
            <div
              key={faq.name}
              style={{
                borderBottom: "1px solid #E2E8F0",
                paddingBottom: 20,
              }}
            >
              <p style={{ fontSize: 15, fontWeight: 900, color: "#0F172A", margin: "0 0 8px" }}>
                {faq.name}
              </p>
              <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.7, margin: 0 }}>
                {faq.acceptedAnswer.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          backgroundColor: "#0EA5E9",
          borderRadius: 16,
          padding: "32px 28px",
          textAlign: "center",
        }}>
          <p style={{ fontSize: 20, fontWeight: 900, color: "white", margin: "0 0 8px" }}>
            Ready to automate your reef?
          </p>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", margin: "0 0 22px", lineHeight: 1.6 }}>
            Shelly smart outlets are a NextUpReef Pro feature. All new users get a free 30-day Pro trial.
          </p>
          <a
            href="https://apps.apple.com/us/app/nextupreef/id6760728959"
            style={{
              display: "inline-block",
              backgroundColor: "white",
              color: "#0EA5E9",
              fontWeight: 900,
              fontSize: 15,
              padding: "13px 28px",
              borderRadius: 10,
              textDecoration: "none",
            }}
          >
            Download NextUpReef — Free
          </a>
        </div>

      </div>
    </>
  );
}

// ─── Reusable step block ───────────────────────────────────────────────────────

function StepBlock({
  number,
  label,
  intro,
  screenshot,
  screenshotAlt,
  screenshot2,
  screenshot2Alt,
  tip,
}: {
  number: string;
  label: string;
  intro: React.ReactNode;
  screenshot: string;
  screenshotAlt: string;
  screenshot2?: string;
  screenshot2Alt?: string;
  tip: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 48 }}>
      {/* Step header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 999,
          backgroundColor: "#0EA5E9",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <span style={{ fontSize: 14, fontWeight: 900, color: "white" }}>{number}</span>
        </div>
        <h3 style={{ fontSize: 18, fontWeight: 900, color: "#0F172A", margin: 0 }}>{label}</h3>
      </div>

      {/* Intro text */}
      <p style={{ fontSize: 15, color: "#334155", lineHeight: 1.75, margin: "0 0 20px", paddingLeft: 44 }}>
        {intro}
      </p>

      {/* Screenshot(s) */}
      <div style={{
        display: "flex",
        gap: 16,
        justifyContent: screenshot2 ? "center" : "flex-start",
        paddingLeft: screenshot2 ? 0 : 44,
        marginBottom: tip ? 16 : 0,
      }}>
        <div style={{
          borderRadius: 20,
          overflow: "hidden",
          border: "1px solid #E2E8F0",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          maxWidth: screenshot2 ? 200 : 260,
          flexShrink: 0,
        }}>
          <img
            src={screenshot}
            alt={screenshotAlt}
            style={{ width: "100%", display: "block" }}
          />
        </div>
        {screenshot2 && (
          <div style={{
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid #E2E8F0",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            maxWidth: 200,
            flexShrink: 0,
          }}>
            <img
              src={screenshot2}
              alt={screenshot2Alt}
              style={{ width: "100%", display: "block" }}
            />
          </div>
        )}
      </div>

      {/* Tip */}
      {tip && (
        <div style={{
          display: "flex",
          gap: 10,
          padding: "12px 16px",
          backgroundColor: "#FFFBEB",
          border: "1px solid #FDE68A",
          borderRadius: 10,
          marginLeft: 44,
        }}>
          <span style={{ fontSize: 15, flexShrink: 0 }}>💡</span>
          <p style={{ fontSize: 13, color: "#92400E", fontWeight: 700, margin: 0, lineHeight: 1.6 }}>
            {tip}
          </p>
        </div>
      )}
    </div>
  );
}
