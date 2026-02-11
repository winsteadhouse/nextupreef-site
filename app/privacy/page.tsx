import { site } from "@/lib/site";

export const metadata = {
  title: "NextUpReef — Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <section className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '900', marginBottom: '12px' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '16px', marginBottom: '40px', fontWeight: '700' }}>
          Effective date: <span style={{ color: 'var(--text-light)', fontWeight: '900' }}>{site.effectiveDate}</span>
        </p>

        <div style={{ 
          backgroundColor: 'rgba(255,255,255,0.03)', 
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.08)',
          padding: '40px',
          lineHeight: '1.7'
        }}>
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(44, 196, 214, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)',
            borderRadius: '12px',
            border: '1px solid rgba(44, 196, 214, 0.2)',
            padding: '16px',
            marginBottom: '32px'
          }}>
            <strong style={{ color: 'var(--reef)' }}>Note:</strong>{" "}
            <span style={{ color: 'var(--text-muted)', fontWeight: '700' }}>
              This template should match your actual data practices. Update sections as needed.
            </span>
          </div>

          <h2 style={{ fontSize: '24px', fontWeight: '900', marginTop: '32px', marginBottom: '16px' }}>1. Overview</h2>
          <p style={{ color: 'var(--text-muted)', fontWeight: '700' }}>
            NextUpReef values your privacy. This policy explains what we collect, how we use it, and your choices.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '900', marginTop: '32px', marginBottom: '16px' }}>2. Information We Collect</h2>
          <h3 style={{ fontSize: '18px', fontWeight: '900', marginTop: '20px', marginBottom: '12px' }}>2.1 Account Information</h3>
          <ul style={{ color: 'var(--text-muted)', fontWeight: '700', marginLeft: '24px', listStyle: 'disc' }}>
            <li>Email address (if you use email-based authentication)</li>
            <li>Optional profile details you provide (e.g., display name)</li>
          </ul>

          <h3 style={{ fontSize: '18px', fontWeight: '900', marginTop: '20px', marginBottom: '12px' }}>2.2 App Data You Provide</h3>
          <ul style={{ color: 'var(--text-muted)', fontWeight: '700', marginLeft: '24px', listStyle: 'disc' }}>
            <li>Tank details (type, gallons, configuration)</li>
            <li>Parameter logs (alk, ca, mg, nitrate, phosphate, etc.)</li>
            <li>Targets (recommended and any custom targets you set)</li>
            <li>Equipment and livestock inventory</li>
          </ul>

          <h3 style={{ fontSize: '18px', fontWeight: '900', marginTop: '20px', marginBottom: '12px' }}>2.3 Diagnostics (Optional)</h3>
          <p style={{ color: 'var(--text-muted)', fontWeight: '700' }}>
            If enabled, we may collect limited diagnostics (crash logs, performance data) to improve reliability.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '900', marginTop: '32px', marginBottom: '16px' }}>3. How We Use Information</h2>
          <ul style={{ color: 'var(--text-muted)', fontWeight: '700', marginLeft: '24px', listStyle: 'disc' }}>
            <li>Provide app features (logging, analytics, targets, stability indicators)</li>
            <li>Security and authentication</li>
            <li>Fix bugs and improve performance</li>
            <li>Respond to support requests</li>
          </ul>

          <h2 style={{ fontSize: '24px', fontWeight: '900', marginTop: '32px', marginBottom: '16px' }}>4. Sharing</h2>
          <p style={{ color: 'var(--text-muted)', fontWeight: '700' }}>
            We do not sell your personal information. We may share information with service providers that help operate the Service
            (hosting, auth, analytics), subject to appropriate safeguards.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '900', marginTop: '32px', marginBottom: '16px' }}>5. Data Retention</h2>
          <p style={{ color: 'var(--text-muted)', fontWeight: '700' }}>
            We retain your data while your account is active or as needed to provide the Service. You may request deletion by contacting us.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '900', marginTop: '32px', marginBottom: '16px' }}>6. Your Choices</h2>
          <ul style={{ color: 'var(--text-muted)', fontWeight: '700', marginLeft: '24px', listStyle: 'disc' }}>
            <li>Access/update account info in the app Settings</li>
            <li>Request deletion by emailing support</li>
          </ul>

          <h2 style={{ fontSize: '24px', fontWeight: '900', marginTop: '32px', marginBottom: '16px' }}>7. Security</h2>
          <p style={{ color: 'var(--text-muted)', fontWeight: '700' }}>
            We use reasonable safeguards to protect your information. No method of transmission or storage is 100% secure.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '900', marginTop: '32px', marginBottom: '16px' }}>8. Children</h2>
          <p style={{ color: 'var(--text-muted)', fontWeight: '700' }}>
            The Service is not intended for children under 13 (or the minimum age required where you live).
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '900', marginTop: '32px', marginBottom: '16px' }}>9. Changes</h2>
          <p style={{ color: 'var(--text-muted)', fontWeight: '700' }}>
            We may update this policy. We will update the effective date above.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '900', marginTop: '32px', marginBottom: '16px' }}>10. Contact</h2>
          <p style={{ color: 'var(--text-muted)', fontWeight: '700' }}>
            Privacy questions or deletion requests:{" "}
            <span style={{ color: 'var(--reef)', fontWeight: '900' }}>{site.supportEmail}</span>
          </p>
        </div>
      </div>
    </section>
  );
}