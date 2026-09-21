import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reef Tank Dosing Calculator: How Much Baking Soda, 2-Part or Kalk to Dose",
  description:
    "Work out exactly how much baking soda, soda ash, calcium chloride, magnesium or 2-part to dose in your reef tank, with the formula, product strengths, worked examples and safe daily limits.",
  alternates: {
    canonical: "https://nextupreef.com/blog/reef-tank-dosing-calculator",
  },
  openGraph: {
    title: "Reef Tank Dosing Calculator: How Much Baking Soda, 2-Part or Kalk to Dose",
    description:
      "The one formula behind every reef dosing calculator, real product strengths, worked alk, calcium and magnesium examples, and the daily limits that keep corals safe.",
    url: "https://nextupreef.com/blog/reef-tank-dosing-calculator",
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Reef Tank Dosing Calculator: How Much Baking Soda, 2-Part or Kalk to Dose",
  description:
    "How to calculate reef tank doses for alkalinity, calcium and magnesium: real water volume, product strength, worked examples, safe daily limits and how to dial in a daily dose.",
  image: "https://nextupreef.com/brand/og-image.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-09-14",
  dateModified: "2026-09-14",
  mainEntityOfPage: "https://nextupreef.com/blog/reef-tank-dosing-calculator",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much baking soda do I need to raise alkalinity in a reef tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One gram of baking soda (sodium bicarbonate) per 100 liters of real water raises alkalinity by about 0.333 dKH. For example, a 75-gallon display with a 20-gallon sump holds about 306 liters of water after rock and sand displacement. Raising that tank from 7.0 to 8.5 dKH takes 13.8 grams in total (about 2.5 teaspoons), split into 9.2 grams on day 1 and 4.6 grams on day 2, with a retest before the second dose.",
      },
    },
    {
      "@type": "Question",
      name: "What is the safe daily increase for alkalinity, calcium and magnesium?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keep corrections to no more than 1 dKH of alkalinity, 25 ppm of calcium and 100 ppm of magnesium per day. If the correction you need is bigger than that, split it over several days and retest before each dose.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use soda ash instead of baking soda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but they are not interchangeable gram for gram. Soda ash (sodium carbonate) raises alkalinity by about 0.528 dKH per gram per 100 liters versus 0.333 dKH for baking soda, and it also raises pH, so it needs to be dosed slowly. In a 306-liter tank, a 7.0 to 8.5 dKH correction takes 8.7 grams of soda ash instead of 13.8 grams of baking soda.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use kalkwasser to fix low alkalinity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Saturated kalkwasser adds only about 1.1 dKH and 8 ppm calcium per liter per 100 liters, and it is heavy on pH. It works for slow daily maintenance, often through the auto top-off, but it is too slow and too pH-heavy for correcting a low reading. Use baking soda, soda ash or a 2-part alkalinity product for corrections.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate a 2-part dose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide the rise you want by the strength printed on the bottle, then multiply by your real water volume divided by the volume the label uses. Red Sea Foundation labels are per 100 liters, Seachem Reef Fusion is per 25 liters and Brightwell Reef Code is per US gallon. Always check your own bottle because formulations change, and never dose more than the safe daily rise in one day.",
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

const strengths = [
  ["Baking soda (sodium bicarbonate)", "Alkalinity", "+0.333 dKH per 1 g per 100 L"],
  ["Soda ash (sodium carbonate)", "Alkalinity", "+0.528 dKH per 1 g per 100 L"],
  ["Calcium chloride dihydrate", "Calcium", "+2.73 ppm per 1 g per 100 L"],
  ["Magnesium chloride hexahydrate", "Magnesium", "+1.2 ppm per 1 g per 100 L"],
  ["Magnesium sulfate (Epsom salt)", "Magnesium", "+0.99 ppm per 1 g per 100 L"],
  ["Kalkwasser (saturated)", "Alk + calcium", "≈ +1.1 dKH and ≈ +8 ppm Ca per 1 L per 100 L"],
  ["Red Sea Reef Foundation A", "Calcium", "+2 ppm per 1 mL per 100 L"],
  ["Red Sea Reef Foundation B", "Alkalinity", "+0.1 dKH per 1 mL per 100 L"],
  ["Red Sea Reef Foundation C", "Magnesium", "+1 ppm per 1 mL per 100 L"],
  ["Seachem Reef Fusion 1", "Calcium", "+4 ppm per 1 mL per 25 L"],
  ["Seachem Reef Fusion 2", "Alkalinity", "+0.494 dKH per 1 mL per 25 L"],
  ["Brightwell Reef Code A", "Calcium", "+16 ppm per 1 mL per US gallon"],
  ["Brightwell Reef Code B", "Alkalinity", "+2.22 dKH per 1 mL per US gallon"],
];

const alkExample = [
  ["Baking soda", "13.8 g (~2.5 tsp)", "9.2 g day 1, 4.6 g day 2"],
  ["Soda ash", "8.7 g", "Split so no day exceeds +1 dKH"],
  ["Red Sea Foundation B", "46 mL", "31 mL day 1, 15 mL day 2"],
  ["Brightwell Reef Code B", "54.6 mL", "Split so no day exceeds +1 dKH"],
  ["Seachem Reef Fusion 2", "37 mL", "Split so no day exceeds +1 dKH"],
];

export default function ReefTankDosingCalculatorPost() {
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
          Reef Dosing Calculator
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Dosing", "Alkalinity", "Calculator"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Reef Tank Dosing Calculator: How Much Baking Soda, 2-Part or Kalk to Dose
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          September 14, 2026 · 9 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            Every reef dosing calculator, from a spreadsheet to an app, runs the same simple math. You need three numbers: how much you want to raise a parameter, how strong your product is, and how much water is really in your system. Get those right and the dose falls out in one line.
          </p>
          <p>
            The part most calculators skip is the part that keeps corals alive: how fast you are allowed to get there. This guide gives you the formula, the strengths of the common chemicals and 2-part products, fully worked examples for alkalinity, calcium and magnesium, and the daily limits you should never cross.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Quick answer:</p>
            <p style={{ margin: "0 0 12px 0" }}>
              <strong style={{ color: "var(--text-light)" }}>Amount = (rise you want ÷ product strength) × (your water liters ÷ 100)</strong>
            </p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={{ color: "var(--text-light)" }}>Alkalinity:</strong> no more than 1 dKH per day</li>
              <li><strong style={{ color: "var(--text-light)" }}>Calcium:</strong> no more than 25 ppm per day</li>
              <li><strong style={{ color: "var(--text-light)" }}>Magnesium:</strong> no more than 100 ppm per day</li>
              <li><strong style={{ color: "var(--text-light)" }}>Always:</strong> retest after dosing, and never dump a full correction in at once</li>
            </ul>
          </div>

          <p>
            Dose maths only works if your test history is reliable, which comes down to logging habit. See our comparison of <Link href="/blog/best-reef-tank-tracking-app" style={{ color: "var(--reef)", fontWeight: 700 }}>reef tank tracking apps</Link> if you need one.
          </p>
          <h2 style={h2Style}>Step 1: Find Your Real Water Volume</h2>
          <p>
            The number on the tank&apos;s box is not the number to use. Your system&apos;s water is the display plus the sump, minus whatever rock, sand and equipment push out. A reasonable allowance is <strong style={{ color: "var(--text-light)" }}>10–20% displacement</strong>.
          </p>
          <p>
            Here is the tank we will use for every example in this post: a <strong style={{ color: "var(--text-light)" }}>75-gallon display with a 20-gallon sump</strong>. That is 360 liters gross. Take off 15% for displacement and you have <strong style={{ color: "var(--text-light)" }}>306 liters net (about 81 gallons)</strong>.
          </p>
          <p>
            Why it matters: the dose scales directly with volume. Use the gross figure and every dose comes out too big. If you are not sure how much your sump actually holds while running, our{" "}
            <Link href="/blog/reef-tank-sump-guide" style={linkStyle}>sump guide</Link> is a good place to start.
          </p>

          <h2 style={h2Style}>Step 2: Know Your Product&apos;s Strength</h2>
          <p>
            Strength is how much one unit of product raises the parameter in a set volume of water. Plain chemicals are usually quoted per gram per 100 liters. 2-part brands print their own figures, and they do not all use the same volume.
          </p>
          <div style={{ overflowX: "auto", marginBottom: "24px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px" }}>
              <thead>
                <tr>
                  <th style={thStyle}>Product</th>
                  <th style={thStyle}>Raises</th>
                  <th style={thStyle}>Strength</th>
                </tr>
              </thead>
              <tbody>
                {strengths.map(([product, raises, strength]) => (
                  <tr key={product}>
                    <td style={tdStyle}>{product}</td>
                    <td style={tdStyle}>{raises}</td>
                    <td style={numStyle}>{strength}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Notice the label volumes. Red Sea quotes per 100 liters, so the formula above works as written. Seachem quotes per 25 liters and Brightwell per US gallon, so swap the &quot;÷ 100&quot; for your volume divided by the label&apos;s volume (liters ÷ 25, or plain gallons for Brightwell).
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Check your bottle.</strong> These are the published figures at the time of writing, and formulations change. If your label says something different, the label wins.
          </p>

          <h2 style={h2Style}>Step 3: Worked Alkalinity Example (7.0 → 8.5 dKH)</h2>
          <p>
            Our 306-liter tank tests at 7.0 dKH and we want 8.5 dKH, a rise of 1.5 dKH. Using baking soda at +0.333 dKH per gram per 100 liters:
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>(1.5 ÷ 0.333) × (306 ÷ 100) = 13.8 g of baking soda in total, about 2.5 teaspoons.</strong>
          </p>
          <p>
            But 1.5 dKH is more than the 1 dKH daily limit, so the dose gets split:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Day 1:</strong> 9.2 g (+1.0 dKH). Retest the next day.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Day 2:</strong> 4.6 g (+0.5 dKH), but only if the retest confirms you still need it. Retest again afterwards.</li>
          </ul>
          <p>
            Weigh it on a gram scale if you can. A level teaspoon of baking soda is roughly 5.5 g, which is fine for a rough check but not precise. Dissolve it in RO/DI water and add it slowly to a high-flow area such as the sump.
          </p>
          <p>
            The same correction with other products:
          </p>
          <div style={{ overflowX: "auto", marginBottom: "24px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px" }}>
              <thead>
                <tr>
                  <th style={thStyle}>Product</th>
                  <th style={thStyle}>Total for +1.5 dKH (306 L)</th>
                  <th style={thStyle}>How to split it</th>
                </tr>
              </thead>
              <tbody>
                {alkExample.map(([product, total, split]) => (
                  <tr key={product}>
                    <td style={tdStyle}>{product}</td>
                    <td style={numStyle}>{total}</td>
                    <td style={numStyle}>{split}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Soda ash takes fewer grams because it is stronger, and it raises pH as well, so dose it slowly. Never swap one for the other at the same weight.
          </p>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
            <Image
              src="/screenshots/site-v3/phones-dosing.png"
              alt="NextUpReef Dosing screen showing alkalinity, calcium and magnesium balance and today's doses, beside an automated doser setup"
              width={1227}
              height={1434}
              style={{ width: "100%", maxWidth: 380, height: "auto" }}
            />
            <p style={{ fontSize: "13px", color: "var(--text-muted)", textAlign: "center", marginTop: "12px", marginBottom: 0 }}>
              The NextUpReef Dosing screen: alk, calcium and magnesium balance plus everything due today.
            </p>
          </div>

          <h2 style={h2Style}>Worked Calcium and Magnesium Examples</h2>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Calcium 380 → 430 ppm (+50 ppm).</strong> With calcium chloride dihydrate at +2.73 ppm per gram per 100 liters, the 306-liter tank needs <strong style={{ color: "var(--text-light)" }}>56 g in total</strong>. That is double the 25 ppm daily limit, so dose <strong style={{ color: "var(--text-light)" }}>28 g per day over 2 days</strong> and retest between doses.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Magnesium 1200 → 1350 ppm (+150 ppm).</strong> With magnesium chloride hexahydrate at +1.2 ppm per gram per 100 liters, the total is <strong style={{ color: "var(--text-light)" }}>382 g</strong>: <strong style={{ color: "var(--text-light)" }}>255 g on day 1</strong> (+100 ppm) and <strong style={{ color: "var(--text-light)" }}>127 g on day 2</strong> (+50 ppm).
          </p>
          <p>
            Magnesium doses are big by weight, and that has a side effect: every <strong style={{ color: "var(--text-light)" }}>+100 ppm of magnesium from magnesium chloride raises salinity by about 0.4 ppt</strong>. Check salinity after a large magnesium correction and adjust your top-off if needed. Our{" "}
            <Link href="/blog/reef-tank-salinity-guide" style={linkStyle}>salinity guide</Link> covers how to bring it back in line. For long-term magnesium dosing, mix magnesium chloride with magnesium sulfate rather than relying on one alone.
          </p>
          <p>
            Not sure what numbers to aim for in the first place? The{" "}
            <Link href="/blog/reef-tank-alkalinity-calcium-magnesium-guide" style={linkStyle}>alkalinity, calcium and magnesium guide</Link> explains target ranges and how the three interact.
          </p>

          <h2 style={h2Style}>Correcting a Low Reading vs Setting Your Daily Dose</h2>
          <p>
            These are two different jobs, and mixing them up is how people end up chasing their tails.
          </p>
          <p>
            A <strong style={{ color: "var(--text-light)" }}>correction</strong> is a one-time lift to get a low parameter back to target. The examples above are corrections. A <strong style={{ color: "var(--text-light)" }}>daily dose</strong> replaces what your corals and coralline algae consume every day. If you only ever correct, the tank drifts low again and you are back to big swings.
          </p>
          <p>
            To set a daily dose, measure consumption. Keep your current dose unchanged, test at the same time of day over several days, and see how fast the number falls. Then dose enough extra to cancel that drop.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Dial-in example:</strong> in our 306-liter tank, alkalinity falls <strong style={{ color: "var(--text-light)" }}>0.3 dKH per day</strong> on the current dose. The fix is about <strong style={{ color: "var(--text-light)" }}>2.8 g per day more baking soda</strong>. Make the change, then keep testing to confirm the trend has flattened.
          </p>
          <p>
            Calcium and alkalinity are consumed together, at roughly <strong style={{ color: "var(--text-light)" }}>1 dKH of alkalinity to 7.14 ppm of calcium</strong> (20 ppm calcium for every 2.8 dKH). That is why balanced 2-part products dose A and B in step. If your calcium is falling far faster or slower than that ratio suggests, double-check your test kits before changing doses.
          </p>
          <p>
            Where does kalkwasser fit? It is a maintenance tool. Supplying just 0.5 dKH per day in our example tank takes about <strong style={{ color: "var(--text-light)" }}>1.4 liters per day</strong> of saturated kalk, which is why kalk alone struggles in coral-heavy tanks. Our{" "}
            <Link href="/blog/two-part-vs-all-in-one-vs-kalkwasser" style={linkStyle}>2-part vs all-in-one vs kalkwasser comparison</Link> goes deeper on choosing a method.
          </p>

          <h2 style={h2Style}>Why Limit the Daily Rise?</h2>
          <p>
            Corals respond to change, not just to the number. A rapid swing in alkalinity is a well-known stressor, even when the destination is a perfectly good value. A tank that sits steadily a little low is usually in better shape than one that gets yanked up in an afternoon.
          </p>
          <p>
            Slow corrections also protect you from your own mistakes. Test kits have error, volume estimates are rough, and products vary. If you dose half and retest, a bad reading or a wrong volume shows up before it does real damage. Overshooting is harder to fix than undershooting, because the only way down is waiting for the tank to consume the excess or doing water changes.
          </p>

          <h2 style={h2Style}>Common Dosing Mistakes</h2>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Using the nominal tank size.</strong> Include the sump and subtract 10–20% for rock, sand and equipment.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Confusing anhydrous and dihydrate calcium chloride.</strong> Anhydrous is roughly 30% stronger. Dose it at dihydrate weights and you overshoot.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Treating soda ash like baking soda.</strong> Soda ash is stronger (+0.528 vs +0.333 dKH per gram per 100 L) and raises pH. Same grams, bigger jump.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Using Epsom salt alone long term.</strong> Magnesium sulfate on its own builds up sulfate. Blend it with magnesium chloride.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Dosing the full correction in one go.</strong> Stay under 1 dKH, 25 ppm calcium and 100 ppm magnesium per day.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Using kalkwasser for corrections.</strong> It is too slow and too pH-heavy. Keep it for daily maintenance.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Not retesting.</strong> Every dose is a prediction. The test after it tells you whether the prediction was right.</li>
          </ul>

          <h2 style={h2Style}>How the NextUpReef Dose Calculator Does This for You</h2>
          <p>
            The math above is simple, but doing it by hand every week, for three parameters and several products, is where errors creep in. NextUpReef builds it into the app.
          </p>
          <p>
            The <strong style={{ color: "var(--text-light)" }}>Dosing screen is free on every account</strong>. It shows one list of everything due today, whether you dose by hand, with your own dosing pump, or automatically on a Shelly plug or Apex outlet. Tap <strong style={{ color: "var(--text-light)" }}>Dosed</strong> to log a dose. The <strong style={{ color: "var(--text-light)" }}>alk/Ca/Mg balance</strong> shows whether each is steady, rising or falling across your recent tests, with test noise filtered out. The catalog covers <strong style={{ color: "var(--text-light)" }}>50+ common products</strong>, including Red Sea, Seachem, Brightwell, Tropic Marin, BRS, ESV, Fritz, Aquaforest, plain baking soda, soda ash, calcium chloride, magnesium chloride and sulfate, and kalkwasser, with known strengths prefilled so you are not copying numbers off a label.
          </p>
          <p>
            The <strong style={{ color: "var(--text-light)" }}>dose calculator is part of Pro</strong> and has two modes that match the two jobs above:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Dial in</strong> suggests a new daily dose from your own test trend since your last dose change. It needs at least 3 tests over at least 4 days since the dose last changed; without that, it tells you to retest first rather than guess. It also caps any single change at 30%.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Fix</strong> corrects a low reading and splits it over as many days as needed so no day exceeds 1 dKH of alkalinity, 25 ppm of calcium or 100 ppm of magnesium. Kalkwasser is excluded from Fix because it is too slow and too pH-heavy for corrections.</li>
          </ul>
          <p>
            Pro also adds a daily dosing reminder at the hour you choose, listing what is still due and staying silent once everything is logged. If you want doses to run on their own, see{" "}
            <Link href="/blog/how-to-setup-dosing-shelly" style={linkStyle}>how to set up dosing on a Shelly plug</Link>. Pro is $4.99/month or $39.99/year, and every new account gets a 30-day Pro trial with no credit card.
          </p>

          <h2 style={h2Style}>Frequently Asked Questions</h2>
          <p>
            <strong style={{ color: "var(--text-light)" }}>How much baking soda do I need to raise alkalinity?</strong><br />
            One gram per 100 liters of real water raises alkalinity by about 0.333 dKH. In our 306-liter example tank, 7.0 to 8.5 dKH takes 13.8 g in total (about 2.5 teaspoons), split into 9.2 g on day 1 and 4.6 g on day 2, with a retest in between.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>What is the safe daily increase for alkalinity, calcium and magnesium?</strong><br />
            No more than 1 dKH of alkalinity, 25 ppm of calcium and 100 ppm of magnesium per day. Split anything bigger over several days and retest before each dose.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Can I use soda ash instead of baking soda?</strong><br />
            Yes, but not at the same weight. Soda ash adds about 0.528 dKH per gram per 100 liters versus 0.333 for baking soda, and it raises pH, so dose it slowly. The 7.0 to 8.5 dKH correction in our example takes 8.7 g of soda ash instead of 13.8 g of baking soda.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Should I use kalkwasser to fix low alkalinity?</strong><br />
            No. Saturated kalk adds only about 1.1 dKH and 8 ppm calcium per liter per 100 liters and is heavy on pH. It suits slow daily maintenance, often via the auto top-off, not corrections.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>How do I calculate a 2-part dose?</strong><br />
            Divide the rise you want by the strength on the bottle, then multiply by your water volume divided by the label&apos;s volume. Red Sea Foundation is per 100 liters, Seachem Reef Fusion per 25 liters and Brightwell Reef Code per US gallon. Check your own bottle, since formulations change.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Dose with confidence using NextUpReef.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Free Dosing screen with alk/Ca/Mg balance and a 50+ product catalog, plus a Pro dose calculator that splits corrections safely. iOS and Android.
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
