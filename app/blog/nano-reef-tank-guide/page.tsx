import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nano Reef Tank Guide: 10, 20, and 40 Gallon Setups That Actually Work",
  description:
    "Complete guide to nano reef tanks — pico, nano, and mini reef setups from 5 to 40 gallons. Equipment, livestock, parameters, and the small-tank mistakes most beginners make.",
  alternates: {
    canonical: "https://nextupreef.com/blog/nano-reef-tank-guide",
  },
  openGraph: {
    title: "Nano Reef Tank Guide: 10, 20, and 40 Gallon Setups That Actually Work",
    description:
      "Everything you need to know about pico, nano, and mini reef tanks — equipment, livestock, parameters, and how to keep small tanks stable.",
    url: "https://nextupreef.com/blog/nano-reef-tank-guide",
    images: [{ url: "/brand/splash2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Nano Reef Tank Guide: 10, 20, and 40 Gallon Setups That Actually Work",
  description:
    "Complete guide to pico, nano, and mini reef tanks — equipment, livestock, parameters, and the small-tank mistakes most beginners make.",
  image: "https://nextupreef.com/brand/splash2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-05-09",
  dateModified: "2026-05-09",
  mainEntityOfPage: "https://nextupreef.com/blog/nano-reef-tank-guide",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a nano reef tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A nano reef tank is generally any saltwater reef tank under 40 gallons. Pico reefs are under 10 gallons, nano reefs are 10–30 gallons, and mini reefs typically fall in the 30–40 gallon range. The smaller the tank, the harder it is to maintain stability.",
      },
    },
    {
      "@type": "Question",
      name: "What size is best for a beginner nano reef?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "20 to 40 gallons is the sweet spot for beginners. Tanks smaller than 20 gallons swing in temperature, salinity, and chemistry too quickly to forgive a learning curve. All-in-one tanks like the Fluval Evo 13.5, Innovative Marine Nuvo, and Waterbox Cube are popular choices.",
      },
    },
    {
      "@type": "Question",
      name: "How many fish can I put in a nano reef tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A general rule for nano reefs is 1 small fish per 5 gallons, but quality matters more than quantity. A 20 gallon tank can comfortably house 2–3 small fish like clownfish, gobies, or basslets. Overstocking is the fastest way to crash a nano.",
      },
    },
    {
      "@type": "Question",
      name: "Do nano reef tanks need a sump?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Most nano reefs use an all-in-one design with a built-in rear chamber instead of a sump. This keeps the footprint small and is more than enough filtration for a tank under 40 gallons.",
      },
    },
  ],
};

export default function NanoReefPost() {
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
          Nano Reef Tank Guide
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Nano Reef", "Beginner Guide", "Tank Setup"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Nano Reef Tank Guide: 10, 20, and 40 Gallon Setups That Actually Work
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          May 9, 2026 · 9 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            Nano reef tanks are how most reefers get into the hobby. They&apos;re cheaper, take less space, and produce a beautiful slice of the ocean on your desk or kitchen counter. But here&apos;s the thing nobody tells beginners: small tanks are harder, not easier. The same chemistry that takes weeks to swing in a 90-gallon tank can swing overnight in a 10-gallon. Get a nano reef right and it&apos;s the most rewarding project in the hobby. Get it wrong and you&apos;ll learn the hard way.
          </p>
          <p>
            This guide covers everything you need to know about pico, nano, and mini reef tanks — what size to pick, what equipment you actually need, what livestock works, and how to keep your parameters stable when every drop of water matters.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            What Counts as a Nano Reef Tank?
          </h2>
          <p>
            The hobby loosely breaks small tanks into three categories. They&apos;re not official sizes — just terms reefers use to describe tank scale:
          </p>
          <div style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li><strong style={{ color: "var(--text-light)" }}>Pico reef:</strong> Under 10 gallons. The hardest size to keep alive — extremely sensitive to evaporation, temperature swings, and parameter shifts.</li>
              <li><strong style={{ color: "var(--text-light)" }}>Micro reef:</strong> 5 to 15 gallons. Slightly more forgiving than pico but still requires daily attention.</li>
              <li><strong style={{ color: "var(--text-light)" }}>Nano reef:</strong> 10 to 30 gallons. The most popular small-tank size — manageable for beginners with discipline.</li>
              <li><strong style={{ color: "var(--text-light)" }}>Mini reef:</strong> 30 to 40 gallons. The sweet spot for beginners. Big enough to be stable, small enough to be affordable.</li>
            </ul>
          </div>
          <p>
            If you&apos;re new to reefkeeping, start at 20 gallons or larger. The single biggest factor in nano reef success is water volume — and a 20 gallon tank is roughly twice as forgiving as a 10 gallon. Skipping the pico stage costs less in mistakes than gaining experience.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            All-in-One vs Traditional Setup
          </h2>
          <p>
            Almost every modern nano reef uses an all-in-one (AIO) design. The display tank has built-in rear chambers that hide the filtration, heater, and return pump. No external sump, no drilled overflow, no plumbing. You plug it in and go.
          </p>
          <p>
            Popular AIO tanks in the nano range:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Fluval Evo 13.5:</strong> The most popular starter nano. Cheap, reliable, ships with a stock light that gets you started.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Innovative Marine Nuvo Fusion 20:</strong> Beautiful rimless cube, well-designed rear chamber, upgrade-friendly.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Waterbox AIO 20 / 30:</strong> Premium feel, larger sump area, popular with intermediate reefers.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Red Sea Reefer Nano:</strong> 30 gallons, includes a real external sump in the cabinet — bridges the gap between AIO and full-size setups.</li>
          </ul>
          <p>
            A traditional setup with a separate sump is overkill for most nano reefs. Sumps shine on tanks 40+ gallons where the extra volume materially helps stability. For most readers, an all-in-one is the right answer.
          </p>

          <div style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}>
            <img
              src="/screenshots/phone-home-v2.png"
              alt="NextUpReef dashboard for a nano reef tank"
              style={{ width: "100%", maxWidth: "280px", borderRadius: "24px", boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}
            />
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            The Equipment You Actually Need
          </h2>
          <p>
            One of the appeals of a nano reef is how little gear you can get away with. Here&apos;s the minimum kit list for a 20 gallon AIO:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Tank:</strong> An all-in-one display in the 13.5 to 30 gallon range.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Light:</strong> The stock light on AIOs is fine for soft corals. For LPS or SPS, upgrade to an AI Prime 16HD, Kessil A80, or Nanobox Mini. Lighting is the most worthwhile upgrade on a nano.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Heater:</strong> 50W is plenty for a 20 gallon. Use a thermostat — heaters fail open or closed, and either failure mode can cook or freeze a small tank.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Wavemaker:</strong> One small powerhead like a Tunze NanoStream or a Sicce Voyager Nano. Aim for around 20x tank turnover combined with the return pump.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Salt:</strong> Quality salt mix is non-negotiable. Reef Crystals, Red Sea Coral Pro, and Tropic Marin Pro Reef are all solid choices.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Live rock:</strong> 1 to 1.5 lbs per gallon. Dry rock from BRS or live rock from a local fish store.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Sand:</strong> A 1 inch sand bed of CaribSea Special Grade or Fiji Pink is standard.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Refractometer:</strong> Test salinity properly. Hydrometers are inaccurate.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Test kits:</strong> Salifert or Red Sea kits for alkalinity, calcium, magnesium, nitrate, phosphate.</li>
          </ul>
          <p>
            What you don&apos;t need on day one: protein skimmer (water changes handle export at this scale), calcium reactor, dosing pumps, controllers, ATO (helpful but not required). Get the basics dialed first.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Nano Reef Parameters: Targets and Why Stability Matters More
          </h2>
          <p>
            Nano reef parameters are the same as a big reef — but stability matters dramatically more. A 20 gallon tank evaporates faster, heats up faster, and is consumed by corals faster relative to its volume. A single missed top-off can shift salinity by 0.003+.
          </p>
          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Target Parameters for a Mixed Nano Reef:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={{ color: "var(--text-light)" }}>Salinity:</strong> 1.024 – 1.026 (specific gravity)</li>
              <li><strong style={{ color: "var(--text-light)" }}>Temperature:</strong> 76 – 80°F</li>
              <li><strong style={{ color: "var(--text-light)" }}>pH:</strong> 8.1 – 8.3</li>
              <li><strong style={{ color: "var(--text-light)" }}>Alkalinity:</strong> 8 – 9.5 dKH</li>
              <li><strong style={{ color: "var(--text-light)" }}>Calcium:</strong> 400 – 450 ppm</li>
              <li><strong style={{ color: "var(--text-light)" }}>Magnesium:</strong> 1250 – 1350 ppm</li>
              <li><strong style={{ color: "var(--text-light)" }}>Nitrate:</strong> 1 – 10 ppm (not zero)</li>
              <li><strong style={{ color: "var(--text-light)" }}>Phosphate:</strong> 0.02 – 0.1 ppm</li>
            </ul>
          </div>
          <p>
            Test alkalinity twice per week for the first 6 months. It&apos;s the parameter most likely to swing on a nano, and the one corals respond to fastest. Once you understand your tank&apos;s consumption rate, you can scale back to once a week.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Stocking a Nano Reef: Less Is More
          </h2>
          <p>
            Bioload mistakes are the #1 reason nano reefs crash. A small tank can absolutely host stunning livestock — but you have to respect the volume.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Fish for nano reefs (under 30 gallons):</strong>
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <li>Ocellaris or Percula clownfish (pair)</li>
            <li>Royal gramma</li>
            <li>Yellow watchman goby (with a pistol shrimp)</li>
            <li>Tailspot blenny</li>
            <li>Firefish</li>
            <li>Six-line wrasse (with caution — can become aggressive)</li>
            <li>Neon goby</li>
          </ul>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Avoid in nano reefs:</strong> tangs (need 75+ gallon swimming room), angelfish (most), butterflies, large wrasses, mandarins (in tanks under 30g without an established refugium).
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Stocking math:</strong> A 20 gallon nano can hold 2 to 3 small fish total. A 13 gallon pico should have at most 1 fish. Always think about adult size, not the inch-long juvenile in the bag.
          </p>
          <p>
            Cleanup crew is just as important: 1 hermit crab and 1 snail per 2 gallons is a reasonable starting density. Add them gradually after the cycle completes and the tank moves through the &quot;ugly phase.&quot;{" "}
            <Link href="/blog/the-ugly-phase" style={{ color: "var(--reef)", fontWeight: 700 }}>
              Learn what to expect during the ugly phase →
            </Link>
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Corals That Thrive in Nano Reefs
          </h2>
          <p>
            Start with hardy corals while you learn your tank&apos;s behavior. As parameters stabilize over the first 6 to 12 months, you can graduate to more demanding species.
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Beginner softies:</strong> Zoanthids, palythoas, mushrooms, Kenya tree, green star polyps</li>
            <li><strong style={{ color: "var(--text-light)" }}>Easy LPS:</strong> Hammer, torch, frogspawn, duncan, candy cane, blastomussa</li>
            <li><strong style={{ color: "var(--text-light)" }}>Once stable (6+ months):</strong> Acan lord, favia, chalice, easy SPS frags like Montipora digitata or stylophora</li>
          </ul>
          <p>
            Hold off on demanding SPS (Acropora, Acanthastrea) until your alkalinity and nitrate are rock-steady for 8+ weeks. Demanding corals punish parameter swings, and a nano swings.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Why Tracking Matters Even More on a Nano
          </h2>
          <p>
            Memory is unreliable. When your zoa colony starts melting and you&apos;re trying to figure out what changed, &quot;I think I tested alk last Tuesday and it was around 8&quot; doesn&apos;t help. Knowing it was exactly 7.2 dKH on Tuesday and 8.9 dKH today tells you exactly what happened.
          </p>
          <p>
            On a small tank, this is even more important. A 1 dKH alkalinity swing on a 100 gallon tank is significant. The same swing on a 13 gallon nano is catastrophic. The window between &quot;fine&quot; and &quot;tissue necrosis&quot; is small.
          </p>
          <p>
            NextUpReef tracks every parameter you log, plots trends over time, scores tank stability, and warns you when values drift. It&apos;s free on iOS and Android, takes 30 seconds to log a test, and turns your scattered notes into something you can actually use.
          </p>

          <div style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}>
            <img
              src="/screenshots/phone-reminders-v2.png"
              alt="Maintenance reminders for a nano reef tank"
              style={{ width: "100%", maxWidth: "280px", borderRadius: "24px", boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}
            />
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            The Most Common Nano Reef Mistakes
          </h2>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Overstocking:</strong> Adding too many fish too fast crashes biological filtration. Stick to one new fish every 2 to 3 weeks.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Skipping the cycle:</strong> &quot;But the live rock is already cycled&quot; — maybe, maybe not. Test ammonia and nitrite anyway. New tanks crash because beginners trust the bag.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Buying corals before stable params:</strong> A pretty acan that costs $80 won&apos;t survive a tank that hasn&apos;t held alk steady for a month.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Big water changes on a problem tank:</strong> A 50% water change on a 13 gallon tank shocks every coral. Smaller and more frequent is better.</li>
            <li><strong style={{ color: "var(--text-light)" }}>No top-off:</strong> A nano can evaporate 1 to 2% of its volume per day. Without a top-off, salinity rises every hour your tank is running.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Chasing numbers:</strong> Stability beats perfection. A tank running at 7.8 dKH steadily is healthier than one swinging between 8.0 and 9.5.</li>
          </ul>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Final Thought
          </h2>
          <p>
            A nano reef is a contradiction: small, simple, and beautiful — but unforgiving in a way that bigger tanks aren&apos;t. The reefers who succeed at this scale treat the tank like a science project. They test consistently, log everything, and act on data instead of vibes. Do that, and a 20 gallon AIO can rival a 200 gallon system in beauty.{" "}
            <Link href="/blog/tank-setup" style={{ color: "var(--reef)", fontWeight: 700 }}>
              Read our complete tank setup guide →
            </Link>
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Track your nano reef with NextUpReef — free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Parameter logging, stability scoring, and trend charts — built for small tanks where every reading matters. Available on iOS and Android.
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
