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
    series: "Year 1 Journey · Part 1",
  },
  {
    slug: "cycling-your-tank",
    title: "How to Cycle a Reef Tank: The Complete Beginner's Guide",
    description:
      "Everything you need to know about cycling a new reef tank. How the nitrogen cycle works, how long it takes, what to test, and how to know when you're done.",
    date: "April 2026",
    readTime: "9 min read",
    tags: ["Beginner Guide", "The Cycle"],
    series: "Year 1 Journey · Part 2",
  },
  {
    slug: "the-ugly-phase",
    title: "The Ugly Phase: Why Your Reef Tank Looks Terrible (And Why That's Normal)",
    description:
      "Diatoms, green hair algae, and cyano are completely normal in a new reef tank. Here's why the ugly phase happens, what each algae type means, and how to get through it without losing your mind.",
    date: "April 2026",
    readTime: "7 min read",
    tags: ["Beginner Guide", "Algae"],
    series: "Year 1 Journey · Part 3",
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

        {/* Year 1 Journey series callout */}
        <div style={{
          background: "rgba(61, 26, 110, 0.15)", border: "1px solid rgba(61, 26, 110, 0.4)",
          borderRadius: "16px", padding: "20px 24px", marginBottom: "32px",
          display: "flex", gap: "14px", alignItems: "flex-start",
        }}>
          <span style={{ fontSize: "24px", flexShrink: 0 }}>🪸</span>
          <div>
            <p style={{ color: "#c084fc", fontWeight: "900", fontSize: "13px", letterSpacing: "0.05em", margin: "0 0 4px 0" }}>
              NEW SERIES
            </p>
            <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "17px", margin: "0 0 4px 0" }}>
              Year 1 Journey: The Complete New Reefer's Guide
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
              Three-part series covering every phase of setting up your first reef tank — from day one setup through the cycle, the ugly phase, and beyond.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {posts.map((post) => (
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
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
            >
              {post.series ? (
                <p style={{ color: "#c084fc", fontWeight: "700", fontSize: "12px", letterSpacing: "0.05em", marginBottom: "10px" }}>
                  {post.series}
                </p>
              ) : null}
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