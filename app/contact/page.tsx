import type { Metadata } from "next";
import FAQList from "@/components/FAQList";

export const metadata: Metadata = {
  title: "FAQ & Help — Reef Tank Tracking App | NextUpReef",
  description:
    "Answers to common questions about NextUpReef — the free reef tank tracking app. Learn how to log parameters, understand Reef Score, set up reminders, and more.",
  alternates: {
    canonical: "https://nextupreef.com/contact",
  },
  openGraph: {
    title: "FAQ & Help — NextUpReef Reef Tank App",
    description:
      "Common questions about logging reef parameters, Reef Score, water change reminders, and more in the NextUpReef app.",
    url: "https://nextupreef.com/contact",
  },
};

// FAQPage schema — this gets Google to show accordion answers directly in search results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is NextUpReef?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NextUpReef is a free reef tank tracking app for iOS and Android. It lets you log saltwater aquarium parameters like alkalinity, calcium, magnesium, nitrate, phosphate, pH, salinity, and temperature. It calculates a Reef Score and Stability Score, shows trend charts, sends water change and maintenance reminders, and lets you connect with other reefers in the community feed.",
      },
    },
    {
      "@type": "Question",
      name: "Is NextUpReef free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NextUpReef is completely free with no subscription, no in-app purchases, and no paywalls. All features including the Community feed are available to every user.",
      },
    },
    {
      "@type": "Question",
      name: "What parameters can I track in NextUpReef?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NextUpReef supports 10 parameters: Alkalinity (dKH), Calcium (ppm), Magnesium (ppm), Nitrate (ppm), Nitrite (ppm), Phosphate (ppm), Salinity, pH, Temperature (°F), and Ammonia (ppm). You choose which ones to display based on what you test.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Reef Score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your Reef Score (0-100) is a composite measure of your tank's overall health based on how well your parameters stay within target ranges. It factors in recency of logs, parameter balance, water change consistency, equipment diversity, and tank maturity.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Stability Score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Stability Score (0-100) measures how consistent your parameters are over time. Low variation in key readings like alkalinity and calcium earns a higher score. It rewards steady husbandry over chasing 'perfect' numbers.",
      },
    },
    {
      "@type": "Question",
      name: "Does NextUpReef work for SPS, LPS, and Mixed Reef tanks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NextUpReef supports 7 tank types: Mixed Reef, SPS, LPS, Softies, Nano, ULNS, and Fish Only. Each has tailored default parameter ranges and scoring targets.",
      },
    },
    {
      "@type": "Question",
      name: "How do I set up water change reminders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Go to the Reminders tab and tap 'Set Up Water Changes'. Choose your frequency (Weekly, Biweekly, or Monthly), select which day of the week, and enter your water change percentage. The app sends push notifications the day before, day of, and when overdue.",
      },
    },
    {
      "@type": "Question",
      name: "Is NextUpReef available on iPhone and Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NextUpReef is available on both iOS (iPhone and iPad) via the Apple App Store and on Android via Google Play. It is completely free on both platforms.",
      },
    },
    {
      "@type": "Question",
      name: "Can I track multiple reef tanks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can add multiple tanks from the Tank tab by tapping the + button. Each tank tracks its own parameters, logs, scores, water changes, and reminders independently.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with NextUpReef?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Download NextUpReef from the App Store or Google Play, create a free account, and a quick 2-step onboarding will walk you through naming your tank, choosing your reef type, entering your tank size, and selecting which parameters you test. It takes about 30 seconds.",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      {/* FAQPage JSON-LD — enables Google to show accordion answers in search results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "42px", fontWeight: "900", marginBottom: "12px", textAlign: "center" }}>
            Help & Contact
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "18px", marginBottom: "50px", textAlign: "center" }}>
            Questions? We're here to help.
          </p>

          {/* Contact Email */}
          <div
            style={{
              backgroundColor: "rgba(44, 196, 214, 0.1)",
              borderRadius: "20px",
              border: "1px solid rgba(44, 196, 214, 0.2)",
              padding: "40px",
              marginBottom: "50px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>📧</div>
            <h2 style={{ fontSize: "20px", fontWeight: "900", marginBottom: "12px" }}>Contact us</h2>
            <a
              href="mailto:info@nextupreef.com"
              style={{
                color: "var(--reef)",
                fontSize: "22px",
                fontWeight: "900",
                textDecoration: "none",
              }}
            >
              info@nextupreef.com
            </a>
            <p style={{ color: "var(--text-muted)", marginTop: "16px", fontSize: "14px", fontWeight: "700" }}>
              Support • Feedback • Bug Reports
            </p>
          </div>

          {/* FAQs */}
          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "28px", fontWeight: "900", marginBottom: "32px" }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <FAQList />
            </div>
          </div>

          {/* Pro Tip */}
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "24px",
            }}
          >
            <h3 style={{ fontSize: "16px", fontWeight: "900", marginBottom: "8px", color: "var(--reef)" }}>
              💡 Pro Tip
            </h3>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.6", fontWeight: "700", fontSize: "14px", margin: 0 }}>
              Log 1-2x per week for strong trend data. Increase frequency during new setups or when making adjustments.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}