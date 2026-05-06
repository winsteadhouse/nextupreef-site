"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// ─── JSON-LD Structured Data ───────────────────────────────────────────────
// These are invisible to users but read by Google.
// Placed here because "use client" pages can't export metadata directly.
// Next.js still renders these <script> tags server-side in the HTML.

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NextUpReef",
  operatingSystem: "iOS, Android",
  applicationCategory: "LifestyleApplication",
  applicationSubCategory: "Aquarium Tracking",
  description:
    "The best free reef tank tracking app. Log saltwater aquarium parameters like alkalinity, calcium, magnesium, nitrate, and phosphate. Get a Reef Score, view trend charts, set water change reminders, and connect with the reef community.",
  url: "https://nextupreef.com",
  downloadUrl: [
    "https://apps.apple.com/us/app/nextupreef/id6760728959",
    "https://play.google.com/store/apps/details?id=com.nextupreef.app",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  screenshot: "https://nextupreef.com/brand/splash2.png",
  featureList: [
    "Log reef water parameters in seconds",
    "Reef Score and Stability Score tracking",
    "Trend charts and analytics",
    "Water change and maintenance reminders",
    "Push notification alerts",
    "Community feed with peer comparison",
    "Equipment and livestock tracking",
    "Monthly tank photo timeline",
    "60+ achievement badges",
    "Support for 7 tank types: Mixed, SPS, LPS, Softies, Nano, ULNS, Fish Only",
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
  description:
    "NextUpReef builds free mobile apps for the reef aquarium hobby, helping reefers track parameters, monitor tank health, and connect with the community.",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61576553765840",
    "https://www.instagram.com/nextupreefapp/",
    "https://apps.apple.com/us/app/nextupreef/id6760728959",
    "https://play.google.com/store/apps/details?id=com.nextupreef.app",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@nextupreef.com",
    contactType: "customer support",
  },
};

// ─── END JSON-LD ───────────────────────────────────────────────────────────

const ALL_SCREENSHOTS = [
  { src: "/screenshots/screenshot-store-log-v4.png", label: "Log", alt: "Log parameters in seconds with real-time color feedback", featured: false },
  { src: "/screenshots/screenshot-store-dashboard-v5.png", label: "Dashboard", alt: "Reef Score and Stability Score dashboard", featured: true },
  { src: "/screenshots/screenshot-store-analytics-v4.png", label: "Analytics", alt: "Parameter trend charts and history", featured: false },
  { src: "/screenshots/screenshot-store-reminders-v4.png", label: "Reminders", alt: "Smart maintenance reminders", featured: false },
  { src: "/screenshots/screenshot-store-tank-v5.png", label: "Tank", alt: "Full tank profile with equipment and livestock", featured: false },
  { src: "/screenshots/screenshot-store-community-v4.png", label: "Community", alt: "Reef community leaderboard", featured: false },
];

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.92)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px", cursor: "zoom-out",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute", top: 20, right: 20,
          width: 40, height: 40, borderRadius: "50%",
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "white", fontSize: "20px", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
        aria-label="Close"
      >✕</button>
      <Image
        src={src} alt={alt}
        width={390} height={844}
        onClick={e => e.stopPropagation()}
        style={{
          maxHeight: "90vh", width: "auto",
          borderRadius: "32px",
          boxShadow: "0 40px 80px rgba(0,0,0,0.8)",
          cursor: "default",
        }}
      />
      <p style={{
        position: "absolute", bottom: 24,
        color: "rgba(255,255,255,0.4)",
        fontSize: "13px", fontWeight: 600,
      }}>Tap anywhere to close</p>
    </div>
  );
}

export default function HomePage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <main style={{ background: "var(--bg-dark)" }}>

      {/* ── JSON-LD Schema (invisible to users, read by Google) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* ── HERO ── */}
      <section style={{
        maxWidth: "780px", margin: "0 auto", padding: "80px 24px 0",
        textAlign: "center", display: "flex", flexDirection: "column",
        alignItems: "center", gap: "20px",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.18)",
          borderRadius: "999px", padding: "6px 16px",
          fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em",
          textTransform: "uppercase", color: "var(--reef)",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--reef)", display: "inline-block" }} />
          Free · iOS &amp; Android
        </div>

        <h1 style={{
          fontSize: "clamp(40px, 8vw, 68px)", fontWeight: 900,
          lineHeight: 1.05, letterSpacing: "-0.04em", margin: 0, color: "var(--text-light)",
        }}>
          Track your reef.<br />
          <span style={{
            background: "linear-gradient(135deg, var(--reef) 0%, var(--reef-soft) 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>Know your reef.</span>
        </h1>

        <p style={{ fontSize: "18px", lineHeight: 1.65, color: "var(--text-muted)", margin: 0, maxWidth: "520px", fontWeight: 400 }}>
          Log parameters in seconds, get AI-powered reef insights, and see exactly how your tank stacks up against other reefers.
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="https://apps.apple.com/us/app/nextupreef/id6760728959" target="_blank" rel="noopener noreferrer" className="btn primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.nextupreef.app" target="_blank" rel="noopener noreferrer" className="btn secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M3.18 23.76c.3.17.64.24.99.2l13.29-13.29L13.9 7.1 3.18 23.76z" fill="#EA4335"/>
              <path d="M20.96 10.34L18.1 8.7l-3.66 3.66 3.66 3.66 2.89-1.66c.82-.47.82-1.55-.03-2.02z" fill="#FBBC04"/>
              <path d="M3.18.24C2.83.2 2.49.27 2.19.44.94 1.16.94 2.84 2.19 3.56L13.9 17.1l3.56-3.56L3.18.24z" fill="#34A853"/>
              <path d="M2.19.44C1.37.91 1 1.76 1 2.64v18.72c0 .88.37 1.72 1.19 2.2L13.9 12 2.19.44z" fill="#4285F4"/>
            </svg>
            Google Play
          </a>
        </div>
      </section>

      {/* ── SCREENSHOTS ── */}
      <section style={{ maxWidth: "1000px", margin: "0 auto", padding: "48px 24px 0" }}>
        <p style={{
          textAlign: "center", fontSize: "12px", fontWeight: 600,
          color: "var(--text-muted)", marginBottom: "16px",
          letterSpacing: "0.04em", textTransform: "uppercase",
        }}>
          Tap any screenshot to zoom
        </p>

        {/* Row 1 */}
        <div className="home-screenshot-grid">
          {ALL_SCREENSHOTS.slice(0, 3).map(s => (
            <div
              key={s.label}
              onClick={() => setLightbox({ src: s.src, alt: s.alt })}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: "12px",
                transform: s.featured ? "scale(1.04)" : "scale(1)",
                transformOrigin: "bottom center", cursor: "zoom-in",
              }}
            >
              <Image
                src={s.src} alt={s.alt} width={300} height={650}
                style={{
                  width: "100%", height: "auto", borderRadius: "20px",
                  boxShadow: s.featured
                    ? "0 0 0 1px rgba(44,196,214,0.3), 0 32px 64px rgba(0,0,0,0.5)"
                    : "0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)",
                }}
              />
              <span style={{
                fontSize: "13px", fontWeight: 700,
                color: s.featured ? "var(--reef)" : "var(--text-muted)",
                textTransform: "uppercase", letterSpacing: "0.08em",
              }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="home-screenshot-grid" style={{ marginTop: "16px" }}>
          {ALL_SCREENSHOTS.slice(3).map(s => (
            <div
              key={s.label}
              onClick={() => setLightbox({ src: s.src, alt: s.alt })}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: "12px",
                cursor: "zoom-in",
              }}
            >
              <Image
                src={s.src} alt={s.alt} width={300} height={650}
                style={{
                  width: "100%", height: "auto", borderRadius: "20px",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)",
                }}
              />
              <span style={{
                fontSize: "13px", fontWeight: 700, color: "var(--text-muted)",
                textTransform: "uppercase", letterSpacing: "0.08em",
              }}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "100px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-label">AI-Powered Pro Features</div>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 900, margin: "12px 0 12px", letterSpacing: "-0.03em" }}>
            Your reef. Powered by AI.
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-muted)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.65 }}>New accounts get a free 30-day Pro trial. No credit card required.</p>
        </div>
        <div className="home-feature-grid" style={{ marginBottom: "80px" }}>
          {[
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/></svg>, title: "Reef AI Advisor", desc: "Get a full AI analysis of your tank whenever you want. Covers parameters, equipment, livestock, dosing, and what to do next. Updates every 24 hours.", tags: ["Pro", "Personalized"] },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, title: "Ask Reef AI", desc: "Chat directly with AI that knows your tank. Ask why your alk is dropping, what corals suit your setup, or how to lower phosphate. 10 messages per day.", tags: ["Pro", "10 msgs/day"] },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>, title: "AI Photo Logging", desc: "Point your camera at any test kit and AI reads the values for you. Works with Hanna, API, Red Sea, Salifert, Milwaukee, and more.", tags: ["Pro", "Any test kit"] },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>, title: "Neptune Apex Integration", desc: "Connect your Apex and log temp, pH, salinity, ORP, and Trident readings (alk, ca, mg) directly from your controller into NextUpReef with one tap.", tags: ["Pro", "One-tap logging"] },
          ].map(f => (
            <div key={f.title} style={{ background: "linear-gradient(135deg, rgba(44,196,214,0.06) 0%, rgba(44,196,214,0.02) 100%)", border: "1px solid rgba(44,196,214,0.2)", borderRadius: "var(--radius-lg)", padding: "28px 24px", display: "flex", flexDirection: "column", gap: "12px" }} className="feature-card">
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--reef-glow)", border: "1px solid rgba(44,196,214,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--reef)" }}>{f.icon}</div>
              <div>
                <h3 style={{ fontSize: "17px", fontWeight: 900, margin: "0 0 6px", color: "var(--text-light)" }}>{f.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65, margin: 0, fontWeight: 500 }}>{f.desc}</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                {f.tags.map(t => <span key={t} style={{ fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "999px", background: "rgba(44,196,214,0.07)", border: "1px solid rgba(44,196,214,0.15)", color: "var(--reef)" }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-label">Free Features</div>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 900, margin: "12px 0 0", letterSpacing: "-0.03em" }}>
            Built for serious reef keepers
          </h2>
        </div>
        <div className="home-feature-grid">
          {[
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>, title: "Reef & Stability Score", desc: "Two live scores calculated from your real data — not guesswork.", tags: ["Live", "Weighted"] },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>, title: "Parameter Logging", desc: "Log Alk, Ca, Mg, NO3, PO4, and more in seconds. Last values pre-filled.", tags: ["10+ params", "Custom targets"] },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, title: "Trend Analytics", desc: "Charts for every parameter with target ranges and water change markers.", tags: ["7D to 1Y", "WC markers"] },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>, title: "Smart Reminders", desc: "Never miss a water change, filter sock, or skimmer clean.", tags: ["Push alerts", "Auto-schedule"] },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: "Reef Community", desc: "See inside top-ranked tanks — their params, salt, dosing, and equipment.", tags: ["Leaderboard", "Full analytics"] },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>, title: "Badges & Milestones", desc: "Earn achievements for consistent testing, steady alk, water changes, and more.", tags: ["Habits", "Milestones"] },
          ].map(f => (
            <div key={f.title} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "28px 24px", display: "flex", flexDirection: "column", gap: "12px", transition: "all 0.2s ease" }} className="feature-card">
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--reef-glow)", border: "1px solid rgba(44,196,214,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--reef)" }}>{f.icon}</div>
              <div>
                <h3 style={{ fontSize: "17px", fontWeight: 900, margin: "0 0 6px", color: "var(--text-light)" }}>{f.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65, margin: 0, fontWeight: 500 }}>{f.desc}</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                {f.tags.map(t => <span key={t} style={{ fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "999px", background: "rgba(44,196,214,0.07)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)" }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container-narrow">
          <div className="cta-card">
            <h2>Stop guessing.<br />Start tracking.</h2>
            <p>Free to download. 30-day Pro trial included. No credit card required.</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
              <a href="https://apps.apple.com/us/app/nextupreef/id6760728959" target="_blank" rel="noopener noreferrer" className="btn primary large">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                App Store
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.nextupreef.app" target="_blank" rel="noopener noreferrer" className="btn secondary large">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l13.29-13.29L13.9 7.1 3.18 23.76z" fill="#EA4335"/>
                  <path d="M20.96 10.34L18.1 8.7l-3.66 3.66 3.66 3.66 2.89-1.66c.82-.47.82-1.55-.03-2.02z" fill="#FBBC04"/>
                  <path d="M3.18.24C2.83.2 2.49.27 2.19.44.94 1.16.94 2.84 2.19 3.56L13.9 17.1l3.56-3.56L3.18.24z" fill="#34A853"/>
                  <path d="M2.19.44C1.37.91 1 1.76 1 2.64v18.72c0 .88.37 1.72 1.19 2.2L13.9 12 2.19.44z" fill="#4285F4"/>
                </svg>
                Google Play
              </a>
            </div>
            <div className="cta-sub">Free to download · iOS &amp; Android</div>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}

    </main>
  );
}