import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Your Reef is Established: What a Mature Reef Tank Looks Like — NextUpReef",
  description:
    "Coralline algae is spreading, parameters are holding, and your reef is maturing. Here's what an established reef looks like, when to start dosing, how to grow your collection, and how to keep it thriving.",
  alternates: {
    canonical: "https://nextupreef.com/blog/established-reef",
  },
  openGraph: {
    title: "Your Reef is Established: What a Mature Reef Tank Looks Like",
    description:
      "What changes in a mature reef, when to consider dosing, how to expand your coral collection, and how to keep a thriving reef for years.",
    url: "https://nextupreef.com/blog/established-reef",
  },
};

export default function EstablishedReefPost() {
  return (
    <section className="container" style={{ paddingTop: "80px", paddingBottom: "100px" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>

        {/* Breadcrumb */}
        <div style={{ marginBottom: "24px", display: "flex", gap: "8px", alignItems: "center" }}>
          <Link href="/blog" style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", textDecoration: "none" }}>
            Blog
          </Link>
          <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>→</span>
          <span style={{ color: "var(--reef)", fontSize: "14px", fontWeight: "700" }}>Established Reef</span>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Advanced Guide", "Dosing", "Refugium", "Coralline Algae", "New Tank Journey"].map(tag => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44, 196, 214, 0.08)", border: "1px solid rgba(44, 196, 214, 0.12)",
              color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        {/* Title */}
        <h1 style={{ fontSize: "42px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px", color: "var(--text-light)" }}>
          Your Reef is Established: What Comes Next
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "16px", fontWeight: "700", marginBottom: "40px" }}>
          April 2026 · 10 min read
        </p>

        {/* Intro */}
        <p style={{ fontSize: "18px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          Something changed in your tank and you may not have noticed exactly when it happened. The algae problems faded. Your parameters stopped swinging. The rock started turning pink and purple. Fish that used to hide are cruising the tank. Corals are open all day.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          Your reef is established. This is what most people start the hobby hoping to eventually reach — and you made it.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "48px" }}>
          This guide covers what biological maturity actually means, what changes in an established tank, and how to build on your foundation responsibly — including dosing, refugiums, coral expansion, and the long-term habits that keep a reef thriving for years.
        </p>

        {/* What maturity means */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          What Biological Maturity Actually Means
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          A new tank and a mature reef are fundamentally different biological systems, even if the hardware is identical. The difference is invisible — it lives in your rock, your sand, and your water column.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          Over 6–18 months, a diverse community of bacteria, archaea, microfauna, and microalgae establishes itself throughout the tank. This community — sometimes called the microbiome — processes waste more efficiently than a young tank's simpler bacterial colony. It buffers chemistry swings. It outcompetes nuisance algae. It creates a biological reserve that a new tank simply doesn't have.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "32px" }}>
          This is why experienced reefers say a mature tank is "more forgiving." It's not magic — it's a richer, more diverse microbial ecosystem doing more of the work for you.
        </p>

        {/* Signs your reef is established */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          Signs Your Reef is Genuinely Established
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          These are the observable indicators that your tank has crossed the threshold from "new reef" to "established reef":
        </p>

        {[
          {
            sign: "Coralline algae spreading",
            detail: "Pink, purple, and magenta calcified algae spreading across your rockwork and glass is one of the clearest signs of a mature, healthy reef. Coralline requires stable calcium, alkalinity, and magnesium to grow — its presence confirms your chemistry is dialed in. It also physically outcompetes nuisance algae for real estate on your rock.",
            color: "#ec4899",
          },
          {
            sign: "Parameters holding without constant intervention",
            detail: "In a new tank, small mistakes cause noticeable swings. In an established tank, the biological reserve absorbs minor disruptions. You can miss a water change by a few days. Your pH doesn't crater overnight if you close the windows. Alkalinity doesn't crash if you forget to dose for a day. The tank is buffering itself.",
            color: "#0ea5e9",
          },
          {
            sign: "Corals growing visibly",
            detail: "New frags that were the size of a quarter when you added them start developing daughter colonies, new polyp rows, and noticeable encrusting. Fast growers like leathers and hammer corals can double in size within a year. This growth is only possible when chemistry is stable enough to sustain skeletal building.",
            color: "#10b981",
          },
          {
            sign: "No nuisance algae problems",
            detail: "The competitive balance in your tank has shifted. Your cleanup crew, the microbial community, and your corals are collectively outcompeting nuisance algae for nutrients and space. You may still wipe the glass weekly — but hair algae outbreaks, diatom blooms, and cyano are no longer a regular problem.",
            color: "#f59e0b",
          },
          {
            sign: "Pods and microfauna visible",
            detail: "Copepods, amphipods, and other microfauna darting around the glass in the dark are a sign of a thriving, diverse biological community. These animals are part of the natural reef food web — they feed fish and corals, process detritus, and indicate a healthy system.",
            color: "#8b5cf6",
          },
        ].map((item, idx) => (
          <div key={idx} style={{
            display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "20px",
            background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "14px", padding: "18px",
          }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: item.color, flexShrink: 0, marginTop: "6px" }} />
            <div>
              <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "15px", margin: "0 0 8px 0" }}>{item.sign}</p>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>{item.detail}</p>
            </div>
          </div>
        ))}

        {/* Dosing */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
          When to Start Dosing
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          As your coral collection grows, it consumes more alkalinity and calcium. At some point, water changes alone can't replenish what the corals are consuming fast enough. When your alkalinity is dropping noticeably between water changes — typically more than 0.5–1 dKH per week — it's time to start supplementing.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          There are several approaches to dosing. The right one depends on your tank size, coral load, and how much automation you want.
        </p>

        {[
          {
            method: "Two-Part Dosing",
            products: "BRS 2-Part, ESV B-Ionic",
            color: "#0ea5e9",
            how: "Two separate solutions — one for alkalinity, one for calcium — dosed daily in equal amounts. Inexpensive to run and easy to adjust. Best for tanks with moderate coral loads.",
            pros: ["Affordable", "Easy to adjust dose rate", "No special equipment needed", "Works for most mixed reefs"],
            cons: ["Daily manual dosing unless automated", "Can raise salinity and other ions over time", "Less efficient for heavy SPS tanks"],
            when: "When alkalinity is dropping 0.5–2 dKH per week",
          },
          {
            method: "Kalkwasser (Kalk)",
            products: "BRS Kalkwasser, Two Little Fishies Kalkwasser",
            color: "#10b981",
            how: "Calcium hydroxide mixed with RO/DI water and dosed via ATO (auto top-off) as evaporation replacement. Simultaneously replenishes calcium and alkalinity while precipitating phosphate and raising pH.",
            pros: ["Raises pH naturally", "Precipitates phosphate", "Cheap to run", "Works with ATO automatically"],
            cons: ["Raises pH significantly if overdosed", "Less precise than two-part", "Can't deliver enough supplement in heavy SPS tanks alone"],
            when: "If you already have an ATO and want passive supplementation",
          },
          {
            method: "Calcium Reactor",
            products: "GHL Deltec, Korallin, Reef Octopus",
            color: "#8b5cf6",
            how: "Circulates tank water through a chamber of calcium carbonate media (aragonite) while injecting CO2, which dissolves the media and returns calcium and alkalinity to the tank. Most natural method — chemically mirrors how reefs replenish themselves.",
            pros: ["Highly efficient for large SPS-dominant tanks", "Replicates natural reef chemistry", "Low long-term cost after initial investment"],
            cons: ["Expensive initial cost", "Requires CO2 cylinder and regulator", "Takes weeks to dial in properly", "Lowers pH if not properly managed"],
            when: "When you have a significant SPS collection and need to replenish 3+ dKH per day",
          },
        ].map(d => (
          <div key={d.method} style={{
            border: `1px solid rgba(255,255,255,0.08)`, background: "rgba(255,255,255,0.02)",
            borderRadius: "16px", padding: "24px", marginBottom: "20px",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px", flexWrap: "wrap", gap: "8px" }}>
              <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "17px", margin: 0 }}>{d.method}</p>
              <span style={{
                fontSize: "11px", fontWeight: "700", padding: "3px 10px", borderRadius: "999px",
                background: `${d.color}15`, color: d.color,
              }}>{d.when}</span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: "700", marginBottom: "12px" }}>
              Common products: {d.products}
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", marginBottom: "16px" }}>{d.how}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <p style={{ color: "#22c55e", fontWeight: "900", fontSize: "11px", letterSpacing: "0.05em", margin: "0 0 6px 0" }}>PROS</p>
                {d.pros.map((p, i) => (
                  <p key={i} style={{ color: "var(--text-muted)", fontSize: "13px", margin: "0 0 4px 0" }}>✓ {p}</p>
                ))}
              </div>
              <div>
                <p style={{ color: "#ef4444", fontWeight: "900", fontSize: "11px", letterSpacing: "0.05em", margin: "0 0 6px 0" }}>CONS</p>
                {d.cons.map((c, i) => (
                  <p key={i} style={{ color: "var(--text-muted)", fontSize: "13px", margin: "0 0 4px 0" }}>· {c}</p>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* App screenshot */}
        <div style={{
          background: "rgba(44, 196, 214, 0.06)", border: "1px solid rgba(44, 196, 214, 0.15)",
          borderRadius: "16px", padding: "24px", marginBottom: "48px", textAlign: "center", marginTop: "32px",
        }}>
          <Image
            src="/screenshots/phone-home-v2.png"
            alt="NextUpReef dashboard showing established reef with high stability score"
            width={320} height={580}
            style={{ borderRadius: "12px", margin: "0 auto 16px", display: "block", maxWidth: "100%" }}
          />
          <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
            In <strong style={{ color: "var(--text-light)" }}>NextUpReef</strong>, your Stability Score reflects how consistent your parameters are over time. An established reef with regular logging typically sees Stability climb as the tank matures and chemistry holds steadier between tests.
          </p>
        </div>

        {/* Refugium */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          The Refugium: Your Tank's Natural Filter
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          A refugium is a separate, connected section of water — usually in the sump — where macroalgae grows under its own light cycle. The most popular macroalgae is Chaetomorpha (chaeto), a fast-growing, tangled green algae that absorbs nitrate and phosphate from the water as it grows.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          When you harvest a portion of the chaeto periodically (roughly weekly in most setups), you're physically removing the nutrients it absorbed from the system. This is one of the most effective and natural forms of nutrient export available.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          Refugiums also cultivate copepods and amphipods — small crustaceans that reproduce in the safe environment away from fish, then "spill over" into the display tank as a natural food source. For mandarin dragonets, a well-established refugium is essentially required.
        </p>

        <div style={{
          background: "rgba(44, 196, 214, 0.06)", border: "2px solid rgba(44, 196, 214, 0.2)",
          borderRadius: "16px", padding: "24px", marginBottom: "48px",
          display: "flex", gap: "16px", alignItems: "flex-start",
        }}>
          <span style={{ fontSize: "28px", flexShrink: 0 }}>💡</span>
          <div>
            <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "16px", marginBottom: "8px" }}>
              Run your refugium light on an opposite cycle to your display.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
              When the display lights are off at night, CO2 builds up and pH naturally drops. Running the refugium light at night means the chaeto is photosynthesizing during the pH low — consuming CO2 and stabilizing your overnight pH swing. A simple but effective way to improve pH stability without additional equipment.
            </p>
          </div>
        </div>

        {/* Growing your coral collection */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          Expanding Your Coral Collection
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          With an established tank, you can start thinking about more demanding corals. The upgrade path most reefers follow:
        </p>

        <div style={{
          background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "16px", overflow: "hidden", marginBottom: "32px",
        }}>
          {[
            { stage: "Established soft coral collection", desc: "Multiple zoa colonies, mushrooms, and leathers all thriving. Parameters stable 3+ months.", unlocks: "LPS corals" },
            { stage: "LPS corals growing", desc: "Hammer, torch, or brain corals showing polyp extension and growth. Alkalinity tracked weekly.", unlocks: "More demanding LPS, early Montipora" },
            { stage: "Alkalinity stable within 0.3 dKH/day", desc: "Dosing or water changes maintaining consistent Alk. Multiple LPS thriving 6+ months.", unlocks: "Encrusting SPS (Montipora, Stylophora)" },
            { stage: "SPS encrusters growing", desc: "Non-demanding SPS showing color and encrusting growth. Test results consistently in range.", unlocks: "Branching SPS, Acropora" },
          ].map((row, idx) => (
            <div key={idx} style={{
              padding: "16px 20px", borderTop: idx > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", flexWrap: "wrap", marginBottom: "6px" }}>
                <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "14px", margin: 0 }}>{row.stage}</p>
                <span style={{
                  fontSize: "11px", fontWeight: "700", padding: "2px 8px", borderRadius: "999px",
                  background: "rgba(44,196,214,0.08)", color: "var(--reef)", flexShrink: 0,
                }}>Unlocks: {row.unlocks}</span>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: "1.5", margin: 0 }}>{row.desc}</p>
            </div>
          ))}
        </div>

        {/* Long-term habits */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          The Habits That Keep a Reef Thriving Long-Term
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          The reefers with tanks still thriving at five and ten years aren't necessarily doing anything exotic. They've just built consistent habits and stuck to them. These are the ones that matter most:
        </p>

        {[
          {
            habit: "Keep logging, even when things are good",
            detail: "When something goes wrong in a reef tank, the most valuable thing you can have is historical data. A coral that suddenly declines, a fish that goes off-feed, a chemistry crash — all of these are easier to diagnose with weeks of prior logs to compare against. NextUpReef keeps that record for you automatically.",
            icon: "📊",
          },
          {
            habit: "Water changes on schedule, not when the tank looks bad",
            detail: "Regular 10–15% water changes aren't just about removing nitrate — they replenish trace elements, buffer chemistry, and prevent the slow accumulation of organic compounds that no test kit measures. The reefers who do consistent water changes rarely face the mysterious crashes that afflict tanks maintained by crisis response.",
            icon: "💧",
          },
          {
            habit: "One addition at a time",
            detail: "This principle applies as long as you keep the hobby. One new coral or fish at a time, observe for two weeks, then add the next. It costs nothing and prevents the kind of wholesale system crashes that can happen when you overstock a tank at once.",
            icon: "🐠",
          },
          {
            habit: "Monthly tank photos",
            detail: "Take a photo from the same angle every month. After a year, you'll have documentation of your reef's transformation that's genuinely remarkable to look back on. It also makes it easy to spot gradual changes — a coral slowly losing color, a fish looking off — that you might miss day-to-day.",
            icon: "📸",
          },
          {
            habit: "Understand your equipment before it fails",
            detail: "Know when your skimmer was last cleaned, when your return pump was last serviced, and what a failing pump sounds like. Equipment failure is the most common cause of established reef crashes. Keep spare powerheads, heater probes, and pump impellers on hand — not because you're paranoid, but because equipment fails at inconvenient times.",
            icon: "🔧",
          },
        ].map((item, idx) => (
          <div key={idx} style={{
            display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "24px",
            background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "14px", padding: "18px",
          }}>
            <span style={{ fontSize: "24px", flexShrink: 0 }}>{item.icon}</span>
            <div>
              <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "15px", margin: "0 0 8px 0" }}>{item.habit}</p>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>{item.detail}</p>
            </div>
          </div>
        ))}

        {/* App screenshot */}
        <div style={{
          background: "rgba(44, 196, 214, 0.06)", border: "1px solid rgba(44, 196, 214, 0.15)",
          borderRadius: "16px", padding: "24px", marginBottom: "48px", textAlign: "center", marginTop: "16px",
        }}>
          <Image
            src="/screenshots/phone-ai-v2.png"
            alt="NextUpReef community feed showing established reef with high scores"
            width={320} height={580}
            style={{ borderRadius: "12px", margin: "0 auto 16px", display: "block", maxWidth: "100%" }}
          />
          <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
            Share your established reef in the <strong style={{ color: "var(--text-light)" }}>NextUpReef</strong> community — your parameters, coral collection, and journey from day one become part of your public tank profile. Other new reefers use tanks like yours as benchmarks for what's possible.
          </p>
        </div>

        {/* Closing */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          You Built This From Scratch
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          The tank you're looking at right now started as a box of equipment and a bag of salt. The water chemistry you're maintaining took months to stabilize. The corals growing in your tank require conditions you created and sustained through consistent work.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          Most people who start a reef tank don't make it this far. They quit during the cycle, or during the ugly phase, or when the first coral died, or when they got busy and the tank crashed. The fact that you have an established reef means you did something most people who attempt it don't do.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "48px" }}>
          The hobby doesn't get easier from here — the challenges just get more interesting. Acropora, clams, a refugium, a controller, a larger system. There's no ceiling. But the foundation is built. Everything else is just adding to it.
        </p>

        {/* Back to series */}
        <div style={{
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px", padding: "28px", marginBottom: "48px",
        }}>
          <p style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: "700", marginBottom: "8px", letterSpacing: "0.05em" }}>THE COMPLETE SERIES</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { href: "/blog/tank-setup", title: "Phase 1: How to Set Up a Reef Tank" },
              { href: "/blog/cycling-your-tank", title: "Phase 2: How to Cycle a Reef Tank" },
              { href: "/blog/the-ugly-phase", title: "Phase 3: The Ugly Phase Explained" },
              { href: "/blog/first-livestock", title: "Phase 4: Adding Your First Fish" },
              { href: "/blog/adding-first-corals", title: "Phase 5: Adding Your First Corals" },
              { href: "/blog/established-reef", title: "Phase 6: Your Reef is Established ← You are here" },
            ].map(post => (
              <Link key={post.href} href={post.href} style={{ textDecoration: "none" }}>
                <p style={{
                  color: post.href === "/blog/established-reef" ? "var(--reef)" : "var(--text-muted)",
                  fontWeight: post.href === "/blog/established-reef" ? "900" : "700",
                  fontSize: "15px", margin: 0,
                }}>
                  {post.title}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Your Reef is Established: What a Mature Reef Tank Looks Like",
              description: "What changes in a mature reef, when to consider dosing, how to expand your coral collection, and how to keep a thriving reef for years.",
              author: { "@type": "Organization", name: "NextUpReef" },
              publisher: { "@type": "Organization", name: "NextUpReef", url: "https://nextupreef.com" },
              url: "https://nextupreef.com/blog/established-reef",
              datePublished: "2026-04-01",
            }),
          }}
        />
      </div>
    </section>
  );
}
