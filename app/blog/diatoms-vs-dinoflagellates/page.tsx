import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diatoms vs Dinoflagellates: How to Tell Them Apart",
  description:
    "Diatoms or dinos? How to tell diatoms, dinoflagellates and cyano apart in a reef tank, with a comparison table, home checks and what to do about each.",
  alternates: {
    canonical: "https://nextupreef.com/blog/diatoms-vs-dinoflagellates",
  },
  openGraph: {
    title: "Diatoms vs Dinoflagellates: How to Tell Them Apart",
    description:
      "A side by side guide to brown algae on reef tank sand: diatoms, dinoflagellates and cyanobacteria, the home checks that separate them, and what to do next.",
    url: "https://nextupreef.com/blog/diatoms-vs-dinoflagellates",
    images: [{ url: "/brand/og-image-v2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Diatoms vs Dinoflagellates: How to Tell Them Apart",
  description:
    "How to identify diatoms, dinoflagellates and cyanobacteria in a reef tank by colour, texture, bubbles and day and night behaviour, and what to do about each.",
  image: "https://nextupreef.com/brand/og-image-v2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo-v2.png" },
  },
  datePublished: "2026-11-25",
  dateModified: "2026-11-25",
  mainEntityOfPage: "https://nextupreef.com/blog/diatoms-vs-dinoflagellates",
};

const faqs = [
  {
    q: "How do I know if I have diatoms or dinoflagellates?",
    a: "Diatoms are a dry looking, dusty brown film that wipes off easily and usually shows up in a new tank. Dinoflagellates are slimy or stringy, trap air bubbles, and often shrink overnight and return under the lights. Home checks only point you in a direction. A microscope is the only way to be sure.",
  },
  {
    q: "What is the brown stringy algae with bubbles in my reef tank?",
    a: "Brown, snotty strings holding air bubbles are a common sign of dinoflagellates, especially if nitrate and phosphate both read at or near zero. Cyanobacteria can also trap bubbles, but it usually forms red, purple or dark green sheets that peel away in one piece.",
  },
  {
    q: "Do diatoms go away on their own?",
    a: "In a new tank, usually yes. Diatoms feed on silicate, and the bloom typically fades within a few weeks as that supply runs down. Using RODI water keeps you from adding more silicate, and a few snails help once the cycle is finished.",
  },
  {
    q: "Can diatoms turn into dinoflagellates?",
    a: "No. They are different organisms. What happens in practice is that one is mistaken for the other, or a tank that had diatoms early on later gets dinoflagellates after its nutrients bottom out.",
  },
  {
    q: "Will snails eat dinoflagellates?",
    a: "Do not count on it. Most clean up crew animals will not clear dinoflagellates, and some types can harm snails that graze on them. Hold off on adding snails until the outbreak is under control.",
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

const comparison = [
  {
    feature: "Colour",
    diatoms: "Light to rusty brown",
    dinos: "Brown, tan or golden brown",
    cyano: "Red, purple, dark green or near black",
  },
  {
    feature: "Texture",
    diatoms: "Thin, dusty film, like a sprinkle of cocoa powder",
    dinos: "Snotty, slimy, often with strings that wave in the flow",
    cyano: "Smooth, slimy mat or sheet",
  },
  {
    feature: "Bubbles",
    diatoms: "Few or none",
    dinos: "Common. Bubbles held in the slime and at the tips of strings",
    cyano: "Sometimes, usually under or within the mat",
  },
  {
    feature: "Where it grows",
    diatoms: "Sand, glass and rock, fairly evenly",
    dinos: "Sand and rock, and it can drape over corals and snail shells",
    cyano: "Sand and rock, often starting in low flow spots",
  },
  {
    feature: "Day and night",
    diatoms: "Looks much the same, a little heavier late in the day",
    dinos: "Often shrinks or vanishes overnight and returns under the lights. Some types stay put",
    cyano: "Can thin out overnight, but the mat usually remains",
  },
  {
    feature: "Tank age and nutrients",
    diatoms: "New tanks in the weeks after the cycle. Fed by silicate",
    dinos: "Any age. Often follows nitrate and phosphate reading at or near zero",
    cyano: "Any age. Often linked to detritus, low flow and nutrients out of balance",
  },
  {
    feature: "How it wipes off",
    diatoms: "Easily. Brushes away as a puff of dust",
    dinos: "Lifts off as slimy clumps and strings, back within a day or two",
    cyano: "Peels or siphons off in a sheet",
  },
];

export default function DiatomsVsDinoflagellatesPost() {
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
          Diatoms vs Dinoflagellates
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Diatoms", "Dinoflagellates", "Identification"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Diatoms vs Dinoflagellates: How to Tell Them Apart
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          November 25, 2026 · 8 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            Brown stuff on the sand is one of the most common worries in reef keeping, and the question is nearly always the same: is this diatoms or dinoflagellates? It matters, because <strong style={strong}>the right response to one is close to the opposite of the right response to the other.</strong>
          </p>
          <p>
            Diatoms are a harmless stage that a new tank grows out of. Dinoflagellates, usually shortened to dinos, are a real problem that tends to get worse when you clean harder. Cyanobacteria gets mixed up with both, so it is included here too.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Quick Answer:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={strong}>Diatoms:</strong> a dusty brown film in a new tank. Wipes away easily and fades on its own within weeks</li>
              <li><strong style={strong}>Dinoflagellates:</strong> brown, snotty or stringy, with trapped air bubbles. Often shrinks overnight and returns under the lights, and tends to appear when nitrate and phosphate have bottomed out</li>
              <li><strong style={strong}>Cyanobacteria:</strong> red, purple or dark green slimy sheets that peel off</li>
              <li><strong style={strong}>To be sure:</strong> look at a sample under a microscope</li>
            </ul>
          </div>

          <h2 style={h2Style}>Side by Side: Diatoms, Dinoflagellates and Cyano</h2>
          <p>
            No single row settles it. Look for the column where most of the rows match what you see in your tank.
          </p>
          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Feature</th>
                  <th style={th}>Diatoms</th>
                  <th style={th}>Dinoflagellates</th>
                  <th style={th}>Cyanobacteria</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature}>
                    <td style={td}><strong style={strong}>{row.feature}</strong></td>
                    <td style={td}>{row.diatoms}</td>
                    <td style={td}>{row.dinos}</td>
                    <td style={td}>{row.cyano}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Tank age is the strongest single clue. Brown dust in the first weeks after{" "}
            <Link href="/blog/cycling-your-tank" style={link}>the cycle</Link> is diatoms far more often than anything else, and it is part of{" "}
            <Link href="/blog/the-ugly-phase" style={link}>the ugly phase</Link> every new tank goes through. Brown slime in an established tank, or in a young tank where nitrate and phosphate both read zero, deserves a closer look.
          </p>

          <h2 style={h2Style}>Three Checks You Can Do at Home</h2>
          <p>
            These checks are indications, not proof. Each one can mislead you on its own, so use them together.
          </p>
          <ol style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={strong}>Compare morning and evening.</strong> Look at the sand just before the lights come on, then again late in the photoperiod. A film that has largely gone by morning and is back by afternoon points toward dinoflagellates. Be careful with the reverse: some types of dinoflagellate stay in the sand around the clock, so no change overnight does not rule them out.</li>
            <li><strong style={strong}>Look for strings and bubbles.</strong> Slimy strands that rise from the rock or sand with an air bubble at the tip are a classic dinoflagellate sign. Diatoms lie flat and dusty. Cyano can hold bubbles too, but it sits as a coloured sheet, not brown strings.</li>
            <li><strong style={strong}>Try the settle test.</strong> Suck up a sample with a turkey baster, put it in a small clear container of tank water and shake it hard until it breaks apart. Pour it through a paper filter, such as a coffee filter or paper towel, into a clean container and leave that under a light. If brown strings or clumps form again within an hour or so, that suggests dinoflagellates, which can move and regroup. Diatoms and loose detritus tend to stay scattered or simply sink. Wash your hands afterward and do not put tank water near your mouth.</li>
          </ol>

          <h2 style={h2Style}>A Microscope Is the Only Way to Be Sure</h2>
          <p>
            A basic, inexpensive microscope is enough to see the difference. Diatoms look like tiny glassy shapes that mostly sit still or glide slowly. Dinoflagellates are single cells that visibly swim, often spinning or darting. Cyanobacteria shows up as fine threads.
          </p>
          <p>
            A microscope also shows which type of dinoflagellate you have, and that changes the plan. Several different groups turn up in reef tanks. Some leave the sand and rock for the water column at night, where filtration can reach them. Others stay in the sand bed and are not much affected by anything that treats the water. Hobbyist groups that focus on dinoflagellates will often help identify a photo or short video taken through the eyepiece.
          </p>

          <h2 style={h2Style}>What to Do About Diatoms</h2>
          <p>
            Mostly, wait. Diatoms feed on silicate from new sand, new rock and source water. When that supply runs down the bloom fades, usually within a few weeks.
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>Use RODI water</strong> for mixing salt and for top-off, so you are not adding more silicate. See{" "}
              <Link href="/blog/rodi-water-for-reef-tank" style={link}>RODI water for a reef tank</Link>.</li>
            <li><strong style={strong}>Add a few grazers</strong> once the cycle is complete. Snails that work the sand and glass will eat diatoms.</li>
            <li><strong style={strong}>Wipe the glass</strong> if it bothers you, and keep up normal maintenance.</li>
            <li><strong style={strong}>Do not chase it.</strong> Blackouts, additives and stripping nutrients are not needed for a bloom that ends by itself, and stripping nutrients can set up the dinoflagellate problem described next.</li>
          </ul>
          <p>
            If diatoms return again and again in an older tank, test your source water and check that your RODI unit still reads 0 TDS.
          </p>

          <h2 style={h2Style}>What to Do About Dinoflagellates</h2>
          <p>
            There is no single agreed cure, and approaches vary by type, which is why identification comes first. The steps below are the general ones most experienced hobbyists agree on.
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>Stop driving nutrients to zero.</strong> Let nitrate and phosphate come back to detectable levels and hold them there. That usually means feeding a little more and easing off export such as phosphate media. The{" "}
              <Link href="/blog/reef-tank-nitrate-phosphate-guide" style={link}>nitrate and phosphate guide</Link> has target ranges. If you use a supplement, follow the product label.</li>
            <li><strong style={strong}>Hold off on large water changes.</strong> Common practice is to avoid big changes during an outbreak, since many hobbyists find they are followed by a fresh bloom. This is hobby experience, not settled science. The{" "}
              <Link href="/blog/reef-tank-water-change-guide" style={link}>water change guide</Link> covers a normal routine for afterward.</li>
            <li><strong style={strong}>Remove it by hand.</strong> Siphon the slime out through a fine filter sock or filter floss, return the water to the tank, and clean or replace the sock straight away.</li>
            <li><strong style={strong}>Consider UV for types that enter the water column.</strong> A UV sterilizer can reduce the ones that drift at night and does much less for types that stay in the sand. See the{" "}
              <Link href="/blog/uv-sterilizer-reef-tank" style={link}>UV sterilizer guide</Link>.</li>
            <li><strong style={strong}>Rebuild competition.</strong> Dinoflagellates do best on bare, sterile surfaces. A varied population of bacteria, other algae and small organisms competes with them, which is one reason tanks started with dry rock seem more prone.</li>
          </ul>
          <p>
            Expect this to take weeks to months. Chemical treatments are discussed online, but they carry real risk to corals and invertebrates and depend on the type, so they are outside the scope of this guide.
          </p>

          <h2 style={h2Style}>What to Do About Cyanobacteria</h2>
          <p>
            Siphon the mats out, increase flow where they form and clean up trapped detritus. Our{" "}
            <Link href="/blog/cyanobacteria-dinoflagellates-algae-reef-pests" style={link}>guide to cyanobacteria, dinoflagellates and algae</Link> covers the full plan.
          </p>

          <h2 style={h2Style}>Mistakes That Make Each One Worse</h2>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={strong}>Diatoms:</strong> topping off with tap water, which keeps supplying silicate. Reacting with blackouts or heavy nutrient removal. Tearing the tank down over a stage that was about to end.</li>
            <li><strong style={strong}>Dinoflagellates:</strong> treating them like ordinary algae by feeding less, adding phosphate media and doing large water changes, all of which lower nutrients further. Adding snails to eat them. Treating before identifying the type.</li>
            <li><strong style={strong}>Cyanobacteria:</strong> stirring it into the water instead of siphoning it out. Reaching for a chemical fix while the low flow and detritus that caused it stay in place.</li>
          </ul>

          <h2 style={h2Style}>When Is It Safe to Add a Clean Up Crew?</h2>
          <p>
            With diatoms, add a small crew once ammonia and nitrite both read zero and there is a visible film for them to eat. Diatoms are good food for snails.
          </p>
          <p>
            With suspected dinoflagellates, wait. Some types produce toxins, and snails that graze on them can become sluggish or die. Hold off on new snails until the outbreak has cleared and stayed away for a few weeks, and watch the ones you already have. The{" "}
            <Link href="/blog/reef-tank-clean-up-crew" style={link}>clean up crew guide</Link> covers which animals to choose and how many.
          </p>

          <h2 style={h2Style}>Check What Your Nutrients Did First</h2>
          <p>
            The history of your test results is one of the better clues. If the brown slime appeared a week or two after nitrate and phosphate both dropped to zero, dinoflagellates become more likely. If nutrients were present and steady and the tank is a few weeks old, diatoms are the better bet.
          </p>
          <p>
            NextUpReef charts nitrate and phosphate over time against your target range, which helps you see whether nutrients bottomed out before an outbreak. It is free on iOS and Android.
          </p>

          <h2 style={h2Style}>Frequently Asked Questions</h2>

          {faqs.map((faq) => (
            <div key={faq.q}>
              <p><strong style={strong}>{faq.q}</strong></p>
              <p>{faq.a}</p>
            </div>
          ))}

          <h2 style={h2Style}>Final Thought</h2>
          <p>
            Identify first, then act. A dusty brown film in a new tank needs patience and clean water. Brown slime with bubbles that comes and goes with the lights needs a closer look, ideally through a microscope, before you change anything.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Track nitrate and phosphate with NextUpReef, free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Chart nitrate and phosphate over time against your target range, so you can see whether nutrients bottomed out before an outbreak. iOS and Android, with a 30-day Pro trial and no credit card.
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
