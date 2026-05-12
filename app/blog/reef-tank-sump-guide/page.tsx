import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reef Tank Sump Guide: Do You Need One, and How to Set It Up",
  description:
    "Complete guide to reef tank sumps — what they do, what size you need, how to plumb one, and whether your tank actually needs a sump or if an all-in-one will do.",
  alternates: {
    canonical: "https://nextupreef.com/blog/reef-tank-sump-guide",
  },
  openGraph: {
    title: "Reef Tank Sump Guide: Do You Need One, and How to Set It Up",
    description:
      "What sumps do, how to size and plumb them, and when you actually need one. Plus the equipment that goes inside a great sump.",
    url: "https://nextupreef.com/blog/reef-tank-sump-guide",
    images: [{ url: "/brand/splash2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Reef Tank Sump Guide: Do You Need One, and How to Set It Up",
  description:
    "What sumps do, how to size and plumb one, and what equipment to put inside a reef tank sump.",
  image: "https://nextupreef.com/brand/splash2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-05-09",
  dateModified: "2026-05-09",
  mainEntityOfPage: "https://nextupreef.com/blog/reef-tank-sump-guide",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I really need a sump for my reef tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. Tanks under 40 gallons usually do fine with an all-in-one setup. Tanks 40 gallons and up benefit significantly from a sump — added water volume, better filtration options, hidden equipment, and a place to put a refugium or skimmer. If your display is 75 gallons or more, you almost certainly want a sump.",
      },
    },
    {
      "@type": "Question",
      name: "How big should my reef tank sump be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aim for a sump that's roughly 25 to 33 percent of your display tank volume. A 75 gallon display pairs well with a 20 to 30 gallon sump. The bigger the better — more sump volume means more dilution buffer and more space for equipment.",
      },
    },
    {
      "@type": "Question",
      name: "What goes in a reef tank sump?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical reef sump has three chambers: a filter sock or skimmer chamber for the incoming water, a refugium or media chamber in the middle, and a return chamber where the return pump sits. Heaters, dosing lines, and the auto top-off sensor usually live in the return chamber.",
      },
    },
    {
      "@type": "Question",
      name: "What size return pump do I need for my sump?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aim for 3 to 5 times tank turnover through the sump. A 75 gallon display works well with a return pump rated for 600 to 900 gph after head loss. Don't go higher — sumps overflow when return pumps push more than the overflow can handle, and high return flow strips the skimmer's effectiveness.",
      },
    },
  ],
};

export default function ReefTankSumpPost() {
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
          Reef Tank Sump Guide
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Sump", "Equipment", "Tank Setup"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Reef Tank Sump Guide: Do You Need One, and How to Set It Up
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          May 9, 2026 · 9 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            A sump is the single most useful upgrade in reefkeeping. It hides equipment, adds water volume, gives you somewhere to put a skimmer and refugium, and dramatically improves tank stability. If you&apos;re running a tank 40 gallons or larger and you don&apos;t have a sump, you&apos;re leaving stability on the table.
          </p>
          <p>
            But sumps aren&apos;t mandatory — and they&apos;re not always the right answer. This guide walks through what a sump actually does, how to size and plumb one, and what equipment goes inside.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            What a Sump Actually Does
          </h2>
          <p>
            A sump is just a second tank that lives below your display. Water overflows from the display down to the sump, gets filtered and processed, then a return pump sends it back up. That&apos;s it — mechanically simple.
          </p>
          <p>
            What makes sumps valuable is everything you can do with that second tank:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>More water volume.</strong> A 30 gallon sump under a 75 gallon display gives you 105 gallons of water to dilute problems. Bigger volume means more forgiving chemistry.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Hides equipment.</strong> Skimmers, heaters, ATO sensors, dosing pumps, and probes all live in the sump instead of the display.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Better filtration.</strong> Filter socks, skimmer, media reactors, refugium — none of which fit comfortably in a display tank.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Easier water changes.</strong> Drain and refill from the sump without disturbing the display.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Stable water level.</strong> Evaporation happens in the sump, so your display surface stays consistent.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Refugium space.</strong> A macroalgae refugium for nutrient export and pod production — only possible with a sump (or AIO chamber).</li>
          </ul>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            When You Actually Need a Sump
          </h2>
          <p>
            Sumps aren&apos;t free — they cost money, take up cabinet space, require plumbing, and add complexity. Here&apos;s when they earn their place:
          </p>
          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li><strong style={{ color: "var(--text-light)" }}>Under 30 gallons:</strong> Skip the sump. An all-in-one design is simpler and just as effective.</li>
              <li><strong style={{ color: "var(--text-light)" }}>30 to 40 gallons:</strong> Either works. AIO is easier, sump opens upgrade paths.</li>
              <li><strong style={{ color: "var(--text-light)" }}>40 to 75 gallons:</strong> Sump strongly recommended. Equipment stops fitting in AIO chambers.</li>
              <li><strong style={{ color: "var(--text-light)" }}>75 gallons and up:</strong> Sump essentially required. The benefits compound at this scale.</li>
            </ul>
          </div>
          <p>
            For nano reef setups under 30 gallons, see our{" "}
            <Link href="/blog/nano-reef-tank-guide" style={{ color: "var(--reef)", fontWeight: 700 }}>
              nano reef tank guide
            </Link>
            {" "}— all-in-one is almost always the right call there.
          </p>

          <div style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}>
            <img
              src="/screenshots/phone-home-v2.png"
              alt="NextUpReef dashboard tracking parameters in a sump-equipped tank"
              style={{ width: "100%", maxWidth: "280px", borderRadius: "24px", boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}
            />
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            How to Size a Reef Tank Sump
          </h2>
          <p>
            The general rule: a sump should be 25 to 33 percent of your display tank volume. Bigger is always better. The two real constraints are:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Cabinet space.</strong> Measure the inside of your stand before buying.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Power outage capacity.</strong> When the power dies, water drains from the display into the sump until siphon breaks. The sump must hold that water without overflowing.</li>
          </ul>
          <p>
            Common pairings reefers run:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>40 gallon display:</strong> 10 to 20 gallon sump</li>
            <li><strong style={{ color: "var(--text-light)" }}>75 gallon display:</strong> 20 to 30 gallon sump</li>
            <li><strong style={{ color: "var(--text-light)" }}>120 gallon display:</strong> 30 to 40 gallon sump</li>
            <li><strong style={{ color: "var(--text-light)" }}>180+ gallon display:</strong> 50+ gallon sump</li>
          </ul>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            The Three-Chamber Sump Layout
          </h2>
          <p>
            Most reef sumps follow the same three-chamber design. Water enters one end, gets processed through the middle, and is returned from the far end.
          </p>
          <ol style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li>
              <strong style={{ color: "var(--text-light)" }}>Chamber 1: Inlet / Skimmer</strong>
              <br />
              Water from the display lands here. A filter sock catches debris (replace 1 to 2 times per week). Protein skimmer sits in this chamber where it gets the dirtiest water — that&apos;s where it&apos;s most effective.
            </li>
            <li>
              <strong style={{ color: "var(--text-light)" }}>Chamber 2: Refugium / Media</strong>
              <br />
              Middle chamber. Houses a refugium with chaeto, GFO or carbon reactors, biopellets, or just open water for added volume. Light it on a reverse photoperiod (on at night) to stabilize pH.
            </li>
            <li>
              <strong style={{ color: "var(--text-light)" }}>Chamber 3: Return</strong>
              <br />
              The return pump sits here, along with the heater, ATO sensor, dosing line outlets, and probes. This is also where evaporation happens, so the water level here drops as the tank evaporates.
            </li>
          </ol>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Plumbing: Overflow and Return
          </h2>
          <p>
            The plumbing connecting your display to your sump is the most important piece — get this wrong and you flood your house.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Overflow:</strong> Water leaves the display via an overflow box (either built-in to the tank or a hang-on-back). Most modern reef setups use a Herbie or Bean Animal overflow — both are silent designs that use two or three drain lines for safety. A single drain line is fragile and risks flooding when it clogs.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Return:</strong> Water pumps back up through a return line, usually ½&quot; or ¾&quot; PVC or flexible tubing. Add a check valve or a siphon break (a small hole drilled in the return line below the water surface) so water stops siphoning back when the pump shuts off.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Sizing the return pump:</strong> Aim for 3 to 5 times sump-through-display turnover. A 75 gallon display wants 600 to 900 gph at the return — accounting for head loss from the height your pump needs to push. DC pumps (Sicce Syncra, Reef Octopus Vario S) are quieter and adjustable. AC pumps are cheaper but louder.
          </p>
          <p>
            Don&apos;t oversize. A pump pushing too much through the sump strips the skimmer&apos;s contact time and risks overflowing the sump if the drain can&apos;t keep up.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            What Equipment Goes Inside
          </h2>
          <p>
            Standard sump equipment list for a 75 gallon mixed reef:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Filter sock or filter floss:</strong> Mechanical filtration on the inlet.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Protein skimmer:</strong> Sized for 1.5x your display volume (skim ratings are inflated). Reef Octopus, Bubble Magus, and Aquamaxx are popular.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Heater (or two):</strong> 200W for a 75 gallon. Two smaller heaters are safer than one large one — if one fails, you have backup.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Auto top-off (ATO):</strong> Optical sensor in the return chamber, controller, and a reservoir of RODI water. Tunze Osmolator and AutoAqua Smart ATO are industry standard.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Refugium light:</strong> Small full-spectrum LED on a reverse cycle.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Probes:</strong> Temperature, pH, ORP if you run a controller.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Dosing tubes:</strong> Output lines from your dosing pumps end above the return chamber.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Optional reactors:</strong> GFO, carbon, biopellet, or kalkwasser reactors plumbed in-line or sitting in the middle chamber.</li>
          </ul>

          <div style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}>
            <img
              src="/screenshots/phone-charts-v2.png"
              alt="Parameter trend charts in NextUpReef"
              style={{ width: "100%", maxWidth: "280px", borderRadius: "24px", boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}
            />
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Common Sump Mistakes
          </h2>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Sump too small for power outage capacity.</strong> When power dies, water siphons back to the lowest point. If your sump can&apos;t hold the drained water, you flood. Fill the sump partially and pull the plug to test before stocking.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Single drain overflow.</strong> A snail, fish, or piece of filter sock can clog a single drain. Always have a backup drain or use a Herbie / Bean Animal design.</li>
            <li><strong style={{ color: "var(--text-light)" }}>No check valve on the return.</strong> Water siphons back to the sump on power loss. A siphon-break hole drilled into the return line near the surface is more reliable than a check valve (check valves fail closed when they get gunked up).</li>
            <li><strong style={{ color: "var(--text-light)" }}>Return pump oversized.</strong> Causes overflow noise, strips skimmer effectiveness, and stresses the overflow.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Refugium too small.</strong> A 1-gallon refugium chamber filled with a tennis-ball of chaeto won&apos;t move the needle on nitrate. Make it as big as your sump allows.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Heater outside the sump.</strong> Heaters in the display are eyesores and dangerous if a fish brushes them. Move them to the return chamber.</li>
          </ul>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Why Tracking Matters with a Sump
          </h2>
          <p>
            A sump adds equipment — and equipment fails. Heaters stick on, return pumps lose impellers, ATO sensors get encrusted, skimmers overflow, refugium lights burn out. The more gear in your system, the more places for trouble to hide.
          </p>
          <p>
            NextUpReef tracks parameters and reminders together. Set reminders for filter sock changes, ATO reservoir refills, refugium harvests, and skimmer cleanings. Log parameters consistently and the app warns you when readings drift — usually before the corals show it.{" "}
            <Link href="/blog/how-to-track-saltwater-aquarium-parameters" style={{ color: "var(--reef)", fontWeight: 700 }}>
              See our parameter tracking guide →
            </Link>
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Final Thought
          </h2>
          <p>
            If you&apos;re building a reef tank 40 gallons or larger and you have cabinet space, add a sump. Every reefer who switches from AIO to a sumped system says the same thing: they wish they&apos;d done it sooner. The added water volume alone is worth it — chemistry stops being a daily fight and starts being a weekly maintenance task.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Track your reef tank with NextUpReef — free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Parameters, reminders, equipment, and AI advice — built for reef keepers who actually care about stability. iOS and Android.
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
