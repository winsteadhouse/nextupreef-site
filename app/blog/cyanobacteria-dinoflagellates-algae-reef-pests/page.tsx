import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cyanobacteria, Dinoflagellates & Green Hair Algae: How to Beat the Three Reef Tank Pests",
  description:
    "Complete guide to cyanobacteria, dinoflagellates, and green hair algae in reef tanks — how to identify each one, what causes them, and how to get rid of them safely.",
  alternates: {
    canonical: "https://nextupreef.com/blog/cyanobacteria-dinoflagellates-algae-reef-pests",
  },
  openGraph: {
    title: "Cyanobacteria, Dinoflagellates & Green Hair Algae: How to Beat the Three Reef Tank Pests",
    description:
      "How to identify and eliminate the three most common reef tank pests — cyano, dinos, and GHA — without crashing your tank.",
    url: "https://nextupreef.com/blog/cyanobacteria-dinoflagellates-algae-reef-pests",
    images: [{ url: "/brand/splash2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cyanobacteria, Dinoflagellates & Green Hair Algae: How to Beat the Three Reef Tank Pests",
  description:
    "How to identify and treat cyano, dinos, and green hair algae in a reef tank.",
  image: "https://nextupreef.com/brand/splash2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-05-09",
  dateModified: "2026-05-09",
  mainEntityOfPage: "https://nextupreef.com/blog/cyanobacteria-dinoflagellates-algae-reef-pests",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What causes cyanobacteria in a reef tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cyanobacteria thrives on excess nutrients, low flow, and old light bulbs. The most common causes are overfeeding, dirty filter socks, dead spots with no water movement, and metal halide or T5 bulbs more than 12 months old. Fix the cause and cyano usually clears within 2 to 3 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Are dinoflagellates dangerous in a reef tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dinoflagellates are toxic to corals and fish. They appear as brown, stringy snot with air bubbles trapped in them. Unlike cyano or algae, dinos thrive in clean, low-nutrient tanks — making them paradoxically common in well-maintained reefs. Treatment requires raising nutrients, dosing bacteria, and sometimes UV sterilization.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get rid of green hair algae?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Green hair algae (GHA) is fed by phosphate and nitrate. To remove it: manually pull it out, increase your cleanup crew (urchins, tangs, snails, crabs), reduce feeding, increase water changes, and consider GFO to bind phosphate. GHA usually disappears within 4 to 8 weeks once nutrients are controlled.",
      },
    },
    {
      "@type": "Question",
      name: "How do I tell the difference between cyano, dinos, and algae?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cyanobacteria looks like a smooth, flat slime in red, purple, or dark green. It peels off in sheets. Dinoflagellates are stringy brown snot with trapped air bubbles, often growing daily and disappearing at night. Green hair algae is bright green and looks like grass or hair — it grips rock and doesn't peel off.",
      },
    },
  ],
};

export default function ReefPestsPost() {
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
          Cyano, Dinos &amp; Hair Algae
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Pests", "Troubleshooting", "Nuisance Algae"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Cyanobacteria, Dinoflagellates &amp; Green Hair Algae: How to Beat the Three Reef Tank Pests
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          May 9, 2026 · 10 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            Every reef tank will fight one of these three at some point. Cyanobacteria (cyano), dinoflagellates (dinos), and green hair algae (GHA) are the most common nuisance organisms in saltwater tanks. They look similar to a beginner — but they behave very differently, are caused by very different things, and require very different treatment approaches.
          </p>
          <p>
            Misidentifying which one you have is the #1 reason reefers fail to treat them. The cyano treatment for cyano works. The cyano treatment for dinos makes dinos worse. This guide walks through how to identify each one, what causes it, and what actually clears it up.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Quick Identification Guide
          </h2>
          <div style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <li><strong style={{ color: "var(--text-light)" }}>Cyanobacteria:</strong> Smooth slime sheet. Red, purple, dark green, or black. Peels off as a single film. Smells earthy or musty. Usually on sand and low-flow rock.</li>
              <li><strong style={{ color: "var(--text-light)" }}>Dinoflagellates:</strong> Brown stringy snot with air bubbles trapped inside. Disappears at night, returns by mid-morning. Often coats corals and chokes them.</li>
              <li><strong style={{ color: "var(--text-light)" }}>Green hair algae:</strong> Bright green, hair-like or grass-like strands attached firmly to rock. Doesn&apos;t peel off — has to be pulled or scrubbed.</li>
              <li><strong style={{ color: "var(--text-light)" }}>Diatoms (for context):</strong> Light brown dust coating everything. Common in new tanks. Harmless, clears up in weeks. Not in this guide.</li>
            </ul>
          </div>

          <div style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}>
            <img
              src="/screenshots/phone-ai-v2.png"
              alt="AI reef tank advice flagging nuisance algae"
              style={{ width: "100%", maxWidth: "280px", borderRadius: "24px", boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}
            />
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Cyanobacteria: The Easiest to Treat
          </h2>
          <p>
            Cyano is actually a bacteria, not algae. It forms a smooth, sticky sheet that looks painted on. It comes in red (the most common), purple, dark green, and black. You can usually peel it off in a single piece with a turkey baster blast or tweezers.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>What feeds it:</strong>
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <li>Excess nutrients (especially nitrate and phosphate)</li>
            <li>Overfeeding</li>
            <li>Detritus buildup in low-flow areas and dirty filter socks</li>
            <li>Old light bulbs (T5 or metal halide over 12 months old)</li>
            <li>Long photoperiod (more than 9 to 10 hours peak)</li>
            <li>Dead spots in the tank with no flow</li>
          </ul>
          <p>
            <strong style={{ color: "var(--text-light)" }}>How to treat cyano:</strong>
          </p>
          <ol style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li>Siphon it out during a water change. Don&apos;t just blast it — that scatters spores. Suck it directly into the change water.</li>
            <li>Increase flow to the affected area. Add a small wavemaker or reposition existing ones. Cyano needs still water to colonize.</li>
            <li>Cut your photoperiod by 1 to 2 hours per day for 2 weeks.</li>
            <li>Replace any T5 bulbs over 12 months old. Old bulbs shift toward yellow/red wavelengths that cyano loves.</li>
            <li>Reduce feeding by 30 percent for 2 to 3 weeks.</li>
            <li>Improve filter sock and skimmer cleaning routine. Sock changes every 2 to 3 days during treatment.</li>
            <li>If it persists, dose ChemiClean or Red Slime Remover as a last resort. Both kill cyano but cause oxygen crashes — run airstones overnight after dosing.</li>
          </ol>
          <p>
            Cyano usually clears within 2 to 3 weeks of fixing the root cause. If it keeps coming back, you haven&apos;t fixed the cause — keep looking.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Dinoflagellates: The Hardest to Beat
          </h2>
          <p>
            Dinos are the nightmare pest. They look like brown snot or stringy mucus with tiny air bubbles trapped in them. They&apos;re actually microscopic toxic plankton — they release toxins that kill corals and fish over time.
          </p>
          <p>
            What makes dinos so brutal: they grow in CLEAN tanks. Most reef pests are fueled by excess nutrients. Dinos thrive when nutrients are stripped to near zero. So well-maintained reefs running aggressive nutrient export are paradoxically the most vulnerable.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Telltale signs of dinos:</strong>
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <li>Brown stringy growth that&apos;s always full of air bubbles (oxygen byproduct)</li>
            <li>Disappears overnight, comes back by mid-morning</li>
            <li>Nitrate reads near zero and phosphate reads near zero</li>
            <li>Coral polyps don&apos;t extend, even at night</li>
            <li>Snails are dying or staying buried in the sand</li>
            <li>Fish are flashing or scratching against rocks</li>
          </ul>
          <p>
            <strong style={{ color: "var(--text-light)" }}>How to treat dinos:</strong>
          </p>
          <ol style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li>RAISE your nutrients. Counterintuitive but essential. Dose nitrate (NeoNitro) to get nitrate to 5 to 10 ppm and phosphate to 0.05 to 0.1 ppm. Feed more. This is the single most important step.</li>
            <li>Run a UV sterilizer. 15 to 25 watts plumbed in line with water moving through it slowly. UV nukes free-floating dinos that drift through it.</li>
            <li>Dose live bacteria — Microbacter 7, MB7, or DR Tim&apos;s Eco-Balance — to outcompete dinos for whatever scraps remain.</li>
            <li>Lights off for 3 days (blackout). Cover the tank with a sheet. Many dino strains die without light. Skim heavily during the blackout to remove dead toxins.</li>
            <li>Stop chasing zero nutrients. Aggressive GFO, biopellets, and large skimmers create the conditions dinos love. Back off for 2 to 3 months.</li>
            <li>In severe cases: dose hydrogen peroxide (1 ml per 10 gallons daily for a week). Risky — research thoroughly before trying.</li>
          </ol>
          <p>
            Dinos can take 3 to 6 months to fully resolve. They&apos;re the worst-case scenario. Identifying them correctly is half the battle — treating dinos like cyano (cutting nutrients further) accelerates the problem.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Green Hair Algae: The Most Common
          </h2>
          <p>
            GHA is the algae most new reefers fight. It looks like bright green grass or hair attached firmly to rock surfaces. You can&apos;t blow it off — you have to pull or scrub. It&apos;s actually a sign of an immature tank — almost every reef goes through a GHA phase between 4 and 12 months old.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>What feeds GHA:</strong>
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <li>High phosphate (above 0.1 ppm)</li>
            <li>High nitrate (above 10 ppm)</li>
            <li>Overfeeding</li>
            <li>Old, leached dry rock (still releasing bound phosphate)</li>
            <li>Insufficient cleanup crew</li>
            <li>New tanks (4 to 12 months) going through their nutrient cycle</li>
          </ul>
          <p>
            <strong style={{ color: "var(--text-light)" }}>How to treat GHA:</strong>
          </p>
          <ol style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li>Manually remove what&apos;s growing. Pull strands by hand, scrub rocks, vacuum during water changes.</li>
            <li>Test nitrate and phosphate. Bring nitrate under 10 ppm and phosphate under 0.07 ppm.</li>
            <li>Add cleanup crew — turbo snails, urchins, emerald crabs, sea hares (for major outbreaks). A foxface or rabbitfish will eat hair algae on bigger tanks.</li>
            <li>Run GFO (granular ferric oxide) in a reactor to bind phosphate. Replace media every 4 to 6 weeks.</li>
            <li>Increase water change frequency to 20 percent weekly for a month.</li>
            <li>Reduce feeding by 20 to 30 percent.</li>
            <li>Set up a refugium with chaeto — chaeto outcompetes nuisance algae for nutrients.</li>
            <li>Be patient. GHA takes 4 to 8 weeks to clear after nutrients are under control.</li>
          </ol>
          <p>
            GHA usually means your nutrients are too high — but don&apos;t crash them to zero. The goal is balanced (1 to 10 ppm nitrate, 0.02 to 0.08 ppm phosphate), not absent.
          </p>

          <div style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}>
            <img
              src="/screenshots/phone-log-v2.png"
              alt="Logging nitrate and phosphate during a pest outbreak"
              style={{ width: "100%", maxWidth: "280px", borderRadius: "24px", boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}
            />
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            The Common Thread: Track Your Nutrients
          </h2>
          <p>
            Every one of these pests is a nutrient problem in disguise — too much, too little, or imbalanced. You can&apos;t solve a nutrient problem you aren&apos;t measuring. Nitrate and phosphate should be tested weekly in any reef tank, and the readings logged so you can see trends.
          </p>
          <p>
            A tank with stable nitrate at 5 ppm and stable phosphate at 0.05 ppm rarely has a pest problem. Tanks with swinging nutrients — feeding heavy one week, starving them the next — feed every type of nuisance organism in turn. Stability is everything.
          </p>
          <p>
            NextUpReef logs nitrate, phosphate, and every other parameter on trend charts that show you exactly when nutrients spiked or crashed. Spot the swing, find the cause, fix it before it triggers the next outbreak.{" "}
            <Link href="/blog/the-ugly-phase" style={{ color: "var(--reef)", fontWeight: 700 }}>
              Learn about the ugly phase every new tank goes through →
            </Link>
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Prevention: How to Avoid These Pests Long-Term
          </h2>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Don&apos;t chase zero nutrients.</strong> Aim for 1 to 10 ppm nitrate and 0.02 to 0.1 ppm phosphate. Both at zero invites dinos.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Cleanup crew from day one.</strong> Snails, hermit crabs, and conchs work full-time. A understocked tank in livestock terms is an overstocked tank in algae terms.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Replace bulbs every 12 months</strong> if you run T5 or metal halide. LED units are fine for 3 to 5 years.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Filter sock changes weekly.</strong> Letting socks sit a month is a nutrient release event.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Refugium with chaeto.</strong> A working refugium prevents most nuisance algae outbreaks from ever starting.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Test weekly, not when you notice problems.</strong> By the time you can see GHA, your phosphate has been elevated for weeks.</li>
          </ul>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Final Thought
          </h2>
          <p>
            Every reefer fights one of these eventually. Don&apos;t panic when you see it — identify it correctly first, then treat the cause. The biggest mistakes are misidentifying (treating cyano like algae, or dinos like cyano) and reacting too aggressively (a massive water change, dosing chemicals on day one). Slow, deliberate, and patient wins these battles.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Track your reef tank with NextUpReef — free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Log every test, watch nutrient trends, and let AI flag the conditions that trigger nuisance algae. iOS and Android.
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
