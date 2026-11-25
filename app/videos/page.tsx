import type { Metadata } from "next";
import Link from "next/link";
import YouTubeVideo from "@/components/YouTubeVideo";

export const metadata: Metadata = {
  title: "Reef Tank App Videos: How NextUpReef Works",
  description:
    "Short how-to videos for the NextUpReef reef tank app: log a water test, track fish, corals and gear, dosing, reminders, the Reef AI Advisor and a Neptune Apex.",
  alternates: { canonical: "https://nextupreef.com/videos" },
  openGraph: {
    title: "NextUpReef how-to videos",
    description: "See the reef tank app in action, one short video at a time.",
    url: "https://nextupreef.com/videos",
    images: [{ url: "/brand/og-image-v2.png", width: 1200, height: 630 }],
  },
};

type Video = { id: string; title: string; blurb: string; duration: string; guide?: { href: string; label: string } };

const groups: { title: string; wide?: boolean; videos: Video[] }[] = [
  {
    title: "Watch this first",
    wide: true,
    videos: [
      { id: "QKHk2Zfc0eQ", title: "One App for Your Whole Reef Tank", blurb: "NextUpReef on a real 75 gallon reef: Home, Reef Pulse, trends, devices and logging in under a minute.", duration: "PT53S", guide: { href: "/features", label: "All features" } },
    ],
  },
  {
    title: "Start here",
    videos: [
      { id: "F7B17A2MYhA", title: "NextUpReef App Tour", blurb: "Every tab and the menu in 99 seconds: Home, My Reef, Log, Reef Pulse, Community, AI and devices.", duration: "PT1M37S", guide: { href: "/features", label: "All features" } },
      { id: "fwfMqe0dxj8", title: "A Real Reef Tank, Live in the App", blurb: "A real 75 gallon mixed reef with its connected gear, its scores and the readings behind them.", duration: "PT30S", guide: { href: "/blog/reef-score-stability-score-explained", label: "How the scores work" } },
    ],
  },
  {
    title: "Tablet display",
    wide: true,
    videos: [
      { id: "EbbR6vdRTU8", title: "Turn an Old Tablet Into a Reef Tank Display", blurb: "A spare tablet by the tank shows live readings, dosing and gear, and works as a 24/7 hub for your phone.", duration: "PT48S", guide: { href: "/blog/reef-tank-tablet-dashboard", label: "Tablet setup guide" } },
    ],
  },
  {
    title: "Everyday jobs",
    videos: [
      { id: "5HtHAeS0Shc", title: "How to Log a Reef Tank Water Test", blurb: "Check off a task, log results with Goby or by hand, then read the trend chart for each parameter.", duration: "PT1M9S", guide: { href: "/blog/how-to-track-saltwater-aquarium-parameters", label: "Parameter tracking guide" } },
      { id: "KfoJ6QRFDMM", title: "Never Miss a Water Change", blurb: "Set reminders for water changes, filter socks and feeding, and mark them done.", duration: "PT40S", guide: { href: "/blog/reef-tank-maintenance-schedule", label: "Maintenance schedule" } },
      { id: "S7qYb-okfJ4", title: "Track Your Fish, Corals and Equipment", blurb: "Add gear and livestock with dates and costs, then run the Reef AI stocking check.", duration: "PT1M31S", guide: { href: "/blog/saltwater-fish-compatibility", label: "Fish compatibility guide" } },
    ],
  },
  {
    title: "Dosing, AI and devices",
    videos: [
      { id: "oQjTpIz8SGU", title: "Low Magnesium? The App Catches It", blurb: "The Reef AI Advisor spots a slow magnesium drop and suggests the next step. The chart shows the recovery.", duration: "PT1M14S", guide: { href: "/blog/ai-reef-tank-advisor", label: "About the Reef AI Advisor" } },
      { id: "pZhcMChvXPQ", title: "Neptune Apex and Dosing in One App", blurb: "Apex outlets and probe readings, plus a daily dosing checklist you log with a tap.", duration: "PT50S", guide: { href: "/blog/how-to-connect-apex", label: "Connect a Neptune Apex" } },
    ],
  },
];

const listSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NextUpReef how-to videos",
  itemListElement: groups.flatMap((g) => g.videos).map((v, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: v.title,
    url: `https://www.youtube.com/watch?v=${v.id}`,
  })),
};

export default function VideosPage() {
  return (
    <main style={{ background: "var(--bg-dark)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <style>{`
        .vid-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 28px; }
        .vid-card { background: var(--bg-card); border: 1px solid rgba(255,255,255,0.08); border-radius: 18px; padding: 18px; }
        .vid-wide { max-width: 760px; }
        .vid-card figure { margin: 0 auto 16px !important; }
      `}</style>

      <section style={{ padding: "84px 24px 40px", maxWidth: "1100px", margin: "0 auto" }}>
        <div className="section-label">Videos</div>
        <h1 style={{ fontSize: "clamp(34px, 5.5vw, 56px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.06, margin: "14px 0 16px", maxWidth: "780px" }}>
          See the reef tank app{" "}
          <span style={{ background: "linear-gradient(135deg, var(--reef) 0%, var(--reef-soft) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>in action.</span>
        </h1>
        <p style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "640px", margin: 0 }}>
          Short how-to videos, most around a minute. Each one shows a single job in NextUpReef, filmed on a real reef tank and recorded in the app.
        </p>
      </section>

      <section style={{ padding: "0 24px 72px", maxWidth: "1100px", margin: "0 auto" }}>
        {groups.map((g) => (
          <div key={g.title} style={{ marginBottom: "56px" }}>
            <h2 style={{ fontSize: "26px", fontWeight: 900, color: "var(--text-light)", margin: "0 0 20px" }}>{g.title}</h2>
            <div className={g.wide ? "vid-wide" : "vid-grid"}>
              {g.videos.map((v) => (
                <div key={v.id} className="vid-card">
                  <YouTubeVideo id={v.id} title={v.title} description={v.blurb} uploadDate="2026-11-25" duration={v.duration} />
                  <h3 style={{ fontSize: "18px", fontWeight: 800, color: "var(--text-light)", margin: "0 0 8px", lineHeight: 1.3 }}>{v.title}</h3>
                  <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.6, margin: "0 0 10px" }}>{v.blurb}</p>
                  {v.guide ? (
                    <Link href={v.guide.href} style={{ color: "var(--reef)", fontWeight: 700, fontSize: "14px" }}>{v.guide.label} →</Link>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}

        <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.7 }}>
          Have a question the videos don&apos;t answer? Try the{" "}
          <Link href="/faq" style={{ color: "var(--reef)", fontWeight: 700 }}>FAQ</Link> or the{" "}
          <Link href="/blog" style={{ color: "var(--reef)", fontWeight: 700 }}>guides</Link>.
        </p>
      </section>
    </main>
  );
}
