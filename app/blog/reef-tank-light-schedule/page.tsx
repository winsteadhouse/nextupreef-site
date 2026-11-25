import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reef Tank Light Schedule: Hours, Ramping and Height",
  description:
    "A reef tank light schedule that works: 8 to 10 hours of peak light with ramps, rough PAR ranges by coral type, mounting height and acclimation.",
  alternates: {
    canonical: "https://nextupreef.com/blog/reef-tank-light-schedule",
  },
  openGraph: {
    title: "Reef Tank Light Schedule: Hours, Ramping and Height",
    description:
      "How long reef tank lights should be on, how to ramp them, rough PAR ranges for soft corals, LPS, SPS and clams, and how high to hang the light.",
    url: "https://nextupreef.com/blog/reef-tank-light-schedule",
    images: [{ url: "/brand/og-image-v2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Reef Tank Light Schedule: Hours, Ramping and Height",
  description:
    "A reef tank lighting schedule explained: photoperiod length, ramp up and ramp down, PAR ranges by coral type, mounting height, acclimation and the signs of too much or too little light.",
  image: "https://nextupreef.com/brand/og-image-v2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo-v2.png" },
  },
  datePublished: "2026-11-25",
  dateModified: "2026-11-25",
  mainEntityOfPage: "https://nextupreef.com/blog/reef-tank-light-schedule",
};

const faqs = [
  {
    q: "How long should reef tank lights be on?",
    a: "Most reef tanks run roughly 8 to 10 hours of full or near full light, inside a longer window that includes a ramp up and a ramp down. The exact numbers matter less than running the same schedule every day and changing it slowly.",
  },
  {
    q: "How high should my light be for soft corals?",
    a: "There is no single height that suits every fixture. Mount the light within the height range its maker recommends for your tank size and depth, then set the intensity for soft corals, which generally do well in lower light. Most of the adjustment comes from intensity and coral placement, not from height.",
  },
  {
    q: "What PAR do corals need?",
    a: "Commonly quoted rough guides are about 50 to 150 PAR for soft corals and mushrooms, 75 to 200 for most LPS, and 200 to 350 or more for SPS. These vary by species and by tank, and many corals adapt to a range if the change is gradual.",
  },
  {
    q: "Do reef tanks need a dark period at night?",
    a: "Yes. Corals and fish are adapted to a day and night cycle, so give the tank a real stretch of darkness every night. Dim moonlight is optional and is mostly for viewing. If you use it, keep it very dim and do not run it all night.",
  },
  {
    q: "Will cutting my light hours get rid of algae?",
    a: "It can slow algae down, but it treats the symptom. Algae needs both light and nutrients, so a shorter photoperiod helps most when you also deal with the nutrient source. Do not cut light so far that your corals suffer.",
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

const parRanges = [
  {
    coral: "Soft corals and mushrooms",
    par: "About 50 to 150",
    notes: "Generally the most forgiving. Mushrooms often prefer the low end and shaded spots.",
  },
  {
    coral: "LPS",
    par: "About 75 to 200",
    notes: "Many LPS do well in low to moderate light. Some bleach quickly if placed too high.",
  },
  {
    coral: "SPS",
    par: "About 200 to 350, sometimes more",
    notes: "The most demanding group. Needs stable water chemistry to make use of strong light.",
  },
  {
    coral: "Clams",
    par: "Moderate to high, depending on species",
    notes: "Needs vary a lot between species. Look up the one you own before placing it.",
  },
];

const schedule = [
  { time: "10:00 to 12:00", stage: "Ramp up", what: "Blue channels come on first, then intensity rises slowly to the peak setting." },
  { time: "12:00 to 20:00", stage: "Peak", what: "Eight hours at your full program. This is the part that counts as the photoperiod." },
  { time: "20:00 to 22:00", stage: "Ramp down", what: "Whites fade first, then blues fall back toward zero." },
  { time: "22:00 to 23:00", stage: "Dim blue viewing (optional)", what: "Very low blue for watching the tank in the evening. Skip it if you do not use it." },
  { time: "23:00 to 10:00", stage: "Dark", what: "Lights fully off." },
];

const signs = [
  {
    much: "Bleaching: tissue turns white as the coral loses its symbiotic algae",
    little: "Browning: colors turn dull and brown as the coral packs in more symbiotic algae",
  },
  {
    much: "Paling or washed out color, usually on the surfaces facing the light",
    little: "Stretching: the coral reaches or grows up toward the light",
  },
  {
    much: "Retraction: polyps stay closed or tissue pulls in during peak hours",
    little: "Slow growth with thin, leggy branches or stalks",
  },
  {
    much: "Tends to show soon after a change: a new light, a higher setting or a move up the rock",
    little: "Tends to creep in over weeks or months",
  },
];

export default function ReefTankLightSchedulePost() {
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
          Reef Tank Light Schedule
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Lighting", "PAR", "Corals"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Reef Tank Light Schedule: Hours, Ramping and Height
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          November 25, 2026 · 8 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            Most reef tanks do well on <strong style={strong}>roughly 8 to 10 hours of full or near full light</strong>, inside a longer window that ramps up at the start and down at the end. That is the whole schedule for most people.
          </p>
          <p>
            Consistency matters more than the exact numbers. A plain schedule that runs the same way every day beats a clever one that gets adjusted every weekend. When you do change something, change it slowly.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Quick Answer:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={strong}>Peak light:</strong> roughly 8 to 10 hours a day</li>
              <li><strong style={strong}>Ramps:</strong> a gradual rise before the peak and a gradual fall after it</li>
              <li><strong style={strong}>Night:</strong> a real dark period, every night</li>
              <li><strong style={strong}>Height:</strong> within the fixture maker&apos;s recommended range for your tank</li>
              <li><strong style={strong}>Changes:</strong> small steps, spread over weeks</li>
            </ul>
          </div>

          <h2 style={h2Style}>What Corals Need From Light</h2>
          <p>
            Most reef corals host symbiotic algae in their tissue. The algae photosynthesize and pass much of the energy to the coral. Your light is feeding those algae, so three things matter.
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>Intensity.</strong> Measured as PAR, short for photosynthetically active radiation. It is the amount of usable light reaching a given spot in the tank. PAR falls as you go deeper and as you move away from the center of the fixture.</li>
            <li><strong style={strong}>Spectrum.</strong> Reef lighting is weighted toward blue and violet, the part of the spectrum that travels furthest through seawater and that coral symbionts use well. White channels mainly change how the tank looks to you. How much white to run is partly a matter of taste, and hobbyists disagree on it.</li>
            <li><strong style={strong}>Photoperiod.</strong> The number of hours the light runs each day. More hours do not make up for too little intensity, and corals do not need a longer day than a tropical reef gets.</li>
          </ul>
          <p>
            Light is only one input. Corals use strong light well only when alkalinity, calcium and nutrients are stable. The{" "}
            <Link href="/blog/reef-tank-parameters-chart" style={link}>reef tank parameters chart</Link> lists the targets by tank type.
          </p>

          <h2 style={h2Style}>PAR for Corals: Rough Ranges by Type</h2>
          <p>
            These are commonly quoted ranges, measured at the coral. Treat them as rough guides. Needs vary by species, by where the coral was grown, and by your water. Many corals adapt to a fairly wide range if they get there gradually.
          </p>
          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Coral type</th>
                  <th style={th}>Commonly quoted PAR</th>
                  <th style={th}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {parRanges.map((row) => (
                  <tr key={row.coral}>
                    <td style={td}>{row.coral}</td>
                    <td style={td}>{row.par}</td>
                    <td style={td}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            One tank covers several of these zones at once. The top of the rockwork under the fixture gets far more light than the sand at the edges. That is useful: place each coral where the light suits it. If you are choosing your first pieces, start with the forgiving ones in{" "}
            <Link href="/blog/adding-first-corals" style={link}>adding your first corals</Link>.
          </p>

          <h2 style={h2Style}>A Sample Daily Schedule</h2>
          <p>
            Here is one example, built around evening viewing. It is a starting point to adapt, not a prescription. Shift the whole thing earlier or later to match when you are home.
          </p>
          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Time</th>
                  <th style={th}>Stage</th>
                  <th style={th}>What the light does</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row) => (
                  <tr key={row.time}>
                    <td style={td}>{row.time}</td>
                    <td style={td}>{row.stage}</td>
                    <td style={td}>{row.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Ramps are gentler on fish than lights snapping on in a dark room, and they stretch your viewing time without adding hours of full intensity. Ramp length is flexible. Anything from 30 minutes to a couple of hours at each end is common.
          </p>
          <p>
            If your light has no ramp feature, a plain timer still works. Many tanks ran on simple on and off timers for years. Turning the room lights on a little before the tank lights softens the change.
          </p>

          <h2 style={h2Style}>How High to Hang the Light</h2>
          <p>
            Height is a trade between spread and intensity.
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>Higher.</strong> Wider spread, more even coverage and better color blending, with lower intensity at the coral. More light also spills outside the tank.</li>
            <li><strong style={strong}>Lower.</strong> More intensity directly below the fixture, a smaller footprint, and harder shadows under rock ledges and overhangs.</li>
          </ul>
          <p>
            No single number fits every light. The right height depends on the optics, the output and your tank&apos;s length, width and depth. Start inside the height range the fixture maker recommends for your tank, then fine tune with intensity. If the ends of the tank are dim, the usual fix is to raise the light a little or add a second fixture, not to turn one fixture up.
          </p>
          <p>
            For a soft coral tank, the same rule applies. Softies need less light, so mount within the maker&apos;s range and run a lower intensity. Small tanks are the tricky case, because a strong light close to shallow water can deliver a lot of PAR. The{" "}
            <Link href="/blog/nano-reef-tank-guide" style={link}>nano reef tank guide</Link> covers that. For even coverage over frag racks, see the{" "}
            <Link href="/blog/frag-tank-setup-guide" style={link}>frag tank setup guide</Link>.
          </p>

          <h2 style={h2Style}>Acclimating Corals to a New or Stronger Light</h2>
          <p>
            Corals adjust to light slowly. A sudden jump in intensity is one of the most common causes of bleaching, and it happens with new fixtures, replaced bulbs, a cleaned lens or splash guard, and corals moved from a dim store tank to a bright display.
          </p>
          <ol style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={strong}>Start low.</strong> Run a new or stronger light at clearly reduced intensity compared with where you plan to end up.</li>
            <li><strong style={strong}>Raise it slowly.</strong> Step the intensity up a little at a time over several weeks. If your light has an acclimation mode, use it. It does this for you.</li>
            <li><strong style={strong}>Place new corals low.</strong> Start a new coral on the sand or low on the rock, then move it up in stages if it needs more.</li>
            <li><strong style={strong}>Watch and pause.</strong> If corals pale or stay closed, hold the setting or step back, and give them time before trying again.</li>
          </ol>

          <h2 style={h2Style}>Too Much Light or Too Little</h2>
          <p>
            These signs point you in a direction. They are not proof. Swings in alkalinity, temperature or nutrients, and pests, can cause the same symptoms, so check your water before you blame the light.
          </p>
          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Signs of too much light</th>
                  <th style={th}>Signs of too little light</th>
                </tr>
              </thead>
              <tbody>
                {signs.map((row) => (
                  <tr key={row.much}>
                    <td style={td}>{row.much}</td>
                    <td style={td}>{row.little}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Browning is also a classic sign of high nutrients, so read it alongside your nitrate and phosphate. Whichever way you adjust, move in small steps and wait a couple of weeks before judging the result.
          </p>

          <h2 style={h2Style}>Light and Nuisance Algae</h2>
          <p>
            Algae needs light and nutrients together. A long photoperiod gives it more hours to grow, and many reefers find that heavy white, red and green channels encourage it more than a blue weighted program. When nutrients are available, extra light turns into extra algae.
          </p>
          <p>
            Cutting an hour or two from the peak can slow an outbreak, and it is a reasonable step. It treats the symptom, though. If the nutrient source stays, the algae comes back when the hours do. Work on both sides using the{" "}
            <Link href="/blog/reef-tank-nitrate-phosphate-guide" style={link}>nitrate and phosphate guide</Link> and the guide to{" "}
            <Link href="/blog/cyanobacteria-dinoflagellates-algae-reef-pests" style={link}>cyanobacteria, dinoflagellates and algae</Link>.
          </p>
          <p>
            A new tank is a special case. Before there are corals, there is nothing that needs the light, so many people keep it off or very low through the cycle and{" "}
            <Link href="/blog/the-ugly-phase" style={link}>the ugly phase</Link>, then build up as corals go in.
          </p>

          <h2 style={h2Style}>Moonlight and the Dark Period</h2>
          <p>
            Your tank needs a real night. Corals and fish are adapted to a daily cycle of light and dark, and many corals extend feeding tentacles after the lights go out. Running lights around the clock is not a way to get more growth.
          </p>
          <p>
            Moonlight is optional. A very dim blue setting for an hour or so in the evening is mostly for your enjoyment, and there is no good evidence that a home reef needs it. If you use it, keep it far dimmer than you think, and still give the tank hours of full darkness.
          </p>

          <h2 style={h2Style}>Rent or Borrow a PAR Meter</h2>
          <p>
            You cannot judge PAR by eye. Blue heavy light looks dim to people and can still be intense for a coral. A percentage on a light&apos;s app tells you nothing about what reaches the rock, because that depends on the fixture, the height, the water depth and how clean the lens is.
          </p>
          <p>
            A PAR meter settles it, and you rarely need to own one. Many local fish stores and reef clubs rent or lend them, and some online retailers run rental programs. Measure at the sand, the middle of the rockwork and the top, in the center and at the ends. Write the numbers down next to the settings that produced them. Meter types differ in how well they read blue heavy LEDs, so treat readings as approximate.
          </p>

          <h2 style={h2Style}>Common Mistakes</h2>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={strong}>Changing settings too often.</strong> Corals take weeks to respond. If you adjust every few days, you never see the result of any one change.</li>
            <li><strong style={strong}>Copying someone else&apos;s percentages.</strong> Another reefer&apos;s settings come from a different tank depth, mounting height and sometimes a different fixture. Copy the approach, then measure your own tank.</li>
            <li><strong style={strong}>Running full intensity on a new tank.</strong> A new tank has few corals to use the light and plenty of algae ready to. Start low and build up as the tank fills in.</li>
            <li><strong style={strong}>Not keeping a record.</strong> When a coral pales a month after a change, you need to know what the schedule was before.</li>
          </ul>
          <p>
            That last one is easy to fix. NextUpReef keeps a lighting schedule record for each tank alongside your equipment list, so you can see what you were running when something changed. If you are still choosing a light, the{" "}
            <Link href="/blog/tank-setup" style={link}>tank setup guide</Link> covers where it fits in the build.
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
            Pick a sensible schedule, mount the light where its maker says it belongs, bring the intensity up slowly, and then leave it alone. Corals reward a steady light far more than a perfect one.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Keep your lighting schedule on record with NextUpReef, free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Record each tank&apos;s lighting schedule next to its equipment list, so you know what you were running when something changed. Pro can show the status of Red Sea ReefLED lights. iOS and Android, with a 30-day Pro trial and no credit card.
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
