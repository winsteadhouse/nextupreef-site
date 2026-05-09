"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NextUpReef",
  operatingSystem: "iOS, Android",
  applicationCategory: "LifestyleApplication",
  applicationSubCategory: "Aquarium Tracking",
  description: "The best reef tank tracking app. Log saltwater aquarium parameters, get AI-powered reef advice, track equipment and livestock, set maintenance reminders, and connect with the reef community.",
  url: "https://nextupreef.com",
  downloadUrl: [
    "https://apps.apple.com/us/app/nextupreef/id6760728959",
    "https://play.google.com/store/apps/details?id=com.nextupreef.app",
  ],
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  screenshot: "https://nextupreef.com/screenshots/phone-home-v2.png",
  featureList: [
    "AI-powered reef tank analysis every 24 hours",
    "Ask Reef AI — chat with AI that knows your tank",
    "AI photo parameter logging from any test kit",
    "Neptune Apex integration — one-tap sync",
    "Tank journal with photos",
    "Reef Score and Stability Score",
    "Parameter trend charts",
    "Water change and maintenance reminders",
    "Reef community leaderboard",
    "Equipment and livestock tracking",
    "Monthly tank photo timeline",
    "60+ achievement badges",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "10",
    bestRating: "5",
    worstRating: "1",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NextUpReef",
  url: "https://nextupreef.com",
  logo: "https://nextupreef.com/brand/logo.png",
  description: "NextUpReef builds mobile apps for the reef aquarium hobby.",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61576553765840",
    "https://www.instagram.com/nextupreefapp/",
    "https://apps.apple.com/us/app/nextupreef/id6760728959",
    "https://play.google.com/store/apps/details?id=com.nextupreef.app",
  ],
  contactPoint: { "@type": "ContactPoint", email: "info@nextupreef.com", contactType: "customer support" },
};

const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M3.18 23.76c.3.17.64.24.99.2l13.29-13.29L13.9 7.1 3.18 23.76z" fill="#EA4335"/>
    <path d="M20.96 10.34L18.1 8.7l-3.66 3.66 3.66 3.66 2.89-1.66c.82-.47.82-1.55-.03-2.02z" fill="#FBBC04"/>
    <path d="M3.18.24C2.83.2 2.49.27 2.19.44.94 1.16.94 2.84 2.19 3.56L13.9 17.1l3.56-3.56L3.18.24z" fill="#34A853"/>
    <path d="M2.19.44C1.37.91 1 1.76 1 2.64v18.72c0 .88.37 1.72 1.19 2.2L13.9 12 2.19.44z" fill="#4285F4"/>
  </svg>
);

const DownloadButtons = ({ large }: { large?: boolean }) => (
  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
    <a href="https://apps.apple.com/us/app/nextupreef/id6760728959" target="_blank" rel="noopener noreferrer" className={large ? "btn primary large" : "btn primary"}>
      <AppleIcon /> App Store
    </a>
    <a href="https://play.google.com/store/apps/details?id=com.nextupreef.app" target="_blank" rel="noopener noreferrer" className={large ? "btn secondary large" : "btn secondary"}>
      <PlayIcon /> Google Play
    </a>
  </div>
);

export default function HomePage() {
  return (
    <main style={{ background: "var(--bg-dark)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-text">
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.18)",
            borderRadius: "999px", padding: "6px 16px",
            fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em",
            textTransform: "uppercase", color: "var(--reef)",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--reef)", display: "inline-block" }} />
            Free &middot; iOS &amp; Android
          </div>

          <h1 style={{
            fontSize: "clamp(42px, 6vw, 72px)", fontWeight: 900,
            lineHeight: 1.05, letterSpacing: "-0.04em", margin: 0,
          }}>
            Track your reef.<br />
            <span style={{
              background: "linear-gradient(135deg, var(--reef) 0%, var(--reef-soft) 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Know your reef.</span>
          </h1>

          <p style={{ fontSize: "18px", lineHeight: 1.65, color: "var(--text-muted)", margin: 0, maxWidth: "440px" }}>
            Log parameters in seconds, get AI-powered advice, and track everything that keeps your reef healthy.
          </p>

          <DownloadButtons />

          <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: 0, fontWeight: 500 }}>
            Free to download &middot; 30-day Pro trial included
          </p>
        </div>

        <div className="home-hero-phone">
          <div style={{
            position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)",
            width: "260px", height: "500px",
            background: "radial-gradient(ellipse, rgba(44,196,214,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <Image
            src="/screenshots/phone-home-hero.png"
            alt="NextUpReef dashboard showing AI advice, Reef Score, and water parameters"
            width={1363} height={1076}
            priority
            style={{ width: "140%", maxWidth: "680px", height: "auto", position: "relative", zIndex: 1, marginLeft: "-20%" }}
          />
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section className="phone-trio-section">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 900, margin: 0, letterSpacing: "-0.03em" }}>
            Everything your reef needs
          </h2>
        </div>
        <div className="phone-trio">
          { [
            { img: "/screenshots/phone-log-v2.png", alt: "Log reef parameters", title: "Log in seconds", desc: "Alk, Ca, Mg, NO3, PO4, salinity, pH, and more. Last values pre-filled. Color-coded against your targets." },
            { img: "/screenshots/phone-charts-v2.png", alt: "Parameter trend charts", title: "See the trends", desc: "Charts for every parameter with target range bands and water change markers. See exactly when things shifted." },
            { img: "/screenshots/phone-reminders-v2.png", alt: "Mantenance reminders", title: "Stay on schedule", desc: "Water changes, filter socks, dosing, skimmer \u2014 set it once, get push notifications on time, every time." },
          ].map((item) => (
            <div key={item.title} className="phone-trio-item">
              <Image src={item.img} alt={item.alt} width={1363} height={1076} style={{ width: "100%", height: "auto" }} />
              <div style={{ textAlign: "center", maxWidth: "260px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 900, margin: "0 0 8px", color: "var(--text-light)" }}>{item.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI SECTION */}
      <section style={{ borderTop: "1px solid rgba(44,196,214,0.1)", borderBottom: "1px solid rgba(44,196,214,0.1)", background: "linear-gradient(160deg, rgba(44,196,214,0.05) 0%, transparent 60%)", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }} className="feature-spotlight">
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div className="section-label">AI-Powered</div>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 900, margin: 0, letterSpacing: "-0.03em", lineHeight: 1.1 }}>Your reef advisor<br />is already in the app.</h2>
            <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.7, margin: 0, maxWidth: "380px" }}>AI that knows your actual tank — your parameters, equipment, livestock, dosing, and history. Not generic advice. Yours.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              { [
                { title: "Reef AI Advisor", desc: "Full tank analysis every 24 hours. Tells you what to fix, what's working, and what to watch." },
                { title: "Ask Reef AI", desc: "Chat with AI that has full context. Why is my alk dropping? gets a real answer, not a Google search." },
                { title: "AI Photo Logging", desc: "Point your camera at any test kit. AI reads the values and logs them for you." },
                { title: "Neptune Apex Integration", desc: "Connect your Apex controller and sync parameters automatically. No manual entry needed." },
              ].map((f) => (
                <div key={f.title} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--reef)", flexShrink: 0, marginTop: "7px" }} />
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: 900, color: "var(--text-light)", marginBottom: "4px" }}>{f.title}</div>
                    <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="feature-spotlight-phone">
            <Image src="/screenshots/phone-ai-v2.png" alt="Ask Reef AI answering why pH drops at night" width={574} height={1146} style={{ width: "100%", maxWidth: "480px", height: "auto" }} />
          </div>
        </div>
      </section>

      {/* MY REEF SECTION */}
      <section style={{ padding: "60px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="feature-spotlight reverse">
          <div className="feature-spotlight-phone">
            <Image src="/screenshots/phone-reef-hub-v2.png" alt="Reef Hub community leaderboard showing tank rankings and scores" width={574} height={1146} style={{ width: "100%", maxWidth: "480px", height: "auto" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div className="section-label">Your Reef. Your Community.</div>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 900, margin: 0, letterSpacing: "-0.03em", lineHeight: 1.1 }}>Track your tank.<br />Compare with the best.</h2>
            <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.7, margin: 0, maxWidth: "380px" }}>Log your equipment, livestock, corals, and dosing. See how your reef scores against other reefers. — Learn from the tanks at the top.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              { [
                { title: "Reef Hub Leaderboard", desc: "See where your tank ranks. Browse top tanks, their params, salt mix, equipment, and lighting setups." },
                { title: "My Reef Profile", desc: "Track equipment, livestock, corals, dosing, and lighting. Everything about your reef in one place." },
                { title: "Reef Score & Stability Score", desc: "One photo per month \u2014 watch your reef grow over time." },
              ].map((f) => (
                <div key={f.title} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--reef)", flexShrink: 0, marginTop: "7px" }} />
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: 900, color: "var(--text-light)", marginBottom: "4px" }}>{f.title}</div>
                    <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      {/* JOURNEY SECTION */}
      <section style={{ borderTop: "1px solid rgba(44,196,214,0.1)", padding: "60px 24px", background: "linear-gradient(160deg, rgba(88,28,196,0.06) 0%, transparent 60%)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }} className="feature-spotlight">
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div className="section-label">New to Reefing?</div>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 900, margin: 0, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Built for day one.<br />Grows with your reef.
            </h2>
            <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.7, margin: 0, maxWidth: "420px" }}>
              The Tank Journey guides new reefers through every phase — from first fill to established reef. Step-by-step checklists, what to do next, and why it matters.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { title: "6-Phase Tank Journey", desc: "Tank Setup, cycling, first fish, first coral, and beyond. Always know where you are and what’s next." },
                { title: "Step-by-Step Checklists", desc: "Required and suggested tasks for each phase. Check them off as you go." },
                { title: "Built for Experienced Reefers Too", desc: "Advanced parameter tracking, stability scoring, and AI analysis scale with your experience level." },
              ].map((f) => (
                <div key={f.title} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--reef)", flexShrink: 0, marginTop: "7px" }} />
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: 900, color: "var(--text-light)", marginBottom: "4px" }}>{f.title}</div>
                    <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65 }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="feature-spotlight-phone">
            <Image src="/screenshots/phone-journey-v2.png" alt="Tank Journey guide showing new reefer setup phases and checklists" width={1017} height={1168} style={{ width: "100%", height: "auto" }} />
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="cta-section">
        <div className="container-narrow">
          <div className="cta-card">
            <h2>Stop guessing.<br />Start tracking.</h2>
            <p>Free to download. No credit card required.</p>
            <DownloadButtons large />
            <div className="cta-sub">Free to download &middot; iOS &amp; Android &middot; 30-day Pro trial on every new account</div>
          </div>
        </div>
      </section>
    </main>
  );
}
