import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reef Tank pH: How to Test, Track, and Raise It Safely",
  description:
    "Complete guide to reef tank pH — target ranges, why pH swings, how to raise low pH safely, and how to track daily trends without obsessing over a single number.",
  alternates: {
    canonical: "https://nextupreef.com/blog/reef-tank-ph-guide",
  },
  openGraph: {
    title: "Reef Tank pH: How to Test, Track, and Raise It Safely",
    description:
      "Why pH matters less than reefers think, what targets to actually hit, and how to raise low pH without crashing your tank.",
    url: "https://nextupreef.com/blog/reef-tank-ph-guide",
    images: [{ url: "/brand/splash2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Reef Tank pH: How to Test, Track, and Raise It Safely",
  description:
    "Target pH ranges, the real causes of low pH, and how to raise it safely without crashing your tank.",
  image: "https://nextupreef.com/brand/splash2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-05-09",
  dateModified: "2026-05-09",
  mainEntityOfPage: "https://nextupreef.com/blog/reef-tank-ph-guide",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the ideal pH for a reef tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ideal pH range for a reef tank is 8.1 to 8.4. Most healthy reefs run between 8.1 and 8.3 during the day. pH naturally swings 0.1 to 0.3 between night and day due to photosynthesis and CO2 levels — that's normal and not a problem.",
      },
    },
    {
      "@type": "Question",
      name: "How do I raise pH in my reef tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The safest ways to raise pH are increasing aeration, improving room ventilation to reduce CO2, running a CO2 scrubber on your skimmer, opening windows during the day, or dripping kalkwasser. Never add chemical pH buffers to a reef tank — they cause alkalinity spikes and can kill corals.",
      },
    },
    {
      "@type": "Question",
      name: "Why is my reef tank pH low?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Low reef tank pH is almost always caused by excess CO2 in the room — not by a real water chemistry problem. Closed-up homes in winter, basements, and unventilated fish rooms typically read 7.7 to 8.0 because CO2 builds up. Improving air circulation usually fixes it in 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Does pH really matter in a reef tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but less than alkalinity. As long as pH stays between 7.9 and 8.4 and is stable, corals will thrive. SPS-dominant tanks pushing maximum growth do prefer the high end (8.2 to 8.4), but obsessing over a 7.95 reading is usually wasted energy. Focus on stability over chasing a perfect number.",
      },
    },
  ],
};

export default function ReefTankPhPost() {
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
          Reef Tank pH Guide
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["pH", "Water Chemistry", "Troubleshooting"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Reef Tank pH: How to Test, Track, and Raise It Safely
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          May 9, 2026 · 8 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            pH is the parameter reefers worry about most and understand least. Every week somebody posts a panicked thread: &quot;My pH is 7.9, what do I do?&quot; The honest answer is usually nothing — pH at 7.9 is fine in most reef tanks. The way reefers chase pH causes more crashes than the pH itself.
          </p>
          <p>
            This guide walks through what reef tank pH actually is, what target ranges matter, why your pH is probably low (hint: it&apos;s not the water), and how to raise it safely if you decide you need to.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            What pH Actually Measures
          </h2>
          <p>
            pH is the acidity or alkalinity of your water on a 0 to 14 scale. Below 7 is acidic, 7 is neutral, above 7 is alkaline. Natural seawater sits at about 8.1 to 8.3. Reef tanks should land in roughly the same range.
          </p>
          <p>
            In a reef tank, pH is driven mostly by one thing: dissolved CO2. More CO2 in the water means lower pH. Less CO2 means higher pH. That&apos;s why pH naturally rises during the day (corals and algae consume CO2 as they photosynthesize) and falls at night (everything respires CO2 in the dark). A 0.1 to 0.3 daily swing is completely normal and not something to fix.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Target pH Ranges:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={{ color: "var(--text-light)" }}>SPS-dominant:</strong> 8.2 – 8.4 (high end preferred for max growth)</li>
              <li><strong style={{ color: "var(--text-light)" }}>Mixed Reef:</strong> 8.1 – 8.3</li>
              <li><strong style={{ color: "var(--text-light)" }}>LPS / Softies:</strong> 8.0 – 8.3 (more forgiving)</li>
              <li><strong style={{ color: "var(--text-light)" }}>Acceptable range:</strong> 7.9 – 8.4 (stable is what matters)</li>
              <li><strong style={{ color: "var(--text-light)" }}>Danger zone:</strong> Below 7.7 or above 8.6 for extended periods</li>
            </ul>
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Why Your pH Is Probably Low
          </h2>
          <p>
            If your reef tank reads 7.8 or 7.9 and nothing else is wrong, the cause is almost certainly elevated CO2 in the room — not anything in your water. Tank water exchanges gases with the air through surface agitation, your skimmer, and any open sump. If room air is high in CO2, your tank water will be too. Lower pH is the result.
          </p>
          <p>
            Room CO2 builds up in:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <li>Closed-up homes during winter (windows shut, central heat running)</li>
            <li>Basements and fish rooms with poor airflow</li>
            <li>Rooms with multiple people sleeping (CO2 peaks overnight)</li>
            <li>Tightly insulated modern houses with limited air exchange</li>
            <li>Spaces with pets or many plants in the same room</li>
          </ul>
          <p>
            A quick test: open windows for an hour during the day with the skimmer running, then test pH. If pH rises 0.1 to 0.2, room CO2 is your problem — not your tank chemistry.
          </p>

          <div style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}>
            <img
              src="/screenshots/phone-charts-v2.png"
              alt="pH trend chart in NextUpReef showing daily swings"
              style={{ width: "100%", maxWidth: "280px", borderRadius: "24px", boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}
            />
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Safe Ways to Raise Reef Tank pH
          </h2>
          <p>
            If you&apos;ve confirmed low pH and want to raise it, here are the right ways — in order of how much they typically help:
          </p>
          <ol style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Open windows or improve ventilation.</strong> The single most effective fix for most reefers. Free, instant, and addresses the actual cause.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Run a CO2 scrubber on your skimmer.</strong> A small inline canister filled with soda lime strips CO2 from the air feeding your skimmer. Will raise tank pH by 0.1 to 0.3 within a day.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Drip kalkwasser overnight.</strong> Kalkwasser (calcium hydroxide) raises pH while replacing evaporation. Most effective at night when natural pH drops. Drip slowly — fast additions cause precipitation.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Run a refugium on a reverse-light cycle.</strong> A macroalgae refugium lit at night consumes CO2 when the display is dark, raising pH overnight.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Increase surface agitation.</strong> More gas exchange means CO2 leaves the water faster. A small wavemaker pointed at the surface helps in tanks without much agitation.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Run an air pump outdoors.</strong> An air line that pulls air from outside (fresh, lower-CO2) and feeds your skimmer. Effective and cheap.</li>
          </ol>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            What NOT to Do
          </h2>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Don&apos;t dump chemical pH-up buffers.</strong> Products marketed for freshwater pH adjustment are dangerous in reef tanks. They spike alkalinity, throw the alk/cal balance off, and can cause coral burns.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Don&apos;t chase a high daytime pH.</strong> If your pH peaks at 8.5 during the day and dips to 8.0 at night, that&apos;s healthy. Healthy reefs swing.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Don&apos;t add baking soda.</strong> Baking soda raises alkalinity, not pH directly. You&apos;ll create a different problem.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Don&apos;t panic over a single reading.</strong> One pH measurement is noise. A trend over weeks is signal.</li>
          </ul>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            How to Test pH Accurately
          </h2>
          <p>
            pH is one of the easier parameters to test — but only if you do it right.
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Liquid test kits</strong> like Salifert give you ±0.1 accuracy if you read them under good light. Cheap and reliable for occasional checks.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Digital pH probes</strong> (Apex, Hanna, etc.) give continuous readings but drift over time and need to be calibrated with pH 7.0 and 10.0 buffers every 2 to 3 months. Probes more than 18 months old are usually inaccurate.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Always test at the same time of day</strong> when tracking trends. pH at 9 am will be very different from pH at 9 pm.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Don&apos;t trust API or strip kits for pH</strong> — they&apos;re too imprecise to be useful in a reef tank.</li>
          </ul>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            The Right Way to Track pH
          </h2>
          <p>
            A single pH reading tells you almost nothing. A pH chart over 30 days tells you everything — your daily swing, your seasonal drift, whether your nighttime pH ever drops dangerously low, and whether your CO2 scrubber is actually working.
          </p>
          <p>
            NextUpReef plots every pH reading you log on a chart that shows your daily and weekly trend at a glance. You can spot a pH drop weeks before a coral notices it — and that&apos;s the whole point of tracking. Log readings consistently and the patterns reveal themselves.{" "}
            <Link href="/blog/reef-tank-alkalinity-calcium-magnesium-guide" style={{ color: "var(--reef)", fontWeight: 700 }}>
              See our guide to alk, cal, and mag tracking →
            </Link>
          </p>

          <div style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}>
            <img
              src="/screenshots/phone-ai-v2.png"
              alt="AI reef tank advice on parameter trends"
              style={{ width: "100%", maxWidth: "280px", borderRadius: "24px", boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}
            />
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            When Low pH Actually Matters
          </h2>
          <p>
            Most low-pH readings are cosmetic — corals don&apos;t notice. But there are situations where pH genuinely matters:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Sub-7.8 readings during the day.</strong> That&apos;s low enough to affect coral skeleton formation. Investigate room CO2 immediately.</li>
            <li><strong style={{ color: "var(--text-light)" }}>SPS tanks targeting max growth.</strong> SPS corals do calcify faster in the 8.2 to 8.4 range. The high end is worth chasing if you&apos;re pushing growth.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Rapid pH swings (more than 0.3 between morning and night).</strong> This usually means biological problems — ammonia issues, large die-off, or insufficient buffering. Test alkalinity.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Sudden drops over a few days.</strong> Could indicate something dying in the tank. Look for missing fish, decaying coral, or buried livestock.</li>
          </ul>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Final Thought
          </h2>
          <p>
            pH is the parameter that drives the most needless reefer anxiety. If your alkalinity is stable, your corals look good, and your pH lives between 7.9 and 8.4 — you&apos;re fine. Track it. Ignore daily noise. Improve room ventilation if you need to. Skip the chemical buffers. That&apos;s the whole game.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Track your reef tank pH with NextUpReef — free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Log every test, watch daily and weekly trends, and let AI flag issues before corals notice. iOS and Android.
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
