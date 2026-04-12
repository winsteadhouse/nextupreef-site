import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Adding Your First Corals to a Reef Tank: Start Soft, Go Slow — NextUpReef",
  description:
    "Your parameters are stable and your fish are thriving. Here's how to choose your first corals, why softies and zoas come first, and what you need to track once corals start consuming alkalinity.",
  alternates: {
    canonical: "https://nextupreef.com/blog/adding-first-corals",
  },
  openGraph: {
    title: "Adding Your First Corals to a Reef Tank: Start Soft, Go Slow",
    description:
      "Why softies and zoas come first, how to acclimate corals safely, and what alkalinity stability actually means.",
    url: "https://nextupreef.com/blog/adding-first-corals",
  },
};

export default function AddingFirstCoralsPost() {
  return (
    <section className="container" style={{ paddingTop: "80px", paddingBottom: "100px" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>

        {/* Breadcrumb */}
        <div style={{ marginBottom: "24px", display: "flex", gap: "8px", alignItems: "center" }}>
          <Link href="/blog" style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", textDecoration: "none" }}>
            Blog
          </Link>
          <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>→</span>
          <span style={{ color: "var(--reef)", fontSize: "14px", fontWeight: "700" }}>First Corals</span>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Beginner Guide", "Corals", "Alkalinity", "New Tank Journey"].map(tag => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44, 196, 214, 0.08)", border: "1px solid rgba(44, 196, 214, 0.12)",
              color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        {/* Title */}
        <h1 style={{ fontSize: "42px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px", color: "var(--text-light)" }}>
          Adding Your First Corals: Start Soft, Go Slow
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "16px", fontWeight: "700", marginBottom: "40px" }}>
          April 2026 · 9 min read
        </p>

        {/* Intro */}
        <p style={{ fontSize: "18px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          This is the phase most reefers started the hobby for. Parameters are stable, fish are settled, and the rock is clean. It's time for your first coral.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          Corals look like plants but they're animals — photosynthetic colonial organisms that build calcium carbonate skeletons and host symbiotic algae called zooxanthellae inside their tissue. They're also the part of reef keeping that requires the most chemistry knowledge, because they actively consume elements from your water as they grow.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "48px" }}>
          The good news: the path to a thriving reef starts with forgiving corals that are almost impossible to kill if your basic parameters are stable. This guide tells you exactly where to start.
        </p>

        {/* The coral hierarchy */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          The Coral Hierarchy: From Forgiving to Demanding
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          Corals are broadly divided into three categories based on their skeletal structure, light requirements, and chemistry demands. Every experienced reefer starts at the bottom of this list and earns their way up.
        </p>

        {[
          {
            type: "Soft Corals & Zoanthids",
            emoji: "🌿",
            color: "#10b981",
            bg: "rgba(16, 185, 129, 0.07)",
            border: "rgba(16, 185, 129, 0.2)",
            difficulty: "Beginner",
            chemistry: "Minimal — tolerate wide parameter ranges",
            light: "Low to moderate",
            examples: "Zoanthids, Palythoa, Mushroom corals (Discosoma, Rhodactis), Leathers (Toadstool, Finger, Cabbage), Kenya Tree, Xenia",
            why: "Soft corals don't build calcium carbonate skeletons — they're supported by protein and water pressure instead. This means they're not consuming alkalinity, calcium, and magnesium the way stony corals do. They're also the most forgiving of water quality fluctuations. If your parameters slip for a week, soft corals will usually recover. Hard corals may not.",
            yearOne: true,
          },
          {
            type: "Large Polyp Stony Corals (LPS)",
            emoji: "🪸",
            color: "#f59e0b",
            bg: "rgba(245, 158, 11, 0.07)",
            border: "rgba(245, 158, 11, 0.2)",
            difficulty: "Intermediate",
            chemistry: "Moderate — begin tracking Alk, Ca, Mg regularly",
            light: "Low to moderate",
            examples: "Hammer, Torch, Frogspawn (Euphyllia), Brain corals (Favites, Lobophyllia), Chalice, Duncan, Candy Cane",
            why: "LPS corals have large, fleshy polyps and moderate chemistry requirements. They're more demanding than softies but far more forgiving than SPS. Euphyllia corals (hammer, torch, frogspawn) are some of the most popular in the hobby — their flowing tentacles are iconic. They start consuming Alk and Ca noticeably as they grow, which is when tracking those parameters becomes essential.",
            yearOne: true,
          },
          {
            type: "Small Polyp Stony Corals (SPS)",
            emoji: "🔬",
            color: "#8b5cf6",
            bg: "rgba(139, 92, 246, 0.07)",
            border: "rgba(139, 92, 246, 0.2)",
            difficulty: "Advanced",
            chemistry: "High — requires extremely stable Alk, Ca, Mg. Daily swings of 0.5 dKH can cause bleaching.",
            light: "High intensity",
            examples: "Acropora, Montipora, Pocillopora, Stylophora, Seriatopora",
            why: "SPS corals are the pinnacle of reef keeping — fast-growing, intensely colored, and extraordinary to look at. They're also the most demanding corals in the hobby by a significant margin. SPS require near-perfect water chemistry, high-intensity lighting, and consistent maintenance. This is a year-two (or later) goal for most reefers.",
            yearOne: false,
          },
        ].map(coral => (
          <div key={coral.type} style={{
            background: coral.bg, border: `1px solid ${coral.border}`,
            borderRadius: "16px", padding: "24px", marginBottom: "20px",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", flexWrap: "wrap", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "24px" }}>{coral.emoji}</span>
                <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "18px", margin: 0 }}>{coral.type}</p>
              </div>
              <div style={{ display: "flex", gap: "6px" }}>
                <span style={{
                  fontSize: "11px", fontWeight: "700", padding: "3px 10px", borderRadius: "999px",
                  background: coral.bg, border: `1px solid ${coral.border}`, color: coral.color,
                }}>{coral.difficulty}</span>
                {coral.yearOne ? (
                  <span style={{ fontSize: "11px", fontWeight: "700", padding: "3px 10px", borderRadius: "999px", background: "rgba(34,197,94,0.1)", color: "#22c55e" }}>✓ Year One</span>
                ) : (
                  <span style={{ fontSize: "11px", fontWeight: "700", padding: "3px 10px", borderRadius: "999px", background: "rgba(239,68,68,0.1)", color: "#ef4444" }}>Year Two+</span>
                )}
              </div>
            </div>
            {[
              { label: "Chemistry requirements", value: coral.chemistry },
              { label: "Lighting", value: coral.light },
              { label: "Common examples", value: coral.examples },
              { label: "Why this tier", value: coral.why },
            ].map(row => (
              <div key={row.label} style={{ marginBottom: "10px" }}>
                <p style={{ color: coral.color, fontWeight: "900", fontSize: "11px", letterSpacing: "0.05em", margin: "0 0 3px 0" }}>
                  {row.label.toUpperCase()}
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>{row.value}</p>
              </div>
            ))}
          </div>
        ))}

        {/* Alkalinity - the most important section */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
          Alkalinity: The Most Important Number in Reef Chemistry
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          Once you have LPS or SPS corals, alkalinity (dKH) becomes the most critical parameter you'll track. Understanding what it is and why it matters makes the difference between corals that thrive and corals that inexplicably die.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          Alkalinity is a measure of the water's buffering capacity — its ability to resist pH swings. Stony corals use carbonate ions (the main component of alkalinity) to build their calcium carbonate skeletons. As corals grow, they consume alkalinity from the water. If you don't replenish it, alkalinity drops — and as it drops, so does pH stability, skeletal growth rate, and eventually coral health.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          The target range for most reef tanks is 8–10 dKH. But the number matters less than the consistency. A tank running stable at 7.5 dKH is healthier for corals than a tank that fluctuates between 7 and 9.5. Swings stress coral tissue, cause bleaching, and in bad cases kill colonies overnight.
        </p>

        <div style={{
          background: "rgba(44, 196, 214, 0.06)", border: "2px solid rgba(44, 196, 214, 0.2)",
          borderRadius: "16px", padding: "24px", marginBottom: "48px",
          display: "flex", gap: "16px", alignItems: "flex-start",
        }}>
          <span style={{ fontSize: "28px", flexShrink: 0 }}>💡</span>
          <div>
            <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "16px", marginBottom: "8px" }}>
              The golden rule: don't let alkalinity move more than 0.5 dKH per day.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
              This is the threshold most experienced reefers use. Changes faster than this — whether up or down — can cause coral tissue necrosis. When <strong style={{ color: "var(--text-light)" }}>NextUpReef</strong> detects alkalinity logging during Phase 5, it tracks your trend and flags instability so you can catch it before corals show stress.
            </p>
          </div>
        </div>

        {/* The big three */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          ALK, Calcium, and Magnesium: The Big Three
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          Alkalinity doesn't work in isolation. Calcium (Ca) and Magnesium (Mg) are co-consumed with alkalinity when corals build skeletons. All three need to stay in balance — and they interact with each other. If one is off, the others often are too.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "32px" }}>
          {[
            { param: "Alkalinity", abbr: "ALK", target: "8–10 dKH", color: "#0ea5e9", note: "Fuels skeletal growth. Consumed daily by stony corals. Most time-sensitive parameter to track." },
            { param: "Calcium", abbr: "CA", target: "380–450 ppm", color: "#8b5cf6", note: "The raw material of coral skeletons. Drops alongside alkalinity in growing tanks." },
            { param: "Magnesium", abbr: "MG", target: "1250–1350 ppm", color: "#10b981", note: "Keeps calcium dissolved and accessible. Low magnesium causes calcium and alkalinity to fall out of balance." },
          ].map(p => (
            <div key={p.abbr} style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "14px", padding: "16px", textAlign: "center",
            }}>
              <p style={{ color: p.color, fontWeight: "900", fontSize: "20px", marginBottom: "4px" }}>{p.abbr}</p>
              <p style={{ color: "var(--text-light)", fontWeight: "800", fontSize: "13px", marginBottom: "8px" }}>{p.target}</p>
              <p style={{ color: "var(--text-muted)", fontSize: "12px", lineHeight: "1.5", margin: 0 }}>{p.note}</p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "48px" }}>
          With just softies in the tank, water changes are usually enough to replenish the big three. Once LPS start growing and especially once SPS are added, most reefers move to a dosing regimen — either two-part solutions, kalkwasser, or an automated calcium reactor.
        </p>

        {/* App screenshot */}
        <div style={{
          background: "rgba(44, 196, 214, 0.06)", border: "1px solid rgba(44, 196, 214, 0.15)",
          borderRadius: "16px", padding: "24px", marginBottom: "48px", textAlign: "center",
        }}>
          <Image
            src="/images/blog/SCREENSHOT_CORALS_01.png"
            alt="NextUpReef log screen showing Alkalinity, Calcium, and Magnesium tracked for coral health"
            width={320} height={580}
            style={{ borderRadius: "12px", margin: "0 auto 16px", display: "block", maxWidth: "100%" }}
          />
          <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
            During Phase 5, <strong style={{ color: "var(--text-light)" }}>NextUpReef</strong> highlights Alkalinity, Calcium, and Magnesium as guide parameters — auto-adding them to your log screen so you track the right things without having to think about it.
          </p>
        </div>

        {/* How to acclimate corals */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          Acclimating and Placing Your First Coral
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          Corals are sensitive to sudden changes in temperature, salinity, and light. Proper acclimation takes 30–45 minutes and dramatically reduces stress-related mortality.
        </p>

        {[
          {
            step: "1",
            title: "Coral dip",
            detail: "Before anything touches your tank, dip every new coral in a coral-safe solution (Coral RX, Revive, or Seachem Reef Dip) for 5–10 minutes. This removes flatworms, nudibranches, and other pests invisible to the naked eye. Rinse with tank water after dipping. Never skip this.",
          },
          {
            step: "2",
            title: "Float the bag",
            detail: "Float the sealed bag in your tank for 15 minutes to temperature-equalize. Then slowly add small amounts of your tank water to the bag over 20–30 minutes. This equalizes salinity and chemistry gradually.",
          },
          {
            step: "3",
            title: "Placement: start low",
            detail: "Start new corals lower in the tank than their eventual target position. Corals adapting to a new light intensity are like someone coming inside from the dark — sudden bright light causes stress and bleaching. Move them up over weeks as they acclimate.",
          },
          {
            step: "4",
            title: "Flow: moderate, indirect",
            detail: "Good flow keeps detritus off coral tissue and delivers nutrients. But direct blasting flow stresses most corals. Aim for turbulent, indirect flow that causes gentle polyp movement.",
          },
          {
            step: "5",
            title: "Give it space",
            detail: "Corals grow — some aggressively. Many corals sting their neighbors with sweeper tentacles that can extend far beyond their visible disc at night. Give corals room to grow and check compatibility before placing species near each other.",
          },
        ].map((s, idx) => (
          <div key={s.step} style={{
            display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "20px",
          }}>
            <div style={{
              width: "36px", height: "36px", borderRadius: "10px", flexShrink: 0,
              background: "rgba(44, 196, 214, 0.1)", border: "1px solid rgba(44, 196, 214, 0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ color: "var(--reef)", fontWeight: "900", fontSize: "16px" }}>{s.step}</span>
            </div>
            <div>
              <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "15px", margin: "0 0 6px 0" }}>{s.title}</p>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>{s.detail}</p>
            </div>
          </div>
        ))}

        {/* What to avoid */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
          What to Avoid in Year One
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          The following are responsible for a disproportionate share of year-one coral deaths:
        </p>

        <div style={{
          background: "rgba(239, 68, 68, 0.05)", border: "1px solid rgba(239, 68, 68, 0.15)",
          borderRadius: "16px", overflow: "hidden", marginBottom: "48px",
        }}>
          {[
            { item: "Any Acropora or SPS in the first year", reason: "SPS require near-perfect, stable chemistry and high-quality lighting. A single Alk swing can kill a colony overnight. Build your skills with softies and LPS first." },
            { item: "Clams before your tank is established", reason: "Clams (Tridacna) are filter feeders and photosynthetic. They require excellent light, stable chemistry, and a tank mature enough to sustain them. Year-two addition minimum." },
            { item: "Adding multiple corals at once", reason: "Same principle as fish — one at a time. Adding several corals simultaneously makes it impossible to diagnose which one is causing a problem if something goes wrong." },
            { item: "Skipping the coral dip", reason: "One AEFW (Acropora eating flatworm) introduction can devastate an entire SPS collection. One pest nudibranch can destroy your zoas. The dip takes 10 minutes. Use it." },
            { item: "Chasing a specific coral color before your tank is ready", reason: "Top-shelf SPS frags can cost hundreds of dollars. Don't buy them until you have months of stable parameter data and multiple successful soft/LPS corals thriving." },
          ].map((row, idx) => (
            <div key={idx} style={{
              padding: "16px 20px", borderTop: idx > 0 ? "1px solid rgba(239,68,68,0.1)" : "none",
              display: "flex", gap: "14px", alignItems: "flex-start",
            }}>
              <span style={{ color: "#ef4444", fontWeight: "900", fontSize: "16px", flexShrink: 0, marginTop: "2px" }}>✕</span>
              <div>
                <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "14px", margin: "0 0 4px 0" }}>{row.item}</p>
                <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.5", margin: 0 }}>{row.reason}</p>
              </div>
            </div>
          ))}
        </div>

        {/* App screenshot */}
        <div style={{
          background: "rgba(44, 196, 214, 0.06)", border: "1px solid rgba(44, 196, 214, 0.15)",
          borderRadius: "16px", padding: "24px", marginBottom: "48px", textAlign: "center",
        }}>
          <Image
            src="/images/blog/SCREENSHOT_CORALS_02.png"
            alt="NextUpReef New Tank Guide Phase 5 checklist showing coral-ready requirements"
            width={320} height={580}
            style={{ borderRadius: "12px", margin: "0 auto 16px", display: "block", maxWidth: "100%" }}
          />
          <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
            The <strong style={{ color: "var(--text-light)" }}>NextUpReef</strong> New Tank Guide tracks your Phase 5 checklist — light schedule, alkalinity logs, and first coral added — so you know exactly when you've hit each milestone.
          </p>
        </div>

        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "48px" }}>
          When your first corals are open, growing, and your parameters have been stable for months — you've arrived. The tank you started from scratch is now a reef. That's what Phase 6 looks like.
        </p>

        {/* Next up */}
        <div style={{
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px", padding: "28px", marginBottom: "48px",
        }}>
          <p style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: "700", marginBottom: "8px", letterSpacing: "0.05em" }}>NEXT IN THE SERIES</p>
          <Link href="/blog/established-reef" style={{ textDecoration: "none" }}>
            <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "20px", marginBottom: "8px" }}>
              Your Reef is Established: What Comes Next →
            </p>
          </Link>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.6", margin: 0 }}>
            Coralline algae is spreading, parameters are stable, and your reef is maturing. Here's what a healthy established reef looks like, how to grow your coral collection responsibly, and when to consider dosing and a refugium.
          </p>
        </div>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Adding Your First Corals to a Reef Tank: Start Soft, Go Slow",
              description: "Why softies and zoas come first, how to acclimate corals safely, and what alkalinity stability actually means.",
              author: { "@type": "Organization", name: "NextUpReef" },
              publisher: { "@type": "Organization", name: "NextUpReef", url: "https://nextupreef.com" },
              url: "https://nextupreef.com/blog/adding-first-corals",
              datePublished: "2026-04-01",
            }),
          }}
        />
      </div>
    </section>
  );
}
