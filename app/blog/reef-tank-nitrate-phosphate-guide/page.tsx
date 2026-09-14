import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nitrate and Phosphate in a Reef Tank: Ideal Levels and How to Lower or Raise Them",
  description:
    "Ideal reef tank nitrate and phosphate levels by tank type, what real tanks actually run, how to test accurately, and how to lower or raise nutrients gently without crashing them.",
  alternates: {
    canonical: "https://nextupreef.com/blog/reef-tank-nitrate-phosphate-guide",
  },
  openGraph: {
    title: "Nitrate and Phosphate in a Reef Tank: Ideal Levels and How to Lower or Raise Them",
    description:
      "Target nitrate and phosphate ranges, real data from hobby tanks, and gentle ways to bring nutrients down — or back up when they bottom out.",
    url: "https://nextupreef.com/blog/reef-tank-nitrate-phosphate-guide",
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Nitrate and Phosphate in a Reef Tank: Ideal Levels and How to Lower or Raise Them",
  description:
    "Reef tank nitrate and phosphate target ranges by tank type, real-tank data, accurate testing, and how to lower or raise nutrients safely.",
  image: "https://nextupreef.com/brand/og-image.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-09-14",
  dateModified: "2026-09-14",
  mainEntityOfPage: "https://nextupreef.com/blog/reef-tank-nitrate-phosphate-guide",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a good nitrate level for a reef tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a mixed reef, 2 to 10 ppm nitrate is a sensible target. SPS-dominant tanks usually aim a little lower (2 to 8 ppm), LPS and soft coral tanks tolerate more (roughly 5 to 20 or 5 to 25 ppm), and ultra-low-nutrient systems aim for 1 to 5 ppm. Zero is not the goal — corals need some nitrate.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good phosphate level for a reef tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a mixed reef, 0.03 to 0.08 ppm phosphate is a sensible target. SPS tanks often aim for 0.03 to 0.07 ppm, LPS tanks 0.05 to 0.12 ppm, soft coral tanks 0.05 to 0.15 ppm, and ultra-low-nutrient systems 0.02 to 0.05 ppm. Stable and detectable beats zero.",
      },
    },
    {
      "@type": "Question",
      name: "How do I lower nitrates in a reef tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with the input: feed a little less and rinse frozen food. Then improve export with a well-tuned protein skimmer, a refugium with macroalgae, and regular water changes. Carbon dosing can lower nitrate further but should be started at a low dose while you watch for cloudy water from bacterial blooms. Lower nutrients gradually rather than crashing them.",
      },
    },
    {
      "@type": "Question",
      name: "Is zero nitrate or zero phosphate bad for a reef tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A reading of zero usually means corals and algae are using nutrients faster than they arrive. Corals need some nitrate and phosphate, and bottomed-out nutrients are commonly associated with dinoflagellate outbreaks. If both read zero for weeks, feed more, reduce export, or dose a nitrate or phosphate supplement.",
      },
    },
    {
      "@type": "Question",
      name: "How do I convert a Hanna phosphorus reading to phosphate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hanna's ultra-low-range phosphorus checker reads phosphorus (P) in parts per billion, not phosphate. To convert, multiply the ppb reading by 0.003066 to get phosphate in ppm. A reading of 30 ppb is about 0.09 ppm phosphate.",
      },
    },
  ],
};

const h2Style: CSSProperties = {
  fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px",
};
const tableStyle: CSSProperties = { width: "100%", borderCollapse: "collapse", fontSize: "15px" };
const th: CSSProperties = {
  color: "var(--text-light)", textAlign: "left", padding: "10px 12px",
  borderBottom: "1px solid rgba(255,255,255,0.12)",
};
const td: CSSProperties = { padding: "10px 12px", borderTop: "1px solid rgba(255,255,255,0.06)" };
const tdNum: CSSProperties = { ...td, fontVariantNumeric: "tabular-nums" };
const strong: CSSProperties = { color: "var(--text-light)" };
const link: CSSProperties = { color: "var(--reef)", fontWeight: 700 };

const targets = [
  { type: "Mixed reef", no3: "2–10", po4: "0.03–0.08" },
  { type: "SPS", no3: "2–8", po4: "0.03–0.07" },
  { type: "LPS", no3: "5–20", po4: "0.05–0.12" },
  { type: "Soft corals", no3: "5–25", po4: "0.05–0.15" },
  { type: "Nano", no3: "2–10", po4: "0.03–0.08" },
  { type: "ULNS (ultra-low nutrient)", no3: "1–5", po4: "0.02–0.05" },
  { type: "Fish-only", no3: "0–40", po4: "0–0.5" },
];

export default function ReefTankNitratePhosphatePost() {
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
          Nitrate &amp; Phosphate Guide
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Nitrate", "Phosphate", "Nutrients"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Nitrate and Phosphate in a Reef Tank: Ideal Levels and How to Lower or Raise Them
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          September 14, 2026 · 9 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            For most mixed reef tanks, a sensible target is <strong style={strong}>2–10 ppm nitrate</strong> and <strong style={strong}>0.03–0.08 ppm phosphate</strong>. SPS-heavy tanks tend to run a little leaner, LPS and soft coral tanks are happy with more, and fish-only systems tolerate far higher numbers.
          </p>
          <p>
            The most important idea in this whole guide: <strong style={strong}>zero is not the goal.</strong> Corals need some nitrate and phosphate to grow and hold color. A tank reading zero on both is not &quot;clean&quot; — it is usually starving, and that brings its own problems. The job is to keep nutrients low, detectable and steady, not to strip them out.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Quick Answer:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={strong}>Mixed reef:</strong> nitrate 2–10 ppm, phosphate 0.03–0.08 ppm</li>
              <li><strong style={strong}>SPS:</strong> nitrate 2–8 ppm, phosphate 0.03–0.07 ppm</li>
              <li><strong style={strong}>LPS / softies:</strong> nitrate 5–20 or 5–25 ppm, phosphate 0.05–0.12 or 0.05–0.15 ppm</li>
              <li><strong style={strong}>Too high:</strong> feed less, skim, grow macroalgae, change water — lower it gradually</li>
              <li><strong style={strong}>Bottomed out:</strong> feed more, ease off export, or dose a nitrate or phosphate supplement</li>
            </ul>
          </div>

          <h2 style={h2Style}>What Nitrate and Phosphate Are — and Where They Come From</h2>
          <p>
            Nitrate (NO3) is the end product of the nitrogen cycle. Fish waste, uneaten food and anything decaying break down into ammonia, bacteria convert ammonia to nitrite, and other bacteria convert nitrite to nitrate. Nitrate is far less toxic than ammonia or nitrite, so in a cycled tank it simply accumulates unless something removes it.
          </p>
          <p>
            Phosphate (PO4) arrives mostly through food. Every pellet, flake and cube of frozen food carries phosphorus, and fish waste and decaying organics release it back into the water. Some phosphate also binds to rock and sand and can leach back out later, which is why a tank sometimes keeps reading phosphate after you have cut feeding.
          </p>
          <p>
            In small amounts both are nutrients: corals and their symbiotic algae use nitrogen and phosphorus, and starved corals tend to pale out or grow slowly. In large amounts they fuel nuisance algae. That is why the target is a band, not a floor.
          </p>

          <h2 style={h2Style}>Target Ranges by Tank Type</h2>
          <p>
            These are the default nitrate and phosphate targets NextUpReef uses for each tank type. They are sensible starting points, not laws — a thriving tank slightly outside them does not need fixing.
          </p>
          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Tank type</th>
                  <th style={th}>Nitrate (ppm)</th>
                  <th style={th}>Phosphate (ppm)</th>
                </tr>
              </thead>
              <tbody>
                {targets.map((row) => (
                  <tr key={row.type}>
                    <td style={td}>{row.type}</td>
                    <td style={tdNum}>{row.no3}</td>
                    <td style={tdNum}>{row.po4}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            The pattern is simple. Stony corals with small polyps (SPS) generally prefer leaner water. Fleshy LPS and soft corals feed more and tolerate richer water. Ultra-low-nutrient systems run deliberately lean, and fish-only tanks have no corals to worry about, so the ceiling is much higher. For every other parameter by tank type, see the{" "}
            <Link href="/blog/reef-tank-parameters-chart" style={link}>reef tank parameters chart</Link>.
          </p>

          <h2 style={h2Style}>What Real Reef Tanks Actually Run</h2>
          <p>
            Target charts tell you what to aim for. We also wanted to know what hobby tanks actually run, so we looked at NextUpReef app data: anonymized parameter logs from NextUpReef users, January–September 2026 (4,017 logs). For each parameter we took each tank&apos;s own median (tanks with at least 2 readings), then looked at the spread across tanks — so a tank that tests daily counts the same as one that tests monthly. Implausible values (typos) were excluded. These are self-selected app users, not a controlled study; they show what real hobby tanks run, not what is optimal.
          </p>
          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Parameter</th>
                  <th style={th}>Tanks</th>
                  <th style={th}>Typical (median)</th>
                  <th style={th}>Middle 50%</th>
                  <th style={th}>Middle 80%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={td}>Nitrate (ppm)</td>
                  <td style={tdNum}>173</td>
                  <td style={tdNum}>7.8</td>
                  <td style={tdNum}>3.5–15</td>
                  <td style={tdNum}>1–25</td>
                </tr>
                <tr>
                  <td style={td}>Phosphate (ppm)</td>
                  <td style={tdNum}>140</td>
                  <td style={tdNum}>0.085</td>
                  <td style={tdNum}>0.045–0.20</td>
                  <td style={tdNum}>0.02–0.38</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Two things stand out. First, the typical tank sits right around the textbook nitrate range, but phosphate runs a little richer than most target charts — half of tanks fall between 0.045 and 0.20 ppm. Plenty of hobby reefs live with more phosphate than the charts suggest; the data cannot tell us how their corals are doing, only that it is common.
          </p>
          <p>
            Second, the bottom end is crowded. <strong style={strong}>About 1 in 10 nitrate readings (11%) were zero, and about 9% of phosphate readings were zero.</strong> Bottomed-out nutrients are not a rare edge case — they are a routine problem, and the section on raising nutrients below matters as much as the one on lowering them.
          </p>

          <h2 style={h2Style}>The Nitrate-to-Phosphate Balance</h2>
          <p>
            You will often see advice to keep nitrate and phosphate in proportion — roughly <strong style={strong}>50:1 to 160:1</strong> nitrate to phosphate (both in ppm). A tank at 8 ppm nitrate and 0.08 ppm phosphate sits at 100:1, comfortably inside. A tank at 10 ppm nitrate and 0.01 ppm phosphate is at 1,000:1, which usually means phosphate is the thing running out.
          </p>
          <p>
            Treat the ratio as a guideline, not a law. It is useful for spotting when one nutrient has bottomed out while the other has not. It is not worth chasing: hobby test kits are not precise enough at the low end for an exact ratio, and a tank with both nutrients in range and healthy corals does not need tuning. NextUpReef&apos;s Reef Score applies only a small adjustment (at most 5%) when the ratio is far outside that band — about the right level of concern.
          </p>

          <h2 style={h2Style}>Testing Nitrate and Phosphate Accurately</h2>
          <p>
            Both parameters are measured in small numbers, so small testing mistakes matter. A few habits make readings trustworthy:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>Use a kit that reads low.</strong> A kit that jumps from 0 to 5 ppm nitrate, or a phosphate kit that cannot tell 0.03 from 0.10, will not show you a reef-level problem. Low-range kits and photometers are worth it for phosphate especially.</li>
            <li><strong style={strong}>Check the units on your device.</strong> Hanna&apos;s ultra-low-range phosphorus checker reads <em>phosphorus</em> (P) in ppb, not phosphate. To convert: <strong style={strong}>phosphate in ppm = the ppb reading × 0.003066</strong>. A reading of 30 ppb is about 0.09 ppm phosphate — just above a mixed reef target, not the tiny number it looks like. Some lab tests also report phosphorus rather than phosphate, so read the label.</li>
            <li><strong style={strong}>Follow timing exactly.</strong> Color-change tests are sensitive to reaction time. Use a timer, not a guess.</li>
            <li><strong style={strong}>Trust the trend over a single reading.</strong> One surprising number is often a testing error. Retest before acting, and look at the last few weeks rather than the last result.</li>
          </ul>
          <p>
            Weekly testing is a good rhythm for most tanks. More on building a routine in{" "}
            <Link href="/blog/how-to-track-saltwater-aquarium-parameters" style={link}>how to track saltwater aquarium parameters</Link>.
          </p>

          <h2 style={h2Style}>How to Lower Nitrate and Phosphate — Gently</h2>
          <p>
            High nutrients build over weeks, and they should come down over weeks. Corals adapted to richer water can be stressed by a sudden drop, so work from the gentlest fix to the strongest.
          </p>
          <ol style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={strong}>Feed less, and rinse frozen food.</strong> Food is the source of nearly all nutrients. Feed what the fish eat in a minute or two, and thaw frozen food in a little tank or RO/DI water, then strain off the juice before feeding. It is the cheapest fix and it addresses the cause.</li>
            <li><strong style={strong}>Run a well-tuned protein skimmer.</strong> A skimmer pulls dissolved organics out before bacteria break them down into nitrate and phosphate. Empty the cup regularly and adjust it so it produces steady skimmate.</li>
            <li><strong style={strong}>Grow macroalgae in a refugium.</strong> Macroalgae such as chaeto take up nitrate and phosphate as they grow, and harvesting it physically removes those nutrients. A lit refugium section in the sump is a steady, low-risk export. See the{" "}
              <Link href="/blog/reef-tank-sump-guide" style={link}>reef tank sump guide</Link> for layout ideas.</li>
            <li><strong style={strong}>Do regular water changes.</strong> Water changes dilute nutrients directly. If nitrate builds at a steady rate and only water changes remove it, the level settles at about 1 ÷ the fraction changed times what builds up between changes — about 10× with 10% changes, 5× with 20%. Bigger changes lower the ceiling. The{" "}
              <Link href="/blog/reef-tank-water-change-guide" style={link}>reef tank water change guide</Link> covers the full math and a safe routine.</li>
            <li><strong style={strong}>Carbon dosing, with caution.</strong> Adding a carbon source (commercial products such as Red Sea NO3:PO4-X, or vodka or vinegar) feeds bacteria that consume nitrate and phosphate and are then removed by the skimmer. It works, but it is easy to overdo. Start well below the label dose, increase slowly, keep the skimmer running, and watch for cloudy water or white bacterial film — signs of a bacterial bloom. Overdone, it can drive both nutrients to zero.</li>
            <li><strong style={strong}>Phosphate media: GFO or lanthanum.</strong> Granular ferric oxide (GFO) in a reactor or media bag binds phosphate; lanthanum-based removers precipitate it out of the water. Both can act quickly. Use less than you think you need at first, follow the label, and test often. The aim is to lower phosphate gradually over days or weeks, not crash it overnight.</li>
          </ol>

          <h2 style={h2Style}>How to Raise Nitrate and Phosphate When They Bottom Out</h2>
          <p>
            A zero reading means nutrients are being used faster than they arrive — corals, algae and bacteria are consuming everything. It is especially common in newer tanks with heavy export, tanks with light fish loads, and tanks running strong media or carbon dosing. Bottomed-out nutrients are commonly associated with dinoflagellate outbreaks, which are far harder to clear than a little algae. If you are fighting dinos, read{" "}
            <Link href="/blog/cyanobacteria-dinoflagellates-algae-reef-pests" style={link}>our guide to cyanobacteria, dinoflagellates and algae</Link>.
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={strong}>Feed more.</strong> The most natural way to raise both. Increase feeding gradually and watch the trend over a couple of weeks.</li>
            <li><strong style={strong}>Reduce export.</strong> Pull or reduce phosphate media, cut back or pause carbon dosing, run the skimmer wetter or on a timer, or harvest less macroalgae. Change one thing at a time so you know what worked.</li>
            <li><strong style={strong}>Dose nitrate or phosphate directly.</strong> Supplements such as Brightwell NeoNitro (nitrate) and Brightwell NeoPhos (phosphate) let you raise one nutrient without the other. That matters when only one has bottomed out. Follow the label, dose small, and retest before adding more.</li>
          </ul>
          <p>
            Aim to bring readings back into the low end of your target band and hold them there. Overshooting into high nutrients just restarts the cycle in the other direction.
          </p>

          <h2 style={h2Style}>How NextUpReef Helps You Keep Nutrients in Range</h2>
          <p>
            Nutrients drift slowly, which makes them easy to miss from one test to the next. NextUpReef is built to make that drift visible:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>Color-coded logging.</strong> Log nitrate and phosphate alongside alk, calcium, magnesium and salinity. Each entry is color-coded against your tank&apos;s target the moment you type it, and you can set custom target ranges per parameter.</li>
            <li><strong style={strong}>Reef Pulse trend charts.</strong> Every parameter gets a trend chart with your target band drawn in and water changes marked, so you can see whether that last water change or feeding change actually moved the numbers.</li>
            <li><strong style={strong}>Reef AI Advisor (Pro).</strong> An AI analysis of your tank, refreshed every 24 hours and ranked by urgency. It uses your own parameters, livestock, equipment, dosing and history to flag nutrients drifting toward zero or out of range — and explains why. Reef AI Chat knows the same data, so you can ask follow-up questions about your tank specifically.</li>
            <li><strong style={strong}>Dosing screen with the products reefers actually use.</strong> The catalog includes Red Sea NO3:PO4-X, Brightwell NeoNitro and NeoPhos, and Tropic Marin Elimi-Phos Rapid, so you can put them on your schedule, tap Dosed to log each dose, and see the effect on your nutrient trend.</li>
          </ul>

          <div style={{ textAlign: "center", margin: "40px 0" }}>
            <Image
              src="/screenshots/site-v3/phones-ai.png"
              alt="NextUpReef AI Reef Advisor tank analysis next to Reef AI Chat answering a question about the tank"
              width={1227}
              height={1434}
              style={{ width: "100%", maxWidth: 380, height: "auto" }}
            />
            <p style={{ fontSize: "13px", color: "var(--text-muted)", textAlign: "center", marginTop: "12px" }}>
              The AI Reef Advisor ranks issues by urgency; Reef AI Chat answers questions using your own tank data.
            </p>
          </div>

          <p>
            Learn more about how the advisor works in{" "}
            <Link href="/blog/ai-reef-tank-advisor" style={link}>AI reef tank advisor</Link>.
          </p>

          <h2 style={h2Style}>Frequently Asked Questions</h2>

          <p><strong style={strong}>What is a good nitrate level for a reef tank?</strong></p>
          <p>
            For a mixed reef, 2–10 ppm is a sensible target. SPS-dominant tanks usually aim a little lower (2–8 ppm), LPS and soft coral tanks tolerate more (roughly 5–20 or 5–25 ppm), and ultra-low-nutrient systems aim for 1–5 ppm. Zero is not the goal — corals need some nitrate.
          </p>

          <p><strong style={strong}>What is a good phosphate level for a reef tank?</strong></p>
          <p>
            For a mixed reef, 0.03–0.08 ppm is a sensible target. SPS tanks often aim for 0.03–0.07 ppm, LPS tanks 0.05–0.12 ppm, soft coral tanks 0.05–0.15 ppm, and ultra-low-nutrient systems 0.02–0.05 ppm. Stable and detectable beats zero.
          </p>

          <p><strong style={strong}>How do I lower nitrates in a reef tank?</strong></p>
          <p>
            Start with the input: feed a little less and rinse frozen food. Then improve export with a well-tuned protein skimmer, a refugium with macroalgae, and regular water changes. Carbon dosing can lower nitrate further, but start at a low dose and watch for cloudy water from bacterial blooms. Bring nutrients down gradually rather than crashing them.
          </p>

          <p><strong style={strong}>Is zero nitrate or zero phosphate bad for a reef tank?</strong></p>
          <p>
            A zero reading usually means nutrients are being used faster than they arrive. Corals need some nitrate and phosphate, and bottomed-out nutrients are commonly associated with dinoflagellate outbreaks. If both read zero for weeks, feed more, reduce export, or dose a nitrate or phosphate supplement.
          </p>

          <p><strong style={strong}>How do I convert a Hanna phosphorus reading to phosphate?</strong></p>
          <p>
            Hanna&apos;s ultra-low-range phosphorus checker reads phosphorus (P) in ppb, not phosphate. Multiply the ppb reading by 0.003066 to get phosphate in ppm. A reading of 30 ppb is about 0.09 ppm phosphate.
          </p>

          <h2 style={h2Style}>Final Thought</h2>
          <p>
            Nitrate and phosphate are not enemies to eliminate. They are nutrients to keep low, detectable and steady. Test with a kit that reads low, trust the trend over any single number, and make changes slowly in whichever direction you need to go.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Track nitrate and phosphate with NextUpReef — free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Log every test against your tank&apos;s targets, watch the trend with your target band drawn in, and let Reef AI Advisor flag drifting nutrients. iOS and Android, with a 30-day Pro trial and no credit card.
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
