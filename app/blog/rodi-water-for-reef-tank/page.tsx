import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RODI Water for a Reef Tank: Do You Really Need It?",
  description:
    "Do you need RODI water for a reef tank? With corals, almost always yes. What tap water adds, what TDS means, and how to keep a RODI unit working.",
  alternates: {
    canonical: "https://nextupreef.com/blog/rodi-water-for-reef-tank",
  },
  openGraph: {
    title: "RODI Water for a Reef Tank: Do You Really Need It?",
    description:
      "What is in tap water, what RO and DI each remove, why the TDS target is 0, and how tap, distilled, store water and a home RODI unit compare.",
    url: "https://nextupreef.com/blog/rodi-water-for-reef-tank",
    images: [{ url: "/brand/og-image-v2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "RODI Water for a Reef Tank: Do You Really Need It?",
  description:
    "Whether a reef tank needs RODI water, what tap water adds to a tank, what RO and DI remove, how to read a TDS meter, and when to change filters.",
  image: "https://nextupreef.com/brand/og-image-v2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo-v2.png" },
  },
  datePublished: "2026-11-24",
  dateModified: "2026-11-24",
  mainEntityOfPage: "https://nextupreef.com/blog/rodi-water-for-reef-tank",
};

const faqs = [
  {
    q: "Do I need RODI water for a reef tank?",
    a: "If the tank has corals, yes in almost every case. Tap water can carry phosphate, nitrate, silicate, copper and chlorine or chloramine, and what it carries builds up in the tank over time. Fish-only tanks are more forgiving.",
  },
  {
    q: "Can I use tap water in a saltwater tank?",
    a: "In a fish-only tank, many people use dechlorinated tap water and do fine, depending on their local water. In a reef tank with corals and invertebrates it is a gamble. A dechlorinator does nothing about phosphate, nitrate, silicate or copper.",
  },
  {
    q: "What should TDS be for a reef tank?",
    a: "The water coming out of the DI stage should read 0 TDS. If the meter shows 1 or higher, the DI resin is wearing out and should be replaced. TDS applies to fresh RODI water only, not to saltwater.",
  },
  {
    q: "Is distilled water okay for a reef tank?",
    a: "Yes. Store-bought distilled water is generally very pure and works for mixing salt and for top-off. Check a jug with a TDS meter now and then. The drawbacks are cost and carrying jugs on anything larger than a small tank.",
  },
  {
    q: "Should I top off my reef tank with RODI water or saltwater?",
    a: "Top off with fresh RODI water, never saltwater. Only water evaporates and the salt stays behind, so replacing evaporation with saltwater raises salinity a little every day.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
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
const strong: CSSProperties = { color: "var(--text-light)" };
const link: CSSProperties = { color: "var(--reef)", fontWeight: 700 };

const sources = [
  {
    source: "Tap water with a dechlorinator",
    cost: "Lowest",
    effort: "Lowest",
    risk: "Highest. Whatever is in your tap ends up in the tank, and it can change with the season.",
  },
  {
    source: "Store-bought distilled",
    cost: "Low for a small tank, adds up fast on a large one",
    effort: "Carrying and storing jugs",
    risk: "Low. Generally very pure. Spot-check a jug with a TDS meter.",
  },
  {
    source: "Store RODI or pre-mixed saltwater",
    cost: "Moderate, and it never stops",
    effort: "Regular trips with heavy containers",
    risk: "Depends on how well the store maintains its filters. Test TDS, and salinity on pre-mixed water.",
  },
  {
    source: "Home RODI unit",
    cost: "Highest up front, lowest per gallon over time",
    effort: "Simple install, then filter changes",
    risk: "Low, as long as you check TDS and replace filters when they wear out.",
  },
];

export default function RodiWaterForReefTankPost() {
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
          RODI Water for a Reef Tank
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["RODI Water", "TDS", "Water Quality"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          RODI Water for a Reef Tank: Do You Really Need It?
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          November 24, 2026 · 7 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            If your tank has corals, <strong style={strong}>yes, you need RODI water in almost every case.</strong> Fish-only tanks are more forgiving, and plenty of them run on treated tap water. Corals and invertebrates react to things in tap water that fish shrug off.
          </p>
          <p>
            Water evaporates, but what is dissolved in it does not. Every gallon of tap water you add leaves its phosphate, silicate and metals behind in the tank. RODI water is as close to pure as you can make at home, so the only things in your tank are the ones you chose to add.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Quick Answer:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={strong}>Reef with corals:</strong> use RODI water, or distilled if the tank is small</li>
              <li><strong style={strong}>Fish-only:</strong> dechlorinated tap water often works, but RODI still helps with algae</li>
              <li><strong style={strong}>TDS target:</strong> 0 after the DI stage</li>
              <li><strong style={strong}>Use it for:</strong> mixing salt and topping off evaporation</li>
              <li><strong style={strong}>Top-off:</strong> always fresh RODI water, never saltwater</li>
            </ul>
          </div>

          <h2 style={h2Style}>What Is in Tap Water That Causes Trouble</h2>
          <p>
            Tap water is treated to be safe for people to drink, which is a different standard from safe for a reef. It can carry all of the following, and the amounts vary by city, by well and by season.
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>Phosphate.</strong> Some water suppliers add phosphate compounds to protect pipes. In a reef, extra phosphate feeds nuisance algae, and high levels can slow the growth of stony corals.</li>
            <li><strong style={strong}>Nitrate.</strong> Drinking water can contain more nitrate than a reef target allows. You end up adding the thing your water changes are meant to remove. See the{" "}
              <Link href="/blog/reef-tank-nitrate-phosphate-guide" style={link}>nitrate and phosphate guide</Link> for target ranges.</li>
            <li><strong style={strong}>Silicate.</strong> Silicate feeds diatoms, the brown dusty film that coats sand and glass. A new tank gets some of this anyway, but tap water keeps supplying the fuel.</li>
            <li><strong style={strong}>Copper.</strong> Copper can come from household plumbing. Corals, shrimp, snails and other invertebrates are sensitive to it at very low levels, and it can bind to rock and sand.</li>
            <li><strong style={strong}>Chlorine and chloramine.</strong> These disinfectants are added on purpose to kill microorganisms. They are harmful to fish and to the bacteria your tank relies on.</li>
          </ul>
          <p>
            A dechlorinator deals with the last item only. It does nothing about phosphate, nitrate, silicate or copper.
          </p>
          <p>
            Tap water rarely kills a tank overnight. The usual pattern is slower: algae that never quite goes away and nutrients that will not come down. If you are fighting persistent algae or cyano, rule out your source water first. Our guide to{" "}
            <Link href="/blog/cyanobacteria-dinoflagellates-algae-reef-pests" style={link}>cyanobacteria, dinoflagellates and algae</Link> covers the rest.
          </p>

          <h2 style={h2Style}>What RO and DI Each Remove</h2>
          <p>
            RODI stands for reverse osmosis and deionization. A typical home unit pushes tap water through four kinds of stage, in this order:
          </p>
          <ol style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={strong}>Sediment filter.</strong> Catches rust, sand and other particles so they do not clog the stages after it.</li>
            <li><strong style={strong}>Carbon block.</strong> Removes chlorine and many organic compounds. This protects the membrane, which chlorine damages.</li>
            <li><strong style={strong}>RO membrane.</strong> Does most of the work. Water is forced through a very fine membrane that rejects the large majority of dissolved solids. The rejected portion goes down the drain as waste water.</li>
            <li><strong style={strong}>DI resin.</strong> Polishes what the membrane lets through. The resin grabs the remaining charged ions and brings the water down to 0 TDS.</li>
          </ol>
          <p>
            Both are used because each covers the other&apos;s weakness. RO alone leaves a small amount behind, which can still include phosphate, nitrate and silicate. DI alone could produce pure water, but tap water would exhaust the resin very quickly. With RO first, the resin only has to clean up the remainder, so it lasts far longer.
          </p>

          <h2 style={h2Style}>TDS: What the Meter Tells You</h2>
          <p>
            TDS means total dissolved solids. A TDS meter estimates it from how well the water conducts electricity and reports a number in parts per million. The purer the water, the lower the reading.
          </p>
          <p>
            <strong style={strong}>The target for reef use is 0 TDS after the DI stage.</strong> A reading of 1 or 2 is your signal that the resin is running out, not a level to live with.
          </p>
          <p>
            The meter has limits. It tells you how much is dissolved, not what it is, and it does not confirm that chlorine or chloramine are gone. It is also for fresh water only. Mixed saltwater and tank water are measured by salinity, which is covered in the{" "}
            <Link href="/blog/reef-tank-salinity-guide" style={link}>reef tank salinity guide</Link>.
          </p>
          <p>
            If you can, measure three points: the tap water going in, the water after the membrane, and the water after the DI. Together they show which part of the unit is wearing out.
          </p>

          <h2 style={h2Style}>Tap, Distilled, Store Water or a Home RODI Unit</h2>
          <p>
            There are four realistic ways to get water for a saltwater tank. Costs vary by region, so the table compares them in relative terms.
          </p>
          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Source</th>
                  <th style={th}>Cost</th>
                  <th style={th}>Effort</th>
                  <th style={th}>Risk</th>
                </tr>
              </thead>
              <tbody>
                {sources.map((row) => (
                  <tr key={row.source}>
                    <td style={td}>{row.source}</td>
                    <td style={td}>{row.cost}</td>
                    <td style={td}>{row.effort}</td>
                    <td style={td}>{row.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            For a small tank, distilled jugs or store water are reasonable. As the tank gets larger, a home unit usually becomes the practical choice. If you are still planning the build, decide on your water source early. The{" "}
            <Link href="/blog/tank-setup" style={link}>tank setup guide</Link> walks through the rest.
          </p>

          <h2 style={h2Style}>When to Change Filters, the Membrane and DI Resin</h2>
          <p>
            Each stage wears out at a different rate, depending on your tap water and how much water you make. Go by the signals and the maker&apos;s recommended schedule, not a fixed number of gallons.
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>Sediment filter.</strong> Change it when it is visibly discolored or when the unit&apos;s output slows down.</li>
            <li><strong style={strong}>Carbon block.</strong> A TDS meter will not tell you when carbon is spent, so replace it on the maker&apos;s schedule, usually at the same time as the sediment filter. A chlorine test on the water leaving the carbon stage is a useful check.</li>
            <li><strong style={strong}>RO membrane.</strong> A membrane normally lasts years if the filters before it are kept fresh. The signal is rising TDS after the membrane compared with what it used to read on the same tap water. The DI resin will also run out faster than before.</li>
            <li><strong style={strong}>DI resin.</strong> Change it as soon as the water after the DI reads above 0. Color-changing resin gives a rough visual hint, but the meter is the one to trust.</li>
          </ul>

          <h2 style={h2Style}>Chloramine Needs the Right Carbon</h2>
          <p>
            Many water suppliers now disinfect with chloramine, which is chlorine bonded to ammonia. It is more stable than chlorine, which also makes it harder to remove. Your supplier&apos;s water quality report will say which one they use.
          </p>
          <p>
            Standard carbon handles chlorine well but can struggle to keep up with chloramine. When carbon does break chloramine apart, the ammonia is released and passes on to the membrane and the DI resin, which wears the resin out faster.
          </p>
          <p>
            If your water has chloramine, use a unit or carbon stages rated for it. These typically use catalytic carbon, often in more than one stage.
          </p>

          <h2 style={h2Style}>Use RODI for Top-Off, Not Only for Mixing Salt</h2>
          <p>
            It is easy to mix saltwater with RODI and then refill evaporation from the tap. That undoes much of the benefit. Top-off water goes in every day, and nothing it carries ever evaporates back out.
          </p>
          <p>
            Use RODI for both jobs. Mix your salt with it for water changes, as covered in the{" "}
            <Link href="/blog/reef-tank-water-change-guide" style={link}>reef tank water change guide</Link>, and keep a container of fresh RODI for top-off, whether you pour it by hand or feed an auto top-off.
          </p>

          <h2 style={h2Style}>Common Mistakes</h2>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={strong}>Storing water in the wrong container.</strong> Use clean, food-grade plastic containers with lids, kept only for aquarium water. Never use a bucket that has held soap, cleaners or garden chemicals, and avoid metal containers.</li>
            <li><strong style={strong}>Forgetting to check TDS.</strong> A RODI unit keeps producing water long after the resin is exhausted. Check the reading every time you make water.</li>
            <li><strong style={strong}>Topping off with saltwater.</strong> Only water evaporates. The salt stays, so topping off with saltwater pushes salinity up a little every day.</li>
            <li><strong style={strong}>Expecting RODI to prevent all algae.</strong> A new tank goes through{" "}
              <Link href="/blog/the-ugly-phase" style={link}>the ugly phase</Link> even with perfect water. RODI does not stop that. It stops you from feeding it.</li>
          </ul>

          <h2 style={h2Style}>How to Tell if Your Source Water Is the Problem</h2>
          <p>
            If nitrate and phosphate keep climbing even though you feed lightly and change water on schedule, test the water you are adding. A phosphate test on your source water answers the question quickly.
          </p>
          <p>
            This is where logging helps. NextUpReef charts your nitrate and phosphate over time, with your target band drawn in, so you can see whether a change in source water moved the numbers. It also sends water change reminders. For the full list of targets by tank type, see the{" "}
            <Link href="/blog/reef-tank-parameters-chart" style={link}>reef tank parameters chart</Link>.
          </p>

          <div style={{ textAlign: "center", margin: "40px 0" }}>
            <Image
              src="/screenshots/site-v3/phone-reminders.png"
              alt="NextUpReef Reminders screen showing a 20% every-2-weeks water change reminder alongside filter sock and feeding reminders, each with Done and +1 Day buttons"
              width={777}
              height={1557}
              style={{ width: "100%", maxWidth: 300, height: "auto" }}
            />
            <p style={{ fontSize: "13px", color: "var(--text-muted)", textAlign: "center", marginTop: "12px" }}>
              Maintenance reminders in NextUpReef: a 20% water change every two weeks, filter socks and more.
            </p>
          </div>

          <h2 style={h2Style}>Frequently Asked Questions</h2>

          {faqs.map((faq) => (
            <div key={faq.q}>
              <p><strong style={strong}>{faq.q}</strong></p>
              <p>{faq.a}</p>
            </div>
          ))}

          <h2 style={h2Style}>Final Thought</h2>
          <p>
            RODI water gives you a known starting point, so that everything in your tank is something you put there. Check that it reads 0, use it for both mixing and top-off, and replace each stage when it wears out.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Track nitrate and phosphate with NextUpReef, free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Log every test against your tank&apos;s targets, watch the trend with your target band drawn in, and get water change reminders. iOS and Android, with a 30-day Pro trial and no credit card.
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
