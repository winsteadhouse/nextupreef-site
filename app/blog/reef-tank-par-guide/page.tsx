import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reef Tank PAR: Levels for Corals and How to Measure It",
  description:
    "What PAR means in a reef tank, rough PAR levels for soft corals, LPS and SPS, why it changes across the tank, how to measure it with a PAR meter and how to use the numbers.",
  alternates: {
    canonical: "https://nextupreef.com/blog/reef-tank-par-guide",
  },
  openGraph: {
    title: "Reef Tank PAR: Levels for Corals and How to Measure It",
    description:
      "PAR explained for reef keepers: what it is, rough ranges by coral type, why the back and bottom of a tank read lower, measuring with a PAR meter and mapping your tank.",
    url: "https://nextupreef.com/blog/reef-tank-par-guide",
    images: [{ url: "/brand/og-image-v2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Reef Tank PAR: Levels for Corals and How to Measure It",
  description:
    "PAR in a reef tank explained: what it measures, commonly quoted PAR ranges for soft corals, LPS and SPS, why PAR varies with depth and position, how to use a PAR meter, and how to place corals from the readings.",
  image: "https://nextupreef.com/brand/og-image-v2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo-v2.png" },
  },
  datePublished: "2026-11-28",
  dateModified: "2026-11-28",
  mainEntityOfPage: "https://nextupreef.com/blog/reef-tank-par-guide",
};

const faqs = [
  {
    q: "What is a good PAR for a reef tank?",
    a: "There is no single number, because a reef tank should have a range. Commonly quoted rough guides are about 50 to 150 PAR for soft corals and mushrooms, 75 to 200 for most LPS, and 200 to 350 or more for SPS. A mixed reef works best with dimmer areas low and at the edges and brighter areas high and central, so each coral can go where it suits.",
  },
  {
    q: "What does PAR stand for?",
    a: "Photosynthetically active radiation. It is the light in the 400 to 700 nanometre band that photosynthesis can use, and in a reef tank it is measured as the amount of that light landing on a spot each second. The unit is micromoles per square metre per second, usually just called PAR.",
  },
  {
    q: "Can I measure PAR with a phone app or a lux meter?",
    a: "Not reliably. Lux is weighted to what human eyes see, which is mostly green and yellow, and reef lights are heavy in blue and violet. A lux reading or phone app can be far off under blue LED light and cannot be used underwater. A PAR meter with an underwater sensor is the tool for the job, and many stores and clubs rent them.",
  },
  {
    q: "Why is PAR lower at the bottom of the tank?",
    a: "Light spreads out as it travels away from the fixture, and water, particles and anything dissolved in it absorb and scatter some on the way down. Rockwork and corals above also cast shade. The sand in a deep tank can read a fraction of what the top of the rock reads under the same light.",
  },
  {
    q: "Is too much PAR bad for corals?",
    a: "Yes. Too much light, or a sudden increase, causes paling and bleaching as the coral loses its symbiotic algae. Corals adapt to higher light slowly, so raise intensity in small steps over weeks and watch the coral, not only the number.",
  },
  {
    q: "Does PAR tell me everything about my lighting?",
    a: "No. PAR is the amount of usable light. It does not describe the spectrum, how long the lights are on, or how evenly the light is spread. Two tanks at the same PAR can look and grow differently. It is still the most useful single number for deciding where a coral goes.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
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

const ranges = [
  { coral: "Mushrooms and low light soft corals", par: "About 50 to 100", where: "The sand, shaded ledges and the edges of the tank." },
  { coral: "Most soft corals and zoanthids", par: "About 50 to 150", where: "Low to middle of the rockwork. Many tolerate more once settled." },
  { coral: "LPS", par: "About 75 to 200", where: "The sand and lower to middle rock. Fleshy LPS often bleach if placed too high." },
  { coral: "SPS", par: "About 200 to 350, sometimes more", where: "The upper rockwork under the fixtures, with strong flow and stable chemistry." },
  { coral: "Clams and anemones", par: "Moderate to high, by species", where: "Needs differ a lot. Look up the species you own before placing it." },
];

const causes = [
  { what: "Depth", why: "Light spreads and is absorbed on the way down. The sand reads much lower than the top of the rock." },
  { what: "Distance from the fixture", why: "PAR is highest directly under a light and falls away toward the ends and corners." },
  { what: "Front to back", why: "A light hung toward the front glass leaves the back wall dimmer, and the reverse." },
  { what: "Shade", why: "Overhangs, large colonies, overflow boxes and braces all cast shadows that the eye barely notices." },
  { what: "What is between the light and the water", why: "Glass lids, mesh tops, salt creep and a dirty lens each take a share." },
  { what: "Water clarity", why: "Yellowed or cloudy water absorbs more light than clear water." },
];

export default function ReefTankParGuidePost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 20px" }}>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "32px" }}>
          <Link href="/" style={{ color: "var(--reef)" }}>Home</Link>
          {" › "}
          <Link href="/blog" style={{ color: "var(--reef)" }}>Blog</Link>
          {" › "}
          Reef Tank PAR
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["PAR", "Lighting", "Corals"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Reef Tank PAR: Levels for Corals and How to Measure It
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          November 28, 2026 · 8 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            PAR is <strong style={strong}>the amount of usable light reaching a spot in your tank.</strong> As a rough guide, soft corals do well at about 50 to 150, most LPS at 75 to 200, and SPS at 200 to 350 or more.
          </p>
          <p>
            Those numbers only help if you know what your own tank reads, and you cannot tell by looking. This guide covers what PAR is, the ranges corals are usually kept at, why the number changes so much across one tank, and how to measure it.
          </p>

          <h2 style={h2Style}>What PAR Means</h2>
          <p>
            PAR stands for photosynthetically active radiation: light in the 400 to 700 nanometre band, which is the part photosynthesis can use. Corals depend on it because the symbiotic algae in their tissue turn that light into food.
          </p>
          <p>
            In a reef tank PAR is measured as the amount of that light landing on a spot each second. The full unit is micromoles per square metre per second. Reef keepers shorten it to a plain number, as in &ldquo;150 PAR&rdquo;.
          </p>
          <p>
            PAR is not the same as watts, lumens or lux. Watts are the power a fixture draws. Lumens and lux are weighted to what human eyes see, which is mostly green and yellow. Reef lights are heavy in blue and violet, which look dim to people and are intense for a coral. That is why a tank can look gloomy and still bleach a coral.
          </p>

          <h2 style={h2Style}>PAR Levels for Corals</h2>
          <p>
            These are commonly quoted starting points, not rules. Needs vary by species and by tank, and many corals adapt across a wide range if the change is slow.
          </p>
          <div style={{ overflowX: "auto", margin: "20px 0" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Coral</th>
                  <th style={th}>Commonly quoted PAR</th>
                  <th style={th}>Usual placement</th>
                </tr>
              </thead>
              <tbody>
                {ranges.map((r) => (
                  <tr key={r.coral}>
                    <td style={{ ...td, color: "var(--text-light)", fontWeight: 700 }}>{r.coral}</td>
                    <td style={td}>{r.par}</td>
                    <td style={td}>{r.where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            A mixed reef does not want one PAR value. It wants a spread: dim areas low and at the edges, bright areas high and central. Your job is to find out where each zone is, then put each coral in the one that suits it.
          </p>

          <h2 style={h2Style}>Why PAR Changes Across One Tank</h2>
          <p>
            A single fixture produces very different readings a few inches apart. These are the usual reasons:
          </p>
          <div style={{ overflowX: "auto", margin: "20px 0" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Cause</th>
                  <th style={th}>What it does</th>
                </tr>
              </thead>
              <tbody>
                {causes.map((c) => (
                  <tr key={c.what}>
                    <td style={{ ...td, color: "var(--text-light)", fontWeight: 700, whiteSpace: "nowrap" }}>{c.what}</td>
                    <td style={td}>{c.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Front to back is the one people miss. Most readings get taken along the front glass because it is easy to reach, and the back of the tank is assumed to match. It often does not.
          </p>

          <h2 style={h2Style}>How to Measure PAR</h2>
          <p>
            You need a <strong style={strong}>PAR meter with an underwater sensor</strong>, sometimes called a quantum meter. A phone app or a lux meter will not do: they are built around human vision, they misread blue heavy LED light, and they cannot go in the water.
          </p>
          <p>
            Meters are not cheap, and you only need one for an afternoon. Many local fish stores and reef clubs rent or lend them, and some online retailers run rental programs.
          </p>
          <p>
            Two things affect accuracy. A sensor reads differently underwater than in air, and some sensors under-read deep blue and violet light. Check the maker&apos;s instructions for any correction your model needs. For placing corals, being consistent matters more than being exact: the same meter, held the same way, at the same light settings.
          </p>
          <ul style={{ paddingLeft: "22px" }}>
            <li><strong style={strong}>Measure at peak.</strong> Use the settings the corals live under for most of the day, after any ramp has finished.</li>
            <li><strong style={strong}>Hold the sensor level,</strong> facing straight up, and let the number settle before you read it.</li>
            <li><strong style={strong}>Leave lids and covers on</strong> if they are normally on.</li>
            <li><strong style={strong}>Work in a pattern:</strong> the sand, the middle of the rock and the top, on the left, centre and right, at the front and at the back.</li>
            <li><strong style={strong}>Write every reading down</strong> with where it was taken, and note the light settings.</li>
          </ul>

          <h2 style={h2Style}>Turn the Readings Into a Map</h2>
          <p>
            A list of numbers is hard to use a month later. A map is not: readings placed on a picture of the tank show the bright and dim zones at a glance.
          </p>

          <div style={{ maxWidth: "340px", margin: "28px auto", borderRadius: "22px", overflow: "hidden", border: "1px solid rgba(44,196,214,0.25)", boxShadow: "0 20px 60px rgba(0,0,0,0.45)" }}>
            <Image src="/screenshots/par/par-map-overview.png" alt="A reef tank PAR map in the NextUpReef app, with PAR meter readings placed over a photo of the tank" width={1080} height={1470} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          <p>
            NextUpReef has a free PAR map built for this. You tap each reading onto a front view of your tank, over your own tank photo, and tag it front, middle or back. The app shades the map, shows the lowest, average and highest reading, lists where each of your corals fits, and saves your light settings with the map. The steps are in{" "}
            <Link href="/blog/reef-tank-par-map" style={link}>how to make a PAR map of your reef tank</Link>.
          </p>
          <p>
            NextUpReef only maps readings you measured. It does not estimate PAR from a fixture or a setting, because a made-up number is worse than no number.
          </p>

          <h2 style={h2Style}>Using PAR to Place Corals</h2>
          <ul style={{ paddingLeft: "22px" }}>
            <li><strong style={strong}>Start new corals lower than their range suggests.</strong> A coral that has been in a dim store tank or a shipping bag needs time. Move it up over a few weeks.</li>
            <li><strong style={strong}>Match the coral to a zone, not a single number.</strong> Anywhere inside the range is fine. Flow and how much room it has to grow matter as well.</li>
            <li><strong style={strong}>Watch the coral.</strong> Paling or bleaching on the side facing the light means too much. Browning or stretching toward the light means too little.</li>
            <li><strong style={strong}>Leave a healthy coral alone.</strong> If it is growing and coloured well, it does not need to move because of a chart.</li>
          </ul>

          <h2 style={h2Style}>Changing Your Light From a PAR Reading</h2>
          <p>
            If the map shows the tank is dimmer or brighter than your corals want, change the light in small steps and give the corals a couple of weeks before the next one. Then measure again, because the map you have describes the old settings.
          </p>
          <p>
            Raising or lowering the fixture changes the spread as well as the intensity. Higher gives more even coverage and less at any one spot. Lower gives more punch under the light and darker edges. Photoperiod, ramps and acclimation are covered in the{" "}
            <Link href="/blog/reef-tank-light-schedule" style={link}>reef tank light schedule guide</Link>.
          </p>

          <h2 style={h2Style}>When to Measure Again</h2>
          <ul style={{ paddingLeft: "22px" }}>
            <li>After changing light settings, or adding, swapping or moving a fixture</li>
            <li>After changing the mounting height</li>
            <li>After reworking the rock</li>
            <li>When a coral has grown enough to shade what is under it</li>
            <li>When corals that were doing well start to pale or brown with no change in water chemistry</li>
          </ul>
          <p>
            Light is one of several things that decide how a coral does. Stable alkalinity, calcium and magnesium, nutrients that are not at zero, and good flow matter as much. If those are off, more light will not fix it. See the{" "}
            <Link href="/blog/reef-tank-parameters-chart" style={link}>reef tank parameters chart</Link> and the{" "}
            <Link href="/blog/reef-tank-flow" style={link}>reef tank flow guide</Link>.
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
            You cannot see PAR, so measure it once and write it down where you will find it again. A map of your own tank is worth more than any chart of what corals are supposed to want.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Map your tank&apos;s PAR with NextUpReef, free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Put your PAR meter readings on a front view of your own tank, see where each coral fits, and keep your light settings with every map. iOS and Android, with a 30-day Pro trial and no credit card.
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
