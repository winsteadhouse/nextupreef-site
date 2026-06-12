import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features — NextUpReef: The Complete Reef Tank Tracking & AI App",
  description:
    "Every NextUpReef feature in one place: reef tank parameter logging, AI Water Advisor, Reef AI Chat, Stocking Advisor, livestock and equipment tracking, cost tracking, Reef Score, Shelly automation, Neptune Apex sync, and the NextUpReef Hub.",
  alternates: { canonical: "https://nextupreef.com/features" },
  openGraph: {
    title: "Features — NextUpReef: The Complete Reef Tank Tracking & AI App",
    description:
      "Reef tank parameter tracking, built-in AI advisors, livestock and equipment tracking, cost tracking, automation, and 24/7 Hub monitoring — everything NextUpReef does, in one place.",
    url: "https://nextupreef.com/features",
    images: [{ url: "/brand/splash2.png", width: 1200, height: 630 }],
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NextUpReef",
  operatingSystem: "iOS, Android",
  applicationCategory: "LifestyleApplication",
  applicationSubCategory: "Aquarium Tracking",
  description:
    "The complete reef tank tracking and AI app. Log parameters, get AI-powered reef advice, track livestock, equipment, and cost, automate dosing and lighting, and monitor your tank 24/7.",
  url: "https://nextupreef.com/features",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  featureList: [
    "Reef tank parameter logging and trend charts",
    "Custom parameter target ranges",
    "AI Water Advisor chemistry analysis",
    "Reef AI Chat",
    "AI Stocking Advisor",
    "AI photo parameter logging",
    "Livestock, equipment, coral, and dosing tracking",
    "Reef tank cost and investment tracking",
    "Reef Score and Stability Score",
    "Water change and maintenance reminders",
    "Shelly smart outlet automation",
    "Automated dosing and lighting",
    "Neptune Apex integration",
    "NextUpReef Hub 24/7 monitoring",
    "Reef Hub community leaderboard",
    "6-phase Tank Journey guided setup",
    "Monthly tank photo timeline",
    "Multiple tank support",
    "Achievement badges",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is NextUpReef free?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. NextUpReef is free to download and the core of the app — parameter logging, trend charts, My Reef tracking, Reef and Stability scores, the community Reef Hub, and the Tank Journey — is free to use. AI features and automation are part of NextUpReef Pro, which every new account can try free for 30 days with no credit card." },
    },
    {
      "@type": "Question",
      name: "What do I get with NextUpReef Pro?",
      acceptedAnswer: { "@type": "Answer", text: "Pro unlocks all four AI features (Water Advisor, Reef AI Chat, Stocking Advisor, and AI Photo Logging), Shelly automation and device control, automated dosing and lighting, Neptune Apex sync, unlimited tanks and reminders, monthly tank photos, the Tank Journal, and extended history. It is $4.99/month or $39.99/year." },
    },
    {
      "@type": "Question",
      name: "Does NextUpReef work on iPhone and Android?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. NextUpReef is a native app for both iOS and Android, and your data syncs to your account so it is available on any device you sign in to." },
    },
    {
      "@type": "Question",
      name: "Do I need any special hardware?",
      acceptedAnswer: { "@type": "Answer", text: "No. NextUpReef works as a tracking and AI app on its own. Hardware is optional: connect Shelly smart outlets for automation, sync a Neptune Apex you already own, or add the NextUpReef Hub for 24/7 monitoring." },
    },
  ],
};

export default function FeaturesPage() {
  return (
    <main style={{ background: "var(--bg-dark)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section style={{ padding: "88px 24px 56px", maxWidth: "1080px", margin: "0 auto", textAlign: "center" }}>
        <div className="section-label" style={{ justifyContent: "center" }}>Features</div>
        <h1 style={{ fontSize: "clamp(34px, 6vw, 60px)", fontWeight: 900, margin: "16px 0 20px", letterSpacing: "-0.04em", lineHeight: 1.05 }}>
          Everything NextUpReef does,<br />
          <span style={{ background: "linear-gradient(135deg, var(--reef) 0%, var(--reef-soft) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>in one place.</span>
        </h1>
        <p style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "640px", margin: "0 auto 36px" }}>
          NextUpReef is the complete reef tank app — parameter tracking, built-in AI advisors, livestock and equipment tracking, cost tracking, automation, and 24/7 monitoring. Free to download, with a 30-day Pro trial on every new account.
        </p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", maxWidth: "760px", margin: "0 auto" }}>
          <a href="#tracking" style={{ fontSize: "13px", fontWeight: 700, color: "var(--reef)", textDecoration: "none", padding: "6px 14px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.18)" }}>Tracking</a>
          <a href="#ai" style={{ fontSize: "13px", fontWeight: 700, color: "var(--reef)", textDecoration: "none", padding: "6px 14px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.18)" }}>AI</a>
          <a href="#my-reef" style={{ fontSize: "13px", fontWeight: 700, color: "var(--reef)", textDecoration: "none", padding: "6px 14px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.18)" }}>My Reef</a>
          <a href="#scores" style={{ fontSize: "13px", fontWeight: 700, color: "var(--reef)", textDecoration: "none", padding: "6px 14px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.18)" }}>Scores</a>
          <a href="#maintenance" style={{ fontSize: "13px", fontWeight: 700, color: "var(--reef)", textDecoration: "none", padding: "6px 14px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.18)" }}>Reminders</a>
          <a href="#automation" style={{ fontSize: "13px", fontWeight: 700, color: "var(--reef)", textDecoration: "none", padding: "6px 14px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.18)" }}>Automation</a>
          <a href="#hub" style={{ fontSize: "13px", fontWeight: 700, color: "var(--reef)", textDecoration: "none", padding: "6px 14px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.18)" }}>Hub</a>
          <a href="#community" style={{ fontSize: "13px", fontWeight: 700, color: "var(--reef)", textDecoration: "none", padding: "6px 14px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.18)" }}>Community</a>
          <a href="#journey" style={{ fontSize: "13px", fontWeight: 700, color: "var(--reef)", textDecoration: "none", padding: "6px 14px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.18)" }}>Tank Journey</a>
          <a href="#compare" style={{ fontSize: "13px", fontWeight: 700, color: "var(--reef)", textDecoration: "none", padding: "6px 14px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.18)" }}>Free vs Pro</a>
        </div>
      </section>

      {/* PARAMETER TRACKING */}
      <section id="tracking" style={{ borderTop: "1px solid rgba(44,196,214,0.1)", padding: "72px 24px", maxWidth: "1080px", margin: "0 auto", scrollMarginTop: "80px" }}>
        <div className="section-label">Parameter Tracking</div>
        <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, margin: "12px 0 16px", letterSpacing: "-0.03em", lineHeight: 1.12, color: "var(--text-light)" }}>Log every parameter,<br />see every trend.</h2>
        <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.7, margin: "0 0 32px", maxWidth: "680px" }}>NextUpReef is built around fast, accurate logging. Record alkalinity, calcium, magnesium, nitrate, phosphate, salinity, pH, temperature, ORP and more — color-coded against your targets the moment you type, with last values pre-filled so a full test session takes seconds.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Fast parameter logging</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Alk, Ca, Mg, NO3, PO4, salinity, pH, temp, ORP and more. Last values pre-fill automatically and each entry is color-coded green / amber / red against your target the instant you type it.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Custom target ranges</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Set your own ideal range for every parameter, or use research-backed defaults. The whole app — colors, scores, and AI — grades against your targets, not someone else’s.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Add or remove parameters</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Track only what you test. Turn parameters on or off so your log stays clean and relevant to your tank.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Trend charts</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>A chart for every parameter with your target range banded in and water-change markers overlaid, so you can see exactly when and why something shifted.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Backdate and edit</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Forgot to log yesterday? Backdate any entry, or edit and correct past logs so your history stays honest.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Apex auto-import</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Running a Neptune Apex? Pull pH, ORP, salinity, temperature and Trident values straight into your log — no manual re-entry.</div>
          </div>
        </div>
      </section>

      {/* AI FEATURES */}
      <section id="ai" style={{ borderTop: "1px solid rgba(44,196,214,0.1)", padding: "72px 24px", maxWidth: "1080px", margin: "0 auto", scrollMarginTop: "80px" }}>
        <div className="section-label">AI Features</div>
        <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, margin: "12px 0 16px", letterSpacing: "-0.03em", lineHeight: 1.12, color: "var(--text-light)" }}>AI that knows<br />your actual tank.</h2>
        <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.7, margin: "0 0 32px", maxWidth: "680px" }}>Most reef apps just store your data, or export it so you can paste it into some other AI. NextUpReef builds the AI in — and it already knows your parameters, equipment, livestock, dosing, and full history. Every AI feature is part of NextUpReef Pro.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Water Advisor</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>A full AI chemistry analysis of your reef tank, refreshed every 24 hours. What’s dialed in, what needs attention, and the exact next steps — ranked by priority, written for your tank.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Reef AI Chat</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>AI chat that knows your parameters and your livestock. Ask why your alk is dropping or whether a tang fits, and get a real answer about your tank instead of a generic web search.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Stocking Advisor</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>AI compatibility, bioload, and aggression checks across your fish, corals, and inverts. It flags real conflicts before they happen and suggests what to add next.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>AI Photo Logging</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Point your camera at any test kit — Hanna checkers, API, Red Sea, Salifert, Milwaukee — and AI reads the values and fills in your parameter log. You review before saving.</div>
          </div>
        </div>
      </section>

      {/* MY REEF */}
      <section id="my-reef" style={{ borderTop: "1px solid rgba(44,196,214,0.1)", padding: "72px 24px", maxWidth: "1080px", margin: "0 auto", scrollMarginTop: "80px" }}>
        <div className="section-label">My Reef</div>
        <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, margin: "12px 0 16px", letterSpacing: "-0.03em", lineHeight: 1.12, color: "var(--text-light)" }}>Everything in your tank,<br />in one place.</h2>
        <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.7, margin: "0 0 32px", maxWidth: "680px" }}>My Reef is the home base for everything in your tank — every fish, coral, and invert, every piece of gear, your dosing, your lighting, your monthly photos, and what it all cost. It is not a static list: it powers your scores, your reminders, and the AI.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Livestock tracking</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Every fish, coral, and invert linked to catalog care data — adult size, temperament, reef-safety, placement, and flow. Track health status, acquisition date, and cost per animal.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Frag and lineage</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Split or frag a colony and keep the lineage connected, so a mother colony and its frags stay linked over time.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Equipment tracking</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Log skimmer, pumps, reactors, ATO, heater, and controllers with brand, model, and settings like flow rate — your whole hardware setup documented in one place.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Dosing products</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Record every dosing product with the parameter it targets, the daily amount, and the method: automated doser, manual, or reactor.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Lighting</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Track your fixtures and their schedules so your whole light setup lives alongside the rest of your reef.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Monthly photo timeline</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>One photo per month builds a growth timeline you can scroll back through to watch your reef mature.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Investment tracking</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>See what your reef actually costs — livestock, equipment, and lighting totaled up and broken down by category.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Tank Journal</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Keep dated, private journal entries with photos to record what you did and what changed. (Pro)</div>
          </div>
        </div>
      </section>

      {/* REEF SCORE & STABILITY */}
      <section id="scores" style={{ borderTop: "1px solid rgba(44,196,214,0.1)", padding: "72px 24px", maxWidth: "1080px", margin: "0 auto", scrollMarginTop: "80px" }}>
        <div className="section-label">Reef Score & Stability</div>
        <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, margin: "12px 0 16px", letterSpacing: "-0.03em", lineHeight: 1.12, color: "var(--text-light)" }}>Two scores that grade<br />how you keep your reef.</h2>
        <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.7, margin: "0 0 32px", maxWidth: "680px" }}>NextUpReef turns your logs into two simple 0—100 scores so you always know where your tank stands — and whether it’s trending the right way.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Reef Score</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>A 0-100 grade of your overall parameter health, logging consistency, water-change cadence, equipment, and tank maturity. One number for how well the tank is being kept.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Stability Score</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>A 0-100 grade of how steady you hold the big four — alkalinity, calcium, magnesium, and salinity — over time. In reef keeping, stability beats perfection, and this rewards it.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Score history</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Both scores are snapshotted over time so you can see the effect of a new doser, a schedule change, or a rough week at a glance.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Score breakdown</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Tap into either score to see exactly what is helping and what is dragging it down, so you know what to fix next.</div>
          </div>
        </div>
      </section>

      {/* MAINTENANCE & REMINDERS */}
      <section id="maintenance" style={{ borderTop: "1px solid rgba(44,196,214,0.1)", padding: "72px 24px", maxWidth: "1080px", margin: "0 auto", scrollMarginTop: "80px" }}>
        <div className="section-label">Maintenance & Reminders</div>
        <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, margin: "12px 0 16px", letterSpacing: "-0.03em", lineHeight: 1.12, color: "var(--text-light)" }}>Never miss a water change<br />or a filter sock again.</h2>
        <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.7, margin: "0 0 32px", maxWidth: "680px" }}>Set your routine once and let the app keep you on schedule with push notifications — water changes, dosing, filter socks, carbon, RO/DI, skimmer cleaning, and anything else you run.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Water change schedules</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Set frequency, day, and percentage. NextUpReef reminds you when one is due and logs it on your charts when you mark it done.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Maintenance reminders</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Recurring reminders for filter socks, carbon swaps, RO/DI filters, skimmer cleaning, probe calibration, and any custom task.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Push notifications</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>On-time reminders delivered to your phone, with quiet hours so you’re never pinged in the middle of the night.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Mark done, see it logged</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Check off a task and it is recorded, so you have a real maintenance history instead of a guess.</div>
          </div>
        </div>
      </section>

      {/* AUTOMATION & DEVICE CONTROL */}
      <section id="automation" style={{ borderTop: "1px solid rgba(44,196,214,0.1)", padding: "72px 24px", maxWidth: "1080px", margin: "0 auto", scrollMarginTop: "80px" }}>
        <div className="section-label">Automation & Device Control</div>
        <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, margin: "12px 0 16px", letterSpacing: "-0.03em", lineHeight: 1.12, color: "var(--text-light)" }}>Your reef runs itself,<br />even when you’re away.</h2>
        <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.7, margin: "0 0 32px", maxWidth: "680px" }}>Connect Shelly smart outlets and automate dosing, lighting, and equipment — all without leaving the app, and all running on the device itself so schedules continue 24/7 even when your phone is off. Automation features are part of NextUpReef Pro.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Shelly smart outlets</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Connect any Shelly Plug US Gen4 in minutes — no Shelly app needed. Tag it as a doser, heater, light, skimmer, or return pump and control it directly from NextUpReef.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Automated dosing</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Calibrate your pump once, set a daily mL target, pick a schedule. NextUpReef writes it to the outlet so doses run on time even if your internet drops.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Lighting automation</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Set on/off times and ramp schedules per fixture. Link a Shelly outlet and the schedule is pushed to the plug automatically.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Neptune Apex sync</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>One-tap sync pulls pH, ORP, salinity, temperature, and Trident alk/Ca/Mg straight from your Apex into your parameter logs — no manual entry.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Control Center</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>A unified dashboard of every outlet: status, live power draw, and quick on/off controls, all in one place.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Runs on the device</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>No cloud, no server, no phone required. Your reef stays dosed and lit through power outages, router reboots, and travel.</div>
          </div>
        </div>
      </section>

      {/* NEXTUPREEF HUB */}
      <section id="hub" style={{ borderTop: "1px solid rgba(44,196,214,0.1)", padding: "72px 24px", maxWidth: "1080px", margin: "0 auto", scrollMarginTop: "80px" }}>
        <div className="section-label">NextUpReef Hub</div>
        <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, margin: "12px 0 16px", letterSpacing: "-0.03em", lineHeight: 1.12, color: "var(--text-light)" }}>24/7 monitoring,<br />built for reefers.</h2>
        <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.7, margin: "0 0 32px", maxWidth: "680px" }}>The NextUpReef Hub is a dedicated device that bridges your reef hardware to the app and watches your tank around the clock — so you get alerts the moment something drifts, even when your phone is nowhere near the tank.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Always-on monitoring</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>The Hub logs temperature, pH, and connected equipment continuously and pushes it to your account, so your data and alerts keep flowing 24/7.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Built-in probes</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>The Complete Kit ships with a calibrated pH probe and temperature probe, plus Shelly smart plugs — everything you need to monitor and control from day one.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Health alerts</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>If the Hub goes offline or a sensor reads stale, you get a push notification right away instead of finding out hours later.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Configured from your phone</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>The Hub is headless and Wi-Fi only. All setup happens in the app — no screen, no keyboard, no command line.</div>
          </div>
        </div>
      </section>

      {/* COMMUNITY & REEF HUB */}
      <section id="community" style={{ borderTop: "1px solid rgba(44,196,214,0.1)", padding: "72px 24px", maxWidth: "1080px", margin: "0 auto", scrollMarginTop: "80px" }}>
        <div className="section-label">Community & Reef Hub</div>
        <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, margin: "12px 0 16px", letterSpacing: "-0.03em", lineHeight: 1.12, color: "var(--text-light)" }}>Compare with<br />the best tanks.</h2>
        <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.7, margin: "0 0 32px", maxWidth: "680px" }}>The Reef Hub ranks public tanks by their combined Reef and Stability score. See where you stand, browse the setups at the top, and learn from real reefs instead of forum theory.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Reef Hub leaderboard</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>See where your tank ranks. Browse top tanks and study their parameters, salt mix, equipment, and lighting setups.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Tanks like yours</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Compare your parameters against tanks of a similar type and size, so the benchmark actually fits your reef.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Public or private</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>You choose. Keep a tank private, or make it public to join the leaderboard and community feed. Some details are always private.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Likes and comments</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Share progress, get feedback, and connect with other reefers around real tanks and real data.</div>
          </div>
        </div>
      </section>

      {/* TANK JOURNEY */}
      <section id="journey" style={{ borderTop: "1px solid rgba(44,196,214,0.1)", padding: "72px 24px", maxWidth: "1080px", margin: "0 auto", scrollMarginTop: "80px" }}>
        <div className="section-label">Tank Journey</div>
        <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, margin: "12px 0 16px", letterSpacing: "-0.03em", lineHeight: 1.12, color: "var(--text-light)" }}>Built for day one.<br />Grows with your reef.</h2>
        <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.7, margin: "0 0 32px", maxWidth: "680px" }}>New to reefing? The Tank Journey guides you through every phase — from first fill to established reef — with step-by-step checklists, what to do next, and why it matters. Experienced reefers can skip it and go straight to advanced tracking.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>6-phase guided setup</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Tank setup, cycling, the ugly phase, first fish, first coral, and established reef. Always know where you are and what comes next.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Step-by-step checklists</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Required and suggested tasks for each phase, with the reasoning behind them. Check them off as you go.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Scales with experience</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Advanced parameter tracking, stability scoring, and AI analysis are there from the start for reefers who want them.</div>
          </div>
        </div>
      </section>

      {/* MORE */}
      <section id="more" style={{ borderTop: "1px solid rgba(44,196,214,0.1)", padding: "72px 24px", maxWidth: "1080px", margin: "0 auto", scrollMarginTop: "80px" }}>
        <div className="section-label">More</div>
        <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, margin: "12px 0 16px", letterSpacing: "-0.03em", lineHeight: 1.12, color: "var(--text-light)" }}>The details that<br />add up.</h2>
        <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.7, margin: "0 0 32px", maxWidth: "680px" }}>Smaller features that make day-to-day reefing easier across the whole app.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Multiple tanks</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Run more than one system? Track each tank separately with its own livestock, equipment, logs, and scores. (Multiple tanks are a Pro feature.)</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Achievement badges</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Dozens of badges for milestones, consistency, and growth, so your progress is recognized as your reef matures.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Multiple tank types</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Mixed reef, SPS, LPS, softie, nano, ULNS, and fish-only systems are all supported, and the app tailors targets and guidance to your type.</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px" }}>Your data stays yours</div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>Your tank data is never used to train AI models. Private details stay private, and you can delete your account and data whenever you want.</div>
          </div>
        </div>
      </section>

      {/* FREE VS PRO */}
      <section id="compare" style={{ borderTop: "1px solid rgba(44,196,214,0.1)", padding: "72px 24px", maxWidth: "880px", margin: "0 auto", scrollMarginTop: "80px" }}>
        <div className="section-label">Free vs Pro</div>
        <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, margin: "12px 0 16px", letterSpacing: "-0.03em", lineHeight: 1.12, color: "var(--text-light)" }}>What’s free, what’s Pro.</h2>
        <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.7, margin: "0 0 32px", maxWidth: "680px" }}>
          The core of NextUpReef is free forever. Pro adds the AI features, automation, and power-user tools. It is $4.99/month or $39.99/year, and every new account gets a free 30-day Pro trial with no credit card.
        </p>
        <div style={{ overflowX: "auto", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "440px" }}>
            <thead>
              <tr>
                <th style={{ padding: "16px", textAlign: "left", fontSize: "13px", fontWeight: 900, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Feature</th>
                <th style={{ padding: "16px 12px", textAlign: "center", fontSize: "13px", fontWeight: 900, color: "var(--text-light)" }}>Free</th>
                <th style={{ padding: "16px 12px", textAlign: "center", fontSize: "13px", fontWeight: 900, color: "var(--reef)" }}>Pro</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <td style={{ padding: "13px 16px", fontSize: "14px", color: "var(--text-light)", fontWeight: 600 }}>Parameter logging & trend charts</td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--reef)", fontWeight: 900 }}>✓</span></td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--reef)", fontWeight: 900 }}>✓</span></td>
              </tr>
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <td style={{ padding: "13px 16px", fontSize: "14px", color: "var(--text-light)", fontWeight: 600 }}>Custom target ranges</td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--reef)", fontWeight: 900 }}>✓</span></td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--reef)", fontWeight: 900 }}>✓</span></td>
              </tr>
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <td style={{ padding: "13px 16px", fontSize: "14px", color: "var(--text-light)", fontWeight: 600 }}>My Reef: livestock, equipment, dosing, cost</td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--reef)", fontWeight: 900 }}>✓</span></td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--reef)", fontWeight: 900 }}>✓</span></td>
              </tr>
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <td style={{ padding: "13px 16px", fontSize: "14px", color: "var(--text-light)", fontWeight: 600 }}>Reef Score & Stability Score</td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--reef)", fontWeight: 900 }}>✓</span></td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--reef)", fontWeight: 900 }}>✓</span></td>
              </tr>
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <td style={{ padding: "13px 16px", fontSize: "14px", color: "var(--text-light)", fontWeight: 600 }}>Reef Hub community & leaderboard</td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--reef)", fontWeight: 900 }}>✓</span></td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--reef)", fontWeight: 900 }}>✓</span></td>
              </tr>
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <td style={{ padding: "13px 16px", fontSize: "14px", color: "var(--text-light)", fontWeight: 600 }}>Tank Journey guided setup</td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--reef)", fontWeight: 900 }}>✓</span></td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--reef)", fontWeight: 900 }}>✓</span></td>
              </tr>
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <td style={{ padding: "13px 16px", fontSize: "14px", color: "var(--text-light)", fontWeight: 600 }}>Water change & maintenance reminders</td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--text-light)", fontWeight: 700, fontSize: "13px" }}>Up to 3</span></td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--text-light)", fontWeight: 700, fontSize: "13px" }}>Unlimited</span></td>
              </tr>
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <td style={{ padding: "13px 16px", fontSize: "14px", color: "var(--text-light)", fontWeight: 600 }}>Multiple tanks</td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--text-light)", fontWeight: 700, fontSize: "13px" }}>1 tank</span></td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--text-light)", fontWeight: 700, fontSize: "13px" }}>Unlimited</span></td>
              </tr>
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <td style={{ padding: "13px 16px", fontSize: "14px", color: "var(--text-light)", fontWeight: 600 }}>Monthly tank photos</td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "rgba(139,158,179,0.4)" }}>—</span></td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--reef)", fontWeight: 900 }}>✓</span></td>
              </tr>
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <td style={{ padding: "13px 16px", fontSize: "14px", color: "var(--text-light)", fontWeight: 600 }}>Tank Journal with photos</td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "rgba(139,158,179,0.4)" }}>—</span></td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--reef)", fontWeight: 900 }}>✓</span></td>
              </tr>
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <td style={{ padding: "13px 16px", fontSize: "14px", color: "var(--text-light)", fontWeight: 600 }}>Water Advisor (AI chemistry analysis)</td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "rgba(139,158,179,0.4)" }}>—</span></td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--reef)", fontWeight: 900 }}>✓</span></td>
              </tr>
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <td style={{ padding: "13px 16px", fontSize: "14px", color: "var(--text-light)", fontWeight: 600 }}>Reef AI Chat</td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "rgba(139,158,179,0.4)" }}>—</span></td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--reef)", fontWeight: 900 }}>✓</span></td>
              </tr>
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <td style={{ padding: "13px 16px", fontSize: "14px", color: "var(--text-light)", fontWeight: 600 }}>Stocking Advisor</td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "rgba(139,158,179,0.4)" }}>—</span></td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--reef)", fontWeight: 900 }}>✓</span></td>
              </tr>
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <td style={{ padding: "13px 16px", fontSize: "14px", color: "var(--text-light)", fontWeight: 600 }}>AI Photo Logging</td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "rgba(139,158,179,0.4)" }}>—</span></td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--reef)", fontWeight: 900 }}>✓</span></td>
              </tr>
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <td style={{ padding: "13px 16px", fontSize: "14px", color: "var(--text-light)", fontWeight: 600 }}>Shelly automation & device control</td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "rgba(139,158,179,0.4)" }}>—</span></td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--reef)", fontWeight: 900 }}>✓</span></td>
              </tr>
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <td style={{ padding: "13px 16px", fontSize: "14px", color: "var(--text-light)", fontWeight: 600 }}>Automated dosing & lighting</td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "rgba(139,158,179,0.4)" }}>—</span></td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--reef)", fontWeight: 900 }}>✓</span></td>
              </tr>
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <td style={{ padding: "13px 16px", fontSize: "14px", color: "var(--text-light)", fontWeight: 600 }}>Neptune Apex sync</td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "rgba(139,158,179,0.4)" }}>—</span></td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--reef)", fontWeight: 900 }}>✓</span></td>
              </tr>
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <td style={{ padding: "13px 16px", fontSize: "14px", color: "var(--text-light)", fontWeight: 600 }}>Extended history (6 months+)</td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "rgba(139,158,179,0.4)" }}>—</span></td>
                <td style={{ padding: "13px 12px", textAlign: "center" }}><span style={{ color: "var(--reef)", fontWeight: 900 }}>✓</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* RECENTLY SHIPPED */}
      <section style={{ borderTop: "1px solid rgba(44,196,214,0.1)", padding: "72px 24px", maxWidth: "880px", margin: "0 auto" }}>
        <div className="section-label">Recently shipped</div>
        <h2 style={{ fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 900, margin: "12px 0 24px", letterSpacing: "-0.03em", color: "var(--text-light)" }}>Always improving.</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--reef)", flexShrink: 0, marginTop: "7px" }} />
            <div>
              <span style={{ fontSize: "15px", fontWeight: 900, color: "var(--text-light)" }}>Reef AI Chat</span>
              <span style={{ fontSize: "15px", color: "var(--text-muted)" }}> — A full chat advisor that knows your parameters and your livestock, now with cleaner, easier-to-read replies.</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--reef)", flexShrink: 0, marginTop: "7px" }} />
            <div>
              <span style={{ fontSize: "15px", fontWeight: 900, color: "var(--text-light)" }}>Stocking Advisor</span>
              <span style={{ fontSize: "15px", color: "var(--text-muted)" }}> — AI compatibility, bioload, and aggression checks across everything in your tank, built into My Reef.</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--reef)", flexShrink: 0, marginTop: "7px" }} />
            <div>
              <span style={{ fontSize: "15px", fontWeight: 900, color: "var(--text-light)" }}>My Reef redesign</span>
              <span style={{ fontSize: "15px", color: "var(--text-muted)" }}> — A cleaner home base for livestock, equipment, dosing, photos, and total tank investment.</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--reef)", flexShrink: 0, marginTop: "7px" }} />
            <div>
              <span style={{ fontSize: "15px", fontWeight: 900, color: "var(--text-light)" }}>Hub health alerts</span>
              <span style={{ fontSize: "15px", color: "var(--text-muted)" }}> — Get a push notification the moment your Hub goes offline or a sensor reads stale.</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ borderTop: "1px solid rgba(44,196,214,0.1)", padding: "72px 24px", maxWidth: "760px", margin: "0 auto" }}>
        <div className="section-label">Questions</div>
        <h2 style={{ fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 900, margin: "12px 0 28px", letterSpacing: "-0.03em", color: "var(--text-light)" }}>Common questions.</h2>
          <div key={0} style={{ marginBottom: "24px" }}>
            <h3 style={{ fontSize: "17px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px", lineHeight: 1.4 }}>Is NextUpReef free?</h3>
            <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>Yes. NextUpReef is free to download and the core of the app — parameter logging, trend charts, My Reef tracking, Reef and Stability scores, the community Reef Hub, and the Tank Journey — is free to use. AI features and automation are part of NextUpReef Pro, which every new account can try free for 30 days with no credit card.</p>
          </div>
          <div key={1} style={{ marginBottom: "24px" }}>
            <h3 style={{ fontSize: "17px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px", lineHeight: 1.4 }}>What do I get with NextUpReef Pro?</h3>
            <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>Pro unlocks all four AI features (Water Advisor, Reef AI Chat, Stocking Advisor, and AI Photo Logging), Shelly automation and device control, automated dosing and lighting, Neptune Apex sync, unlimited tanks and reminders, monthly tank photos, the Tank Journal, and extended history. It is $4.99/month or $39.99/year.</p>
          </div>
          <div key={2} style={{ marginBottom: "24px" }}>
            <h3 style={{ fontSize: "17px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px", lineHeight: 1.4 }}>Does NextUpReef work on iPhone and Android?</h3>
            <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>Yes. NextUpReef is a native app for both iOS and Android, and your data syncs to your account so it is available on any device you sign in to.</p>
          </div>
          <div key={3} style={{ marginBottom: "24px" }}>
            <h3 style={{ fontSize: "17px", fontWeight: 900, color: "var(--text-light)", marginBottom: "8px", lineHeight: 1.4 }}>Do I need any special hardware?</h3>
            <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>No. NextUpReef works as a tracking and AI app on its own. Hardware is optional: connect Shelly smart outlets for automation, sync a Neptune Apex you already own, or add the NextUpReef Hub for 24/7 monitoring.</p>
          </div>
        <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.7, marginTop: "8px" }}>
          Looking for how-to answers and details on every screen? See the full{" "}
          <Link href="/contact" style={{ color: "var(--reef)", fontWeight: 700 }}>FAQ</Link>.
        </p>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container-narrow">
          <div className="cta-card">
            <h2>Start tracking your<br />whole reef free.</h2>
            <p>Free to download. 30-day Pro trial on every new account. No credit card required.</p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "8px" }}>
              <a href="https://apps.apple.com/us/app/nextupreef/id6760728959" target="_blank" rel="noopener noreferrer" className="btn primary large">App Store</a>
              <a href="https://play.google.com/store/apps/details?id=com.nextupreef.app" target="_blank" rel="noopener noreferrer" className="btn secondary large">Google Play</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
