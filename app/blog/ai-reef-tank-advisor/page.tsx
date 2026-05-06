import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Reef Tank Advisor: How NextUpReef Uses AI to Help You Keep a Better Reef",
  description:
    "How NextUpReef uses AI to analyze your reef tank parameters, equipment, and livestock — giving you personalized advice, answering reef questions, and even reading your test kits from a photo.",
  alternates: {
    canonical: "https://nextupreef.com/blog/ai-reef-tank-advisor",
  },
  openGraph: {
    title: "AI Reef Tank Advisor: How NextUpReef Uses AI to Help You Keep a Better Reef",
    description:
      "NextUpReef uses AI to analyze your specific tank and give personalized reef advice — not generic tips. Here's how it works and what it can do for your reef.",
    url: "https://nextupreef.com/blog/ai-reef-tank-advisor",
    images: [{ url: "/brand/splash2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Reef Tank Advisor: How NextUpReef Uses AI to Help You Keep a Better Reef",
  description:
    "How NextUpReef uses AI to analyze your reef tank parameters, equipment, and livestock — giving you personalized advice, answering reef questions, and reading test kits from photos.",
  image: "https://nextupreef.com/brand/splash2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-05-06",
  dateModified: "2026-05-06",
  mainEntityOfPage: "https://nextupreef.com/blog/ai-reef-tank-advisor",
  keywords: [
    "AI reef tank advisor",
    "reef tank AI",
    "AI aquarium advice",
    "reef tank parameter tracking AI",
    "AI photo parameter logging",
    "reef tank app with AI",
    "NextUpReef AI",
    "saltwater tank AI advisor",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help me keep a reef tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NextUpReef uses AI to analyze your specific tank data — parameters, equipment, livestock, and dosing — and give you personalized recommendations. It can tell you what's causing a parameter drift, suggest next steps, and answer reef questions based on your actual setup.",
      },
    },
    {
      "@type": "Question",
      name: "What does the Reef AI Advisor do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Reef AI Advisor generates a full analysis of your tank once every 24 hours. It reviews your recent parameter trends, equipment setup, livestock, dosing products, and water change history, then produces a prioritized list of findings — what's going well, what needs attention, and specific actions to take.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use AI to log reef tank parameters from a photo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NextUpReef's AI Photo Logging lets you take a photo of any test kit — Hanna checkers, API liquid tests, Red Sea, Salifert, Milwaukee — and AI reads the values and fills in your parameter log automatically. You review before saving.",
      },
    },
    {
      "@type": "Question",
      name: "Is the AI reef advisor free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reef AI features are part of NextUpReef Pro. New accounts get a free 30-day Pro trial with no credit card required. After the trial, Pro is $4.99/month or $39.99/year.",
      },
    },
  ],
};

export default function AIReefAdvisorPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 20px" }}>

        {/* Breadcrumb */}
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "32px" }}>
          <Link href="/" style={{ color: "var(--reef)" }}>Home</Link>
          {" › "}
          <Link href="/blog" style={{ color: "var(--reef)" }}>Blog</Link>
          {" › "}
          AI Reef Tank Advisor
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["AI Features", "Pro", "Parameter Tracking"].map((tag) => (
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

        {/* Headline */}
        <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "900", lineHeight: 1.15, marginBottom: "20px", letterSpacing: "-0.02em" }}>
          AI Reef Tank Advisor: How NextUpReef Uses AI to Help You Keep a Better Reef
        </h1>

        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "40px" }}>
          May 6, 2026 · 7 min read
        </p>

        {/* Intro */}
        <p style={{ fontSize: "18px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "28px", fontWeight: "500" }}>
          Reef keeping has always required you to piece together advice from forums, YouTube, and other reefers — and then figure out how it applies to your specific tank. Your setup, your parameters, your equipment, your corals. Generic advice only gets you so far.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "40px" }}>
          That's the problem NextUpReef's AI features are built to solve. Instead of giving you generic reef tips, the AI knows your tank — and gives you advice that's specific to it.
        </p>

        {/* Section: Reef AI Advisor */}
        <h2 style={{ fontSize: "26px", fontWeight: "900", marginBottom: "16px", color: "var(--text-light)" }}>
          Reef AI Advisor: A Full Tank Analysis, Once a Day
        </h2>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          The Reef AI Advisor is the flagship AI feature in NextUpReef Pro. Once every 24 hours, you can run a full AI analysis of your tank. The AI reads your:
        </p>
        <ul style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.8, marginLeft: "24px", marginBottom: "24px", fontWeight: "600" }}>
          <li>Recent parameter readings and trends (not just the latest value, but where things are heading)</li>
          <li>Equipment setup — lights, skimmer, return pump, dosing system</li>
          <li>Livestock — fish, corals, and invertebrates</li>
          <li>Dosing products and methods</li>
          <li>Water change frequency and history</li>
          <li>Tank type, size, and age</li>
        </ul>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          From that, it produces a prioritized analysis: what's going well, what needs attention, and specific actions to consider. Not just "your alkalinity is a bit low." More like: "Your alkalinity has dropped from 8.4 to 7.9 over the last 10 days while your calcium has stayed stable, which suggests your dosing ratio may need adjusting. If you're running a two-part system, consider increasing Part A by 10–15%."
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "40px" }}>
          That kind of context-aware advice used to require either years of experience or an expensive consultation. Now it's in your pocket.
        </p>

        {/* Section: Ask Reef AI */}
        <h2 style={{ fontSize: "26px", fontWeight: "900", marginBottom: "16px", color: "var(--text-light)" }}>
          Ask Reef AI: Chat With an Advisor That Knows Your Tank
        </h2>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          Beyond the scheduled analysis, you can ask Reef AI anything at any time. The chat interface works like talking to an experienced reefer who has seen your logs — because it has.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          Common things reefers ask:
        </p>
        <ul style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.8, marginLeft: "24px", marginBottom: "24px", fontWeight: "600" }}>
          <li><em style={{ color: "var(--text-light)" }}>"Why is my alkalinity dropping faster than usual?"</em></li>
          <li><em style={{ color: "var(--text-light)" }}>"My nitrate is at 15 — is that too high for SPS?"</em></li>
          <li><em style={{ color: "var(--text-light)" }}>"What corals would work well in my setup?"</em></li>
          <li><em style={{ color: "var(--text-light)" }}>"I'm seeing brown patches on one of my acros — what could it be?"</em></li>
          <li><em style={{ color: "var(--text-light)" }}>"Should I add a refugium given my current nutrient levels?"</em></li>
          <li><em style={{ color: "var(--text-light)" }}>"My Reef Score dropped 8 points — what changed?"</em></li>
        </ul>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "40px" }}>
          The AI has context about your specific tank when answering — your tank type, size, parameters, equipment, and livestock. So when you ask whether your nitrate is too high for SPS, it can factor in that you have an SPS-dominant tank, what your phosphate is doing, and whether your current levels are trending up or stabilizing.
        </p>

        {/* Callout box */}
        <div style={{
          background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.2)",
          borderRadius: "16px", padding: "24px 28px", marginBottom: "40px",
        }}>
          <p style={{ color: "var(--reef)", fontWeight: "900", fontSize: "13px", letterSpacing: "0.05em", margin: "0 0 8px 0" }}>
            HOW IT WORKS
          </p>
          <p style={{ color: "var(--text-light)", fontSize: "16px", fontWeight: "700", lineHeight: 1.65, margin: 0 }}>
            NextUpReef uses Anthropic's Claude — one of the leading AI models — to power its reef advisor. Your tank data is sent to the AI when you request an analysis or ask a question. The AI uses that context to generate responses specific to your setup. Your data is never used to train AI models.
          </p>
        </div>

        {/* Section: AI Photo Logging */}
        <h2 style={{ fontSize: "26px", fontWeight: "900", marginBottom: "16px", color: "var(--text-light)" }}>
          AI Photo Parameter Logging: Point, Shoot, Done
        </h2>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          One of the most tedious parts of reef keeping is manually entering test results. You run your Hanna checker, write down the number, open the app, find the alkalinity field, type it in. Multiply that by 6–8 parameters and it gets old fast.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          AI Photo Logging solves this. Tap the AI Scan button on the Log tab, take a photo of your test kit or result display, and the AI reads the values and fills in your parameter log automatically. You review before saving — so you're always in control.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          It works with:
        </p>
        <ul style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.8, marginLeft: "24px", marginBottom: "24px", fontWeight: "600" }}>
          <li>Digital instruments — Hanna HI checkers, Milwaukee meters</li>
          <li>Liquid test kits — API, Red Sea, Salifert, Nyos</li>
          <li>Controller screens — Neptune Apex, GHL</li>
          <li>Written test logs or notes</li>
        </ul>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "40px" }}>
          It's not perfect — lighting, angle, and test kit readability all affect accuracy, which is why you always review before saving. But in practice, it gets the values right the vast majority of the time and saves several minutes per testing session.
        </p>

        {/* Section: Why this matters */}
        <h2 style={{ fontSize: "26px", fontWeight: "900", marginBottom: "16px", color: "var(--text-light)" }}>
          Why AI Reef Advice Is Different From Forum Advice
        </h2>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          Anyone who's spent time on Reef2Reef knows the drill: post your parameters, wait for someone to respond, get three different answers, argue about which is right.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          Forum advice is valuable — real experience from real reefers is hard to beat. But it has limitations. The people responding don't have your full tank history. They don't know your equipment, your dosing regimen, or what your parameters looked like last month. They're pattern-matching from their own experience.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          NextUpReef's AI has your full history. It knows your Reef Score trend, your alk consumption rate, your last 50 logs. It's not guessing — it's analyzing your actual data and applying best practices for your specific tank type.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "40px" }}>
          That doesn't make it infallible. AI can be wrong, especially with unusual setups or edge cases. We always recommend treating AI advice as a starting point for investigation, not a final answer. But for the 90% of common reef keeping questions, it's faster and more relevant than waiting for a forum response.
        </p>

        {/* Section: Neptune Apex */}
        <h2 style={{ fontSize: "26px", fontWeight: "900", marginBottom: "16px", color: "var(--text-light)" }}>
          Neptune Apex Integration: Log Directly From Your Controller
        </h2>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          For reefers running a Neptune Apex controller, NextUpReef Pro connects directly to your Apex on your local network and pulls readings with one tap — temperature, pH, salinity, ORP, and Trident values (alkalinity, calcium, magnesium).
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          These values log directly into NextUpReef, feeding your Reef Score and giving the AI Advisor better data to work with. If your Apex is already monitoring your tank 24/7, your data should flow into your tracking app automatically — not require manual re-entry.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "40px" }}>
          Combined with AI analysis, this creates a feedback loop: Apex monitors continuously, you log with one tap, and the AI tells you what the data means.
        </p>

        {/* Section: Getting started */}
        <h2 style={{ fontSize: "26px", fontWeight: "900", marginBottom: "16px", color: "var(--text-light)" }}>
          How to Get Started With AI Reef Features
        </h2>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          All AI features are part of NextUpReef Pro. Every new account gets a <strong style={{ color: "var(--text-light)" }}>free 30-day Pro trial</strong> — no credit card required. After the trial, Pro is $4.99/month or $39.99/year.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "16px" }}>
          To use the AI features:
        </p>
        <ol style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.8, marginLeft: "24px", marginBottom: "28px", fontWeight: "600" }}>
          <li>Download NextUpReef on iOS or Android</li>
          <li>Set up your tank with accurate details — type, size, equipment, livestock</li>
          <li>Log at least a few parameter sessions so the AI has data to work with</li>
          <li>Open the Analytics tab and tap Reef AI → Analyze</li>
          <li>Ask questions in the chat — the more context the AI has, the better its answers</li>
        </ol>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "40px" }}>
          The AI gets more useful over time as your log history grows. A tank with 3 months of consistent logging gives the AI much more to work with than one with two data points.
        </p>

        {/* FAQ section */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "40px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: "900", marginBottom: "28px", color: "var(--text-light)" }}>
            Frequently Asked Questions
          </h2>

          {[
            {
              q: "Is the AI advice specific to my tank or just generic reef tips?",
              a: "It's specific to your tank. The AI has access to your parameter history, tank type, equipment, livestock, dosing, and water change data. When you ask a question or run an analysis, it uses that context to give you relevant advice — not copy-pasted reef keeping basics.",
            },
            {
              q: "How accurate is AI Photo Parameter Logging?",
              a: "In good lighting with a clear test kit display, accuracy is high — most values come through correctly. The AI will occasionally misread a digit on a poorly lit photo or a faded test card. That's why you always review before saving. Think of it as a time-saver that gets it right most of the time, not an infallible scanner.",
            },
            {
              q: "Does NextUpReef use my tank data to train AI models?",
              a: "No. Your tank data is sent to the AI API to generate responses, but it is not used to train models. Your data is yours.",
            },
            {
              q: "What AI model does NextUpReef use?",
              a: "NextUpReef uses Anthropic's Claude API to power its reef advisor and chat features.",
            },
            {
              q: "Can AI replace a professional reef consultation?",
              a: "For common reef keeping questions — parameter drift, nutrient management, coral selection, equipment decisions — AI advice is fast, contextual, and generally solid. For serious issues like livestock disease, unexplained crashes, or complex chemistry problems, AI is a good starting point but experienced human advice (from a local reef store or a specialist) is still valuable.",
            },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: "28px" }}>
              <h3 style={{ fontSize: "17px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px", lineHeight: 1.4 }}>
                {item.q}
              </h3>
              <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.75, margin: 0, fontWeight: "600" }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.2)",
          borderRadius: "20px", padding: "36px", textAlign: "center",
        }}>
          <h3 style={{ fontSize: "22px", fontWeight: "900", marginBottom: "12px", color: "var(--text-light)" }}>
            Try AI Reef Advisor free for 30 days
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.65, marginBottom: "24px", fontWeight: "600" }}>
            Every new NextUpReef account gets a free 30-day Pro trial. No credit card required. Includes Reef AI Advisor, Ask Reef AI Chat, AI Photo Logging, and all Pro features.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://apps.apple.com/us/app/nextupreef/id6760728959"
              target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: "var(--reef)", color: "var(--bg-dark)", fontWeight: "900", fontSize: "15px", padding: "12px 28px", borderRadius: "10px", textDecoration: "none" }}
            >
              Download on iOS →
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.nextupreef.app"
              target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: "rgba(255,255,255,0.08)", color: "var(--text-light)", fontWeight: "900", fontSize: "15px", padding: "12px 28px", borderRadius: "10px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)" }}
            >
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
