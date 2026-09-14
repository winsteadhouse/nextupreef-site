import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2-Part vs All-in-One vs Kalkwasser: How to Choose Your Reef Dosing Method",
  description:
    "2-part dosing, all-in-one, kalkwasser, or a calcium reactor? Compare what each supplies, how much control you get, the effect on pH, and which fits your reef tank.",
  alternates: {
    canonical: "https://nextupreef.com/blog/two-part-vs-all-in-one-vs-kalkwasser",
  },
  openGraph: {
    title: "2-Part vs All-in-One vs Kalkwasser: How to Choose Your Reef Dosing Method",
    description:
      "A practical comparison of reef dosing methods: 2-part, 3-part, all-in-one, kalkwasser and calcium reactors, with the chemistry that decides between them.",
    url: "https://nextupreef.com/blog/two-part-vs-all-in-one-vs-kalkwasser",
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "2-Part vs All-in-One vs Kalkwasser: How to Choose Your Reef Dosing Method",
  description:
    "How 2-part, 3-part, all-in-one, kalkwasser and calcium reactor dosing compare on control, effort, pH and capacity, and how to pick the right one for your reef tank.",
  image: "https://nextupreef.com/brand/og-image.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-09-14",
  dateModified: "2026-09-14",
  mainEntityOfPage: "https://nextupreef.com/blog/two-part-vs-all-in-one-vs-kalkwasser",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is 2-part or all-in-one dosing better for a reef tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2-part gives you more control because alkalinity and calcium come from separate bottles, so you can adjust each one independently. All-in-one is simpler (one product, one dose) and usually includes trace elements, but its ratio is fixed, so you cannot raise calcium without also raising alkalinity. Choose 2-part for control and value, all-in-one for simplicity.",
      },
    },
    {
      "@type": "Question",
      name: "Can kalkwasser replace 2-part dosing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only in tanks with modest demand. Saturated kalkwasser is weak: 1 L per 100 L of water adds only about 1.1 dKH and 8 ppm calcium. Supplying 0.5 dKH per day in an 81-gallon system takes about 1.4 L of kalkwasser per day, and you can only add as much as evaporates. Many reefers run kalk through the auto top-off and use 2-part to cover the rest.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if my reef tank needs dosing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Test alkalinity every day for about a week, at the same time of day. If it drops steadily between water changes, your corals are using alkalinity and calcium faster than water changes replace them, and it is time to dose. The daily drop tells you how much you need to add back.",
      },
    },
    {
      "@type": "Question",
      name: "Is kalkwasser dosing safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, when it is added slowly, usually through the auto top-off or a drip. Never pour a large amount in at once: kalkwasser raises pH sharply, and an overdose can push pH dangerously high. It is a daily maintenance supplement, not a way to correct a low reading.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to dose magnesium too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often, yes. Magnesium helps keep alkalinity and calcium stable, and corals use it slowly over time. Test it every week or two. If it drifts low, add a 3-part system (which includes a magnesium part) or a separate magnesium product.",
      },
    },
  ],
};

const h2Style = {
  fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px",
} as const;

const linkStyle = { color: "var(--reef)", fontWeight: 700 } as const;

const thStyle = {
  color: "var(--text-light)", textAlign: "left", padding: "10px 12px",
  borderBottom: "1px solid rgba(255,255,255,0.12)", verticalAlign: "bottom",
} as const;

const tdStyle = {
  padding: "10px 12px", borderTop: "1px solid rgba(255,255,255,0.06)", verticalAlign: "top",
} as const;

const methods = [
  {
    name: "2-part",
    supplies: "Alkalinity and calcium, in separate bottles",
    control: "High: adjust each independently",
    effort: "Two doses a day (or a pump)",
    ph: "Depends on the alk part; baking soda is gentle, soda ash raises pH",
    best: "Most mixed reefs, SPS tanks, anyone who wants control and value",
  },
  {
    name: "3-part",
    supplies: "Alkalinity, calcium and magnesium",
    control: "High: all three independent",
    effort: "Three doses a day (or a pump)",
    ph: "Same as 2-part",
    best: "Growing tanks where magnesium also drifts",
  },
  {
    name: "All-in-one",
    supplies: "Alk, calcium, magnesium and trace elements in one product",
    control: "Low: fixed ratio",
    effort: "One dose a day",
    ph: "Depends on the product",
    best: "Lighter-demand tanks, nano reefs, simplicity",
  },
  {
    name: "Kalkwasser",
    supplies: "Alkalinity and calcium",
    control: "Low: limited by evaporation",
    effort: "Mix and refill the top-off reservoir",
    ph: "Raises pH (can help low pH)",
    best: "A supplement alongside 2-part, or low-demand tanks",
  },
  {
    name: "Calcium reactor",
    supplies: "Alkalinity, calcium and some magnesium from dissolved media",
    control: "Moderate: tuned by CO2 and flow",
    effort: "Setup and tuning, then low",
    ph: "Can lower pH if not tuned",
    best: "Very heavy coral demand",
  },
];

export default function TwoPartVsAllInOneVsKalkwasserPost() {
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
          Reef Dosing Methods
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Dosing", "2-Part", "Kalkwasser"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          2-Part vs All-in-One vs Kalkwasser: How to Choose Your Reef Dosing Method
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          September 14, 2026 · 9 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            <strong style={{ color: "var(--text-light)" }}>The quick answer:</strong> choose <strong style={{ color: "var(--text-light)" }}>2-part</strong> if you want control and value, because alkalinity and calcium come from separate bottles you can adjust independently. Choose an <strong style={{ color: "var(--text-light)" }}>all-in-one</strong> if you want simplicity: one product, one dose, trace elements included. Use <strong style={{ color: "var(--text-light)" }}>kalkwasser</strong> as a supplement that replaces some alk and calcium through your top-off and also helps pH. Look at a <strong style={{ color: "var(--text-light)" }}>calcium reactor</strong> only when coral demand gets very heavy.
          </p>
          <p>
            None of these is &quot;best&quot; in general. They all replace the same thing: the alkalinity and calcium your corals pull out of the water to build skeleton. What differs is how much control you get, how much work it takes, what it does to pH, and how much demand it can keep up with. This guide walks through each one so you can match the method to your tank.
          </p>

          <h2 style={h2Style}>Do You Need to Dose Yet?</h2>
          <p>
            A new tank with a few softies usually does not. Water changes bring in fresh alkalinity, calcium and magnesium, and early on that covers what the livestock uses. Dosing becomes necessary when coral growth uses alk and calcium <em>faster</em> than your water changes replace them. That typically happens as stony corals fill in, which is why dosing shows up as a milestone in our{" "}
            <Link href="/blog/established-reef" style={linkStyle}>established reef guide</Link>.
          </p>
          <p>
            Don&apos;t guess. Measure it. Test alkalinity <strong style={{ color: "var(--text-light)" }}>every day for about a week, at the same time of day</strong>, without dosing and without a water change in the middle. If alk holds steady, you don&apos;t need to dose. If it falls steadily, the average daily drop is your consumption, and that number is what any dosing method has to replace.
          </p>
          <p>
            Alkalinity is the right parameter to watch because it moves fastest and shows consumption first. Calcium falls in step with it, as you&apos;ll see below.
          </p>

          <h2 style={h2Style}>Dosing Methods Compared</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px" }}>
              <thead>
                <tr>
                  <th style={thStyle}>Method</th>
                  <th style={thStyle}>What it supplies</th>
                  <th style={thStyle}>Control</th>
                  <th style={thStyle}>Daily effort</th>
                  <th style={thStyle}>Effect on pH</th>
                  <th style={thStyle}>Best for</th>
                </tr>
              </thead>
              <tbody>
                {methods.map((m) => (
                  <tr key={m.name}>
                    <td style={{ ...tdStyle, color: "var(--text-light)", fontWeight: 700 }}>{m.name}</td>
                    <td style={tdStyle}>{m.supplies}</td>
                    <td style={tdStyle}>{m.control}</td>
                    <td style={tdStyle}>{m.effort}</td>
                    <td style={tdStyle}>{m.ph}</td>
                    <td style={tdStyle}>{m.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={h2Style}>2-Part Dosing in Depth</h2>
          <p>
            2-part is the workhorse of reef dosing. One part supplies alkalinity, the other supplies calcium, and you dose them in separate spots in the tank or sump so they don&apos;t meet at full strength and precipitate.
          </p>
          <p>
            You can buy it as a branded system or mix it yourself. Branded versions come with printed strengths, which makes the math easy. Red Sea Foundation B, for example, is labeled at +0.1 dKH per 1 mL per 100 L, and Brightwell Reef Code B at +2.22 dKH per 1 mL per US gallon. The DIY route uses bulk chemicals:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Baking soda (sodium bicarbonate):</strong> +0.333 dKH per gram per 100 L. Gentle on pH.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Soda ash (sodium carbonate, &quot;baked baking soda&quot;):</strong> +0.528 dKH per gram per 100 L. Stronger, and it raises pH, so dose it slowly. Useful if your pH runs low.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Calcium chloride dihydrate:</strong> +2.73 ppm calcium per gram per 100 L. The anhydrous form is about 30% stronger, so know which one you bought.</li>
          </ul>
          <p>
            The big advantage is <strong style={{ color: "var(--text-light)" }}>independent adjustment</strong>. If alkalinity is falling but calcium is holding, you raise only the alk part. No other method gives you that directly.
          </p>
          <p>
            The chemistry also keeps 2-part simple. Corals consume alkalinity and calcium together in a fairly fixed ratio: <strong style={{ color: "var(--text-light)" }}>1 dKH of alkalinity ≈ 7.14 ppm of calcium</strong> (20 ppm Ca for every 2.8 dKH). Once you know your daily alk drop, you know roughly how much calcium is leaving too, and the two parts usually end up dosed in a steady pairing. In practice you tune them apart only when a test shows one drifting.
          </p>
          <p>
            To put real numbers on it: in a 75-gallon display with a 20-gallon sump (about 81 gallons of actual water once rock and sand are subtracted), if alkalinity falls 0.3 dKH per day on your current dose, you&apos;d add about <strong style={{ color: "var(--text-light)" }}>2.8 g per day</strong> more baking soda. Always use your real water volume, not the tank&apos;s nominal size. Our{" "}
            <Link href="/blog/reef-tank-dosing-calculator" style={linkStyle}>reef tank dosing calculator guide</Link>{" "}
            works through the full example.
          </p>

          <h2 style={h2Style}>All-in-One Dosing in Depth</h2>
          <p>
            An all-in-one product, such as Tropic Marin All-For-Reef, puts alkalinity, calcium, magnesium and trace elements in a single bottle. You dose one liquid once a day (or let a single pump do it), and that is the whole routine.
          </p>
          <p>
            That simplicity is the reason to choose it. One product to buy, one reservoir, one number to adjust. Trace elements come along automatically, so you are not juggling extra bottles.
          </p>
          <p>
            The tradeoff is the <strong style={{ color: "var(--text-light)" }}>fixed ratio</strong>. Every dose adds alkalinity and calcium in the proportion the manufacturer chose. If your tank consumes in roughly that proportion, it works beautifully. If calcium drifts low while alkalinity is fine, you <strong style={{ color: "var(--text-light)" }}>can&apos;t raise calcium without also raising alkalinity</strong>. You end up adding a separate calcium product to fix it, which is 2-part with extra steps.
          </p>
          <p>
            All-in-one suits lighter-demand tanks, nano reefs, and reefers who value a short routine over fine control. As demand grows, many people move to 2-part for flexibility.
          </p>

          <h2 style={h2Style}>Kalkwasser Dosing in Depth</h2>
          <p>
            Kalkwasser is saturated limewater: calcium hydroxide dissolved in fresh RO/DI water. It is usually dosed slowly through the auto top-off (ATO) as a replacement for evaporated water, or dripped in. It supplies both alkalinity and calcium, and because it is strongly alkaline, it tends to <strong style={{ color: "var(--text-light)" }}>support pH</strong>, which is why it shows up in our{" "}
            <Link href="/blog/reef-tank-ph-guide" style={linkStyle}>reef tank pH guide</Link>{" "}
            as a fix for low pH.
          </p>
          <p>
            Its weakness is capacity. Fully saturated kalk is dilute: <strong style={{ color: "var(--text-light)" }}>1 L per 100 L of tank water adds only about 1.1 dKH and 8 ppm calcium</strong> (approximate). In the same 81-gallon system, supplying just 0.5 dKH per day takes about <strong style={{ color: "var(--text-light)" }}>1.4 L of kalkwasser per day</strong>. And you can only add roughly as much as evaporates, or the water level rises. That&apos;s why kalk alone struggles in coral-heavy tanks.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Kalkwasser safety:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={{ color: "var(--text-light)" }}>Dose slowly.</strong> A slow ATO feed or drip spreads it across the day.</li>
              <li><strong style={{ color: "var(--text-light)" }}>Never add it all at once.</strong> Overdosing raises pH sharply and can harm livestock.</li>
              <li><strong style={{ color: "var(--text-light)" }}>Maintenance only.</strong> Kalk is too slow and too pH-heavy to correct a low reading. Use baking soda or calcium chloride for that.</li>
            </ul>
          </div>

          <p>
            Many reefers <strong style={{ color: "var(--text-light)" }}>combine kalk with 2-part</strong>. The kalk covers part of the daily demand and helps pH, and 2-part fills the gap. It&apos;s a common, sensible setup once a tank outgrows kalk on its own.
          </p>

          <h2 style={h2Style}>Calcium Reactors, Briefly</h2>
          <p>
            A calcium reactor dissolves calcium carbonate media with CO2 and feeds the result back into the tank, supplying alkalinity, calcium and some magnesium in roughly the proportions corals use. It is the choice for very heavy demand, where the daily volume of 2-part becomes a chore. It takes more equipment and tuning, and the effluent can pull pH down if it isn&apos;t dialed in. Most tanks never need one.
          </p>

          <h2 style={h2Style}>Don&apos;t Forget Magnesium</h2>
          <p>
            Magnesium doesn&apos;t get dosed in large amounts, but it matters. It helps keep alkalinity and calcium stable in the water. When magnesium runs low, alk and calcium become harder to hold steady, and reefers often chase those two without realizing magnesium is the real issue.
          </p>
          <p>
            Corals use it slowly, so test every week or two. If it drifts down, you have two options. A <strong style={{ color: "var(--text-light)" }}>3-part system</strong> adds a dedicated magnesium part (Red Sea Foundation C is labeled at +1 ppm Mg per 1 mL per 100 L). Or dose a <strong style={{ color: "var(--text-light)" }}>separate magnesium product</strong>. DIY magnesium chloride hexahydrate adds +1.2 ppm Mg per gram per 100 L. Mix it with magnesium sulfate for long-term use rather than using Epsom salt alone, since sulfate builds up over time. Our{" "}
            <Link href="/blog/reef-tank-alkalinity-calcium-magnesium-guide" style={linkStyle}>alkalinity, calcium and magnesium guide</Link>{" "}
            covers targets for each.
          </p>

          <h2 style={h2Style}>By Hand vs Automated</h2>
          <p>
            Dosing by hand works, especially at first. The catch is that one big daily dose lands all at once, and every missed or late dose shows up as a dip on your next test.
          </p>
          <p>
            A dosing pump solves both problems. It <strong style={{ color: "var(--text-light)" }}>splits the daily amount into small doses</strong> spread across the day, so alkalinity rises a little at a time instead of jumping, and it never forgets. Stability is the whole point of dosing, and small frequent doses are the most stable way to deliver it. Whichever method you choose, keep every change modest: no more than 1 dKH of alkalinity, 25 ppm of calcium or 100 ppm of magnesium in a single day.
          </p>

          <h2 style={h2Style}>How NextUpReef Supports Every Method</h2>
          <p>
            Whatever you dose, the hard part is consistency: remembering every dose and knowing whether it&apos;s actually keeping up. That&apos;s what the app is built around.
          </p>
          <p>
            The <strong style={{ color: "var(--text-light)" }}>Dosing screen is free on every account</strong>. It shows one list of everything due today: hand doses, your own dosing pump, and automated doses on a Shelly plug or Apex outlet. Tap <strong style={{ color: "var(--text-light)" }}>Dosed</strong> to log a dose. Products you dose every few days appear on the right day. An <strong style={{ color: "var(--text-light)" }}>alk/Ca/Mg balance</strong> shows whether each is steady, rising or falling across your recent tests, with test noise filtered out, so you can tell whether your dose matches consumption.
          </p>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
            <Image
              src="/screenshots/site-v3/phone-doser.png"
              alt="Automated doser in NextUpReef showing today's daily dose confirmed by the smart plug's power draw"
              width={777}
              height={1557}
              style={{ width: "100%", maxWidth: 300, height: "auto" }}
            />
            <p style={{ fontSize: "13px", color: "var(--text-muted)", textAlign: "center", marginTop: "12px", marginBottom: 0 }}>
              An automated dose in NextUpReef, confirmed by power draw.
            </p>
          </div>

          <p>
            The catalog covers <strong style={{ color: "var(--text-light)" }}>50+ common products</strong> with known strengths prefilled, including Red Sea, Seachem, Brightwell, Tropic Marin, BRS, ESV, Fritz and Aquaforest, plus plain baking soda, soda ash, calcium chloride, magnesium chloride and sulfate, and kalkwasser. For each product you pick how it&apos;s delivered: by hand, your own dosing pump, Shelly or Apex automation, <strong style={{ color: "var(--text-light)" }}>ATO (for kalk)</strong>, or drip.
          </p>
          <p>
            With Pro, you also get:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>A daily dosing reminder:</strong> one push a day at the hour you choose, listing what&apos;s still due. It stays silent if everything is logged.</li>
            <li><strong style={{ color: "var(--text-light)" }}>The dose calculator:</strong> <em>Dial in</em> suggests a new daily dose from your own test trend (it needs at least 3 tests over at least 4 days since your last dose change, and caps any change at 30%). <em>Fix</em> corrects a low reading, split over as many days as needed to stay within the safe daily rise. Kalkwasser is excluded from Fix for the reasons above. See the{" "}
              <Link href="/blog/reef-tank-dosing-calculator" style={linkStyle}>dosing calculator guide</Link>.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Shelly automation:</strong> calibrate your pump once, set a daily mL target, and the schedule is saved to the plug so it runs even with your phone or internet off. Power draw confirms each dose, and you get missed-dose alerts.{" "}
              <Link href="/blog/how-to-setup-dosing-shelly" style={linkStyle}>Set up dosing on Shelly</Link>.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Apex automation:</strong> dose from a regular Apex outlet and pump, with a built-in shutoff on every dosing program so a dose can&apos;t run long. Apex DOS/DDR dosing pumps are not supported.{" "}
              <Link href="/blog/how-to-connect-apex" style={linkStyle}>Connect your Apex</Link>.</li>
          </ul>

          <h2 style={h2Style}>Frequently Asked Questions</h2>

          <h3 style={{ fontSize: "20px", fontWeight: "900", color: "var(--text-light)", marginTop: "28px", marginBottom: "8px" }}>
            Is 2-part or all-in-one dosing better for a reef tank?
          </h3>
          <p>
            2-part gives you more control because alkalinity and calcium come from separate bottles you adjust independently. All-in-one is simpler and usually includes trace elements, but its ratio is fixed, so you can&apos;t raise calcium without also raising alkalinity. Choose 2-part for control and value, all-in-one for simplicity.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: "900", color: "var(--text-light)", marginTop: "28px", marginBottom: "8px" }}>
            Can kalkwasser replace 2-part dosing?
          </h3>
          <p>
            Only in tanks with modest demand. 1 L of saturated kalk per 100 L adds only about 1.1 dKH and 8 ppm calcium, and supplying 0.5 dKH per day in an 81-gallon system takes about 1.4 L per day, limited by evaporation. Many reefers run kalk through the ATO and use 2-part to cover the rest.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: "900", color: "var(--text-light)", marginTop: "28px", marginBottom: "8px" }}>
            How do I know if my reef tank needs dosing?
          </h3>
          <p>
            Test alkalinity every day for about a week at the same time of day. If it drops steadily between water changes, corals are using alk and calcium faster than water changes replace them. The daily drop tells you how much to add back.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: "900", color: "var(--text-light)", marginTop: "28px", marginBottom: "8px" }}>
            Is kalkwasser dosing safe?
          </h3>
          <p>
            Yes, when added slowly through the ATO or a drip. Never pour a large amount in at once: kalk raises pH sharply, and an overdose can push pH dangerously high. It&apos;s for daily maintenance, not for correcting a low reading.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: "900", color: "var(--text-light)", marginTop: "28px", marginBottom: "8px" }}>
            Do I need to dose magnesium too?
          </h3>
          <p>
            Often, yes. Magnesium helps keep alkalinity and calcium stable, and corals use it slowly. Test it every week or two, and if it drifts low, add a 3-part system or a separate magnesium product.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Keep every dose on track with NextUpReef — free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              See everything due today, log doses in one tap, and watch your alk, calcium and magnesium balance. iOS and Android.
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
