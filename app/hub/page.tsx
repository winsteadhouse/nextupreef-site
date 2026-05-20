import type { Metadata } from "next";
import Link from "next/link";
import HubWaitlistForm from "@/components/HubWaitlistForm";

export const metadata: Metadata = {
  title: "NextUpReef Hub — The Reef Controller Without the Lock-In",
  description:
    "A modern reef tank controller with included temperature and pH probes, Wi-Fi smart plug support, 24/7 monitoring, and AI Reef Advisor — your whole reef in one app. Join the pre-order waitlist.",
  alternates: { canonical: "https://nextupreef.com/hub" },
  openGraph: {
    title: "NextUpReef Hub — The Reef Controller Without the Lock-In",
    description:
      "Temperature + pH probes included. Wi-Fi smart plug support. AI Reef Advisor. Your whole reef in one app.",
    url: "https://nextupreef.com/hub",
    images: [{ url: "/brand/splash2.png", width: 1200, height: 630 }],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "NextUpReef Hub",
  description:
    "Reef aquarium controller with included temperature and pH probes, Wi-Fi smart plug support, 24/7 monitoring, and AI Reef Advisor integration with the NextUpReef app.",
  image: "https://nextupreef.com/brand/splash2.png",
  brand: { "@type": "Brand", name: "NextUpReef" },
  category: "Aquarium Controller",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    priceCurrency: "USD",
    price: "0",
    priceSpecification: {
      "@type": "PriceSpecification",
      description: "Pricing to be announced. Join the pre-order waitlist for first access.",
    },
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
      "text": "The NextUpReef Hub is a small, dedicated controller that lives on your tank. It comes with temperature and pH probes, monitors your reef around the clock, and works with Wi-Fi smart plugs so you can control dosing pumps, heaters, skimmers, and lights \u2014 all from the NextUpReef app you already use. No separate Fusion-style cloud account required."
    }
  },
  {
    "@type": "Question",
    "name": "How is the Hub different from the Neptune Apex?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Three big things. First, probes are included in the price \u2014 Apex sells probes and probe modules separately. Second, the Hub uses inexpensive Wi-Fi smart plugs (around $15 each) instead of Apex's EnergyBar 832 (around $220). Third, the Hub connects directly to the NextUpReef app, so there's no separate Fusion account to manage on top."
    }
  },
  {
    "@type": "Question",
    "name": "When will the Hub ship?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We're finalizing hardware now and opening a pre-order waitlist. Early reefers on the list will get first pick \u2014 and a few will get devices at cost in exchange for setup feedback. Join the waitlist to be notified the moment pre-orders open."
    }
  },
  {
    "@type": "Question",
    "name": "Do I need a NextUpReef Pro subscription to use the Hub?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You'll need NextUpReef Pro for the AI Reef Advisor, advanced analytics, and automation features the Hub unlocks. Pro is $4.99/month or $39.99/year. The Hub itself is a one-time hardware purchase."
    }
  },
  {
    "@type": "Question",
    "name": "Can I keep using my existing Apex?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. NextUpReef already supports Neptune Apex sync \u2014 your probes pull straight into the app. The Hub is for reefers who want to add automation, replace an aging controller, or skip the Apex ecosystem entirely. You don't have to choose."
    }
  }
],
};

export default function HubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section style={{ padding: "80px 20px 40px", textAlign: "center", maxWidth: "960px", margin: "0 auto" }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 14px",
            borderRadius: "999px",
            background: "rgba(44,196,214,0.10)",
            border: "1px solid rgba(44,196,214,0.25)",
            color: "var(--reef)",
            fontWeight: 900,
            fontSize: "12px",
            letterSpacing: "0.6px",
            marginBottom: "22px",
          }}
        >
          ⚡ PRE-ORDER WAITLIST OPEN
        </div>
        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            margin: "0 0 18px 0",
          }}
        >
          Your whole reef,{" "}
          <span
            style={{
              background: "linear-gradient(135deg, var(--reef) 0%, var(--reef-soft) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            in one app
          </span>
        </h1>
        <p style={{ fontSize: "19px", color: "var(--text-muted)", lineHeight: 1.55, maxWidth: "680px", margin: "0 auto 32px" }}>
          Temperature and pH probes included. Add Wi-Fi smart plugs for dosing pumps, heaters, lights, and skimmers. Every reading, every alert, every adjustment lives in the NextUpReef app — powered by the AI Reef Advisor.
        </p>
        <div style={{ maxWidth: "480px", margin: "0 auto" }}>
          <HubWaitlistForm />
        </div>
      </section>

      {/* PRICE TBD BANNER */}
      <section style={{ padding: "0 20px 60px", maxWidth: "720px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            padding: "14px 20px",
            borderRadius: "14px",
            background: "rgba(234,179,8,0.06)",
            border: "1px solid rgba(234,179,8,0.20)",
            color: "var(--text-muted)",
            fontSize: "14px",
            textAlign: "center",
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: "16px" }}>💰</span>
          <span>
            <strong style={{ color: "var(--yellow)" }}>Pricing TBD</strong> — we&apos;re finalizing hardware costs and will share the launch price with the waitlist first.
          </span>
        </div>
      </section>

      {/* WHAT IT IS — feature cards */}
      <section style={{ padding: "40px 20px 60px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="section-label">WHAT&apos;S IN THE BOX</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, margin: "12px 0 8px" }}>
            A complete reef controller, ready out of the box
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "16px", maxWidth: "640px", margin: "0 auto" }}>
            No add-on modules. No probe-by-probe upsells. Just plug it in and let your tank live in the cloud — on your terms.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
          }}
        >
          {[
            {
              icon: "🌡️",
              title: "Temperature & pH probes",
              body: "Precision probes included. Live readings every few seconds, full history charted in the app.",
            },
            {
              icon: "⚡",
              title: "Add smart plugs",
              body: "Use inexpensive Wi-Fi smart plugs for dosing pumps, heaters, skimmers, and lights — all controlled from one app.",
            },
            {
              icon: "☁️",
              title: "24/7 monitoring",
              body: "The Hub syncs your reef data around the clock. Check status from work, vacation, or anywhere with a connection.",
            },
            {
              icon: "✨",
              title: "AI Reef Advisor built in",
              body: "Live probe data feeds NextUpReef&apos;s AI for personalized recommendations and proactive alerts.",
            },
          ].map((f) => (
            <div
              key={f.title}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "22px",
              }}
            >
              <div style={{ fontSize: "30px", marginBottom: "10px" }}>{f.icon}</div>
              <div style={{ fontSize: "17px", fontWeight: 900, color: "var(--text-light)", marginBottom: "6px" }}>
                {f.title}
              </div>
              <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.55 }}>{f.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ padding: "40px 20px 80px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div className="section-label">HUB vs APEX EL</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, margin: "12px 0 8px" }}>
            How does it compare?
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "16px", maxWidth: "640px", margin: "0 auto" }}>
            Side by side with the Neptune Apex EL, the most common entry-level reef controller.
          </p>
        </div>

        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: "8px 16px",
            overflow: "hidden",
          }}
        >
          {[
            { label: "Starting price", hub: "TBD (pre-order)", apex: "$400+" },
            { label: "Temperature + pH probes", hub: "Included", apex: "Sold separately" },
            { label: "Smart outlets", hub: "Smart plug (~$15 each)", apex: "EnergyBar 832 (~$220)" },
            { label: "Mobile app", hub: "NextUpReef (modern)", apex: "Fusion / ReefBeat" },
            { label: "AI Reef Advisor", hub: "✓ Built in", apex: "—" },
            { label: "Community + reef scores", hub: "✓ Built in", apex: "—" },
            { label: "Cloud-free dosing", hub: "✓", apex: "Requires Fusion" },
            { label: "24/7 remote access", hub: "✓ Included", apex: "Requires Fusion" },
          ].map((row, i) => (
            <div
              key={row.label}
              style={{
                display: "grid",
                gridTemplateColumns: "1.4fr 1fr 1fr",
                gap: "12px",
                padding: "14px 0",
                borderBottom: i < 7 ? "1px solid var(--border)" : "none",
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-muted)" }}>{row.label}</div>
              <div style={{ fontSize: "14px", fontWeight: 900, color: "var(--reef)", textAlign: "center" }}>{row.hub}</div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-muted)", textAlign: "center" }}>{row.apex}</div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "13px", marginTop: "16px", fontStyle: "italic" }}>
          Want the full breakdown? Read{" "}
          <Link href="/blog/nextupreef-hub-vs-neptune-apex" style={{ color: "var(--reef)", fontWeight: 700 }}>
            our deep-dive on Hub vs Neptune Apex EL →
          </Link>
        </p>
      </section>

      {/* MID-PAGE CTA */}
      <section style={{ padding: "40px 20px", maxWidth: "720px", margin: "0 auto" }}>
        <div
          style={{
            background: "linear-gradient(135deg, rgba(44,196,214,0.08) 0%, rgba(142,233,242,0.04) 100%)",
            border: "1px solid rgba(44,196,214,0.25)",
            borderRadius: "20px",
            padding: "32px 28px",
            textAlign: "center",
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

      {/* FAQ */}
      <section style={{ padding: "60px 20px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div className="section-label">QUESTIONS</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 900, margin: "12px 0 8px" }}>
            Frequently asked
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
            <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>What is the NextUpReef Hub?</summary>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>The NextUpReef Hub is a small, dedicated controller that lives on your tank. It comes with temperature and pH probes, monitors your reef around the clock, and works with Wi-Fi smart plugs so you can control dosing pumps, heaters, skimmers, and lights — all from the NextUpReef app you already use. No separate Fusion-style cloud account required.</p>
          </details>
          <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
            <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>How is the Hub different from the Neptune Apex?</summary>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>Three big things. First, probes are included in the price — Apex sells probes and probe modules separately. Second, the Hub uses inexpensive Wi-Fi smart plugs (around $15 each) instead of Apex's EnergyBar 832 (around $220). Third, the Hub connects directly to the NextUpReef app, so there's no separate Fusion account to manage on top.</p>
          </details>
          <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
            <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>When will the Hub ship?</summary>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>We're finalizing hardware now and opening a pre-order waitlist. Early reefers on the list will get first pick — and a few will get devices at cost in exchange for setup feedback. Join the waitlist to be notified the moment pre-orders open.</p>
          </details>
          <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
            <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>Do I need a NextUpReef Pro subscription to use the Hub?</summary>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>You'll need NextUpReef Pro for the AI Reef Advisor, advanced analytics, and automation features the Hub unlocks. Pro is $4.99/month or $39.99/year. The Hub itself is a one-time hardware purchase.</p>
          </details>
          <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
            <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>Can I keep using my existing Apex?</summary>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>Yes. NextUpReef already supports Neptune Apex sync — your probes pull straight into the app. The Hub is for reefers who want to add automation, replace an aging controller, or skip the Apex ecosystem entirely. You don't have to choose.</p>
          </details>
        </div>
      </section>
    </>
  );
}
