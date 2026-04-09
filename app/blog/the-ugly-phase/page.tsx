import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Ugly Phase: Why Your Reef Tank Looks Terrible (And Why That's Normal) — NextUpReef",
  description:
    "Diatoms, green hair algae, and cyano in your new reef tank are completely normal. Here's why the ugly phase happens, what each algae type means, and how to get through it without losing your mind.",
  alternates: {
    canonical: "https://nextupreef.com/blog/the-ugly-phase",
  },
  openGraph: {
    title: "The Ugly Phase: Why Your Reef Tank Looks Terrible (And Why That's Normal)",
    description:
      "Diatoms, green hair algae, and cyano in your new reef tank are completely normal. Here's why the ugly phase happens and how to get through it.",
    url: "https://nextupreef.com/blog/the-ugly-phase",
  },
};

export default function UglyPhasePost() {
  return (
    <section className="container" style={{ paddingTop: "80px", paddingBottom: "100px" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>

        {/* Breadcrumb */}
        <div style={{ marginBottom: "24px", display: "flex", gap: "8px", alignItems: "center" }}>
          <Link href="/blog" style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", textDecoration: "none" }}>
            Blog
          </Link>
          <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>→</span>
          <span style={{ color: "var(--reef)", fontSize: "14px", fontWeight: "700" }}>The Ugly Phase</span>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Beginner Guide", "Algae", "Year 1 Journey", "Cleanup Crew"].map(tag => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44, 196, 214, 0.08)", border: "1px solid rgba(44, 196, 214, 0.12)",
              color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        {/* Title */}
        <h1 style={{ fontSize: "42px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px", color: "var(--text-light)" }}>
          The Ugly Phase: Why Your Reef Tank Looks Terrible (And Why That's Normal)
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "16px", fontWeight: "700", marginBottom: "40px" }}>
          April 2026 · 7 min read
        </p>

        {/* Intro */}
        <p style={{ fontSize: "18px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          You cycled your tank. You did everything right. And now your rock is covered in brown slime, your glass is coated in green, and there's a purple-red crust forming in the corner that you've never seen before.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          Welcome to the Ugly Phase. Every new reef tank goes through it. Most new reefers panic. Some tear their tank down. Almost all of them shouldn't.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "48px" }}>
          This guide explains exactly what's happening, which algae is which, and how to get through it — without nuking your tank or going back to square one.
        </p>

        {/* What is the ugly phase */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          What Is the Ugly Phase?
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          After a tank cycles, it goes through a period — typically 2–4 months — where nutrients are elevated and the biological systems haven't fully stabilized. During this window, various algae species bloom, dominate for a few weeks, then get outcompeted by the next species.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          It's actually a sign your tank is maturing correctly. The succession of algae types follows a predictable pattern, and understanding that pattern removes a lot of the anxiety.
        </p>

        {/* Callout */}
        <div style={{
          background: "rgba(44, 196, 214, 0.06)", border: "2px solid rgba(44, 196, 214, 0.2)",
          borderRadius: "16px", padding: "24px", marginBottom: "48px",
          display: "flex", gap: "16px", alignItems: "flex-start",
        }}>
          <span style={{ fontSize: "28px", flexShrink: 0 }}>💡</span>
          <div>
            <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "16px", marginBottom: "8px" }}>
              The ugly phase is not a problem to solve — it's a process to survive.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
              Interventions that seem helpful — big water changes, algaecides, lights-off periods — often reset the succession cycle and extend the ugly phase. The fastest path through it is consistent maintenance and patience.
            </p>
          </div>
        </div>

        {/* Section: The algae succession */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          The Algae Succession: What You're Actually Seeing
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          New tanks typically go through algae types in this order. Each one outcompetes and eventually replaces the last.
        </p>

        {[
          {
            name: "Diatoms (Brown Film Algae)",
            timing: "Weeks 1–4 post-cycle",
            color: "#92400e",
            bg: "rgba(146, 64, 14, 0.08)",
            border: "rgba(146, 64, 14, 0.2)",
            appearance: "Dusty brown or rust-colored film coating rock, sand, and glass. Looks like someone sprinkled cocoa powder in your tank.",
            cause: "Silicates from new sand, rock, and sometimes tap water or low-quality RODI. Diatoms consume silicate and are almost universal in new tanks.",
            solution: "Nassarius snails and cerith snails will eat diatoms off the sand bed. Trochus and turbo snails handle glass and rock. Your cleanup crew is your best friend here.",
            duration: "Usually clears within 4–6 weeks as silicate is depleted.",
            panic: false,
          },
          {
            name: "Green Hair Algae (GHA)",
            timing: "Months 1–3",
            color: "#166534",
            bg: "rgba(22, 101, 52, 0.08)",
            border: "rgba(22, 101, 52, 0.2)",
            appearance: "Short or long green filaments growing on rock and equipment. Can range from a light coating to thick mats if left unchecked.",
            cause: "Elevated phosphate and nitrate from the maturing tank. GHA is an opportunistic nutrient consumer — if nutrients are available, it will grow.",
            solution: "Regular water changes (10–15% weekly) to export nutrients. Turbo snails are excellent GHA grazers. Sea urchins and lawnmower blennies are more aggressive options for bad outbreaks.",
            duration: "Can persist for months in high-nutrient tanks. Improves significantly as nutrient export improves and CUC establishes.",
            panic: false,
          },
          {
            name: "Cyanobacteria (Cyano)",
            timing: "Months 1–4, variable",
            color: "#7e22ce",
            bg: "rgba(126, 34, 206, 0.08)",
            border: "rgba(126, 34, 206, 0.2)",
            appearance: "Red, purple, or dark blue-green slimy mats that spread across sand and rock. Has a distinctive musty smell. Bubbles form underneath it.",
            cause: "Cyanobacteria is actually a photosynthetic bacteria, not a true algae. It thrives in low-flow areas, elevated nutrients, and immature biological systems.",
            solution: "Increase flow in dead spots. Do 20% water changes. Improve nutrient export. Manual removal (siphon it out) helps. Avoid chemical treatments — they often make it worse and can harm your beneficial bacteria.",
            duration: "Usually self-resolves as the tank matures and flow is improved. Can be stubborn if nutrients stay elevated.",
            panic: false,
          },
        ].map(algae => (
          <div key={algae.name} style={{
            background: algae.bg, border: `1px solid ${algae.border}`,
            borderRadius: "16px", padding: "24px", marginBottom: "20px",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", flexWrap: "wrap", gap: "8px" }}>
              <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "18px", margin: 0 }}>{algae.name}</p>
              <span style={{
                fontSize: "12px", fontWeight: "700", padding: "3px 10px", borderRadius: "999px",
                background: algae.bg, border: `1px solid ${algae.border}`, color: algae.color,
              }}>{algae.timing}</span>
            </div>
            {[
              { label: "What it looks like", value: algae.appearance },
              { label: "Why it's happening", value: algae.cause },
              { label: "What to do", value: algae.solution },
              { label: "How long it lasts", value: algae.duration },
            ].map(row => (
              <div key={row.label} style={{ marginBottom: "10px" }}>
                <p style={{ color: algae.color, fontWeight: "900", fontSize: "12px", letterSpacing: "0.05em", margin: "0 0 3px 0" }}>
                  {row.label.toUpperCase()}
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>{row.value}</p>
              </div>
            ))}
          </div>
        ))}

        {/* Section: Cleanup crew */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
          Building Your Cleanup Crew
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          A cleanup crew (CUC) is your biological algae management system. Different species tackle different algae types and different areas of the tank. Don't overstock — start with a modest crew and add more if needed.
        </p>

        <div style={{
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px", overflow: "hidden", marginBottom: "32px",
        }}>
          {[
            { species: "Turbo Snails", role: "Powerhouse algae grazer", note: "Best for GHA and film algae on glass and rock. Very effective but can knock over small frags. Great starting CUC for most tanks.", tank: "Any size" },
            { species: "Nassarius Snails", role: "Sand bed cleaner", note: "Bury themselves in sand and emerge to eat detritus and uneaten food. Excellent for sand bed health and diatom control.", tank: "Any size" },
            { species: "Trochus / Astrea Snails", role: "Coralline groomers", note: "Unlike turbos, these can right themselves if knocked over. Good film algae grazers, slightly less aggressive than turbos.", tank: "Any size" },
            { species: "Hermit Crabs", role: "General scavengers", note: "Eat detritus, uneaten food, and some algae. Provide extra shells — hermit crabs will kill snails to steal shells if they don't have alternatives.", tank: "Any size" },
            { species: "Sea Urchin", role: "Aggressive GHA control", note: "Urchins are exceptional at clearing heavy GHA outbreaks. Be careful with small or branching corals — they'll bulldoze them.", tank: "40g+" },
          ].map((row, idx) => (
            <div key={row.species} style={{
              padding: "16px 20px", borderTop: idx > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", flexWrap: "wrap", marginBottom: "6px" }}>
                <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "15px", margin: 0 }}>{row.species}</p>
                <div style={{ display: "flex", gap: "8px" }}>
                  <span style={{
                    fontSize: "11px", fontWeight: "700", padding: "2px 8px", borderRadius: "999px",
                    background: "rgba(44, 196, 214, 0.08)", color: "var(--reef)",
                  }}>{row.role}</span>
                  <span style={{
                    fontSize: "11px", fontWeight: "700", padding: "2px 8px", borderRadius: "999px",
                    background: "rgba(255,255,255,0.05)", color: "var(--text-muted)",
                  }}>{row.tank}</span>
                </div>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>{row.note}</p>
            </div>
          ))}
        </div>

        {/* Section: Water changes */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          Water Changes: Your Most Important Tool
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          During the ugly phase, weekly water changes of 10–15% are the most effective thing you can do. They export nutrients that fuel algae growth, replenish trace elements, and help dilute any parameter imbalances.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          The key is consistency. A 10% change every week is far more effective than a 40% change once a month. Log every water change — tracking frequency and percentage helps you spot whether your maintenance is actually keeping up with nutrient input.
        </p>

        {/* App screenshot placeholder */}
        <div style={{
          background: "rgba(44, 196, 214, 0.06)", border: "1px solid rgba(44, 196, 214, 0.15)",
          borderRadius: "16px", padding: "32px", marginBottom: "48px", textAlign: "center",
        }}>
          <p style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: "700", marginBottom: "8px", letterSpacing: "0.05em" }}>
            [SCREENSHOT: NextUpReef reminders tab showing water change schedule set up with weekly frequency]
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
            Set up a water change reminder in <strong style={{ color: "var(--text-light)" }}>NextUpReef</strong> and the app will track your schedule, remind you when it's due, and log each change automatically so you never lose track of your maintenance history.
          </p>
        </div>

        {/* What to test during ugly phase */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          What to Test During the Ugly Phase
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          You don't need to test daily, but weekly logging tells you whether things are improving. Focus on these three:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "32px" }}>
          {[
            { param: "Nitrate (NO3)", target: "< 20 ppm", why: "Tracks whether nutrients are improving", trend: "Should be trending down" },
            { param: "Phosphate (PO4)", target: "< 0.10 ppm", why: "Main fuel for algae growth", trend: "Should be trending down" },
            { param: "Salinity (SG)", target: "1.024–1.026", why: "Evaporation raises salinity weekly", trend: "Should stay consistent" },
          ].map(p => (
            <div key={p.param} style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "14px", padding: "16px", textAlign: "center",
            }}>
              <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "14px", marginBottom: "6px" }}>{p.param}</p>
              <p style={{ color: "var(--reef)", fontWeight: "900", fontSize: "16px", marginBottom: "8px" }}>{p.target}</p>
              <p style={{ color: "var(--text-muted)", fontSize: "12px", lineHeight: "1.5", marginBottom: "4px" }}>{p.why}</p>
              <p style={{ color: "var(--text-muted)", fontSize: "11px", fontWeight: "700" }}>{p.trend}</p>
            </div>
          ))}
        </div>

        {/* App screenshot placeholder */}
        <div style={{
          background: "rgba(44, 196, 214, 0.06)", border: "1px solid rgba(44, 196, 214, 0.15)",
          borderRadius: "16px", padding: "32px", marginBottom: "48px", textAlign: "center",
        }}>
          <p style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: "700", marginBottom: "8px", letterSpacing: "0.05em" }}>
            [SCREENSHOT: NextUpReef Phase 3 checklist showing cleanup crew added, water change schedule set up, and 3 parameter logs complete]
          </p>
          <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "18px", marginBottom: "8px" }}>
            The New Tank Guide keeps you on track through the ugly phase
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.6", marginBottom: "20px" }}>
            NextUpReef's Phase 3 checklist tells you exactly what to do during the ugly phase — lights schedule, cleanup crew, water changes, and parameter logging — all tracked automatically.
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

        {/* How to know it's over */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          How Do You Know the Ugly Phase Is Over?
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          There's no single moment — it's a gradual improvement. Signs your tank is turning the corner:
        </p>
        {[
          "Algae growth slows noticeably — cleanup crew is keeping up with new growth",
          "Rock starts showing pink or purple coralline algae spots — this is a great sign",
          "Nitrate and phosphate readings trending down toward target range",
          "Water is clearer and glass stays clean longer between wipes",
          "You're not dreading looking at your tank anymore",
        ].map((item, idx) => (
          <div key={idx} style={{
            display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "12px",
          }}>
            <span style={{ color: "#22c55e", fontWeight: "900", fontSize: "16px", flexShrink: 0, marginTop: "1px" }}>✓</span>
            <p style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: "1.7", margin: 0 }}>{item}</p>
          </div>
        ))}

        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", margin: "32px 0 48px 0" }}>
          When algae is clearing and parameters are stabilizing, you're ready to think about your first fish. That's Phase 4 — and it's when reef keeping starts to get genuinely exciting.
        </p>

        {/* Next up */}
        <div style={{
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px", padding: "28px", marginBottom: "48px",
        }}>
          <p style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: "700", marginBottom: "8px", letterSpacing: "0.05em" }}>NEXT IN THE SERIES</p>
          <Link href="/blog/first-livestock" style={{ textDecoration: "none" }}>
            <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "20px", marginBottom: "8px" }}>
              Adding Your First Fish to a Reef Tank →
            </p>
          </Link>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.6", margin: 0 }}>
            Your tank survived the ugly phase — now it's time for its first residents. How to choose hardy beginner fish, the one-fish-at-a-time rule, and why patience still matters even here.
          </p>
        </div>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "The Ugly Phase: Why Your Reef Tank Looks Terrible (And Why That's Normal)",
              description: "Diatoms, green hair algae, and cyano in your new reef tank are completely normal. Here's why the ugly phase happens, what each algae type means, and how to get through it.",
              author: { "@type": "Organization", name: "NextUpReef" },
              publisher: { "@type": "Organization", name: "NextUpReef", url: "https://nextupreef.com" },
              url: "https://nextupreef.com/blog/the-ugly-phase",
              datePublished: "2026-04-01",
            }),
          }}
        />
      </div>
    </section>
  );
}
