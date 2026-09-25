import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reef Tank Guides & Tips",
  description:
    "Practical reef tank guides: cycling, water chemistry, dosing, equipment, pests, and step-by-step NextUpReef app guides for Apex, Shelly, AI and tracking.",
  alternates: { canonical: "https://nextupreef.com/blog" },
  openGraph: {
    title: "Reef Tank Guides & Tips | NextUpReef Blog",
    description: "Practical reef tank guides on cycling, water chemistry, dosing, equipment and pests.",
    url: "https://nextupreef.com/blog",
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630 }],
  },
};

type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tag: string;
  image?: string;
};

// The six-phase series, in order — the numbers are the real sequence.
const journey: Post[] = [
  { slug: "tank-setup", title: "Set up your first reef tank", description: "Equipment checklist, salinity targets, rock choice, and the mistake almost every new reefer makes on day one.", date: "April 2026", readTime: "8 min", tag: "Setup" },
  { slug: "cycling-your-tank", title: "Cycle the tank", description: "How the nitrogen cycle works, how long it really takes, what to test, and how to know you're done.", date: "April 2026", readTime: "9 min", tag: "The cycle" },
  { slug: "the-ugly-phase", title: "Survive the ugly phase", description: "Diatoms, hair algae and cyano are normal. What each one means and how to get through it.", date: "April 2026", readTime: "7 min", tag: "Algae" },
  { slug: "first-livestock", title: "Add your first fish", description: "Hardy beginner fish, the one-at-a-time rule, and what to watch in the first two weeks.", date: "April 2026", readTime: "8 min", tag: "Fish" },
  { slug: "adding-first-corals", title: "Add your first corals", description: "Why softies and zoas come first, how alkalinity works, and what to avoid in year one.", date: "April 2026", readTime: "9 min", tag: "Corals" },
  { slug: "established-reef", title: "Run an established reef", description: "What maturity looks like, when to start dosing, and the habits that keep a reef thriving.", date: "April 2026", readTime: "10 min", tag: "Dosing" },
];

const chemistry: Post[] = [
  { slug: "reef-tank-parameters-chart", title: "Reef Tank Parameters Chart: Ideal Ranges vs What Real Tanks Run", description: "Target ranges for every tank type, next to what 100+ real reef tanks actually run, from NextUpReef app data.", date: "September 14, 2026", readTime: "9 min", tag: "Original data" },
  { slug: "reef-tank-nitrate-phosphate-guide", title: "Nitrate and Phosphate: Ideal Levels and How to Lower or Raise Them", description: "Why zero isn't the goal, sensible ranges by tank type, testing accurately, and fixing nutrients without crashing them.", date: "September 14, 2026", readTime: "9 min", tag: "Nutrients" },
  { slug: "reef-tank-alkalinity-calcium-magnesium-guide", title: "Alkalinity, Calcium & Magnesium: The Complete Tracking Guide", description: "Why alk, calcium and magnesium are the big three, what healthy ranges look like, and how to keep them steady.", date: "April 4, 2026", readTime: "7 min", tag: "Alk · Ca · Mg" },
  { slug: "how-to-track-saltwater-aquarium-parameters", title: "How to Track Saltwater Aquarium Parameters", description: "What to test, how often, target ranges, and how to spot a problem before it crashes your tank.", date: "April 4, 2026", readTime: "8 min", tag: "Testing" },
  { slug: "reef-tank-ph-guide", title: "Reef Tank pH: How to Test, Track and Raise It Safely", description: "Target ranges, why pH swings between day and night, and how to raise low pH without shocking corals.", date: "May 9, 2026", readTime: "8 min", tag: "pH" },
  { slug: "reef-tank-salinity-guide", title: "Reef Tank Salinity: Targets, Testing and Adjusting Safely", description: "Ideal ranges, refractometer testing, what causes salinity swings, and how to correct them slowly.", date: "May 9, 2026", readTime: "7 min", tag: "Salinity" },
  { slug: "reef-tank-temperature-guide", title: "Reef Tank Temperature: Ideal Range and How to Control It", description: "Summer cooling, winter heating, heater sizing, controllers, and preventing the swings that crash tanks.", date: "May 9, 2026", readTime: "8 min", tag: "Temperature" },
];

const dosing: Post[] = [
  { slug: "reef-tank-dosing-calculator", title: "Reef Tank Dosing Calculator: How Much Baking Soda, 2-Part or Kalk to Dose", description: "The one-line formula, worked examples for alkalinity, calcium and magnesium, and the safe daily limits.", date: "September 14, 2026", readTime: "9 min", tag: "Calculator" },
  { slug: "two-part-vs-all-in-one-vs-kalkwasser", title: "2-Part vs All-in-One vs Kalkwasser: Choosing Your Dosing Method", description: "When to start dosing, how each method works, what it costs you in control and effort, and which fits your tank.", date: "September 14, 2026", readTime: "9 min", tag: "Dosing" },
  { slug: "reef-tank-water-change-guide", title: "Reef Tank Water Changes: How Much, How Often, and When to Skip", description: "The dilution math, what 125 real tanks do, a step-by-step routine, and when fewer changes are fine.", date: "September 14, 2026", readTime: "9 min", tag: "Water changes" },
];

const equipment: Post[] = [
  { slug: "coralvue-hydros-vs-neptune-apex", title: "CoralVue HYDROS vs Neptune Apex: Which Reef Controller Is Right for You?", description: "Local vs cloud, what each does, honest limits, and when a couple of smart plugs are all you need.", date: "September 14, 2026", readTime: "9 min", tag: "Controllers" },
  { slug: "nano-reef-tank-guide", title: "Nano Reef Tank Guide: 10, 20 and 40 Gallon Setups That Work", description: "Equipment, livestock and parameters for small tanks, and the mistakes that sink most nanos.", date: "May 9, 2026", readTime: "9 min", tag: "Nano reef" },
  { slug: "reef-tank-sump-guide", title: "Reef Tank Sump Guide: Do You Need One?", description: "What a sump does, what size you need, how to plumb one, and when your tank is fine without it.", date: "May 9, 2026", readTime: "9 min", tag: "Sump" },
  { slug: "live-rock-vs-dry-rock", title: "Live Rock vs Dry Rock: Which Is Right for You?", description: "Cycling time, pest risk, cost and looks compared, so you can pick the right rock for your build.", date: "May 9, 2026", readTime: "8 min", tag: "Rock" },
  { slug: "frag-tank-setup-guide", title: "Frag Tank Setup Guide: Coral Propagation Made Simple", description: "Sizing, lighting, flow, racks and plumbing into your display, plus how to grow out frags.", date: "May 9, 2026", readTime: "9 min", tag: "Frag tank" },
  { slug: "cyanobacteria-dinoflagellates-algae-reef-pests", title: "Cyano, Dinos & Hair Algae: Beating the Three Reef Pests", description: "How to identify each one, what causes it, and how to get rid of it without harming your tank.", date: "May 9, 2026", readTime: "10 min", tag: "Pests" },
];

const appGuides: Post[] = [
  { slug: "reef-score-stability-score-explained", title: "Reef Score and Stability Score, Explained", description: "Exactly what each score measures, how they're weighted, and the practical ways to raise both.", date: "September 14, 2026", readTime: "9 min", tag: "Scores", image: "/screenshots/site-v3/phone-reef-pulse.png" },
  { slug: "reef-tank-automation-without-a-controller", title: "Run Your Whole Reef From One App, at Any Budget", description: "Start with smart plugs and a probe for about $90, add as you go, and connect an Apex or HYDROS when you want probes.", date: "September 21, 2026", readTime: "9 min", tag: "Budget Build", image: "/screenshots/site-v3/phones-dosing.png" },
  { slug: "reef-tank-temperature-monitor", title: "Monitor Your Tank Temperature Without a Controller", description: "A Shelly Pill and a probe put real, measured water temperature into your log, charts and scores.", date: "September 21, 2026", readTime: "7 min", tag: "Temperature", image: "/screenshots/site-v3/phone-log.png" },
  { slug: "connect-ghl-profilux", title: "Connect a GHL ProfiLux", description: "Read alkalinity, calcium and magnesium straight off a KH and ION Director, plus your probes and dosing container levels — logged automatically, no account and no cloud.", date: "September 22, 2026", readTime: "8 min", tag: "GHL", image: "/screenshots/site-v3/phones-integrations.png" },
  { slug: "reef-tank-tablet-dashboard", title: "Turn a Tablet Into a Reef Tank Dashboard", description: "Mount a spare tablet by the tank for a full-screen dashboard - and leave it on your WiFi so it becomes the hub that lets your phone reach your Apex, ReefRun, ProfiLux or Shelly from anywhere.", date: "September 25, 2026", readTime: "8 min", tag: "Tablet", image: "/screenshots/site-v3/tablet-display.png" },
  { slug: "connect-red-sea-reefrun", title: "Connect a Red Sea ReefRun", description: "Set your return pump and DC skimmer speed, see the faults the controller reports, and drop both to feed speed with the rest of your tank.", date: "September 22, 2026", readTime: "6 min", tag: "Red Sea", image: "/screenshots/site-v3/phones-integrations.png" },
  { slug: "connect-jebao-pump", title: "Connect a Jebao or Jecod Pump", description: "Set flow and wave mode from anywhere, run Feed Mode across your whole tank, and get alerted when a pump jams or runs dry.", date: "September 20, 2026", readTime: "8 min", tag: "Jebao", image: "/screenshots/site-v3/phones-integrations.png" },
  { slug: "how-to-connect-apex", title: "Connect and Manage a Neptune Apex", description: "Sync probes into your logs, control every outlet, run Feed Mode, set heater temps and schedule dosing.", date: "September 4, 2026", readTime: "7 min", tag: "Neptune Apex", image: "/screenshots/site-v3/phones-integrations.png" },
  { slug: "how-to-setup-dosing-shelly", title: "Automated Dosing with a Shelly Outlet", description: "Calibrate your pump, set a daily mL target, and let the schedule run on the plug even with no internet.", date: "May 23, 2026", readTime: "8 min", tag: "Dosing", image: "/screenshots/site-v3/phones-dosing.png" },
  { slug: "ai-reef-tank-advisor", title: "The AI Reef Advisor, Explained", description: "How the Reef AI Advisor, Reef AI Chat and photo logging use your real tank data to give specific advice.", date: "May 2026", readTime: "7 min", tag: "AI", image: "/screenshots/site-v3/phones-ai.png" },
  { slug: "my-reef-tank-tracking", title: "My Reef: Livestock, Equipment and Cost in One Place", description: "Track every fish, coral, invert, piece of gear and dollar, with a Stocking Advisor that checks compatibility.", date: "June 12, 2026", readTime: "7 min", tag: "My Reef", image: "/screenshots/site-v3/phone-my-reef.png" },
  { slug: "how-to-add-shelly-plug", title: "Add a Shelly Smart Outlet in 5 Steps", description: "Set up a Shelly Plug US Gen4 entirely inside NextUpReef, no Shelly app needed.", date: "May 23, 2026", readTime: "5 min", tag: "Shelly", image: "/screenshots/site-v3/phone-doser.png" },
  { slug: "best-reef-tank-tracking-app", title: "Best Reef Tank Tracking App in 2026", description: "An honest comparison of free and paid reef aquarium apps for iPhone and Android.", date: "April 4, 2026", readTime: "6 min", tag: "Comparison", image: "/screenshots/site-v3/phone-log.png" },
];

const featured: Post = { ...chemistry[0], image: "/screenshots/site-v3/phone-log.png" };

const SECTIONS = [
  { id: "journey", label: "New Tank Journey" },
  { id: "chemistry", label: "Water & Chemistry" },
  { id: "dosing", label: "Dosing & Maintenance" },
  { id: "equipment", label: "Equipment & Pests" },
  { id: "app", label: "App Guides" },
];

const allPosts = [...journey, ...chemistry, ...dosing, ...equipment, ...appGuides];
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "NextUpReef Blog",
  url: "https://nextupreef.com/blog",
  blogPost: allPosts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description,
    url: `https://nextupreef.com/blog/${p.slug}`,
  })),
};

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ display: "inline-block", fontSize: "11.5px", fontWeight: 800, letterSpacing: "0.02em", padding: "4px 10px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.16)", color: "var(--reef)" }}>
      {children}
    </span>
  );
}

function Meta({ post }: { post: Post }) {
  return <span style={{ color: "var(--text-muted)", fontSize: "12.5px", fontWeight: 700 }}>{post.date} · {post.readTime} read</span>;
}

function SectionHead({ id, label, title, sub }: { id: string; label: string; title: string; sub: string }) {
  return (
    <div id={id} style={{ scrollMarginTop: "90px", marginBottom: "24px" }}>
      <div className="section-label">{label}</div>
      <h2 style={{ fontSize: "clamp(24px, 3.4vw, 34px)", fontWeight: 900, letterSpacing: "-0.03em", margin: "10px 0 8px", color: "var(--text-light)" }}>{title}</h2>
      <p style={{ color: "var(--text-muted)", fontSize: "15.5px", lineHeight: 1.65, margin: 0, maxWidth: "620px" }}>{sub}</p>
    </div>
  );
}

function GuideCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-card" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "var(--bg-card)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "22px 22px 20px", textDecoration: "none", height: "100%" }}>
      <div><Chip>{post.tag}</Chip></div>
      <h3 style={{ fontSize: "17.5px", fontWeight: 900, lineHeight: 1.3, color: "var(--text-light)", margin: 0 }}>{post.title}</h3>
      <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.6, margin: 0, flex: 1 }}>{post.description}</p>
      <Meta post={post} />
    </Link>
  );
}

export default function BlogPage() {
  return (
    <main style={{ background: "var(--bg-dark)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <style>{`
        .blog-card { transition: border-color .18s ease, transform .18s ease; }
        .blog-card:hover { border-color: rgba(44,196,214,0.35) !important; transform: translateY(-2px); }
        .blog-card:focus-visible { outline: 2px solid var(--reef); outline-offset: 3px; }
        .blog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 16px; }
        .journey-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .app-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .featured { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; align-items: center; }
        @media (max-width: 900px) { .journey-grid { grid-template-columns: repeat(2, 1fr); } .app-grid { grid-template-columns: 1fr; } .featured { grid-template-columns: 1fr; gap: 24px; } }
        @media (max-width: 600px) { .journey-grid { grid-template-columns: 1fr; } }
        @media (prefers-reduced-motion: reduce) { .blog-card { transition: none; } .blog-card:hover { transform: none; } }
      `}</style>

      {/* HERO */}
      <section style={{ padding: "84px 24px 40px", maxWidth: "1100px", margin: "0 auto" }}>
        <div className="section-label">Blog</div>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 60px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.05, margin: "14px 0 18px", maxWidth: "760px" }}>
          Reef guides that{" "}
          <span style={{ background: "linear-gradient(135deg, var(--reef) 0%, var(--reef-soft) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>actually help.</span>
        </h1>
        <p style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "620px", margin: "0 0 28px" }}>
          From your first cycle to a thriving reef: water chemistry, dosing, equipment and pests, plus step-by-step guides for getting the most out of NextUpReef.
        </p>
        <nav aria-label="Blog sections" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} style={{ fontSize: "13px", fontWeight: 700, color: "var(--reef)", textDecoration: "none", padding: "7px 15px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.18)" }}>{s.label}</a>
          ))}
        </nav>
      </section>

      {/* FEATURED */}
      <section style={{ padding: "0 24px 72px", maxWidth: "1100px", margin: "0 auto" }}>
        <Link href={`/blog/${featured.slug}`} className="blog-card featured" style={{ background: "linear-gradient(160deg, rgba(44,196,214,0.07) 0%, rgba(255,255,255,0.02) 70%)", border: "1px solid rgba(44,196,214,0.2)", borderRadius: "24px", padding: "40px", textDecoration: "none" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
              <span style={{ fontSize: "11px", fontWeight: 900, letterSpacing: "0.08em", color: "var(--reef-soft)", textTransform: "uppercase" }}>New · original data</span>
              <Chip>{featured.tag}</Chip>
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.6vw, 38px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.12, color: "var(--text-light)", margin: 0 }}>{featured.title}</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.7, margin: 0 }}>{featured.description}</p>
            <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap", marginTop: "4px" }}>
              <span style={{ color: "var(--reef)", fontWeight: 900, fontSize: "15px" }}>Read the guide →</span>
              <Meta post={featured} />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src={featured.image!} alt="NextUpReef Log Parameters screen with alkalinity and calcium entered and shown in range" width={777} height={1557} style={{ width: "100%", maxWidth: "250px", height: "auto" }} priority />
          </div>
        </Link>
      </section>

      {/* NEW TANK JOURNEY */}
      <section style={{ borderTop: "1px solid rgba(44,196,214,0.1)", padding: "72px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHead id="journey" label="Complete series" title="New Tank Journey" sub="Six guides covering every phase of your first reef, in order, from an empty tank to an established reef. The same phases guide you inside the app." />
        <ol className="journey-grid" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {journey.map((post, i) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="blog-card" style={{ display: "flex", flexDirection: "column", gap: "10px", background: "var(--bg-card)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "22px", textDecoration: "none", height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span aria-hidden style={{ width: "30px", height: "30px", borderRadius: "10px", background: "rgba(44,196,214,0.12)", color: "var(--reef)", fontWeight: 900, fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontVariantNumeric: "tabular-nums" }}>{i + 1}</span>
                  <span style={{ fontSize: "11.5px", fontWeight: 800, color: "var(--text-muted)", letterSpacing: "0.04em", textTransform: "uppercase" }}>Phase {i + 1}</span>
                </div>
                <h3 style={{ fontSize: "17px", fontWeight: 900, lineHeight: 1.3, color: "var(--text-light)", margin: 0 }}>{post.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "13.5px", lineHeight: 1.6, margin: 0, flex: 1 }}>{post.description}</p>
                <span style={{ color: "var(--text-muted)", fontSize: "12.5px", fontWeight: 700 }}>{post.readTime} read</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* WATER & CHEMISTRY */}
      <section style={{ borderTop: "1px solid rgba(44,196,214,0.1)", padding: "72px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHead id="chemistry" label="Water & chemistry" title="Get your parameters right" sub="Targets, testing and the day-to-day chemistry that decides whether corals grow or struggle." />
        <div className="blog-grid">{chemistry.map((p) => <GuideCard key={p.slug} post={p} />)}</div>
      </section>

      {/* DOSING & MAINTENANCE */}
      <section style={{ borderTop: "1px solid rgba(44,196,214,0.1)", padding: "72px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHead id="dosing" label="Dosing & maintenance" title="Keep it stable" sub="How much to dose, which method to use, and the water change routine that holds a reef steady." />
        <div className="blog-grid">{dosing.map((p) => <GuideCard key={p.slug} post={p} />)}</div>
      </section>

      {/* EQUIPMENT & PESTS */}
      <section style={{ borderTop: "1px solid rgba(44,196,214,0.1)", padding: "72px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHead id="equipment" label="Equipment & pests" title="Build it, run it, keep it clean" sub="Controllers, tank sizes, sumps, rock and frag systems, plus how to beat the nuisance algae every reef meets." />
        <div className="blog-grid">{equipment.map((p) => <GuideCard key={p.slug} post={p} />)}</div>
      </section>

      {/* APP GUIDES */}
      <section style={{ borderTop: "1px solid rgba(44,196,214,0.1)", padding: "72px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHead id="app" label="NextUpReef app guides" title="Get more from the app" sub="Step-by-step setup for controllers, smart outlets, dosing and AI, written from inside the app." />
        <div className="app-grid">
          {appGuides.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card" style={{ display: "grid", gridTemplateColumns: "1fr 112px", gap: "18px", alignItems: "center", background: "var(--bg-card)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "20px 20px 20px 22px", textDecoration: "none" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "9px", minWidth: 0 }}>
                <div><Chip>{post.tag}</Chip></div>
                <h3 style={{ fontSize: "17px", fontWeight: 900, lineHeight: 1.3, color: "var(--text-light)", margin: 0 }}>{post.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "13.5px", lineHeight: 1.6, margin: 0 }}>{post.description}</p>
                <Meta post={post} />
              </div>
              {post.image ? (
                <Image src={post.image} alt="" width={post.image.includes("phones-") ? 1227 : 777} height={post.image.includes("phones-") ? 1434 : 1557} style={{ width: "100%", height: "auto" }} />
              ) : null}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container-narrow">
          <div className="cta-card">
            <h2>Put the guides<br />to work.</h2>
            <p>Track your parameters, get AI advice built on your tank, and follow the New Tank Journey in the app. Free to download, 30-day Pro trial.</p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "8px" }}>
              <a href="https://apps.apple.com/us/app/nextupreef/id6760728959" target="_blank" rel="noopener noreferrer" className="btn primary large">App Store</a>
              <a href="https://play.google.com/store/apps/details?id=com.nextupreef.app" target="_blank" rel="noopener noreferrer" className="btn secondary large">Google Play</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
