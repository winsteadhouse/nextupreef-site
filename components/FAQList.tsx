const faqs = [
  {
    q: "What does the big number on Analytics cards mean?",
    a: "It's the most recent reading in the selected time range (1D / 7D / 30D / 60D / 90D).",
  },
  {
    q: "Why is my chart hard to read sometimes?",
    a: "With only a few samples (or very flat readings), trends look subtle. After a few weeks of real logs, it becomes much clearer.",
  },
  {
    q: "Do blank entries get saved as 0?",
    a: "No. Leaving a field blank skips it. (0 only appears if you actually entered 0.)",
  },
  {
    q: "Can I set custom targets?",
    a: "Yes. We show recommended targets for your reef type, and you can set your own custom range (or set min=max for a single target).",
  },
  {
    q: "How do I view every log with date/time?",
    a: "Tap the Analytics card (or 'View logs') to open a structured list of your readings with timestamps.",
  },
  {
    q: "Is my data private?",
    a: "We aim to collect the minimum required to operate the app. See the Privacy Policy for details.",
  },
];

export default function FAQList() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {faqs.map((f, idx) => (
        <details
          key={idx}
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            padding: '24px',
          }}
          open={idx === 0}
        >
          <summary 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              cursor: 'pointer',
              listStyle: 'none',
              fontSize: '18px',
              fontWeight: '900',
              color: 'var(--text-light)',
              lineHeight: '1.4',
            }}
          >
            <span>{f.q}</span>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.05)',
              color: 'var(--reef)',
              fontSize: '20px',
              fontWeight: '900',
              flexShrink: 0,
            }}>
              +
            </span>
          </summary>
          <div style={{
            paddingTop: '16px',
            color: 'var(--text-muted)',
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '1.7',
          }}>
            {f.a}
          </div>
        </details>
      ))}
    </div>
  );
}