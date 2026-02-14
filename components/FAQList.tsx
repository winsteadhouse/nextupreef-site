const faqs = [
  // Getting Started
  {
    category: "Getting Started",
    q: "How do I get started with NextUpReef?",
    a: "When you create an account, a quick 2-step onboarding walks you through naming your first tank, choosing your reef type (Mixed, SPS, LPS, Softies, Nano, or ULNS), entering your display and sump gallons, and selecting which parameters you test. It takes about 30 seconds — then you're ready to start logging.",
  },
  {
    category: "Getting Started",
    q: "How do I add a second tank?",
    a: "Go to the Tank tab, tap 'Edit Tank' or the settings gear, and you'll find the option to add a new tank. Each tank tracks its own parameters, logs, scores, and water changes independently. You can switch between tanks using the dropdown in the top header bar.",
  },
  {
    category: "Getting Started",
    q: "What do the four tabs do?",
    a: "Dashboard — your at-a-glance view with Reef Score, Stability Score, latest parameter values, badges, and personalized recommendations. Tank — manage your tank details, equipment, livestock, dosing products, and water change schedule. Log — enter your test results. Each parameter card shows your target range, last value, and gives real-time color feedback as you type. Analytics — deep dive into trends with interactive charts, time-in-range stats, stability grades, and NO3:PO4 ratio tracking.",
  },

  // Logging
  {
    category: "Logging Parameters",
    q: "How do I log my test results?",
    a: "Tap the Log tab at the bottom. You'll see a card for each parameter you track. Type your value or use the +/− buttons to start from your last reading. You can log one parameter at a time or all at once — whatever fits your workflow. Hit 'Save' and the screen stays put so you can keep entering more. A green 'Saved!' banner confirms each save.",
  },
  {
    category: "Logging Parameters",
    q: "Do I need to enter every parameter each time?",
    a: "No. Leave any field blank and it's simply skipped — blank fields are never saved as zero. This way you can log alkalinity now, come back in 10 minutes to log calcium, and both values are tracked separately with their own timestamps.",
  },
  {
    category: "Logging Parameters",
    q: "What does 'Last:' mean on each parameter card?",
    a: "It shows the most recent value you logged for that specific parameter, along with how long ago it was logged (e.g. '3h ago', 'yesterday'). This is pulled from your last 20 logs, so even if you log params individually across multiple sessions, each one remembers its own last value.",
  },
  {
    category: "Logging Parameters",
    q: "What do the colors mean when I'm typing a value?",
    a: "Green means your value is within your target range. Yellow means you're close to the boundary — not quite in range but not far off. Red means you're clearly outside your target. The card border, input field, and indicator all change in real time as you type.",
  },
  {
    category: "Logging Parameters",
    q: "How often should I log?",
    a: "For established tanks, 1-2 times per week gives strong trend data. During new setups, after adding livestock, or when making dosing adjustments, daily logging helps you spot changes faster. Your Stability Score rewards consistent testing frequency.",
  },

  // Custom Targets
  {
    category: "Custom Targets & Ranges",
    q: "Can I set custom target ranges?",
    a: "Yes. On the Log screen, tap 'Edit' (pencil icon) to open the parameter editor. Each parameter shows the recommended range for your reef type, and you can set your own custom min and max. Your custom targets are used everywhere — Log, Dashboard, and Analytics all respect them.",
  },
  {
    category: "Custom Targets & Ranges",
    q: "What are the default ranges based on?",
    a: "Default ranges are set based on your tank type. For example, SPS tanks have tighter alkalinity and calcium ranges than soft coral tanks, and ULNS systems have lower nutrient targets. You can always override them with custom values.",
  },
  {
    category: "Custom Targets & Ranges",
    q: "How do I add or remove parameters I track?",
    a: "On the Log screen, tap 'Edit' to open the parameter editor. Toggle parameters on or off — recommended ones are marked with 'REC'. The 6 core parameters (Alkalinity, Calcium, Magnesium, Nitrate, Phosphate, Salinity) are recommended for all reef types. pH, Temperature, and Ammonia are optional.",
  },

  // Dashboard & Scores
  {
    category: "Dashboard & Scores",
    q: "What is the Reef Score?",
    a: "Your Reef Score (0-100) is a composite measure of your tank's overall health based on how well your parameters stay within target ranges. It factors in recency of logs, parameter balance, water change consistency, equipment diversity, and tank maturity. Tap the score card for a full breakdown.",
  },
  {
    category: "Dashboard & Scores",
    q: "What is the Stability Score?",
    a: "The Stability Score (0-100) measures how consistent your parameters are over time. Low variation in key readings like alkalinity and calcium earns a higher score. It rewards steady husbandry over chasing 'perfect' numbers — a tank that's consistently at 8.0 dKH scores better than one swinging between 7.5 and 9.0.",
  },
  {
    category: "Dashboard & Scores",
    q: "What does the 'Latest Parameters' section show?",
    a: "It shows the most recent value for each parameter you've logged, pulled across all your recent entries. So if you logged alkalinity yesterday and calcium today, both appear. Each value shows a green/yellow/red dot based on your target range and a timestamp showing when it was last logged. You'll also see counts of how many logs you made today and in the last 7 days.",
  },
  {
    category: "Dashboard & Scores",
    q: "What are Badges?",
    a: "Badges are achievements you earn based on your reefkeeping activity — like logging your first test, maintaining a streak, tracking water changes, or reaching certain scores. Badges are tied to your account (not a specific tank), so they carry across all your tanks.",
  },

  // Analytics
  {
    category: "Analytics",
    q: "What does the big number on Analytics cards mean?",
    a: "It's the most recent reading for that parameter. Below it you'll see trend direction (up/down/stable), standard deviation, time-in-range percentage, and a stability grade. Tap any parameter card to expand the full chart view.",
  },
  {
    category: "Analytics",
    q: "What is 'Time in Range'?",
    a: "The percentage of your logged values that fall within your target range over the selected time period. 80%+ is considered good. This uses your custom targets if you've set them.",
  },
  {
    category: "Analytics",
    q: "What is the NO3:PO4 ratio?",
    a: "The ratio between your nitrate and phosphate levels, which is important for coral coloration and algae control. The ideal range is roughly 100:1 for most reef tanks. The Analytics page tracks this ratio over time and shows whether it's balanced, NO3-dominant, or PO4-dominant.",
  },
  {
    category: "Analytics",
    q: "Why is my chart hard to read sometimes?",
    a: "With only a few data points or very flat readings, trends can look subtle. After a few weeks of consistent logging, charts become much more useful. The target range is shown as a green shaded zone on each chart for reference.",
  },

  // Tank Management
  {
    category: "Tank Management",
    q: "What can I track on the Tank page?",
    a: "The Tank tab is your tank's profile. You can manage your equipment list (skimmers, lights, pumps, reactors), livestock inventory (fish, corals, invertebrates), dosing products, and water change schedule. Tank age is calculated from your setup date and displayed at the top.",
  },
  {
    category: "Tank Management",
    q: "How do water change reminders work?",
    a: "On the Tank page, you can set your water change schedule (frequency and percentage). The app tracks when you last did a water change and shows a status indicator — green if you're on schedule, yellow if it's coming due, red if overdue. Logging water changes also factors into your Reef Score.",
  },
  {
    category: "Tank Management",
    q: "Can I edit my tank name, size, or type after setup?",
    a: "Yes. Go to the Tank tab, tap 'Edit Tank', and you can update your tank name, display gallons, sump gallons, tank type, and setup date at any time.",
  },

  // Account & Privacy
  {
    category: "Account & Privacy",
    q: "Is my data private?",
    a: "Yes. Your tank data is tied to your account and only visible to you. We collect the minimum data required to operate the app. See our Privacy Policy for full details.",
  },
  {
    category: "Account & Privacy",
    q: "Can I delete my account?",
    a: "Yes. Go to Settings (gear icon in the header) and scroll to the bottom. 'Delete Account' will permanently remove all your tanks, logs, equipment, livestock, and badge data. This cannot be undone.",
  },
  {
    category: "Account & Privacy",
    q: "How do I change my password or display name?",
    a: "In Settings, tap 'Change Password' to receive a reset link via email. Your display name can be edited directly at the top of the Settings page — tap 'Edit' next to your name.",
  },
];

// Group FAQs by category
const categories = [...new Set(faqs.map(f => f.category))];

export default function FAQList() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      {categories.map((cat) => (
        <div key={cat}>
          <h3 style={{
            fontSize: '14px',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: 'var(--reef)',
            marginBottom: '16px',
          }}>
            {cat}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.filter(f => f.category === cat).map((f, idx) => (
              <details
                key={idx}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  padding: '24px',
                }}
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
        </div>
      ))}
    </div>
  );
}
