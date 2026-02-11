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
            <h1>
              Log fast. Track stability.
              <br />
              <span>Level up your reef.</span>
            </h1>

            <div className="hero-buttons">
              <a
                href={site.storeLinks.appStore}
                className="btn primary"
              >
                Download on App Store
              </a>

              <Link href="/faq" className="btn secondary">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="value-props">
        <div className="container-narrow">
          <div className="value-grid">
            <div className="value-item">
              <div className="value-icon">⚡</div>
              <h3>Fast Logging</h3>
              <p>
                Wet-hands friendly +/− buttons or exact typing. Never miss a reading again.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon">📈</div>
              <h3>Track Stability</h3>
              <p>
                See trends across 1D to 90D. Know exactly when your reef is thriving or needs attention.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon">🪸</div>
              <h3>Reef Score & Badges</h3>
              <p>
                Get an instant health score and unlock achievement badges as you maintain stability and grow your reef.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon">🐠</div>
              <h3>Track Everything</h3>
              <p>
                Manage equipment, livestock, corals, and multiple tanks all in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="screenshots">
        <div className="container">
          <h2>Designed for reef keepers</h2>
          <p>Beautiful, powerful, and built for your tank</p>

          <div className="screenshot-grid">
            <div className="screenshot-placeholder">
              <span className="placeholder-icon">📱</span>
              <span>Dashboard</span>
            </div>
            <div className="screenshot-placeholder">
              <span className="placeholder-icon">🧪</span>
              <span>Log Parameters</span>
            </div>
            <div className="screenshot-placeholder">
              <span className="placeholder-icon">📈</span>
              <span>Analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container-narrow">
          <div className="cta-card">
            <h2>Ready to level up your reef?</h2>
            <p>Join reef keepers tracking thousands of parameters every day</p>
            <a href={site.storeLinks.appStore} className="btn primary large">
              Download NextUpReef
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}