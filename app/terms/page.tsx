export const metadata = {
  title: "NextUpReef — Terms of Service",
};

const EFFECTIVE_DATE = "March 17, 2026";
const CONTACT_EMAIL = "info@nextupreef.com";

export default function TermsPage() {
  return (
    <section className="container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "900", marginBottom: "12px" }}>Terms of Service</h1>
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
          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "0px", marginBottom: "16px" }}>1. Agreement</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            These Terms govern your use of the NextUpReef app and website (the &quot;Service&quot;). By creating an account or using the Service, you agree to these Terms and our Privacy Policy.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>2. The Service</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            NextUpReef provides tools to log aquarium and reef tank parameters, view analytics, manage reminders, upload tank photos, and participate in a public Community feed. The Service is provided &quot;as is&quot; and may change over time.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>3. Accounts & Display Name</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            You are responsible for maintaining the confidentiality of your account and for all activity under your account. During onboarding you will set a <strong style={{ color: "var(--text-light)" }}>display name</strong> — the name visible to other users in the Community feed. You are responsible for choosing an appropriate display name that does not impersonate others. You may update your display name at any time in Settings.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>4. Community Feed & Public Data</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            NextUpReef includes a public Community feed. <strong style={{ color: "var(--text-light)" }}>Tanks are set to public by default.</strong> When your tank is public, the following information is visible to all users of the app: your display name, tank name and details, Reef and Stability scores, parameter readings, salt mix brand, dosing products, water change schedule, livestock count, badge count, and tank photos you have uploaded.
          </p>
          <p style={{ color: "var(--text-muted)", fontWeight: "700", marginTop: "12px" }}>
            Your email address and password are never shared publicly. You can opt out of the community feed at any time — per-tank from the Tank tab, or for all tanks at once from Settings. See our Privacy Policy for full details.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>5. Tank Photos</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            You may upload one photo per month per tank to build a growth timeline. By uploading a photo, you grant NextUpReef a non-exclusive license to display that photo within the Service, including in the public Community feed if your tank is set to public. You retain ownership of your photos. You must only upload photos you have the right to share. Photos must not contain unlawful, harmful, or offensive content. We reserve the right to remove photos that violate these Terms.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>6. Email Communications</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            By creating an account, you agree that NextUpReef may send you product updates, new feature announcements, reef-keeping tips, and promotional communications to the email address associated with your account. You may opt out of marketing emails at any time by using the unsubscribe link in any marketing email or by contacting us at{" "}
            <span style={{ color: "var(--reef)", fontWeight: "900" }}>{CONTACT_EMAIL}</span>. Transactional emails (such as password resets and account security notices) will continue regardless of your marketing preferences.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>7. Acceptable Use</h2>
          <ul style={{ color: "var(--text-muted)", fontWeight: "700", marginLeft: "24px", listStyle: "disc" }}>
            <li>Do not attempt to access other users&apos; accounts or private data</li>
            <li>Do not upload photos containing unlawful, harmful, abusive, or offensive content</li>
            <li>Do not use a display name intended to impersonate other users or public figures</li>
            <li>Do not disrupt, reverse engineer, or misuse the Service</li>
            <li>Do not use the Service for unlawful purposes</li>
          </ul>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>8. Data and Content</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            You retain ownership of your tank data (logs, photos, etc.). You grant NextUpReef permission to process and display your data to provide the Service, including displaying public tank data in the Community feed. See the Privacy Policy for details on what is public and how to opt out.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>9. Disclaimer</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            The Service provides informational tools only. Reef outcomes depend on many variables. You are solely responsible for aquarium decisions and livestock care. Parameter targets and scores are guides, not guarantees.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>10. Termination</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            We may suspend or terminate access if you violate these Terms or to protect the Service and its users.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>11. Limitation of Liability</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            To the maximum extent permitted by law, NextUpReef is not liable for indirect, incidental, special, consequential, or punitive damages arising from use of the Service.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>12. Changes</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            We may update these Terms from time to time. Continued use of the Service after changes means you accept the updated Terms. We will update the effective date above when changes are made.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>13. Contact</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            Questions? Email{" "}
            <span style={{ color: "var(--reef)", fontWeight: "900" }}>{CONTACT_EMAIL}</span>
          </p>
        </div>
      </div>
    </section>
  );
}