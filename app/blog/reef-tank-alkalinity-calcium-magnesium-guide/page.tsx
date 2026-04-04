import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reef Tank Alkalinity, Calcium & Magnesium: The Complete Tracking Guide",
  description:
    "Why alk, cal, and mag are the most critical reef parameters, what target ranges look like for SPS, LPS, and Mixed reefs, how they interact, and the best way to track them consistently with a reef app.",
  alternates: {
    canonical: "https://nextupreef.com/blog/reef-tank-alkalinity-calcium-magnesium-guide",
  },
  openGraph: {
    title: "Reef Tank Alkalinity, Calcium & Magnesium: The Complete Tracking Guide",
    description:
      "Why alk, cal, and mag are the most critical parameters, target ranges by tank type, and how to track them consistently.",
    url: "https://nextupreef.com/blog/reef-tank-alkalinity-calcium-magnesium-guide",
    images: [{ url: "/brand/splash2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Reef Tank Alkalinity, Calcium & Magnesium: The Complete Tracking Guide",
  description:
    "Why alk, cal, and mag are the most critical reef parameters, what target ranges look like, how they interact, and the best way to track them.",
  image: "https://nextupreef.com/brand/splash2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-04-04",
  dateModified: "2026-04-04",
  mainEntityOfPage: "https://nextupreef.com/blog/reef-tank-alkalinity-calcium-magnesium-guide",
};

export default function AlkCalMagPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 20px" }}>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "32px" }}>
          <Link href="/" style={{ color: "var(--reef)" }}>Home</Link>
          {" › "}
          <Link href="/blog" style={{ color: "var(--reef)" }}>Blog</Link>
          {" › "}
          Alkalinity, Calcium & Magnesium Guide
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Alk / Cal / Mag", "Water Chemistry", "SPS Reef"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Reef Tank Alkalinity, Calcium & Magnesium: The Complete Tracking Guide
        </h1>

        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          April 4, 2026 · 7 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>

          <p>
            Ask any experienced reefer what parameters matter most and you'll hear the same three every time: alkalinity, calcium, and magnesium. These are the "big three" — the foundation of coral skeleton growth, color, and health. Get them right and stable, and most other reef chemistry follows. Let them drift, and you'll see the consequences in your corals within days.
          </p>

          <p>
            This guide covers what each parameter does, how they interact, what the target ranges look like for different tank types, and the most practical way to track them consistently.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Why Alkalinity Is the Most Important Parameter in Reef Keeping
          </h2>

          <p>
            Alkalinity (measured in dKH — degrees of carbonate hardness) is the primary building block of coral skeleton growth. Stony corals — both SPS (small polyp stony) and LPS (large polyp stony) — consume alkalinity continuously as they grow. In a thriving reef, alkalinity is being used up around the clock.
          </p>

          <p>
            This is why alk swings are so dangerous. A drop from 9 dKH to 7 dKH over a few days will cause SPS corals to brown out, stop growing, and potentially STN (slow tissue necrosis). A rapid rise is equally harmful — sudden spikes can bleach corals and crash pH.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Target Alkalinity Ranges:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={{ color: "var(--text-light)" }}>SPS-dominant:</strong> 8.0–9.5 dKH (tighter is better; pick a number and stay there)</li>
              <li><strong style={{ color: "var(--text-light)" }}>Mixed Reef:</strong> 8.0–10.0 dKH</li>
              <li><strong style={{ color: "var(--text-light)" }}>LPS / Softies:</strong> 8.0–11.0 dKH (more forgiving)</li>
              <li><strong style={{ color: "var(--text-light)" }}>ULNS:</strong> 7.5–9.0 dKH</li>
            </ul>
          </div>

          <p>
            The specific number matters less than the stability. A tank consistently running at 8.3 dKH is healthier than one swinging between 7.5 and 9.5.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Calcium: The Partner to Alkalinity
          </h2>

          <p>
            Calcium and alkalinity work as a pair. Corals use both simultaneously to build aragonite skeleton. When alk is high and calcium is low (or vice versa), that imbalance becomes a problem — the chemistry doesn't work right and precipitation can occur.
          </p>

          <p>
            Natural seawater runs at approximately 420 ppm calcium. Most reef tanks do well anywhere in the 400–450 ppm range. SPS tanks pushing maximum growth might target the high end of that range.
          </p>

          <div style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Target Calcium Ranges:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={{ color: "var(--text-light)" }}>SPS-dominant:</strong> 420–440 ppm</li>
              <li><strong style={{ color: "var(--text-light)" }}>Mixed Reef:</strong> 400–450 ppm</li>
              <li><strong style={{ color: "var(--text-light)" }}>LPS / Softies:</strong> 380–450 ppm</li>
            </ul>
          </div>

          <p>
            A useful check: if your alk is 8.5 dKH and your calcium is 420 ppm, those are roughly in the correct proportion to each other. Wildly different numbers (alk at 10, cal at 350) suggest something is off with your dosing or water chemistry.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Magnesium: The Background Regulator
          </h2>

          <p>
            Magnesium is often overlooked because it doesn't get consumed as quickly as alk and cal. But it plays a critical role: magnesium keeps calcium and alkalinity in solution and prevents them from precipitating out of the water column prematurely.
          </p>

          <p>
            When magnesium is too low (below 1200 ppm in a reef system), you'll often see calcium and alkalinity behave strangely — they're hard to raise, or they drop faster than expected. Correcting magnesium often resolves alk/cal instability without any other changes.
          </p>

          <div style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Target Magnesium Ranges:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={{ color: "var(--text-light)" }}>All reef types:</strong> 1250–1400 ppm</li>
              <li><strong style={{ color: "var(--text-light)" }}>Natural seawater reference:</strong> ~1285 ppm</li>
              <li><strong style={{ color: "var(--text-light)" }}>SPS tanks:</strong> 1300–1400 ppm (slightly elevated supports alk/cal stability)</li>
            </ul>
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            How the Three Interact
          </h2>

          <p>
            Think of them as a triangle. Magnesium holds up the foundation that lets alk and cal stay in balance and in solution. When all three are in their target ranges and stable, the chemistry is self-reinforcing — small fluctuations are absorbed naturally.
          </p>

          <p>
            The most common failure mode: reefers dose alk and cal to compensate for consumption but never check magnesium. Mag slowly depletes through water changes with salt that's slightly off. Over months, you end up with alk/cal instability that's actually a magnesium problem.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            How to Track Alk, Cal, and Mag Consistently
          </h2>

          <p>
            The most common reason reefers have parameter problems isn't chemistry — it's inconsistent tracking. Testing every week but not recording results means you only have point-in-time data, not trends. Trends are what save tanks.
          </p>

          <p>
            A good tracking system for alk, cal, and mag should:
          </p>

          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li>Log each test result with a timestamp so you can see rates of change</li>
            <li>Show you a trend chart so you can see if alk is slowly drifting down week over week</li>
            <li>Alert you when a value leaves your target range</li>
            <li>Calculate a stability score so you can see if variation is increasing</li>
          </ul>

          <p>
            NextUpReef does all of this automatically. Log your alk, cal, and mag readings and the app plots them as trend charts, calculates your Stability Score, shows time-in-range percentages, and alerts you when values drift outside your target ranges. All free, on iOS and Android.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            How Often to Test Alk, Cal, and Mag
          </h2>

          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Alkalinity:</strong> 2–3x per week for SPS tanks; 1–2x per week for LPS and mixed. Alk moves the fastest and causes the most damage when it swings.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Calcium:</strong> Once per week is usually sufficient unless you're troubleshooting.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Magnesium:</strong> Once per week during initial setup; every 2 weeks once stable.</li>
          </ul>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Track your alk, cal, and mag with NextUpReef — free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Real-time color feedback, trend charts, and stability scoring. Available on iOS and Android.
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
