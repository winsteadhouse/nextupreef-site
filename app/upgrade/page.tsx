import '../(app)/portal.css';
import Link from 'next/link';

export default function UpgradePage() {
  return (
    <div className="authwrap">
      <div className="authcard" style={{ textAlign: 'center' }}>
        <h2>Unlock the web portal</h2>
        <p className="sub" style={{ marginBottom: 22 }}>
          The desktop cockpit — analytics, My Reef, and device control — is part of NextUpReef Pro.
          Manage your subscription in the mobile app, then come back here.
        </p>
        <div
          style={{
            background: 'var(--panel-2)',
            border: '1px solid var(--hair)',
            borderRadius: 12,
            padding: '14px 16px',
            fontSize: 13,
            color: 'var(--mid)',
            textAlign: 'left',
          }}
        >
          Already Pro on mobile? Your access syncs automatically — try refreshing. Trials and
          subscriptions are managed in the app stores.
        </div>
        <div className="alt" style={{ marginTop: 18 }}>
          <Link href="/login">Back to sign in</Link>
        </div>
      </div>
    </div>
  );
}
