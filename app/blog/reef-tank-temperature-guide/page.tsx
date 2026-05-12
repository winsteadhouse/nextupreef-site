import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reef Tank Temperature: Ideal Range and How to Control It",
  description:
    "Complete guide to reef tank temperature — ideal range, summer cooling, winter heating, heater sizing, controllers, and how to prevent the swings that crash tanks.",
  alternates: {
    canonical: "https://nextupreef.com/blog/reef-tank-temperature-guide",
  },
  openGraph: {
    title: "Reef Tank Temperature: Ideal Range and How to Control It",
    description:
      "Target reef tank temperature, heater sizing, summer cooling strategies, and how to prevent the temperature swings that crash tanks.",
    url: "https://nextupreef.com/blog/reef-tank-temperature-guide",
    images: [{ url: "/brand/splash2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Reef Tank Temperature: Ideal Range and How to Control It",
  description:
    "Ideal reef tank temperature ranges, heater sizing, summer cooling, and how to prevent dangerous swings.",
  image: "https://nextupreef.com/brand/splash2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-05-09",
  dateModified: "2026-05-09",
  mainEntityOfPage: "https://nextupreef.com/blog/reef-tank-temperature-guide",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the ideal temperature for a reef tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ideal reef tank temperature is 76 to 80°F (24.4 to 26.7°C). Most reefers target 78°F (25.5°C) as their setpoint. Stability matters more than the exact number — a tank steady at 79°F is healthier than one that swings between 76 and 82°F.",
      },
    },
    {
      "@type": "Question",
      name: "Can a reef tank get too hot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Anything above 82°F starts to stress corals. Above 84°F, fish struggle with reduced oxygen. Above 86°F is dangerous — extended exposure can cause coral bleaching and livestock death. Summer heat is a real risk, especially in apartments without AC.",
      },
    },
    {
      "@type": "Question",
      name: "How big a heater do I need for my reef tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use roughly 3 to 5 watts of heater per gallon. A 50 gallon tank needs 150 to 250W. Split the load across two heaters when possible — if one fails open or shut, the other prevents disaster. Always run heaters through an external temperature controller for safety.",
      },
    },
    {
      "@type": "Question",
      name: "How do I cool a reef tank in summer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cheapest cooling strategy is increased evaporation — point a small fan across the sump or display surface. This drops temperature 2 to 4 degrees. For serious heat (90°F+ rooms), you may need a chiller. Keep the room as cool as you can and reduce lighting intensity during heatwaves.",
      },
    },
  ],
};

export default function ReefTankTempPost() {
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
          Reef Tank Temperature Guide
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Temperature", "Equipment", "Stability"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Reef Tank Temperature: Ideal Range and How to Control It
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          May 9, 2026 · 8 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            Temperature is the parameter most likely to kill your reef tank — and most reefers don&apos;t take it seriously enough. A stuck heater can cook a tank in 12 hours. A power outage in winter can freeze livestock overnight. A summer heatwave can bleach an entire SPS collection. None of these are rare events.
          </p>
          <p>
            This guide covers ideal reef tank temperature ranges, how to size and protect your heaters, how to cool a tank in summer, and how to track temperature so you spot problems before they kill things.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            What Temperature Should a Reef Tank Be?
          </h2>
          <p>
            Healthy reef tanks run between 76 and 80°F (24 to 27°C). Pick a setpoint in that range, hold it, and don&apos;t look back. The most common targets are 77, 78, and 79°F — all are fine.
          </p>
          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Reef Tank Temperature Reference:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={{ color: "var(--text-light)" }}>Ideal range:</strong> 76 – 80°F (24 – 27°C)</li>
              <li><strong style={{ color: "var(--text-light)" }}>Common setpoint:</strong> 78°F (25.5°C)</li>
              <li><strong style={{ color: "var(--text-light)" }}>Acceptable swing:</strong> ±1°F daily</li>
              <li><strong style={{ color: "var(--text-light)" }}>Concerning:</strong> Above 82°F or below 74°F for hours</li>
              <li><strong style={{ color: "var(--text-light)" }}>Dangerous:</strong> Above 84°F or below 72°F sustained</li>
              <li><strong style={{ color: "var(--text-light)" }}>Fatal zone:</strong> Above 86°F or below 68°F for any extended time</li>
            </ul>
          </div>
          <p>
            Reefers debate whether higher temps drive faster coral growth. There&apos;s some truth to it — corals at 80°F do grow faster than corals at 76°F. But the risk grows just as fast. A tank running at 80°F has 2°F of headroom before stress. A tank at 76°F has 6°F. For most readers, the lower setpoint is the safer choice.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Why Stability Matters More Than the Exact Number
          </h2>
          <p>
            A tank that holds 78°F all day, every day, is healthier than one that swings between 76 and 81°F daily. Corals don&apos;t care about the absolute temperature as much as they care about consistency. Big swings stress the symbiotic algae living in coral tissue, which causes bleaching even at otherwise safe temps.
          </p>
          <p>
            Common causes of temperature swings:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li>Heater turning on and off too aggressively (cheap heaters do this)</li>
            <li>Lights raising temp 2 to 4°F during the photoperiod, then dropping at night</li>
            <li>HVAC cycling — especially in rooms with seasonal swings</li>
            <li>Open sumps with high evaporation cooling the water</li>
            <li>Sun hitting the tank for part of the day</li>
            <li>Undersized heater struggling to maintain setpoint</li>
          </ul>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Heater Sizing
          </h2>
          <p>
            Use 3 to 5 watts of heater per gallon of total system volume (display + sump). More wattage isn&apos;t better — it just means the heater works harder when it fails on.
          </p>
          <div style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Heater Sizing Reference:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={{ color: "var(--text-light)" }}>20 gallon tank:</strong> 1 × 75W heater</li>
              <li><strong style={{ color: "var(--text-light)" }}>40 gallon tank:</strong> 1 × 150W or 2 × 75W</li>
              <li><strong style={{ color: "var(--text-light)" }}>75 gallon tank:</strong> 2 × 150W</li>
              <li><strong style={{ color: "var(--text-light)" }}>120 gallon tank:</strong> 2 × 200W</li>
              <li><strong style={{ color: "var(--text-light)" }}>180+ gallon tank:</strong> 2 × 300W or inline titanium heater</li>
            </ul>
          </div>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Always use two smaller heaters instead of one big one.</strong> When a heater fails open (stuck on), a 300W heater cooks the tank dramatically faster than a 150W. When a heater fails shut, you still have the second one keeping the tank warm. This single rule prevents more tank disasters than any other heater best practice.
          </p>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Heater Controllers Are Mandatory
          </h2>
          <p>
            Heater built-in thermostats fail constantly. They wear out, stick in the open position, or drift over time. Always run heaters through an external temperature controller that overrides the heater&apos;s own thermostat.
          </p>
          <p>
            Good controllers in the $30 to $80 range:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Inkbird ITC-308:</strong> Cheap, reliable, runs one heater plus a backup outlet for a fan.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Ranco ETC-111000:</strong> Industrial-grade, basically indestructible.</li>
            <li><strong style={{ color: "var(--text-light)" }}>BRS reef-rated controllers:</strong> Built for reef use, integrate with controllers.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Apex / Neptune controller temp module:</strong> If you have a full controller, just plug heaters into a temperature-controlled outlet.</li>
          </ul>
          <p>
            Set the heater&apos;s own thermostat 1 to 2°F higher than your target, then let the external controller cut power at the actual setpoint. The external controller is your safety net.
          </p>

          <div style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}>
            <img
              src="/screenshots/phone-charts-v2.png"
              alt="Temperature trend chart in NextUpReef"
              style={{ width: "100%", maxWidth: "280px", borderRadius: "24px", boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}
            />
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Cooling a Reef Tank in Summer
          </h2>
          <p>
            Summer is when most reef disasters happen. Power outages, AC failures, hot apartments — all push tanks into the danger zone. The cooling options, from cheap to expensive:
          </p>
          <ol style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li>
              <strong style={{ color: "var(--text-light)" }}>Fans over the sump (cheap, very effective).</strong> A USB or computer fan blowing across the sump or display surface drops temperature 2 to 4°F through evaporative cooling. ATO has to keep up with the extra evaporation — usually doubles or triples evap rate.
            </li>
            <li>
              <strong style={{ color: "var(--text-light)" }}>Reduce lighting intensity or photoperiod.</strong> LEDs add 2 to 5°F of heat. Cutting peak intensity by 30 percent during a heatwave is a quick win. Save your corals — they&apos;ll adapt back to full light when the room cools.
            </li>
            <li>
              <strong style={{ color: "var(--text-light)" }}>Run a chiller (expensive, definitive).</strong> If the room hits 90°F regularly, fans won&apos;t cut it. A 1/10 HP chiller handles a 75 gallon tank. Hammered-aluminum brands like JBJ Arctica are quiet and reliable. Expect $400+ used or $700+ new.
            </li>
            <li>
              <strong style={{ color: "var(--text-light)" }}>Keep the room cool.</strong> Cheap window AC for the tank room is usually less than half the cost of a chiller and benefits you too.
            </li>
            <li>
              <strong style={{ color: "var(--text-light)" }}>Crack a window at night.</strong> Cheapest cooling in shoulder seasons. The tank releases heat overnight as room temp drops.
            </li>
          </ol>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Winter Considerations
          </h2>
          <p>
            Winter is when stuck-open heaters cause the most damage. Cold rooms force heaters to work harder, which means more wear, which means more failures. A few defensive moves:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li>Run two heaters splitting the load — described above.</li>
            <li>External controller — non-negotiable in winter.</li>
            <li>Replace heaters every 2 to 3 years preemptively. They&apos;re cheap. Don&apos;t wait for failure.</li>
            <li>Have a battery backup or generator for the heater circuit during winter storms.</li>
            <li>Don&apos;t place the tank near drafty windows or exterior walls.</li>
          </ul>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Tracking Temperature Over Time
          </h2>
          <p>
            A single temperature reading is almost useless — temperature changes throughout the day, throughout the seasons, and with every cycle of your HVAC. What matters is the pattern. A chart of daily highs and lows over weeks tells you whether your heater is reliable, whether your lighting is adding too much heat, and whether a heatwave is creeping into the danger zone.
          </p>
          <p>
            NextUpReef logs every temperature reading and plots it on a chart. You see your daily range at a glance. If your tank started cycling 4°F daily where it used to be 1°F, something changed — and you have evidence to investigate.{" "}
            <Link href="/blog/how-to-track-saltwater-aquarium-parameters" style={{ color: "var(--reef)", fontWeight: 700 }}>
              See our parameter tracking guide →
            </Link>
          </p>

          <div style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}>
            <img
              src="/screenshots/phone-ai-v2.png"
              alt="AI reef tank advice flagging temperature issues"
              style={{ width: "100%", maxWidth: "280px", borderRadius: "24px", boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}
            />
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Common Temperature Mistakes
          </h2>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Trusting the heater&apos;s built-in thermostat.</strong> They fail. Always use an external controller.</li>
            <li><strong style={{ color: "var(--text-light)" }}>One big heater instead of two small ones.</strong> Single point of failure. Always split the load.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Chasing high temps for &quot;faster growth.&quot;</strong> A 1°F warmer tank isn&apos;t worth the bleaching risk during a heatwave.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Ignoring lighting heat.</strong> LED lights add real heat. Account for the spike during photoperiod when setting your max temperature alarm.</li>
            <li><strong style={{ color: "var(--text-light)" }}>No temperature alarm.</strong> A controller (or NextUpReef notifications) that pings you when temperature crosses a threshold is the difference between catching a stuck heater and losing the tank.</li>
            <li><strong style={{ color: "var(--text-light)" }}>Not replacing aging heaters.</strong> A 4-year-old heater that&apos;s still &quot;working&quot; is a ticking clock. Replace preemptively.</li>
          </ul>

          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px" }}>
            Final Thought
          </h2>
          <p>
            Temperature isn&apos;t the parameter reefers chase — but it&apos;s the one that kills tanks fastest when it goes wrong. Stuck heaters, summer heat, and winter outages don&apos;t care how clean your alkalinity numbers look. Two heaters, an external controller, a fan for summer, and consistent tracking is the whole defense. Set it up once and stop worrying about it.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Track your reef tank temperature with NextUpReef — free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Log every reading, watch trends across seasons, and get AI alerts when temperature drifts. iOS and Android.
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
