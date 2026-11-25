import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Auto Top-Off for a Reef Tank: Do You Need an ATO?",
  description:
    "Do you need an auto top-off for a reef tank? How an ATO works, sensor types, the safety features that matter, reservoir size and safe setup.",
  alternates: {
    canonical: "https://nextupreef.com/blog/auto-top-off-reef-tank",
  },
  openGraph: {
    title: "Auto Top-Off for a Reef Tank: Do You Need an ATO?",
    description:
      "Why evaporation raises salinity, how an ATO holds it steady, how float, optical and electronic sensors compare, and how to set one up so it fails safely.",
    url: "https://nextupreef.com/blog/auto-top-off-reef-tank",
    images: [{ url: "/brand/og-image-v2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Auto Top-Off for a Reef Tank: Do You Need an ATO?",
  description:
    "Whether a reef tank needs an auto top-off, how an ATO works, sensor types, where the sensor goes, safety features, reservoir size, maintenance and nano tank options.",
  image: "https://nextupreef.com/brand/og-image-v2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo-v2.png" },
  },
  datePublished: "2026-11-25",
  dateModified: "2026-11-25",
  mainEntityOfPage: "https://nextupreef.com/blog/auto-top-off-reef-tank",
};

const faqs = [
  {
    q: "Do I need an auto top-off for a reef tank?",
    a: "Not strictly. You can top off by hand every day and keep a healthy tank. An ATO is still one of the most useful pieces of equipment you can add, because it replaces evaporation in small amounts all day, which keeps salinity steadier than most people manage by hand.",
  },
  {
    q: "How does an ATO work?",
    a: "A sensor sits at the water line in the sump's return chamber or an all-in-one tank's rear chamber. When evaporation lowers the level, the sensor tells a controller to run a small pump, which adds fresh RODI water from a reservoir until the level is back to the set point.",
  },
  {
    q: "What size ATO reservoir do I need?",
    a: "Measure how much water your tank loses in a day, then pick a reservoir that holds several days to about a week of that. Avoid one so large that the whole volume could overflow the sump or badly lower salinity if the pump ever stuck on.",
  },
  {
    q: "Can an ATO overflow or crash my tank?",
    a: "It can if it sticks on and has nothing to stop it. That is the main risk of any ATO. A backup high level sensor, a maximum run time cut-off and a sensibly sized reservoir are what limit the damage, so choose a unit with those features and test them.",
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

const sensors = [
  {
    type: "Float switch",
    how: "A small float rises and falls with the water and opens or closes a switch.",
    pros: "Simple, inexpensive and easy to understand. You can test it by lifting the float with a finger.",
    cons: "It has a moving part. Salt creep, calcium buildup or a snail can hold the float up or down. It needs fairly calm water.",
  },
  {
    type: "Optical sensor",
    how: "A small probe uses light to tell whether its tip is in water or in air.",
    pros: "No moving parts, compact, and usually precise about the level it holds.",
    cons: "A film of algae or salt, a bubble or a snail sitting on the tip can give a false reading. It needs regular wiping.",
  },
  {
    type: "Pressure or other electronic sensors",
    how: "The level is sensed indirectly, for example by air pressure in a tube or by an electronic probe.",
    pros: "No moving parts in the water. Some designs keep the sensing parts out of the splash zone.",
    cons: "Designs vary a lot. Some need calibrating or careful mounting, and they tend to cost more. Follow the maker's instructions.",
  },
];

export default function AutoTopOffReefTankPost() {
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
          Auto Top-Off for a Reef Tank
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Auto Top-Off", "Salinity", "Equipment"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Auto Top-Off for a Reef Tank: Do You Need an ATO?
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          November 25, 2026 · 8 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            An auto top-off (ATO) is <strong style={strong}>not strictly required, but it is one of the most useful pieces of equipment you can put on a reef tank.</strong> Fresh water evaporates from the tank every day and the salt stays behind, so salinity creeps up. An ATO replaces that water in small amounts as it goes, so salinity stays steady.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Quick Answer:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={strong}>Required?</strong> No, but strongly worth having, most of all on small or open-top tanks</li>
              <li><strong style={strong}>What goes in it:</strong> fresh RODI water, never saltwater</li>
              <li><strong style={strong}>Where the sensor goes:</strong> the return chamber of the sump, or the return section of an all-in-one tank</li>
              <li><strong style={strong}>Main risk:</strong> a unit stuck on. Look for a backup sensor and a run time cut-off</li>
              <li><strong style={strong}>Reservoir:</strong> several days to a week of your own measured evaporation</li>
            </ul>
          </div>

          <h2 style={h2Style}>Why Evaporation Changes Salinity</h2>
          <p>
            When water evaporates from a saltwater tank, only the water leaves. The salt stays. The same amount of salt in less water means higher salinity.
          </p>
          <p>
            Nothing about this is sudden. Salinity climbs a little each day until you add fresh water, then drops back. Target ranges and how to measure them are in the{" "}
            <Link href="/blog/reef-tank-salinity-guide" style={link}>reef tank salinity guide</Link>.
          </p>
          <p>
            <strong style={strong}>Small tanks swing fastest.</strong> The same amount of evaporation is a much larger share of a small tank&apos;s water than of a large one. Open tops, fans, warm rooms and dry air all speed evaporation up.
          </p>

          <h2 style={h2Style}>How an ATO Works</h2>
          <p>
            Every ATO has the same four parts: a level sensor, a controller, a small pump and a reservoir of fresh water.
          </p>
          <ol style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={strong}>The sensor watches the water line.</strong> It is fixed at the level you want to hold, in the sump or rear chamber.</li>
            <li><strong style={strong}>Evaporation lowers the level.</strong> When the water drops below the sensor, the controller notices.</li>
            <li><strong style={strong}>The pump adds fresh water.</strong> It moves RODI water from the reservoir through a thin tube until the level reaches the sensor again.</li>
            <li><strong style={strong}>The pump stops.</strong> Each top-off is small, so salinity barely moves.</li>
          </ol>

          <h2 style={h2Style}>Sensor Types Compared</h2>
          <p>
            No sensor type is failure proof. Each one fails in its own way.
          </p>
          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Sensor</th>
                  <th style={th}>How it senses</th>
                  <th style={th}>Pros</th>
                  <th style={th}>Cons</th>
                </tr>
              </thead>
              <tbody>
                {sensors.map((row) => (
                  <tr key={row.type}>
                    <td style={td}>{row.type}</td>
                    <td style={td}>{row.how}</td>
                    <td style={td}>{row.pros}</td>
                    <td style={td}>{row.cons}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Hobbyists disagree about which type is most reliable. What matters more is whether the unit has a second, independent way to stop the pump.
          </p>

          <h2 style={h2Style}>Where the Sensor Goes</h2>
          <p>
            In a tank with a sump, the sensor goes in the <strong style={strong}>return chamber</strong>, the section where the return pump sits.
          </p>
          <p>
            The display tank stays at the height of its overflow, and the earlier sump chambers stay at the height of their baffles. When the system loses water, the only level that drops is in the return chamber, so that is the only place a sensor can see evaporation. The{" "}
            <Link href="/blog/reef-tank-sump-guide" style={link}>reef tank sump guide</Link> explains the chambers in more detail.
          </p>
          <p>
            Mount the sensor in calm water and fix it firmly so it cannot slip down. Put the end of the fill tube above the water line, never under it, and away from the sensor.
          </p>

          <h2 style={h2Style}>Safety Features to Look For</h2>
          <p>
            <strong style={strong}>An ATO stuck on is the main risk.</strong> If the sensor reads &quot;low&quot; when the water is not low, the pump keeps running. Fresh water keeps going in, salinity falls, and the sump can overflow onto the floor.
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>A backup or high level sensor.</strong> A second sensor mounted a little above the first. If the water reaches it, the pump is cut off regardless of what the main sensor says.</li>
            <li><strong style={strong}>A maximum run time cut-off.</strong> A normal top-off takes a short time. If the pump runs much longer than that, the controller stops it and raises an alarm.</li>
            <li><strong style={strong}>A leak or empty reservoir alarm.</strong> Some units warn you when water reaches the floor or when the reservoir runs dry.</li>
            <li><strong style={strong}>An anti-siphon arrangement.</strong> Once the pump has filled the tube, water can keep siphoning from the reservoir after the pump stops if the tube&apos;s outlet sits lower than the water in the reservoir. Keep the outlet above the sump water line, and either keep the reservoir&apos;s water level below the outlet or fit the siphon break the maker supplies.</li>
          </ul>

          <h2 style={h2Style}>How Big Should the Reservoir Be?</h2>
          <p>
            Two things pull in opposite directions.
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>Large enough</strong> to cover several days to about a week of evaporation, so a weekend away is not a problem.</li>
            <li><strong style={strong}>Small enough</strong> that if every drop were pumped in at once, the sump could hold it and salinity would not crash.</li>
          </ul>
          <p>
            Evaporation varies widely between tanks and between seasons, so <strong style={strong}>measure your own.</strong> Mark the water line in the return chamber, turn the ATO off for a day, then count how much fresh water it takes to bring the level back to the mark. Repeat it in summer and winter.
          </p>

          <h2 style={h2Style}>Always Top Off With Fresh RODI Water</h2>
          <p>
            The reservoir holds fresh water only. Saltwater in an ATO adds salt every time it runs, and salinity climbs with no upper limit.
          </p>
          <p>
            Use RODI or distilled water, not tap water. Whatever is dissolved in top-off water stays in the tank when the water evaporates again. The{" "}
            <Link href="/blog/rodi-water-for-reef-tank" style={link}>RODI water guide</Link> explains why.
          </p>
          <p>
            Some experienced reefers mix kalkwasser into their top-off water to supply calcium and alkalinity. Treat that as an advanced practice: a stuck ATO then overdoses the tank as well as lowering salinity, and a kalkwasser overdose can raise pH to dangerous levels. Read our comparison of{" "}
            <Link href="/blog/two-part-vs-all-in-one-vs-kalkwasser" style={link}>two-part, all-in-one and kalkwasser</Link> before you consider it.
          </p>

          <h2 style={h2Style}>ATO Maintenance</h2>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>Clean the sensor.</strong> Wipe off salt creep, algae and calcium deposits. Check that a float moves freely and that no snail has settled on it.</li>
            <li><strong style={strong}>Check the pump and tubing.</strong> Look for kinks, loose fittings and a clogged pump intake. Confirm the outlet is still above the water line.</li>
            <li><strong style={strong}>Keep the reservoir covered and clean.</strong> A lid keeps out dust, insects and household sprays. Rinse the reservoir with RODI water when it looks dirty. Do not use soap.</li>
            <li><strong style={strong}>Test the cut-off.</strong> Trigger the backup sensor and the run time limit on purpose now and then, following the maker&apos;s instructions, to prove they still stop the pump.</li>
          </ul>
          <p>
            Put these checks on your{" "}
            <Link href="/blog/reef-tank-maintenance-schedule" style={link}>maintenance schedule</Link>. NextUpReef logs salinity with a trend chart against your target range, so you can see whether top-off is holding it steady, and it keeps an equipment list and maintenance reminders. With Pro, it also shows the status and alerts of a Red Sea ReefATO+: water level, leak sensor and empty reservoir. Setup is in the{" "}
            <Link href="/blog/connect-red-sea-reefbeat" style={link}>Red Sea ReefBeat guide</Link>.
          </p>

          <div style={{ textAlign: "center", margin: "40px 0" }}>
            <Image
              src="/screenshots/site-v3/phone-reminders.png"
              alt="NextUpReef Reminders screen showing a 20% every-2-weeks water change reminder alongside filter sock and feeding reminders, each with Done and +1 Day buttons"
              width={777}
              height={1557}
              style={{ width: "100%", maxWidth: 300, height: "auto" }}
            />
            <p style={{ fontSize: "13px", color: "var(--text-muted)", textAlign: "center", marginTop: "12px" }}>
              Maintenance reminders in NextUpReef: a 20% water change every two weeks, filter socks and more.
            </p>
          </div>

          <h2 style={h2Style}>Common Mistakes</h2>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={strong}>Leaving the ATO on during a water change.</strong> As you drain water the level falls, and the ATO replaces saltwater with fresh. Switch it off first, as the{" "}
              <Link href="/blog/reef-tank-water-change-guide" style={link}>water change guide</Link> describes.</li>
            <li><strong style={strong}>Letting the ATO hide a leak.</strong> If the reservoir empties faster than usual, find out where the water is going before you refill it.</li>
            <li><strong style={strong}>No longer testing salinity.</strong> An ATO holds the water level, not salinity. Salt still leaves through skimmer waste, salt creep and livestock bags, so keep testing.</li>
          </ul>

          <h2 style={h2Style}>A Nano Tank With No Sump</h2>
          <p>
            Nano tanks swing fastest, so they benefit most. You have three options.
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>All-in-one tank.</strong> The rear return section behaves like a sump&apos;s return chamber. Its level is the one that drops, so the sensor goes there.</li>
            <li><strong style={strong}>No rear chambers at all.</strong> The display&apos;s own water line drops, so the sensor mounts on the rim of the display, in a calm corner away from powerhead flow.</li>
            <li><strong style={strong}>Top off by hand.</strong> Mark the full water line and bring the level back to it with RODI water every day, at about the same time. A lid slows evaporation and makes this easier.</li>
          </ul>
          <p>
            Keep the reservoir small on a nano. More on small systems in the{" "}
            <Link href="/blog/nano-reef-tank-guide" style={link}>nano reef tank guide</Link>.
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
            Put the sensor where the level changes, fill it with fresh RODI water, choose a unit with a backup and a cut-off, and size the reservoir so that a failure is an inconvenience and nothing worse.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              See whether your top-off is holding salinity steady, free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Log salinity in NextUpReef and watch the trend against your target range, keep your equipment list, and get maintenance reminders. iOS and Android, with a 30-day Pro trial and no credit card.
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
