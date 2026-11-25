import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mandarin Goby Care: Is Your Tank Ready for One?",
  description:
    "Mandarin goby care: what mandarin dragonets eat, the tank size and age they need, copepods, tank mates, and how to spot a starving fish early.",
  alternates: {
    canonical: "https://nextupreef.com/blog/mandarin-goby-care",
  },
  openGraph: {
    title: "Mandarin Goby Care: Is Your Tank Ready for One?",
    description:
      "Why mandarin dragonets starve in new tanks, how copepods and a refugium fix that, which fish compete for their food, and the signs of a healthy mandarin.",
    url: "https://nextupreef.com/blog/mandarin-goby-care",
    images: [{ url: "/brand/og-image-v2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mandarin Goby Care: Is Your Tank Ready for One?",
  description:
    "How to care for a mandarin goby (mandarin dragonet): diet, copepods, tank size and maturity, captive bred versus wild caught, tank mates, and signs of starvation.",
  image: "https://nextupreef.com/brand/og-image-v2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo-v2.png" },
  },
  datePublished: "2026-11-25",
  dateModified: "2026-11-25",
  mainEntityOfPage: "https://nextupreef.com/blog/mandarin-goby-care",
};

const faqs = [
  {
    q: "What do mandarin gobies eat?",
    a: "Mostly live copepods and other tiny crustaceans that live on rock and sand. They pick at them one at a time, all day. Some captive bred mandarins, and a few wild ones, also learn to take frozen or prepared foods, but you should not count on that when you buy one.",
  },
  {
    q: "What size tank does a mandarin goby need?",
    a: "There is no single agreed number. Many keepers suggest a larger, well established tank with plenty of live rock, because more rock supports more copepods. Smaller tanks can work, but usually only with a refugium, regular copepod additions and a fish that accepts prepared food.",
  },
  {
    q: "How old should a tank be before adding a mandarin?",
    a: "Commonly quoted guidance is many months to a year. The age matters less than the result: a copepod population you can actually see on the glass and rock, and that holds up while the fish eats from it every day.",
  },
  {
    q: "Is a mandarin goby a good beginner fish?",
    a: "Usually not. The fish is peaceful and hardy in other ways, but its diet is the hard part, and a new tank does not have the food it needs. It is a better choice once the tank is mature and stable.",
  },
  {
    q: "Can you keep two mandarin gobies together?",
    a: "A male and female pair can work in a tank with enough copepods to feed both. Two males will usually fight, sometimes to the death. Males have a long, pointed first dorsal spine that females lack.",
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

const quickFacts = [
  { fact: "Common names", detail: "Mandarin goby, mandarin dragonet, mandarinfish" },
  { fact: "Species", detail: "Green mandarin (Synchiropus splendidus) and spotted mandarin (Synchiropus picturatus)" },
  { fact: "Temperament", detail: "Peaceful with other fish. Males fight other male dragonets." },
  { fact: "Adult size", detail: "Roughly 2.5 to 3 inches, with the spotted mandarin often a little smaller" },
  { fact: "Reef safe", detail: "Yes. It ignores corals, shrimp, snails and clams." },
  { fact: "Diet", detail: "Live copepods and other tiny crustaceans, eaten almost constantly" },
  { fact: "Difficulty", detail: "Difficult, almost entirely because of feeding" },
  { fact: "Tank maturity", detail: "Well established, commonly quoted as many months to a year, with a visible copepod population" },
];

const healthSigns = [
  {
    area: "Belly",
    healthy: "Gently rounded, especially behind the pectoral fins",
    starving: "Flat or pinched in, so the fish looks hollow from the front",
  },
  {
    area: "Back and sides",
    healthy: "Smooth and full",
    starving: "A visible ridge or line along the spine, with sunken flanks",
  },
  {
    area: "Behavior",
    healthy: "Hovers over rock and sand all day, pecking every few seconds",
    starving: "Pecks less, sits still for long periods, or hides",
  },
  {
    area: "Color",
    healthy: "Bright and sharply patterned",
    starving: "Can look dull or washed out in later stages",
  },
];

export default function MandarinGobyCarePost() {
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
          Mandarin Goby Care
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Mandarin Goby", "Copepods", "Livestock"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Mandarin Goby Care: Is Your Tank Ready for One?
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          November 25, 2026 · 8 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            The mandarin goby is beautiful, peaceful and reef safe. It is also <strong style={strong}>one of the fish most often lost to starvation</strong>, because it eats live copepods almost constantly and most new tanks do not have enough of them.
          </p>
          <p>
            If your tank is mature, full of live rock and visibly crawling with copepods, a mandarin can do well for years. If it is not there yet, wait.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Quick Answer:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={strong}>Diet:</strong> live copepods, picked off rock and sand all day</li>
              <li><strong style={strong}>Tank:</strong> mature, with plenty of live rock and an established copepod population</li>
              <li><strong style={strong}>Helps a lot:</strong> a refugium, and a captive bred fish that takes prepared food</li>
              <li><strong style={strong}>Avoid:</strong> other copepod hunters in the same tank, and a second male</li>
              <li><strong style={strong}>Watch for:</strong> a pinched belly or a visible spine line</li>
            </ul>
          </div>

          <h2 style={h2Style}>It Is a Dragonet, Not a Goby</h2>
          <p>
            Stores sell it as a mandarin goby, but it is a dragonet, from a different family than true gobies. The name matters because it tells you how the fish lives. Dragonets are slow, deliberate hunters that hover over the bottom and pick at tiny prey.
          </p>
          <p>
            Two species are sold as mandarins. The <strong style={strong}>green mandarin</strong> (Synchiropus splendidus) has swirling blue, orange and green lines. The <strong style={strong}>spotted mandarin</strong> (Synchiropus picturatus), sometimes called the psychedelic mandarin, has dark ringed spots on a green body. Care is the same for both.
          </p>

          <h2 style={h2Style}>Mandarin Goby Quick Facts</h2>
          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Fact</th>
                  <th style={th}>Detail</th>
                </tr>
              </thead>
              <tbody>
                {quickFacts.map((row) => (
                  <tr key={row.fact}>
                    <td style={td}>{row.fact}</td>
                    <td style={td}>{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={h2Style}>Why a Mature Tank Matters</h2>
          <p>
            A mandarin has a small mouth and eats one tiny animal at a time. To get enough, it has to hunt through most of the day. That only works if the tank produces copepods faster than the fish eats them.
          </p>
          <p>
            Copepods live and breed in the pores and crevices of rock, in the sand and in macroalgae. A new tank has very few. The population builds over months as the rock matures, which is one reason{" "}
            <Link href="/blog/live-rock-vs-dry-rock" style={link}>live rock and dry rock</Link> behave so differently in the first year. A tank started with dry rock usually needs copepods added on purpose.
          </p>
          <p>
            On tank size and age, keepers do not agree on exact numbers, so treat any figure as a rough guide. Many suggest a larger, well established tank that has been running for many months to a year. Smaller tanks are possible, but usually only with regular copepod additions, a refugium and ideally a fish that accepts prepared food. The{" "}
            <Link href="/blog/nano-reef-tank-guide" style={link}>nano reef tank guide</Link> has more on stocking small tanks.
          </p>
          <p>
            A simple test: look at the glass and rock with a flashlight an hour or two after lights out. If you see lots of small white specks moving around, you have a working population. If you have to search for one, the tank is not ready. For more on what a mature system looks like, see the{" "}
            <Link href="/blog/established-reef" style={link}>established reef guide</Link>.
          </p>

          <h2 style={h2Style}>Captive Bred Versus Wild Caught</h2>
          <p>
            Most mandarins in stores are wild caught. Many never accept anything but live prey, and they can arrive thin after shipping.
          </p>
          <p>
            Captive bred mandarins are available from some breeders and cost more. Some are raised on, or trained onto, frozen and prepared foods. That takes pressure off the copepod population.
          </p>
          <p>
            Two cautions. Not every captive bred fish stays on prepared food once it moves to a new tank, so ask the seller what it is eating and ask to see it eat. And a mandarin that takes prepared food still benefits from live copepods, so the tank should be mature either way.
          </p>

          <h2 style={h2Style}>Feeding a Mandarin</h2>
          <p>
            Your job is to keep the copepod population ahead of the fish.
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>Run a refugium.</strong> A refugium with macroalgae gives copepods a place to breed where no fish can reach them. The{" "}
              <Link href="/blog/reef-tank-sump-guide" style={link}>reef tank sump guide</Link> covers how a refugium fits into a sump.</li>
            <li><strong style={strong}>Seed copepods before the fish arrives.</strong> Add live copepods well ahead of time so they can settle and multiply.</li>
            <li><strong style={strong}>Top up when needed.</strong> Many keepers add more copepods from time to time, especially in smaller tanks. How often depends on your tank, so go by what you see on the glass and by the fish&apos;s belly.</li>
            <li><strong style={strong}>Target feed if the fish accepts it.</strong> If yours eats frozen or prepared food, place it near the fish with a pipette or baster, with the flow turned down.</li>
            <li><strong style={strong}>Try a feeding station.</strong> Some keepers use a small jar or dish on the sand with an opening the mandarin can enter and larger fish cannot. It works for some mandarins and not others.</li>
          </ul>

          <h2 style={h2Style}>Competitors and Tank Mates</h2>
          <p>
            A mandarin almost never has a problem with aggression. Its problem is other fish eating the same food. Each copepod hunter you add shrinks the supply.
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>Other dragonets.</strong> A second mandarin, or a scooter blenny, which is also a dragonet despite the name, eats exactly the same prey.</li>
            <li><strong style={strong}>Some wrasses.</strong> Wrasses that hunt through the rock all day, such as the six line wrasse, eat a lot of copepods and are much faster at it. Some can also harass a mandarin.</li>
          </ul>
          <p>
            Good tank mates are calm fish that feed from the water column, such as clownfish, firefish, cardinalfish and small gobies. Snails, hermit crabs and cleaner shrimp are fine, and the usual{" "}
            <Link href="/blog/reef-tank-clean-up-crew" style={link}>clean up crew</Link> does not compete with it. Avoid large, aggressive or predatory fish.
          </p>
          <p>
            NextUpReef keeps a livestock list for each tank with the date each animal was added, and Pro includes a Stocking Advisor that checks your list for compatibility problems.
          </p>

          <h2 style={h2Style}>A Pair Versus Two Males</h2>
          <p>
            Two males will usually fight, and in a home aquarium the loser has nowhere to go. Do not keep two males together.
          </p>
          <p>
            A male and female pair can work, but two fish need roughly twice the copepods. Only try it in a tank that is already feeding one mandarin with ease. Males are usually larger and have a long, pointed first dorsal spine. Females have a short, rounded one.
          </p>

          <h2 style={h2Style}>Healthy Versus Starving</h2>
          <p>
            Starvation in a mandarin is slow. The fish can look fine for weeks while it loses weight, so check its shape regularly, from the side and from the front.
          </p>
          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>What to check</th>
                  <th style={th}>Healthy</th>
                  <th style={th}>Starving</th>
                </tr>
              </thead>
              <tbody>
                {healthSigns.map((row) => (
                  <tr key={row.area}>
                    <td style={td}>{row.area}</td>
                    <td style={td}>{row.healthy}</td>
                    <td style={td}>{row.starving}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Use the same check in the store. A fish that is already thin is hard to bring back, so do not buy one with a pinched belly. If your own fish starts to thin, act early: add live copepods, try target feeding, and reduce competition for food.
          </p>

          <h2 style={h2Style}>Acclimation and Medication</h2>
          <p>
            Acclimate a mandarin slowly, the same way you would any delicate fish, and match temperature and salinity before release. A tight lid is sensible, since mandarins can jump. The{" "}
            <Link href="/blog/first-livestock" style={link}>first livestock guide</Link> covers acclimation basics.
          </p>
          <p>
            Mandarins have a heavy slime coat and lack the typical scales of most fish. They are widely regarded as sensitive to copper and to many common medications. If one needs treatment, get advice from an aquatic vet or an experienced keeper first, and follow the product label.
          </p>
          <p>
            Quarantine is a real trade-off with this fish. A bare quarantine tank has no copepods, so a long stay can starve a mandarin that only eats live food. Keepers disagree on the best approach, so if you do quarantine, plan how you will feed it the whole time.
          </p>

          <h2 style={h2Style}>Common Mistakes</h2>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={strong}>Buying one for a new tank.</strong> The fish looks fine for a few weeks, eats through the small copepod population, then slowly starves.</li>
            <li><strong style={strong}>Assuming it will learn frozen food.</strong> Some do. Many do not. Plan for a fish that only eats live prey.</li>
            <li><strong style={strong}>Adding a competitor later.</strong> A tank that fed one mandarin well can fail after a pod hunting wrasse or a second dragonet goes in.</li>
            <li><strong style={strong}>Treating one bottle of copepods as a fix.</strong> A single addition is a meal, not a population.</li>
            <li><strong style={strong}>Chasing other problems first.</strong> Stable water still matters. Keep it within the ranges in the{" "}
              <Link href="/blog/reef-tank-parameters-chart" style={link}>reef tank parameters chart</Link>, but remember that perfect water does not feed a mandarin.</li>
          </ul>

          <h2 style={h2Style}>Frequently Asked Questions</h2>

          {faqs.map((faq) => (
            <div key={faq.q}>
              <p><strong style={strong}>{faq.q}</strong></p>
              <p>{faq.a}</p>
            </div>
          ))}

          <h2 style={h2Style}>Final Thought</h2>
          <p>
            A mandarin is not a hard fish to keep alive in the right tank. It is a hard fish to keep alive in the wrong one. Build the copepod population first, keep competitors out, and watch the belly.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Keep your livestock list in NextUpReef, free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              List every animal in each tank with the date it was added. Pro includes a Stocking Advisor that checks your list for compatibility problems. iOS and Android, with a 30-day Pro trial and no credit card.
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
