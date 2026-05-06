export const metadata = {
  title: "NextUpReef — Privacy Policy",
};

const EFFECTIVE_DATE = "May 6, 2026";
const CONTACT_EMAIL = "info@nextupreef.com";

export default function PrivacyPage() {
  return (
    <section className="container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "900", marginBottom: "12px" }}>Privacy Policy</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "16px", marginBottom: "40px", fontWeight: "700" }}>
          Effective date: <span style={{ color: "var(--text-light)", fontWeight: "900" }}>{EFFECTIVE_DATE}</span>
        </p>
        <div style={{ backgroundColor: "rgba(255,255,255,0.03)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", padding: "40px", lineHeight: "1.7" }}>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "0px", marginBottom: "16px" }}>1. Overview</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            NextUpReef values your privacy. This policy explains what information we collect, how we use it, what we share publicly through the Community feed, how we handle subscriptions and AI features, and your choices — including how to opt out of public sharing at any time.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>2. Information We Collect</h2>
          <h3 style={{ fontSize: "18px", fontWeight: "900", marginTop: "20px", marginBottom: "12px" }}>2.1 Account Information</h3>
          <ul style={{ color: "var(--text-muted)", fontWeight: "700", marginLeft: "24px", listStyle: "disc" }}>
            <li>Email address (used for authentication, account recovery, and product communications)</li>
            <li>Display name — the name shown on your public community profile</li>
          </ul>
          <h3 style={{ fontSize: "18px", fontWeight: "900", marginTop: "20px", marginBottom: "12px" }}>2.2 Tank & Reef Data</h3>
          <ul style={{ color: "var(--text-muted)", fontWeight: "700", marginLeft: "24px", listStyle: "disc" }}>
            <li>Tank details (name, type, display gallons, sump gallons, setup date, salt mix brand)</li>
            <li>Parameter logs (alkalinity, calcium, magnesium, nitrate, phosphate, salinity, pH, temperature, etc.)</li>
            <li>Custom parameter targets</li>
            <li>Equipment and livestock inventory</li>
            <li>Dosing products and methods</li>
            <li>Water change history and schedule</li>
            <li>Tank photos uploaded by you</li>
            <li>Tank Journal entries and photos (private — never shared publicly)</li>
          </ul>
          <h3 style={{ fontSize: "18px", fontWeight: "900", marginTop: "20px", marginBottom: "12px" }}>2.3 Subscription & Billing</h3>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            Subscriptions are processed through Apple App Store or Google Play. We do not store credit card numbers or payment details. We receive confirmation of your subscription status from RevenueCat (our subscription management provider) and Apple/Google. We store your subscription tier (free or pro) and trial dates in our database.
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "900", marginTop: "20px", marginBottom: "12px" }}>2.4 AI Feature Data</h3>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            When you use Reef AI Advisor, Ask Reef AI Chat, or AI Photo Parameter Logging, your tank data (parameters, equipment, livestock, dosing) is sent to Anthropic&apos;s Claude API to generate responses. Photos you submit for AI scanning are sent to Anthropic for processing and are not stored beyond the duration of the request. AI chat history is stored in your account. We do not use your tank data to train AI models.
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "900", marginTop: "20px", marginBottom: "12px" }}>2.5 Diagnostics (Optional)</h3>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            If enabled, we may collect limited diagnostics (crash logs, performance data) to improve reliability.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>2.2 Subscription & Billing</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            Subscriptions are processed through Apple App Store or Google Play. We do not store credit card numbers. We receive confirmation of subscription status from RevenueCat and store your subscription tier (free or pro) and trial dates.
          </p>
          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>2.3 AI Feature Data</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            When you use Reef AI Advisor, Ask Reef AI Chat, or AI Photo Parameter Logging, your tank data (parameters, equipment, livestock, dosing) is sent to Anthropic&apos;s Claude API to generate responses. Photos submitted for AI scanning are sent to Anthropic for processing and are not stored beyond the request. AI chat history is stored in your account. We do not use your tank data to train AI models.
          </p>
          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>3. Community Feed — Public Data</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            NextUpReef includes a Community feed (Reef Hub) where reefers can compare tanks and learn from each other. <strong style={{ color: "var(--text-light)" }}>Tanks are public by default.</strong> When your tank is public, the following information is visible to all users:
          </p>
          <ul style={{ color: "var(--text-muted)", fontWeight: "700", marginLeft: "24px", listStyle: "disc", marginTop: "12px" }}>
            <li>Your display name</li>
            <li>Tank name, type, size, and setup date</li>
            <li>Reef Score and Stability Score</li>
            <li>Most recent parameter readings</li>
            <li>Salt mix brand</li>
            <li>Active dosing products and methods</li>
            <li>Water change frequency and percentage</li>
            <li>Livestock count and badge count</li>
            <li>Tank photos you have uploaded</li>
          </ul>
          <p style={{ color: "var(--text-muted)", fontWeight: "700", marginTop: "16px" }}>
            <strong style={{ color: "var(--text-light)" }}>Your email address, password, Tank Journal entries, and authentication credentials are never shared publicly under any circumstances.</strong>
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>4. Opting Out of the Community Feed</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>You can opt out at any time:</p>
          <ul style={{ color: "var(--text-muted)", fontWeight: "700", marginLeft: "24px", listStyle: "disc", marginTop: "12px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Per-tank:</strong> Go to the Tank tab and toggle visibility off.</li>
            <li><strong style={{ color: "var(--text-light)" }}>All tanks:</strong> Go to Settings → Community & Profile → Hide All.</li>
          </ul>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>5. Tank Photos</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            Photos you upload are stored securely. Monthly tank photos are publicly accessible only if your tank is set to public. Tank Journal photos are always private. You can delete photos at any time from the Tank tab. Deleted photos are permanently removed.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>6. How We Use Your Information</h2>
          <ul style={{ color: "var(--text-muted)", fontWeight: "700", marginLeft: "24px", listStyle: "disc" }}>
            <li>Provide app features (logging, analytics, scores, reminders, community feed, AI tools)</li>
            <li>Process and manage your subscription</li>
            <li>Send AI requests to Anthropic on your behalf when you use AI features</li>
            <li>Authentication and account security</li>
            <li>Fix bugs and improve performance</li>
            <li>Respond to support requests</li>
            <li>Send product updates and announcements (unsubscribe anytime)</li>
          </ul>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>7. Email Communications</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            By creating an account, you agree that your email may be used to send product updates, feature announcements, trial reminders, and reef-keeping tips. You can opt out of marketing emails via the unsubscribe link in any email or by contacting us at{" "}
            <span style={{ color: "var(--reef)", fontWeight: "900" }}>{CONTACT_EMAIL}</span>. Transactional emails (password resets, account security) are not affected by marketing opt-outs.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>8. Third-Party Services</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>We use the following third-party services to operate NextUpReef:</p>
          <ul style={{ color: "var(--text-muted)", fontWeight: "700", marginLeft: "24px", listStyle: "disc", marginTop: "12px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Supabase</strong> — database, authentication, and file storage</li>
            <li><strong style={{ color: "var(--text-light)" }}>Anthropic (Claude API)</strong> — AI features (Reef AI Advisor, Chat, Photo Logging)</li>
            <li><strong style={{ color: "var(--text-light)" }}>RevenueCat</strong> — subscription management</li>
            <li><strong style={{ color: "var(--text-light)" }}>Apple App Store / Google Play</strong> — payment processing</li>
            <li><strong style={{ color: "var(--text-light)" }}>SendGrid</strong> — transactional email delivery</li>
            <li><strong style={{ color: "var(--text-light)" }}>Expo / Firebase</strong> — push notifications</li>
          </ul>
          <p style={{ color: "var(--text-muted)", fontWeight: "700", marginTop: "12px" }}>We do not sell your personal information to third parties.</p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>9. Data Retention</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            We retain your data while your account is active. You may request deletion by contacting us or using the Delete Account option in Settings.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>10. Your Choices</h2>
          <ul style={{ color: "var(--text-muted)", fontWeight: "700", marginLeft: "24px", listStyle: "disc" }}>
            <li>Update your display name in Settings at any time</li>
            <li>Opt out of community feed sharing via Settings</li>
            <li>Delete tank photos from the Tank tab</li>
            <li>Unsubscribe from marketing emails via any email's unsubscribe link</li>
            <li>Manage or cancel your Pro subscription via App Store or Google Play settings</li>
            <li>Request full account deletion via Settings or by emailing {CONTACT_EMAIL}</li>
          </ul>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>11. Security</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            We use encrypted storage and authentication to protect your information. No method of transmission or storage is 100% secure.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>12. Children</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            The Service is not intended for children under 13 (or the minimum age required where you live).
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>13. Changes</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            We may update this policy from time to time. We will update the effective date above when we do.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>14. Contact</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            Privacy questions or deletion requests:{" "}
            <span style={{ color: "var(--reef)", fontWeight: "900" }}>{CONTACT_EMAIL}</span>
          </p>
        </div>
      </div>
    </section>
  );
}