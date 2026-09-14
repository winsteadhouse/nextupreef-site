import type { Metadata } from "next";
import Link from "next/link";
import { FAQ_CATEGORIES } from "@/components/faqData";

export const metadata: Metadata = {
  title: "FAQ: Reef Tank App Questions Answered",
  description:
    "Answers about NextUpReef: logging parameters, Reef and Stability scores, dosing, reminders, AI features, Neptune Apex, CoralVue HYDROS and Shelly, NextUpReef Pro, and your account.",
  alternates: { canonical: "https://nextupreef.com/faq" },
  openGraph: {
    title: "NextUpReef FAQ",
    description: "Answers about logging, scores, dosing, reminders, AI, controllers, Pro and your account.",
    url: "https://nextupreef.com/faq",
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630 }],
  },
};

const total = FAQ_CATEGORIES.reduce((n, c) => n + c.faqs.length, 0);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_CATEGORIES.flatMap((c) =>
    c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  ),
};

export default function FaqPage() {
  return (
    <main style={{ background: "var(--bg-dark)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <style>{`
        .faq-layout { display: grid; grid-template-columns: 230px minmax(0, 1fr); gap: 48px; align-items: start; }
        .faq-toc { position: sticky; top: 92px; display: flex; flex-direction: column; gap: 2px; }
        .faq-toc a { display: flex; justify-content: space-between; gap: 10px; padding: 8px 12px; border-radius: 10px; color: var(--text-muted); font-size: 14px; font-weight: 700; }
        .faq-toc a:hover { background: rgba(44,196,214,0.08); color: var(--text-light); }
        .faq-toc a span:last-child { color: var(--text-muted); font-variant-numeric: tabular-nums; font-weight: 600; opacity: .7; }
        .faq-group { scroll-margin-top: 92px; margin-bottom: 44px; }
        .faq-item { border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; background: var(--bg-card); margin-bottom: 10px; }
        .faq-item[open] { border-color: rgba(44,196,214,0.28); }
        .faq-item summary { list-style: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 16px 18px; font-size: 16px; font-weight: 800; color: var(--text-light); line-height: 1.4; }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item summary:focus-visible { outline: 2px solid var(--reef); outline-offset: 2px; border-radius: 14px; }
        .faq-item summary .faq-chev { flex-shrink: 0; width: 26px; height: 26px; border-radius: 8px; display: flex; align-items: center; justify-content: center; background: rgba(44,196,214,0.1); color: var(--reef); font-size: 16px; transition: transform .18s ease; }
        .faq-item[open] summary .faq-chev { transform: rotate(45deg); }
        .faq-item p { margin: 0; padding: 0 18px 18px; color: var(--text-muted); font-size: 15px; line-height: 1.75; }
        .faq-chips { display: none; }
        @media (max-width: 900px) {
          .faq-layout { grid-template-columns: 1fr; gap: 0; }
          .faq-toc { display: none; }
          .faq-chips { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 6px; margin-bottom: 28px; scrollbar-width: none; }
          .faq-chips a { flex-shrink: 0; font-size: 13px; font-weight: 700; color: var(--reef); padding: 7px 14px; border-radius: 999px; background: rgba(44,196,214,0.08); border: 1px solid rgba(44,196,214,0.18); white-space: nowrap; }
        }
        @media (prefers-reduced-motion: reduce) { .faq-item summary .faq-chev { transition: none; } }
      `}</style>

      <section style={{ padding: "84px 24px 40px", maxWidth: "1100px", margin: "0 auto" }}>
        <div className="section-label">FAQ</div>
        <h1 style={{ fontSize: "clamp(34px, 5.5vw, 56px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.06, margin: "14px 0 16px", maxWidth: "780px" }}>
          Questions about{" "}
          <span style={{ background: "linear-gradient(135deg, var(--reef) 0%, var(--reef-soft) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>the app, answered.</span>
        </h1>
        <p style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "620px", margin: 0 }}>
          {total} answers about logging, scores, dosing, reminders, AI, controllers and your account. Can&apos;t find yours?{" "}
          <Link href="/contact" style={{ color: "var(--reef)", fontWeight: 700 }}>Contact us</Link>.
        </p>
      </section>

      <section style={{ padding: "0 24px 72px", maxWidth: "1100px", margin: "0 auto" }}>
        <nav className="faq-chips" aria-label="FAQ topics">
          {FAQ_CATEGORIES.map((c) => <a key={c.id} href={`#${c.id}`}>{c.title}</a>)}
        </nav>

        <div className="faq-layout">
          <nav className="faq-toc" aria-label="FAQ topics">
            {FAQ_CATEGORIES.map((c) => (
              <a key={c.id} href={`#${c.id}`}><span>{c.title}</span><span>{c.faqs.length}</span></a>
            ))}
          </nav>

          <div>
            {FAQ_CATEGORIES.map((c) => (
              <section key={c.id} id={c.id} className="faq-group" aria-labelledby={`${c.id}-title`}>
                <h2 id={`${c.id}-title`} style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 900, letterSpacing: "-0.02em", color: "var(--text-light)", margin: "0 0 6px" }}>{c.title}</h2>
                <p style={{ color: "var(--text-muted)", fontSize: "15px", margin: "0 0 16px" }}>{c.blurb}</p>
                {c.faqs.map((f) => (
                  <details key={f.q} className="faq-item">
                    <summary>
                      <span>{f.q}</span>
                      <span className="faq-chev" aria-hidden>+</span>
                    </summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </section>
            ))}

            <div style={{ background: "linear-gradient(160deg, rgba(44,196,214,0.08) 0%, rgba(255,255,255,0.02) 70%)", border: "1px solid rgba(44,196,214,0.22)", borderRadius: "20px", padding: "28px", display: "flex", flexWrap: "wrap", gap: "18px", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ maxWidth: "460px" }}>
                <h2 style={{ fontSize: "22px", fontWeight: 900, color: "var(--text-light)", margin: "0 0 6px" }}>Still stuck?</h2>
                <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.65, margin: 0 }}>
                  Email us and a real person will help, or browse the{" "}
                  <Link href="/blog" style={{ color: "var(--reef)", fontWeight: 700 }}>step-by-step guides</Link>.
                </p>
              </div>
              <Link href="/contact" className="btn primary large">Contact us</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
