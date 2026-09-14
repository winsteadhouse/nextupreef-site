import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the NextUpReef team for app support, account help, bug reports, feature ideas and partnerships. Email info@nextupreef.com.",
  alternates: { canonical: "https://nextupreef.com/contact" },
  openGraph: {
    title: "Contact NextUpReef",
    description: "App support, account help, bug reports, feature ideas and partnerships.",
    url: "https://nextupreef.com/contact",
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630 }],
  },
};

const EMAIL = "info@nextupreef.com";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact NextUpReef",
  url: "https://nextupreef.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "NextUpReef",
    url: "https://nextupreef.com",
    email: EMAIL,
    contactPoint: { "@type": "ContactPoint", email: EMAIL, contactType: "customer support", availableLanguage: "English" },
    sameAs: ["https://www.facebook.com/profile.php?id=61576553765840", "https://www.instagram.com/nextupreefapp/"],
  },
};

const TOPICS = [
  { title: "App support", body: "Something not working, a sync that won't connect, or a question the FAQ doesn't answer.", subject: "App support" },
  { title: "Account & billing", body: "Pro subscriptions, your free trial, signing in, or deleting your account and data.", subject: "Account and billing" },
  { title: "Bugs & feature ideas", body: "Found a bug or have an idea that would make the app better for your reef? We read every one.", subject: "Feedback" },
  { title: "Partnerships & press", body: "Reef stores, equipment makers, clubs and creators who want to work with NextUpReef.", subject: "Partnerships" },
];

const QUICK_HELP = [
  { href: "/faq", label: "Frequently asked questions" },
  { href: "/blog/how-to-connect-apex", label: "Connect a Neptune Apex" },
  { href: "/blog/how-to-add-shelly-plug", label: "Add a Shelly smart outlet" },
  { href: "/blog/reef-tank-dosing-calculator", label: "Work out a dose" },
  { href: "/blog/reef-score-stability-score-explained", label: "Understand your scores" },
];

const card: React.CSSProperties = { background: "var(--bg-card)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "22px" };

export default function ContactPage() {
  return (
    <main style={{ background: "var(--bg-dark)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      <section style={{ padding: "84px 24px 36px", maxWidth: "1000px", margin: "0 auto" }}>
        <div className="section-label">Contact</div>
        <h1 style={{ fontSize: "clamp(34px, 5.5vw, 54px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.06, margin: "14px 0 16px" }}>
          Talk to a{" "}
          <span style={{ background: "linear-gradient(135deg, var(--reef) 0%, var(--reef-soft) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>real reefer.</span>
        </h1>
        <p style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "600px", margin: 0 }}>
          NextUpReef is built by a reefer, and every message is read by a person. Email us about the app, your account, a bug, an idea, or working together.
        </p>
      </section>

      <section style={{ padding: "0 24px 56px", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ ...card, background: "linear-gradient(160deg, rgba(44,196,214,0.08) 0%, rgba(255,255,255,0.02) 70%)", border: "1px solid rgba(44,196,214,0.22)", padding: "32px", display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ margin: "0 0 6px", fontSize: "12px", fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--reef-soft)" }}>Email</p>
            <a href={`mailto:${EMAIL}`} style={{ fontSize: "clamp(22px, 3.6vw, 32px)", fontWeight: 900, color: "var(--text-light)", letterSpacing: "-0.02em", wordBreak: "break-all" }}>{EMAIL}</a>
          </div>
          <a href={`mailto:${EMAIL}`} className="btn primary large">Send an email</a>
        </div>
      </section>

      <section style={{ padding: "0 24px 56px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 18px", color: "var(--text-light)" }}>What can we help with?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>
          {TOPICS.map((t) => (
            <a key={t.title} href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.subject)}`} className="blog-card" style={{ ...card, display: "flex", flexDirection: "column", gap: "8px", textDecoration: "none" }}>
              <span style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)" }}>{t.title}</span>
              <span style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6, flex: 1 }}>{t.body}</span>
              <span style={{ fontSize: "13px", fontWeight: 800, color: "var(--reef)" }}>Email about this →</span>
            </a>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 24px 80px", maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
        <div style={card}>
          <h2 style={{ fontSize: "18px", fontWeight: 900, color: "var(--text-light)", margin: "0 0 12px" }}>Get a faster answer</h2>
          <p style={{ fontSize: "14.5px", color: "var(--text-muted)", lineHeight: 1.65, margin: "0 0 12px" }}>For app problems, include:</p>
          <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "14.5px", color: "var(--text-muted)", lineHeight: 1.55 }}>
            <li>Your phone (iPhone or Android)</li>
            <li>The app version, shown at the bottom of Settings</li>
            <li>What you tapped, and what happened instead</li>
            <li>A screenshot, if you can</li>
          </ul>
          <p style={{ fontSize: "13.5px", color: "var(--text-muted)", lineHeight: 1.6, margin: "14px 0 0" }}>
            Want to delete your account? You can do it yourself in the app under Settings → Delete Account, which removes your account and all its data.
          </p>
        </div>

        <div style={card}>
          <h2 style={{ fontSize: "18px", fontWeight: 900, color: "var(--text-light)", margin: "0 0 12px" }}>Quick help</h2>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
            {QUICK_HELP.map((q) => (
              <li key={q.href}>
                <Link href={q.href} style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "9px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", color: "var(--text-light)", fontSize: "14.5px", fontWeight: 700 }}>
                  <span>{q.label}</span>
                  <span style={{ color: "var(--reef)" }} aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: "13.5px", color: "var(--text-muted)", margin: "16px 0 0" }}>
            Follow along on{" "}
            <a href="https://www.facebook.com/profile.php?id=61576553765840" target="_blank" rel="noopener noreferrer" style={{ color: "var(--reef)", fontWeight: 700 }}>Facebook</a>{" "}
            and{" "}
            <a href="https://www.instagram.com/nextupreefapp/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--reef)", fontWeight: 700 }}>Instagram</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
