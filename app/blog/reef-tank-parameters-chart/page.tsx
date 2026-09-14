import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reef Tank Parameters Chart: Ideal Ranges vs What Real Tanks Run",
  description:
    "A reef tank parameters chart with ideal ranges for mixed reef, SPS, LPS, softie, nano, and ULNS tanks — plus what real hobby tanks actually run, from anonymized NextUpReef app data.",
  alternates: {
    canonical: "https://nextupreef.com/blog/reef-tank-parameters-chart",
  },
  openGraph: {
    title: "Reef Tank Parameters Chart: Ideal Ranges vs What Real Tanks Run",
    description:
      "Ideal reef tank water parameters by tank type, side by side with the typical values from 4,017 real parameter logs.",
    url: "https://nextupreef.com/blog/reef-tank-parameters-chart",
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Reef Tank Parameters Chart: Ideal Ranges vs What Real Tanks Run",
  description:
    "Ideal reef tank parameter ranges by tank type, compared with what real hobby tanks run according to anonymized NextUpReef app data.",
  image: "https://nextupreef.com/brand/og-image.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-09-14",
  dateModified: "2026-09-14",
  mainEntityOfPage: "https://nextupreef.com/blog/reef-tank-parameters-chart",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the ideal reef tank parameters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a mixed reef, good targets are alkalinity 8.0–9.5 dKH, calcium 400–450 ppm, magnesium 1280–1450 ppm, nitrate 2–10 ppm, phosphate 0.03–0.08 ppm, salinity 1.024–1.026 SG, pH 8.1–8.4, and temperature 76–80°F. Ammonia and nitrite should always be 0. SPS and ultra-low-nutrient tanks run tighter and leaner; LPS and soft coral tanks tolerate more nutrients.",
      },
    },
    {
      "@type": "Question",
      name: "What water parameters do real reef tanks actually run?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In anonymized NextUpReef app data (4,017 logs, January–September 2026), the typical tank ran alkalinity 8.4 dKH, calcium 430 ppm, magnesium 1335 ppm, nitrate 7.8 ppm, phosphate 0.085 ppm, salinity 1.025, pH 8.1, and 78°F. These are self-selected hobby tanks, so they show what reefers run, not what is optimal.",
      },
    },
    {
      "@type": "Question",
      name: "Which reef tank parameter is most important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alkalinity is the parameter to keep steadiest in a coral tank, because corals consume it constantly and swings stress them. Salinity and temperature matter just as much but are easier to hold steady. After those, calcium and magnesium, then nitrate and phosphate.",
      },
    },
    {
      "@type": "Question",
      name: "Is it bad if my nitrate or phosphate reads zero?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zero is not the goal in most reef tanks. Corals need some nitrate and phosphate, and a zero reading often means nutrients are being consumed as fast as they appear. In NextUpReef app data about 1 in 10 nitrate readings and about 9% of phosphate readings were zero, so it is common, but mixed reef targets start at 2 ppm nitrate and 0.03 ppm phosphate.",
      },
    },
    {
      "@type": "Question",
      name: "Should I aim for a single number or a range?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aim for a range and hold your tank steady inside it. A tank that sits at 8.3 dKH every week is better off than one that bounces between 7.5 and 9.5 while averaging a perfect-looking number. Stability inside the range beats chasing an exact target.",
      },
    },
  ],
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse" as const,
  fontSize: "15px",
};

const th = {
  color: "var(--text-light)",
  textAlign: "left" as const,
  padding: "10px 12px",
  borderBottom: "1px solid rgba(255,255,255,0.12)",
  whiteSpace: "nowrap" as const,
};

const td = {
  padding: "10px 12px",
  borderTop: "1px solid rgba(255,255,255,0.06)",
};

const tdNum = {
  ...td,
  fontVariantNumeric: "tabular-nums" as const,
  whiteSpace: "nowrap" as const,
};

const h2Style = {
  fontSize: "28px",
  fontWeight: "900",
  color: "var(--text-light)",
  marginTop: "48px",
  marginBottom: "16px",
};

const linkStyle = { color: "var(--reef)", fontWeight: 700 };

const quickChart = [
  ["Alkalinity (dKH)", "8.0–9.5", "8.4"],
  ["Calcium (ppm)", "400–450", "430"],
  ["Magnesium (ppm)", "1280–1450", "1335"],
  ["Nitrate (ppm)", "2–10", "7.8"],
  ["Phosphate (ppm)", "0.03–0.08", "0.085"],
  ["Salinity (SG)", "1.024–1.026", "1.025"],
  ["pH", "8.1–8.4", "8.1"],
  ["Temperature (°F)", "76–80", "78.0"],
  ["Ammonia / Nitrite", "0", "—"],
];

const targetsByType = [
  ["Alkalinity (dKH)", "8.0–9.5", "7.8–8.6", "7.8–9.5", "7.8–9.5", "8.0–9.5", "7.6–8.4"],
  ["Calcium (ppm)", "400–450", "410–450", "400–470", "380–460", "400–450", "410–450"],
  ["Magnesium (ppm)", "1280–1450", "1280–1400", "1280–1450", "1250–1500", "1280–1400", "1280–1400"],
  ["Nitrate (ppm)", "2–10", "2–8", "5–20", "5–25", "2–10", "1–5"],
  ["Phosphate (ppm)", "0.03–0.08", "0.03–0.07", "0.05–0.12", "0.05–0.15", "0.03–0.08", "0.02–0.05"],
  ["Salinity (SG)", "1.024–1.026", "1.025–1.026", "1.024–1.026", "1.024–1.026", "1.024–1.026", "1.025–1.026"],
  ["pH", "8.1–8.4", "8.1–8.4", "8.0–8.4", "8.0–8.4", "8.1–8.4", "8.1–8.4"],
  ["Temperature (°F)", "76–80", "76–79", "76–80", "76–80", "76–79", "76–79"],
];

const realData = [
  ["Alkalinity (dKH)", "149", "7.5–10.4", "7.9–9.5", "8.4"],
  ["Calcium (ppm)", "129", "379–505", "412–455", "430"],
  ["Magnesium (ppm)", "114", "1200–1440", "1260–1380", "1335"],
  ["Nitrate (ppm)", "173", "1–25", "3.5–15", "7.8"],
  ["Phosphate (ppm)", "140", "0.02–0.38", "0.045–0.20", "0.085"],
  ["Salinity (SG)", "151", "1.024–1.026", "1.025–1.026", "1.025"],
  ["pH", "119", "7.9–8.3", "8.0–8.2", "8.1"],
  ["Temperature (°F)", "127", "77.0–79.0", "77.4–78.5", "78.0"],
];

export default function ReefTankParametersChartPost() {
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
          Reef Tank Parameters Chart
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Parameters", "Water Chemistry", "Original Data"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Reef Tank Parameters Chart: Ideal Ranges vs What Real Tanks Run
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          September 14, 2026 · 9 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            Here is the short answer. For a typical mixed reef, aim for <strong style={{ color: "var(--text-light)" }}>alkalinity 8.0–9.5 dKH, calcium 400–450 ppm, magnesium 1280–1450 ppm, nitrate 2–10 ppm, phosphate 0.03–0.08 ppm, salinity 1.024–1.026, pH 8.1–8.4, and 76–80°F</strong>, with ammonia and nitrite at zero. That is what the chart below shows on the left.
          </p>
          <p>
            On the right is something most parameter charts don’t have: the value a typical real hobby tank actually runs, taken from anonymized NextUpReef app data. Targets tell you where to aim. The real numbers tell you how close everyone else gets — and where the hobby tends to drift.
          </p>

          <div style={{ overflowX: "auto", margin: "32px 0" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Parameter</th>
                  <th style={th}>Mixed reef target</th>
                  <th style={th}>Typical real tank (median)</th>
                </tr>
              </thead>
              <tbody>
                {quickChart.map(([name, target, real]) => (
                  <tr key={name}>
                    <td style={td}>{name}</td>
                    <td style={tdNum}>{target}</td>
                    <td style={tdNum}>{real}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "14px" }}>
            Real-tank values: NextUpReef app data, January–September 2026. Method explained below.
          </p>

          <h2 style={h2Style}>
            Why Reef Parameters Are Ranges, Not Single Numbers
          </h2>
          <p>
            Natural seawater isn’t a fixed recipe, and corals aren’t lab instruments. A coral kept at 8.2 dKH and one kept at 9.0 dKH can both grow well. What hurts them is being at 9.0 on Monday and 7.4 by Friday. That’s why every serious parameter chart gives a band rather than a single “perfect” number.
          </p>
          <p>
            There’s a practical reason too: test kits have noise. Two tests of the same water can easily disagree a little. If your target is a single number, you’ll “miss” it on almost every test and be tempted to dose in response to noise. A range gives you room to hold steady and only act on a real trend.
          </p>
          <p>
            So treat the chart this way: <strong style={{ color: "var(--text-light)" }}>pick a spot inside the range and keep the tank there.</strong> A steady number near the edge of the band beats a bouncing number that averages out to the middle. Stability is the thing corals notice.
          </p>

          <h2 style={h2Style}>
            Ideal Reef Tank Parameters by Tank Type
          </h2>
          <p>
            Different tanks want different chemistry. SPS corals prefer tighter, leaner water. LPS and soft corals tolerate — and often look better with — more nutrients. Ultra-low-nutrient systems (ULNS) run lower alkalinity and very little nitrate and phosphate. These are the default targets NextUpReef uses for each tank type:
          </p>

          <div style={{ overflowX: "auto", margin: "32px 0" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Parameter</th>
                  <th style={th}>Mixed reef</th>
                  <th style={th}>SPS</th>
                  <th style={th}>LPS</th>
                  <th style={th}>Softie</th>
                  <th style={th}>Nano</th>
                  <th style={th}>ULNS</th>
                </tr>
              </thead>
              <tbody>
                {targetsByType.map(([name, ...values]) => (
                  <tr key={name}>
                    <td style={{ ...td, whiteSpace: "nowrap" }}>{name}</td>
                    {values.map((v, i) => (
                      <td key={i} style={tdNum}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            A few things stand out. SPS and ULNS tanks narrow the alkalinity band and pull the top of it down, because high, fluctuating alkalinity is widely blamed for burnt tips on sensitive stony corals. Softie tanks allow the widest magnesium, nitrate and phosphate ranges. Nano tanks share mixed reef chemistry but with slightly tighter magnesium and temperature, because small water volumes swing faster.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Fish-only tanks</strong> are far more forgiving: alkalinity 7–11 dKH, calcium 350–500 ppm, magnesium 1150–1500 ppm, nitrate up to 40 ppm, phosphate up to 0.5 ppm, salinity 1.020–1.025, pH 7.8–8.4, and 76–80°F.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Always zero, every tank type:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={{ color: "var(--text-light)" }}>Ammonia:</strong> 0. Any detectable ammonia in an established tank means something is dying or the biofilter is overwhelmed.</li>
              <li><strong style={{ color: "var(--text-light)" }}>Nitrite:</strong> 0. Nitrite belongs to the cycling stage. If you still see it, see our <Link href="/blog/cycling-your-tank" style={linkStyle}>tank cycling guide</Link>.</li>
            </ul>
          </div>

          <h2 style={h2Style}>
            What Real Reef Tanks Actually Run
          </h2>
          <p>
            Target charts are easy to find. What’s hard to find is what ordinary hobby tanks look like in practice. So we looked.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Method:</strong> anonymized parameter logs from NextUpReef users, January–September 2026 (4,017 logs). For each parameter we took each tank’s own median (tanks with at least 2 readings), then looked at the spread across tanks — so a tank that tests daily counts the same as one that tests monthly. Implausible values (typos) were excluded. These are self-selected app users, not a controlled study; they show what real hobby tanks run, not what is optimal.
          </p>

          <div style={{ overflowX: "auto", margin: "32px 0" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Parameter</th>
                  <th style={th}>Tanks</th>
                  <th style={th}>Middle 80% of tanks</th>
                  <th style={th}>Middle 50%</th>
                  <th style={th}>Typical (median)</th>
                </tr>
              </thead>
              <tbody>
                {realData.map(([name, ...values]) => (
                  <tr key={name}>
                    <td style={{ ...td, whiteSpace: "nowrap" }}>{name}</td>
                    {values.map((v, i) => (
                      <td key={i} style={tdNum}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "14px" }}>
            Source: NextUpReef app data. “Middle 80%” means the 10th to 90th percentile of per-tank medians; “Middle 50%” is the 25th to 75th.
          </p>

          <p>
            These figures aren’t split by tank type, so compare them to the target chart loosely rather than column by column. With that caveat, here’s what the numbers show.
          </p>

          <p>
            <strong style={{ color: "var(--text-light)" }}>1. Alkalinity has the widest spread of the big three.</strong> The middle 80% of tanks run anywhere from 7.5 to 10.4 dKH — a spread of about a third of the typical value. Calcium’s middle 80% (379–505 ppm) is proportionally a bit narrower, and magnesium’s (1200–1440 ppm) is narrower still. Alkalinity is the parameter corals use fastest and the one most tied to dosing, so it makes sense that it’s where tanks differ most. The median tank at 8.4 dKH is right where most targets would put it; the tails are where the trouble lives. Our <Link href="/blog/reef-tank-alkalinity-calcium-magnesium-guide" style={linkStyle}>alkalinity, calcium and magnesium guide</Link> covers how to keep it steady.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>2. Typical calcium and magnesium sit comfortably in range.</strong> The median tank runs 430 ppm calcium and 1335 ppm magnesium, both near the middle of the mixed reef band. The middle half of tanks (412–455 ppm calcium, 1260–1380 ppm magnesium) is mostly inside the targets too, with magnesium more likely to run a little low than high.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>3. Median pH of 8.1 sits at the low end of the 8.1–8.4 target.</strong> The middle 80% of tanks read 7.9–8.3, so a good share of tanks run below 8.1. That lines up with the most common cause of low pH in reef tanks: CO2 in the room air, especially in closed-up homes. It usually isn’t a water chemistry problem at all. See the <Link href="/blog/reef-tank-ph-guide" style={linkStyle}>reef tank pH guide</Link> for how to tell and what to do.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>4. Nutrients are rarely zero overall, but zero readings are common.</strong> The typical tank runs 7.8 ppm nitrate and 0.085 ppm phosphate — real, measurable nutrients. Yet about 1 in 10 nitrate readings (11%) were zero, and about 9% of phosphate readings were zero. Bottomed-out nutrients happen more than many reefers expect, and zero is below every reef target in the chart. At the other end, phosphate shows a long upper tail: the top of the middle 80% reaches 0.38 ppm. The <Link href="/blog/reef-tank-nitrate-phosphate-guide" style={linkStyle}>nitrate and phosphate guide</Link> explains both problems.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>5. Salinity and temperature are held tightly.</strong> Salinity is the most tightly held parameter in the data: the middle 80% of tanks run 1.024–1.026, exactly the target band, and the middle half runs 1.025–1.026. Temperature clusters just as closely around 78°F, with the middle 80% between 77 and 79°F. Heaters, auto top-offs and refractometers make these two easy to lock down, and most reefers clearly do. Our <Link href="/blog/reef-tank-salinity-guide" style={linkStyle}>salinity guide</Link> covers the details.
          </p>
          <p>
            What this data doesn’t tell you: whether any of these tanks are thriving, which numbers cause better coral growth, or what the wider hobby looks like outside app users. It’s a snapshot of what real tanks run, not proof of what they should run.
          </p>

          <h2 style={h2Style}>
            What to Test First, and How Often
          </h2>
          <p>
            You don’t need to test everything every week. Start with what changes fastest and matters most:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Salinity and temperature:</strong> check constantly or near-daily. They’re cheap to watch and a fast swing can hurt everything in the tank.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Alkalinity:</strong> weekly at minimum once corals are growing; more often while you dial in dosing.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Calcium, nitrate and phosphate:</strong> weekly to every two weeks.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Magnesium:</strong> every two weeks to monthly. It moves slowly.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Ammonia and nitrite:</strong> during cycling, after a death or big change, or when something looks wrong.</li>
          </ul>
          <p>
            Consistency matters more than volume. A regular weekly rhythm makes trends visible; random bursts of testing don’t. Our guide on <Link href="/blog/how-to-track-saltwater-aquarium-parameters" style={linkStyle}>how to track saltwater aquarium parameters</Link> goes deeper on building that habit.
          </p>

          <h2 style={h2Style}>
            How NextUpReef Uses These Targets
          </h2>
          <p>
            When you create a tank in NextUpReef, you pick its type — mixed reef, SPS, LPS, softie, nano, ULNS, fish-only, frag or quarantine — and that type’s default target ranges are set automatically (the chart above shows them for the six reef types). If your tank runs differently on purpose, you can customize the range for any parameter.
          </p>
          <p>
            When you log a test, every value is color-coded against your tank’s target the moment you type it, so you know right away whether 8.0 dKH is fine or a problem. Your last values pre-fill, and you can backdate or edit entries.
          </p>

          <div style={{ margin: "40px 0", textAlign: "center" }}>
            <Image
              src="/screenshots/site-v3/phone-log.png"
              alt="NextUpReef Log Parameters screen for a mixed reef tank with alkalinity 8.0 dKH and calcium 425 ppm entered and marked green as in range"
              width={777}
              height={1557}
              style={{ width: "100%", maxWidth: 300, height: "auto", display: "block", margin: "0 auto" }}
            />
            <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "12px", textAlign: "center" }}>
              Each entry is checked against the tank’s target range as you type — here, alkalinity and calcium both land in range.
            </p>
          </div>

          <p>
            Over time, Reef Pulse draws each parameter as a trend chart with your target band shaded in, so you can see drift toward the edge of the range weeks before it becomes a problem. Water changes show up as markers on the chart. And because stability matters more than hitting one number, your Stability Score rewards holding parameters steady inside the band — see <Link href="/blog/reef-score-stability-score-explained" style={linkStyle}>how the Reef Score and Stability Score work</Link>.
          </p>

          <h2 style={h2Style}>
            FAQ
          </h2>
          <p>
            <strong style={{ color: "var(--text-light)" }}>What are the ideal reef tank parameters?</strong><br />
            For a mixed reef: alkalinity 8.0–9.5 dKH, calcium 400–450 ppm, magnesium 1280–1450 ppm, nitrate 2–10 ppm, phosphate 0.03–0.08 ppm, salinity 1.024–1.026, pH 8.1–8.4, and 76–80°F, with ammonia and nitrite at 0. SPS and ULNS tanks run tighter and leaner; LPS and softie tanks tolerate more nutrients.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>What water parameters do real reef tanks actually run?</strong><br />
            In NextUpReef app data, the typical tank ran 8.4 dKH, 430 ppm calcium, 1335 ppm magnesium, 7.8 ppm nitrate, 0.085 ppm phosphate, 1.025 salinity, pH 8.1 and 78°F. These are self-selected hobby tanks, so they show what reefers run, not what is optimal.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Which reef tank parameter is most important?</strong><br />
            In a coral tank, keep alkalinity steadiest. Corals consume it constantly and swings stress them. Salinity and temperature matter just as much but are easier to hold. After those come calcium and magnesium, then nitrate and phosphate.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Is it bad if my nitrate or phosphate reads zero?</strong><br />
            Zero isn’t the goal in most reef tanks. Corals need some nutrients, and a zero reading often means they’re being used up as fast as they appear. About 1 in 10 nitrate readings in our data were zero, so it’s common — but mixed reef targets start at 2 ppm nitrate and 0.03 ppm phosphate.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Should I aim for a single number or a range?</strong><br />
            A range. Pick a spot inside it and hold the tank there. A tank that reads 8.3 dKH every week is better off than one bouncing between 7.5 and 9.5 while averaging a perfect-looking number.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Get the right targets for your tank type — free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Pick your tank type, log a test, and see every value color-coded against its target. Trend charts show your range at a glance. iOS and Android.
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
