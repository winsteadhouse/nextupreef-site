import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reef Tank Clean Up Crew: What to Add, How Many, When",
  description:
    "What a reef tank clean up crew does, which snails, crabs and shrimp to add, how many for your tank size, and when to add them after the cycle.",
  alternates: {
    canonical: "https://nextupreef.com/blog/reef-tank-clean-up-crew",
  },
  openGraph: {
    title: "Reef Tank Clean Up Crew: What to Add, How Many, When",
    description:
      "Which clean up crew animals to add, what each one eats, starting numbers by tank size, and why one snail per gallon is too many.",
    url: "https://nextupreef.com/blog/reef-tank-clean-up-crew",
    images: [{ url: "/brand/og-image-v2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Reef Tank Clean Up Crew: What to Add, How Many, When",
  description:
    "What a reef tank clean up crew is for, which animals to add and what each eats, starting numbers by tank size, and when to add them.",
  image: "https://nextupreef.com/brand/og-image-v2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo-v2.png" },
  },
  datePublished: "2026-11-24",
  dateModified: "2026-11-24",
  mainEntityOfPage: "https://nextupreef.com/blog/reef-tank-clean-up-crew",
};

const faqs = [
  {
    q: "How many clean up crew per gallon for a reef tank?",
    a: "There is no reliable per-gallon number, because the right amount depends on how much algae and leftover food the tank produces, not its volume. As a starting point, roughly one grazing snail for every 4 to 6 gallons is plenty, plus a few scavengers. Start light and add more only if algae stays ahead of the crew.",
  },
  {
    q: "When should I add a clean up crew to a new reef tank?",
    a: "After the cycle is finished, meaning ammonia and nitrite both read zero, and once there is visible algae or diatoms to eat. A crew added on day one has no food.",
  },
  {
    q: "What is the best clean up crew for a reef tank?",
    a: "A mix that covers different jobs works better than a lot of one animal. For most tanks that means trochus and cerith snails for film algae on glass and rock, plus a few nassarius snails for leftover food in the sand. A fighting conch, an urchin or a shrimp are optional extras.",
  },
  {
    q: "Why do my clean up crew snails keep dying?",
    a: "Common causes are starvation in a tank with too little algae, a salinity difference during acclimation, snails that fall on their backs and cannot turn over, and hermit crabs killing them for their shells. Find the cause before you replace them.",
  },
  {
    q: "Do I need hermit crabs in a reef tank?",
    a: "No. Hermit crabs are useful scavengers, but they are optional, and they can kill snails to take their shells. Many reef keepers run a snail-only crew. If you keep hermits, add only a few and leave spare empty shells in the tank.",
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
const tdNum: CSSProperties = { ...td, fontVariantNumeric: "tabular-nums" };
const strong: CSSProperties = { color: "var(--text-light)" };
const link: CSSProperties = { color: "var(--reef)", fontWeight: 700 };

const animals = [
  {
    name: "Trochus snail",
    eats: "Film algae and diatoms on glass and rock, some short hair algae",
    note: "Hardy, and can right itself if it falls. A good first choice.",
  },
  {
    name: "Astrea snail",
    eats: "Film algae and short turf algae on glass and rock",
    note: "Often cannot right itself on sand. Flip it over if you see one upside down.",
  },
  {
    name: "Cerith snail",
    eats: "Film algae, diatoms and detritus on rock, glass and the top of the sand",
    note: "Small, reaches tight spots. Mostly active at night.",
  },
  {
    name: "Nassarius snail",
    eats: "Leftover meaty food and dead animals",
    note: "Not an algae eater. Lives buried in the sand and comes out at feeding time.",
  },
  {
    name: "Turbo snail",
    eats: "Hair algae and film algae, in large amounts",
    note: "Knocks over loose frags, and can starve in a small or clean tank.",
  },
  {
    name: "Hermit crab (blue leg, scarlet)",
    eats: "Leftover food, detritus and some algae",
    note: "May kill snails for their shells. Keep few and provide spare shells.",
  },
  {
    name: "Emerald crab",
    eats: "Hair algae and sometimes bubble algae",
    note: "Not all eat bubble algae. May pick at corals or small tank mates if hungry.",
  },
  {
    name: "Peppermint shrimp",
    eats: "Leftover food. Some individuals eat aiptasia anemones",
    note: "Aiptasia control is hit and miss. May steal food from corals.",
  },
  {
    name: "Cleaner shrimp (skunk)",
    eats: "Leftover food, and picks parasites and dead tissue off fish",
    note: "Not an algae eater and not a cure for fish disease. May steal food from corals.",
  },
  {
    name: "Fighting conch",
    eats: "Film algae, diatoms and detritus on the sand surface",
    note: "Needs an open sand bed. One is usually enough for a mid-size tank.",
  },
  {
    name: "Urchin (tuxedo, pincushion)",
    eats: "Hair algae, turf algae and film algae on rock",
    note: "Also eats coralline algae and carries off loose frags. Best in an established tank.",
  },
];

const stocking = [
  {
    size: "Nano (10 to 20 gal)",
    grazers: "2 to 4",
    sand: "1 to 2",
    extras: "Hermits optional, 0 to 2. Skip turbo snails, conchs and urchins.",
  },
  {
    size: "40 gallon",
    grazers: "6 to 10",
    sand: "2 to 4",
    extras: "Optional: 1 fighting conch, 1 shrimp, a few hermits.",
  },
  {
    size: "75 gallon",
    grazers: "10 to 15",
    sand: "4 to 6",
    extras: "Optional: 1 fighting conch, 1 or 2 shrimp, 1 urchin once established.",
  },
  {
    size: "120 gallon",
    grazers: "15 to 25",
    sand: "6 to 10",
    extras: "Optional: 1 or 2 fighting conchs, 1 or 2 shrimp, 1 urchin, a few turbo snails for hair algae.",
  },
];

export default function ReefTankCleanUpCrewPost() {
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
          Clean Up Crew Guide
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Clean Up Crew", "Snails", "Livestock"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Reef Tank Clean Up Crew: What to Add, How Many, and When
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          November 24, 2026 · 7 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            A reef tank clean up crew is the group of snails, crabs, shrimp and other invertebrates that eat algae, leftover food and detritus. The short answer to &quot;what should I add and how many&quot; is: <strong style={strong}>a mix of animals that do different jobs, far fewer than the old rules suggest, added after the cycle once there is something for them to eat.</strong>
          </p>
          <p>
            The most common mistake is buying too many at once, watching them clear the tank, and then watching them starve.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Quick Answer:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={strong}>When:</strong> after the cycle, once you can see algae or diatoms. Not on day one.</li>
              <li><strong style={strong}>What:</strong> grazing snails (trochus, cerith, astrea) for glass and rock, nassarius snails for leftover food in the sand</li>
              <li><strong style={strong}>How many:</strong> start with roughly one grazing snail per 4 to 6 gallons, then add only if algae stays ahead</li>
              <li><strong style={strong}>Optional:</strong> hermit crabs, a shrimp, a fighting conch, an urchin in larger established tanks</li>
              <li><strong style={strong}>Always:</strong> acclimate slowly. Invertebrates handle salinity swings badly.</li>
            </ul>
          </div>

          <h2 style={h2Style}>What a Clean Up Crew Does, and What It Will Not Fix</h2>
          <p>
            A clean up crew does three things. Grazers scrape film algae and short algae off glass and rock. Scavengers eat food your fish missed before it rots. Sand dwellers turn over the top of the sand bed.
          </p>
          <p>
            What it does not do is remove nutrients. A snail that eats algae turns most of it back into waste, so the nitrate and phosphate that grew the algae stay in the system. If algae grows faster than a reasonable crew can eat it, more snails will not solve it. Our{" "}
            <Link href="/blog/reef-tank-nitrate-phosphate-guide" style={link}>nitrate and phosphate guide</Link> covers how to bring nutrients into range.
          </p>
          <p>
            A crew is also the wrong tool for cyanobacteria and dinoflagellates. Most crew animals will not eat them, and a dinoflagellate outbreak can harm snails. Those are covered in{" "}
            <Link href="/blog/cyanobacteria-dinoflagellates-algae-reef-pests" style={link}>our guide to cyanobacteria, dinoflagellates and algae</Link>.
          </p>

          <h2 style={h2Style}>When to Add a Clean Up Crew</h2>
          <p>
            Wait for two things.
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>The cycle is finished.</strong> Ammonia and nitrite should both read zero. Invertebrates are no more tolerant of ammonia than fish are. If you are not there yet, see{" "}
              <Link href="/blog/cycling-your-tank" style={link}>cycling your tank</Link>.</li>
            <li><strong style={strong}>There is food in the tank.</strong> Clean white rock has almost nothing for a grazer to eat. Wait until you see a brown dusting of diatoms or a green film on the glass.</li>
          </ul>
          <p>
            In most new tanks that point arrives with the first algae stage after the cycle. That stage is normal, and it is the right time for the first few snails. Read{" "}
            <Link href="/blog/the-ugly-phase" style={link}>the ugly phase</Link> for what to expect.
          </p>
          <p>
            Add the crew in stages. Start with a small group, give it two or three weeks, then decide whether you need more. For how the crew fits around your first fish, see{" "}
            <Link href="/blog/first-livestock" style={link}>adding your first livestock</Link>.
          </p>

          <h2 style={h2Style}>Clean Up Crew Animals and What Each One Eats</h2>
          <p>
            No single animal eats everything. Pick by the job you need done.
          </p>
          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Animal</th>
                  <th style={th}>What it eats</th>
                  <th style={th}>Good to know</th>
                </tr>
              </thead>
              <tbody>
                {animals.map((row) => (
                  <tr key={row.name}>
                    <td style={td}>{row.name}</td>
                    <td style={td}>{row.eats}</td>
                    <td style={td}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Two points are worth repeating. <strong style={strong}>Nassarius snails do not eat algae.</strong> Buy them for leftover food in the sand bed, not for green glass. And <strong style={strong}>hermit crabs are optional.</strong> Plenty of healthy reefs run on snails alone.
          </p>

          <h2 style={h2Style}>How Many to Add: Starting Numbers by Tank Size</h2>
          <p>
            These are starting ranges, not targets. They assume a tank with visible algae. If yours is new and fairly clean, begin at the low end or below it.
          </p>
          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Tank size</th>
                  <th style={th}>Grazing snails (trochus, cerith, astrea)</th>
                  <th style={th}>Nassarius snails</th>
                  <th style={th}>Extras</th>
                </tr>
              </thead>
              <tbody>
                {stocking.map((row) => (
                  <tr key={row.size}>
                    <td style={td}>{row.size}</td>
                    <td style={tdNum}>{row.grazers}</td>
                    <td style={tdNum}>{row.sand}</td>
                    <td style={td}>{row.extras}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Start light and add. It is easy to buy three more snails next month. It is much harder to keep twenty alive in a tank that grows enough algae for eight.
          </p>
          <p>
            Small tanks need extra care, because one dead snail you do not find can foul a small volume of water. More on that in the{" "}
            <Link href="/blog/nano-reef-tank-guide" style={link}>nano reef tank guide</Link>.
          </p>

          <h2 style={h2Style}>Why &quot;One Snail per Gallon&quot; Overstocks</h2>
          <p>
            Rules such as one snail per gallon are common on forums and on pre-packaged clean up crew bundles. They are simple to remember, and they put far more animals in the tank than it can feed.
          </p>
          <p>
            The problem is that tank volume tells you nothing about food supply. How much algae grows depends on your light, your nutrients, how much you feed and how old the tank is. A 40 gallon tank with clean rock might support a handful of snails. The same tank in an algae bloom could feed many more, for a while.
          </p>
          <p>
            What happens with a large crew is predictable. The snails clear the visible algae, then there is nothing left and they slowly starve. Dead snails decay and add nutrients back to the water, which grows more algae.
          </p>

          <h2 style={h2Style}>What to Do When the Crew Runs Out of Food</h2>
          <p>
            A spotless tank is a hungry tank for grazers. Warning signs include snails that stop moving, empty shells, and hermit crabs attacking snails.
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>Feed them.</strong> Grazing snails, urchins and conchs will often take dried seaweed (nori) or sinking algae wafers. Scavengers do fine on a little of the food your fish get.</li>
            <li><strong style={strong}>Reduce the crew.</strong> Give extras to another reefer or ask your local fish store to take them back. </li>
            <li><strong style={strong}>Do not replace losses automatically.</strong> Remove any snail that is clearly dead, and find out why before you buy more.</li>
          </ul>

          <h2 style={h2Style}>Animals to Be Careful With</h2>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>Turbo snails, hermit crabs, emerald crabs and urchins.</strong> All useful, all with the downsides listed in the table above. Add them for a specific job, in small numbers.</li>
            <li><strong style={strong}>Sand sifting starfish.</strong> They eat the small life in the sand bed and commonly starve once it is gone.</li>
            <li><strong style={strong}>Sea hares.</strong> Very good at eating hair algae, and likely to starve once it is gone. Have a plan to rehome one afterwards.</li>
          </ul>
          <p>
            One rule applies to the whole crew: copper-based fish medications are toxic to invertebrates. Never use copper in a tank that holds snails, crabs or shrimp.
          </p>

          <h2 style={h2Style}>Acclimating Your Clean Up Crew</h2>
          <p>
            Snails, shrimp and urchins are more sensitive to salinity changes than most fish. Store water is often at a different salinity from your tank, and a sudden move from one to the other is a common cause of early losses.
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>Check your own salinity first.</strong> Make sure the tank is stable and in range before you buy. The{" "}
              <Link href="/blog/reef-tank-salinity-guide" style={link}>reef tank salinity guide</Link> covers targets and how to measure accurately.</li>
            <li><strong style={strong}>Float the bag</strong> to match temperature.</li>
            <li><strong style={strong}>Drip acclimate slowly.</strong> Add small amounts of tank water to the bag water so salinity changes gradually. Take longer when the difference is large.</li>
            <li><strong style={strong}>Do not pour store water into your tank.</strong> Move the animals across and discard the bag water.</li>
            <li><strong style={strong}>Place snails upright</strong> on rock or glass, not upside down on the sand.</li>
          </ul>

          <h2 style={h2Style}>Keeping Track of Your Crew</h2>
          <p>
            Crews change quietly: snails die behind the rock, you add a few more, and months later you are not sure what is in the tank. NextUpReef keeps a livestock list for each tank, and tracks your nitrate and phosphate trends, which tell you more about why algae is growing than a snail count will.
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
            A clean up crew is a maintenance team, not a cure. Add it after the cycle, when there is algae to eat. Start with fewer animals than you think you need, and let the tank tell you whether to add more.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Track your tank with NextUpReef, free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Keep a livestock list for each tank, log every test against your tank&apos;s targets, and watch your nitrate and phosphate trends. iOS and Android, with a 30-day Pro trial and no credit card.
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
