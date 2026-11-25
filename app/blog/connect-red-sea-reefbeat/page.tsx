import type { Metadata } from "next";
import Link from "next/link";

const TITLE = "Red Sea ReefBeat App Gear in NextUpReef: Setup Guide";
const DESCRIPTION =
  "See your Red Sea ReefLED, ReefWave, ReefATO+ and ReefMat in NextUpReef next to your parameter log. Read-only status and alerts over home WiFi.";
const URL = "https://nextupreef.com/blog/connect-red-sea-reefbeat";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: "Your ReefLED, ReefWave, ReefATO+ and ReefMat status in the same app as the rest of your tank.",
    url: URL,
    images: [{ url: "/brand/og-image-v2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  image: "https://nextupreef.com/brand/og-image-v2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo-v2.png" },
  },
  datePublished: "2026-11-25",
  dateModified: "2026-11-25",
  mainEntityOfPage: URL,
};

const faqs: { q: string; a: string }[] = [
  {
    q: "Is NextUpReef a ReefBeat alternative?",
    a: "Not a replacement. For ReefLED lights, ReefWave pumps, the ReefATO+ and the ReefMat, NextUpReef only reads the device and cannot change any setting on it. You still need ReefBeat for setup, schedules and every setting. NextUpReef adds one place to see that gear next to your parameter log.",
  },
  {
    q: "Can I control my ReefLED or ReefWave from NextUpReef?",
    a: "No. Lights, wave pumps, the ReefATO+ and the ReefMat are read-only in NextUpReef: status and alerts, no control. The one exception among Red Sea devices is a ReefRun controller, where you can set pump speeds.",
  },
  {
    q: "Do I need to sign in with my Red Sea account?",
    a: "No. NextUpReef talks to each device directly on your home WiFi, using the device's IP address. It does not ask for or use your Red Sea account, so there is nothing to sign in to.",
  },
  {
    q: "Does it work when I am away from home?",
    a: "Partly. The devices only answer on your home WiFi, so readings refresh while your phone is on that network. Away from home NextUpReef shows the last reading it saved, with how long ago it was taken.",
  },
  {
    q: "Is this part of the free plan?",
    a: "Device connections are part of NextUpReef Pro. Every new account gets a 30-day Pro trial with no credit card needed.",
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
const th: React.CSSProperties = { textAlign: "left", padding: "10px 12px", borderBottom: "1px solid rgba(44,196,214,0.25)", color: "var(--text-light)", fontWeight: 900, fontSize: "14px" };
const td: React.CSSProperties = { padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.08)", fontSize: "15px", lineHeight: 1.6, verticalAlign: "top" };

const rows: { device: string; see: string; alerts: string }[] = [
  {
    device: "ReefLED light",
    see: "Whether it is on, on moonlight or off. Colour temperature and intensity, or white and blue channel levels, depending on the model. Moon level, today's daylight hours, program name, acclimation and days left, moon cycle, fan speed and the fixture's own temperature.",
    alerts: "A fault state reported by the light, a lost clock (so its schedule may be off), a low clock battery.",
  },
  {
    device: "ReefWave pump",
    see: "Mode, the wave running now by name and type, forward and reverse strength, direction, and how many waves are in today's schedule.",
    alerts: "A fault state reported by the pump.",
  },
  {
    device: "ReefATO+ auto top-off",
    see: "Water level against the set level, volume topped off today and in how many fills, daily average, water left in the reservoir and roughly how many days it lasts, water temperature, leak sensor state, whether the pump is filling, auto fill on or off.",
    alerts: "Leak sensor detects water, reservoir empty, reservoir about to run out, water level below the set level or in the danger range, temperature probe not connected, other faults the ATO reports.",
  },
  {
    device: "ReefMat roller",
    see: "Roll left in metres and roughly how many days it lasts, length used today, daily average, total used, roll material, auto advance on or off, mode.",
    alerts: "Roll finished, roll about to run out, level sensor needs cleaning, other faults the ReefMat reports such as torn material.",
  },
];

export default function ConnectRedSeaReefBeatPage() {
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
          Red Sea ReefBeat Gear in NextUpReef
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Red Sea", "ReefBeat", "ReefLED", "ReefWave", "ReefATO+", "ReefMat", "Setup Guide", "Pro"].map((tag) => (
            <span key={tag} style={{ fontSize: "12px", fontWeight: 700, padding: "4px 12px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)" }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: 900, lineHeight: 1.2, marginBottom: "16px" }}>{TITLE}</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: 700, marginBottom: "48px" }}>
          Updated November 25, 2026 · 7 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: 1.8 }}>
          <div style={callout}>
            <p style={{ margin: "0 0 8px" }}><strong style={strong}>The short answer</strong></p>
            <p style={{ margin: 0 }}>
              NextUpReef can show your Red Sea ReefLED lights, ReefWave pumps, ReefATO+ and ReefMat
              next to your parameter log. For those four it is read-only: you see status and alerts,
              and you change settings in the Red Sea ReefBeat app as before. It reads each device over
              your home WiFi by IP address and does not use your Red Sea account. A ReefRun controller
              is the one Red Sea device where you can also set pump speeds.
            </p>
          </div>

          <p>
            If you run Red Sea equipment, the ReefBeat app is where it all lives: light programs,
            wave schedules, top-off settings, roll tracking. Nothing here replaces it.
          </p>
          <p>
            What ReefBeat does not hold is the rest of your tank: test results, maintenance history
            and gear from other brands. This guide covers what NextUpReef shows from your Red Sea
            gear, how to connect each device, and where the limits are.
          </p>

          <h2 style={h2}>Why have it next to your parameter log</h2>
          <ul style={list}>
            <li><strong style={strong}>Top-off and salinity.</strong> An auto top-off that has run out of water, or is adding far more than usual, is one of the first things to check when salinity moves. Today&apos;s top-off volume sits beside the daily average.</li>
            <li><strong style={strong}>Top-off water temperature.</strong> The ReefATO+ reports water temperature from its own probe, which is a useful second opinion beside a dedicated{" "}
              <Link href="/blog/reef-tank-temperature-monitor" style={link}>temperature monitor</Link>.</li>
            <li><strong style={strong}>Lights and coral.</strong> When you log a coral looking pale, it helps to see whether the light is in acclimation, and what program it is running, without opening another app.</li>
            <li><strong style={strong}>The roller.</strong> A finished roll is easy to miss until the sump tells you about it.</li>
          </ul>

          <h2 style={h2}>What you see for each device</h2>
          <p>
            Every value below is read from the device itself. If a device does not report a value,
            the app shows a dash and does not fill in a guess.
          </p>
          <div style={{ overflowX: "auto", margin: "24px 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "560px" }}>
              <thead>
                <tr>
                  <th style={th}>Device</th>
                  <th style={th}>What you see</th>
                  <th style={th}>Alerts</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.device}>
                    <td style={{ ...td, color: "var(--text-light)", fontWeight: 700 }}>{r.device}</td>
                    <td style={td}>{r.see}</td>
                    <td style={td}>{r.alerts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Two details worth knowing. The temperature shown for a ReefLED is the fixture&apos;s own
            temperature, not your water. And the reservoir figures on the ReefATO+ depend on the
            device reporting them, which in practice means the reservoir size has been entered in
            ReefBeat.
          </p>
          <p>
            Each device gets a card with one headline line, such as how much roll is left or
            &quot;Level OK&quot; with today&apos;s top-off volume. Tap the card for the full reading.
            Alerts show on the card, on the device screen, and on the Red Sea tile on your Home
            screen.
          </p>

          <div style={warn}>
            <p style={{ margin: "0 0 8px" }}><strong style={strong}>Read-only means read-only</strong></p>
            <p style={{ margin: 0 }}>
              For ReefLED, ReefWave, ReefATO+ and ReefMat, NextUpReef only asks the device for its
              status. It cannot change brightness, wave settings, top-off settings or advance the
              roll, and it does not write schedules. ReefBeat is still where you change anything.
            </p>
          </div>

          <h2 style={h2}>What you need</h2>
          <ul style={list}>
            <li>The Red Sea device already set up and working in the ReefBeat app</li>
            <li>The device&apos;s IP address on your home network</li>
            <li>Your phone on the same WiFi as the device</li>
            <li>NextUpReef Pro, or the 30-day Pro trial every new account gets</li>
          </ul>

          <h2 style={h2}>Step by step setup</h2>
          <h3 style={h3}>1. Find the device&apos;s IP address</h3>
          <p>
            In ReefBeat, open the device and look under its device or network settings for the IP
            address. It looks something like <strong style={strong}>192.168.1.60</strong>. If you
            cannot find it there, your router&apos;s list of connected devices will show it too.
          </p>
          <p>
            While you are in the router, give the device a fixed address (often called a DHCP
            reservation). Without one the router may hand it a different address later, and the app
            will lose track of it.
          </p>

          <h3 style={h3}>2. Open the Red Sea screen</h3>
          <p>
            In NextUpReef, open the menu, choose Devices &amp; Automation, then Red Sea. If nothing is
            connected yet, tap Connect a device. If you already have Red Sea gear connected, use the
            add button at the top of the Red Sea screen.
          </p>

          <h3 style={h3}>3. Enter the address and tap Find my device</h3>
          <p>
            Type the IP address into the Device address box. NextUpReef asks the device what it is, so
            the same box works for a light, a wave pump, the ATO, the roller or a ReefRun. Give it a
            few seconds. These devices can be slow to answer.
          </p>

          <h3 style={h3}>4. Check the preview and connect</h3>
          <p>
            Before anything is saved you see what was found: the model, its headline status, any
            alerts, and the first few readings. If that matches the device in front of you, tap
            Connect. If not, tap Look again and check the address.
          </p>

          <h3 style={h3}>5. Repeat for each device</h3>
          <p>
            Devices are added one at a time, each with its own IP address. Afterwards
            you can rename each device and note where it is, which helps with two identical lights.
          </p>

          <h2 style={h2}>At home and away</h2>
          <p>
            Red Sea devices answer on your home WiFi only. NextUpReef reads them directly, with no
            cloud service in between, so fresh readings need your phone on that network.
          </p>
          <ul style={list}>
            <li><strong style={strong}>On your home WiFi:</strong> readings refresh when you open the Red Sea screen or a device, and when you pull down to refresh.</li>
            <li><strong style={strong}>Away from home:</strong> you see the last reading that was saved, labelled as the last reading, with how long ago it was taken. An alert that was showing then, such as a finished roll, still shows.</li>
          </ul>
          <p>
            Treat it as a record of how things stood when you left, not live remote monitoring.
          </p>

          <h2 style={h2}>Troubleshooting</h2>
          <h3 style={h3}>Device not found</h3>
          <p>
            If the app reports no answer from the address, first confirm the device is online in
            ReefBeat. Then try again, since a slow device can miss the first attempt.
          </p>
          <h3 style={h3}>Wrong IP address</h3>
          <p>
            If something answers but the app says it is not a Red Sea device, the address belongs to
            something else on your network. Check the address in ReefBeat again, digit by digit.
          </p>
          <h3 style={h3}>Different network or guest WiFi</h3>
          <p>
            If you are told your phone needs to be on the same WiFi as the device, it usually means
            the phone is on mobile data, a guest network, or a separate network from your equipment.
            Guest networks are normally walled off on purpose. Join the network the device uses.
          </p>
          <h3 style={h3}>IP changed after a router restart</h3>
          <p>
            If a device that worked yesterday now shows &quot;Could not reach it just now&quot; while
            you are at home, its address has probably changed. Find the new address and run setup
            again with it. NextUpReef recognises the device by its hardware ID and updates the saved
            entry, so you do not end up with a duplicate. Then set a fixed address in the router so
            it does not happen again.
          </p>

          <h2 style={h2}>What NextUpReef does not do with this gear</h2>
          <ul style={list}>
            <li><strong style={strong}>No control of lights, wave pumps, ATO or roller.</strong> Status and alerts only. Settings stay in ReefBeat.</li>
            <li><strong style={strong}>No first-time setup.</strong> A device has to be working in ReefBeat before NextUpReef can read it.</li>
            <li><strong style={strong}>No Red Sea account link.</strong> It does not sign in to Red Sea or read anything from their cloud.</li>
            <li><strong style={strong}>No live readings away from home.</strong> You get the last saved reading until you are back on your WiFi.</li>
            <li><strong style={strong}>Not a substitute for ReefBeat&apos;s own notifications.</strong> Alerts appear in NextUpReef when it reads the device. Keep ReefBeat&apos;s notifications switched on.</li>
            <li><strong style={strong}>Not an official Red Sea integration.</strong> NextUpReef is not affiliated with Red Sea, and a firmware change on their side could interrupt it.</li>
          </ul>

          <h2 style={h2}>If you also run a ReefRun</h2>
          <p>
            A ReefRun controller connects through the same screen and the same address box, and it is
            the exception to the read-only rule: you can set the speed of its pumps. That has its own
            guide:{" "}
            <Link href="/blog/connect-red-sea-reefrun" style={link}>how to connect a Red Sea ReefRun</Link>.
          </p>
          <p>
            Mixed-brand tanks are covered too. See the guides for{" "}
            <Link href="/blog/how-to-connect-apex" style={link}>connecting a Neptune Apex</Link> and{" "}
            <Link href="/blog/connect-jebao-pump" style={link}>connecting a Jebao pump</Link>, or read
            about{" "}
            <Link href="/blog/reef-tank-automation-without-a-controller" style={link}>reef tank automation without a controller</Link>.
          </p>

          <h2 style={h2}>Frequently asked questions</h2>
          {faqs.map((f) => (
            <div key={f.q} style={{ marginTop: "28px" }}>
              <h3 style={{ ...h3, marginTop: 0 }}>{f.q}</h3>
              <p style={{ margin: 0 }}>{f.a}</p>
            </div>
          ))}

          <div style={{ ...callout, marginTop: "48px" }}>
            <p style={{ margin: "0 0 10px" }}><strong style={strong}>See your Red Sea gear beside your parameters</strong></p>
            <p style={{ margin: "0 0 12px" }}>
              NextUpReef shows your ReefLED, ReefWave, ReefATO+ and ReefMat status and alerts in the
              same app as your parameter log. Every new account gets a 30-day Pro trial and no credit
              card is needed.
            </p>
            <Link href="/devices" style={link}>See every supported device →</Link>
          </div>
        </div>
      </article>
    </>
  );
}
