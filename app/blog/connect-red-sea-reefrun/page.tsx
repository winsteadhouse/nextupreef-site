import type { Metadata } from "next";
import Link from "next/link";

const TITLE = "How to Connect a Red Sea ReefRun to NextUpReef";
const DESCRIPTION =
  "Control your Red Sea ReefRun return pump and DC skimmer from NextUpReef: set speeds, see the faults the controller reports, and drop both to feed speed with the rest of your tank. No ReefBeat account needed.";
const URL = "https://nextupreef.com/blog/connect-red-sea-reefrun";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: "Set your ReefRun return pump and skimmer speed from the same app as the rest of your tank.",
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
    q: "Which Red Sea pumps work with NextUpReef?",
    a: "Pumps driven by a ReefRun controller — the DC return pumps and DC skimmer pumps. One ReefRun controller runs two pumps, so connecting the controller picks up both at once. The connection is to the controller, not to the pumps individually.",
  },
  {
    q: "Do I need a ReefBeat account?",
    a: "No. The ReefRun controller answers directly on your home network, so there is no account to sign in to and no cloud service in the path. You will still use ReefBeat for initial setup and for schedules.",
  },
  {
    q: "Why will my pump not run below 40 percent?",
    a: "That is the controller's own minimum running speed, not an app limit. A ReefRun will run at 0 percent or between 40 and 100 percent, with nothing in between, because a DC pump below that speed cannot reliably keep moving water. If you set something lower, NextUpReef tells you what the controller actually did rather than showing a number that is not real.",
  },
  {
    q: "What happens to my ReefBeat schedule?",
    a: "It keeps running. Changing the speed from NextUpReef changes what the pump is doing now; it does not delete or replace the schedule you set in ReefBeat. Schedules stay in ReefBeat.",
  },
  {
    q: "Can I control it when I am away from home?",
    a: "No. The ReefRun is reached over your home network, so speed changes need you to be on that WiFi. Whatever schedule you have set carries on either way, and NextUpReef shows you it is away rather than appearing broken.",
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

export default function ConnectRedSeaReefRunPage() {
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
          Connect a Red Sea ReefRun
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Red Sea", "ReefRun", "Return Pump", "Skimmer", "Setup Guide", "Pro"].map((tag) => (
            <span key={tag} style={{ fontSize: "12px", fontWeight: 700, padding: "4px 12px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)" }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: 900, lineHeight: 1.2, marginBottom: "16px" }}>{TITLE}</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: 700, marginBottom: "48px" }}>
          Updated September 22, 2026 · 6 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: 1.8 }}>
          <p>
            The ReefRun is a tidy bit of engineering: one controller, two DC pumps, usually your
            return and your skimmer. Set it up in ReefBeat, give each pump a schedule, and it gets on
            with it.
          </p>
          <p>
            The friction is not the hardware, it is the app count. Your parameters are in one place,
            your dosing in another, your pumps in a third. Turning the skimmer down for twenty minutes
            means finding a different app to do it in.
          </p>
          <p>
            NextUpReef talks to the ReefRun controller directly on your home network — no ReefBeat
            account, no cloud service — so pump speed sits next to everything else.
          </p>

          <div style={callout}>
            <p style={{ margin: "0 0 8px" }}><strong style={strong}>What you need</strong></p>
            <ul style={{ ...list, margin: 0 }}>
              <li>A Red Sea ReefRun controller, already set up and working in ReefBeat</li>
              <li>Its IP address, shown in ReefBeat under the controller&apos;s network settings</li>
              <li>Your phone on the same WiFi as the controller</li>
              <li>NextUpReef Pro, or the free 30-day trial every new account gets</li>
            </ul>
          </div>

          <h2 style={h2}>Set it up in ReefBeat first</h2>
          <p>
            NextUpReef connects to a working controller; it does not replace the initial setup. Get
            your pumps running in ReefBeat, name them, and set whatever schedule you want. That
            schedule keeps running regardless of anything you do here.
          </p>

          <h2 style={h2}>Find the IP address</h2>
          <p>
            In ReefBeat, open the ReefRun controller and look under its device or network settings for
            the IP address — something like <strong style={strong}>192.168.1.60</strong>. While you
            are at it, give the controller a fixed address in your router. A controller that changes
            address on reboot will quietly drop out of the app for no visible reason.
          </p>

          <h2 style={h2}>Connect it</h2>
          <p>
            In NextUpReef open the menu, choose Devices &amp; Automation, then Red Sea ReefRun, and
            enter the address. The app asks the controller what it has and shows you both pumps with
            their names, types and current speeds before saving anything.
          </p>
          <p>
            Because one controller runs two pumps, connecting it picks up your return pump and your
            skimmer together. There is no second setup to do.
          </p>

          <h2 style={h2}>What you can do once it is connected</h2>
          <h3 style={h3}>Set the speed of either pump</h3>
          <p>
            Each pump gets a dial you can drag, tap to type into, or set with a preset. Change it and
            the controller confirms what it actually applied — which matters more than it sounds, for
            the reason below.
          </p>

          <div style={warn}>
            <p style={{ margin: "0 0 8px" }}><strong style={strong}>40 percent is the floor, and it is the controller&apos;s rule</strong></p>
            <p style={{ margin: 0 }}>
              A ReefRun runs at 0 percent, or between 40 and 100 percent. There is nothing in between,
              because a DC pump below that speed cannot reliably move water. Ask for 25 percent and
              the controller will not do it. NextUpReef tells you what it actually set rather than
              leaving a number on screen that is not what the pump is doing.
            </p>
          </div>

          <h3 style={h3}>See the faults the controller reports</h3>
          <p>
            The ReefRun already knows when a pump is not in an operational state, or when a sensor is
            not connected. That information was only visible if you went looking. NextUpReef surfaces
            it on the dashboard with the rest of your tank, so a skimmer pump that has stopped
            behaving is something you notice rather than something you discover.
          </p>

          <h3 style={h3}>Feed Mode, alongside everything else</h3>
          <p>
            Your ReefRun pumps can join{" "}
            <Link href="/blog/reef-tank-automation-without-a-controller" style={link}>Feed Mode</Link>{" "}
            with the rest of your equipment. One tap slows the return pump and skimmer while your
            Apex runs its feed cycle, your Jebao pumps drop to feed speed and your Shelly outlets
            switch off — all from the same button.
          </p>
          <p>
            Worth being straight about one difference here. Most devices in Feed Mode count their own
            time and restart themselves, so closing the app cannot strand anything. The ReefRun has no
            feed timer of its own, so NextUpReef is the thing that puts the speed back. The app says
            so plainly on the Feed Mode screen rather than hiding it.
          </p>

          <h2 style={h2}>The honest limitations</h2>
          <ul style={list}>
            <li><strong style={strong}>Home network only.</strong> The controller does not go through a cloud service, so speed changes need you on that WiFi. Your schedule runs either way.</li>
            <li><strong style={strong}>Schedules stay in ReefBeat.</strong> NextUpReef changes what the pump is doing now; it does not write schedules to the controller.</li>
            <li><strong style={strong}>Feed speed means off.</strong> Because of the 40 percent floor, the only feed setting below normal running speed is zero.</li>
            <li><strong style={strong}>NextUpReef restores the speed after feeding.</strong> Unlike your Apex or a Jebao pump, the ReefRun will not do it for you.</li>
            <li><strong style={strong}>Not an official Red Sea integration.</strong> A firmware change on their side could interrupt it.</li>
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
              NextUpReef works with Red Sea ReefRun, Neptune Apex, GHL ProfiLux, CoralVue HYDROS,
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
