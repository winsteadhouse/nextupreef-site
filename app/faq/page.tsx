import FAQList from "@/components/FAQList";

export const metadata = {
  title: "NextUpReef — Help & FAQ",
};

export default function FAQPage() {
  return (
    <section className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '900', marginBottom: '12px', textAlign: 'center' }}>Help & FAQ</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '50px', textAlign: 'center' }}>
          Everything you need to know about NextUpReef.
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
          <h2 style={{ fontSize: '20px', fontWeight: '900', marginBottom: '12px' }}>Need help? Reach out.</h2>
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
            Support • Feedback • Bug Reports • Feature Requests
          </p>
        </div>

        {/* FAQs */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '32px' }}>Frequently Asked Questions</h2>
          <FAQList />
        </div>

        {/* Pro Tips */}
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: '900', marginBottom: '4px' }}>💡 Quick Tips</h2>
          {[
            { tip: "Log 1-2x per week for strong trend data. Increase frequency during new setups or dosing changes." },
            { tip: "Use the +/− buttons to quickly adjust from your last reading — saves time vs typing every digit." },
            { tip: "Set custom target ranges for your specific tank. A mature SPS tank might run tighter alk ranges than the defaults." },
            { tip: "Check your NO3:PO4 ratio on the Analytics page — imbalanced nutrients are a common cause of algae and coral issues." },
          ].map((t, i) => (
            <div key={i} style={{ 
              backgroundColor: 'rgba(255,255,255,0.03)', 
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '16px 20px',
            }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontWeight: '700', fontSize: '14px', margin: 0 }}>
                {t.tip}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
