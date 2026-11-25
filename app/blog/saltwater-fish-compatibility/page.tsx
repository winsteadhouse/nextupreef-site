import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import YouTubeVideo from "@/components/YouTubeVideo";

export const metadata: Metadata = {
  title: "Saltwater Fish Compatibility: What Can Live Together",
  description:
    "A saltwater fish compatibility chart for 17 common groups: temperament, tank size, reef safe or not, and the rules for which fish can live together.",
  alternates: {
    canonical: "https://nextupreef.com/blog/saltwater-fish-compatibility",
  },
  openGraph: {
    title: "Saltwater Fish Compatibility: What Can Live Together",
    description:
      "Which saltwater fish can live together, which are reef safe, and the conflict rules that matter more than any yes or no chart.",
    url: "https://nextupreef.com/blog/saltwater-fish-compatibility",
    images: [{ url: "/brand/og-image-v2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Saltwater Fish Compatibility: What Can Live Together",
  description:
    "Which saltwater fish can live together and which are reef safe, with a chart of common fish groups, the usual conflict rules, order of introduction and what to do about bullying.",
  image: "https://nextupreef.com/brand/og-image-v2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo-v2.png" },
  },
  datePublished: "2026-11-25",
  dateModified: "2026-11-25",
  mainEntityOfPage: "https://nextupreef.com/blog/saltwater-fish-compatibility",
};

const faqs = [
  {
    q: "What saltwater fish can live together?",
    a: "Peaceful community fish usually mix well: a pair of clownfish, small gobies and blennies, firefish, cardinalfish, a royal gramma and reef safe fairy or flasher wrasses. Avoid doubling up on the same species or body shape, and match every fish to your tank size. Individual fish vary, so watch each new addition.",
  },
  {
    q: "What does reef safe mean?",
    a: "A reef safe fish generally leaves corals, clams and ornamental invertebrates alone. \"With caution\" means many individuals behave but some nip corals or eat shrimp, snails or crabs. Reef safe says nothing about how the fish treats other fish.",
  },
  {
    q: "Can I keep two clownfish together?",
    a: "Yes, two clownfish of the same species usually form a pair, especially if they are added together and one is clearly smaller. Mixing different clownfish species, or keeping more than two in a typical home tank, often leads to fighting.",
  },
  {
    q: "Can you keep more than one tang in a tank?",
    a: "With caution. Tangs often fight other tangs, most of all those with a similar body shape. Keepers who succeed tend to use a large tank, pick tangs of different shapes, and add them at the same time or add the most aggressive one last.",
  },
  {
    q: "Which fish should I add to a saltwater tank last?",
    a: "Add the most aggressive and territorial fish last. Dottybacks, most damselfish, tangs, larger wrasses and dwarf angelfish settle in better, and bully less, when the peaceful fish already hold their own spots.",
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

const groups = [
  {
    group: "Clownfish",
    temperament: "Semi-aggressive, territorial near their home",
    tank: "20 to 30 gallons for the common small species, more for larger ones",
    reef: "Yes",
    notes: "Keep one or a pair of the same species. Larger species such as maroons can be much more aggressive.",
  },
  {
    group: "Gobies and blennies",
    temperament: "Mostly peaceful",
    tank: "10 to 30 gallons",
    reef: "Yes, mostly",
    notes: "Two with the same shape or the same burrow may fight. Some blennies occasionally nip corals or clam mantles.",
  },
  {
    group: "Firefish and dartfish",
    temperament: "Peaceful and timid",
    tank: "20 to 30 gallons",
    reef: "Yes",
    notes: "Easily bullied and known jumpers. Use a lid. Firefish often fight each other unless they are a pair.",
  },
  {
    group: "Cardinalfish",
    temperament: "Peaceful",
    tank: "20 to 30 gallons",
    reef: "Yes",
    notes: "Slow, calm feeders. Groups can squabble among themselves in smaller tanks.",
  },
  {
    group: "Chromis and damselfish",
    temperament: "Chromis: fairly peaceful. Many damsels: aggressive",
    tank: "30 to 55 gallons",
    reef: "Yes",
    notes: "Hardy, but many damsels claim the whole tank as they mature. Chromis groups often thin out over time.",
  },
  {
    group: "Royal gramma and basslets",
    temperament: "Peaceful to semi-aggressive",
    tank: "30 gallons or so",
    reef: "Yes",
    notes: "Defends a cave. Avoid pairing with fish of similar shape and color, such as some dottybacks.",
  },
  {
    group: "Dottybacks",
    temperament: "Semi-aggressive to aggressive",
    tank: "30 gallons or so",
    reef: "With caution",
    notes: "Safe with corals. Can bully timid fish and may eat small ornamental shrimp. Captive-bred fish of the milder species tend to be easier.",
  },
  {
    group: "Fairy and flasher wrasses",
    temperament: "Peaceful",
    tank: "30 to 75 gallons",
    reef: "Yes",
    notes: "Active swimmers and jumpers. Use a lid. Males of the same or similar species may fight.",
  },
  {
    group: "Larger wrasses",
    temperament: "Semi-aggressive",
    tank: "75 to 125 gallons or more",
    reef: "With caution",
    notes: "Usually leave corals alone, but many eat snails, crabs and shrimp. Some move rocks and frags around.",
  },
  {
    group: "Dwarf angelfish",
    temperament: "Semi-aggressive",
    tank: "55 to 70 gallons",
    reef: "With caution",
    notes: "Many behave for years. Some individuals nip fleshy stony corals, zoanthids or clam mantles. One per tank is the usual advice.",
  },
  {
    group: "Large angelfish",
    temperament: "Semi-aggressive to aggressive",
    tank: "125 to 250 gallons or more",
    reef: "With caution to no",
    notes: "Most graze on corals, sponges and clams to some degree. A few plankton-feeding species are the common exception.",
  },
  {
    group: "Tangs",
    temperament: "Semi-aggressive, worse toward other tangs",
    tank: "75 to 180 gallons or more, depending on species",
    reef: "Yes",
    notes: "Need swimming length and plenty of algae in the diet. Prone to ich. Similar body shapes fight hardest.",
  },
  {
    group: "Butterflyfish",
    temperament: "Peaceful",
    tank: "75 to 125 gallons or more",
    reef: "No for most",
    notes: "Many eat coral polyps, anemones or feather dusters. A few species are kept in reefs with caution. Some are hard to feed.",
  },
  {
    group: "Hawkfish",
    temperament: "Semi-aggressive, perching predator",
    tank: "30 to 55 gallons",
    reef: "With caution",
    notes: "Safe with corals, though they perch on them. Small shrimp and very small fish are at risk.",
  },
  {
    group: "Triggerfish",
    temperament: "Aggressive, with a few milder species",
    tank: "75 to 180 gallons or more",
    reef: "No for most",
    notes: "Most eat shrimp, crabs, snails and urchins and may bite corals and equipment. A few plankton-feeding species are kept in reefs with caution.",
  },
  {
    group: "Lionfish",
    temperament: "Predatory, but not a bully",
    tank: "30 to 120 gallons or more, dwarf to full-size species",
    reef: "With caution",
    notes: "Leave corals alone. Will eat any fish or shrimp that fits in the mouth. Venomous spines, so take care with your hands.",
  },
  {
    group: "Pufferfish",
    temperament: "Semi-aggressive",
    tank: "30 to 125 gallons or more, small to large species",
    reef: "No for most",
    notes: "Crunch snails, crabs and shrimp, and many nip corals and fins.",
  },
  {
    group: "Mandarins",
    temperament: "Peaceful",
    tank: "30 to 75 gallons or more, and mature",
    reef: "Yes",
    notes: "The issue is food, not temperament. They need a steady copepod population. Two males will fight.",
  },
];

export default function SaltwaterFishCompatibilityPost() {
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
          Saltwater Fish Compatibility
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Fish Compatibility", "Reef Safe Fish", "Stocking"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Saltwater Fish Compatibility: What Can Live Together
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          November 25, 2026 · 8 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            Saltwater fish compatibility is not a simple yes or no. <strong style={strong}>Whether two fish can live together depends on temperament, tank size, the order you add them, and whether each one is reef safe.</strong> The same pairing can work in a large tank and fail in a small one.
          </p>
          <p>
            The chart below gives the usual behavior of 17 common fish groups. Treat it as a guide, not a guarantee. Individual fish vary, and every experienced keeper has met a peaceful species that turned bully or a &quot;reef safe&quot; fish that ate a coral.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Quick Answer:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={strong}>Safest mixes:</strong> peaceful fish with different shapes that use different parts of the tank</li>
              <li><strong style={strong}>Most common fights:</strong> same species, similar body shape, or two fish wanting the same cave</li>
              <li><strong style={strong}>Order:</strong> peaceful and timid fish first, aggressive and territorial fish last</li>
              <li><strong style={strong}>Reef safe:</strong> is about corals and invertebrates, not about how a fish treats other fish</li>
              <li><strong style={strong}>Predators:</strong> assume anything that fits in the mouth will be eaten</li>
            </ul>
          </div>

          <h2 style={h2Style}>The Four Things That Decide Compatibility</h2>
          <ol style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={strong}>Temperament.</strong> Fish are usually described as peaceful, semi-aggressive or aggressive. Peaceful fish do poorly with aggressive ones, because they get chased off food and into hiding. Mixing within one level, or one step apart, is the safer plan.</li>
            <li><strong style={strong}>Tank size.</strong> Aggression is mostly about territory. A fish that tolerates tank mates in a large tank may attack them in a small one, because nobody can get out of sight.</li>
            <li><strong style={strong}>Order of introduction.</strong> A fish that is already settled treats the tank as its own. A newcomer arrives stressed and has no territory, so the same two fish can get along or fight depending on who went in first.</li>
            <li><strong style={strong}>Reef safety.</strong> Some fish are fine with other fish but eat corals, clams, shrimp, snails or crabs. In a reef tank this matters as much as temperament.</li>
          </ol>

          <h2 style={h2Style}>Saltwater Fish Compatibility Chart</h2>
          <p>
            Tank sizes are typical minimums given as ranges, because species within a group differ and sources disagree. When in doubt, look up the exact species and lean toward the larger number. &quot;With caution&quot; means many individuals behave and some do not.
          </p>
          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Fish group</th>
                  <th style={th}>Temperament</th>
                  <th style={th}>Typical minimum tank</th>
                  <th style={th}>Reef safe</th>
                  <th style={th}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {groups.map((row) => (
                  <tr key={row.group}>
                    <td style={td}>{row.group}</td>
                    <td style={td}>{row.temperament}</td>
                    <td style={td}>{row.tank}</td>
                    <td style={td}>{row.reef}</td>
                    <td style={td}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            If you are choosing your first fish, the peaceful groups near the top of the chart are the usual starting point. Our guide to{" "}
            <Link href="/blog/first-livestock" style={link}>adding your first livestock</Link> covers beginner picks, and the{" "}
            <Link href="/blog/nano-reef-tank-guide" style={link}>nano reef tank guide</Link> covers what fits in a small tank.
          </p>

          <h2 style={h2Style}>Common Conflict Rules</h2>
          <p>
            Most compatibility problems fall into a handful of patterns. Check a new fish against each one before you buy it.
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={strong}>Same species or similar body shape.</strong> Fish fight hardest with what looks like a rival. Two of the same species often fight unless they are a known pair or a group in a suitably large tank. Different species with a similar shape, color or niche can set each other off too.</li>
            <li><strong style={strong}>Multiple tangs.</strong> Tangs are the classic case of the rule above. Mixing them is done with caution: a large tank, different body shapes, and adding them together or the most aggressive one last.</li>
            <li><strong style={strong}>Dottybacks and damsels as bullies.</strong> Both are small, hardy and often sold as starter fish. Many grow into the most aggressive fish in the tank, and they are hard to catch once the rock is in.</li>
            <li><strong style={strong}>Predators with small fish and shrimp.</strong> Lionfish, larger hawkfish, groupers, eels and similar fish eat what fits in the mouth. This is feeding, not aggression, and it does not stop.</li>
            <li><strong style={strong}>Fish that nip corals or clams.</strong> Dwarf and large angelfish, most butterflyfish, many puffers and some triggers may pick at coral polyps or clam mantles. If corals are the point of your tank, read{" "}
              <Link href="/blog/adding-first-corals" style={link}>adding your first corals</Link> before adding a &quot;with caution&quot; fish.</li>
            <li><strong style={strong}>Fish that eat shrimp, snails and crabs.</strong> Larger wrasses, triggers, puffers, hawkfish and some dottybacks treat ornamental shrimp and the{" "}
              <Link href="/blog/reef-tank-clean-up-crew" style={link}>clean up crew</Link> as food. A fish can be completely coral safe and still empty the tank of snails.</li>
          </ul>

          <h2 style={h2Style}>Order of Introduction: Peaceful First, Aggressive Last</h2>
          <p>
            Plan the whole stocking list before you buy the first fish, then add them from most timid to most aggressive. Firefish, small gobies and cardinalfish go in early so they can find hiding places and learn where food arrives. Tangs, dwarf angelfish, dottybacks and larger wrasses go in toward the end.
          </p>
          <p>
            Add fish slowly, one or two at a time, with a few weeks between additions. This also gives the bacteria in the tank time to catch up with the extra waste. If the tank is new, finish{" "}
            <Link href="/blog/cycling-your-tank" style={link}>cycling it</Link> first.
          </p>
          <p>
            Keeping the list written down helps here. NextUpReef keeps a livestock list for each tank, and Pro includes a Stocking Advisor that checks your list for compatibility problems.
          </p>

          <h2 style={h2Style}>Tank Size and Hiding Places</h2>
          <p>
            Minimum tank sizes are about more than water volume. Active swimmers such as tangs need length. Territorial fish need enough rockwork that each one can hold a spot without seeing its neighbors all day.
          </p>
          <p>
            Build caves, overhangs and swim-throughs, and break up lines of sight. A chased fish that can get out of view usually stops being chased. Open sand suits burrowing gobies and wrasses that sleep in the sand bed. It is easiest to plan this while{" "}
            <Link href="/blog/tank-setup" style={link}>setting up the tank</Link>, before the rock is wet.
          </p>
          <p>
            Fish are also sold small. Stock for the adult size and adult temperament, not the juvenile in the store.
          </p>

          <h2 style={h2Style}>Quarantine</h2>
          <p>
            A separate quarantine tank lets you watch a new fish for disease and get it eating before it meets established tank mates. A fish that arrives healthy and well fed copes with introduction far better than one that goes straight from the bag into a territory dispute. Many keepers quarantine for several weeks. If you medicate, follow the product label.
          </p>

          <h2 style={h2Style}>What to Do When a Fish Is Being Bullied</h2>
          <p>
            Some chasing in the first day or two is normal while fish sort out territory. Act if it continues, or if the victim has torn fins, hides constantly, stays pinned in a corner or near the surface, or stops eating.
          </p>
          <ol style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={strong}>Rearrange the rockwork.</strong> Moving rocks resets territories, so every fish has to claim a spot again. It helps in some cases, not all.</li>
            <li><strong style={strong}>Separate the aggressor.</strong> An acclimation box inside the tank, or a spell in the sump, takes the bully out of circulation while the other fish settle. The same box works for introducing a newcomer the residents can see but not reach.</li>
            <li><strong style={strong}>Add cover and spread out the food.</strong> More hiding places and feeding in two spots mean the victim can eat without crossing the bully.</li>
            <li><strong style={strong}>Rehome one of them.</strong> If nothing changes, one fish has to go. Many local fish stores will take a fish back. Waiting it out rarely ends well for the fish being bullied.</li>
          </ol>
          <p>
            Do not wait long. A fish that is harassed and not eating weakens quickly.
          </p>

          <YouTubeVideo
            id="S7qYb-okfJ4"
            title="Track Your Reef Tank Fish, Corals and Equipment"
            description="How to track fish, corals, equipment and costs in the NextUpReef reef tank app, and run the Reef AI stocking check for compatibility."
            uploadDate="2026-11-25"
            duration="PT1M31S"
            caption="Video: adding gear and a fish in NextUpReef, then running the stocking check."
          />

          <h2 style={h2Style}>Frequently Asked Questions</h2>

          {faqs.map((faq) => (
            <div key={faq.q}>
              <p><strong style={strong}>{faq.q}</strong></p>
              <p>{faq.a}</p>
            </div>
          ))}

          <h2 style={h2Style}>Final Thought</h2>
          <p>
            A compatibility chart tells you what usually happens. Your tank size, your rockwork and the order you add fish decide what happens in your tank. Plan the full list first, research each exact species, and watch every new arrival closely. As the tank matures, the{" "}
            <Link href="/blog/established-reef" style={link}>established reef guide</Link> covers what long-term care looks like.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Keep your livestock list in NextUpReef, free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Keep a livestock list for each tank. Pro includes a Stocking Advisor that checks your list for compatibility problems. iOS and Android, with a 30-day Pro trial and no credit card.
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
