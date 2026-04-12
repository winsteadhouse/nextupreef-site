import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Adding Your First Fish to a Reef Tank: The Beginner's Guide — NextUpReef",
  description:
    "Your tank cycled, survived the ugly phase, and now it's ready for its first residents. Here's how to choose hardy beginner fish, the one-fish-at-a-time rule, and why patience still matters.",
  alternates: {
    canonical: "https://nextupreef.com/blog/first-livestock",
  },
  openGraph: {
    title: "Adding Your First Fish to a Reef Tank: The Beginner's Guide",
    description:
      "How to choose your first fish, the one-at-a-time rule, and what parameters to confirm before anything goes in.",
    url: "https://nextupreef.com/blog/first-livestock",
  },
};

export default function FirstLivestockPost() {
  return (
    <section className="container" style={{ paddingTop: "80px", paddingBottom: "100px" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>

        {/* Breadcrumb */}
        <div style={{ marginBottom: "24px", display: "flex", gap: "8px", alignItems: "center" }}>
          <Link href="/blog" style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", textDecoration: "none" }}>
            Blog
          </Link>
          <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>→</span>
          <span style={{ color: "var(--reef)", fontSize: "14px", fontWeight: "700" }}>First Livestock</span>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Beginner Guide", "Fish", "New Tank Journey", "Quarantine"].map(tag => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44, 196, 214, 0.08)", border: "1px solid rgba(44, 196, 214, 0.12)",
              color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        {/* Title */}
        <h1 style={{ fontSize: "42px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px", color: "var(--text-light)" }}>
          Adding Your First Fish to a Reef Tank
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "16px", fontWeight: "700", marginBottom: "40px" }}>
          April 2026 · 8 min read
        </p>

        {/* Intro */}
        <p style={{ fontSize: "18px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          You did it. Your tank cycled. You survived the ugly phase. The algae is clearing, your cleanup crew is working, and your parameters are finally looking stable. This is the moment most new reefers have been waiting for since they filled the tank.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          But adding your first fish is where a lot of new reef tanks go sideways. Move too fast, add the wrong fish, skip the parameter check — and you can undo weeks of work in a matter of days.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "48px" }}>
          This guide covers how to choose your first fish, how to introduce them safely, and what to watch for once they're in your tank.
        </p>

        {/* Before you add anything */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          Before Anything Goes In: Confirm Your Parameters
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          Fish are far more sensitive to water chemistry than people expect. A tank that "looks fine" can still have ammonia or nitrite levels that will stress or kill a fish within days. Before adding any livestock, confirm these are at safe levels:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "32px" }}>
          {[
            { param: "Ammonia (NH3)", target: "0 ppm", why: "Any detectable ammonia will burn fish gills. Must be zero.", urgent: true },
            { param: "Nitrite (NO2)", target: "0 ppm", why: "Nitrite blocks oxygen transport in fish blood. Must be zero.", urgent: true },
            { param: "Nitrate (NO3)", target: "< 20 ppm", why: "Acceptable for fish. High nitrate stresses new additions.", urgent: false },
            { param: "Salinity (SG)", target: "1.024–1.026", why: "Stable salinity is critical. Check it the day you plan to add fish.", urgent: false },
            { param: "Temperature", target: "76–80°F", why: "Consistent temp prevents stress. Swings are harder on fish than corals.", urgent: false },
            { param: "pH", target: "8.1–8.4", why: "Low pH stresses fish over time. Log it a few times before adding.", urgent: false },
          ].map(p => (
            <div key={p.param} style={{
              background: p.urgent ? "rgba(239, 68, 68, 0.06)" : "rgba(255,255,255,0.03)",
              border: `1px solid ${p.urgent ? "rgba(239, 68, 68, 0.2)" : "rgba(255,255,255,0.08)"}`,
              borderRadius: "14px", padding: "16px",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "14px", margin: 0 }}>{p.param}</p>
                <span style={{
                  fontSize: "12px", fontWeight: "800", padding: "2px 10px", borderRadius: "999px",
                  background: p.urgent ? "rgba(239,68,68,0.15)" : "rgba(44,196,214,0.1)",
                  color: p.urgent ? "#ef4444" : "var(--reef)",
                }}>{p.target}</span>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: "1.5", margin: 0 }}>{p.why}</p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div style={{
          background: "rgba(44, 196, 214, 0.06)", border: "2px solid rgba(44, 196, 214, 0.2)",
          borderRadius: "16px", padding: "24px", marginBottom: "48px",
          display: "flex", gap: "16px", alignItems: "flex-start",
        }}>
          <span style={{ fontSize: "28px", flexShrink: 0 }}>💡</span>
          <div>
            <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "16px", marginBottom: "8px" }}>
              Log your parameters before adding fish — not after.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
              If NH3 or NO2 show up after you've added fish, you're in crisis mode. Log first, confirm zero, then go to the fish store. <strong style={{ color: "var(--text-light)" }}>NextUpReef</strong> tracks your last log date on the dashboard so you always know when you last tested.
            </p>
          </div>
        </div>

        {/* App screenshot */}
        <div style={{
          background: "rgba(44, 196, 214, 0.06)", border: "1px solid rgba(44, 196, 214, 0.15)",
          borderRadius: "16px", padding: "24px", marginBottom: "48px", textAlign: "center",
        }}>
          <Image
            src="/images/blog/SCREENSHOT_LIVESTOCK_01.png"
            alt="NextUpReef log screen showing ammonia and nitrite at 0 ppm before adding first fish"
            width={320} height={580}
            style={{ borderRadius: "12px", margin: "0 auto 16px", display: "block", maxWidth: "100%" }}
          />
          <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
            <strong style={{ color: "var(--text-light)" }}>NextUpReef</strong> automatically highlights ammonia and nitrite during Phase 4 of the New Tank Guide — so you always know which parameters matter most right now.
          </p>
        </div>

        {/* The one fish rule */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          The One-Fish-at-a-Time Rule
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          This is probably the most important rule in reef keeping that new hobbyists ignore most often. Add one fish. Wait at least two weeks. Test your parameters. If everything stays stable, add another.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          Here's the science behind it: every fish you add increases the ammonia load your biological filter has to process. Your filter — the bacteria colonies living in your rock and sand — needs time to grow to match the new bioload. Add too many fish at once and your ammonia spikes before the bacteria can keep up. This is called a mini-cycle, and it can happen even in a fully cycled tank.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "48px" }}>
          Two weeks gives your bacteria time to expand. It also gives you time to observe the new fish for signs of disease before it can spread to other tank residents.
        </p>

        {/* Hardy beginner fish */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          The Best First Fish for a Reef Tank
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          Not all fish are equal in terms of hardiness, reef safety, and compatibility. These are the best starting options for new reef tanks — chosen for their forgiving nature, disease resistance, and peaceful temperament.
        </p>

        {[
          {
            name: "Ocellaris Clownfish",
            latin: "Amphiprion ocellaris",
            color: "#f97316",
            bg: "rgba(249, 115, 22, 0.07)",
            border: "rgba(249, 115, 22, 0.2)",
            size: "Up to 3.5\"",
            tank: "Any size",
            reefSafe: true,
            difficulty: "Beginner",
            why: "The classic reef fish for a reason. Hardy, disease-resistant, and one of the most adaptable saltwater fish available. A bonded pair is one of the most iconic sights in the hobby. Captive-bred specimens are significantly hardier than wild-caught.",
            notes: "Keep as a single fish or a bonded pair — two clownfish in a tank will establish a dominance hierarchy. The larger becomes female. Completely reef safe.",
          },
          {
            name: "Firefish Goby",
            latin: "Nemateleotris magnifica",
            color: "#8b5cf6",
            bg: "rgba(139, 92, 246, 0.07)",
            border: "rgba(139, 92, 246, 0.2)",
            size: "Up to 3\"",
            tank: "20g+",
            reefSafe: true,
            difficulty: "Beginner",
            why: "Striking coloration, peaceful temperament, and stays small. Firefish hover in the water column near rock, darting into crevices when startled. They're hardy and rarely aggressive toward other fish.",
            notes: "Known jumpers — a covered top is strongly recommended. Can be kept as a pair in larger tanks but may fight in smaller systems.",
          },
          {
            name: "Royal Gramma",
            latin: "Gramma loreto",
            color: "#ec4899",
            bg: "rgba(236, 72, 153, 0.07)",
            border: "rgba(236, 72, 153, 0.2)",
            size: "Up to 3\"",
            tank: "30g+",
            reefSafe: true,
            difficulty: "Beginner",
            why: "Vivid purple and yellow coloration, extremely hardy, and one of the few fish that actively defends its territory without bothering corals or other fish. Feeds readily on most prepared foods.",
            notes: "Territorial toward similar-looking fish (especially other grammas). Keep only one per tank unless the system is large. Occasionally swims upside down near cave ceilings — this is normal.",
          },
          {
            name: "Tailspot Blenny",
            latin: "Ecsenius stigmatura",
            color: "#10b981",
            bg: "rgba(16, 185, 129, 0.07)",
            border: "rgba(16, 185, 129, 0.2)",
            size: "Up to 2.5\"",
            tank: "10g+",
            reefSafe: true,
            difficulty: "Beginner",
            why: "One of the best nano reef fish available. Tailspot blennies are algae grazers, personable, and entertaining to watch. They perch on rock and glass, keeping it clean. Hardy and easy to feed.",
            notes: "May occasionally nip at large-polyp corals (LPS) if underfed. Keep them well-fed with herbivore pellets and nori to prevent this.",
          },
          {
            name: "Green Chromis",
            latin: "Chromis viridis",
            color: "#22c55e",
            bg: "rgba(34, 197, 94, 0.07)",
            border: "rgba(34, 197, 94, 0.2)",
            size: "Up to 3.5\"",
            tank: "55g+ for a school",
            reefSafe: true,
            difficulty: "Beginner",
            why: "Active, hardy, and beautiful in a school. Chromis add movement and life to a reef tank that few other fish replicate. They're one of the most disease-resistant fish in the hobby.",
            notes: "Keep in groups of 5 or more — odd numbers tend to result in fighting until one fish dominates. In small groups, the dominant fish will often bully the others to death. A larger school in a larger tank is the right move.",
          },
        ].map((fish, idx) => (
          <div key={fish.name} style={{
            background: fish.bg, border: `1px solid ${fish.border}`,
            borderRadius: "16px", padding: "24px", marginBottom: "20px",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", flexWrap: "wrap", gap: "8px" }}>
              <div>
                <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "18px", margin: "0 0 4px 0" }}>{fish.name}</p>
                <p style={{ color: "var(--text-muted)", fontWeight: "700", fontSize: "13px", fontStyle: "italic", margin: 0 }}>{fish.latin}</p>
              </div>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {[fish.size, fish.tank, fish.difficulty].map(tag => (
                  <span key={tag} style={{
                    fontSize: "11px", fontWeight: "700", padding: "3px 10px", borderRadius: "999px",
                    background: fish.bg, border: `1px solid ${fish.border}`, color: fish.color,
                  }}>{tag}</span>
                ))}
                <span style={{
                  fontSize: "11px", fontWeight: "700", padding: "3px 10px", borderRadius: "999px",
                  background: "rgba(34,197,94,0.1)", color: "#22c55e",
                }}>✓ Reef Safe</span>
              </div>
            </div>
            <div style={{ marginBottom: "12px" }}>
              <p style={{ color: fish.color, fontWeight: "900", fontSize: "11px", letterSpacing: "0.05em", margin: "0 0 4px 0" }}>WHY IT'S A GREAT STARTER</p>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>{fish.why}</p>
            </div>
            <div>
              <p style={{ color: fish.color, fontWeight: "900", fontSize: "11px", letterSpacing: "0.05em", margin: "0 0 4px 0" }}>THINGS TO KNOW</p>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>{fish.notes}</p>
            </div>
          </div>
        ))}

        {/* Fish to avoid */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
          Fish to Avoid in Your First Year
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "24px" }}>
          Some fish are sold in every fish store and look incredible in the display tank. They're also consistently responsible for new reefer heartbreak. Avoid these until you have more experience:
        </p>

        <div style={{
          background: "rgba(239, 68, 68, 0.05)", border: "1px solid rgba(239, 68, 68, 0.15)",
          borderRadius: "16px", overflow: "hidden", marginBottom: "48px",
        }}>
          {[
            { fish: "Tangs (any species)", reason: "Need large tanks (75g+ for most), highly susceptible to ich, and require significant swimming space. A common cause of disease outbreaks in new tanks." },
            { fish: "Mandarins", reason: "Almost exclusively eat live copepods. Without a mature, heavily populated refugium, they slowly starve. Not a beginner fish despite being commonly sold as one." },
            { fish: "Flame Angels", reason: "Hardy but frequently nip at LPS corals and clam mantles. Unpredictable behavior makes them a risk in a new mixed reef." },
            { fish: "Lionfish", reason: "Require large tanks, eat other fish, and their spines are venomous. Not a reef fish in any real sense." },
            { fish: "Seahorses", reason: "Extremely fragile, require specialized feeding (live or trained onto frozen mysid), and have no place in a general reef tank with other fish." },
          ].map((row, idx) => (
            <div key={row.fish} style={{
              padding: "16px 20px", borderTop: idx > 0 ? "1px solid rgba(239,68,68,0.1)" : "none",
              display: "flex", gap: "14px", alignItems: "flex-start",
            }}>
              <span style={{ color: "#ef4444", fontWeight: "900", fontSize: "16px", flexShrink: 0, marginTop: "2px" }}>✕</span>
              <div>
                <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "14px", margin: "0 0 4px 0" }}>{row.fish}</p>
                <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.5", margin: 0 }}>{row.reason}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quarantine */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          Should You Quarantine?
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          Every fish in a fish store has been through significant stress — collection, shipping, holding tanks with hundreds of other fish. Even healthy-looking fish can carry ich, velvet, or bacterial infections that won't become visible for days or weeks.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          A simple quarantine tank — a 10–20 gallon bare-bottom tank with a sponge filter and heater — lets you observe and treat new fish before they ever touch your display tank. If disease appears, you treat it in the QT and protect your main system.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          The standard quarantine protocol is 4–6 weeks of observation. Prophylactic treatment with copper-based medication (for ich/velvet) during this period is practiced by many experienced reefers.
        </p>

        <div style={{
          background: "rgba(44, 196, 214, 0.06)", border: "2px solid rgba(44, 196, 214, 0.2)",
          borderRadius: "16px", padding: "24px", marginBottom: "48px",
          display: "flex", gap: "16px", alignItems: "flex-start",
        }}>
          <span style={{ fontSize: "28px", flexShrink: 0 }}>💡</span>
          <div>
            <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "16px", marginBottom: "8px" }}>
              Quarantine is a convenience investment, not a luxury.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
              A $30 QT setup can prevent you from having to break down your entire display tank to treat ich — a process that requires removing all fish and leaving the tank fallow for 72+ days. The math is obvious. Most reefers who skip QT once and regret it never skip it again.
            </p>
          </div>
        </div>

        {/* After adding */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          After Adding: What to Watch For
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          The first 72 hours after adding a new fish are the highest-risk period. Log your parameters every day for the first week. Look for these warning signs:
        </p>

        {[
          { sign: "Fish not eating after 48 hours", severity: "Monitor", action: "Try different foods — frozen mysis, brine shrimp, nori. Some fish take a few days to settle. If no eating by day 5, investigate further." },
          { sign: "White spots on skin (like grains of salt)", severity: "Act Fast", action: "This is likely ich (Cryptocaryon irritans). Remove the affected fish to a QT immediately and begin copper treatment. Do not add anything to the display tank." },
          { sign: "Velvet-like dusting on skin, clamped fins", severity: "Emergency", action: "Marine velvet (Amyloodinium) is more lethal than ich and moves faster. Immediate QT and treatment. Can kill a fish in 24–48 hours." },
          { sign: "Ammonia spike in water test", severity: "Act Fast", action: "A mini-cycle is happening. Increase flow and aeration, do a 20% water change, and don't add any more fish until it resolves." },
          { sign: "Hiding constantly after day 3", severity: "Monitor", action: "Some fish are shy initially. If eating and breathing normally, give it another week. If not eating and hiding, consider stress-related illness." },
        ].map((item, idx) => (
          <div key={idx} style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px", padding: "16px", marginBottom: "12px",
            display: "flex", gap: "14px", alignItems: "flex-start",
          }}>
            <span style={{
              fontSize: "11px", fontWeight: "800", padding: "3px 8px", borderRadius: "6px", flexShrink: 0, marginTop: "2px",
              background: item.severity === "Emergency" ? "rgba(239,68,68,0.15)" : item.severity === "Act Fast" ? "rgba(249,115,22,0.15)" : "rgba(234,179,8,0.15)",
              color: item.severity === "Emergency" ? "#ef4444" : item.severity === "Act Fast" ? "#f97316" : "#eab308",
            }}>{item.severity.toUpperCase()}</span>
            <div>
              <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "14px", margin: "0 0 6px 0" }}>{item.sign}</p>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.5", margin: 0 }}>{item.action}</p>
            </div>
          </div>
        ))}

        {/* App screenshot */}
        <div style={{
          background: "rgba(44, 196, 214, 0.06)", border: "1px solid rgba(44, 196, 214, 0.15)",
          borderRadius: "16px", padding: "24px", marginBottom: "48px", textAlign: "center", marginTop: "32px",
        }}>
          <Image
            src="/images/blog/SCREENSHOT_LIVESTOCK_02.png"
            alt="NextUpReef tank tab showing first fish added with health tracking"
            width={320} height={580}
            style={{ borderRadius: "12px", margin: "0 auto 16px", display: "block", maxWidth: "100%" }}
          />
          <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
            Add your fish in the Tank tab of <strong style={{ color: "var(--text-light)" }}>NextUpReef</strong> to track each addition by date, health status, and species. Your livestock history becomes part of your tank's permanent record.
          </p>
        </div>

        {/* When are you ready for corals */}
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginBottom: "16px" }}>
          When Are You Ready for Corals?
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "16px" }}>
          Many new reefers want to add corals immediately after fish. The correct answer is: not yet. Here's the benchmark:
        </p>
        {[
          "Parameters have been stable for at least 30 consecutive days",
          "Ammonia and nitrite are consistently at 0 ppm",
          "Nitrate is below 20 ppm — ideally under 10",
          "Your cleanup crew is established and keeping up with the tank",
          "You've been logging at least weekly and have data to show the trend",
        ].map((item, idx) => (
          <div key={idx} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "12px" }}>
            <span style={{ color: "#22c55e", fontWeight: "900", fontSize: "16px", flexShrink: 0, marginTop: "1px" }}>✓</span>
            <p style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: "1.7", margin: 0 }}>{item}</p>
          </div>
        ))}

        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-muted)", margin: "32px 0 48px 0" }}>
          When you hit all five of those, you're ready for Phase 5 — your first corals. That's where reef keeping graduates from a chemistry experiment into something genuinely beautiful.
        </p>

        {/* Next up */}
        <div style={{
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px", padding: "28px", marginBottom: "48px",
        }}>
          <p style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: "700", marginBottom: "8px", letterSpacing: "0.05em" }}>NEXT IN THE SERIES</p>
          <Link href="/blog/adding-first-corals" style={{ textDecoration: "none" }}>
            <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "20px", marginBottom: "8px" }}>
              Adding Your First Corals: Where to Start →
            </p>
          </Link>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.6", margin: 0 }}>
            Parameters are stable, fish are thriving — now it's time for corals. Why softies and zoas first, which corals to avoid in year one, and how to keep alkalinity stable when corals start consuming it.
          </p>
        </div>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Adding Your First Fish to a Reef Tank: The Beginner's Guide",
              description: "How to choose your first fish, the one-at-a-time rule, and what parameters to confirm before anything goes in.",
              author: { "@type": "Organization", name: "NextUpReef" },
              publisher: { "@type": "Organization", name: "NextUpReef", url: "https://nextupreef.com" },
              url: "https://nextupreef.com/blog/first-livestock",
              datePublished: "2026-04-01",
            }),
          }}
        />
      </div>
    </section>
  );
}
