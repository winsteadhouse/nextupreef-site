import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reef Tank Tips & Guides — NextUpReef Blog",
  description:
    "Guides and tips for reef aquarium keepers. Learn how to set up a reef tank, cycle it correctly, survive the ugly phase, track parameters, and get more from your saltwater aquarium.",
  alternates: {
    canonical: "https://nextupreef.com/blog",
  },
  openGraph: {
    title: "Reef Tank Tips & Guides — NextUpReef Blog",
    description:
      "Guides and tips for reef aquarium keepers. Parameter tracking, stability tips, app comparisons, and more.",
    url: "https://nextupreef.com/blog",
  },
};

const posts = [
  {
    slug: "tank-setup",
    title: "How to Set Up a Reef Tank: A Beginner's Complete Guide",
    description:
      "Step-by-step guide to setting up your first saltwater reef tank. Equipment checklist, salinity targets, rock types, and the one mistake every new reefer makes on day one.",
    date: "April 2026",
    readTime: "8 min read",
    tags: ["Beginner Guide", "Tank Setup"],
    series: "New Tank Journey · Phase 1",
  },
  {
    slug: "cycling-your-tank",
    title: "How to Cycle a Reef Tank: The Complete Beginner's Guide",
    description:
      "Everything you need to know about cycling a new reef tank. How the nitrogen cycle works, how long it takes, what to test, and how to know when you're done.",
    date: "April 2026",
    readTime: "9 min read",
    tags: ["Beginner Guide", "The Cycle"],
    series: "New Tank Journey · Phase 2",
  },
  {
    slug: "the-ugly-phase",
    title: "The Ugly Phase: Why Your Reef Tank Looks Terrible (And Why That's Normal)",
    description:
      "Diatoms, green hair algae, and cyano are completely normal in a new reef tank. Here's why the ugly phase happens, what each algae type means, and how to get through it without losing your mind.",
    date: "April 2026",
    readTime: "7 min read",
    tags: ["Beginner Guide", "Algae"],
    series: "New Tank Journey · Phase 3",
  },
  {
    slug: "first-livestock",
    title: "Adding Your First Fish to a Reef Tank: The Beginner's Guide",
    description:
      "Your tank cycled and survived the ugly phase — now it's ready for its first residents. How to choose hardy beginner fish, the one-at-a-time rule, and what to watch for after adding.",
    date: "April 2026",
    readTime: "8 min read",
    tags: ["Beginner Guide", "Fish"],
    series: "New Tank Journey · Phase 4",
  },
  {
    slug: "adding-first-corals",
    title: "Adding Your First Corals: Start Soft, Go Slow",
    description:
      "Parameters are stable and fish are thriving — time for corals. Why softies and zoas come first, how alkalinity works, and what to avoid in year one.",
    date: "April 2026",
    readTime: "9 min read",
    tags: ["Beginner Guide", "Corals", "Alkalinity"],
    series: "New Tank Journey · Phase 5",
  },
  {
    slug: "established-reef",
    title: "Your Reef is Established: What Comes Next",
    description:
      "Coralline algae is spreading, parameters are holding, and your reef is maturing. What biological maturity means, when to start dosing, and the habits that keep a reef thriving for years.",
    date: "April 2026",
    readTime: "10 min read",
    tags: ["Advanced Guide", "Dosing", "Refugium"],
    series: "New Tank Journey · Phase 6",
  },
  {
    slug: "ai-reef-tank-advisor",
    title: "AI Reef Tank Advisor: How NextUpReef Uses AI to Help You Keep a Better Reef",
    description:
      "How NextUpReef uses AI to analyze your reef tank parameters, equipment, and livestock giving you personalized advice, answering reef questions, and reading test kits from a photo.",
    date: "May 2026",
    readTime: "7 min read",
    tags: ["AI Features", "Pro"],
    series: null,
  },
  {
    slug: "best-reef-tank-tracking-app",
    title: "Best Reef Tank Tracking App in 2026 (Free & Paid Compared)",
    description:
      "An honest comparison of reef aquarium tracking apps — NextUpReef, ReefBay, Aquarimate, Pocket Marine, and more. Find the best free reef app for iOS and Android.",
    date: "April 4, 2026",
    readTime: "6 min read",
    tags: ["App Comparison", "Free Apps"],
    series: null,
  },
  {
    slug: "how-to-track-saltwater-aquarium-parameters",
    title: "How to Track Saltwater Aquarium Parameters (Complete Guide)",
    description:
      "Everything you need to know about monitoring your reef tank: what to test, how often, target ranges, and the best way to spot problems before they crash your tank.",
    date: "April 4, 2026",
    readTime: "8 min read",
    tags: ["Parameter Tracking", "Beginner Guide"],
    series: null,
  },
  {
    slug: "reef-tank-alkalinity-calcium-magnesium-guide",
    title: "Reef Tank Alkalinity, Calcium & Magnesium: The Complete Tracking Guide",
    description:
      "Why alk, cal, and mag are the big three in reef keeping, what ideal ranges look like for SPS, LPS, and Mixed reefs, and how to track them consistently.",
    date: "April 4, 2026",
    readTime: "7 min read",
    tags: ["Alk / Cal / Mag", "Water Chemistry"],
    series: null,
  },
];

const journeyPosts = posts.filter(p => p.series?.startsWith("New Tank Journey"));
const otherPosts = posts.filter(p => !p.series?.startsWith("New Tank Journey"));

export default function BlogPage() {
  return (
    <section className="container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ marginBottom: "16px" }}>
          <span className="section-label">Blog</span>
        </div>
        <h1 style={{ fontSize: "42px", fontWeight: "900", marginBottom: "12px" }}>
          Reef Tank Tips & Guides
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "18px", marginBottom: "60px" }}>
          Parameter tracking tips, app guides, and reef keeping best practices.
        </p>

        {/* New Tank Journey series callout */}
        <div style={{
          background: "rgba(61, 26, 110, 0.15)", border: "1px solid rgba(61, 26, 110, 0.4)",
          borderRadius: "16px", padding: "20px 24px", marginBottom: "32px",
          display: "flex", gap: "14px", alignItems: "flex-start",
        }}>
          <span style={{ fontSize: "24px", flexShrink: 0 }}>🪸</span>
          <div>
            <p style={{ color: "#c084fc", fontWeight: "900", fontSize: "13px", letterSpacing: "0.05em", margin: "0 0 4px 0" }}>
              COMPLETE SERIES
            </p>
            <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "17px", margin: "0 0 4px 0" }}>
              New Tank Journey: The Complete New Reefer's Guide
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
              Six-part series covering every phase of your first reef tank — from day one setup through cycling, the ugly phase, first fish, first corals, and an established reef.
            </p>
          </div>
        </div>

        {/* Journey series posts */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
          {journeyPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                display: "block",
                background: "rgba(61, 26, 110, 0.08)",
                border: "1px solid rgba(61, 26, 110, 0.25)",
                borderRadius: "20px",
                padding: "28px 32px",
                textDecoration: "none",
              }}
            >
              <p style={{ color: "#c084fc", fontWeight: "700", fontSize: "12px", letterSpacing: "0.05em", marginBottom: "10px" }}>
                {post.series}
              </p>
              <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "12px", fontWeight: "700", padding: "4px 12px",
                      borderRadius: "999px", background: "rgba(44, 196, 214, 0.08)",
                      border: "1px solid rgba(44, 196, 214, 0.12)", color: "var(--reef)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 style={{ fontSize: "20px", fontWeight: "900", marginBottom: "8px", color: "var(--text-light)", lineHeight: "1.3" }}>
                {post.title}
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.7", margin: "0 0 12px 0" }}>
                {post.description}
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: "700", margin: 0 }}>
                {post.date} · {post.readTime}
              </p>
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: "48px" }} />

        {/* Other posts */}
        <h2 style={{ fontSize: "22px", fontWeight: "900", marginBottom: "24px", color: "var(--text-light)" }}>
          More Guides
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {otherPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                display: "block",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "32px",
                textDecoration: "none",
              }}
            >
              <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "12px", fontWeight: "700", padding: "4px 12px",
                      borderRadius: "999px", background: "rgba(44, 196, 214, 0.08)",
                      border: "1px solid rgba(44, 196, 214, 0.12)", color: "var(--reef)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 style={{ fontSize: "22px", fontWeight: "900", marginBottom: "10px", color: "var(--text-light)", lineHeight: "1.3" }}>
                {post.title}
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.7", margin: "0 0 16px 0" }}>
                {post.description}
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: "700", margin: 0 }}>
                {post.date} · {post.readTime}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}