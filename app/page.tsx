import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ background: "var(--bg-dark)" }}>

      {/* ── HERO ── */}
      <section style={{
        maxWidth: "780px",
        margin: "0 auto",
        padding: "80px 24px 0",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}>

        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(44,196,214,0.08)",
          border: "1px solid rgba(44,196,214,0.18)",
          borderRadius: "999px", padding: "6px 16px",
          fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em",
          textTransform: "uppercase", color: "var(--reef)",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--reef)", display: "inline-block" }} />
          Free · iOS &amp; Android
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: "clamp(40px, 8vw, 68px)",
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
          margin: 0,
          color: "var(--text-light)",
        }}>
          Track your reef.<br />
          <span style={{
            background: "linear-gradient(135deg, var(--reef) 0%, var(--reef-soft) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>Know your reef.</span>
        </h1>

        {/* Sub */}
        <p style={{
          fontSize: "18px", lineHeight: 1.65,
          color: "var(--text-muted)", margin: 0,
          maxWidth: "520px", fontWeight: 400,
        }}>
          Log parameters in seconds, get a real Reef Score, and see how your tank compares to other reefers worldwide.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href="https://apps.apple.com/us/app/nextupreef/id6760728959"
            target="_blank" rel="noopener noreferrer"
            className="btn primary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.nextupreef.app"
            target="_blank" rel="noopener noreferrer"
            className="btn secondary"
          >
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

      {/* ── SCREENSHOTS — right below hero ── */}
      <section style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "48px 24px 0",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          alignItems: "flex-end",
        }}>
          {[
            { src: "/screenshots/screenshot-store-log-v4.png", label: "Log", alt: "Log parameters in seconds with real-time color feedback" },
            { src: "/screenshots/screenshot-store-dashboard-v5.png", label: "Dashboard", alt: "Reef Score and Stability Score dashboard", featured: true },
            { src: "/screenshots/screenshot-store-analytics-v4.png", label: "Analytics", alt: "Parameter trend charts and history" },
          ].map(s => (
            <div key={s.label} style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              transform: s.featured ? "scale(1.04)" : "scale(1)",
              transformOrigin: "bottom center",
            }}>
              <Image
                src={s.src}
                alt={s.alt}
                width={300}
                height={650}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "20px",
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

        {/* second row of screenshots */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          marginTop: "16px",
        }}>
          {[
            { src: "/screenshots/screenshot-store-reminders-v4.png", label: "Reminders", alt: "Smart maintenance reminders" },
            { src: "/screenshots/screenshot-store-tank-v5.png", label: "Tank", alt: "Full tank profile with equipment and livestock" },
            { src: "/screenshots/screenshot-store-community-v4.png", label: "Community", alt: "Reef community leaderboard" },
          ].map(s => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
              <Image
                src={s.src}
                alt={s.alt}
                width={300}
                height={650}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "20px",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)",
                }}
              />
              <span style={{
                fontSize: "13px", fontWeight: 700,
                color: "var(--text-muted)",
                textTransform: "uppercase", letterSpacing: "0.08em",
              }}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES — compact 3-col grid ── */}
      <section style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "100px 24px",
      }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-label">Everything you need</div>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 900, margin: "12px 0 0", letterSpacing: "-0.03em" }}>
            Built for serious reef keepers
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}>
          {[
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
              title: "Reef & Stability Score",
              desc: "Two live scores calculated from your real data — not guesswork.",
              tags: ["Live", "Weighted"],
            },
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
              title: "Parameter Logging",
              desc: "Log Alk, Ca, Mg, NO3, PO4, and more in seconds. Last values pre-filled.",
              tags: ["10+ params", "Custom targets"],
            },
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
              title: "Trend Analytics",
              desc: "Charts for every parameter with target ranges and water change markers.",
              tags: ["7D to 1Y", "WC markers"],
            },
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>,
              title: "Smart Reminders",
              desc: "Never miss a water change, filter sock, or skimmer clean.",
              tags: ["Push alerts", "Auto-schedule"],
            },
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
              title: "Reef Community",
              desc: "See inside top-ranked tanks — their params, salt, dosing, and equipment.",
              tags: ["Leaderboard", "Full analytics"],
            },
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
              title: "Badges",
              desc: "Earn achievements for consistent testing, steady alk, water changes, and more.",
              tags: ["Habits", "Milestones"],
            },
          ].map(f => (
            <div
              key={f.title}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                transition: "all 0.2s ease",
              }}
              className="feature-card"
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: "var(--reef-glow)",
                border: "1px solid rgba(44,196,214,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--reef)",
              }}>
                {f.icon}
              </div>
              <div>
                <h3 style={{ fontSize: "17px", fontWeight: 900, margin: "0 0 6px", color: "var(--text-light)" }}>{f.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.65, margin: 0, fontWeight: 500 }}>{f.desc}</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                {f.tags.map(t => (
                  <span key={t} style={{
                    fontSize: "11px", fontWeight: 700,
                    padding: "4px 10px", borderRadius: "999px",
                    background: "rgba(44,196,214,0.07)",
                    border: "1px solid rgba(44,196,214,0.12)",
                    color: "var(--reef)",
                  }}>{t}</span>
                ))}
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
            <p>Free to use. No subscription. No ads. Just better reef keeping.</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
              <a href="https://apps.apple.com/us/app/nextupreef/id6760728959" target="_blank" rel="noopener noreferrer" className="btn primary large">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
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

    </main>
  );
}