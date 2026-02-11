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
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
              Track your reef aquarium parameters with ease.
            </p>
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
              <a href="#" style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '700' }}>
                Download App
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