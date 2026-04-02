import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Footer Content */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '40px',
          textAlign: 'left'
        }}>
          {/* Brand */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '900', marginBottom: '12px', color: 'var(--text-light)' }}>
              NextUpReef
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6', margin: '0 0 16px 0' }}>
              Track your reef aquarium parameters with ease.
            </p>
            {/* Social links */}
            <div className="footer-social" style={{ justifyContent: 'flex-start' }}>
              <a href="https://www.facebook.com/profile.php?id=61576553765840" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/nextupreefapp/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '900', marginBottom: '12px', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Product
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/" style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '700' }}>
                Features
              </Link>
              <a href="https://apps.apple.com/us/app/nextupreef/id6760728959" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '700' }}>
                Download on App Store
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.nextupreef.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '700' }}>
                Download on Google Play
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '900', marginBottom: '12px', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Support
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/contact" style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '700' }}>
                Contact
              </Link>
              <a href="mailto:info@nextupreef.com" style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '700' }}>
                info@nextupreef.com
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '900', marginBottom: '12px', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Legal
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/privacy" style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '700' }}>
                Privacy Policy
              </Link>
              <Link href="/terms" style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '700' }}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '24px',
          textAlign: 'center'
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '700', margin: 0 }}>
            © {new Date().getFullYear()} NextUpReef. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}