import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reef Score and Stability Score Explained: What They Measure and How to Raise Yours",
  description:
    "How NextUpReef’s Reef Score and Stability Score work — the exact weights behind each, why alkalinity counts double, why new tanks score lower, and 8 practical ways to keep reef tank parameters stable and raise both scores.",
  alternates: {
    canonical: "https://nextupreef.com/blog/reef-score-stability-score-explained",
  },
  openGraph: {
    title: "Reef Score and Stability Score Explained: What They Measure and How to Raise Yours",
    description:
      "Reef Score is how healthy your tank is right now. Stability Score is how consistently you keep it that way. Here’s what goes into each and how to raise both.",
    url: "https://nextupreef.com/blog/reef-score-stability-score-explained",
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Reef Score and Stability Score Explained: What They Measure and How to Raise Yours",
  description:
    "What NextUpReef’s Reef Score and Stability Score measure, how each is weighted, and practical ways to keep reef tank parameters stable and raise both scores.",
  image: "https://nextupreef.com/brand/og-image.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-09-14",
  dateModified: "2026-09-14",
  mainEntityOfPage: "https://nextupreef.com/blog/reef-score-stability-score-explained",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between Reef Score and Stability Score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reef Score (0–100) measures how healthy your tank is right now: parameter health (40%), maintenance (15%), testing (15%), setup (15%) and tank maturity (15%). Stability Score (0–100) measures how consistently you keep it that way: parameter consistency (45%), testing consistency (20%), maintenance consistency (15%) and trend (20%). Both are recalculated nightly.",
      },
    },
    {
      "@type": "Question",
      name: "Why is my new reef tank’s score low?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maturity is 15% of the Reef Score and grows with tank age — about 10 in the first month, around 45 at 6 months, around 65 at one year and around 85 at two years. A new tank simply hasn’t earned that time yet. With very little data, the Stability Score uses neutral middle scores rather than punishing a new user.",
      },
    },
    {
      "@type": "Question",
      name: "Why does alkalinity count more than other parameters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the parameter health part of the Reef Score, alkalinity is weighted 2×, salinity 1.4×, calcium 1.3×, nitrate and phosphate 1.2×, and magnesium 1×. Alkalinity is consumed quickly by growing corals and swings in it are one of the most common causes of coral stress, so it carries the most weight.",
      },
    },
    {
      "@type": "Question",
      name: "Does testing more often raise my score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only up to a point. Weekly or twice-weekly testing earns the most testing credit, and every 2 weeks earns nearly as much. For the Stability Score, testing every 5–14 days on a regular interval is the sweet spot. Testing many times in one day does not earn extra.",
      },
    },
    {
      "@type": "Question",
      name: "How do I keep my reef tank parameters stable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Test the core six (alkalinity, calcium, magnesium, nitrate, phosphate, salinity) together on a steady weekly rhythm, dose consistently instead of making big corrections, keep alkalinity steady above all, and do 10–25% water changes on a regular schedule. Watch the trend over weeks rather than reacting to a single reading.",
      },
    },
  ],
};

const h2Style = {
  fontSize: "28px",
  fontWeight: "900",
  color: "var(--text-light)",
  marginTop: "48px",
  marginBottom: "16px",
} as const;

const thStyle = {
  color: "var(--text-light)",
  textAlign: "left",
  padding: "10px 12px",
  borderBottom: "1px solid rgba(255,255,255,0.12)",
} as const;

const tdStyle = {
  padding: "10px 12px",
  borderTop: "1px solid rgba(255,255,255,0.06)",
} as const;

const numStyle = { ...tdStyle, fontVariantNumeric: "tabular-nums" } as const;

const linkStyle = { color: "var(--reef)", fontWeight: 700 } as const;

const strong = { color: "var(--text-light)" } as const;

export default function ReefScoreStabilityScorePost() {
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
          Reef Score &amp; Stability Score
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Reef Score", "Stability", "App Guide"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Reef Score and Stability Score Explained: What They Measure and How to Raise Yours
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          September 14, 2026 · 9 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            Every NextUpReef tank gets two numbers. The <strong style={strong}>Reef Score</strong> tells you how healthy your tank is right now. The <strong style={strong}>Stability Score</strong> tells you how consistently you keep it that way. Both run from 0 to 100, and both are recalculated nightly from what you’ve logged.
          </p>
          <p>
            Neither score is a mystery grade. Each one is a weighted mix of specific things you control — where your parameters sit, how steady they stay, how regularly you test and change water. This guide lays out exactly what goes into each score, why it’s weighted the way it is, and the practical habits that raise both. Those habits happen to be the same ones that keep a reef tank stable, which is the real point.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>The Quick Answer:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={strong}>Reef Score (0–100):</strong> how healthy the tank is today — parameters, maintenance, testing, setup and tank age.</li>
              <li><strong style={strong}>Stability Score (0–100):</strong> how consistent the tank is over time — parameter swings, testing rhythm, water change rhythm and slow drift.</li>
              <li><strong style={strong}>Updated:</strong> nightly, so today’s log shows up in tomorrow’s scores.</li>
              <li><strong style={strong}>Fastest lever for both:</strong> test the core six together on a steady weekly rhythm and keep alkalinity steady.</li>
            </ul>
          </div>

          <p>
            Both scores depend on logging often enough to see a trend. If you have not settled on a tool yet, we compared <Link href="/blog/best-reef-tank-tracking-app" style={{ color: "var(--reef)", fontWeight: 700 }}>reef tank tracking apps</Link> head to head.
          </p>
          <h2 style={h2Style}>Why Two Scores Instead of One</h2>
          <p>
            A tank can look perfect in a single test and still be a rough place for corals. Picture alkalinity at 8.5 dKH on Sunday — right in range — after sitting at 7.2 on Wednesday and 9.8 the week before. One snapshot says everything is fine. The history says the tank is on a rollercoaster.
          </p>
          <p>
            Corals respond to the rollercoaster, not the snapshot. A tank that holds steady slightly off the ideal number usually does better than one that bounces through the ideal number on its way somewhere else. That’s why a single health score isn’t enough: the Reef Score captures where you are, and the Stability Score captures whether you stay there. If you want the target ranges themselves, see our{" "}
            <Link href="/blog/reef-tank-parameters-chart" style={linkStyle}>reef tank parameters chart</Link>.
          </p>

          <h2 style={h2Style}>Reef Score: What Goes Into It</h2>
          <p>
            The Reef Score is built from five parts. Parameter health carries the most weight; the other four split the rest evenly.
          </p>
          <div style={{ overflowX: "auto", marginBottom: "24px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px" }}>
              <thead>
                <tr>
                  <th style={thStyle}>Part</th>
                  <th style={thStyle}>Weight</th>
                  <th style={thStyle}>What it looks at</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Parameter health</td>
                  <td style={numStyle}>40%</td>
                  <td style={tdStyle}>How close the core six sit to your tank type’s targets</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Maintenance</td>
                  <td style={numStyle}>15%</td>
                  <td style={tdStyle}>How recent, how frequent and how sized your water changes are</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Testing</td>
                  <td style={numStyle}>15%</td>
                  <td style={tdStyle}>How recently and how regularly you test, and how much you cover</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Setup</td>
                  <td style={numStyle}>15%</td>
                  <td style={tdStyle}>Livestock, equipment, active dosing and a light schedule</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Maturity</td>
                  <td style={numStyle}>15%</td>
                  <td style={tdStyle}>How long the tank has been running</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong style={strong}>Parameter health (40%).</strong> This looks at the core six — alkalinity, calcium, magnesium, nitrate, phosphate and salinity — and how close each sits to the targets for your tank type. They aren’t weighted equally. Alkalinity counts 2×, salinity 1.4×, calcium 1.3×, nitrate and phosphate 1.2× each, and magnesium 1×. There is also a small adjustment, capped at 5%, if your nitrate-to-phosphate ratio is far from roughly 50:1 to 160:1.
          </p>
          <p>
            <strong style={strong}>Why alkalinity counts double.</strong> Alkalinity is the parameter growing corals burn through fastest, so it’s the one most likely to slide between tests. It’s also the one where swings show up quickly as coral stress — closed polyps, pale tips, burnt edges on SPS. Magnesium, by contrast, moves slowly and mostly matters because it keeps alkalinity and calcium behaving. Weighting alkalinity highest simply mirrors where problems actually start in most reef tanks. Our{" "}
            <Link href="/blog/reef-tank-alkalinity-calcium-magnesium-guide" style={linkStyle}>alkalinity, calcium and magnesium guide</Link>{" "}
            covers how the three interact.
          </p>
          <p>
            <strong style={strong}>Maintenance (15%).</strong> A water change in the last 7 days scores best; the penalty starts once it’s been more than 21 days. Doing 2–5 changes a month earns the most, and changes in the 10–25% range earn a bonus. If you dose but don’t do water changes, you still get partial credit.
          </p>
          <p>
            <strong style={strong}>Testing (15%).</strong> Having tested today or this week scores best. Penalties grow after 3 weeks without a test and again past 60 days. Weekly or twice-weekly testing earns the most, and every 2 weeks earns nearly as much. Testing at least 5 of the core 6 in one session earns full coverage.
          </p>
          <p>
            <strong style={strong}>Setup (15%).</strong> This rewards a complete picture of the tank: a livestock count with a mix of fish, corals and inverts, equipment logged, active dosing, and a light schedule.
          </p>
          <p>
            <strong style={strong}>Maturity (15%).</strong> This part grows with tank age — about 10 in the first month, around 45 at 6 months, around 65 at one year, around 85 at two years, then slowly toward 100.
          </p>

          <h2 style={h2Style}>Stability Score: What Goes Into It</h2>
          <p>
            The Stability Score ignores whether a single reading is good and asks a different question: how consistent is this tank over time?
          </p>
          <div style={{ overflowX: "auto", marginBottom: "24px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px" }}>
              <thead>
                <tr>
                  <th style={thStyle}>Part</th>
                  <th style={thStyle}>Weight</th>
                  <th style={thStyle}>What it looks at</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Parameter consistency</td>
                  <td style={numStyle}>45%</td>
                  <td style={tdStyle}>How much each core parameter varies</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Testing consistency</td>
                  <td style={numStyle}>20%</td>
                  <td style={tdStyle}>Whether you test at a regular interval</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Maintenance consistency</td>
                  <td style={numStyle}>15%</td>
                  <td style={tdStyle}>Whether water changes follow a steady schedule</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Trend</td>
                  <td style={numStyle}>20%</td>
                  <td style={tdStyle}>Parameters drifting steadily toward or out of range over 3+ weeks</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong style={strong}>Parameter consistency (45%).</strong> Nearly half the score is how much each core parameter moves around. Tolerances differ by parameter, because some naturally swing more than others. Alkalinity varying by under about 5% is excellent, while over about 14% scores zero. Calcium and magnesium sit around 4% for excellent and 10% for zero. Nitrate and phosphate are allowed much more swing — they naturally move with feeding and nutrient export.
          </p>
          <p>
            Recent readings count more than old ones. A reading loses weight steadily: about two months old it counts half as much as today’s, and anything past three months still counts 25%. That design matters: if you had a rough spring and fixed it, your improvement shows up in the score instead of being buried under months of old history.
          </p>
          <p>
            <strong style={strong}>Testing consistency (20%).</strong> This rewards testing at a regular interval. Every 5–14 days is the sweet spot. A steady rhythm is what makes the rest of the Stability Score trustworthy — you can’t measure consistency from bursts of tests separated by long gaps.
          </p>
          <p>
            <strong style={strong}>Maintenance consistency (15%).</strong> Water changes on a steady schedule score well; the less the gap between changes varies, the better. Same-size changes on the same rhythm keep the tank’s chemistry predictable.
          </p>
          <p>
            <strong style={strong}>Trend (20%).</strong> This catches the problem single readings miss: a parameter creeping steadily toward the edge of its range, or already past it, over 3 or more weeks. Alkalinity sliding from 9.0 to 8.6 to 8.2 over a month is technically in range at every step for a mixed reef (8.0–9.5 dKH) — but it’s heading somewhere, and the trend part flags it before it lands.
          </p>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
            <Image
              src="/screenshots/site-v3/phone-reef-pulse.png"
              alt="NextUpReef Reef Pulse screen showing the tank’s Reef Score, Stability Score and parameter averages"
              width={777}
              height={1557}
              style={{ width: "100%", maxWidth: 300, height: "auto" }}
            />
            <p style={{ fontSize: "13px", color: "var(--text-muted)", textAlign: "center", marginTop: "12px" }}>
              Reef Pulse shows your Reef Score and Stability Score alongside your parameter averages.
            </p>
          </div>

          <h2 style={h2Style}>Why New Tanks Score Lower (and Why That’s Fair)</h2>
          <p>
            If your tank is a few months old, your Reef Score will sit lower than a two-year-old reef with identical parameters. That’s the maturity part at work: roughly 10 in the first month versus around 85 at two years.
          </p>
          <p>
            This isn’t a judgment on how well you’re doing. It reflects something every experienced reefer knows — young tanks are less forgiving. Bacterial populations are still settling, the{" "}
            <Link href="/blog/the-ugly-phase" style={linkStyle}>ugly phase</Link>{" "}
            is still ahead or just behind, and a new tank hasn’t yet proven it can hold steady through a few seasons. Time is the one thing you can’t buy, and the score treats it that way.
          </p>
          <p>
            What the engine does <em>not</em> do is punish you for being new. With very little data, the Stability Score uses neutral middle scores rather than assuming the worst. You start in the middle and move from there as your logs build up.
          </p>

          <h2 style={h2Style}>What Does NOT Raise Your Score</h2>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={strong}>Buying expensive equipment.</strong> The setup part credits equipment you’ve logged. It doesn’t know or care what it cost. A basic heater and return pump logged properly count the same as premium gear.</li>
            <li><strong style={strong}>Chasing one perfect reading.</strong> A single in-range test can lift parameter health, but if you got there with a big correction, that jump adds to the variation parameter consistency measures. Stable and slightly off beats a perfect number reached by lurching.</li>
            <li><strong style={strong}>Testing ten times in a day.</strong> Weekly or twice-weekly testing already earns the most testing credit. A pile of same-day tests adds nothing extra there, and it doesn’t make your testing interval any more regular.</li>
            <li><strong style={strong}>Logging only the parameter that looks good.</strong> Full coverage comes from testing at least 5 of the core 6 in one session. Cherry-picking leaves points on the table.</li>
          </ul>

          <h2 style={h2Style}>8 Practical Ways to Raise Both Scores</h2>
          <p>
            Each of these is tied directly to a part of the formula — and each is also a solid way to keep reef tank parameters stable whether you care about the numbers or not.
          </p>
          <ol style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <li>
              <strong style={strong}>Log the core six together.</strong> Testing alkalinity, calcium, magnesium, nitrate, phosphate and salinity in the same session earns full testing coverage (5 of 6 is enough) and gives parameter health a complete, current picture instead of a mix of fresh and stale values.
            </li>
            <li>
              <strong style={strong}>Test on a steady weekly rhythm.</strong> Weekly testing earns top testing credit on the Reef Score and lands inside the 5–14 day sweet spot for testing consistency on the Stability Score. Pick a day and stick to it.
            </li>
            <li>
              <strong style={strong}>Keep alkalinity steady above all.</strong> It carries 2× weight in parameter health, the most of the core six, and in parameter consistency staying within about 5% variation is excellent. Small, regular doses beat big corrections every time.
            </li>
            <li>
              <strong style={strong}>Do 10–25% water changes on a schedule, and mark them done.</strong> Changes in that range earn the maintenance bonus, a change within the last 7 days scores best, and a steady gap between changes feeds maintenance consistency. In NextUpReef you can schedule water changes weekly, every 2 weeks or monthly; marking one done logs it so the score can count it. More on sizing and frequency in our{" "}
              <Link href="/blog/reef-tank-water-change-guide" style={linkStyle}>reef tank water change guide</Link>.
            </li>
            <li>
              <strong style={strong}>Set the right tank type.</strong> Parameter health is measured against your tank type’s targets, and they differ more than people expect. Nitrate at 15 ppm is inside the LPS target of 5–20 ppm but well above the SPS target of 2–8 ppm. If your tank type is wrong, your score is grading you against the wrong ranges.
            </li>
            <li>
              <strong style={strong}>Fill in livestock and equipment.</strong> The setup part rewards a logged livestock list with a mix of fish, corals and inverts, logged equipment, active dosing and a light schedule. It takes a few minutes once. Our{" "}
              <Link href="/blog/my-reef-tank-tracking" style={linkStyle}>My Reef tracking guide</Link>{" "}
              walks through it.
            </li>
            <li>
              <strong style={strong}>Dose consistently.</strong> Active dosing counts toward setup, and steady daily dosing is the most reliable way to keep alkalinity and calcium from sawtoothing between tests. The free Dosing screen lists everything due today — tap Dosed to log it — and its alk/Ca/Mg balance shows whether each is steady, rising or falling across recent tests. Not sure which method fits your tank? See{" "}
              <Link href="/blog/two-part-vs-all-in-one-vs-kalkwasser" style={linkStyle}>two-part vs all-in-one vs kalkwasser</Link>.
            </li>
            <li>
              <strong style={strong}>Keep going.</strong> Maturity rises with tank age, and because recent readings count more, a few months of steady logs steadily lift parameter consistency. Both scores reward time. The reefers with the highest scores aren’t doing anything exotic — they’re doing the basics for a long time.
            </li>
          </ol>

          <h2 style={h2Style}>The Community Leaderboard</h2>
          <p>
            NextUpReef has a community leaderboard that ranks public tanks using both scores. Because the Stability Score is part of the ranking, it rewards consistent care over time, not one great test day.
          </p>
          <p>
            Only public tanks are ranked, and you choose whether your tank is public or private.
          </p>

          <h2 style={h2Style}>Frequently Asked Questions</h2>

          <h3 style={{ fontSize: "20px", fontWeight: "900", color: "var(--text-light)", marginTop: "28px", marginBottom: "8px" }}>
            What’s the difference between Reef Score and Stability Score?
          </h3>
          <p>
            Reef Score measures how healthy your tank is right now: parameter health (40%), maintenance (15%), testing (15%), setup (15%) and maturity (15%). Stability Score measures how consistently you keep it that way: parameter consistency (45%), testing consistency (20%), maintenance consistency (15%) and trend (20%). Both run 0–100 and are recalculated nightly.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: "900", color: "var(--text-light)", marginTop: "28px", marginBottom: "8px" }}>
            Why is my new tank’s score low?
          </h3>
          <p>
            Maturity is 15% of the Reef Score and grows with age — about 10 in the first month, around 45 at 6 months, around 65 at one year and around 85 at two years. With very little data, the Stability Score uses neutral middle scores rather than punishing you.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: "900", color: "var(--text-light)", marginTop: "28px", marginBottom: "8px" }}>
            Why does alkalinity count more than other parameters?
          </h3>
          <p>
            In parameter health, alkalinity is weighted 2×, salinity 1.4×, calcium 1.3×, nitrate and phosphate 1.2×, and magnesium 1×. Alkalinity is consumed quickly by growing corals, and swings in it are one of the most common sources of coral stress.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: "900", color: "var(--text-light)", marginTop: "28px", marginBottom: "8px" }}>
            Does testing more often raise my score?
          </h3>
          <p>
            Only up to a point. Weekly or twice-weekly testing earns the most testing credit, and every 2 weeks earns nearly as much. For stability, a regular interval of every 5–14 days is the sweet spot. Many tests in one day don’t earn extra.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: "900", color: "var(--text-light)", marginTop: "28px", marginBottom: "8px" }}>
            How do I keep my reef tank parameters stable?
          </h3>
          <p>
            Test the core six together on a steady weekly rhythm, dose consistently instead of making big corrections, keep alkalinity steady above all, and do 10–25% water changes on a regular schedule. Judge the trend over weeks, not a single reading.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              See your Reef Score and Stability Score — free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Log your tests, schedule water changes, track dosing and watch both scores update nightly. iOS and Android.
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
