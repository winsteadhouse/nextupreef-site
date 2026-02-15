export const metadata = {
  title: "NextUpReef — Terms of Service",
};

const EFFECTIVE_DATE = "February 15, 2026";
const CONTACT_EMAIL = "info@nextupreef.com";

export default function TermsPage() {
  return (
    <section className="container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "900", marginBottom: "12px" }}>Terms of Service</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "16px", marginBottom: "40px", fontWeight: "700" }}>
          Effective date: <span style={{ color: "var(--text-light)", fontWeight: "900" }}>{EFFECTIVE_DATE}</span>
        </p>

        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.03)",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "40px",
            lineHeight: "1.7",
          }}
        >
          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "0px", marginBottom: "16px" }}>1. Agreement</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            These Terms govern your use of the NextUpReef app and website (the "Service"). By using the Service, you
            agree to these Terms.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>2. The Service</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            NextUpReef provides tools to log aquarium/reef parameters, view analytics, and manage targets. The Service is
            provided "as is" and may change over time.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>3. Accounts</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            You are responsible for maintaining the confidentiality of your account and for all activity under your
            account.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>4. Acceptable Use</h2>
          <ul style={{ color: "var(--text-muted)", fontWeight: "700", marginLeft: "24px", listStyle: "disc" }}>
            <li>Do not attempt to access other users&apos; accounts or data</li>
            <li>Do not disrupt, reverse engineer, or misuse the Service</li>
            <li>Do not use the Service for unlawful purposes</li>
          </ul>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>5. Data and Content</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            You retain ownership of your data (e.g., logs and targets). You grant permission for us to process your data
            to provide the Service. See the Privacy Policy for details.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>6. Disclaimer</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            The Service provides informational tools only. Reef outcomes depend on many variables. You are solely
            responsible for aquarium decisions and livestock care.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>7. Termination</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            We may suspend or terminate access if you violate these Terms or to protect the Service and users.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>8. Limitation of Liability</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            To the maximum extent permitted by law, NextUpReef is not liable for indirect, incidental, special,
            consequential, or punitive damages.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>9. Changes</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            We may update these Terms from time to time. Continued use after changes means you accept the updated Terms.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: "900", marginTop: "32px", marginBottom: "16px" }}>10. Contact</h2>
          <p style={{ color: "var(--text-muted)", fontWeight: "700" }}>
            Questions? Email <span style={{ color: "var(--reef)", fontWeight: "900" }}>{CONTACT_EMAIL}</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
