import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NextUpReef Hub vs Neptune Apex EL: A Modern Reef Controller Compared (2026)",
  description:
    "Honest comparison of NextUpReef Hub and the Neptune Apex EL in 2026. Pricing, probes, smart outlets, Fusion subscription, AI features, and total cost of ownership — see which reef controller fits your tank.",
  alternates: { canonical: "https://nextupreef.com/blog/nextupreef-hub-vs-neptune-apex" },
  openGraph: {
    title: "NextUpReef Hub vs Neptune Apex EL: A Modern Reef Controller Compared (2026)",
    description:
      "Honest comparison of NextUpReef Hub vs Neptune Apex EL. Pricing, probes, smart outlets, AI features, and total cost of ownership.",
    url: "https://nextupreef.com/blog/nextupreef-hub-vs-neptune-apex",
    images: [{ url: "/brand/splash2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "NextUpReef Hub vs Neptune Apex EL: A Modern Reef Controller Compared (2026)",
  description:
    "Side-by-side comparison of NextUpReef Hub and the Neptune Apex EL — pricing, probes, smart outlets, Fusion subscription, AI features, and total cost of ownership.",
  image: "https://nextupreef.com/brand/splash2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-05-20",
  dateModified: "2026-05-20",
  mainEntityOfPage: "https://nextupreef.com/blog/nextupreef-hub-vs-neptune-apex",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
  {
    "@type": "Question",
    "name": "Is the NextUpReef Hub a Neptune Apex replacement?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "It can be, depending on your setup. The Hub covers temperature, pH, and outlet control (via Shelly Wi-Fi outlets) \u2014 the same core jobs as an Apex EL plus base modules. If you depend on Apex-specific accessories like the Trident or DOS dosing pumps, you may want to keep your Apex and let NextUpReef sync from it instead."
    }
  },
  {
    "@type": "Question",
    "name": "Why is the Hub cheaper than a Neptune Apex?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Two reasons. First, we bundle probes and outlet support that Apex sells as separate modules and accessories. Second, we don't require a cloud subscription (Apex Fusion) for remote access \u2014 your Hub talks to NextUpReef directly. There's no recurring revenue model bolted on top of the hardware."
    }
  },
  {
    "@type": "Question",
    "name": "Do I need Apex Fusion or a subscription with the Hub?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. Remote monitoring, dosing schedules, and outlet control all work through the NextUpReef app with no separate cloud subscription. NextUpReef Pro ($4.99/month or $39.99/year) unlocks the AI Reef Advisor and advanced analytics \u2014 but the controller itself doesn't require it for basic monitoring."
    }
  },
  {
    "@type": "Question",
    "name": "Will the Hub work alongside an existing Neptune Apex?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. NextUpReef already supports one-tap Apex sync \u2014 your Trident, probes, and energy bars feed straight into the app. The Hub adds extra outlet control and gives you a path away from Fusion when you're ready, but you don't have to migrate everything at once."
    }
  },
  {
    "@type": "Question",
    "name": "What about Apex Trident, DOS, and other Neptune accessories?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Trident automatically tests alkalinity, calcium, and magnesium \u2014 there's no Hub equivalent in the initial release. DOS is Neptune's dedicated dosing pump. The Hub takes a different approach: pair it with off-the-shelf Shelly Wi-Fi outlets and any third-party dosing pump or stirrer to build the same automation at a fraction of the cost."
    }
  },
  {
    "@type": "Question",
    "name": "When can I buy the NextUpReef Hub?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We're finalizing hardware and opening a pre-order waitlist now. Join the waitlist at nextupreef.com/hub to be notified the moment pre-orders open. Early waitlist signups will get first pick and a few will receive devices at cost in exchange for setup feedback."
    }
  }
],
};

export default function HubVsApexPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 20px" }}>
        {/* Breadcrumb */}
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: 700, marginBottom: "32px" }}>
          <Link href="/" style={{ color: "var(--reef)" }}>Home</Link>{" › "}
          <Link href="/blog" style={{ color: "var(--reef)" }}>Blog</Link>{" › "}
          NextUpReef Hub vs Neptune Apex EL
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Reef Controllers", "Hardware Comparison", "NextUpReef Hub", "Neptune Apex"].map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "12px", fontWeight: 700, padding: "4px 12px",
                borderRadius: "999px", background: "rgba(44,196,214,0.08)",
                border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
              }}
            >{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: 900, lineHeight: 1.2, marginBottom: "16px" }}>
          NextUpReef Hub vs Neptune Apex EL: A Modern Reef Controller Compared (2026)
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: 700, marginBottom: "48px" }}>
          Updated May 20, 2026 · 8 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: 1.8 }}>
          <p>
            For most of the past decade, if you wanted to monitor and automate a reef tank, the answer was almost always the same: buy a Neptune Apex. The platform has earned its reputation — it works, it&apos;s reliable, and Neptune has built a mature ecosystem around it. But that ecosystem has also become a moat, and a more recent generation of reefers is asking a fair question: do I really need to spend $400–$1,000+ on hardware and pay a recurring subscription just to know my temperature?
          </p>
          <p>
            We built the <strong style={{ color: "var(--text-light)" }}>NextUpReef Hub</strong> for those reefers. It&apos;s a small, modern reef controller designed around three principles: bundled probes (no à la carte upsells), inexpensive smart outlets (Shelly Wi-Fi plugs instead of $220 EnergyBars), and no cloud subscription for remote access. This post is the side-by-side comparison so you can decide which one fits your tank.
          </p>

          <div
            style={{
              background: "var(--bg-card)", border: "1px solid var(--border)",
              borderRadius: "14px", padding: "18px 22px", margin: "32px 0",
            }}
          >
            <div style={{ fontSize: "12px", fontWeight: 900, color: "var(--reef)", letterSpacing: "0.8px", marginBottom: "8px" }}>
              QUICK VERDICT
            </div>
            <p style={{ color: "var(--text-light)", margin: 0, fontSize: "15px", lineHeight: 1.7 }}>
              If you want a mature, dialed-in controller with deep integrations (Trident, DOS, third-party gear) and you don&apos;t mind paying for the ecosystem, the <strong>Neptune Apex EL</strong> is still the safe pick. If you want a modern, app-first controller with included probes, no subscription, and an AI-powered companion app, the <strong>NextUpReef Hub</strong> is the more interesting bet — especially for newer reefers and nano builds where Apex&apos;s footprint feels heavy.
            </p>
          </div>

          <h2 style={{ color: "var(--text-light)", fontSize: "28px", marginTop: "48px", marginBottom: "16px" }}>
            What you get in the box
          </h2>
          <p>
            This is the biggest difference between the two and the easiest place to start. The <strong style={{ color: "var(--text-light)" }}>Neptune Apex EL</strong> is the base unit — a brain. It does <em>not</em> include a temperature probe, a pH probe, or any outlet control hardware out of the box. Those are sold as separate Apex modules: a 1-Link probe module, individual probes, an EnergyBar 832 (eight outlets, around $220), and so on. By the time you have a working monitor with outlet control, you&apos;re comfortably north of $600.
          </p>
          <p>
            The <strong style={{ color: "var(--text-light)" }}>NextUpReef Hub</strong> ships with the temperature and pH probes already included, and outlet control happens through inexpensive Shelly Wi-Fi outlets (the <em>Shelly Plug US</em> runs around $15). You buy as many as you need — one for the heater, one for the skimmer, one for the dosing pump — and they show up in the NextUpReef app automatically. Total controllable outlets at the same dollar amount is dramatically higher.
          </p>

          <h2 style={{ color: "var(--text-light)", fontSize: "28px", marginTop: "48px", marginBottom: "16px" }}>
            The Fusion subscription question
          </h2>
          <p>
            Apex&apos;s big strength is also its biggest friction point. Apex Fusion is Neptune&apos;s cloud service — it&apos;s what powers remote access, push notifications, and most of the modern “I can check my tank from work” experience. The base account is free, but heavier features and reliable remote access have historically been tied to staying inside Neptune&apos;s ecosystem. If Fusion ever changes its pricing model or goes down (it has), your remote access goes with it.
          </p>
          <p>
            The NextUpReef Hub doesn&apos;t use a third-party cloud at all. Your Hub talks directly to the NextUpReef app, which talks to our own infrastructure. There&apos;s no Fusion-style subscription required for remote access, no “cloud-only” feature gates on the controller, and no third party between you and your tank. NextUpReef Pro ($4.99/month or $39.99/year) unlocks AI features and advanced analytics in the app — but the controller itself works without it.
          </p>

          <h2 style={{ color: "var(--text-light)", fontSize: "28px", marginTop: "48px", marginBottom: "16px" }}>
            The mobile app experience
          </h2>
          <p>
            Neptune ships two apps: Apex Fusion (the original web-based dashboard, also wrapped in a mobile app) and Apex ReefBeat (the newer app, focused on consumer-friendly features). Both work; both are functional. Both also show their age in places — dashboards optimized for desktop, log screens that feel like wizards, and limited social or community features.
          </p>
          <p>
            The <Link href="/" style={{ color: "var(--reef)", fontWeight: 700 }}>NextUpReef app</Link> was built mobile-first in 2026, with a different premise: that reefers want their app to feel like the rest of the apps on their phone. Clean reef score and stability score on the home screen. A community leaderboard. A tank journal with photos. Monthly tank photo timelines. AI-powered reef advice based on your actual logs. The Hub plugs into all of that automatically.
          </p>

          <h2 style={{ color: "var(--text-light)", fontSize: "28px", marginTop: "48px", marginBottom: "16px" }}>
            AI Reef Advisor — the feature Apex doesn&apos;t have
          </h2>
          <p>
            This is the area where the Hub pulls ahead in a way that has nothing to do with hardware specs. NextUpReef&apos;s <Link href="/blog/ai-reef-tank-advisor" style={{ color: "var(--reef)", fontWeight: 700 }}>AI Reef Advisor</Link> reviews your tank&apos;s parameter trends, equipment, livestock, dosing, and water change history every 24 hours and produces a prioritized set of findings. “Your alkalinity has been drifting up for three weeks — here&apos;s what to check.” “Your stability score dropped this month, mostly driven by salinity swings.” “Based on the corals you have, your magnesium is at the low end — here&apos;s a target range.”
          </p>
          <p>
            With the Hub, the AI gets <em>live</em> probe data instead of just the values you log by hand. That makes the advice meaningfully better. Neptune doesn&apos;t have an equivalent.
          </p>

          <h2 style={{ color: "var(--text-light)", fontSize: "28px", marginTop: "48px", marginBottom: "16px" }}>
            Total cost of ownership over 5 years
          </h2>
          <p>
            Hardware sticker price is only part of the story. Here&apos;s how the two compare when you factor in the accessories most reefers actually buy:
          </p>

          <div
            style={{
              background: "var(--bg-card)", border: "1px solid var(--border)",
              borderRadius: "14px", padding: "4px 16px", margin: "20px 0 32px",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "12px", padding: "14px 0", borderBottom: "1px solid var(--border)" }}>
              <div style={{ fontSize: "12px", fontWeight: 900, color: "var(--text-muted)", letterSpacing: "0.5px" }}>ITEM</div>
              <div style={{ fontSize: "12px", fontWeight: 900, color: "var(--reef)", textAlign: "center", letterSpacing: "0.5px" }}>HUB SETUP</div>
              <div style={{ fontSize: "12px", fontWeight: 900, color: "var(--text-muted)", textAlign: "center", letterSpacing: "0.5px" }}>APEX EL</div>
            </div>
            {[
              ["Base controller", "TBD", "~$400"],
              ["Temp + pH probes", "Included", "~$140"],
              ["Outlet control (8 channels)", "~$120 (8 Shellys)", "~$220 (EnergyBar 832)"],
              ["Remote access (5 yr)", "$0", "Fusion / ReefBeat"],
              ["AI Reef Advisor (5 yr Pro)", "~$200", "— not available"],
              ["Mobile app upgrades", "Included", "Included"],
            ].map(([label, hub, apex], i, arr) => (
              <div
                key={label}
                style={{
                  display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "12px",
                  padding: "14px 0", borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-muted)" }}>{label}</div>
                <div style={{ fontSize: "14px", fontWeight: 900, color: "var(--reef)", textAlign: "center" }}>{hub}</div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-muted)", textAlign: "center" }}>{apex}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "14px", fontStyle: "italic", color: "var(--text-muted)" }}>
            Apex pricing reflects current retail at the time of writing and may not include taxes, shipping, or bundle deals. The Hub launch price will be published when pre-orders open — join the waitlist for first notification.
          </p>

          <h2 style={{ color: "var(--text-light)", fontSize: "28px", marginTop: "48px", marginBottom: "16px" }}>
            Who should buy each?
          </h2>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Buy the Neptune Apex if</strong> you already own Apex accessories (Trident, DOS, COR pumps, EnergyBars), you run a high-end mixed-reef or SPS-dominant build that needs the full module catalog, or you just want the most mature ecosystem available and don&apos;t mind the price tag.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Pre-order the NextUpReef Hub if</strong> you&apos;re building a new tank from scratch, you want included probes and inexpensive outlet control, you don&apos;t want to depend on a third-party cloud subscription, you&apos;d use the AI Reef Advisor, or you want an app-first experience that feels modern.
          </p>
          <p>
            And if you already have an Apex — the choice isn&apos;t binary. NextUpReef supports one-tap Apex sync today. You can keep using your Apex and pull probe data into NextUpReef for AI advice and reef scoring. When you&apos;re ready to expand outlets or move off of Fusion, the Hub is there.
          </p>

          {/* CTA CARD */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(44,196,214,0.08) 0%, rgba(142,233,242,0.04) 100%)",
              border: "1px solid rgba(44,196,214,0.25)",
              borderRadius: "16px",
              padding: "24px 28px", margin: "40px 0", textAlign: "center",
            }}
          >
            <div style={{ fontSize: "20px", fontWeight: 900, color: "var(--text-light)", marginBottom: "6px" }}>
              Want the Hub when it ships?
            </div>
            <p style={{ color: "var(--text-muted)", marginBottom: "18px", fontSize: "15px", lineHeight: 1.55 }}>
              The pre-order waitlist gets first pick — and a few early reefers will get devices at cost in exchange for setup feedback.
            </p>
            <Link
              href="/hub"
              className="btn primary"
              style={{ display: "inline-flex", padding: "14px 28px", fontSize: "15px", fontWeight: 900 }}
            >
              Join the Waitlist →
            </Link>
          </div>

          <h2 style={{ color: "var(--text-light)", fontSize: "28px", marginTop: "48px", marginBottom: "16px" }}>
            Frequently asked questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "24px" }}>
            <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
              <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>Is the NextUpReef Hub a Neptune Apex replacement?</summary>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>It can be, depending on your setup. The Hub covers temperature, pH, and outlet control (via Shelly Wi-Fi outlets) — the same core jobs as an Apex EL plus base modules. If you depend on Apex-specific accessories like the Trident or DOS dosing pumps, you may want to keep your Apex and let NextUpReef sync from it instead.</p>
            </details>
            <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
              <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>Why is the Hub cheaper than a Neptune Apex?</summary>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>Two reasons. First, we bundle probes and outlet support that Apex sells as separate modules and accessories. Second, we don't require a cloud subscription (Apex Fusion) for remote access — your Hub talks to NextUpReef directly. There's no recurring revenue model bolted on top of the hardware.</p>
            </details>
            <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
              <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>Do I need Apex Fusion or a subscription with the Hub?</summary>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>No. Remote monitoring, dosing schedules, and outlet control all work through the NextUpReef app with no separate cloud subscription. NextUpReef Pro ($4.99/month or $39.99/year) unlocks the AI Reef Advisor and advanced analytics — but the controller itself doesn't require it for basic monitoring.</p>
            </details>
            <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
              <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>Will the Hub work alongside an existing Neptune Apex?</summary>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>Yes. NextUpReef already supports one-tap Apex sync — your Trident, probes, and energy bars feed straight into the app. The Hub adds extra outlet control and gives you a path away from Fusion when you're ready, but you don't have to migrate everything at once.</p>
            </details>
            <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
              <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>What about Apex Trident, DOS, and other Neptune accessories?</summary>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>The Trident automatically tests alkalinity, calcium, and magnesium — there's no Hub equivalent in the initial release. DOS is Neptune's dedicated dosing pump. The Hub takes a different approach: pair it with off-the-shelf Shelly Wi-Fi outlets and any third-party dosing pump or stirrer to build the same automation at a fraction of the cost.</p>
            </details>
            <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
              <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>When can I buy the NextUpReef Hub?</summary>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>We're finalizing hardware and opening a pre-order waitlist now. Join the waitlist at nextupreef.com/hub to be notified the moment pre-orders open. Early waitlist signups will get first pick and a few will receive devices at cost in exchange for setup feedback.</p>
            </details>
          </div>

          <h2 style={{ color: "var(--text-light)", fontSize: "28px", marginTop: "48px", marginBottom: "16px" }}>
            Bottom line
          </h2>
          <p>
            The Neptune Apex isn&apos;t going anywhere — it&apos;s well-built and the ecosystem is real. But the assumption that &quot;serious reef = Apex&quot; is starting to look dated. The NextUpReef Hub is built for the reefer who wants modern, mobile-first, AI-assisted reefing without the subscription tax. Pricing will be announced when pre-orders open. <Link href="/hub" style={{ color: "var(--reef)", fontWeight: 700 }}>Drop your email on the waitlist</Link> and we&apos;ll let you know.
          </p>

          <p style={{ fontStyle: "italic", color: "var(--text-muted)", marginTop: "32px", fontSize: "14px" }}>
            Have a question we didn&apos;t cover? Drop us a line at{" "}
            <a href="mailto:info@nextupreef.com" style={{ color: "var(--reef)", fontWeight: 700 }}>info@nextupreef.com</a>{" "}
            — we read everything.
          </p>
        </div>
      </article>
    </>
  );
}
