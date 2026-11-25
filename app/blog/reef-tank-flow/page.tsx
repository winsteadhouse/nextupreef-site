import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reef Tank Flow: How Much You Need and Pump Placement",
  description:
    "How much flow a reef tank needs by coral type, how many powerheads to run, where to aim them, and how to tell if you have too much or too little.",
  alternates: {
    canonical: "https://nextupreef.com/blog/reef-tank-flow",
  },
  openGraph: {
    title: "Reef Tank Flow: How Much You Need and Pump Placement",
    description:
      "Turnover ranges for soft coral, LPS, mixed and SPS tanks, how many pumps to use, wavemaker placement, wave modes and how to find dead spots.",
    url: "https://nextupreef.com/blog/reef-tank-flow",
    images: [{ url: "/brand/og-image-v2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Reef Tank Flow: How Much You Need and Pump Placement",
  description:
    "How much water movement a reef tank needs, turnover ranges by tank type, how many powerheads to use, where to place and aim wavemakers, and how to read corals and sand for flow problems.",
  image: "https://nextupreef.com/brand/og-image-v2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo-v2.png" },
  },
  datePublished: "2026-11-25",
  dateModified: "2026-11-25",
  mainEntityOfPage: "https://nextupreef.com/blog/reef-tank-flow",
};

const faqs = [
  {
    q: "How much flow does a reef tank need?",
    a: "Enough that nothing settles and every coral sits in gently moving, changing water. As a rough starting point, soft coral tanks are often run at about 10 to 20 times the display volume per hour of in-tank flow, and SPS tanks at 40 times or more. Your corals and sand are a better guide than the number.",
  },
  {
    q: "How many powerheads do I need for a reef tank?",
    a: "Two smaller pumps on opposite sides usually work better than one large one, because they cover more of the tank and let you vary the pattern. A small nano tank can do well with one. Long or heavily stocked tanks often need three or more.",
  },
  {
    q: "Where should I place a wavemaker in a reef tank?",
    a: "Mount it in the upper half of the tank, aimed across open water toward the surface, the opposite pump or the far glass. Do not point it straight at a coral. Adjust until you see movement behind and between the rocks as well as in front.",
  },
  {
    q: "Can a reef tank have too much flow?",
    a: "Yes. Signs include tissue pulled back on the side of a coral that faces the pump, polyps that stay closed, soft corals bent flat, and sand blown into piles. Turn the pump down, aim it away, or switch to a wider or more varied pattern.",
  },
  {
    q: "Does the return pump count toward reef tank flow?",
    a: "It adds a little, but its job is to move water through the sump for filtration. Most of the water movement inside the display should come from powerheads or wavemakers.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const h2Style: CSSProperties = {
  fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px",
};
const tableStyle: CSSProperties = { width: "100%", borderCollapse: "collapse", fontSize: "15px" };
const th: CSSProperties = {
  color: "var(--text-light)", textAlign: "left", padding: "10px 12px",
  borderBottom: "1px solid rgba(255,255,255,0.12)",
};
const td: CSSProperties = { padding: "10px 12px", borderTop: "1px solid rgba(255,255,255,0.06)" };
const strong: CSSProperties = { color: "var(--text-light)" };
const link: CSSProperties = { color: "var(--reef)", fontWeight: 700 };

const turnover = [
  {
    type: "Soft corals",
    range: "About 10 to 20 times",
    note: "Gentle, swaying movement. Many soft corals close up in a hard, direct current.",
  },
  {
    type: "LPS",
    range: "About 20 to 30 times",
    note: "Moderate and indirect. Fleshy tissue tears on the skeleton if it is blasted.",
  },
  {
    type: "Mixed reef",
    range: "About 20 to 40 times",
    note: "Create stronger and calmer zones, then place each coral where it suits.",
  },
  {
    type: "SPS",
    range: "About 40 times and up",
    note: "Strong, turbulent and varied. Some SPS keepers run well above this.",
  },
];

const signs = [
  {
    little: "Detritus settles on the sand and rock and stays there",
    much: "Sand is blown into piles or the glass bottom is exposed",
  },
  {
    little: "Cyano or film algae keeps returning in the same corner",
    much: "Tissue pulls back on the side of a coral that faces the pump",
  },
  {
    little: "Corals hang limp and polyps barely move",
    much: "Polyps stay closed, or soft corals are bent flat or folded over",
  },
  {
    little: "Leather corals struggle to shed their waxy film",
    much: "LPS flesh is pushed hard against the skeleton",
  },
  {
    little: "An oily film sits on the water surface",
    much: "Fish avoid part of the tank or struggle to hold position",
  },
  {
    little: "Food drops straight to the bottom",
    much: "Food is swept into the overflow before anything can eat it",
  },
];

export default function ReefTankFlowPost() {
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
          Reef Tank Flow
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Flow", "Powerheads", "Wavemakers"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Reef Tank Flow: How Much You Need and Pump Placement
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          November 25, 2026 · 8 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            A reef tank needs <strong style={strong}>enough flow that nothing settles and every coral sits in gently moving, changing water.</strong> Soft corals want less, SPS want a lot, and LPS sit in between.
          </p>
          <p>
            The pattern matters as much as the amount. Varied, random movement beats a strong, steady stream. A coral in a constant jet is being sandblasted. A coral in shifting, turbulent water is being fed and cleaned.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Quick Answer:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={strong}>Goal:</strong> no dead spots, and every coral gently moving</li>
              <li><strong style={strong}>Rough in-tank turnover:</strong> about 10 to 20 times the display volume per hour for soft corals, rising to 40 times or more for SPS</li>
              <li><strong style={strong}>Pumps:</strong> two smaller ones on opposite sides usually beat one large one</li>
              <li><strong style={strong}>Aim:</strong> at the surface, at each other or at the glass, never straight at a coral</li>
              <li><strong style={strong}>Pattern:</strong> varied and random, not strong and steady</li>
            </ul>
          </div>

          <h2 style={h2Style}>Why Flow Matters</h2>
          <p>
            Corals cannot move. Everything they need has to be carried to them, and everything they shed has to be carried away. Water movement does four jobs in a reef tank.
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>Gas exchange.</strong> Oxygen enters and carbon dioxide leaves at the water surface. A rippling surface exchanges gas far better than a still one, which helps both oxygen levels and pH.</li>
            <li><strong style={strong}>Feeding and cleaning coral tissue.</strong> Moving water brings food and dissolved nutrients to the coral and carries away waste and mucus. In still water a coral sits in its own used water.</li>
            <li><strong style={strong}>Keeping detritus suspended.</strong> Fish waste and uneaten food can only be removed by your filter socks and skimmer if they stay in the water long enough to reach the overflow.</li>
            <li><strong style={strong}>Discouraging cyano in dead spots.</strong> Cyanobacteria mats tend to appear where water is slow and waste collects. Flow alone does not cure cyano, since nutrients matter too, but dead spots make it more likely. Our guide to{" "}
              <Link href="/blog/cyanobacteria-dinoflagellates-algae-reef-pests" style={link}>cyanobacteria, dinoflagellates and algae</Link> covers the other causes.</li>
          </ul>

          <h2 style={h2Style}>Return Pump Flow and In-Tank Flow Are Different Things</h2>
          <p>
            If your tank has a sump, you have two kinds of flow. The return pump sends water from the sump back up to the display, and the same amount drains back down through the overflow. That loop exists to carry water through your filtration. It is usually kept fairly modest, and sizing it is covered in the{" "}
            <Link href="/blog/reef-tank-sump-guide" style={link}>reef tank sump guide</Link>.
          </p>
          <p>
            In-tank flow comes from powerheads and wavemakers mounted inside the display. They do not move water through any filter. They just stir the tank. This is where most of the movement your corals feel should come from, and it is the number the rest of this post is about.
          </p>
          <p>
            Tanks without a sump, including many all-in-one nano tanks, rely on a small return pump plus one powerhead. The{" "}
            <Link href="/blog/nano-reef-tank-guide" style={link}>nano reef tank guide</Link> covers that setup.
          </p>

          <h2 style={h2Style}>Turnover by Tank Type: a Rule of Thumb</h2>
          <p>
            Turnover is the combined hourly output of your powerheads divided by the volume of the display. A 40 gallon tank with pumps that add up to 800 gallons per hour has 20 times turnover.
          </p>
          <p>
            The ranges below are the ones hobbyists commonly quote. Treat them as rough starting points, not targets. The right amount depends on the type of pump, the shape of your rockwork and what your corals show you, and experienced reefers disagree on the exact figures.
          </p>
          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Tank type</th>
                  <th style={th}>In-tank turnover per hour</th>
                  <th style={th}>What to aim for</th>
                </tr>
              </thead>
              <tbody>
                {turnover.map((row) => (
                  <tr key={row.type}>
                    <td style={td}>{row.type}</td>
                    <td style={td}>{row.range}</td>
                    <td style={td}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            <strong style={strong}>The rating on the box does not tell the whole story.</strong> Wide-flow, propeller style pumps push a broad, soft column of water. A narrow jet with the same rating hits much harder at a single point. Two tanks with the same turnover number can feel completely different to the corals in them.
          </p>
          <p>
            Rated output is also measured with a clean pump at full power. A controllable pump running a pulsing mode at part power moves less than its headline figure.
          </p>
          <p>
            As a worked example, take a 40 gallon soft coral tank. The range above suggests roughly 400 to 800 gallons per hour of in-tank flow. Two small wide-flow pumps, one on each end, cover that comfortably, and controllable pumps let you start low and turn up.
          </p>

          <h2 style={h2Style}>How Many Pumps</h2>
          <p>
            Two smaller pumps on opposite sides usually beat one large one. A single pump leaves a shadow behind every rock it hits, and the water closest to it gets far more force than the far end.
          </p>
          <p>
            Two pumps cover each other&apos;s shadows. Where their streams meet, the water breaks into the turbulent, random movement corals do best in. You also keep some circulation if one pump fails or is out for cleaning.
          </p>
          <p>
            A small nano tank can do well with one pump. Long tanks, deep tanks and tanks with a lot of rock often need three or more to reach every area.
          </p>

          <h2 style={h2Style}>Placement and Aiming</h2>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>Aim at the surface.</strong> Angle at least one pump slightly upward so the surface ripples. Stop short of pulling air into the pump or splashing.</li>
            <li><strong style={strong}>Aim at each other or at the glass.</strong> Opposing streams collide and scatter. A stream that hits the front or far glass spreads out and rolls back along the bottom.</li>
            <li><strong style={strong}>Never aim straight at a coral.</strong> If a coral sits in the direct line of a pump, move the coral or the pump.</li>
            <li><strong style={strong}>Use the gaps in your rockwork.</strong> Open channels and arches let water pass through the structure instead of stopping at it. Rock stacked tight against the back glass creates a wall with still water behind it.</li>
            <li><strong style={strong}>Consider a gyre along the back.</strong> A long, crossflow style pump, or a pump on each end wall pointed along the back glass, can set the whole tank turning in one loop: across the top one way and back along the bottom the other. This suits long tanks well.</li>
          </ul>
          <p>
            Plan the flow before the corals go in, because it decides where each one can live. The{" "}
            <Link href="/blog/adding-first-corals" style={link}>guide to adding your first corals</Link> covers matching corals to flow and light.
          </p>

          <h2 style={h2Style}>Wave Modes in Plain Terms</h2>
          <p>
            Controllable pumps offer modes that change speed over time. Names differ between makers, but most fall into a few groups.
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>Constant.</strong> One fixed speed. Simple, and fine as a baseline when two pumps cross each other.</li>
            <li><strong style={strong}>Pulse.</strong> The pump ramps up and down in a rhythm. A short pulse creates a back and forth surge, and in some tanks a visible standing wave.</li>
            <li><strong style={strong}>Random.</strong> The speed changes unpredictably. This is the closest to a natural reef and a good default for mixed tanks.</li>
            <li><strong style={strong}>Alternating.</strong> Two pumps take turns, so the flow direction reverses every so often. Corals get moved from both sides.</li>
            <li><strong style={strong}>Night mode.</strong> Flow drops for the hours the lights are off. This is optional, and the tank still needs enough surface movement overnight.</li>
            <li><strong style={strong}>Feed mode.</strong> The pumps pause or slow for a few minutes, then resume. More on this below.</li>
          </ul>

          <h2 style={h2Style}>Read Your Corals and Sand</h2>
          <p>
            Your tank shows you whether the flow is right more reliably than any calculation. Check it against these signs.
          </p>
          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Signs of too little flow</th>
                  <th style={th}>Signs of too much flow</th>
                </tr>
              </thead>
              <tbody>
                {signs.map((row) => (
                  <tr key={row.little}>
                    <td style={td}>{row.little}</td>
                    <td style={td}>{row.much}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            A closed or unhappy coral has many possible causes, including lighting and water chemistry, so do not blame flow on one sign alone. Make one change at a time and give the coral several days to respond.
          </p>

          <h2 style={h2Style}>Finding Dead Spots</h2>
          <p>
            A dead spot is anywhere water barely moves. The easiest way to find them is to watch where things settle. Feed the tank with the pumps running and follow the food. Wherever it drops and stays is a dead spot. A day later, the same places will have a layer of detritus.
          </p>
          <p>
            Common dead spots are behind the rockwork, in the back corners, under overhangs and directly beneath the pumps. Fix them by re-aiming a pump, opening up the rock, or adding a small pump pointed along the back.
          </p>

          <h2 style={h2Style}>Flow and the Sand Bed</h2>
          <p>
            Sand limits how much flow you can run near the bottom. Fine sand lifts easily and ends up in drifts, on the rocks and on your corals. Coarser grains stay put under stronger flow, and some SPS keepers go without sand so they can run as much flow as they like.
          </p>
          <p>
            If sand is moving, raise the pumps, angle them up, or switch to a wider or more varied pattern before you give up on flow altogether. You want just enough movement across the sand surface to keep waste from settling, without shifting the grains.
          </p>

          <h2 style={h2Style}>Clean Your Pumps</h2>
          <p>
            Pump output drops as the pump fouls. Coralline algae, calcium deposits and slime build up on the impeller and the intake guard, and a pump can lose a noticeable share of its flow without looking any different from across the room.
          </p>
          <p>
            Take each pump out on a regular schedule, soak it in a mild acid solution such as diluted white vinegar or citric acid, scrub it, and rinse it well before it goes back. Follow the maker&apos;s instructions for how often and how strong. If your corals look less lively than they did a few months ago and nothing else has changed, a dirty pump is a likely reason.
          </p>

          <h2 style={h2Style}>Feed Mode: Why Pausing Pumps Helps</h2>
          <p>
            With the pumps at full power, a lot of food is swept past the fish and into the overflow within seconds. Pausing or slowing the pumps for a few minutes lets food hang in the water where fish can catch it and lets it settle onto coral polyps long enough to be taken in.
          </p>
          <p>
            Keep the pause short and make sure the pumps come back on. A timed feed mode that resumes by itself is safer than switching pumps off by hand and forgetting them.
          </p>
          <p>
            NextUpReef keeps an equipment list for each tank, so your pumps are recorded alongside everything else. With Pro you can connect Jebao and Jecod WiFi pumps and Red Sea ReefRun and ReefWave gear, and use Feed Mode to pause the pumps you choose with one tap. Setup is covered in{" "}
            <Link href="/blog/connect-jebao-pump" style={link}>connecting a Jebao pump</Link> and{" "}
            <Link href="/blog/connect-red-sea-reefrun" style={link}>connecting Red Sea ReefRun</Link>, and there is more on running a tank this way in{" "}
            <Link href="/blog/reef-tank-automation-without-a-controller" style={link}>reef tank automation without a controller</Link>.
          </p>

          <h2 style={h2Style}>Frequently Asked Questions</h2>

          {faqs.map((faq) => (
            <div key={faq.q}>
              <p><strong style={strong}>{faq.q}</strong></p>
              <p>{faq.a}</p>
            </div>
          ))}

          <h2 style={h2Style}>Final Thought</h2>
          <p>
            Use the turnover ranges to choose pumps, then let the tank tell you the rest. If nothing settles, the surface ripples, and every coral is moving without being flattened, your flow is right, whatever the number says.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Keep your pumps and gear in one place with NextUpReef, free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Keep an equipment list for each tank. Pro connects Jebao and Jecod WiFi pumps and Red Sea ReefRun and ReefWave gear, with a Feed Mode that pauses the pumps you choose with one tap. iOS and Android, with a 30-day Pro trial and no credit card.
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
