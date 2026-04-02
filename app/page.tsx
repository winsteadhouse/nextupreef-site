import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-wrapper">
          <Image
            src="/brand/splash2.png"
            alt="NextUpReef underwater reef"
            fill
            priority
            className="hero-bg"
          />
          <div className="hero-overlay" />
        </div>

        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">Reef Tank Management App</div>
            <h1>
              Your reef deserves
              <br />
              <span>smarter care.</span>
            </h1>
            <p className="hero-sub">
              Log water parameters in seconds, track stability over time, and get a real health score for your reef — all in one.
            </p>

            <div className="hero-buttons">
              <a href="https://apps.apple.com/us/app/nextupreef/id6760728959" target="_blank" rel="noopener noreferrer" className="btn primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                App Store
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.nextupreef.app" target="_blank" rel="noopener noreferrer" className="btn secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3.18 23.76c.3.17.64.24.99.2l13.29-13.29L13.9 7.1 3.18 23.76z" fill="#EA4335"/><path d="M20.96 10.34L18.1 8.7l-3.66 3.66 3.66 3.66 2.89-1.66c.82-.47.82-1.55-.03-2.02z" fill="#FBBC04"/><path d="M3.18.24C2.83.2 2.49.27 2.19.44.94 1.16.94 2.84 2.19 3.56L13.9 17.1l3.56-3.56L3.18.24z" fill="#34A853"/><path d="M2.19.44C1.37.91 1 1.76 1 2.64v18.72c0 .88.37 1.72 1.19 2.2L13.9 12 2.19.44z" fill="#4285F4"/></svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="problem-section">
        <div className="container-narrow">
          <div className="section-label">The Problem</div>
          <h2>Notebooks and spreadsheets weren&apos;t built for reef tanks.</h2>

          <div className="problem-card-single">
            <div className="problem-row">
              <div className="problem-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              </div>
              <div>
                <strong>Scattered notes</strong> — Paper logs, phone notes, spreadsheets. Your data is everywhere except where you need it.
              </div>
            </div>
            <div className="problem-row">
              <div className="problem-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <div>
                <strong>No trends</strong> — Without charts and history, you can&apos;t see if things are improving until it&apos;s too late.
              </div>
            </div>
            <div className="problem-row">
              <div className="problem-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <div>
                <strong>Reactive, not proactive</strong> — By the time coral is bleaching or algae is blooming, you&apos;re already behind.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES — THE 5 TABS */}
      <section className="features-section">
        <div className="container">
          <div className="section-label">The Solution</div>
          <h2>Five tabs. Total control.</h2>
          <p className="section-sub">
            Everything you need to manage your reef — organized in five simple screens.
          </p>

          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-card-header">
                <div className="feature-number">01</div>
                <div className="feature-icon-wrap">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                </div>
              </div>
              <h3>Dashboard</h3>
              <p>Your at-a-glance command center. <strong>Reef Score</strong>, <strong>Stability Score</strong>, peer comparison, earned badges, upcoming reminders, and personalized recommendations.</p>
              <div className="feature-tags">
                <span>Reef Score</span>
                <span>Peer Comparison</span>
                <span>Badges</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-header">
                <div className="feature-number">02</div>
                <div className="feature-icon-wrap">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
              </div>
              <h3>Tank</h3>
              <p>Your tank&apos;s complete profile. Track <strong>equipment</strong>, <strong>livestock</strong>, <strong>corals</strong>, and <strong>dosing</strong>. Upload monthly photos to build a growth timeline. Multi-tank ready.</p>
              <div className="feature-tags">
                <span>Equipment</span>
                <span>Livestock</span>
                <span>Monthly Photos</span>
                <span>Dosing</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-header">
                <div className="feature-number">03</div>
                <div className="feature-icon-wrap">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                </div>
              </div>
              <h3>Log</h3>
              <p><strong>+/− buttons</strong> start from your last reading. Cards turn green, yellow, or red in real time. Log one param or all ten — your call.</p>
              <div className="feature-tags">
                <span>Real-time color</span>
                <span>Custom targets</span>
                <span>Backdate logs</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-header">
                <div className="feature-number">04</div>
                <div className="feature-icon-wrap">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                </div>
              </div>
              <h3>Reminders</h3>
              <p>Never miss a water change or maintenance task. <strong>Water change scheduling</strong>, filter socks, carbon, RO/DI — with <strong>push notifications</strong> when things are due.</p>
              <div className="feature-tags">
                <span>Water changes</span>
                <span>Maintenance tasks</span>
                <span>Push alerts</span>
              </div>
            </div>

            <div className="feature-card" style={{ gridColumn: "1 / -1", maxWidth: "520px", margin: "0 auto" }}>
              <div className="feature-card-header">
                <div className="feature-number">05</div>
                <div className="feature-icon-wrap">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
              </div>
              <h3>Analytics</h3>
              <p>Interactive charts from 7 days to 1 year. <strong>Time-in-range</strong>, <strong>stability grades</strong>, trend direction, and <strong>NO3:PO4 ratio</strong> tracking.</p>
              <div className="feature-tags">
                <span>Trend charts</span>
                <span>Time in range</span>
                <span>NO3:PO4 ratio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY SECTION */}
      <section className="problem-section">
        <div className="container-narrow">
          <div className="section-label">Reef Community</div>
          <h2>See how your reef stacks up.</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "18px", lineHeight: "1.7", maxWidth: "640px", margin: "0 auto 48px", fontWeight: "600" }}>
            NextUpReef isn&apos;t just a personal tracker — it&apos;s a community of reefers sharing data, photos, and progress in real time.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", textAlign: "left" }}>
            {[
              {
                icon: "🏆",
                title: "Live Leaderboard",
                desc: "Tanks ranked by combined Reef + Stability score. See where you stand against other reefers running the same tank type.",
              },
              {
                icon: "📊",
                title: "Real Parameter Data",
                desc: "Browse other tanks' actual alk, calcium, mag, nitrate, and pH readings — color coded against target ranges so you can compare apples to apples.",
              },
              {
                icon: "📸",
                title: "Monthly Growth Timeline",
                desc: "Upload one photo per month to document your reef's progress. View any tank's full growth history and watch coral develop over time.",
              },
              {
                icon: "🧪",
                title: "Dosing Transparency",
                desc: "See exactly what salt mix and dosing regimen top-ranked reefers use — from two-part to kalkwasser to auto-dosers.",
              },
              {
                icon: "💧",
                title: "Water Change Habits",
                desc: "Water change frequency and percentage are visible on community profiles, giving context to each tank's parameter stability.",
              },
              {
                icon: "🔒",
                title: "Your Control",
                desc: "Community sharing is on by default but you can opt out per-tank at any time from your Tank tab or Settings. Your data, your choice.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                  padding: "28px 24px",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>{item.icon}</div>
                <h4 style={{ fontSize: "17px", fontWeight: "900", margin: "0 0 8px 0", color: "var(--text-light)" }}>{item.title}</h4>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.65", margin: 0, fontWeight: "600" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="screenshots">
        <div className="container">
          <div className="section-label">See It In Action</div>
          <h2>Designed for reef keepers</h2>

          <div className="screenshot-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", maxWidth: "900px" }}>
            <div className="screenshot-phone">
              <Image
                src="/screenshots/screenshot-dashboard-v3.png"
                alt="NextUpReef Dashboard showing Reef Score, Stability Score, and peer comparison"
                width={300}
                height={618}
                className="screenshot-img"
              />
              <span className="screenshot-label">Dashboard</span>
            </div>
            <div className="screenshot-phone">
              <Image
                src="/screenshots/screenshot-tank-v3.png"
                alt="NextUpReef Tank profile with equipment, salt mix, dosing, and monthly photos"
                width={300}
                height={618}
                className="screenshot-img"
              />
              <span className="screenshot-label">Tank</span>
            </div>
            <div className="screenshot-phone">
              <Image
                src="/screenshots/screenshot-community-v1.png"
                alt="NextUpReef Community feed showing leaderboard with tank scores, parameters, and photos"
                width={300}
                height={618}
                className="screenshot-img"
              />
              <span className="screenshot-label">Reef Community</span>
            </div>
            <div className="screenshot-phone">
              <Image
                src="/screenshots/screenshot-log-v2.png"
                alt="NextUpReef Log screen with parameter inputs and real-time color feedback"
                width={300}
                height={618}
                className="screenshot-img"
              />
              <span className="screenshot-label">Log</span>
            </div>
            <div className="screenshot-phone">
              <Image
                src="/screenshots/screenshot-reminders-v2.png"
                alt="NextUpReef Reminders tab with water changes and maintenance tasks"
                width={300}
                height={618}
                className="screenshot-img"
              />
              <span className="screenshot-label">Reminders</span>
            </div>
            <div className="screenshot-phone">
              <Image
                src="/screenshots/screenshot-analytics-v2.png"
                alt="NextUpReef Analytics with trend charts and stability grades"
                width={300}
                height={618}
                className="screenshot-img"
              />
              <span className="screenshot-label">Analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <div className="container-narrow">
          <div className="section-label">Get Started</div>
          <h2>Up and running in 30 seconds</h2>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h4>Create your tank</h4>
              <p>Name it, pick your reef type, enter your gallons, and choose which parameters you test.</p>
            </div>
            <div className="step-connector">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h4>Log your first test</h4>
              <p>Enter values with +/− buttons or type directly. Cards change color in real time.</p>
            </div>
            <div className="step-connector">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h4>Watch your reef thrive</h4>
              <p>Scores, trends, and reminders update with every log. Consistency is the secret.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container-narrow">
          <div className="cta-card">
            <h2>Stop guessing.<br />Start tracking.</h2>
            <p>Free to use. No subscription. No ads. Just better reef keeping.</p>
            <div className="hero-buttons" style={{ justifyContent: "center" }}>
              <a href="https://apps.apple.com/us/app/nextupreef/id6760728959" target="_blank" rel="noopener noreferrer" className="btn primary large">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                App Store
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.nextupreef.app" target="_blank" rel="noopener noreferrer" className="btn secondary large">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3.18 23.76c.3.17.64.24.99.2l13.29-13.29L13.9 7.1 3.18 23.76z" fill="#EA4335"/><path d="M20.96 10.34L18.1 8.7l-3.66 3.66 3.66 3.66 2.89-1.66c.82-.47.82-1.55-.03-2.02z" fill="#FBBC04"/><path d="M3.18.24C2.83.2 2.49.27 2.19.44.94 1.16.94 2.84 2.19 3.56L13.9 17.1l3.56-3.56L3.18.24z" fill="#34A853"/><path d="M2.19.44C1.37.91 1 1.76 1 2.64v18.72c0 .88.37 1.72 1.19 2.2L13.9 12 2.19.44z" fill="#4285F4"/></svg>
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