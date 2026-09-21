import type { Metadata } from "next";
import Link from "next/link";

const TITLE = "How to Run Your Whole Reef From One App, at Any Budget";
const DESCRIPTION =
  "NextUpReef runs your reef whether you spend $90 or $900 on hardware. Start with smart plugs and a temperature probe, add as you go, and connect a Neptune Apex or CoralVue HYDROS when you are ready. Here is how to build it up.";
const URL = "https://nextupreef.com/blog/reef-tank-automation-without-a-controller";

const PLUG_URL = "https://amzn.to/4dLhHOO";
const PILL_URL = "https://us.shelly.com/products/the-pill-by-shelly";
const PROBE_URL = "https://us.shelly.com/products/temperature-sensor-ds18b20-3-5-mm-jack-1-m-cable";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: "Build up your reef automation at your own pace - smart plugs and probes now, a full controller later.",
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
    q: "Does NextUpReef work with a Neptune Apex or CoralVue HYDROS?",
    a: "Yes, and those are the deepest integrations we have. An Apex syncs probe readings into your logs, including Trident alkalinity, calcium and magnesium, and lets you control outlets, Feed Mode, heater temperatures and dosing. HYDROS does the same and works from anywhere rather than only at home. The app is the same whichever hardware you run.",
  },
  {
    q: "Do the schedules keep running if my phone is off?",
    a: "Yes. That is the important part. Dosing and lighting schedules are saved onto the Shelly plug itself, and your pump keeps its own settings. NextUpReef sets them up, then gets out of the way. You can go on holiday and the tank carries on.",
  },
  {
    q: "Does any of this work when I'm away from home?",
    a: "Partly. Jebao pumps are reached through your Jebao account, so flow and wave modes work from anywhere. Shelly plugs and the temperature probe only answer on your home WiFi, so those update when you are home. Anything already scheduled keeps running either way.",
  },
  {
    q: "Can I put my reef light on a smart plug?",
    a: "Yes, but understand what you lose. A plug can only switch power on and off, so there is no sunrise or sunset ramp. If your light has its own built-in ramp and schedule, a plug is fine as a master switch. If it relies on an app or controller to dim, leave it alone — a hard on/off at full intensity is not what you want over corals.",
  },
  {
    q: "What about pH, salinity and ALK monitoring?",
    a: "Those need probes, and probes mean a controller — an Apex or a HYDROS, both of which NextUpReef supports fully. The smart-plug setup covers temperature, flow, lighting, dosing and reminders; everything else you test by hand and log in the app, which is what most reefers do anyway. You can add a controller later without losing anything you already set up.",
  },
  {
    q: "How much does it come to?",
    a: "Stage one is roughly $90 in automation hardware: three smart plugs and a temperature probe. Pumps are extra, but they are equipment you would buy regardless. For comparison, the median NextUpReef user who owns a controller paid $325 for it, and plenty paid far more.",
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

const BUILD = [
  {
    what: "Shelly plug — heater",
    does: "Cuts power to the heater, and reports how much it is drawing. A heater running 80% of a July day is telling you something before the tank does.",
    url: PLUG_URL,
  },
  {
    what: "Shelly plug — skimmer",
    does: "Pauses during Feed Mode so the skimmer does not strip the food you just added, and stops it overflowing after a big water change.",
    url: PLUG_URL,
  },
  {
    what: "Shelly plug — light",
    does: "Runs your photoperiod. The schedule lives on the plug, so it keeps to time whether or not your phone is anywhere near.",
    url: PLUG_URL,
  },
  {
    what: "Shelly Pill + temperature probe",
    does: "Reads your actual water temperature into your log, charts and scores, and pings your phone if it drifts past a high or low you set.",
    url: PILL_URL,
  },
  {
    what: "Jebao / Jecod WiFi pump",
    does: "Flow and wave modes from anywhere, Feed Mode, and an alert the moment the pump reports a jammed impeller or running dry.",
    url: "/devices",
  },
];

export default function BudgetAutomationPage() {
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
          Building your setup
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Setup Guide", "Budget Build", "Shelly", "Jebao", "Apex"].map((tag) => (
            <span key={tag} style={{ fontSize: "12px", fontWeight: 700, padding: "4px 12px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)" }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: 900, lineHeight: 1.2, marginBottom: "16px" }}>{TITLE}</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: 700, marginBottom: "48px" }}>
          Updated September 21, 2026 · 9 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: 1.8 }}>
          <p>
            NextUpReef is the part that does not change. It holds your parameters, your livestock, your equipment, your dosing, your reminders and your scores, and it is where the AI Advisor looks when it tells you what to fix. What changes is the hardware you point it at.
          </p>
          <p>
            That hardware can be a <strong style={strong}>$325 controller</strong> — the median our users with one actually paid — or it can be <strong style={strong}>$90 of smart plugs and a probe</strong>. Both work. The app is the same either way, and you can move from one to the other without starting over.
          </p>
          <p>
            This is how to build it up, in the order that gets you the most for the least.
          </p>

          <h2 style={h2}>Stage one: the essentials</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", margin: "24px 0" }}>
            {BUILD.map((b) => (
              <div key={b.what} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 18px" }}>
                <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)" }}>{b.what}</div>
                <div style={{ fontSize: "14.5px", lineHeight: 1.6, marginTop: "6px" }}>{b.does}</div>
              </div>
            ))}
          </div>
          <p>
            Three plugs and a probe come to roughly <strong style={strong}>$90</strong>. The pump is equipment you would buy anyway. Nothing here needs wiring, and every piece is useful on its own — you do not have to buy it all at once.
          </p>

          <h2 style={h2}>The bit that makes it work</h2>
          <p>
            Smart plugs on their own are a pile of timers. What turns them into automation is that <strong style={strong}>the schedule is written onto the device, not kept in an app.</strong>
          </p>
          <p>
            NextUpReef sets up your dosing schedule and saves it to the plug. Your lighting schedule lives on the plug. Your pump keeps its own wave settings. Your phone can be off, dead, or on a plane — the tank carries on. That is the same principle a controller works on, and it is why this is not just &ldquo;an app with some timers&rdquo;.
          </p>

          <h3 style={h3}>Dosing, and why a plug beats an outlet</h3>
          <p>
            Put a dosing pump on a Shelly plug, calibrate it once, set a daily mL target, and NextUpReef writes the schedule to the plug. Here is the part that surprises people: <strong style={strong}>the plug measures its own power draw, so each dose is confirmed</strong> — and you get an alert when a dose was scheduled but no power was drawn.
          </p>
          <p>
            A controller outlet cannot do that. It can turn the outlet on for nine seconds, but it has no idea whether the pump actually ran, or whether the line was empty. This is one place where the cheap setup is genuinely better.
          </p>

          <h3 style={h3}>Temperature</h3>
          <p>
            A <Link href="/blog/reef-tank-temperature-monitor" style={link}>Shelly Pill with a probe</Link> reads your actual water and feeds it into your temperature log hourly. Your charts fill in, the Stability Score starts measuring something real, and the AI Advisor can see what actually happened overnight instead of taking your word for it.
          </p>
          <p>
            Set a high and a low, and your phone tells you when the tank crosses either.
          </p>

          <h3 style={h3}>Flow</h3>
          <p>
            A <Link href="/blog/connect-jebao-pump" style={link}>Jebao WiFi pump</Link> gives you wave modes and flow from anywhere — and, more usefully, it tells you when the pump reports a jammed impeller or is running dry. Those are the two failures that quietly wreck a tank, and they are normally discovered by noticing the water has gone still.
          </p>

          <h3 style={h3}>Feed Mode across all of it</h3>
          <p>
            Tick which devices should pause while you feed — the skimmer, the pump, whatever else — and one tap on the home screen starts them all. Each device counts its own time and starts itself again, so if your phone dies mid-feed nothing stays off.
          </p>

          <h2 style={h2}>Stage two: fill in the gaps</h2>
          <p>
            Once the essentials are running, these are the next things worth money — roughly in the order most people feel the lack of them.
          </p>
          <ul style={list}>
            <li><strong style={strong}>A second temperature probe.</strong> Five dollars, and it changes what the first one tells you. Put it in the room. When the tank drifts you will know instantly whether it is the heater or the house, which are different problems with different fixes.</li>
            <li><strong style={strong}>A plug for your ATO reservoir pump.</strong> Being able to cut it remotely is worth a lot the day something sticks.</li>
            <li><strong style={strong}>A second Jebao pump.</strong> Two smaller pumps on opposite walls beat one big one for almost every tank, and NextUpReef will run them as a linked pair.</li>
            <li><strong style={strong}>A doser on its own plug</strong>, if you are still dosing by hand. Confirmed doses and missed-dose alerts remove a whole class of silent failure.</li>
          </ul>

          <h2 style={h2}>Stage three: when you want probes</h2>
          <p>
            There is a point where the cheap approach genuinely runs out, and it is when you want <strong style={strong}>pH, salinity or alkalinity monitored continuously</strong>, or you want the tank to protect itself while you are away. That is what controllers are for, and it is a real reason to buy one.
          </p>
          <p>
            NextUpReef supports them fully. This is not a consolation prize — the Apex and HYDROS integrations are the deepest ones we have.
          </p>
          <ul style={list}>
            <li><strong style={strong}>Neptune Apex.</strong> Probe readings flow straight into your logs beside your test kit results, including Trident alkalinity, calcium and magnesium. Control every outlet, run Feed Mode, set heater temperatures, and schedule dosing — all from the same app that holds your scores and AI advice.</li>
            <li><strong style={strong}>CoralVue HYDROS.</strong> Cloud-connected, so unlike an Apex it works from anywhere, not just at home. Full monitoring and control of probes, outlets and dosing.</li>
          </ul>
          <p>
            And nothing you bought in stage one is wasted. Your plugs keep running your lights and doser, your probe keeps logging, and your Jebao pumps keep working — a controller sits alongside them rather than replacing them. See the full list on the{" "}
            <Link href="/devices" style={link}>integrations page</Link>.
          </p>

          <h2 style={h2}>What stage one does not do</h2>
          <p>
            This is where most budget setup articles go quiet. Here is the honest list.
          </p>

          <div style={warn}>
            <p style={{ margin: "0 0 8px" }}><strong style={strong}>No unattended safety shutoff.</strong></p>
            <p style={{ margin: 0 }}>
              An Apex reads its probe and kills the heater outlet itself, with no phone involved. This setup alerts you and leaves the decision to you. If your tank overheats at 3am, a controller acts and this does not. That is the real difference between $90 and $325, and it is worth being clear-eyed about.
            </p>
          </div>

          <ul style={list}>
            <li><strong style={strong}>No pH, salinity or ALK monitoring.</strong> Those need probes, and probes need a controller. Everything else you test by hand and log — which is what most reefers do regardless.</li>
            <li><strong style={strong}>No dimming.</strong> A plug switches power; it cannot ramp a light. Fine if your fixture has its own ramp, wrong if it does not.</li>
            <li><strong style={strong}>Plugs and probes are home-network only.</strong> They answer on your WiFi and nowhere else. Schedules keep running while you are away, but you will not be changing them from a hotel.</li>
            <li><strong style={strong}>No single pane of glass for hardware faults.</strong> A controller supervises everything it owns. Here, each device looks after itself and the app collects what they report.</li>
          </ul>

          <div style={callout}>
            <p style={{ margin: "0 0 8px" }}><strong style={strong}>Skip straight to a controller if…</strong></p>
            <p style={{ margin: 0 }}>
              You travel often, run a large or expensive SPS system, or would lose sleep over a heater failure while you are away. The unattended shutoff is the thing you are paying for, and stage one does not replace it. Everyone else is usually better off starting small and adding.
            </p>
          </div>

          <h2 style={h2}>A sensible order to buy in</h2>
          <ul style={list}>
            <li><strong style={strong}>Temperature probe first.</strong> Cheapest, and it covers the parameter most likely to kill the tank.</li>
            <li><strong style={strong}>Then a plug for your doser</strong>, if you dose. Confirmed doses and missed-dose alerts remove a whole category of quiet failure.</li>
            <li><strong style={strong}>Then the light.</strong> A reliable photoperiod matters more than most people credit.</li>
            <li><strong style={strong}>The skimmer plug last.</strong> It is the nice-to-have of the three.</li>
          </ul>
          <p>
            You do not have to buy it all at once, and each piece is useful on its own.
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
            <p style={{ margin: "0 0 8px" }}><strong style={strong}>Start with what you own</strong></p>
            <p style={{ margin: 0 }}>
              NextUpReef is free on <Link href="/" style={link}>iPhone and Android</Link>, and logging, dosing and reminders work with no hardware at all. Add a plug, a probe or a full controller whenever you are ready — the app grows with the tank. Device integrations are part of Pro, with 30 days free. See everything it connects to on the{" "}
              <Link href="/devices" style={link}>integrations page</Link>.
            </p>
          </div>

          <p style={{ fontSize: "12px", fontStyle: "italic", marginTop: "32px" }}>
            Some links here are affiliate links — we may earn a small commission at no extra cost to you, which helps keep NextUpReef running.
          </p>
        </div>
      </article>
    </>
  );
}
