import type { Metadata } from "next";
import Link from "next/link";
import HubWaitlistForm from "@/components/HubWaitlistForm";

export const metadata: Metadata = {
  title: "NextUpReef Hub — Control Your Whole Reef From One App",
  description:
    "The NextUpReef Hub connects your reef tank to the NextUpReef app — live probe readings, smart-plug control, leak sensors, and AI-powered alerts. Works standalone or with your existing Neptune Apex. Join the pre-order waitlist.",
  alternates: { canonical: "https://nextupreef.com/hub" },
  openGraph: {
    title: "NextUpReef Hub — Control Your Whole Reef From One App",
    description:
      "Live probe readings, smart-plug control, leak sensors, and AI alerts — your whole reef tank in the NextUpReef app. Works standalone or with an existing Apex.",
    url: "https://nextupreef.com/hub",
    images: [{ url: "/brand/splash2.png", width: 1200, height: 630 }],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "NextUpReef Hub",
  description:
    "Reef aquarium controller that connects your tank to the NextUpReef app — live pH and temperature readings, smart-plug equipment control, leak sensors, and AI Reef Advisor integration. Works standalone or alongside an existing Neptune Apex.",
  image: "https://nextupreef.com/brand/splash2.png",
  brand: { "@type": "Brand", name: "NextUpReef" },
  category: "Aquarium Controller",
  offers: {
    "@type": "AggregateOffer",
    availability: "https://schema.org/PreOrder",
    priceCurrency: "USD",
    lowPrice: "179",
    highPrice: "379",
    offerCount: 2,
    url: "https://nextupreef.com/hub",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
  {
    "@type": "Question",
    "name": "What is the NextUpReef Hub?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The NextUpReef Hub is a small device that connects your reef tank to the NextUpReef app. It brings live probe readings, smart-plug control, and alerts together in one place \u2014 monitoring, trending, and the AI Reef Advisor you already use, now driven by real-time data."
    }
  },
  {
    "@type": "Question",
    "name": "What hardware does the Hub run on?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Hub is a dedicated device built on a Raspberry Pi 5 \u2014 proven, industry-standard hardware \u2014 running the NextUpReef software made specifically for reef monitoring and control. It plugs into power, joins your home Wi-Fi, and runs on its own around the clock, independent of your phone."
    }
  },
  {
    "@type": "Question",
    "name": "I already have a Neptune Apex. Can the Hub work with it?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes \u2014 that's exactly what the standalone Hub is for. It connects to your existing Apex and streams your live pH, temperature, Trident, and other readings straight into the NextUpReef app in real time. You keep your Apex; you just get a better app experience on top of it. This is the lowest-cost way to start."
    }
  },
  {
    "@type": "Question",
    "name": "How much does the NextUpReef Hub cost?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "There are two options. The NextUpReef Hub is $179 \u2014 the standalone Hub device, ideal if you already have probes or a Neptune Apex. The NextUpReef Hub Complete is $379 and includes the Hub, a lab-grade pH probe, a temperature monitor, and two smart plugs. Both are one-time hardware purchases. The app runs on NextUpReef Pro at $4.99/month, with a discount for paying yearly."
    }
  },
  {
    "@type": "Question",
    "name": "What comes in the NextUpReef Hub Complete?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The $379 NextUpReef Hub Complete includes the Hub device, a lab-grade pH probe, a temperature monitor, and two smart plugs. The smart plugs let you monitor and control equipment like a heater, dosing pump, return pump, or anything else you want automated \u2014 all from the app."
    }
  },
  {
    "@type": "Question",
    "name": "Can I add more later?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. You can add more smart plugs, leak sensors, and other accessories any time. Start with what you need and expand as your tank grows \u2014 everything new shows up in the NextUpReef app automatically."
    }
  },
  {
    "@type": "Question",
    "name": "What happens if my power, Wi-Fi, or phone goes down?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Your tank keeps running. The smart plugs store their schedules locally on the device itself \u2014 so if the internet drops, your phone dies, or the cloud is unreachable, your heater and dosing pump keep running exactly as scheduled. The cloud is there for you to monitor; it is never a single point of failure for your tank."
    }
  },
  {
    "@type": "Question",
    "name": "Do I need a NextUpReef Pro subscription?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "NextUpReef Pro unlocks the AI Reef Advisor, advanced analytics, and automation features. Pro is $4.99/month or $39.99/year. Basic monitoring works on the free tier; Pro is where the Hub really shines."
    }
  },
  {
    "@type": "Question",
    "name": "When will the Hub ship?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We're finalizing hardware now and opening a pre-order waitlist. Early reefers on the list get first pick, and a few will receive devices at cost in exchange for setup feedback. Join the waitlist to be notified the moment pre-orders open."
    }
  }
],
};

// Modern stroke-based line icons — matches the NextUpReef app aesthetic.
function HubIcon({ name }: { name: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--reef)",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "link":
      return (
        <svg {...common}>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case "box":
      return (
        <svg {...common}>
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      );
    case "plus":
      return (
        <svg {...common}>
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...common}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
          <path d="M12 7.5 13.4 10.6 16.5 12 13.4 13.4 12 16.5 10.6 13.4 7.5 12 10.6 10.6Z" />
        </svg>
      );
    case "gauge":
      return (
        <svg {...common}>
          <path d="M12 14 15.5 9.5" />
          <path d="M3 18a9 9 0 1 1 18 0" />
          <circle cx="12" cy="14" r="1.4" fill="var(--reef)" stroke="none" />
        </svg>
      );
    case "trending":
      return (
        <svg {...common}>
          <path d="M3 17 9 11l4 4 8-8" />
          <path d="M16 7h5v5" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
          <path d="M8 10h.01M12 10h.01M16 10h.01" />
        </svg>
      );
    case "bell":
      return (
        <svg {...common}>
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common} stroke="#22C55E">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "activity":
      return (
        <svg {...common}>
          <path d="M3 12h4l3 8 4-16 3 8h4" />
        </svg>
      );
    case "tag":
      return (
        <svg {...common} stroke="var(--yellow)">
          <path d="M12.6 2.7 21 11a2 2 0 0 1 0 2.8l-7.2 7.2a2 2 0 0 1-2.8 0L2.7 12.6A2 2 0 0 1 2 11V4a2 2 0 0 1 2-2h7a2 2 0 0 1 1.6.7Z" />
          <circle cx="7.5" cy="7.5" r="1.4" fill="var(--yellow)" stroke="none" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

export default function HubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ============ HERO ============ */}
      <section style={{ padding: "80px 20px 40px", textAlign: "center", maxWidth: "960px", margin: "0 auto" }}>
        <div
          style={{
            display: "inline-block", padding: "6px 14px", borderRadius: "999px",
            background: "rgba(44,196,214,0.10)", border: "1px solid rgba(44,196,214,0.25)",
            color: "var(--reef)", fontWeight: 900, fontSize: "12px", letterSpacing: "0.6px", marginBottom: "22px",
          }}
        >
          ⚡ PRE-ORDER WAITLIST OPEN
        </div>
        <h1 style={{ fontSize: "clamp(34px, 6vw, 60px)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.03em", margin: "0 0 18px 0" }}>
          Control your{" "}
          <span
            style={{
              background: "linear-gradient(135deg, var(--reef) 0%, var(--reef-soft) 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}
          >
            whole reef
          </span>
          . One app. One Hub.
        </h1>
        <p style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: 1.55, maxWidth: "600px", margin: "0 auto 16px" }}>
          The NextUpReef Hub brings your probes, equipment, and alerts into the app you already use — monitoring, trending, and AI advice, all in real time.
        </p>
        <p style={{ fontSize: "14px", fontWeight: 800, color: "var(--reef)", margin: "0 auto 32px" }}>
          Works on any reef tank — a brand-new setup or alongside a controller you already own.
        </p>
        <div style={{ maxWidth: "480px", margin: "0 auto" }}>
          <HubWaitlistForm />
        </div>
      </section>

      {/* ============ PRICING NOTE BANNER ============ */}
      <section style={{ padding: "0 20px 56px", maxWidth: "720px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
            padding: "14px 20px", borderRadius: "14px",
            background: "rgba(44,196,214,0.05)", border: "1px solid rgba(44,196,214,0.18)",
            color: "var(--text-muted)", fontSize: "14px", textAlign: "center", flexWrap: "wrap",
          }}
        >
          <HubIcon name="tag" />
          <span>
            One-time hardware purchase. The app runs on <strong style={{ color: "var(--text-light)" }}>NextUpReef Pro</strong> — $4.99/month, or save with a year up front.
          </span>
        </div>
      </section>

      {/* ============ 3 WAYS TO START ============ */}
      <section style={{ padding: "40px 20px 60px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="section-label">THREE WAYS TO START</div>
          <h2 style={{ fontSize: "clamp(27px, 4vw, 38px)", fontWeight: 900, margin: "12px 0 8px" }}>
            Start where it makes sense for your tank
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "16px", maxWidth: "620px", margin: "0 auto" }}>
            Whether you run an Apex today or you&apos;re starting fresh, there&apos;s a way in — and you can grow from there.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "16px" }}>
          {([
            {
              tag: "MOST POPULAR",
              tagColor: "var(--yellow)",
              icon: "box" as const,
              title: "NextUpReef Hub Complete",
              price: "$379",
              priceNote: "one-time",
              sub: "Everything to monitor & automate",
              body: "The Hub device, a lab-grade pH probe, a temperature monitor, and two smart plugs — ready to monitor and control a heater, dosing pump, return pump, or anything else you want automated.",
            },
            {
              tag: "LOWEST COST",
              tagColor: "var(--reef)",
              icon: "link" as const,
              title: "NextUpReef Hub",
              price: "$179",
              priceNote: "one-time",
              sub: "The standalone Hub device",
              body: "The Hub on its own — perfect if you already have probes or a Neptune Apex. Connect it and your live readings flow straight into NextUpReef, where you get an AI Reef Advisor, Reef and Stability Scores, drift detection, and the Reef Hub community. Add probes and smart plugs whenever you want.",
            },
            {
              tag: "GROW ANYTIME",
              tagColor: "#A855F7",
              icon: "plus" as const,
              title: "Add-Ons",
              price: "from $15",
              priceNote: "each",
              sub: "Expand as your tank grows",
              body: "Add more smart plugs, leak sensors, and accessories whenever you want. Start small and build out over time — everything new appears in the app automatically.",
            },
          ]).map((c) => (
            <div
              key={c.title}
              style={{
                background: "var(--bg-card)", border: "1px solid var(--border)",
                borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                <div
                  style={{
                    width: "46px", height: "46px", borderRadius: "12px",
                    background: "rgba(44,196,214,0.10)", border: "1px solid rgba(44,196,214,0.20)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <HubIcon name={c.icon} />
                </div>
                <div
                  style={{
                    fontSize: "10px", fontWeight: 900, letterSpacing: "0.7px",
                    color: c.tagColor, border: `1px solid ${c.tagColor}`,
                    padding: "3px 9px", borderRadius: "999px",
                  }}
                >
                  {c.tag}
                </div>
              </div>
              <div style={{ fontSize: "18px", fontWeight: 900, color: "var(--text-light)", marginBottom: "4px" }}>
                {c.title}
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "4px" }}>
                <span style={{ fontSize: "26px", fontWeight: 900, color: "var(--text-light)" }}>{c.price}</span>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--text-muted)" }}>{c.priceNote}</span>
              </div>
              <div style={{ fontSize: "13px", fontWeight: 800, color: c.tagColor, marginBottom: "10px" }}>
                {c.sub}
              </div>
              <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6 }}>{c.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ WHAT IS THE HUB ============ */}
      <section style={{ padding: "40px 20px 60px", maxWidth: "900px", margin: "0 auto" }}>
        <div
          style={{
            background: "var(--bg-card)", border: "1px solid var(--border)",
            borderRadius: "20px", padding: "36px 32px",
          }}
        >
          <div className="section-label" style={{ marginBottom: "10px" }}>WHAT EXACTLY IS THE HUB?</div>
          <h2 style={{ fontSize: "clamp(24px, 3.6vw, 32px)", fontWeight: 900, margin: "0 0 16px", color: "var(--text-light)" }}>
            A small piece of hardware that runs NextUpReef
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.7, margin: "0 0 16px" }}>
            The NextUpReef Hub is a dedicated device — a small box that sits by your tank, plugs into power, and joins your home Wi-Fi. It runs the <strong style={{ color: "var(--text-light)" }}>NextUpReef software</strong>, built specifically for reef monitoring and control.
          </p>
          <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.7, margin: "0 0 24px" }}>
            Unlike a phone app that only works when your phone is on, the Hub runs <strong style={{ color: "var(--text-light)" }}>on its own, around the clock</strong>. It continuously reads your probes, talks to your smart plugs, and keeps your tank data flowing — whether your phone is in your pocket, at work, or dead on the nightstand.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
            {([
              { icon: "box" as const, title: "It is hardware", body: "A physical device you own — not just an app or a cloud login." },
              { icon: "link" as const, title: "Plug in & connect", body: "Power it, join it to Wi-Fi, and pair it in the NextUpReef app." },
              { icon: "activity" as const, title: "Always on", body: "Runs 24/7 on its own, independent of your phone being nearby." },
            ]).map((c) => (
              <div
                key={c.title}
                style={{
                  background: "rgba(44,196,214,0.04)", border: "1px solid var(--border)",
                  borderRadius: "14px", padding: "16px",
                }}
              >
                <div
                  style={{
                    width: "38px", height: "38px", borderRadius: "10px", marginBottom: "10px",
                    background: "rgba(44,196,214,0.10)", border: "1px solid rgba(44,196,214,0.20)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <HubIcon name={c.icon} />
                </div>
                <div style={{ fontSize: "15px", fontWeight: 900, color: "var(--text-light)", marginBottom: "4px" }}>{c.title}</div>
                <div style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.5 }}>{c.body}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6, margin: "20px 0 0", fontStyle: "italic" }}>
            Built on proven, industry-standard hardware (Raspberry Pi 5) — reliable, well-supported, and not a locked-down black box.
          </p>
        </div>
      </section>

      {/* ============ WHY APEX OWNERS SWITCH APPS ============ */}
      <section style={{ padding: "40px 20px 60px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="section-label">A SMARTER APP FOR YOUR APEX</div>
          <h2 style={{ fontSize: "clamp(27px, 4vw, 38px)", fontWeight: 900, margin: "12px 0 8px" }}>
            Your Apex collects the data. NextUpReef makes sense of it.
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "16px", maxWidth: "640px", margin: "0 auto" }}>
            The Apex is great at reading your tank. Where it stops short is helping you act on what it sees — that&apos;s what NextUpReef adds.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
          {([
            {
              icon: "sparkles" as const,
              title: "AI Reef Advisor",
              body: "Reviews your parameters, trends, equipment, livestock, and dosing every day and hands you a prioritized list of what to check — something the Apex app simply doesn't do.",
            },
            {
              icon: "gauge" as const,
              title: "Reef & Stability Scores",
              body: "Two simple 0–100 scores grade your tank's health and consistency at a glance. No more reading raw graphs to know if you're on track.",
            },
            {
              icon: "trending" as const,
              title: "Drift detection",
              body: "NextUpReef watches for slow swings in alkalinity, calcium, and salinity and flags them early — before they stress your corals.",
            },
            {
              icon: "chat" as const,
              title: "Ask Reef AI",
              body: "Chat with an AI that already knows your tank — its size, livestock, parameters, and history — for answers specific to your reef.",
            },
            {
              icon: "bell" as const,
              title: "Alerts that matter",
              body: "Clear, plain-language notifications when a parameter goes out of range — not a wall of raw data to decode.",
            },
            {
              icon: "users" as const,
              title: "Reef Hub community",
              body: "See how your tank compares to similar reefs, climb the leaderboard, and learn from other reefers. The Apex app has nothing like it.",
            },
          ]).map((f) => (
            <div
              key={f.title}
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "22px" }}
            >
              <div
                style={{
                  width: "42px", height: "42px", borderRadius: "11px", marginBottom: "14px",
                  background: "rgba(44,196,214,0.10)", border: "1px solid rgba(44,196,214,0.20)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <HubIcon name={f.icon} />
              </div>
              <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "6px" }}>{f.title}</div>
              <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.55 }}>{f.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ PRICE COMPARISON ============ */}
      <section style={{ padding: "40px 20px 60px", maxWidth: "940px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div className="section-label">WHAT YOU GET FOR THE PRICE</div>
          <h2 style={{ fontSize: "clamp(27px, 4vw, 38px)", fontWeight: 900, margin: "12px 0 8px" }}>
            Hub Complete vs. a control-capable Apex
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "16px", maxWidth: "640px", margin: "0 auto" }}>
            To actually <em>control</em> equipment — not just monitor it — the closest Neptune system is the A3 Apex with its EnergyBar. Here is how the two compare.
          </p>
        </div>

        <div
          style={{
            background: "var(--bg-card)", border: "1px solid var(--border)",
            borderRadius: "18px", padding: "6px 18px", overflow: "hidden",
          }}
        >
          {/* Header row */}
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: "10px", padding: "16px 0 14px", borderBottom: "1px solid var(--border)" }}>
            <div style={{ fontSize: "11px", fontWeight: 900, color: "var(--text-muted)", letterSpacing: "0.5px" }}>&nbsp;</div>
            <div style={{ fontSize: "12px", fontWeight: 900, color: "var(--reef)", textAlign: "center", letterSpacing: "0.4px" }}>
              NEXTUPREEF<br />HUB COMPLETE
            </div>
            <div style={{ fontSize: "12px", fontWeight: 900, color: "var(--text-muted)", textAlign: "center", letterSpacing: "0.4px" }}>
              A3 APEX
            </div>
          </div>

          {/* Price row — emphasized */}
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: "10px", padding: "16px 0", borderBottom: "1px solid var(--border)", alignItems: "center" }}>
            <div style={{ fontSize: "14px", fontWeight: 800, color: "var(--text-light)" }}>Price</div>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24px", fontWeight: 900, color: "var(--reef)" }}>$379</span>
            </div>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24px", fontWeight: 900, color: "var(--text-muted)" }}>$669.99</span>
            </div>
          </div>

          {([
            ["pH probe", "Lab-grade, included", "Included"],
            ["Temperature probe", "Included", "Included"],
            ["Equipment control", "2 smart plugs included", "EnergyBar (8 outlets)"],
            ["Leak detection", "Available add-on", "Included"],
            ["Expandable", "Smart plugs & sensors", "Apex modules"],
            ["AI Reef Advisor", "Yes", "No"],
            ["Reef & Stability Scores", "Yes", "No"],
            ["Community & leaderboard", "Yes", "No"],
            ["App", "NextUpReef", "Apex Fusion"],
          ]).map((row, i, arr) => {
            const [label, hub, apex] = row;
            return (
              <div
                key={label}
                style={{
                  display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: "10px",
                  padding: "13px 0", borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none",
                  alignItems: "center",
                }}
              >
                <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-muted)" }}>{label}</div>
                <div style={{ fontSize: "13px", fontWeight: 800, color: "var(--reef)", textAlign: "center" }}>{hub}</div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-muted)", textAlign: "center" }}>{apex}</div>
              </div>
            );
          })}
        </div>

        {/* Takeaway */}
        <div
          style={{
            marginTop: "16px", padding: "16px 20px", borderRadius: "14px",
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.18)",
            fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6,
          }}
        >
          <strong style={{ color: "var(--text-light)" }}>The honest comparison:</strong> Neptune&apos;s cheaper A3 Apex Jr ($319.99) is monitor-only — it can&apos;t switch a heater or dosing pump on and off. For real equipment control you need the A3 Apex at $669.99. The Hub Complete does both monitoring and control for $379, and adds AI advice the Apex app doesn&apos;t offer.
        </div>

        {/* Legal disclaimer */}
        <p style={{ marginTop: "16px", fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.6, fontStyle: "italic" }}>
          Comparison based on pricing and specifications publicly listed by retailers as of May 2026; details may change — verify current information with the manufacturer. Neptune Systems® and Apex® are trademarks of Neptune Systems. NextUpReef is independent and is not affiliated with, endorsed by, or sponsored by Neptune Systems.
        </p>
      </section>

      {/* ============ LOCAL-FIRST SAFETY ============ */}
      <section style={{ padding: "40px 20px 60px", maxWidth: "840px", margin: "0 auto" }}>
        <div
          style={{
            background: "linear-gradient(135deg, rgba(34,197,94,0.07) 0%, rgba(34,197,94,0.02) 100%)",
            border: "1px solid rgba(34,197,94,0.22)", borderRadius: "20px", padding: "36px 32px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            <div
              style={{
                width: "42px", height: "42px", borderRadius: "11px",
                background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <HubIcon name="shield" />
            </div>
            <div style={{ fontSize: "12px", fontWeight: 900, color: "#22C55E", letterSpacing: "0.8px" }}>
              BUILT TO KEEP RUNNING
            </div>
          </div>
          <h2 style={{ fontSize: "clamp(24px, 3.6vw, 32px)", fontWeight: 900, margin: "0 0 14px", color: "var(--text-light)" }}>
            Your tank doesn&apos;t depend on the cloud
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
            The smart plugs store their schedules locally, right on the device. If your internet drops, your phone dies, or the cloud is unreachable, your heater and dosing pump keep running <strong style={{ color: "var(--text-light)" }}>exactly as scheduled</strong>. The NextUpReef app is how you watch over your reef and get alerts — it is never a single point of failure for your tank&apos;s survival.
          </p>
        </div>
      </section>

      {/* ============ MID-PAGE CTA ============ */}
      <section style={{ padding: "40px 20px", maxWidth: "720px", margin: "0 auto" }}>
        <div
          style={{
            background: "linear-gradient(135deg, rgba(44,196,214,0.08) 0%, rgba(142,233,242,0.04) 100%)",
            border: "1px solid rgba(44,196,214,0.25)", borderRadius: "20px", padding: "32px 28px", textAlign: "center",
          }}
        >
          <div style={{ fontSize: "24px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>
            Be first in line
          </div>
          <p style={{ color: "var(--text-muted)", marginBottom: "22px", fontSize: "15px", lineHeight: 1.55 }}>
            Drop your email and we&apos;ll let you know the day pre-orders open. A handful of early reefers will get devices at cost in exchange for setup feedback.
          </p>
          <HubWaitlistForm compact />
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div className="section-label">QUESTIONS</div>
          <h2 style={{ fontSize: "clamp(27px, 4vw, 36px)", fontWeight: 900, margin: "12px 0 8px" }}>
            Frequently asked
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
            <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>What is the NextUpReef Hub?</summary>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>The NextUpReef Hub is a small device that connects your reef tank to the NextUpReef app. It brings live probe readings, smart-plug control, and alerts together in one place — monitoring, trending, and the AI Reef Advisor you already use, now driven by real-time data.</p>
          </details>
          <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
            <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>What hardware does the Hub run on?</summary>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>The Hub is a dedicated device built on a Raspberry Pi 5 — proven, industry-standard hardware — running the NextUpReef software made specifically for reef monitoring and control. It plugs into power, joins your home Wi-Fi, and runs on its own around the clock, independent of your phone.</p>
          </details>
          <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
            <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>I already have a Neptune Apex. Can the Hub work with it?</summary>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>Yes — that's exactly what the standalone Hub is for. It connects to your existing Apex and streams your live pH, temperature, Trident, and other readings straight into the NextUpReef app in real time. You keep your Apex; you just get a better app experience on top of it. This is the lowest-cost way to start.</p>
          </details>
          <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
            <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>How much does the NextUpReef Hub cost?</summary>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>There are two options. The <strong style={{ color: "var(--text-light)" }}>NextUpReef Hub</strong> is $179 — the standalone Hub device, ideal if you already have probes or a Neptune Apex. The <strong style={{ color: "var(--text-light)" }}>NextUpReef Hub Complete</strong> is $379 and adds a lab-grade pH probe, a temperature monitor, and two smart plugs. Both are one-time hardware purchases. The app runs on NextUpReef Pro at $4.99/month, with a discount for paying yearly.</p>
          </details>
          <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
            <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>What comes in the NextUpReef Hub Complete?</summary>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>The $379 NextUpReef Hub Complete includes the Hub device, a lab-grade pH probe, a temperature monitor, and two smart plugs. The smart plugs let you monitor and control equipment like a heater, dosing pump, return pump, or anything else you want automated — all from the app.</p>
          </details>
          <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
            <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>Can I add more later?</summary>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>Yes. You can add more smart plugs, leak sensors, and other accessories any time. Start with what you need and expand as your tank grows — everything new shows up in the NextUpReef app automatically.</p>
          </details>
          <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
            <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>What happens if my power, Wi-Fi, or phone goes down?</summary>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>Your tank keeps running. The smart plugs store their schedules locally on the device itself — so if the internet drops, your phone dies, or the cloud is unreachable, your heater and dosing pump keep running exactly as scheduled. The cloud is there for you to monitor; it is never a single point of failure for your tank.</p>
          </details>
          <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
            <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>Do I need a NextUpReef Pro subscription?</summary>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>NextUpReef Pro unlocks the AI Reef Advisor, advanced analytics, and automation features. Pro is $4.99/month or $39.99/year. Basic monitoring works on the free tier; Pro is where the Hub really shines.</p>
          </details>
          <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
            <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>When will the Hub ship?</summary>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>We're finalizing hardware now and opening a pre-order waitlist. Early reefers on the list get first pick, and a few will receive devices at cost in exchange for setup feedback. Join the waitlist to be notified the moment pre-orders open.</p>
          </details>
        </div>
      </section>
    </>
  );
}
