import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Reef: Track Livestock, Equipment, Corals, and Cost in One Reef Tank App",
  description:
    "How NextUpReef's My Reef page tracks every fish, coral, invert, piece of equipment, dosing product, monthly photo, and dollar spent — plus an AI Stocking Advisor that checks compatibility for your tank.",
  alternates: { canonical: "https://nextupreef.com/blog/my-reef-tank-tracking" },
  openGraph: {
    title: "My Reef: Track Livestock, Equipment, Corals, and Cost in One Reef Tank App",
    description:
      "Track every fish, coral, invert, piece of gear, dosing product, monthly photo, and dollar spent — with an AI Stocking Advisor built in.",
    url: "https://nextupreef.com/blog/my-reef-tank-tracking",
    images: [{ url: "/brand/splash2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "My Reef: Track Livestock, Equipment, Corals, and Cost in One Reef Tank App",
  description:
    "How NextUpReef's My Reef page tracks every fish, coral, invert, piece of equipment, dosing product, monthly photo, and dollar spent, with an AI Stocking Advisor built in.",
  image: "https://nextupreef.com/brand/splash2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-06-12",
  dateModified: "2026-06-12",
  mainEntityOfPage: "https://nextupreef.com/blog/my-reef-tank-tracking",
  keywords: [
    "reef tank livestock tracker",
    "reef tank equipment tracker",
    "reef tank app",
    "track coral collection",
    "reef tank cost tracker",
    "saltwater aquarium livestock log",
    "reef tank inventory app",
    "AI reef stocking advisor",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I track my fish, corals, and inverts in one app?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. My Reef in NextUpReef keeps every fish, coral, and invertebrate in a single livestock list per tank, each linked to catalog care data — adult size, temperament, reef-safety, placement, and flow needs. You can record health status, the date you added each animal, and what you paid for it." },
    },
    {
      "@type": "Question",
      name: "Does NextUpReef track reef tank equipment?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. You can log your full equipment list — skimmer, return and powerheads, reactors, ATO, heater, lighting, and dosing gear — with brand, model, settings like flow rate, and cost. Your whole hardware setup lives in one place per tank." },
    },
    {
      "@type": "Question",
      name: "Can I track how much my reef tank has cost me?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. When you enter what you paid for livestock, equipment, and lighting, My Reef totals your investment and breaks it down by category, so you can see what your reef actually costs at a glance." },
    },
    {
      "@type": "Question",
      name: "Does the app track coral growth over time?",
      acceptedAnswer: { "@type": "Answer", text: "My Reef includes a monthly photo timeline — one photo per month per tank — so you can scroll back and watch your reef grow. You can also keep individual livestock entries with acquisition dates and lineage if you frag or split a colony." },
    },
    {
      "@type": "Question",
      name: "Is livestock and equipment tracking free?",
      acceptedAnswer: { "@type": "Answer", text: "Core tracking is available to every NextUpReef user. The AI Stocking Advisor, the tank journal with photos, and other advanced Pro features are part of NextUpReef Pro, which every new account can try free for 30 days with no credit card required." },
    },
  ],
};

export default function MyReefTrackingPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 20px" }}>

        {/* Breadcrumb */}
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "32px" }}>
          <Link href="/" style={{ color: "var(--reef)" }}>Home</Link>
          {" › "}
          <Link href="/blog" style={{ color: "var(--reef)" }}>Blog</Link>
          {" › "}
          My Reef Tracking
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Livestock", "Equipment", "Cost Tracking"].map((tag) => (
            <span key={tag} style={{ fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px", background: "rgba(44, 196, 214, 0.08)", border: "1px solid rgba(44, 196, 214, 0.12)", color: "var(--reef)" }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Headline */}
        <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "900", lineHeight: 1.15, marginBottom: "20px", letterSpacing: "-0.02em" }}>
          My Reef: Track Every Fish, Coral, Piece of Gear, and Dollar in One Place
        </h1>

        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "40px" }}>
          June 12, 2026 · 7 min read
        </p>

        {/* Hero image */}
        <div style={{ maxWidth: "300px", margin: "0 auto 40px" }}>
          <Image src="/screenshots/phone-my-reef-v2.png" alt="NextUpReef My Reef page showing livestock, equipment, dosing, and total tank investment" width={574} height={1242} style={{ width: "100%", height: "auto", display: "block" }} />
        </div>

        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          Reef keepers obsess over water chemistry — and rightly so. But a reef is more than eight numbers. It is a living collection of animals, a rack of equipment that keeps them alive, a dosing routine you have dialed in over months, and a surprising amount of money. Most reef apps treat all of that as an afterthought: a flat list you fill in once and never look at again.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          My Reef is NextUpReef’s answer to that. It is the home base for everything in your tank that is not a test result — and it is built to stay useful, because it feeds your scores, your reminders, and the AI that actually knows your reef.
        </p>

        <h2 style={{ fontSize: "26px", fontWeight: "900", marginBottom: "16px", color: "var(--text-light)" }}>
          Livestock: every fish, coral, and invert, with real care data
        </h2>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          Add a fish, coral, or invert and My Reef links it to catalog care data automatically — adult size, temperament, aggression, reef-safety, minimum tank size, placement, and flow needs. You are not just writing down a name; you are building a record the app can reason about.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          For each animal you can track health status, the date you added it, and what you paid. Frag or split a colony and the lineage is preserved, so a single mother colony and its frags stay connected. Over time this becomes the most accurate inventory of your tank you will ever have — far better than a mental list or a note buried in your phone.
        </p>
        <ul style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.8, marginLeft: "24px", marginBottom: "24px", fontWeight: "600" }}>
          <li>Fish — with temperament and adult-size data so you know what will outgrow or bully the tank</li>
          <li>Corals — SPS, LPS, softies, and anemones, each with placement and flow guidance</li>
          <li>Inverts — cleanup crew, shrimp, snails, crabs, and more</li>
          <li>Health status, acquisition date, and cost per animal</li>
          <li>Frag and lineage tracking when you split a colony</li>
        </ul>
        <h2 style={{ fontSize: "26px", fontWeight: "900", marginBottom: "16px", color: "var(--text-light)" }}>
          Equipment and dosing: your whole setup, documented
        </h2>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          My Reef holds your full hardware list — skimmer, return pump, powerheads, reactors, ATO, heater, and lighting — with brand, model, and the settings that matter, like flow rate. Your dosing products live here too, with the parameter they target, the daily amount, and the method (automated doser, manual, or reactor) so nothing gets confused.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          This is not busywork. A documented setup is what lets the rest of the app give you good advice: the AI can reason about your flow and filtration, your reminders know what gear needs servicing, and you have an instant reference when something breaks at 11pm and you need the exact model number.
        </p>
        <h2 style={{ fontSize: "26px", fontWeight: "900", marginBottom: "16px", color: "var(--text-light)" }}>
          Monthly photo timeline: watch your reef grow
        </h2>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          One photo per month per tank builds a growth timeline you can scroll back through. It is the single most satisfying feature in the app — watching a bare aquascape fill in over a year, or a single frag become a colony. It is also genuinely useful: a side-by-side of this month versus six months ago tells you more about coral health than any single parameter.
        </p>
        <h2 style={{ fontSize: "26px", fontWeight: "900", marginBottom: "16px", color: "var(--text-light)" }}>
          Investment tracking: what your reef actually costs
        </h2>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          Reef keeping is expensive, and most of us would rather not know the total. My Reef tells you anyway — and it helps. Enter what you paid for livestock, equipment, and lighting, and the app totals your investment and breaks it down by category. You see at a glance where the money went, which is useful for insurance, for selling a system, or just for being honest with yourself.
        </p>
        <h2 style={{ fontSize: "26px", fontWeight: "900", marginBottom: "16px", color: "var(--text-light)" }}>
          The AI Stocking Advisor: built into your livestock list
        </h2>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          Here is where My Reef pulls ahead of every other reef tracker. Your livestock list is not just storage — it feeds the AI Stocking Advisor. The Advisor reads everything in your tank against its care data and your tank size, then tells you whether your stock actually makes sense together.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          It flags real conflicts — an aggressive fish that will harass tankmates, a predator that will eat your cleanup crew, a coral that needs more flow than you run — and warns you about bioload before it becomes a problem. When you are deciding what to add next, it suggests species that fit your tank and fill an actual gap. Other apps can hold a livestock list. NextUpReef tells you whether the list works.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          Everything in My Reef also flows into your Reef Score and the rest of the app, so the time you spend documenting your tank pays off everywhere — better advice, smarter reminders, and a record you will be glad you kept.
        </p>

        {/* FAQ */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "40px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: "900", marginBottom: "28px", color: "var(--text-light)" }}>
            Frequently Asked Questions
          </h2>
          <div key={0} style={{ marginBottom: "28px" }}>
            <h3 style={{ fontSize: "17px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px", lineHeight: 1.4 }}>
              Can I track my fish, corals, and inverts in one app?
            </h3>
            <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.75, margin: 0, fontWeight: "600" }}>
              Yes. My Reef in NextUpReef keeps every fish, coral, and invertebrate in a single livestock list per tank, each linked to catalog care data — adult size, temperament, reef-safety, placement, and flow needs. You can record health status, the date you added each animal, and what you paid for it.
            </p>
          </div>
          <div key={1} style={{ marginBottom: "28px" }}>
            <h3 style={{ fontSize: "17px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px", lineHeight: 1.4 }}>
              Does NextUpReef track reef tank equipment?
            </h3>
            <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.75, margin: 0, fontWeight: "600" }}>
              Yes. You can log your full equipment list — skimmer, return and powerheads, reactors, ATO, heater, lighting, and dosing gear — with brand, model, settings like flow rate, and cost. Your whole hardware setup lives in one place per tank.
            </p>
          </div>
          <div key={2} style={{ marginBottom: "28px" }}>
            <h3 style={{ fontSize: "17px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px", lineHeight: 1.4 }}>
              Can I track how much my reef tank has cost me?
            </h3>
            <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.75, margin: 0, fontWeight: "600" }}>
              Yes. When you enter what you paid for livestock, equipment, and lighting, My Reef totals your investment and breaks it down by category, so you can see what your reef actually costs at a glance.
            </p>
          </div>
          <div key={3} style={{ marginBottom: "28px" }}>
            <h3 style={{ fontSize: "17px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px", lineHeight: 1.4 }}>
              Does the app track coral growth over time?
            </h3>
            <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.75, margin: 0, fontWeight: "600" }}>
              My Reef includes a monthly photo timeline — one photo per month per tank — so you can scroll back and watch your reef grow. You can also keep individual livestock entries with acquisition dates and lineage if you frag or split a colony.
            </p>
          </div>
          <div key={4} style={{ marginBottom: "28px" }}>
            <h3 style={{ fontSize: "17px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px", lineHeight: 1.4 }}>
              Is livestock and equipment tracking free?
            </h3>
            <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.75, margin: 0, fontWeight: "600" }}>
              Core tracking is available to every NextUpReef user. The AI Stocking Advisor, the tank journal with photos, and other advanced Pro features are part of NextUpReef Pro, which every new account can try free for 30 days with no credit card required.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.2)", borderRadius: "20px", padding: "36px", textAlign: "center" }}>
          <h3 style={{ fontSize: "22px", fontWeight: "900", marginBottom: "12px", color: "var(--text-light)" }}>
            Start tracking your whole reef free
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.65, marginBottom: "24px", fontWeight: "600" }}>
            NextUpReef is free to download on iOS and Android. Every new account gets a free 30-day Pro trial — including the AI Stocking Advisor — with no credit card required.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://apps.apple.com/us/app/nextupreef/id6760728959" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "var(--reef)", color: "var(--bg-dark)", fontWeight: "900", fontSize: "15px", padding: "12px 28px", borderRadius: "10px", textDecoration: "none" }}>
              Download on iOS →
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.nextupreef.app" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "rgba(255,255,255,0.08)", color: "var(--text-light)", fontWeight: "900", fontSize: "15px", padding: "12px 28px", borderRadius: "10px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)" }}>
              Download on Android →
            </a>
          </div>
        </div>

        {/* Back to blog */}
        <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <Link href="/blog" style={{ color: "var(--reef)", fontWeight: "700", fontSize: "15px", textDecoration: "none" }}>
            ← Back to Blog
          </Link>
        </div>

      </article>
    </>
  );
}
