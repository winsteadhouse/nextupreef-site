import type { Metadata } from "next";
import Link from "next/link";

const TITLE = "Monitor Your Reef Tank Temperature for About $16";
const DESCRIPTION =
  "Most reef tanks have no controller, so the logged temperature is whatever someone last typed in. A Shelly Pill and a DS18B20 probe puts real water temperature into NextUpReef for about $16 — no controller, no cloud account, no monthly fee.";
const URL = "https://nextupreef.com/blog/reef-tank-temperature-monitor";

const PILL_URL = "https://us.shelly.com/products/the-pill-by-shelly";
const PROBE_URL = "https://us.shelly.com/products/temperature-sensor-ds18b20-3-5-mm-jack-1-m-cable";
const SPLITTER_URL = "https://us.shelly.com/products/splitter-1-to-5-3-5-mm-jack-shelly-pill";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: "Real water temperature in your reef log for about $16, with no controller.",
    url: URL,
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  image: "https://nextupreef.com/brand/og-image.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-09-21",
  dateModified: "2026-09-21",
  mainEntityOfPage: URL,
};

const faqs: { q: string; a: string }[] = [
  {
    q: "What exactly do I need to buy?",
    a: "A Shelly Pill ($12.99) and a Shelly DS18B20 temperature probe with a 3.5mm jack ($3.40). That is the whole shopping list. The Pill runs on 5V USB-C, so you also need any phone charger you already own.",
  },
  {
    q: "Is the probe safe in saltwater?",
    a: "Yes. It is a 50mm stainless steel capsule on a 1m cable — the standard sealed DS18B20 used in aquariums. Shelly's own product photo shows it clipped inside a reef tank. The usual failure after a year or two is water creeping in where the cable meets the capsule, which is why it is worth keeping a spare at $3.40.",
  },
  {
    q: "Does it work when I'm away from home?",
    a: "No. The Pill answers on your home WiFi only, so readings update while you are on that network and catch up when you return. That is the same trade-off as Shelly smart plugs and a Neptune Apex.",
  },
  {
    q: "Can it turn my heater off if the tank overheats?",
    a: "Not on its own — the Pill reads, it does not switch mains power. Put the heater on a Shelly smart plug and you have both halves: the probe sees the temperature and the plug can cut the power.",
  },
  {
    q: "Will it mess up my temperature history?",
    a: "No. NextUpReef saves one reading an hour, so your own test results are not buried. A probe that is unplugged or failing reports no value rather than zero, and readings outside a sane range are discarded instead of stored.",
  },
  {
    q: "How many probes can one Pill take?",
    a: "Five, using a 1-to-5 splitter. People typically run one in the display, one in the sump and one measuring room temperature, which tells you whether a swing is the tank or the house.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const h2: React.CSSProperties = { fontSize: "28px", fontWeight: 900, color: "var(--text-light)", marginTop: "56px", marginBottom: "16px", lineHeight: 1.25 };
const h3: React.CSSProperties = { fontSize: "20px", fontWeight: 900, color: "var(--text-light)", marginTop: "32px", marginBottom: "10px" };
const strong: React.CSSProperties = { color: "var(--text-light)" };
const link: React.CSSProperties = { color: "var(--reef)", fontWeight: 700 };
const callout: React.CSSProperties = { background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)", borderRadius: "14px", padding: "18px 22px", margin: "24px 0" };
const warn: React.CSSProperties = { background: "rgba(245,158,11,0.07)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: "14px", padding: "18px 22px", margin: "24px 0" };
const list: React.CSSProperties = { paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" };

const PARTS = [
  { name: "The Pill by Shelly", price: "$12.99", why: "USB-C powered WiFi sensor hub. This is the bit that talks to NextUpReef.", url: PILL_URL },
  { name: "DS18B20 probe, 3.5mm jack", price: "$3.40", why: "Sealed stainless probe on a 1m cable. This is what goes in the water.", url: PROBE_URL },
  { name: "1-to-5 splitter (optional)", price: "$4.99", why: "Run up to five probes from one Pill — display, sump, room.", url: SPLITTER_URL },
];

export default function ReefTemperatureMonitorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 20px" }}>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: 700, marginBottom: "32px" }}>
          <Link href="/" style={{ color: "var(--reef)" }}>Home</Link>
          {" › "}
          <Link href="/blog" style={{ color: "var(--reef)" }}>Blog</Link>
          {" › "}
          Temperature monitoring for $16
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Temperature", "Shelly", "Budget Build", "Setup Guide"].map((tag) => (
            <span key={tag} style={{ fontSize: "12px", fontWeight: 700, padding: "4px 12px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)" }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: 900, lineHeight: 1.2, marginBottom: "16px" }}>{TITLE}</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: 700, marginBottom: "48px" }}>
          Updated September 21, 2026 · 7 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: 1.8 }}>
          <p>
            Temperature is the fastest way to lose a reef tank. A heater sticking on can cook everything inside a day, and a failed heater in January is just as final. Every other parameter gives you weeks to react. Temperature gives you hours.
          </p>
          <p>
            It is also the parameter most reefers track worst. Unless you own a controller, the temperature in your log is whatever you last typed in from glancing at a stick-on thermometer — and a number you entered on Sunday tells you nothing about what happened on Wednesday afternoon.
          </p>
          <p>
            You do not need an $800 controller to fix that. <strong style={strong}>About $16 of parts puts real, measured water temperature into NextUpReef</strong>, updating on its own.
          </p>

          <h2 style={h2}>The shopping list</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", margin: "24px 0" }}>
            {PARTS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 18px", textDecoration: "none" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)" }}>{p.name}</span>
                  <span style={{ fontSize: "15px", fontWeight: 900, color: "var(--reef)" }}>{p.price}</span>
                </div>
                <div style={{ fontSize: "14.5px", lineHeight: 1.6, marginTop: "6px" }}>{p.why}</div>
              </a>
            ))}
          </div>
          <p>
            Both come from <a href="https://us.shelly.com" target="_blank" rel="noopener noreferrer" style={link}>Shelly&apos;s US store</a> — they are not on Amazon. Shipping is free over $50, so it is worth adding a spare probe or a second Pill rather than paying $6.99 to ship a $16 order.
          </p>

          <h2 style={h2}>Setting it up</h2>
          <ul style={list}>
            <li><strong style={strong}>Power the Pill.</strong> Any USB-C phone charger. It has no battery, so it wants a permanent socket — the same power strip your heater and return pump use is ideal.</li>
            <li><strong style={strong}>Plug in the probe</strong> and put the tip in your sump, or in the display behind the rockwork. The cable is 1m, so the Pill needs to sit within a metre of the water.</li>
            <li><strong style={strong}>Add it to WiFi</strong> using the free Shelly app. 2.4GHz. Note the IP address it gets.</li>
            <li><strong style={strong}>In NextUpReef</strong>, open Devices &amp; Automation, choose Temperature Probe, and enter that IP. The app finds every probe on the device and you name them.</li>
          </ul>

          <div style={warn}>
            <p style={{ margin: 0 }}>
              <strong style={strong}>Give the Pill a fixed address.</strong> Most routers will eventually hand it a different IP, and the app would lose it. Either set a DHCP reservation in your router, or give the Pill a static IP in the Shelly app. Two minutes now saves a confusing evening later.
            </p>
          </div>

          <h2 style={h2}>What NextUpReef does with it</h2>
          <p>
            The reading is not just a number on a screen. It goes into the same temperature log as your manual tests, which means:
          </p>
          <ul style={list}>
            <li><strong style={strong}>Your charts fill in.</strong> Instead of a dot each time you remembered to check, you get an hourly line — and you can finally see the daily swing between lights-on and lights-off.</li>
            <li><strong style={strong}>Your Stability Score becomes real.</strong> It measures how steady your parameters are. Fed one hand-typed number a week, it was guessing.</li>
            <li><strong style={strong}>The AI Advisor sees it.</strong> Temperature swings explain a lot of coral behaviour, and until now the advisor mostly had to take your word for it.</li>
            <li><strong style={strong}>You can set alerts.</strong> Tell the app to warn you below 76°F or above 82°F and it watches for you.</li>
          </ul>
          <p>
            Readings are saved once an hour, so your own test results are never buried under hundreds of rows.
          </p>

          <h3 style={h3}>Two probes are better than one</h3>
          <p>
            With a splitter, run a second probe measuring <em>room</em> temperature. When the tank drifts, that second number tells you instantly whether it is the tank or the house — a failing heater versus a hot afternoon are very different problems, and the fix is different too.
          </p>

          <h2 style={h2}>The honest limitations</h2>
          <p>
            <strong style={strong}>It reads, it does not switch.</strong> The Pill cannot turn your heater off. If you want that, put the heater on a <Link href="/devices" style={link}>Shelly smart plug</Link> — then the probe watches the water and the plug can cut the power. Roughly $45 all in, and that combination genuinely does the job people buy controllers for.
          </p>
          <p>
            <strong style={strong}>Home network only.</strong> Readings update while you are on your home WiFi. Away from home you will see the last known value, not a live one.
          </p>
          <p>
            <strong style={strong}>Mains powered.</strong> No battery, so a power cut takes the sensor with it — although a power cut takes your heater too, which is the bigger problem.
          </p>
          <p>
            <strong style={strong}>Probes do not last forever.</strong> Saltwater eventually works its way in where the cable meets the capsule. At $3.40 keep a spare, and replace it if readings start drifting from a reference thermometer.
          </p>

          <h2 style={h2}>FAQ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "20px" }}>
            {faqs.map((f) => (
              <div key={f.q}>
                <p style={{ fontWeight: 900, color: "var(--text-light)", margin: "0 0 6px", fontSize: "17px" }}>{f.q}</p>
                <p style={{ margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>

          <div style={{ ...callout, marginTop: "48px" }}>
            <p style={{ margin: "0 0 8px" }}><strong style={strong}>Get it logging</strong></p>
            <p style={{ margin: 0 }}>
              NextUpReef is free on <Link href="/" style={link}>iPhone and Android</Link>. Device integrations are part of Pro, and every new account gets 30 days free. See everything it connects to on the{" "}
              <Link href="/devices" style={link}>integrations page</Link>.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
