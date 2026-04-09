import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Set Up a Reef Tank: A Beginner's Complete Guide — NextUpReef",
  description:
    "Step-by-step guide to setting up your first saltwater reef tank. Equipment checklist, salinity targets, rock types, and the one mistake every new reefer makes on day one.",
  alternates: {
    canonical: "https://nextupreef.com/blog/tank-setup",
  },
  openGraph: {
    title: "How to Set Up a Reef Tank: A Beginner's Complete Guide",
    description:
      "Step-by-step guide to setting up your first saltwater reef tank. Equipment checklist, salinity targets, rock types, and the one mistake every new reefer makes on day one.",
    url: "https://nextupreef.com/blog/tank-setup",
  },
};

export default function TankSetupPost() {
  return (
    <section className="container" style={{ paddingTop: "80px", paddingBottom: "100px" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>

        {/* Breadcrumb */}
        <div style={{ marginBottom: "24px", display: "flex", gap: "8px", alignItems: "center" }}>
          <Link href="/blog" style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", textDecoration: "none" }}>
            Blog
          </Link>
          <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>→</span>
          <span style={{ color: "var(--reef)", fontSize: "14px", fontWeight: "700" }}>Tank Setup</span>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Beginner Guide", "Tank Setup", "Year 1 Journey"].map(tag => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44, 196, 214, 0.08)", border: "1px solid rgba(44, 196, 214, 0.12)",
              color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        {/* Title */}
        <h1 style={{ fontSize: "42px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px", color: "var(--text-light)" }}>
          How to Set Up a Reef Tank: A Beginner's Complete Guide
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "16px", fontWeight: "700", marginBottom: "40px" }}>
          April 2026 · 8 min read
        </p>

        {/* Intro */}
        <p style={{ fontSize: "18px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          Setting up a reef tank for the first time is one of the most exciting things you can do as a hobbyist — and one of the easiest to get wrong. Most beginners don't fail because reef keeping is too hard. They fail because nobody told them what to do on day one.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "48px" }}>
          This guide walks you through Phase 1 of the reef keeping journey: getting your tank filled, your equipment running, and your rock placed — correctly — before a single living thing goes in the water.
        </p>

        {/* Section: What you actually need */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          What You Actually Need (And What You Don't)
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          Reef keeping has a reputation for being expensive, and that reputation is partially earned. But a lot of new reefers overspend on day one because they buy gear they don't need yet. Here's what actually matters at setup:
        </p>

        {/* Equipment table */}
        <div style={{
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px", overflow: "hidden", marginBottom: "32px",
        }}>
          {[
            { item: "Heater", note: "1W per gallon minimum. Two smaller heaters is safer than one large one — redundancy matters.", required: true },
            { item: "Return pump / powerhead", note: "Target 10–20x total volume turnover per hour. Jebao, Sicce, and Reef Octopus are popular choices at various price points.", required: true },
            { item: "Reef LED light", note: "Don't turn it on yet — but you need it installed. AI Hydra, Kessil, and Radion are the gold standards.", required: true },
            { item: "Protein skimmer", note: "Optional on tanks under 30 gallons with frequent water changes. Strongly recommended at 40g+.", required: false },
            { item: "Refractometer or salinity probe", note: "A $20 refractometer works fine for beginners. Calibrate it before use.", required: true },
            { item: "Liquid test kit", note: "API Master Saltwater kit covers the basics. Salifert kits are more accurate for individual params.", required: true },
            { item: "RODI unit or RODI water", note: "Tap water contains phosphates, silicates, and chloramines that will fuel algae blooms. RODI water only.", required: true },
          ].map((row, idx) => (
            <div key={row.item} style={{
              display: "flex", gap: "16px", padding: "16px 20px",
              borderTop: idx > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
              alignItems: "flex-start",
            }}>
              <div style={{ minWidth: "20px", marginTop: "3px" }}>
                {row.required
                  ? <span style={{ color: "var(--reef)", fontWeight: "900", fontSize: "14px" }}>✓</span>
                  : <span style={{ color: "var(--text-muted)", fontWeight: "900", fontSize: "14px" }}>○</span>}
              </div>
              <div>
                <p style={{ color: "var(--text-light)", fontWeight: "800", fontSize: "15px", margin: "0 0 4px 0" }}>
                  {row.item} {!row.required && <span style={{ color: "var(--text-muted)", fontWeight: "600", fontSize: "13px" }}>(optional)</span>}
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>{row.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* App screenshot placeholder */}
        <div style={{
          background: "rgba(44, 196, 214, 0.06)", border: "1px solid rgba(44, 196, 214, 0.15)",
          borderRadius: "16px", padding: "32px", marginBottom: "48px", textAlign: "center",
        }}>
          <p style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: "700", marginBottom: "8px", letterSpacing: "0.05em" }}>
            [SCREENSHOT: NextUpReef equipment tab showing equipment list with heater, pump, and light added]
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
            <strong style={{ color: "var(--text-light)" }}>NextUpReef</strong> lets you log all your equipment in one place — brand, model, wattage, and when you added it. Never forget what's running in your tank.
          </p>
        </div>

        {/* Section: Dry rock vs live rock */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          Dry Rock vs. Live Rock: Which Should You Choose?
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          This is one of the first real decisions you'll make, and it affects how your tank cycles and what pests you might introduce.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "32px" }}>
          {[
            {
              title: "Dry Rock (Dead Rock)", emoji: "🪨",
              pros: ["No hitchhikers or pests", "No aiptasia, no mantis shrimp", "Cycles predictably with ammonia dosing"],
              cons: ["Needs ammonia source to start cycle", "Slower cycle without live bacteria", "No natural biodiversity initially"],
            },
            {
              title: "Live Rock", emoji: "🌿",
              pros: ["Existing bacteria speeds cycle", "Natural biodiversity from the start", "May cycle without additional dosing"],
              cons: ["Risk of hitchhikers and pests", "Inspect carefully before adding", "Quality varies by source"],
            },
          ].map(card => (
            <div key={card.title} style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px", padding: "20px",
            }}>
              <p style={{ fontSize: "20px", marginBottom: "8px" }}>{card.emoji}</p>
              <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "16px", marginBottom: "12px" }}>{card.title}</p>
              <div style={{ marginBottom: "12px" }}>
                {card.pros.map(p => (
                  <p key={p} style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: "1.6", margin: "0 0 4px 0" }}>
                    <span style={{ color: "#22c55e", fontWeight: "900" }}>+</span> {p}
                  </p>
                ))}
              </div>
              <div>
                {card.cons.map(c => (
                  <p key={c} style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: "1.6", margin: "0 0 4px 0" }}>
                    <span style={{ color: "#ef4444", fontWeight: "900" }}>−</span> {c}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "48px" }}>
          For most beginners we recommend dry rock. The cycle takes a little longer, but you avoid introducing pests that can plague your tank for years. Seed it with a small bottle of live bacteria (Dr. Tim's One & Only or FritzZyme 900) and you'll cycle just as fast as live rock.
        </p>

        {/* Section: Salinity */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          Getting Salinity Right From Day One
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          Salinity — measured as specific gravity (SG) — is the first parameter you'll dial in, and the one that matters most before any life enters your tank.
        </p>

        <div style={{
          background: "rgba(44, 196, 214, 0.06)", border: "2px solid rgba(44, 196, 214, 0.2)",
          borderRadius: "16px", padding: "24px", marginBottom: "24px",
        }}>
          <p style={{ color: "var(--reef)", fontWeight: "900", fontSize: "14px", letterSpacing: "0.05em", marginBottom: "8px" }}>TARGET SALINITY</p>
          <p style={{ color: "var(--text-light)", fontSize: "32px", fontWeight: "900", margin: "0 0 8px 0" }}>1.024 – 1.026 SG</p>
          <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
            Natural seawater is 1.025. Staying in this range keeps fish, inverts, and corals comfortable. Avoid going above 1.026 or below 1.023.
          </p>
        </div>

        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          Mix your saltwater in a separate container before adding it to the tank — never add dry salt directly. Use your refractometer to check before you pour. One common mistake: mixing saltwater in the tank itself causes hot spots where salt hasn't fully dissolved, which can stress equipment and leave residue on glass.
        </p>

        <div style={{
          background: "rgba(239, 68, 68, 0.06)", border: "1px solid rgba(239, 68, 68, 0.15)",
          borderRadius: "12px", padding: "16px", marginBottom: "48px",
          display: "flex", gap: "12px", alignItems: "flex-start",
        }}>
          <span style={{ fontSize: "20px", flexShrink: 0 }}>⚠️</span>
          <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
            <strong style={{ color: "var(--text-light)" }}>Never use tap water.</strong> Tap water contains chloramines, phosphates, nitrates, and silicates that will fuel persistent algae blooms. Always use RODI (reverse osmosis deionized) water — either from a home unit or purchased from your local fish store.
          </p>
        </div>

        {/* App screenshot placeholder */}
        <div style={{
          background: "rgba(44, 196, 214, 0.06)", border: "1px solid rgba(44, 196, 214, 0.15)",
          borderRadius: "16px", padding: "32px", marginBottom: "48px", textAlign: "center",
        }}>
          <p style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: "700", marginBottom: "8px", letterSpacing: "0.05em" }}>
            [SCREENSHOT: NextUpReef log screen showing salinity reading of 1.025 logged with green "in range" indicator]
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
            Log your first salinity reading in <strong style={{ color: "var(--text-light)" }}>NextUpReef</strong> and instantly see if you're in range. The app tracks your target of 1.024–1.026 and flags anything outside it.
          </p>
        </div>

        {/* Section: What NOT to do */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          The Biggest Mistakes New Reefers Make at Setup
        </h2>

        {[
          {
            title: "Adding fish or corals before cycling",
            body: "This is the number one tank killer. Your tank needs to establish a colony of beneficial bacteria before anything alive goes in. Skip the cycle and you'll likely lose everything within days. We cover the cycle in detail in Part 2 of this series.",
          },
          {
            title: "Turning the lights on immediately",
            body: "Your tank has no algae-eating organisms yet. Turning lights on before you have a cleanup crew is an invitation for a diatom and hair algae explosion. Keep lights off until you're ready to add your first cleanup crew in Phase 3.",
          },
          {
            title: "Using tap water",
            body: "Even in areas with 'good' tap water, municipal water contains additives that will cause problems in a reef. Phosphates from tap water fuel persistent algae blooms that can last months. RODI water only.",
          },
          {
            title: "Skimping on flow",
            body: "Reef tanks need significantly more water movement than freshwater tanks. Aim for 10–20x your total water volume in turnover per hour. Dead spots accumulate detritus and create anaerobic zones.",
          },
          {
            title: "Not tracking anything",
            body: "New reefers often go weeks without logging a single parameter, then wonder why something went wrong. The pattern matters as much as the number — a salinity reading of 1.024 means nothing without knowing it was 1.026 three days ago.",
          },
        ].map((item, idx) => (
          <div key={idx} style={{
            display: "flex", gap: "16px", marginBottom: "24px", alignItems: "flex-start",
          }}>
            <div style={{
              minWidth: "28px", height: "28px", borderRadius: "50%",
              background: "rgba(239, 68, 68, 0.12)", border: "1px solid rgba(239, 68, 68, 0.2)",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px",
            }}>
              <span style={{ color: "#ef4444", fontWeight: "900", fontSize: "13px" }}>{idx + 1}</span>
            </div>
            <div>
              <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "16px", marginBottom: "6px" }}>{item.title}</p>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>{item.body}</p>
            </div>
          </div>
        ))}

        {/* App CTA */}
        <div style={{
          background: "rgba(44, 196, 214, 0.06)", border: "1px solid rgba(44, 196, 214, 0.15)",
          borderRadius: "16px", padding: "32px", marginBottom: "48px", textAlign: "center",
        }}>
          <p style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: "700", marginBottom: "8px", letterSpacing: "0.05em" }}>
            [SCREENSHOT: NextUpReef New Tank Guide dashboard card showing Phase 1 checklist with Tank Setup steps]
          </p>
          <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "18px", marginBottom: "8px" }}>
            Track every step with the New Tank Guide
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.6", marginBottom: "20px" }}>
            NextUpReef's Year 1 Journey walks you through every phase of setting up a new reef tank — with checklists, warnings, and automatic detection when you've completed a step.
          </p>
          <a
            href="https://apps.apple.com/app/id6760728959"
            style={{
              display: "inline-block", background: "var(--reef)", color: "#000",
              fontWeight: "900", fontSize: "15px", padding: "12px 28px",
              borderRadius: "999px", textDecoration: "none",
            }}
          >
            Download NextUpReef Free →
          </a>
        </div>

        {/* Section: Setup checklist */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          Phase 1 Setup Checklist
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "20px" }}>
          Before you move on to cycling, make sure you've completed everything on this list:
        </p>
        <div style={{
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px", padding: "8px 0", marginBottom: "48px",
        }}>
          {[
            "Tank filled with RODI water mixed with reef salt",
            "Salinity measured and confirmed at 1.024–1.026 SG",
            "All equipment installed and running — heater, pump, powerheads",
            "Heater confirmed at 78°F with a separate thermometer",
            "Rock and sand placed (dry or live)",
            "Lights installed but OFF",
            "Protein skimmer running (if using one)",
            "Test kit and refractometer on hand",
            "Ammonia source ready for dosing (dry rock only)",
          ].map((item, idx) => (
            <div key={idx} style={{
              display: "flex", gap: "12px", padding: "12px 20px",
              borderTop: idx > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
              alignItems: "center",
            }}>
              <span style={{ color: "var(--reef)", fontWeight: "900", fontSize: "16px", flexShrink: 0 }}>□</span>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", margin: 0 }}>{item}</p>
            </div>
          ))}
        </div>

        {/* Next up */}
        <div style={{
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px", padding: "28px", marginBottom: "48px",
        }}>
          <p style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: "700", marginBottom: "8px", letterSpacing: "0.05em" }}>NEXT IN THE SERIES</p>
          <Link href="/blog/cycling-your-tank" style={{ textDecoration: "none" }}>
            <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "20px", marginBottom: "8px" }}>
              How to Cycle a Reef Tank →
            </p>
          </Link>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.6", margin: 0 }}>
            Your tank is set up — now the real waiting begins. Learn how the nitrogen cycle works, how to know when you're cycled, and the most common mistakes that extend the cycle unnecessarily.
          </p>
        </div>

        {/* Schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "How to Set Up a Reef Tank: A Beginner's Complete Guide",
              description: "Step-by-step guide to setting up your first saltwater reef tank. Equipment checklist, salinity targets, rock types, and the one mistake every new reefer makes on day one.",
              author: { "@type": "Organization", name: "NextUpReef" },
              publisher: { "@type": "Organization", name: "NextUpReef", url: "https://nextupreef.com" },
              url: "https://nextupreef.com/blog/tank-setup",
              datePublished: "2026-04-01",
            }),
          }}
        />
      </div>
    </section>
  );
}
