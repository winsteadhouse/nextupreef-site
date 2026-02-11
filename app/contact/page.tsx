import FAQList from "@/components/FAQList";

export const metadata = {
  title: "NextUpReef — Contact & FAQ",
};

export default function FAQPage() {
  return (
    <section className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '900', marginBottom: '12px', textAlign: 'center' }}>Help & Contact</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '50px', textAlign: 'center' }}>
          Questions? We're here to help.
        </p>

        {/* Contact Email */}
        <div style={{ 
          backgroundColor: 'rgba(44, 196, 214, 0.1)', 
          borderRadius: '20px',
          border: '1px solid rgba(44, 196, 214, 0.2)',
          padding: '40px',
          marginBottom: '50px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📧</div>
          <h2 style={{ fontSize: '20px', fontWeight: '900', marginBottom: '12px' }}>Contact us</h2>
          <a 
            href="mailto:info@nextupreef.com"
            style={{ 
              color: 'var(--reef)', 
              fontSize: '22px', 
              fontWeight: '900',
              textDecoration: 'none'
            }}
          >
            info@nextupreef.com
          </a>
          <p style={{ color: 'var(--text-muted)', marginTop: '16px', fontSize: '14px', fontWeight: '700' }}>
            Support • Feedback • Bug Reports
          </p>
        </div>

        {/* FAQs */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '32px' }}>Frequently Asked Questions</h2>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '24px'  // Add spacing between FAQ items
          }}>
            <FAQList />
          </div>
        </div>

        {/* Pro Tip */}
        <div style={{ 
          backgroundColor: 'rgba(255,255,255,0.03)', 
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.08)',
          padding: '24px'
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: '900', marginBottom: '8px', color: 'var(--reef)' }}>
            💡 Pro Tip
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontWeight: '700', fontSize: '14px', margin: 0 }}>
            Log 1-2x per week for strong trend data. Increase frequency during new setups or when making adjustments.
          </p>
        </div>
      </div>
    </section>
  );
}