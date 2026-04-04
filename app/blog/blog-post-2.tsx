import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Track Saltwater Aquarium Parameters (Complete Guide)",
  description:
    "Everything you need to know about monitoring your reef tank: what parameters to test, how often to log them, target ranges for SPS, LPS, and Mixed reefs, and the best app to track it all.",
  alternates: {
    canonical: "https://nextupreef.com/blog/how-to-track-saltwater-aquarium-parameters",
  },
  openGraph: {
    title: "How to Track Saltwater Aquarium Parameters (Complete Guide)",
    description:
      "What to test, how often, target ranges for SPS/LPS/Mixed, and the best tools to monitor your reef tank.",
    url: "https://nextupreef.com/blog/how-to-track-saltwater-aquarium-parameters",
    images: [{ url: "/brand/splash2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Track Saltwater Aquarium Parameters (Complete Guide)",
  description:
    "Everything you need to know about monitoring your reef tank: what to test, how often, target ranges, and the best app to track it all.",
  image: "https://nextupreef.com/brand/splash2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-04-04",
  dateModified: "2026-04-04",
  mainEntityOfPage: "https://nextupreef.com/blog/how-to-track-saltwater-aquarium-parameters",
};

const params = [
  { name: "Alkalinity (dKH)", mixed: "8–10 dKH", sps: "8–9.5 dKH", lps: "8–11 dKH", freq: "2–3x/week", why: "Most critical parameter. Swings crash tanks fast." },
  { name: "Calcium (ppm)", mixed: "400–450", sps: "420–440", lps: "380–450", freq: "Weekly", why: "Works with alk — they must be in balance." },
  { name: "Magnesium (ppm)", mixed: "1250–1350", sps: "1300–1400", lps: "1250–1400", freq: "Weekly", why: "Low mag causes alk/cal instability." },
  { name: "Nitrate (ppm)", mixed: "5–20", sps: "2–10", lps: "5–25", freq: "Weekly", why: "Fuel for corals; too high or too low causes stress." },
  { name: "Phosphate (ppm)", mixed: "0.05–0.1", sps: "0.03–0.08", lps: "0.05–0.15", freq: "Weekly", why: "Tied to nitrate — track the NO3:PO4 ratio." },
  { name: "Salinity (SG/ppt)", mixed: "1.025–1.026", sps: "1.025–1.026", lps: "1.024–1.026", freq: "2–3x/week", why: "Evaporation raises salinity fast in smaller tanks." },
  { name: "pH", mixed: "8.1–8.3", sps: "8.2–8.4", lps: "8.0–8.3", freq: "Weekly", why: "Important but fluctuates naturally with light cycle." },
  { name: "Temperature (°F)", mixed: "76–80°F", sps: "76–79°F", lps: "76–80°F", freq: "Daily if possible", why: "Temperature swings stress corals and fish." },
];

export default function HowToTrackPost() {
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
          How to Track Saltwater Aquarium Parameters
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Parameter Tracking", "Beginner Guide", "Reef Chemistry"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          How to Track Saltwater Aquarium Parameters (Complete Guide)
        </h1>

        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          April 4, 2026 · 8 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>

          <p>
            Tracking saltwater aquarium parameters is the single most effective thing you can do to keep your reef alive and thriving. It sounds obvious — but most hobbyists either test inconsistently, don't record what they find, or both. This guide covers everything: what to test, how often, what the numbers mean, and the best way to track it all.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Why Tracking Parameters Matters
          </h2>

          <p>
            A reef aquarium is a closed ecosystem. Unlike the ocean, it has no buffer against chemical changes. When alkalinity swings even a point or two over a few days, SPS corals can start bleaching. When nitrate crashes to zero (too low), zooxanthellae health suffers. When phosphate spikes, cyano and algae take over.
          </p>

          <p>
            The reefers who keep tanks long-term aren't necessarily the ones with the most expensive equipment. They're the ones who test consistently and log their results. Catching a trend early — alkalinity drifting down 0.2 dKH per week — lets you make a small adjustment. Missing that trend until it's dropped a full point is how you lose corals.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            What Parameters to Track
          </h2>

          <p>
            Not all parameters are equally important. Here's a priority breakdown for reef tanks:
          </p>

          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", marginBottom: "12px", margin: "0 0 12px 0" }}>
              🎯 The Big Three (Test Most Frequently)
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: "var(--text-light)" }}>Alkalinity, Calcium, and Magnesium</strong> work together as a system. Alk and Cal fuel coral skeleton growth. Mag keeps them in balance. These three need the most consistent attention — especially in SPS-dominant tanks.
            </p>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", marginBottom: "12px", margin: "0 0 12px 0" }}>
              📊 Nutrients (Weekly)
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: "var(--text-light)" }}>Nitrate and Phosphate</strong> fuel coral health but also algae growth. The ratio between them — the NO3:PO4 ratio — matters as much as the individual numbers. A ratio around 100:1 is ideal for most reef systems.
            </p>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px", padding: "24px", marginBottom: "40px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", marginBottom: "12px", margin: "0 0 12px 0" }}>
              🌊 Stability Parameters (Regular)
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: "var(--text-light)" }}>Salinity, pH, and Temperature</strong> need regular monitoring. Salinity creeps up as water evaporates. pH fluctuates with your lighting cycle. Temperature spikes can stress fish and cause coral spawning events at the wrong time.
            </p>
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "24px" }}>
            Target Ranges by Tank Type
          </h2>

          <div style={{ overflowX: "auto", marginBottom: "40px" }}>
            <table style={{
              width: "100%", borderCollapse: "collapse", fontSize: "14px",
              border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", overflow: "hidden"
            }}>
              <thead>
                <tr style={{ background: "rgba(44,196,214,0.08)" }}>
                  {["Parameter", "Mixed Reef", "SPS", "LPS", "Frequency", "Why It Matters"].map(h => (
                    <th key={h} style={{
                      padding: "12px 14px", textAlign: "left", fontWeight: "900",
                      color: "var(--text-light)", borderBottom: "1px solid rgba(255,255,255,0.08)",
                      whiteSpace: "nowrap"
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {params.map((p, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "12px 14px", fontWeight: "800", color: "var(--text-light)", whiteSpace: "nowrap" }}>{p.name}</td>
                    <td style={{ padding: "12px 14px", color: "var(--text-muted)" }}>{p.mixed}</td>
                    <td style={{ padding: "12px 14px", color: "var(--text-muted)" }}>{p.sps}</td>
                    <td style={{ padding: "12px 14px", color: "var(--text-muted)" }}>{p.lps}</td>
                    <td style={{ padding: "12px 14px", color: "var(--reef)", fontWeight: "700", whiteSpace: "nowrap" }}>{p.freq}</td>
                    <td style={{ padding: "12px 14px", color: "var(--text-muted)", fontSize: "13px" }}>{p.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            How Often Should You Test?
          </h2>

          <p>
            For an established tank running stable: <strong style={{ color: "var(--text-light)" }}>1-2 times per week</strong> gives you enough data to see trends without testing fatigue. That's enough data points to catch gradual drifts before they become emergencies.
          </p>

          <p>
            Test more frequently — even daily — when:
          </p>

          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li>You've just set up a new tank or added new rock</li>
            <li>You changed your dosing schedule or amounts</li>
            <li>You added new livestock (corals especially)</li>
            <li>You've had equipment failure (pump, heater, skimmer)</li>
            <li>Something looks off — coral polyp extension down, unusual coloration</li>
          </ul>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            The Best Way to Track Parameters
          </h2>

          <p>
            You have a few options: a spreadsheet, a notebook, or a dedicated reef tracking app. Spreadsheets work but require manual charting. Notebooks give you no trend data. A dedicated app is the most practical choice for most reefers.
          </p>

          <p>
            The key things to look for in a reef tracking app:
          </p>

          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li>Fast logging (you should be able to log a value in under 10 seconds)</li>
            <li>Automatic trend charts so you can see direction, not just point-in-time values</li>
            <li>Custom target ranges based on your tank type</li>
            <li>Push notification reminders for testing and water changes</li>
            <li>Multiple tank support if you run more than one system</li>
          </ul>

          <p>
            NextUpReef is built around all of these. It's free, available on iOS and Android, and tracks all 10 core reef parameters with real-time color feedback as you type — green for in-range, yellow for close, red for out of range.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "20px" }}>
              Start tracking your reef parameters today — free.
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
