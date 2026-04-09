import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Cycle a Reef Tank: The Complete Beginner's Guide — NextUpReef",
  description:
    "Everything you need to know about cycling a new saltwater reef tank. How the nitrogen cycle works, how long it takes, what to test, and how to know when you're done.",
  alternates: {
    canonical: "https://nextupreef.com/blog/cycling-your-tank",
  },
  openGraph: {
    title: "How to Cycle a Reef Tank: The Complete Beginner's Guide",
    description:
      "Everything you need to know about cycling a new saltwater reef tank. How the nitrogen cycle works, how long it takes, what to test, and how to know when you're done.",
    url: "https://nextupreef.com/blog/cycling-your-tank",
  },
};

export default function CyclingPost() {
  return (
    <section className="container" style={{ paddingTop: "80px", paddingBottom: "100px" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>

        {/* Breadcrumb */}
        <div style={{ marginBottom: "24px", display: "flex", gap: "8px", alignItems: "center" }}>
          <Link href="/blog" style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", textDecoration: "none" }}>
            Blog
          </Link>
          <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>→</span>
          <span style={{ color: "var(--reef)", fontSize: "14px", fontWeight: "700" }}>Cycling Your Tank</span>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Beginner Guide", "The Cycle", "Year 1 Journey", "Water Chemistry"].map(tag => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44, 196, 214, 0.08)", border: "1px solid rgba(44, 196, 214, 0.12)",
              color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        {/* Title */}
        <h1 style={{ fontSize: "42px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px", color: "var(--text-light)" }}>
          How to Cycle a Reef Tank: The Complete Beginner's Guide
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "16px", fontWeight: "700", marginBottom: "40px" }}>
          April 2026 · 9 min read
        </p>

        {/* Intro */}
        <p style={{ fontSize: "18px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          The nitrogen cycle is the single most important concept in reef keeping. It's also the most misunderstood — and skipping it, rushing it, or misreading it is responsible for more dead fish and crashed tanks than any other mistake beginners make.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "48px" }}>
          The good news: you don't need to understand organic chemistry to cycle a tank successfully. You just need to know what's happening, what to test, and what the numbers mean. This guide covers all of it.
        </p>

        {/* Section: What is the nitrogen cycle */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          What Is the Nitrogen Cycle (And Why Does It Matter)?
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          When organic matter breaks down in your tank — fish waste, uneaten food, dead organisms — it produces ammonia (NH3). Ammonia is highly toxic to fish and invertebrates at even low concentrations. A tank without an established bacterial colony will accumulate ammonia fast enough to kill fish within days.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          The nitrogen cycle is the process by which two different species of beneficial bacteria colonize your rock and sand, and convert that toxic ammonia into progressively less harmful compounds:
        </p>

        {/* Cycle diagram */}
        <div style={{
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px", padding: "24px", marginBottom: "32px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { label: "Ammonia (NH3)", sub: "From fish waste / dosing", color: "#ef4444", danger: "Extremely toxic" },
              { arrow: "→ Nitrosomonas bacteria →" },
              { label: "Nitrite (NO2)", sub: "Toxic intermediate", color: "#f97316", danger: "Very toxic" },
              { arrow: "→ Nitrospira bacteria →" },
              { label: "Nitrate (NO3)", sub: "Safe end product", color: "#22c55e", danger: "Manageable with WCs" },
            ].map((item, idx) => (
              "arrow" in item ? (
                <p key={idx} style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: "700", textAlign: "center" }}>{item.arrow}</p>
              ) : (
                <div key={idx} style={{
                  background: `${item.color}15`, border: `1px solid ${item.color}30`,
                  borderRadius: "12px", padding: "14px 18px", textAlign: "center", minWidth: "140px",
                }}>
                  <p style={{ color: item.color, fontWeight: "900", fontSize: "15px", margin: "0 0 4px 0" }}>{item.label}</p>
                  <p style={{ color: "var(--text-muted)", fontSize: "12px", margin: "0 0 6px 0" }}>{item.sub}</p>
                  <p style={{ color: item.color, fontSize: "11px", fontWeight: "700", margin: 0 }}>{item.danger}</p>
                </div>
              )
            ))}
          </div>
        </div>

        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          <strong style={{ color: "var(--text-light)" }}>Nitrosomonas</strong> are the first bacteria to establish. They consume ammonia and produce nitrite as a byproduct. Then <strong style={{ color: "var(--text-light)" }}>Nitrospira</strong> colonize and convert nitrite to nitrate. Nitrate is relatively harmless at low levels and is removed through regular water changes.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "48px" }}>
          When ammonia and nitrite both drop to zero — and you can detect nitrate — your tank is cycled. That's the finish line.
        </p>

        {/* Section: How long does cycling take */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          How Long Does Cycling Take?
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          Honestly? It depends. Here's a realistic breakdown:
        </p>
        <div style={{
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px", overflow: "hidden", marginBottom: "32px",
        }}>
          {[
            { method: "Dry rock + ammonia dosing only", time: "4–8 weeks", note: "The slowest path. Bacteria have to establish from scratch." },
            { method: "Dry rock + ammonia + bottled bacteria", time: "2–4 weeks", note: "Dr. Tim's One & Only or FritzZyme 900 significantly speeds things up." },
            { method: "Live rock from established tank", time: "1–3 weeks", note: "Fastest option, but risk of introducing pests." },
            { method: "Mixed (dry rock + live rock or rubble)", time: "2–4 weeks", note: "Good balance of speed and pest control." },
          ].map((row, idx) => (
            <div key={row.method} style={{
              padding: "16px 20px", borderTop: idx > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", flexWrap: "wrap" }}>
                <p style={{ color: "var(--text-light)", fontWeight: "800", fontSize: "15px", margin: "0 0 4px 0", flex: 1 }}>{row.method}</p>
                <span style={{
                  color: "var(--reef)", fontWeight: "900", fontSize: "13px",
                  background: "rgba(44, 196, 214, 0.08)", padding: "3px 10px", borderRadius: "999px",
                  flexShrink: 0,
                }}>{row.time}</span>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>{row.note}</p>
            </div>
          ))}
        </div>

        <div style={{
          background: "rgba(249, 115, 22, 0.06)", border: "1px solid rgba(249, 115, 22, 0.15)",
          borderRadius: "12px", padding: "16px", marginBottom: "48px",
          display: "flex", gap: "12px", alignItems: "flex-start",
        }}>
          <span style={{ fontSize: "20px", flexShrink: 0 }}>⏳</span>
          <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
            <strong style={{ color: "var(--text-light)" }}>A slow cycle is a normal cycle.</strong> If you're at week 5 and still seeing nitrite, that's not a problem — it means bacteria are still establishing. Don't do a large water change, don't add fish, don't panic. Just keep testing.
          </p>
        </div>

        {/* Section: What to test and how often */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          What to Test and How Often
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          During the cycle you need to test three parameters: ammonia, nitrite, and nitrate. Test every 2–3 days. More often when you think you're approaching the finish line.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "32px" }}>
          {[
            { param: "Ammonia (NH3)", target: "0 ppm", cycleTarget: "Should spike then drop to 0", color: "#ef4444", icon: "⚗️" },
            { param: "Nitrite (NO2)", target: "0 ppm", cycleTarget: "Will spike after NH3 drops", color: "#f97316", icon: "⚠️" },
            { param: "Nitrate (NO3)", target: "> 0 ppm", cycleTarget: "Rising NO3 = cycle working", color: "#22c55e", icon: "✅" },
          ].map(p => (
            <div key={p.param} style={{
              background: `${p.color}08`, border: `1px solid ${p.color}25`,
              borderRadius: "14px", padding: "16px", textAlign: "center",
            }}>
              <p style={{ fontSize: "24px", margin: "0 0 8px 0" }}>{p.icon}</p>
              <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "14px", marginBottom: "6px" }}>{p.param}</p>
              <p style={{ color: p.color, fontWeight: "900", fontSize: "18px", marginBottom: "6px" }}>{p.target}</p>
              <p style={{ color: "var(--text-muted)", fontSize: "12px", lineHeight: "1.5", margin: 0 }}>{p.cycleTarget}</p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          <strong style={{ color: "var(--text-light)" }}>Don't use test strips.</strong> They're not accurate enough to track a cycle. You need a liquid test kit — API Master Saltwater is fine for beginners, Salifert kits are more accurate. The difference between 0.5 ppm and 0 ppm of ammonia matters enormously when you're deciding whether it's safe to add fish.
        </p>

        {/* App screenshot placeholder */}
        <div style={{
          background: "rgba(44, 196, 214, 0.06)", border: "1px solid rgba(44, 196, 214, 0.15)",
          borderRadius: "16px", padding: "32px", marginBottom: "48px", textAlign: "center",
        }}>
          <p style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: "700", marginBottom: "8px", letterSpacing: "0.05em" }}>
            [SCREENSHOT: NextUpReef log screen showing NH3, NO2, NO3 fields with readings entered]
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
            <strong style={{ color: "var(--text-light)" }}>NextUpReef</strong> automatically adds ammonia, nitrite, and nitrate to your log screen during Phase 2 of the New Tank Guide — so you never forget what to test during the cycle.
          </p>
        </div>

        {/* Section: Step by step dry rock */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          Step-by-Step: Cycling With Dry Rock
        </h2>
        {[
          {
            step: 1,
            title: "Dose ammonia to 1–2 ppm",
            body: "Use pure ammonium chloride solution — Dr. Tim's Ammonium Chloride is widely available. Add enough to reach 1–2 ppm, then test immediately to confirm. Don't exceed 2 ppm — high ammonia can actually slow bacterial establishment.",
          },
          {
            step: 2,
            title: "Add bottled bacteria",
            body: "Dr. Tim's One & Only or FritzZyme 900 contain live nitrifying bacteria. Shake well and add the full bottle. This seeds your tank with the bacteria you need and can cut weeks off your cycle time.",
          },
          {
            step: 3,
            title: "Test every 2–3 days",
            body: "Log every reading. You're watching for: ammonia to climb, then slowly drop. Nitrite to appear and climb as ammonia drops. Then nitrite to drop and nitrate to appear. The pattern tells you where you are in the cycle.",
          },
          {
            step: 4,
            title: "Redose if ammonia drops below 0.5 ppm before nitrite spikes",
            body: "Bacteria need a food source to establish. If your ammonia is already dropping to near zero before you see any nitrite rise, redose ammonia back to 1–2 ppm. Don't let it starve the bacteria colony you're trying to grow.",
          },
          {
            step: 5,
            title: "Wait for both NH3 and NO2 to hit zero",
            body: "This is the moment. Log a reading of 0 ammonia and 0 nitrite on the same day, with some nitrate present. Your tank is cycled. Wait 24–48 hours and test again to confirm it holds before adding any livestock.",
          },
        ].map(item => (
          <div key={item.step} style={{
            display: "flex", gap: "16px", marginBottom: "24px", alignItems: "flex-start",
          }}>
            <div style={{
              minWidth: "32px", height: "32px", borderRadius: "50%",
              background: "rgba(44, 196, 214, 0.12)", border: "1px solid rgba(44, 196, 214, 0.25)",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px",
            }}>
              <span style={{ color: "var(--reef)", fontWeight: "900", fontSize: "14px" }}>{item.step}</span>
            </div>
            <div>
              <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "16px", marginBottom: "6px" }}>{item.title}</p>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>{item.body}</p>
            </div>
          </div>
        ))}

        {/* Section: What NOT to do during cycling */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
          What NOT to Do During the Cycle
        </h2>

        {[
          { title: "Don't do large water changes", body: "This washes out the bacteria you're trying to grow. Small top-offs for evaporation are fine, but avoid any significant water changes until the cycle is complete." },
          { title: "Don't add fish or corals", body: "Ammonia and nitrite will kill fish at any detectable level. Corals will be severely stressed. Nothing alive goes in until both read 0." },
          { title: "Don't turn the lights on", body: "No cleanup crew, no algae grazers — lights will trigger a diatom and green hair algae bloom that's harder to deal with when you do eventually add livestock." },
          { title: "Don't add a cleanup crew", body: "Snails and hermit crabs need stable, cycled water. Ammonia kills them just as effectively as it kills fish." },
          { title: "Don't give up if it's slow", body: "Some tanks take 8 weeks. Temperature, ammonia source, water flow, and rock surface area all affect cycle time. A slow cycle just means bacteria are still establishing — they will get there." },
        ].map((item, idx) => (
          <div key={idx} style={{
            background: "rgba(239, 68, 68, 0.04)", border: "1px solid rgba(239, 68, 68, 0.12)",
            borderRadius: "12px", padding: "16px", marginBottom: "12px",
            display: "flex", gap: "12px", alignItems: "flex-start",
          }}>
            <span style={{ color: "#ef4444", fontWeight: "900", fontSize: "16px", flexShrink: 0, marginTop: "1px" }}>✗</span>
            <div>
              <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "15px", marginBottom: "4px" }}>{item.title}</p>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>{item.body}</p>
            </div>
          </div>
        ))}

        {/* App screenshot placeholder */}
        <div style={{
          background: "rgba(44, 196, 214, 0.06)", border: "1px solid rgba(44, 196, 214, 0.15)",
          borderRadius: "16px", padding: "32px", margin: "48px 0", textAlign: "center",
        }}>
          <p style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: "700", marginBottom: "8px", letterSpacing: "0.05em" }}>
            [SCREENSHOT: NextUpReef New Tank Guide Phase 2 checklist showing ammonia spike confirmed, nitrite spike confirmed, and ammonia back to 0 checked green]
          </p>
          <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "18px", marginBottom: "8px" }}>
            Track your cycle progress automatically
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.6", marginBottom: "20px" }}>
            NextUpReef's New Tank Guide tracks your cycle step by step. Log your ammonia, nitrite, and nitrate readings and the app automatically detects when each milestone is reached — no guesswork.
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

        {/* How do I know I'm cycled */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          How Do I Know When My Tank Is Cycled?
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          You're cycled when all three of these are true at the same time:
        </p>
        <div style={{
          background: "rgba(34, 197, 94, 0.06)", border: "1px solid rgba(34, 197, 94, 0.2)",
          borderRadius: "16px", padding: "24px", marginBottom: "24px",
        }}>
          {[
            "Ammonia (NH3) = 0 ppm",
            "Nitrite (NO2) = 0 ppm",
            "Nitrate (NO3) > 0 ppm (some is present)",
          ].map((item, idx) => (
            <div key={idx} style={{
              display: "flex", gap: "12px", alignItems: "center",
              paddingBottom: idx < 2 ? "12px" : 0, marginBottom: idx < 2 ? "12px" : 0,
              borderBottom: idx < 2 ? "1px solid rgba(34, 197, 94, 0.12)" : "none",
            }}>
              <span style={{ color: "#22c55e", fontWeight: "900", fontSize: "18px" }}>✓</span>
              <p style={{ color: "var(--text-light)", fontWeight: "800", fontSize: "16px", margin: 0 }}>{item}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "48px" }}>
          Test again 24–48 hours later to confirm the readings hold. If they do — congratulations. Your tank is ready for its first residents. Head to Phase 3: The Ugly Phase.
        </p>

        {/* Next up */}
        <div style={{
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px", padding: "28px", marginBottom: "48px",
        }}>
          <p style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: "700", marginBottom: "8px", letterSpacing: "0.05em" }}>NEXT IN THE SERIES</p>
          <Link href="/blog/the-ugly-phase" style={{ textDecoration: "none" }}>
            <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "20px", marginBottom: "8px" }}>
              The Ugly Phase: Why Your Tank Looks Terrible (And Why That's Normal) →
            </p>
          </Link>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.6", margin: 0 }}>
            Diatoms, green hair algae, cyano — your tank is about to get ugly. Here's why it happens, how long it lasts, and what to do about it.
          </p>
        </div>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "How to Cycle a Reef Tank: The Complete Beginner's Guide",
              description: "Everything you need to know about cycling a new saltwater reef tank. How the nitrogen cycle works, how long it takes, what to test, and how to know when you're done.",
              author: { "@type": "Organization", name: "NextUpReef" },
              publisher: { "@type": "Organization", name: "NextUpReef", url: "https://nextupreef.com" },
              url: "https://nextupreef.com/blog/cycling-your-tank",
              datePublished: "2026-04-01",
            }),
          }}
        />
      </div>
    </section>
  );
}
