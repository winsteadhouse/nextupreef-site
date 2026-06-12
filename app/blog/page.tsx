import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reef Tank Tips & Guides ' NextUpReef Blog",
  description: "Guides and tips for reef aquarium keepers.",
  alternates: { canonical: "https://nextupreef.com/blog" },
  openGraph: { title: "Reef Tank Tips & Guides", description: "Guides and tips for reef aquarium keepers.", url: "https://nextupreef.com/blog" },
};

const posts = [
  // NEW TANK JOURNEY
  { slug: "tank-setup", title: "How to Set Up a Reef Tank: A Beginner's Complete Guide", description: "Step-by-step guide to setting up your first saltwater reef tank. Equipment checklist, salinity targets, rock types, and the one mistake every new reefer makes on day one.", date: "April 2026", readTime: "8 min read", tags: ["Beginner Guide", "Tank Setup"], series: "New Tank Journey - Phase 1", category: "journey" },
  { slug: "cycling-your-tank", title: "How to Cycle a Reef Tank: The Complete Beginner's Guide", description: "Everything you need to know about cycling a new reef tank. How the nitrogen cycle works, how long it takes, what to test, and how to know when you're done.", date: "April 2026", readTime: "9 min read", tags: ["Beginner Guide", "The Cycle"], series: "New Tank Journey - Phase 2", category: "journey" },
  { slug: "the-ugly-phase", title: "The Ugly Phase: Why Your Reef Tank Looks Terrible (And Why That's Normal)", description: "Diatoms, green hair algae, and cyano are completely normal in a new reef tank. Here's why the ugly phase happens, what each algae type means, and how to get through it.", date: "April 2026", readTime: "7 min read", tags: ["Beginner Guide", "Algae"], series: "New Tank Journey - Phase 3", category: "journey" },
  { slug: "first-livestock", title: "Adding Your First Fish to a Reef Tank: The Beginner's Guide", description: "Your tank cycled and survived the ugly phase. How to choose hardy beginner fish, the one-at-a-time rule, and what to watch for after adding.", date: "April 2026", readTime: "8 min read", tags: ["Beginner Guide", "Fish"], series: "New Tank Journey - Phase 4", category: "journey" },
  { slug: "adding-first-corals", title: "Adding Your First Corals: Start Soft, Go Slow", description: "Parameters are stable and fish are thriving. Why softies and zoas come first, how alkalinity works, and what to avoid in year one.", date: "April 2026", readTime: "9 min read", tags: ["Beginner Guide", "Corals", "Alkalinity"], series: "New Tank Journey - Phase 5", category: "journey" },
  { slug: "established-reef", title: "Your Reef is Established: What Comes Next", description: "Coralline algae is spreading, parameters are holding, and your reef is maturing. What biological maturity means, when to start dosing, and the habits that keep a reef thriving.", date: "April 2026", readTime: "10 min read", tags: ["Advanced Guide", "Dosing", "Refugium"], series: "New Tank Journey - Phase 6", category: "journey" },
  // REEF AQUARIUM GUIDES
  { slug: "nano-reef-tank-guide", title: "Nano Reef Tank Guide: 10, 20, and 40 Gallon Setups That Actually Work", description: "Complete guide to nano reef tanks from 5 to 40 gallons. Equipment, livestock, parameters, and the small-tank mistakes most beginners make.", date: "May 9, 2026", readTime: "9 min read", tags: ["Nano Reef", "Beginner Guide", "Tank Setup"], series: null, category: "reef" },
  { slug: "reef-tank-ph-guide", title: "Reef Tank pH: How to Test, Track, and Raise It Safely", description: "Complete guide to reef tank pH. Target ranges, why pH swings, how to raise low pH safely, and how to track daily trends.", date: "May 9, 2026", readTime: "8 min read", tags: ["pH", "Water Chemistry", "Troubleshooting"], series: null, category: "reef" },
  { slug: "reef-tank-sump-guide", title: "Reef Tank Sump Guide: Do You Need One, and How to Set It Up", description: "Complete guide to reef tank sumps. What they do, what size you need, how to plumb one, and whether your tank actually needs a sump.", date: "May 9, 2026", readTime: "9 min read", tags: ["Sump", "Equipment", "Tank Setup"], series: null, category: "reef" },
  { slug: "reef-tank-salinity-guide", title: "Reef Tank Salinity: Targets, Testing, and How to Adjust It Safely", description: "Complete guide to reef tank salinity. Ideal ranges, how to test with a refractometer, what causes salinity swings, and how to adjust without shocking your corals.", date: "May 9, 2026", readTime: "7 min read", tags: ["Salinity", "Water Chemistry", "Testing"], series: null, category: "reef" },
  { slug: "reef-tank-temperature-guide", title: "Reef Tank Temperature: Ideal Range and How to Control It", description: "Complete guide to reef tank temperature. Ideal range, summer cooling, winter heating, heater sizing, controllers, and how to prevent the swings that crash tanks.", date: "May 9, 2026", readTime: "8 min read", tags: ["Temperature", "Equipment", "Stability"], series: null, category: "reef" },
  { slug: "cyanobacteria-dinoflagellates-algae-reef-pests", title: "Cyanobacteria, Dinoflagellates & Green Hair Algae: How to Beat the Three Reef Tank Pests", description: "Complete guide to cyanobacteria, dinoflagellates, and green hair algae. How to identify each one, what causes them, and how to get rid of them safely.", date: "May 9, 2026", readTime: "10 min read", tags: ["Pests", "Troubleshooting", "Nuisance Algae"], series: null, category: "reef" },
  { slug: "frag-tank-setup-guide", title: "Frag Tank Setup Guide: Coral Propagation Made Simple", description: "Complete guide to setting up a frag tank for coral propagation. Sizing, lighting, flow, racks, plumbing into your display, and how to grow out coral frags.", date: "May 9, 2026", readTime: "9 min read", tags: ["Frag Tank", "Coral Propagation", "Tank Setup"], series: null, category: "reef" },
  { slug: "live-rock-vs-dry-rock", title: "Live Rock vs Dry Rock: Which Is Right for Your Reef Tank?", description: "Complete comparison of live rock vs dry rock. Pros, cons, cycling time, pest risk, cost, and how to decide which is right for your build.", date: "May 9, 2026", readTime: "8 min read", tags: ["Live Rock", "Dry Rock", "Tank Setup"], series: null, category: "reef" },
  // NEXTUPREEF APP GUIDES
  { slug: "how-to-setup-dosing-shelly", title: "How to Set Up Automated Dosing with a Shelly Outlet", description: "Calibrate your dosing pump and save a schedule to your Shelly outlet. Doses run 24/7 on the outlet itself even with no phone or internet.", date: "May 23, 2026", readTime: "8 min read", tags: ["Dosing", "Smart Outlets", "Setup Guide"], series: null, category: "app" },
  { slug: "how-to-add-shelly-plug", title: "How to Add a Shelly Smart Outlet to NextUpReef", description: "Set up a Shelly Plug US Gen4 in 5 steps entirely inside the NextUpReef app. No Shelly app needed. Control your doser, heater, skimmer, or return pump and get automated dosing history.", date: "May 23, 2026", readTime: "5 min read", tags: ["Shelly", "Smart Outlets", "Setup Guide"], series: null, category: "app" },
  { slug: "my-reef-tank-tracking", title: "My Reef: Track Livestock, Equipment, Corals, and Cost in One App", description: "How NextUpReef tracks every fish, coral, invert, piece of equipment, dosing product, monthly photo, and dollar you spend — with an AI Stocking Advisor that checks compatibility for your tank.", date: "June 12, 2026", readTime: "7 min read", tags: ["Livestock", "Equipment", "Cost Tracking"], series: null, category: "app" },
  { slug: "ai-reef-tank-advisor", title: "AI Reef Tank Advisor: How NextUpReef Uses AI to Help You Keep a Better Reef", description: "How NextUpReef uses AI to analyze your reef tank parameters, equipment, and livestock giving you personalized advice, answering reef questions, and reading test kits from a photo.", date: "May 2026", readTime: "7 min read", tags: ["AI Features", "Pro"], series: null, category: "app" },
  { slug: "best-reef-tank-tracking-app", title: "Best Reef Tank Tracking App in 2026 (Free & Paid Compared)", description: "An honest comparison of reef aquarium tracking apps. Find the best free reef app for iOS and Android.", date: "April 4, 2026", readTime: "6 min read", tags: ["App Comparison", "Free Apps"], series: null, category: "app" },
  { slug: "nextupreef-hub-vs-neptune-apex", title: "NextUpReef Hub vs Neptune Apex: A Modern Reef Controller Compared (2026)", description: "Honest comparison of the NextUpReef Hub and Neptune A3 Apex. Pricing, included probes, equipment control, app features, and total cost.", date: "May 20, 2026", readTime: "8 min read", tags: ["Comparison", "Reef Controllers", "Hardware"], series: null, category: "reef" },
  { slug: "how-to-track-saltwater-aquarium-parameters", title: "How to Track Saltwater Aquarium Parameters (Complete Guide)", description: "Everything you need to know about monitoring your reef tank: what to test, how often, target ranges, and the best way to spot problems before they crash your tank.", date: "April 4, 2026", readTime: "8 min read", tags: ["Parameter Tracking", "Beginner Guide"], series: null, category: "app" },
  { slug: "reef-tank-alkalinity-calcium-magnesium-guide", title: "Reef Tank Alkalinity, Calcium & Magnesium: The Complete Tracking Guide", description: "Why alk, cal, and mag are the big three in reef keeping, what ideal ranges look like, and how to track them consistently.", date: "April 4, 2026", readTime: "7 min read", tags: ["Alk / Cal / Mag", "Water Chemistry"], series: null, category: "app" },
];

const comingSoonDocs = [
  { title: "How to Set Up Automated Dosing in NextUpReef", description: "Calibrate your dosing pump, set a daily mL target, and let NextUpReef handle the schedule with dose history logged automatically.", tags: ["Dosing", "Automation"] },
  { title: "Setting Up the NextUpReef Hub", description: "Unbox your Hub, connect it to your home network, and link it to your tank. Full walkthrough with photos for every step.", tags: ["Hub", "Hardware"] },
  { title: "How to Connect a Neptune Apex to NextUpReef", description: "Sync your Apex probe readings directly into your parameter log. Enter your IP and credentials once and NextUpReef pulls data automatically.", tags: ["Neptune Apex", "Controller"] },
];

const journeyPosts = posts.filter((p) => p.category === "journey");
const reefPosts = posts.filter((p) => p.category === "reef");
const appPosts = posts.filter((p) => p.category === "app");

export default function BlogPage() {
  return (
    <section className="container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ marginBottom: "16px" }}><span className="section-label">Blog</span></div>
        <h1 style={{ fontSize: "42px", fontWeight: "900", marginBottom: "12px" }}>Reef Tank Tips & Guides</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "18px", marginBottom: "60px" }}>Parameter tracking tips, app guides, and reef keeping best practices.</p>

        {/* NEW TANK JOURNEY callout */}
        <div style={{ background: "rgba(61,26,110,0.15)", border: "1px solid rgba(61,26,110,0.4)", borderRadius: "16px", padding: "20px 24px", marginBottom: "32px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
          <span style={{ fontSize: "24px", flexShrink: 0 }}>&#x1FAB8;</span>
          <div>
            <p style={{ color: "#c084fc", fontWeight: "900", fontSize: "13px", letterSpacing: "0.05em", margin: "0 0 4px 0" }}>COMPLETE SERIES</p>
            <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "17px", margin: "0 0 4px 0" }}>New Tank Journey: The Complete New Reefer&#39;s Guide</p>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>Six-part series covering every phase of your first reef tank, from day one setup through cycling, the ugly phase, first fish, first corals, and an established reef.</p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "64px" }}>
          {journeyPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ display: "block", background: "rgba(61,26,110,0.08)", border: "1px solid rgba(61,26,110,0.25)", borderRadius: "20px", padding: "28px 32px", textDecoration: "none" }}>
              <p style={{ color: "#c084fc", fontWeight: "700", fontSize: "12px", letterSpacing: "0.05em", marginBottom: "10px" }}>{post.series}</p>
              <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
                {post.tags.map((tag) => (<span key={tag} style={{ fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)" }}>{tag}</span>))}
              </div>
              <h2 style={{ fontSize: "20px", fontWeight: "900", marginBottom: "8px", color: "var(--text-light)", lineHeight: "1.3" }}>{post.title}</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.7", margin: "0 0 12px 0" }}>{post.description}</p>
              <p style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: "700", margin: 0 }}>{post.date} &middot; {post.readTime}</p>
            </Link>
          ))}
        </div>

        {/* REEF AQUARIUM GUIDES */}
        <h2 style={{ fontSize: "26px", fontWeight: "900", marginBottom: "8px", color: "var(--text-light)" }}>Reef Aquarium Guides</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "15px", marginBottom: "24px" }}>Deep-dive guides on reef tank chemistry, equipment, pests, and propagation.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "64px" }}>
          {reefPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ display: "block", background: "rgba(44,196,214,0.04)", border: "1px solid rgba(44,196,214,0.18)", borderRadius: "20px", padding: "28px 32px", textDecoration: "none" }}>
              <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
                {post.tags.map((tag) => (<span key={tag} style={{ fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)" }}>{tag}</span>))}
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "900", marginBottom: "8px", color: "var(--text-light)", lineHeight: "1.3" }}>{post.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.7", margin: "0 0 12px 0" }}>{post.description}</p>
              <p style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: "700", margin: 0 }}>{post.date} &middot; {post.readTime}</p>
            </Link>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: "48px" }} />

        {/* NEXTUPREEF APP GUIDES */}
        <h2 style={{ fontSize: "22px", fontWeight: "900", marginBottom: "8px", color: "var(--text-light)" }}>NextUpReef App Guides</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "15px", marginBottom: "24px" }}>App features, setup how-tos, and guides for getting more from NextUpReef.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "48px" }}>
          {appPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ display: "block", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "32px", textDecoration: "none" }}>
              <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
                {post.tags.map((tag) => (<span key={tag} style={{ fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)" }}>{tag}</span>))}
              </div>
              <h3 style={{ fontSize: "22px", fontWeight: "900", marginBottom: "10px", color: "var(--text-light)", lineHeight: "1.3" }}>{post.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.7", margin: "0 0 16px 0" }}>{post.description}</p>
              <p style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: "700", margin: 0 }}>{post.date} &middot; {post.readTime}</p>
            </Link>
          ))}
        </div>

        {/* COMING SOON automation guides */}
        <div style={{ background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.2)", borderRadius: "16px", padding: "20px 24px", marginBottom: "8px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
          <span style={{ fontSize: "22px", flexShrink: 0 }}>&#x26A1;</span>
          <div>
            <p style={{ color: "#38bdf8", fontWeight: "900", fontSize: "13px", letterSpacing: "0.05em", margin: "0 0 4px 0" }}>COMING SOON</p>
            <p style={{ color: "var(--text-light)", fontWeight: "900", fontSize: "16px", margin: "0 0 4px 0" }}>More Automation & Control Guides</p>
            <p style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>Step-by-step guides for automated dosing, the NextUpReef Hub, and Apex sync are on the way.</p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
          {comingSoonDocs.map((doc) => (
            <div key={doc.title} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "12px", padding: "16px", opacity: 0.6 }}>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "8px" }}>
                {doc.tags.map((tag) => (<span key={tag} style={{ fontSize: "10px", fontWeight: "700", padding: "2px 8px", borderRadius: "999px", background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.15)", color: "#38bdf8" }}>{tag}</span>))}
              </div>
              <p style={{ fontSize: "13px", fontWeight: "900", color: "var(--text-light)", margin: "0 0 6px" }}>{doc.title}</p>
              <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0, lineHeight: 1.55 }}>{doc.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
