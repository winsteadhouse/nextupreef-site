import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reef Tank Salinity: Targets, Testing, and How to Adjust It Safely",
  description:
    "Complete guide to reef tank salinity — ideal ranges, how to test with a refractometer, what causes salinity swings, and how to adjust without shocking your corals.",
  alternates: {
    canonical: "https://nextupreef.com/blog/reef-tank-salinity-guide",
  },
  openGraph: {
    title: "Reef Tank Salinity: Targets, Testing, and How to Adjust It Safely",
    description:
      "What salinity targets to hit, how to test accurately, and how to fix high or low salinity without crashing your tank.",
    url: "https://nextupreef.com/blog/reef-tank-salinity-guide",
    images: [{ url: "/brand/splash2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Reef Tank Salinity: Targets, Testing, and How to Adjust It Safely",
  description:
    "Ideal salinity ranges, refractometer calibration, and the right way to raise or lower salinity in a reef tank.",
  image: "https://nextupreef.com/brand/splash2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-05-09",
  dateModified: "2026-05-09",
  mainEntityOfPage: "https://nextupreef.com/blog/reef-tank-salinity-guide",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the ideal salinity for a reef tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ideal reef tank salinity is 1.025 specific gravity, or 35 ppt. Acceptable range is 1.024 to 1.026. Natural seawater sits at 1.025, and reef tanks should match. Fish-only tanks can run lower (1.020 to 1.024) but corals do best at full marine salinity.",
      },
    },
    {
      "@type": "Question",
      name: "Why is my reef tank salinity rising?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rising salinity is almost always caused by evaporation. Water evaporates but salt doesn't — so as water levels drop, salinity rises. The fix is an auto top-off (ATO) that replaces evaporated water with fresh RODI water. Without an ATO, you have to manually top off every day.",
      },
    },
    {
      "@type": "Question",
      name: "How do I lower salinity in a reef tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To lower salinity safely, add fresh RODI water in small amounts over several hours. Never drop salinity more than 0.001 per hour — fast salinity changes shock corals and invertebrates. For a serious drop, do small water changes with lower-salinity replacement water over several days.",
      },
    },
    {
      "@type": "Question",
      name: "Are hydrometers accurate for reef tanks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Swing-arm and floating hydrometers are imprecise and drift with temperature. For a reef tank, use a refractometer calibrated with 35 ppt calibration fluid, or a digital salinity meter. Hydrometers can be off by 0.002 or more — enough to put salinity outside the acceptable range without knowing it.",
      },
    },
  ],
};

export default function ReefTankSalinityPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 20px" }}>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "32px" }}>
          <Link href="/" style={{ color: "var(--reef)" }}>Home</Link>
          {" › "}
          <Link href="/blog" style={{ color: "var(--reef)" }}>Blog</Link>
          {" › "}
          Reef Tank Salinity Guide
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Salinity", "Water Chemistry", "Testing"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Reef Tank Salinity: Targets, Testing, and How to Adjust It Safely
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          May 9, 2026 · 7 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            Salinity is the most fundamental parameter in a reef tank — and the one most reefers get wrong on day one. The good news: it&apos;s also the easiest to fix. Once you understand where salinity should sit, how to test it accurately, and how to keep it stable, you eliminate one of the biggest sources of reef tank stress.
          </p>
          <p>
            This guide covers reef tank salinity targets, why hydrometers are useless, how to calibrate a refractometer, what causes salinity to drift, and how to adjust it without shocking your livestock.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            What Salinity Actually Is
          </h2>
          <p>
            Salinity is the amount of dissolved salt in your water. Reefers measure it in one of three ways:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Specific gravity (SG):</strong> A ratio of saltwater density to freshwater density. Reef target: 1.025.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Parts per thousand (ppt):</strong> Grams of salt per kilogram of water. Reef target: 35 ppt.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Conductivity (mS/cm):</strong> Electrical conductivity of the water. Reef target: about 53 mS/cm.</li>
          </ul>
          <p>
            These are three ways of measuring the same thing. Most hobby tools display specific gravity or ppt. Choose one and stick with it — converting back and forth introduces rounding errors.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Target Salinity by Tank Type:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={{ color: "var(--text-light)" }}>SPS-dominant:</strong> 1.025 – 1.026 (35 – 36 ppt)</li>
              <li><strong style={{ color: "var(--text-light)" }}>Mixed Reef:</strong> 1.024 – 1.026 (34 – 36 ppt)</li>
              <li><strong style={{ color: "var(--text-light)" }}>LPS / Softies:</strong> 1.023 – 1.026 (33 – 36 ppt)</li>
              <li><strong style={{ color: "var(--text-light)" }}>Fish-only:</strong> 1.020 – 1.024 (28 – 33 ppt)</li>
              <li><strong style={{ color: "var(--text-light)" }}>Natural seawater:</strong> 1.025 (35 ppt)</li>
            </ul>
          </div>
          <p>
            For any tank holding corals, 1.025 is the safest target — it matches the ocean. Pick that number and hold it within ±0.001 and you&apos;ve solved one of the easiest parts of reefkeeping.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            How to Test Salinity Accurately
          </h2>
          <p>
            Salinity testing is where most reefers go wrong. The tool you use matters more than how often you test.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Refractometer:</strong> The right tool for the job. About $25. Place a drop of tank water on the glass, look through the eyepiece, read the line. Refractometers MUST be calibrated with 35 ppt calibration fluid (not RODI water — that&apos;s a myth). Calibrate every 1 to 2 months and after any temperature swing.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Digital salinity meter:</strong> Hanna, Milwaukee, or Apex probes. More expensive but easier to use. Needs calibration with two-point fluids every 3 to 6 months. The most accurate option if you keep up with calibration.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Conductivity probe on a controller:</strong> Apex, GHL, Neptune. Gives continuous readings. Same caveat — calibration is everything.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Hydrometer (swing-arm or floating):</strong> Don&apos;t use these for a reef tank. They&apos;re inaccurate, affected by temperature, and produce readings that can be 0.002 to 0.005 off from reality. That&apos;s enough to be lethal to corals.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            How to Calibrate a Refractometer
          </h2>
          <p>
            Refractometers drift over time. A miscalibrated refractometer is worse than no refractometer — it gives you false confidence. The procedure:
          </p>
          <ol style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li>Buy a bottle of 35 ppt (1.025) calibration fluid. Brightwell Aquatics and Pinpoint both sell it. Don&apos;t use RODI water for calibration — your refractometer is designed to read seawater, not pure water, and calibrating with the wrong fluid gives wrong readings.</li>
            <li>Wait until both the refractometer and the calibration fluid have been sitting in the same room for at least 30 minutes. Temperature matters.</li>
            <li>Open the plate, place a few drops of calibration fluid on the glass, close the plate.</li>
            <li>Look through the eyepiece toward a light source. You should see the dividing line.</li>
            <li>If the line is NOT at 1.025 (or 35 ppt), use the small screwdriver that came with the refractometer to turn the calibration screw until the line is exactly on 1.025.</li>
            <li>Wipe everything dry. You&apos;re calibrated until next month.</li>
          </ol>

          <div style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}>
            <img
              src="/screenshots/phone-log-v2.png"
              alt="Logging salinity in NextUpReef"
              style={{ width: "100%", maxWidth: "280px", borderRadius: "24px", boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}
            />
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Why Salinity Drifts (and Why an ATO Fixes It)
          </h2>
          <p>
            Salinity rises in your tank for one reason: evaporation. When water evaporates from the tank surface, the salt stays behind. Less water, same amount of salt, higher salinity. A 75 gallon tank can evaporate 1 to 2 gallons per day — that&apos;s a significant salinity rise without intervention.
          </p>
          <p>
            The fix is an auto top-off (ATO). An ATO reservoir of fresh RODI water sits next to your tank. An optical sensor in the sump (or AIO chamber) detects when water level drops and triggers a small pump to add fresh water until the level is back up. Result: salinity stays rock-steady forever.
          </p>
          <p>
            Without an ATO, you&apos;re manually topping off every day. Miss a day and salinity climbs. Miss a weekend and salinity can rise 0.002 or more — enough to stress corals. An ATO is one of the highest-ROI upgrades in reefkeeping. Tunze Osmolator, AutoAqua Smart ATO, and XP Aqua Duetto are all reliable choices in the $80 to $180 range.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            How to Raise Salinity
          </h2>
          <p>
            If your salinity is low (say 1.022 and you want 1.025), here&apos;s how to raise it safely:
          </p>
          <ol style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li>Mix new saltwater at a slightly higher salinity (say 1.028).</li>
            <li>Do small water changes (5 to 10 percent at a time) over several days, replacing tank water with the higher-salinity batch.</li>
            <li>Test after each change. Stop when you hit your target.</li>
            <li>Never raise salinity more than 0.001 per day. Corals and inverts (especially shrimp and snails) shock easily with rapid salinity changes.</li>
          </ol>
          <p>
            Do NOT just dump salt directly into the display — it creates pockets of hypersaline water that can burn coral tissue before mixing.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            How to Lower Salinity
          </h2>
          <p>
            Lower salinity is more common because reefers underestimate evaporation. To bring salinity down (say from 1.028 to 1.025):
          </p>
          <ol style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li>Add small amounts of RODI water to the sump every few hours over a full day. A few cups at a time, not gallons all at once.</li>
            <li>Mix it well with surface agitation so fresh water doesn&apos;t pool.</li>
            <li>Test every 4 to 6 hours.</li>
            <li>Stop when you hit target. Aim for no more than 0.001 to 0.002 drop per day.</li>
        </ol>
          <p>
            For a serious salinity drop (more than 0.003), use small water changes with target-salinity water instead. Multiple small changes are gentler than direct RODI dilution.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Common Salinity Mistakes
          </h2>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Topping off with saltwater.</strong> A classic mistake. When water evaporates, salt stays — you only need to replace the water. Top off with RODI, never with saltwater.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Using a hydrometer.</strong> They drift, they&apos;re temperature-sensitive, and they&apos;re consistently inaccurate. Spend $25 on a refractometer.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Not calibrating the refractometer.</strong> An uncalibrated refractometer reading 1.025 might actually be 1.022 or 1.028. Worst of both worlds: you think you know, and you&apos;re wrong.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Fast salinity changes.</strong> Going from 1.028 to 1.024 in one day shocks every coral and invert in the tank. Always slow.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Inconsistent mixing.</strong> Fresh saltwater for water changes needs at least 24 hours of mixing with a powerhead before use. Otherwise salinity reads incorrectly.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Trusting bag salinity.</strong> Fish stores often run lower salinity. New livestock should be drip-acclimated to match your tank salinity slowly.</li>
          </ul>

          <div style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}>
            <img
              src="/screenshots/phone-ai-v2.png"
              alt="AI reef tank advice on salinity drift"
              style={{ width: "100%", maxWidth: "280px", borderRadius: "24px", boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}
            />
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Tracking Salinity Over Time
          </h2>
          <p>
            Salinity is supposed to be boring — flat-line at 1.025 forever. If your chart shows drift, something&apos;s wrong: ATO failed, refractometer needs calibration, or you topped off with saltwater by mistake.
          </p>
          <p>
            NextUpReef logs every salinity reading and plots the trend. A flat green line is success. A rising line means evaporation isn&apos;t being replaced. A jagged line means your readings are inconsistent — probably a calibration issue. Tracking makes the problem obvious.{" "}
            <Link href="/blog/how-to-track-saltwater-aquarium-parameters" style={{ color: "var(--reef)", fontWeight: 700 }}>
              See our parameter tracking guide →
            </Link>
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Final Thought
          </h2>
          <p>
            Salinity should be the easiest parameter in your reef tank. Hit 1.025, add an ATO, calibrate your refractometer monthly, and forget about it. Reefers who get salinity right rarely have salinity problems. Reefers who skip the ATO and rely on a hydrometer end up chasing salinity issues for years.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Track your reef tank salinity with NextUpReef — free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Log every test, track stability over time, and let AI flag drift before corals notice. iOS and Android.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://apps.apple.com/us/app/nextupreef/id6760728959" target="_blank" rel="noopener noreferrer" className="btn primary">
                Download on App Store
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.nextupreef.app" target="_blank" rel="noopener noreferrer" className="btn secondary">
                Download on Google Play
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
