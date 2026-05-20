import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NextUpReef Hub vs Neptune Apex: A Modern Reef Controller Compared (2026)",
  description:
    "Honest comparison of the NextUpReef Hub and Neptune A3 Apex in 2026 — pricing, included probes, equipment control, app features, and total cost. See which reef controller fits your tank.",
  alternates: { canonical: "https://nextupreef.com/blog/nextupreef-hub-vs-neptune-apex" },
  openGraph: {
    title: "NextUpReef Hub vs Neptune Apex: A Modern Reef Controller Compared (2026)",
    description:
      "Honest comparison of the NextUpReef Hub and Neptune A3 Apex in 2026 — pricing, included probes, equipment control, app features, and total cost. See which reef controller fits your tank.",
    url: "https://nextupreef.com/blog/nextupreef-hub-vs-neptune-apex",
    images: [{ url: "/brand/splash2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "NextUpReef Hub vs Neptune Apex: A Modern Reef Controller Compared (2026)",
  description:
    "Honest comparison of the NextUpReef Hub and Neptune A3 Apex in 2026 — pricing, included probes, equipment control, app features, and total cost. See which reef controller fits your tank.",
  image: "https://nextupreef.com/brand/splash2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-05-20",
  dateModified: "2026-05-20",
  mainEntityOfPage: "https://nextupreef.com/blog/nextupreef-hub-vs-neptune-apex",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
  {
    "@type": "Question",
    "name": "Is the NextUpReef Hub a Neptune Apex replacement?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "It can be, depending on your setup. The Hub Complete monitors temperature and pH and controls equipment through smart plugs \u2014 the same core jobs as a control-capable Apex system. If you depend on Apex-specific accessories like the Trident or DOS dosing pumps, you may prefer to keep your Apex and let NextUpReef sync from it instead."
    }
  },
  {
    "@type": "Question",
    "name": "How does Hub Complete pricing compare to a Neptune Apex?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The NextUpReef Hub Complete is $379 and includes the Hub, a lab-grade pH probe, a temperature monitor, and two smart plugs for equipment control. The closest control-capable Neptune system, the A3 Apex, is listed at $669.99. Neptune's lower-cost A3 Apex Jr is $319.99 but is monitor-only \u2014 it cannot switch equipment on or off."
    }
  },
  {
    "@type": "Question",
    "name": "Do I need Apex Fusion or a separate account with the Hub?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No separate Apex Fusion account is required. Monitoring, alerts, and smart-plug control all work through the NextUpReef app you already use. NextUpReef Pro ($4.99/month, or discounted yearly) unlocks the AI Reef Advisor and advanced analytics; basic monitoring works on the free tier."
    }
  },
  {
    "@type": "Question",
    "name": "Will the Hub work alongside an existing Neptune Apex?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. NextUpReef supports Apex sync \u2014 your probe and Trident readings feed into the app. The standalone $179 Hub is built for exactly this: keep your Apex and get the NextUpReef app experience, including the AI Reef Advisor, on top of it."
    }
  },
  {
    "@type": "Question",
    "name": "What about Apex Trident, DOS, and other Neptune accessories?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Trident automatically tests alkalinity, calcium, and magnesium \u2014 there is no Hub equivalent in the initial release. DOS is Neptune's dedicated dosing pump. The Hub takes a different approach: pair it with off-the-shelf smart plugs and a third-party dosing pump to automate dosing at lower cost."
    }
  },
  {
    "@type": "Question",
    "name": "When can I buy the NextUpReef Hub?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We're finalizing hardware and the pre-order waitlist is open now. Join at nextupreef.com/hub to be notified the moment pre-orders open. Early waitlist signups get first pick, and a few will receive devices at cost in exchange for setup feedback."
    }
  }
],
};

export default function HubVsApexPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 20px" }}>
        {/* Breadcrumb */}
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: 700, marginBottom: "32px" }}>
          <Link href="/" style={{ color: "var(--reef)" }}>Home</Link>{" › "}
          <Link href="/blog" style={{ color: "var(--reef)" }}>Blog</Link>{" › "}
          NextUpReef Hub vs Neptune Apex
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Reef Controllers", "Hardware Comparison", "NextUpReef Hub", "Neptune Apex"].map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "12px", fontWeight: 700, padding: "4px 12px",
                borderRadius: "999px", background: "rgba(44,196,214,0.08)",
                border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
              }}
            >{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: 900, lineHeight: 1.2, marginBottom: "16px" }}>
          NextUpReef Hub vs Neptune Apex: A Modern Reef Controller Compared (2026)
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: 700, marginBottom: "48px" }}>
          Updated May 20, 2026 · 8 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: 1.8 }}>
          <p>
            For most of the past decade, if you wanted to monitor and automate a reef tank, the answer was almost always the same: buy a Neptune Apex. The platform has earned its reputation — it works, it&apos;s reliable, and Neptune has built a mature ecosystem around it. But a newer generation of reefers is asking a fair question: is there a simpler, more affordable way to get solid monitoring and equipment control, with a modern app to match?
          </p>
          <p>
            We built the <strong style={{ color: "var(--text-light)" }}>NextUpReef Hub</strong> for those reefers. It&apos;s a small, modern reef controller designed around three ideas: a fair bundled price, inexpensive smart plugs for equipment control, and one app — the NextUpReef app you already use — end to end. This post is an honest side-by-side so you can decide which fits your tank.
          </p>

          <div
            style={{
              background: "var(--bg-card)", border: "1px solid var(--border)",
              borderRadius: "14px", padding: "18px 22px", margin: "32px 0",
            }}
          >
            <div style={{ fontSize: "12px", fontWeight: 900, color: "var(--reef)", letterSpacing: "0.8px", marginBottom: "8px" }}>
              QUICK VERDICT
            </div>
            <p style={{ color: "var(--text-light)", margin: 0, fontSize: "15px", lineHeight: 1.7 }}>
              If you want the most mature ecosystem available — with accessories like the Trident and DOS — and you don&apos;t mind the price, the <strong>Neptune Apex</strong> is a proven choice. If you want monitoring plus equipment control at a lower price, in one modern app with an AI Reef Advisor, the <strong>NextUpReef Hub</strong> is well worth a look — especially for newer reefers and anyone who finds the Apex ecosystem heavier than they need.
            </p>
          </div>

          <h2 style={{ color: "var(--text-light)", fontSize: "28px", marginTop: "48px", marginBottom: "16px" }}>
            Comparing like for like
          </h2>
          <p>
            A fair comparison starts with matching capabilities. Neptune currently offers two A3-generation systems aimed at hobbyists. The <strong style={{ color: "var(--text-light)" }}>A3 Apex Jr</strong> (listed at $319.99) includes pH, temperature, leak and water-level sensing — but it is a <em>monitor</em>: it does not switch equipment on or off. The <strong style={{ color: "var(--text-light)" }}>A3 Apex</strong> (listed at $669.99) adds the EnergyBar for outlet control and is the system most reefers picture when they think “Apex.”
          </p>
          <p>
            Because the NextUpReef Hub Complete both monitors <em>and</em> controls equipment, the honest comparison is against the control-capable A3 Apex. Here is how the two line up:
          </p>

          <div
            style={{
              background: "var(--bg-card)", border: "1px solid var(--border)",
              borderRadius: "14px", padding: "4px 16px", margin: "20px 0 12px",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "12px", padding: "14px 0", borderBottom: "1px solid var(--border)" }}>
              <div style={{ fontSize: "12px", fontWeight: 900, color: "var(--text-muted)", letterSpacing: "0.5px" }}>ITEM</div>
              <div style={{ fontSize: "12px", fontWeight: 900, color: "var(--reef)", textAlign: "center", letterSpacing: "0.5px" }}>HUB COMPLETE</div>
              <div style={{ fontSize: "12px", fontWeight: 900, color: "var(--text-muted)", textAlign: "center", letterSpacing: "0.5px" }}>A3 APEX</div>
            </div>
            {[
              ["System price", "$379", "$669.99"],
              ["pH + temperature probes", "Included", "Included"],
              ["Equipment control", "2 smart plugs included", "EnergyBar included"],
              ["Leak detection", "Add-on", "Included"],
              ["Extra smart plugs", "~$15 each", "—"],
              ["Remote access", "Included", "Apex Fusion"],
              ["AI Reef Advisor", "Yes", "Not available"],
              ["App updates", "Included", "Included"],
            ].map(([label, hub, apex], i, arr) => (
              <div
                key={label}
                style={{
                  display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "12px",
                  padding: "14px 0", borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-muted)" }}>{label}</div>
                <div style={{ fontSize: "14px", fontWeight: 900, color: "var(--reef)", textAlign: "center" }}>{hub}</div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-muted)", textAlign: "center" }}>{apex}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "12px", fontStyle: "italic", color: "var(--text-muted)", lineHeight: 1.6 }}>
            Comparison based on pricing and specifications publicly listed by retailers as of May 2026; details may change — verify current information with the manufacturer. Neptune Systems® and Apex® are trademarks of Neptune Systems. NextUpReef is independent and is not affiliated with, endorsed by, or sponsored by Neptune Systems.
          </p>

          <h2 style={{ color: "var(--text-light)", fontSize: "28px", marginTop: "48px", marginBottom: "16px" }}>
            One app, not two
          </h2>
          <p>
            Neptune ships its experience across Apex Fusion and the newer Apex ReefBeat app. Both are functional. The NextUpReef Hub takes a different approach: it connects to the <Link href="/" style={{ color: "var(--reef)", fontWeight: 700 }}>NextUpReef app</Link> directly, so there&apos;s a single app for monitoring, alerts, control, and history — no separate cloud account to manage on the side.
          </p>
          <p>
            The NextUpReef app was built mobile-first: a clean reef score and stability score on the home screen, a community leaderboard, a tank journal with photos, monthly tank photo timelines, and AI-powered reef advice based on your actual data. The Hub plugs into all of it automatically. NextUpReef Pro ($4.99/month, or discounted yearly) unlocks the AI features and advanced analytics; basic monitoring works on the free tier.
          </p>

          <h2 style={{ color: "var(--text-light)", fontSize: "28px", marginTop: "48px", marginBottom: "16px" }}>
            AI Reef Advisor — a feature the Apex app doesn&apos;t offer
          </h2>
          <p>
            This is where the Hub pulls ahead in a way that has nothing to do with hardware specs. NextUpReef&apos;s <Link href="/blog/ai-reef-tank-advisor" style={{ color: "var(--reef)", fontWeight: 700 }}>AI Reef Advisor</Link> reviews your tank&apos;s parameter trends, equipment, livestock, dosing, and water change history and produces a prioritized set of findings — for example, flagging that your alkalinity has drifted up over several weeks, or that a drop in your stability score traces back to salinity swings.
          </p>
          <p>
            With the Hub feeding live probe data into the app, that advice is based on real-time readings rather than only the values you log by hand. To our knowledge, Neptune&apos;s apps do not offer a comparable AI advisor.
          </p>

          <h2 style={{ color: "var(--text-light)", fontSize: "28px", marginTop: "48px", marginBottom: "16px" }}>
            Who should buy each?
          </h2>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Consider a Neptune Apex if</strong> you already own Apex accessories (Trident, DOS, COR pumps, EnergyBars), you run a high-end build that benefits from the full module catalog, or you want the most mature ecosystem available and don&apos;t mind the price.
          </p>
          <p>
            <strong style={{ color: "var(--text-light)" }}>Consider the NextUpReef Hub if</strong> you want monitoring plus equipment control at a lower price, you&apos;d rather use one modern app than two, you&apos;d use the AI Reef Advisor, or you&apos;re setting up a new tank and want a clean, app-first experience.
          </p>
          <p>
            And if you already own an Apex, it isn&apos;t either/or. The standalone $179 NextUpReef Hub connects to your existing Apex and brings your readings into the NextUpReef app — so you can keep your controller and still get the AI Reef Advisor, reef scores, and community features.
          </p>

          {/* CTA CARD */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(44,196,214,0.08) 0%, rgba(142,233,242,0.04) 100%)",
              border: "1px solid rgba(44,196,214,0.25)",
              borderRadius: "16px",
              padding: "24px 28px", margin: "40px 0", textAlign: "center",
            }}
          >
            <div style={{ fontSize: "20px", fontWeight: 900, color: "var(--text-light)", marginBottom: "6px" }}>
              Want the Hub when it ships?
            </div>
            <p style={{ color: "var(--text-muted)", marginBottom: "18px", fontSize: "15px", lineHeight: 1.55 }}>
              The pre-order waitlist gets first pick — and a few early reefers will get devices at cost in exchange for setup feedback.
            </p>
            <Link
              href="/hub"
              className="btn primary"
              style={{ display: "inline-flex", padding: "14px 28px", fontSize: "15px", fontWeight: 900 }}
            >
              Join the Waitlist →
            </Link>
          </div>

          <h2 style={{ color: "var(--text-light)", fontSize: "28px", marginTop: "48px", marginBottom: "16px" }}>
            Frequently asked questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "24px" }}>
            <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
              <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>Is the NextUpReef Hub a Neptune Apex replacement?</summary>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>It can be, depending on your setup. The Hub Complete monitors temperature and pH and controls equipment through smart plugs — the same core jobs as a control-capable Apex system. If you depend on Apex-specific accessories like the Trident or DOS dosing pumps, you may prefer to keep your Apex and let NextUpReef sync from it instead.</p>
            </details>
            <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
              <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>How does Hub Complete pricing compare to a Neptune Apex?</summary>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>The NextUpReef Hub Complete is $379 and includes the Hub, a lab-grade pH probe, a temperature monitor, and two smart plugs for equipment control. The closest control-capable Neptune system, the A3 Apex, is listed at $669.99. Neptune's lower-cost A3 Apex Jr is $319.99 but is monitor-only — it cannot switch equipment on or off.</p>
            </details>
            <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
              <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>Do I need Apex Fusion or a separate account with the Hub?</summary>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>No separate Apex Fusion account is required. Monitoring, alerts, and smart-plug control all work through the NextUpReef app you already use. NextUpReef Pro ($4.99/month, or discounted yearly) unlocks the AI Reef Advisor and advanced analytics; basic monitoring works on the free tier.</p>
            </details>
            <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
              <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>Will the Hub work alongside an existing Neptune Apex?</summary>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>Yes. NextUpReef supports Apex sync — your probe and Trident readings feed into the app. The standalone $179 Hub is built for exactly this: keep your Apex and get the NextUpReef app experience, including the AI Reef Advisor, on top of it.</p>
            </details>
            <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
              <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>What about Apex Trident, DOS, and other Neptune accessories?</summary>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>The Trident automatically tests alkalinity, calcium, and magnesium — there is no Hub equivalent in the initial release. DOS is Neptune's dedicated dosing pump. The Hub takes a different approach: pair it with off-the-shelf smart plugs and a third-party dosing pump to automate dosing at lower cost.</p>
            </details>
            <details style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 20px" }}>
              <summary style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)", cursor: "pointer" }}>When can I buy the NextUpReef Hub?</summary>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.65, marginTop: "12px", marginBottom: 0 }}>We're finalizing hardware and the pre-order waitlist is open now. Join at nextupreef.com/hub to be notified the moment pre-orders open. Early waitlist signups get first pick, and a few will receive devices at cost in exchange for setup feedback.</p>
            </details>
          </div>

          <h2 style={{ color: "var(--text-light)", fontSize: "28px", marginTop: "48px", marginBottom: "16px" }}>
            Bottom line
          </h2>
          <p>
            The Neptune Apex is well-built and its ecosystem is real — it isn&apos;t going anywhere. But it&apos;s no longer the only sensible answer. The NextUpReef Hub is built for the reefer who wants modern, mobile-first, AI-assisted reefing in a single app. The standalone Hub is $179 and the Hub Complete bundle is $379. <Link href="/hub" style={{ color: "var(--reef)", fontWeight: 700 }}>Drop your email on the waitlist</Link> and we&apos;ll let you know when pre-orders open.
          </p>

          <p style={{ fontStyle: "italic", color: "var(--text-muted)", marginTop: "32px", fontSize: "14px" }}>
            Have a question we didn&apos;t cover? Email{" "}
            <a href="mailto:info@nextupreef.com" style={{ color: "var(--reef)", fontWeight: 700 }}>info@nextupreef.com</a>{" "}
            — we read everything.
          </p>

          <p style={{ fontSize: "12px", fontStyle: "italic", color: "var(--text-muted)", lineHeight: 1.6, marginTop: "24px", borderTop: "1px solid var(--border)", paddingTop: "20px" }}>
            Neptune Systems®, Apex®, Apex Fusion, Trident, and DOS are trademarks of Neptune Systems. NextUpReef is an independent product and is not affiliated with, endorsed by, or sponsored by Neptune Systems. Product names and specifications are referenced for comparison and identification only. Pricing and specifications are based on publicly available retailer listings as of May 2026 and may change — verify current details with the manufacturer before purchase.
          </p>
        </div>
      </article>
    </>
  );
}
