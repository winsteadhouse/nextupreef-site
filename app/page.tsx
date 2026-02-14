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
              <a href={site.storeLinks.appStore} className="btn primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Free
              </a>
              <Link href="/faq" className="btn secondary">
                How it works
              </Link>
            </div>

            <div className="hero-social-proof">
              <div className="proof-item">
                <strong>9</strong> parameters tracked
              </div>
              <div className="proof-divider" />
              <div className="proof-item">
                <strong>Multi-tank</strong> ready
              </div>
              <div className="proof-divider" />
              <div className="proof-item">
                <strong>30s</strong> to log
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="problem-section">
        <div className="container-narrow">
          <div className="section-label">The Problem</div>
          <h2>Notebooks and spreadsheets weren&apos;t built for reef tanks.</h2>
          <p className="section-sub">
            You test your water, scribble a number, and forget what last week looked like.
            Was alk trending down? Is phosphate climbing? Are you actually improving — or just guessing?
          </p>

          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              </div>
              <h4>Scattered notes</h4>
              <p>Paper logs, phone notes, spreadsheets — your data is everywhere except where you need it.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h4>No trends</h4>
              <p>Without charts and history, you can&apos;t see if things are getting better or worse until it&apos;s too late.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <h4>Reactive, not proactive</h4>
              <p>By the time coral is bleaching or algae is blooming, you&apos;re already behind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES — THE 4 TABS */}
      <section className="features-section">
        <div className="container">
          <div className="section-label">The Solution</div>
          <h2>Four tabs. Total control.</h2>
          <p className="section-sub">
            Everything you need to manage your reef — from quick logging to deep analytics — organized in four simple screens.
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
              <p>Your at-a-glance command center. See your <strong>Reef Score</strong>, <strong>Stability Score</strong>, latest parameter values with green/yellow/red indicators, earned badges, and personalized recommendations — all without scrolling.</p>
              <div className="feature-tags">
                <span>Reef Score</span>
                <span>Stability Score</span>
                <span>Badges</span>
                <span>Smart Tips</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-header">
                <div className="feature-number">02</div>
                <div className="feature-icon-wrap">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                </div>
              </div>
              <h3>Log</h3>
              <p>Test one param or all nine — your call. <strong>+/− buttons</strong> start from your last reading so you&apos;re logging in seconds. Cards turn green, yellow, or red in real time. Save and stay — log more without navigating away.</p>
              <div className="feature-tags">
                <span>Real-time color</span>
                <span>Custom targets</span>
                <span>9 parameters</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-header">
                <div className="feature-number">03</div>
                <div className="feature-icon-wrap">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
              </div>
              <h3>Tank</h3>
              <p>Your tank&apos;s complete profile. Track <strong>equipment</strong>, <strong>livestock</strong>, <strong>corals</strong>, <strong>dosing products</strong>, and water change schedule. Supports multiple tanks with independent tracking.</p>
              <div className="feature-tags">
                <span>Equipment</span>
                <span>Livestock</span>
                <span>Water changes</span>
                <span>Multi-tank</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-header">
                <div className="feature-number">04</div>
                <div className="feature-icon-wrap">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
              </div>
              <h3>Analytics</h3>
              <p>Interactive charts from 1 day to 90 days. See <strong>time-in-range</strong> percentages, <strong>stability grades</strong>, trend direction, and <strong>NO3:PO4 ratio</strong> tracking — the data your reef actually needs.</p>
              <div className="feature-tags">
                <span>Trend charts</span>
                <span>Time in range</span>
                <span>NO3:PO4 ratio</span>
                <span>Stability grades</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARAMETERS */}
      <section className="params-section">
        <div className="container-narrow">
          <div className="section-label">What You Track</div>
          <h2>Nine parameters. One source of truth.</h2>
          <p className="section-sub">
            Track everything that matters for a healthy reef. Set custom target ranges for your specific tank type — SPS, LPS, Mixed, Softies, Nano, or ULNS.
          </p>

          <div className="params-grid">
            {[
              { name: "Alkalinity", unit: "dKH" },
              { name: "Calcium", unit: "ppm" },
              { name: "Magnesium", unit: "ppm" },
              { name: "Nitrate", unit: "ppm" },
              { name: "Phosphate", unit: "ppm" },
              { name: "Salinity", unit: "SG" },
              { name: "pH", unit: "" },
              { name: "Temperature", unit: "°F" },
              { name: "Ammonia", unit: "ppm" },
            ].map((p) => (
              <div key={p.name} className="param-chip">
                <span className="param-name">{p.name}</span>
                {p.unit && <span className="param-unit">{p.unit}</span>}
              </div>
            ))}
          </div>

          <div className="params-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            Default ranges adjust to your reef type. Override any target with your own custom min/max.
          </div>
        </div>
      </section>

      {/* SCORING */}
      <section className="scoring-section">
        <div className="container-narrow">
          <div className="section-label">Your Numbers, Scored</div>
          <h2>Know exactly where you stand.</h2>

          <div className="scoring-grid">
            <div className="score-card reef-score-card">
              <div className="score-number">87</div>
              <h3>Reef Score</h3>
              <p>A composite health score based on parameter balance, testing frequency, water change consistency, equipment, and tank maturity. Tap for a full category breakdown.</p>
              <div className="score-factors">
                <span>Parameter Health</span>
                <span>Testing</span>
                <span>Maintenance</span>
                <span>Equipment</span>
                <span>Maturity</span>
              </div>
            </div>
            <div className="score-card stability-score-card">
              <div className="score-number">72</div>
              <h3>Stability Score</h3>
              <p>Measures how consistent your parameters stay over time. A tank that holds 8.0 dKH beats one swinging between 7 and 9 — stability is what corals crave.</p>
              <div className="score-factors">
                <span>Consistency</span>
                <span>Trend Health</span>
                <span>Regularity</span>
                <span>Recovery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="screenshots">
        <div className="container">
          <div className="section-label">See It In Action</div>
          <h2>Designed for reef keepers</h2>
          <p className="section-sub">Beautiful, powerful, and built for wet hands</p>

          <div className="screenshot-grid">
            <div className="screenshot-placeholder">
              <span className="placeholder-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
              </span>
              <span>Dashboard</span>
            </div>
            <div className="screenshot-placeholder">
              <span className="placeholder-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </span>
              <span>Log Parameters</span>
            </div>
            <div className="screenshot-placeholder">
              <span className="placeholder-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </span>
              <span>Analytics</span>
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
              <p>Scores, trends, and recommendations update with every log. Consistency is the secret.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container-narrow">
          <div className="cta-card">
            <h2>Stop guessing.<br />Start tracking.</h2>
            <p>Free to download. No subscription. No ads. Just better reef keeping.</p>
            <a href={site.storeLinks.appStore} className="btn primary large">
              Download NextUpReef
            </a>
            <div className="cta-sub">
              Available on iOS &middot; Android coming soon
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}