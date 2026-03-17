export const metadata = {
  title: "NextUpReef — Privacy Policy",
};

const EFFECTIVE_DATE = "March 17, 2026";
const CONTACT_EMAIL = "info@nextupreef.com";

export default function PrivacyPage() {
  return (
    <section className="container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "900", marginBottom: "12px" }}>Privacy Policy</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "16px", marginBottom: "40px", fontWeight: "700" }}>
          Effective date: <span style={{ color: "var(--text-light)", fontWeight: "900" }}>{EFFECTIVE_DATE}</span>
        </p>

        <div style={{
          backgroundColor: "rgba(255,255,255,0.03)",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "40px",
          lineHeight: "1.7",
        }}>
          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "0px", marginBottom: "16px" }}>1. Overview</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            NextUpReef values your privacy. This policy explains what information we collect, how we use it, what we share publicly through the Community feed, and your choices — including how to opt out of public sharing at any time.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>2. Information We Collect</h2>

          <h3 style={{ fontSize: "18px", fontWeight: "900", marginTop: "20px", marginBottom: "12px" }}>2.1 Account Information</h3>
          <ul style={{ color: "var(--text-muted)", fontWeight: "700", marginLeft: "24px", listStyle: "disc" }}>
            <li>Email address (used for authentication, account recovery, and optional product communications)</li>
            <li>Display name — the name shown on your public community profile (e.g., &quot;Adam&quot; or &quot;ReefKeeper42&quot;)</li>
          </ul>

          <h3 style={{ fontSize: "18px", fontWeight: "900", marginTop: "20px", marginBottom: "12px" }}>2.2 Tank & Reef Data</h3>
          <ul style={{ color: "var(--text-muted)", fontWeight: "700", marginLeft: "24px", listStyle: "disc" }}>
            <li>Tank details (name, type, display gallons, sump gallons, setup date, salt mix brand)</li>
            <li>Parameter logs (alkalinity, calcium, magnesium, nitrate, phosphate, salinity, pH, temperature, etc.)</li>
            <li>Custom parameter targets</li>
            <li>Equipment and livestock inventory</li>
            <li>Dosing products and methods</li>
            <li>Water change history and schedule</li>
            <li>Tank photos uploaded by you (one per month per tank)</li>
          </ul>

          <h3 style={{ fontSize: "18px", fontWeight: "900", marginTop: "20px", marginBottom: "12px" }}>2.3 Diagnostics (Optional)</h3>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            If enabled, we may collect limited diagnostics (crash logs, performance data) to improve reliability.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>3. Community Feed — Public Data</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            NextUpReef includes a Community feed where reefers can compare tanks and learn from each other. <strong style={{ color: "var(--text-light)" }}>Tanks are public by default.</strong> When your tank is public, the following information is visible to all users of the app:
          </p>
          <ul style={{ color: "var(--text-muted)", fontWeight: "700", marginLeft: "24px", listStyle: "disc", marginTop: "12px" }}>
            <li>Your display name</li>
            <li>Tank name, type, size (display and sump gallons), and setup date</li>
            <li>Reef Score and Stability Score</li>
            <li>Most recent parameter readings (alk, ca, mg, no3, po4, salinity, pH)</li>
            <li>90-day parameter averages, min/max ranges, and % time in range</li>
            <li>Salt mix brand</li>
            <li>Active dosing products and methods</li>
            <li>Water change frequency and percentage</li>
            <li>Livestock count and badge count</li>
            <li>Tank photos you have uploaded</li>
          </ul>
          <p style={{ color: "var(--text-muted)", fontWeight: "700", marginTop: "16px" }}>
            <strong style={{ color: "var(--text-light)" }}>Your email address, password, and authentication credentials are never shared publicly under any circumstances.</strong>
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>4. Opting Out of the Community Feed</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            You can opt out of public community sharing at any time:
          </p>
          <ul style={{ color: "var(--text-muted)", fontWeight: "700", marginLeft: "24px", listStyle: "disc", marginTop: "12px" }}>
            <li><strong style={{ color: "var(--text-light)" }}>Per-tank:</strong> Go to the Tank tab, scroll to the &quot;Reef Community&quot; row, and toggle &quot;Show in Community&quot; off.</li>
            <li><strong style={{ color: "var(--text-light)" }}>All tanks at once:</strong> Go to Settings, scroll to the Community section, and tap &quot;Hide All&quot;.</li>
          </ul>
          <p style={{ color: "var(--text-muted)", fontWeight: "700", marginTop: "12px" }}>
            When you opt out, your tank data is removed from the public community feed immediately. It remains stored in your private account and continues to be used for your personal scores, trends, and analytics.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>5. Tank Photos</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            Photos you upload are stored securely and are only publicly accessible if your tank is set to public in the Community feed. If you opt out of the community feed, your photos become private. You can delete individual photos at any time from the Tank tab &gt; History. Deleted photos are permanently removed from our servers.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>6. How We Use Your Information</h2>
          <ul style={{ color: "var(--text-muted)", fontWeight: "700", marginLeft: "24px", listStyle: "disc" }}>
            <li>Provide app features (logging, analytics, scores, reminders, community feed)</li>
            <li>Authentication and account security</li>
            <li>Fix bugs and improve performance</li>
            <li>Respond to support requests</li>
            <li>Send product updates, reef tips, and announcements via email (you may unsubscribe at any time)</li>
          </ul>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>7. Email Communications</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            By creating an account and agreeing to our Terms of Service, you acknowledge that your email address may be used to send product updates, new feature announcements, and reef-keeping tips from NextUpReef. You can opt out of marketing emails at any time by using the unsubscribe link in any email or by contacting us at{" "}
            <span style={{ color: "var(--reef)", fontWeight: "900" }}>{CONTACT_EMAIL}</span>. Transactional emails (such as password resets) are not affected by marketing opt-outs.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>8. Advertising</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            The Service may display a small banner advertisement provided by third-party advertising partners. These partners may collect limited information (such as device identifiers, approximate location, and ad interaction data) to deliver ads, measure performance, and prevent fraud. We do not sell your personal information.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>9. Sharing With Third Parties</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            We do not sell your personal information to third parties. We may share information with service providers that help operate the Service (such as hosting, authentication, analytics, and advertising), subject to appropriate safeguards and only as needed to provide these services.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>10. Data Retention</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            We retain your data while your account is active or as needed to provide the Service. You may request deletion by contacting us or using the Delete Account option in Settings.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>11. Your Choices</h2>
          <ul style={{ color: "var(--text-muted)", fontWeight: "700", marginLeft: "24px", listStyle: "disc" }}>
            <li>Update your display name in Settings at any time</li>
            <li>Opt out of community feed sharing per-tank or for all tanks via Settings</li>
            <li>Delete individual tank photos from Tank tab &gt; History</li>
            <li>Unsubscribe from marketing emails via the unsubscribe link in any email</li>
            <li>Request full account deletion via Settings or by emailing {CONTACT_EMAIL}</li>
          </ul>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>12. Security</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            We use reasonable safeguards including encrypted storage and authentication to protect your information. No method of transmission or storage is 100% secure.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>13. Children</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            The Service is not intended for children under 13 (or the minimum age required where you live).
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>14. Changes</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            We may update this policy from time to time. We will update the effective date above when we do.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>15. Contact</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            Privacy questions, opt-out requests, or deletion requests:{" "}
            <span style={{ color: "var(--reef)", fontWeight: "900" }}>{CONTACT_EMAIL}</span>
          </p>
        </div>
      </div>
    </section>
  );
}