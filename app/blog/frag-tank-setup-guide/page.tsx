import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frag Tank Setup Guide: Coral Propagation Made Simple",
  description:
    "Complete guide to setting up a frag tank for coral propagation — sizing, lighting, flow, racks, plumbing into your display, and how to grow out coral frags for sale or trade.",
  alternates: {
    canonical: "https://nextupreef.com/blog/frag-tank-setup-guide",
  },
  openGraph: {
    title: "Frag Tank Setup Guide: Coral Propagation Made Simple",
    description:
      "How to set up a dedicated frag tank for coral propagation — sizing, lighting, racks, and shared sump plumbing.",
    url: "https://nextupreef.com/blog/frag-tank-setup-guide",
    images: [{ url: "/brand/splash2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Frag Tank Setup Guide: Coral Propagation Made Simple",
  description:
    "How to set up a dedicated frag tank for coral propagation — sizing, lighting, racks, and shared sump plumbing.",
  image: "https://nextupreef.com/brand/splash2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-05-09",
  dateModified: "2026-05-09",
  mainEntityOfPage: "https://nextupreef.com/blog/frag-tank-setup-guide",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a frag tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A frag tank is a shallow, dedicated tank used to grow out coral frags (cut pieces of coral) until they're large enough to sell, trade, or move to the display tank. Frag tanks are typically 20 to 40 gallons, around 8 to 10 inches deep, and use frag racks to hold many frags in organized rows.",
      },
    },
    {
      "@type": "Question",
      name: "What size should a frag tank be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most home frag tanks are 20 to 40 gallons with a wide, shallow footprint (around 30x18x10 inches). Shallow depth keeps frags close to the lights and easy to reach. Width matters more than gallons — you want surface area for frag racks, not water column depth.",
      },
    },
    {
      "@type": "Question",
      name: "Can I share a sump between my display and frag tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and it's the most common setup. Plumbing both tanks to one shared sump gives you more water volume, single point of filtration, and synchronized parameters. The frag tank gets the same water chemistry as your display, so corals can move between them without acclimation.",
      },
    },
    {
      "@type": "Question",
      name: "Do frag tanks need different lighting than display tanks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frag tanks need strong, even lighting across the entire footprint — not focused on one spot. Bar-style LED fixtures like Reefi Uno, ReefBrite XHO, or AI Hydra spread light evenly across racks of frags. PAR should match what corals will see in the display so frags acclimate fast when moved.",
      },
    },
  ],
};

export default function FragTankPost() {
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
          Frag Tank Setup Guide
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Frag Tank", "Coral Propagation", "Tank Setup"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Frag Tank Setup Guide: Coral Propagation Made Simple
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          May 9, 2026 · 9 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            A frag tank is the upgrade most established reefers eventually add. Once your display tank is full of corals and you&apos;ve got more frags than display real estate, a dedicated frag system lets you grow out cuts, trade with other reefers, sell encrusted frags, and quarantine new arrivals before they hit the display.
          </p>
          <p>
            This guide covers how to size a frag tank, what equipment matters most, how to plumb it into a shared sump, and the workflow that turns a reef tank from a hobby into a low-key side income.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            What a Frag Tank Is For
          </h2>
          <p>
            A frag tank serves several purposes beyond just growing coral:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Growing out frags:</strong> A coral cutting needs 4 to 12 weeks to encrust on its plug and become a sellable frag.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Quarantine for new corals:</strong> Every new coral can introduce pests (aiptasia, bryopsis, montipora-eating nudibranchs). A frag tank gives you a place to observe and treat before adding to display.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Holding tank for trades and sales:</strong> A clean, well-lit display where buyers can see your stock at meetups.</li>
            <li><strong style={{ color: "var(--text-light)" }}>SPS experimentation:</strong> Try new species in the frag tank before committing the display. If it doesn&apos;t do well, you haven&apos;t risked the main reef.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Recovery tank:</strong> Stressed corals from a tank crash can heal in a frag tank with optimal conditions.</li>
          </ul>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Tank Dimensions That Actually Work
          </h2>
          <p>
            Frag tanks are wide and shallow — almost the opposite of a display tank. The shape exists for a reason: shallow water keeps frags closer to the lights, and wide footprint gives you surface area for organizing rows.
          </p>
          <div style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Common Frag Tank Sizes:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li><strong style={{ color: "var(--text-light)" }}>Small (20 gallon):</strong> 24x18x10. Good for hobbyists with 1 to 2 racks worth of frags.</li>
              <li><strong style={{ color: "var(--text-light)" }}>Medium (30 gallon):</strong> 30x18x10. Sweet spot — 4 to 5 racks of frags.</li>
              <li><strong style={{ color: "var(--text-light)" }}>Large (40 gallon frag tank):</strong> 36x18x10. Industry standard. Holds 6+ racks.</li>
              <li><strong style={{ color: "var(--text-light)" }}>Wide/shallow (50+):</strong> 48x24x10 or bigger for commercial-style propagation.</li>
            </ul>
          </div>
          <p>
            The 36x18x10 &quot;40 gallon frag tank&quot; is the most popular size for serious hobbyists. Crystal Dynamics, Glass Cages, and Marineland all make standard versions. Custom acrylic in the same dimensions runs $400 to $700.
          </p>
          <p>
            Avoid frag tanks deeper than 12 inches. Deeper water means weaker light reaching frags and harder maintenance reach.
          </p>

          <div style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}>
            <img
              src="/screenshots/phone-home-v2.png"
              alt="NextUpReef tank tracking for a frag tank"
              style={{ width: "100%", maxWidth: "280px", borderRadius: "24px", boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}
            />
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Plumbing Into a Shared Sump
          </h2>
          <p>
            The most common frag tank setup shares a sump with the main display. This gives you bigger combined water volume, single skimmer/filtration, and synchronized parameters — frags grow in the same chemistry they&apos;ll move into.
          </p>
          <p>
            The plumbing is straightforward:
          </p>
          <ol style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li>One return line from the shared sump splits into two paths — one feeds the display, one feeds the frag tank. A ball valve on each branch lets you balance flow between them.</li>
            <li>Each tank has its own overflow that drains back to the same sump.</li>
            <li>Set both tanks to the same target temperature with one heater in the sump.</li>
            <li>The frag tank doesn&apos;t need a skimmer, dosing, or ATO — those all live on the shared sump.</li>
          </ol>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Important:</strong> the frag tank&apos;s water level needs to be slightly above the display&apos;s water level so it doesn&apos;t siphon dry during a power outage. Either elevate the frag tank a few inches, or install a siphon-break hole in the frag&apos;s return line.
          </p>
          <p>
            If you can&apos;t share a sump, a standalone frag tank works too — but you&apos;ll need its own skimmer, heater, and dosing. Most reefers find the standalone approach more maintenance for less benefit.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Lighting: Even Coverage Matters
          </h2>
          <p>
            Frag tank lighting is about even coverage, not intensity peaks. A standard display light shines hardest in the middle and dim at the edges — that&apos;s fine for a display where corals are placed by intensity preference. In a frag tank, you want every spot of every rack to get roughly the same PAR.
          </p>
          <p>
            Best lighting options for frag tanks:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Bar-style LEDs:</strong> Reefi Uno, ReefBrite XHO Pro, Kessil H160 (in array), Aquaillumination Blade. Spread light evenly along the length of the tank. Best for 36+ inch frag tanks.</li>
            <li><strong style={{ color: "var(--text-light)" }}>T5 fixtures:</strong> ATI, Aquatic Life, GeisselMann. Six 39W bulbs over a 36 inch tank gives flat, even lighting. Cheaper than LED bars but bulbs need replacing yearly.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Hybrid (T5 + LED):</strong> Best of both. T5 for spread, LED for shimmer and color enhancement.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Multiple puck LEDs in array:</strong> Two or three AI Prime 16HD or Kessil A360X covering the tank evenly. Common DIY approach.</li>
          </ul>
          <p>
            Target PAR for frags: 150 to 300 PAR depending on the corals you propagate. SPS frags want the high end, LPS and softies the low. A PAR meter at the rack level lets you place corals correctly.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Flow Setup
          </h2>
          <p>
            Frag tanks need different flow than displays. Strong flow is good for SPS but blasts soft corals and lifts plugs off racks. The fix is multi-directional flow with low overall velocity:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li>Two small powerheads (Hygger, Sicce Voyager Nano, Tunze NanoStream) angled across the tank from opposite sides.</li>
            <li>Run on a wave maker or alternating timer so flow direction changes every few minutes.</li>
            <li>Target around 20x tank turnover combined — for a 30 gallon frag tank, that&apos;s 600 gph combined powerhead + return flow.</li>
            <li>Keep frag racks elevated 1 to 2 inches above the tank bottom so flow gets underneath. Stagnant zones grow algae fast.</li>
          </ul>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Frag Racks and Organization
          </h2>
          <p>
            Frag racks hold plugs in organized rows so you can see what you have, track growth, and easily remove individual frags. Two main options:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Plastic eggcrate racks:</strong> Cheap (under $20), DIY-friendly. Cut to fit, drop frag plugs in the holes. Replace every couple years as they discolor.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Acrylic frag racks:</strong> Reefi or BRS sell these. More expensive but cleaner look, easier to lift out for water changes.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Magnetic frag racks:</strong> Stick to the glass. Save floor space, great for grouping by species.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Dedicated SPS shelf:</strong> Most active reefers separate SPS frags (higher light, higher flow) from softies and LPS using elevation differences.</li>
          </ul>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Tracking Frag Growth and Health
          </h2>
          <p>
            The reason most reefers buy frags from established hobbyists instead of fish stores: documented history. A frag with photo evidence of growth and parameter logs from the parent colony is worth significantly more than a mystery frag.
          </p>
          <p>
            Track each frag with:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <li>Species name and morph (e.g., &quot;ASD Rainbow Millepora&quot;)</li>
            <li>Date cut and parent colony</li>
            <li>Photo on arrival and monthly progress photos</li>
            <li>Position in the tank, PAR at frag, flow direction</li>
            <li>Any treatments (dips, pest concerns)</li>
            <li>Parameters at the time of the frag for reference if it later struggles</li>
          </ul>
          <p>
            NextUpReef tracks all of this — log your tank parameters, photos, and livestock entries (each frag can be a livestock entry). When a frag thrives, you can correlate it back to the conditions that worked. When one melts, you can see what changed.{" "}
            <Link href="/blog/adding-first-corals" style={{ color: "var(--reef)", fontWeight: 700 }}>
              See our guide on adding your first corals →
            </Link>
          </p>

          <div style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}>
            <img
              src="/screenshots/phone-reef-hub-v2.png"
              alt="Tracking corals and frags in NextUpReef"
              style={{ width: "100%", maxWidth: "280px", borderRadius: "24px", boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}
            />
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Common Frag Tank Mistakes
          </h2>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Tank too deep.</strong> 18+ inch deep frag tanks waste light and make rack maintenance miserable. Stay under 12 inches.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Skipping quarantine.</strong> Frag tanks are perfect for QT but reefers often skip it and dump new corals straight in. Pest outbreaks follow.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Bad lighting placement.</strong> A single puck LED over a 36-inch frag tank leaves the edges in dim shadow. Corals grow toward the light unevenly.</li>
            <li><strong style={{ color: "var(--text-light)" }}>No labels.</strong> A rack of 30 unlabeled zoa frags is worth less than 5 labeled ones. Mark every plug.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Overcrowded racks.</strong> Frags growing into each other lose their resale shape. Space frags 1.5 to 2 inches apart.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Insufficient flow under racks.</strong> Detritus builds up and triggers cyano. Elevate racks slightly.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Not budgeting time for water changes.</strong> A frag system means more total tank volume — and more water to mix. Plan for it.</li>
          </ul>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            The Economics of Frag Propagation
          </h2>
          <p>
            A few things hobbyists discover after running a frag tank for a year:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li>SPS frags sell faster than LPS or softies because SPS keepers cycle inventory more frequently.</li>
            <li>Named, documented frags (with photos of the parent colony) sell for 3 to 5x mystery frags of the same coral.</li>
            <li>Local frag swaps and reef club meetings move more inventory than online sales — shipping eats margin and adds risk.</li>
            <li>Reputation matters: deliver healthy frags consistently for 6 months and you become someone&apos;s preferred source.</li>
            <li>The frag tank usually pays for itself in 12 to 18 months for active hobbyists.</li>
          </ul>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Final Thought
          </h2>
          <p>
            A frag tank turns reefkeeping from a one-way money pit into a system that pays you back. The setup isn&apos;t hard: 30 to 40 gallons, bar-style lighting, plumbed into the shared sump, modest flow, frag racks. The discipline is in tracking — labeling every frag, logging conditions, and treating the tank like a propagation system instead of a second display.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Track your frag tank with NextUpReef — free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Log parameters, photograph frag growth, and keep your propagation history organized. iOS and Android.
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
