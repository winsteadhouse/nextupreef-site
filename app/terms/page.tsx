export const metadata = {
  title: "NextUpReef — Terms of Service",
};

const EFFECTIVE_DATE = "May 6, 2026";
const CONTACT_EMAIL = "info@nextupreef.com";

export default function TermsPage() {
  return (
    <section className="container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "900", marginBottom: "12px" }}>Terms of Service</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "16px", marginBottom: "40px", fontWeight: "700" }}>
          Effective date: <span style={{ color: "var(--text-light)", fontWeight: "900" }}>{EFFECTIVE_DATE}</span>
        </p>
        <div style={{ backgroundColor: "rgba(255,255,255,0.03)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", padding: "40px", lineHeight: "1.7" }}>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "0px", marginBottom: "16px" }}>1. Agreement</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            These Terms govern your use of the NextUpReef app and website (the &quot;Service&quot;). By creating an account or using the Service, you agree to these Terms and our Privacy Policy.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>2. The Service</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            NextUpReef provides tools to log aquarium and reef tank parameters, view analytics, manage reminders, upload tank photos, maintain a tank journal, use AI-powered reef analysis and chat, and participate in a public Community feed. The Service is provided &quot;as is&quot; and may change over time.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>2.5 Free Plan, Pro Trial & Subscriptions</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            NextUpReef is free to download. New accounts receive a free 30-day Pro trial with no credit card required. After 30 days, the account reverts to the free plan unless you subscribe.
          </p>
          <p style={{ color: "var(--text-muted)", fontWeight: "700", marginTop: "12px" }}>
            <strong style={{ color: "var(--text-light)" }}>Pro Subscription:</strong> Pro is available at $4.99/month or $39.99/year, billed through Apple App Store or Google Play. Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current billing period. Manage or cancel in your App Store or Google Play account settings. Refund requests are handled by Apple or Google according to their policies.
          </p>
          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>2.6 AI Features</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            Pro subscribers have access to Reef AI Advisor, Ask Reef AI Chat, and AI Photo Parameter Logging powered by Anthropic&apos;s Claude API. AI responses are informational only. AI Photo Logging results should be reviewed before saving. Ask Reef AI is limited to 10 messages per day. Reef AI Analysis can be refreshed once every 24 hours. We do not use your tank data to train AI models.
          </p>
          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>3. Accounts & Display Name</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            You are responsible for maintaining the confidentiality of your account and for all activity under your account. You will set a <strong style={{ color: "var(--text-light)" }}>display name</strong> visible to other users in the Community feed. You may update your display name at any time in Settings.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>4. Free Plan & Pro Subscription</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            NextUpReef is free to download and use. The free plan includes parameter logging, Reef & Stability Scores, charts up to 90 days, up to 3 reminders, community access, and badges.
          </p>
          <p style={{ color: "var(--text-muted)", fontWeight: "700", marginTop: "12px" }}>
            <strong style={{ color: "var(--text-light)" }}>Pro Trial:</strong> New accounts receive a free 30-day Pro trial. No credit card is required to start a trial. After 30 days, your account reverts to the free plan unless you subscribe.
          </p>
          <p style={{ color: "var(--text-muted)", fontWeight: "700", marginTop: "12px" }}>
            <strong style={{ color: "var(--text-light)" }}>Pro Subscription:</strong> Pro is available at $4.99/month or $39.99/year, billed through Apple App Store or Google Play. Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current billing period. Manage or cancel in your App Store or Google Play account settings.
          </p>
          <p style={{ color: "var(--text-muted)", fontWeight: "700", marginTop: "12px" }}>
            <strong style={{ color: "var(--text-light)" }}>Refunds:</strong> Refund requests are handled by Apple or Google according to their policies. We do not process refunds directly.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>5. AI Features</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            Pro subscribers have access to Reef AI Advisor, Ask Reef AI Chat, and AI Photo Parameter Logging. These features use Anthropic&apos;s Claude API to generate responses based on your tank data.
          </p>
          <ul style={{ color: "var(--text-muted)", fontWeight: "700", marginLeft: "24px", listStyle: "disc", marginTop: "12px" }}>
            <li>AI responses are informational only and should not replace professional advice for valuable livestock.</li>
            <li>AI Photo Logging results should be reviewed before saving — AI readings may occasionally be inaccurate.</li>
            <li>Ask Reef AI Chat is limited to 10 messages per day per account.</li>
            <li>Reef AI Analysis can be refreshed once every 24 hours.</li>
            <li>We do not use your tank data to train AI models.</li>
          </ul>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>6. Community Feed & Public Data</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            NextUpReef includes a public Community feed (Reef Hub). <strong style={{ color: "var(--text-light)" }}>Tanks are set to public by default.</strong> When your tank is public, other users can see your display name, tank details, scores, parameter readings, salt mix, dosing, water change schedule, livestock count, badges, and photos. Your email, password, and Tank Journal entries are never shared publicly. You can opt out at any time via Settings.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>7. Tank Photos & Journal</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            You may upload one monthly photo per tank and photos within Tank Journal entries. By uploading a photo, you grant NextUpReef a non-exclusive license to display it within the Service. Monthly tank photos may be visible in the public community feed if your tank is public. Journal photos are always private. You retain ownership of your photos. Photos must not contain unlawful, harmful, or offensive content.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>8. Email Communications</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            By creating an account, you agree that NextUpReef may send you product updates, new feature announcements, trial expiry reminders, reef-keeping tips, and promotional communications. You may opt out of marketing emails at any time via the unsubscribe link in any email or by contacting {CONTACT_EMAIL}. Transactional emails (password resets, security notices) will continue regardless of marketing preferences.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>9. Acceptable Use</h2>
          <ul style={{ color: "var(--text-muted)", fontWeight: "700", marginLeft: "24px", listStyle: "disc" }}>
            <li>Do not attempt to access other users&apos; accounts or private data</li>
            <li>Do not upload photos containing unlawful, harmful, abusive, or offensive content</li>
            <li>Do not use a display name intended to impersonate others</li>
            <li>Do not abuse AI features (automated queries, prompt injection, etc.)</li>
            <li>Do not disrupt, reverse engineer, or misuse the Service</li>
            <li>Do not use the Service for unlawful purposes</li>
          </ul>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>10. Data and Content</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            You retain ownership of your tank data (logs, photos, etc.). You grant NextUpReef permission to process and display your data to provide the Service, including public tank data in the Community feed. See the Privacy Policy for details.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>11. Disclaimer</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            The Service provides informational tools only, including AI-generated advice. Reef outcomes depend on many variables. You are solely responsible for aquarium decisions and livestock care. Parameter targets, scores, and AI recommendations are guides, not guarantees.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>12. Termination</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            We may suspend or terminate access if you violate these Terms or to protect the Service and its users.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>13. Limitation of Liability</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            To the maximum extent permitted by law, NextUpReef is not liable for indirect, incidental, special, consequential, or punitive damages arising from use of the Service.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>14. Changes</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            We may update these Terms from time to time. Continued use after changes means you accept the updated Terms. We will update the effective date when changes are made.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>15. Contact</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            Questions? Email{" "}
            <span style={{ color: "var(--reef)", fontWeight: "900" }}>{CONTACT_EMAIL}</span>
          </p>
        </div>
      </div>
    </section>
  );
}