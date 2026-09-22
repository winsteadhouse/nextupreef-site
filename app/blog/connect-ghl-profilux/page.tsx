import type { Metadata } from "next";
import Link from "next/link";

const TITLE = "How to Connect a GHL ProfiLux to NextUpReef";
const DESCRIPTION =
  "Read alkalinity, calcium and magnesium straight off a GHL KH Director and ION Director, plus temperature, pH and salinity from your ProfiLux probes — logged automatically over the official GHL API, with no account and no cloud service.";
const URL = "https://nextupreef.com/blog/connect-ghl-profilux";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: "Alkalinity, calcium and magnesium measured by your ProfiLux and logged for you.",
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
  datePublished: "2026-09-22",
  dateModified: "2026-09-22",
  mainEntityOfPage: URL,
};

const faqs: { q: string; a: string }[] = [
  {
    q: "Which GHL devices work with NextUpReef?",
    a: "ProfiLux 4 and ProfiLux 4.1 and their variants, running firmware 7.52 or newer. A KH Director adds alkalinity and an ION Director adds calcium, magnesium and three more values. The connection uses the official GHL API, which GHL publishes for third-party software.",
  },
  {
    q: "Do I need a GHL account or a cloud subscription?",
    a: "No. The GHL API runs entirely on your own network. There is no account, no registration and no cloud service in the path. GHL are explicit that there is no password and no key either — your network is the perimeter, which is why the API ships switched off and you decide when to enable it.",
  },
  {
    q: "Why does my ProfiLux stop answering after a firmware update?",
    a: "The GHL API switches itself off after every firmware update. This is intentional on GHL's part: nothing should become reachable again without you deciding so. Open GHL Control Center or GHL Connect, go to System then GHL API, and switch it back on. NextUpReef detects this case specifically and tells you the API is off rather than claiming the controller is offline.",
  },
  {
    q: "Can NextUpReef control my ProfiLux outlets or start a dose?",
    a: "No, and that is by design on GHL's side. The API reads values and requests actions, but it does not switch outputs and it does not replace any control loop — if the water gets cold, your ProfiLux switches the heater, not an app. You can read dosing container levels but not trigger a dose. Feed pause, water change and maintenance modes can be started, because the controller runs and times those itself.",
  },
  {
    q: "Should I use read-only or full access?",
    a: "Read only is enough for everything except feed pause. If you only want your parameters logged, charted and scored, choose read only and no software on your network can change a setting on your aquarium, deliberately or by accident. Choose full access if you want to start a feed pause from the app.",
  },
  {
    q: "Is this an official GHL integration?",
    a: "The API is official and documented by GHL, and free to use. The integration itself is ours. GHL provide the API as is, without support, and note that commands may behave differently in future firmware versions.",
  },
  {
    q: "Is this included in the free plan?",
    a: "Integrations are part of NextUpReef Pro, $4.99 a month or $39.99 a year. Every new account gets a 30-day Pro trial, no credit card needed.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const h2: React.CSSProperties = { fontSize: "28px", fontWeight: 900, color: "var(--text-light)", marginTop: "56px", marginBottom: "16px", lineHeight: 1.25 };
const h3: React.CSSProperties = { fontSize: "20px", fontWeight: 900, color: "var(--text-light)", marginTop: "32px", marginBottom: "10px" };
const strong: React.CSSProperties = { color: "var(--text-light)" };
const link: React.CSSProperties = { color: "var(--reef)", fontWeight: 700 };
const callout: React.CSSProperties = { background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)", borderRadius: "14px", padding: "18px 22px", margin: "24px 0" };
const warn: React.CSSProperties = { background: "rgba(245,158,11,0.07)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: "14px", padding: "18px 22px", margin: "24px 0" };
const list: React.CSSProperties = { paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" };

export default function ConnectGhlProfiluxPage() {
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
          Connect a GHL ProfiLux
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["GHL", "ProfiLux", "KH Director", "ION Director", "Setup Guide", "Pro"].map((tag) => (
            <span key={tag} style={{ fontSize: "12px", fontWeight: 700, padding: "4px 12px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)" }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: 900, lineHeight: 1.2, marginBottom: "16px" }}>{TITLE}</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: 700, marginBottom: "48px" }}>
          Updated September 22, 2026 · 8 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: 1.8 }}>
          <p>
            If you own a ProfiLux with a KH Director and an ION Director, your controller is already
            measuring the three numbers that decide whether stony corals grow or recede: alkalinity,
            calcium and magnesium. It measures them more often than you would by hand, and without
            the titration kit on the kitchen counter.
          </p>
          <p>
            The awkward part has always been that those numbers live in GHL&apos;s software, and your
            trend charts, your scores and your dosing maths live somewhere else. So people type them
            in again. Or, more honestly, they mean to and do not.
          </p>
          <p>
            GHL now publish an official API for exactly this. NextUpReef reads your ProfiLux over it
            and files every value into your log automatically. For an established tank this is the
            single biggest difference between a log that reflects reality and one that reflects how
            diligent you felt that week.
          </p>

          <div style={callout}>
            <p style={{ margin: "0 0 8px" }}><strong style={strong}>What you need</strong></p>
            <ul style={{ ...list, margin: 0 }}>
              <li>A ProfiLux 4 or 4.1 on firmware 7.52 or newer</li>
              <li>GHL Control Center on a computer, or the GHL Connect app</li>
              <li>Your phone on the same WiFi as the controller</li>
              <li>NextUpReef Pro, or the free 30-day trial every new account gets</li>
            </ul>
          </div>

          <h2 style={h2}>Step 1: switch the API on</h2>
          <p>
            The GHL API is disabled when a controller leaves the factory, and it stays disabled until
            you turn it on yourself. Nothing on your network can reach your aquarium unless you have
            decided so.
          </p>
          <p>
            Open your device in GHL Control Center or GHL Connect and go to{" "}
            <strong style={strong}>System → GHL API</strong>. You have three settings:
          </p>
          <ul style={list}>
            <li><strong style={strong}>Off</strong> — nothing answers.</li>
            <li><strong style={strong}>Read only</strong> — readings work, nothing can be changed. This is enough for logging, charts, scores and AI advice.</li>
            <li><strong style={strong}>Full access</strong> — readings work and feed pause can be started.</li>
          </ul>
          <p>
            If you only want your parameters in NextUpReef, choose read only. It is the safer setting
            and it costs you nothing but the feed pause button.
          </p>

          <div style={warn}>
            <p style={{ margin: 0 }}>
              <strong style={strong}>The API turns itself off after every firmware update.</strong>{" "}
              This is deliberate on GHL&apos;s part, not a bug, and it catches people out — an
              integration that worked for months simply stops. NextUpReef recognises this exact case
              and tells you the API is switched off rather than pretending the controller is
              unreachable. Switch it back on in the same menu.
            </p>
          </div>

          <h2 style={h2}>Step 2: find the controller address</h2>
          <p>
            The same GHL software shows your controller&apos;s IP address — something like{" "}
            <strong style={strong}>192.168.1.4</strong>. Make a note of it, and while you are in your
            router, give the ProfiLux a fixed address. Otherwise it can move when it reconnects, and
            the app loses it for no obvious reason.
          </p>

          <h2 style={h2}>Step 3: connect, then say which sensor is which</h2>
          <p>
            In NextUpReef open the menu, choose Devices &amp; Automation, then GHL ProfiLux, and enter
            that address. The app asks the controller what it has and comes back with your sensors,
            your KH Director if one is connected, your ION Director values and your dosing pumps.
          </p>
          <p>
            Then it asks you to do one thing that looks fussy and is not: point at which sensor is
            which.
          </p>
          <p>
            A ProfiLux sensor reports a value, a setpoint, a name and its history. It does not report
            what kind of sensor it is. Nothing in the protocol says &quot;this one is pH&quot;, so
            nothing but you can say so.
          </p>

          <div style={warn}>
            <p style={{ margin: "0 0 8px" }}><strong style={strong}>Check the readings, not just the names</strong></p>
            <p style={{ margin: 0 }}>
              GHL warn about this themselves. Sensor numbering starts at zero in the API and at one in
              their software, so a sensor shown as Sensor 4 is index 3. Get it wrong and you do not
              get an error — you get a perfectly plausible reading from the wrong probe. That is why
              NextUpReef shows the live value beside every sensor during setup. If the number next to
              &quot;Display tank&quot; is not the number GHL shows for your display tank, pick a
              different one.
            </p>
          </div>

          <h3 style={h3}>The ION Director needs the same treatment</h3>
          <p>
            The ION Director reports five measured values and, again, does not label them. Match
            calcium and magnesium against what your GHL software shows and you are done.
          </p>

          <h2 style={h2}>What you get once it is connected</h2>
          <h3 style={h3}>Alkalinity, calcium and magnesium, measured</h3>
          <p>
            This is the part worth the setup. Your KH Director reading becomes your alkalinity log.
            Your ION Director readings become calcium and magnesium. They arrive without you typing
            anything, which means your{" "}
            <Link href="/blog/reef-tank-alkalinity-calcium-magnesium-guide" style={link}>alk, calcium and magnesium trends</Link>{" "}
            are continuous instead of sampled whenever you remembered.
          </p>
          <p>
            Continuous data is what makes the rest of the app worth anything. A{" "}
            <Link href="/blog/reef-score-stability-score-explained" style={link}>Stability Score</Link>{" "}
            built from four hand-entered tests is a guess. One built from a controller measuring on a
            schedule is a measurement.
          </p>

          <h3 style={h3}>Temperature, pH and salinity from your probes</h3>
          <p>
            Whatever you mapped comes through on every sync. Temperature arrives in °F directly from
            the controller rather than being converted, because a ProfiLux temperature sensor reports
            both units natively.
          </p>

          <h3 style={h3}>Dosing containers, and warning before one runs dry</h3>
          <p>
            The API reports each dosing pump&apos;s container capacity and how much is left. NextUpReef
            shows both with a bar, and flags a container as running low before it empties. An empty
            alkalinity container that nobody noticed is a genuinely common way to lose coral, and it
            is entirely preventable by looking.
          </p>
          <p>
            What it cannot do is dose for you or read your dosing schedule. The ProfiLux keeps that to
            itself — the API exposes container levels and history, and nothing that starts a pump.
          </p>

          <h3 style={h3}>Feed pause, as part of Feed Mode</h3>
          <p>
            With full access enabled, the feed pause button in NextUpReef starts the pause you already
            programmed on the ProfiLux. The controller counts the time and restarts your pumps itself,
            so closing the app cannot strand anything. If you also run Jebao pumps or Shelly outlets,
            one tap covers all of them at once.
          </p>

          <h2 style={h2}>Why there is no outlet control</h2>
          <p>
            You will notice NextUpReef does not switch your ProfiLux outlets. That is GHL&apos;s
            decision, and it is a good one. In their words, the API reads values and requests actions;
            it does not switch outputs and it does not replace any control loop. If the water gets too
            cold, the ProfiLux switches the heater — not an app, not a server, not your home
            automation.
          </p>
          <p>
            A crashed server or a dropped network should never leave a tank unheated. Any controller
            that let an app hold that responsibility would be worse, not better.
          </p>

          <h2 style={h2}>The honest limitations</h2>
          <ul style={list}>
            <li><strong style={strong}>Home network only.</strong> The API is local by design. Away from home, your ProfiLux is out of reach — which is also why no data leaves your house.</li>
            <li><strong style={strong}>Firmware 7.52 or newer.</strong> Older firmware has no API at all.</li>
            <li><strong style={strong}>It turns off after updates.</strong> See above. Worth knowing before you conclude something is broken.</li>
            <li><strong style={strong}>No dosing control and no outlet switching.</strong> Levels and status only.</li>
            <li><strong style={strong}>There is no password.</strong> GHL are upfront about this: anyone on your network who finds the API enabled can use it within the access setting you chose. Keep your controller on a network you control, and use read only unless you need more.</li>
            <li><strong style={strong}>It is unofficial on our side.</strong> The API is official and documented; this integration is ours, and GHL provide the API as is. A future firmware could change behaviour.</li>
          </ul>

          <h2 style={h2}>Frequently asked questions</h2>
          {faqs.map((f) => (
            <div key={f.q} style={{ marginTop: "28px" }}>
              <h3 style={{ ...h3, marginTop: 0 }}>{f.q}</h3>
              <p style={{ margin: 0 }}>{f.a}</p>
            </div>
          ))}

          <div style={{ ...callout, marginTop: "48px" }}>
            <p style={{ margin: "0 0 10px" }}><strong style={strong}>Bring the whole tank into one app</strong></p>
            <p style={{ margin: "0 0 12px" }}>
              NextUpReef works with GHL ProfiLux, Neptune Apex, CoralVue HYDROS, Red Sea ReefRun,
              Jebao pumps and Shelly outlets — parameters, dosing, equipment and AI advice in one
              place.
            </p>
            <Link href="/devices" style={link}>See every supported device →</Link>
          </div>
        </div>
      </article>
    </>
  );
}
