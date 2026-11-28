import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Make a PAR Map of Your Reef Tank",
  description:
    "Make a PAR map of your reef tank step by step: where to hold the meter, how many readings to take, how to record front and back, and how to use the map to place corals.",
  alternates: {
    canonical: "https://nextupreef.com/blog/reef-tank-par-map",
  },
  openGraph: {
    title: "How to Make a PAR Map of Your Reef Tank",
    description:
      "A step by step PAR map: readings on a front view of your tank, tagged front, middle or back, with a shaded map and where each coral fits.",
    url: "https://nextupreef.com/blog/reef-tank-par-map",
    images: [{ url: "/brand/og-image-v2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Make a PAR Map of Your Reef Tank",
  description:
    "How to map PAR in a reef tank with a PAR meter: preparing the tank, where to take readings, recording front, middle and back, reading the shaded map and placing corals from it.",
  image: "https://nextupreef.com/brand/og-image-v2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo-v2.png" },
  },
  datePublished: "2026-11-28",
  dateModified: "2026-11-28",
  mainEntityOfPage: "https://nextupreef.com/blog/reef-tank-par-map",
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to make a PAR map of a reef tank",
  description: "Map the light in a reef tank with a PAR meter and the NextUpReef app.",
  tool: [{ "@type": "HowToTool", name: "PAR meter with an underwater sensor" }],
  step: [
    { "@type": "HowToStep", name: "Set the lights", text: "Run the lights at their normal peak settings and wait for any ramp to finish." },
    { "@type": "HowToStep", name: "Open the PAR map", text: "In NextUpReef open My Reef, tap the Lights tab, then tap PAR map." },
    { "@type": "HowToStep", name: "Take a reading and tap the spot", text: "Hold the sensor level at a spot in the tank, tap the same spot on the front view of your tank, and type the number the meter shows." },
    { "@type": "HowToStep", name: "Say how far back it was", text: "Pick Front, Middle or Back for each reading, then save it." },
    { "@type": "HowToStep", name: "Cover the tank", text: "Repeat across the sand, the middle of the rockwork and the top, on the left, centre and right. The map shades in after three readings." },
    { "@type": "HowToStep", name: "Check where corals fit", text: "Tap a coral in the list to light up the parts of the tank inside its PAR range." },
  ],
};

const faqs = [
  {
    q: "How many PAR readings do I need for a PAR map?",
    a: "Three is the minimum before a map can be shaded, and it will be rough. A dozen or more gives a useful picture of a typical tank: the sand, the middle of the rockwork and the top, each on the left, in the centre and on the right. Add more wherever you plan to put a coral.",
  },
  {
    q: "Can I make a PAR map without a PAR meter?",
    a: "No. The percentage on a light's app and a fixture's wattage do not tell you what reaches the rock, and NextUpReef does not estimate PAR from a fixture. Many local fish stores and reef clubs rent or lend PAR meters, so you rarely need to buy one.",
  },
  {
    q: "Why does the back of my tank read lower than the front?",
    a: "Light falls off as you move away from the point directly under a fixture, and rockwork, overflow boxes and the back wall shade what is behind them. A light mounted toward the front glass will read higher at the front than at the back. Tagging each reading Front, Middle or Back shows that difference as a number.",
  },
  {
    q: "How often should I redo a PAR map?",
    a: "Whenever something that changes the light changes: new settings or a new fixture, a different mounting height, a changed aquascape, or a coral that has grown enough to shade what is under it. Each map is saved with its date and the light settings it was measured under, so you can compare old and new.",
  },
  {
    q: "Is the shading on the map measured?",
    a: "The numbers are your own meter readings. The colour between them is an estimate worked out from the nearest readings, so it is only as good as how close together your readings are. Take extra readings in any area where the exact value matters.",
  },
  {
    q: "Is the PAR map free in NextUpReef?",
    a: "Yes. Entering readings, the shaded map and the coral fit list are free. With NextUpReef Pro, Goby and the Reef Advisor also read your PAR map and use your own readings when you ask where to place a coral.",
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
const strong: CSSProperties = { color: "var(--text-light)" };
const link: CSSProperties = { color: "var(--reef)", fontWeight: 700 };
const shot: CSSProperties = {
  maxWidth: "340px", margin: "28px auto", borderRadius: "22px", overflow: "hidden",
  border: "1px solid rgba(44,196,214,0.25)", boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
};
const caption: CSSProperties = { textAlign: "center", fontSize: "14px", marginTop: "-14px", marginBottom: "28px" };

export default function ReefTankParMapPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 20px" }}>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "32px" }}>
          <Link href="/" style={{ color: "var(--reef)" }}>Home</Link>
          {" › "}
          <Link href="/blog" style={{ color: "var(--reef)" }}>Blog</Link>
          {" › "}
          How to Make a PAR Map
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["PAR", "Lighting", "How-To"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          How to Make a PAR Map of Your Reef Tank
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          November 28, 2026 · 6 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            A PAR map is <strong style={strong}>a picture of your tank with a light reading at each spot you measured.</strong> It tells you where the bright and dim areas are, so you can put each coral where the light suits it instead of guessing.
          </p>
          <p>
            You need a PAR meter with an underwater sensor and about twenty minutes. This guide walks through it with the PAR map in NextUpReef, which is free. If you want the background first, read{" "}
            <Link href="/blog/reef-tank-par-guide" style={link}>reef tank PAR explained</Link>.
          </p>

          <div style={shot}>
            <Image src="/screenshots/par/par-map-overview.png" alt="NextUpReef PAR map showing PAR meter readings over a photo of a reef tank, with the lowest, average and highest reading below" width={1080} height={1470} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <p style={caption}>A finished map: your readings over your own tank photo.</p>

          <h2 style={h2Style}>Before You Start</h2>
          <ul style={{ paddingLeft: "22px" }}>
            <li><strong style={strong}>Run the lights at peak.</strong> Measure at the settings your corals live under for most of the day. If the lights ramp, wait until the ramp has finished.</li>
            <li><strong style={strong}>Keep everything else normal.</strong> Leave lids, mesh tops and diffusers where they usually are, because they all reduce the light.</li>
            <li><strong style={strong}>Check the meter.</strong> Some sensors need a correction for underwater use or for blue heavy LED light. Follow the maker&apos;s instructions so your numbers are comparable from one session to the next.</li>
            <li><strong style={strong}>Add a tank photo.</strong> If your tank has a photo in NextUpReef, the map is drawn over it, which makes it far easier to tap the right spot.</li>
            <li><strong style={strong}>Save your light settings.</strong> If your fixtures and their channel levels are in My Reef, they are stored with the map automatically.</li>
          </ul>

          <h2 style={h2Style}>Step 1: Open the PAR Map</h2>
          <p>
            Open <strong style={strong}>My Reef</strong>, tap the <strong style={strong}>Lights</strong> tab, then tap <strong style={strong}>PAR map</strong>. You see your tank from the front, the way you look at it, with the top of the tank at the top and the sand at the bottom.
          </p>

          <h2 style={h2Style}>Step 2: Take a Reading and Tap the Spot</h2>
          <p>
            Hold the sensor level and still at one spot in the tank, facing straight up, and let the number settle. Then tap the same spot on the picture and type the reading.
          </p>

          <div style={shot}>
            <Image src="/screenshots/par/par-map-add-reading.png" alt="Adding a PAR reading in NextUpReef: a marker on the tank photo, the reading typed in, and Front, Middle and Back buttons" width={1080} height={1630} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <p style={caption}>Tap where the sensor was, type the number, pick how far back.</p>

          <h2 style={h2Style}>Step 3: Say How Far Back It Was</h2>
          <p>
            A front view cannot show depth, and depth matters. The same spot on the glass can read very differently near the front pane and against the back wall, especially when a light is mounted toward one side.
          </p>
          <p>
            So each reading is tagged <strong style={strong}>Front</strong>, <strong style={strong}>Middle</strong> or <strong style={strong}>Back</strong>. The chips above the map show the average at each depth. Tap one to see only those readings, with their own shading.
          </p>

          <h2 style={h2Style}>Step 4: Cover the Tank</h2>
          <p>
            Work in a simple pattern so you do not miss an area:
          </p>
          <ul style={{ paddingLeft: "22px" }}>
            <li><strong style={strong}>Three heights:</strong> the sand, the middle of the rockwork, and the top of the rock.</li>
            <li><strong style={strong}>Three positions:</strong> left, centre and right.</li>
            <li><strong style={strong}>Front and back:</strong> repeat the important spots at the front and at the back.</li>
          </ul>
          <p>
            After three readings the map shades in, from blue for dim through green and yellow to red for intense. Every reading saves as you go, so nothing is lost if you put the phone down. Tap any reading to change or remove it.
          </p>
          <p>
            Take extra readings where it matters: under an overhang, behind a large colony, in a corner, and anywhere you plan to put a coral. The colour between readings is an estimate, and more readings make it a better one.
          </p>

          <h2 style={h2Style}>Step 5: See Where Your Corals Fit</h2>
          <p>
            Under the map, NextUpReef lists the corals in your tank with the PAR range each one generally does well in, and how much of your mapped tank falls inside it. Tap a coral and the map fades everything outside its range, leaving the areas that suit it.
          </p>

          <div style={shot}>
            <Image src="/screenshots/par/par-map-coral-fit.png" alt="NextUpReef PAR map with a hammer coral selected, the areas of the tank inside its PAR range lit up and the rest faded" width={1080} height={1315} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <p style={caption}>Hammer coral selected: the bright areas are in its range.</p>

          <p>
            Treat the ranges as a starting point. PAR guidance for corals is approximate, it varies by species and by tank, and many corals adapt across a wide range. A coral that is growing and coloured well where it sits does not need to move because a chart says so.
          </p>

          <h2 style={h2Style}>Step 6: Check the Light Settings Saved With the Map</h2>
          <p>
            Each map stores the lights it was measured under: the fixtures, their channel levels and how high they hang. That is what makes two maps comparable. If a light in the list was not lighting the display, such as a sump light, remove it from the map with the X beside it.
          </p>

          <h2 style={h2Style}>After a Light Change, Make a New Map</h2>
          <p>
            Tap <strong style={strong}>New map</strong> whenever you change settings, raise or lower a fixture, swap a light or rework the rock. Old maps stay, each with its date, so you can see exactly what a change did.
          </p>
          <p>
            When a map tells you a change is needed, make it small, give corals a couple of weeks to adjust, and measure again. Sudden jumps in intensity bleach corals. There is more on that in the{" "}
            <Link href="/blog/reef-tank-light-schedule" style={link}>reef tank light schedule guide</Link>.
          </p>

          <h2 style={h2Style}>Ask About Placement</h2>
          <p>
            With NextUpReef Pro, Goby and the Reef Advisor read your PAR map. Ask where to put a coral and the answer uses your own readings, naming the area and the number, instead of a general rule. If you have not made a map, they say the light level is unknown instead of guessing one.
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
            Twenty minutes with a borrowed meter replaces years of guessing. Map the tank once, place corals from real numbers, and map it again whenever the light changes.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Map your PAR in NextUpReef, free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Readings over your own tank photo, front to back, with where each coral fits and your light settings saved with every map. iOS and Android, with a 30-day Pro trial and no credit card.
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
