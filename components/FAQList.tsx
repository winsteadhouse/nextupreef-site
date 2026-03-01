const faqs = [
  // Getting Started
  {
    category: "Getting Started",
    q: "How do I get started with NextUpReef?",
    a: "When you create an account, a quick 2-step onboarding walks you through naming your first tank, choosing your reef type (Mixed, SPS, LPS, Softies, Nano, ULNS, or Fish Only), entering your display and sump gallons, and selecting which parameters you test. It takes about 30 seconds — then you're ready to start logging.",
  },
  {
    category: "Getting Started",
    q: "How do I add a second tank?",
    a: "Go to the Tank tab, tap 'Edit Tank' or the settings gear, and you'll find the option to add a new tank. Each tank tracks its own parameters, logs, scores, water changes, and reminders independently. You can switch between tanks using the dropdown in the top header bar.",
  },
  {
    category: "Getting Started",
    q: "What do the five tabs do?",
    a: "Dashboard — your at-a-glance view with Reef Score, Stability Score, latest parameter values, upcoming reminders, badges, and personalized recommendations. Tank — manage your tank details, equipment, livestock, and dosing products. Log — enter your test results with real-time color feedback. Reminders — set up water change schedules and maintenance tasks with push notification alerts. Analytics — deep dive into trends with interactive charts, time-in-range stats, stability grades, and NO3:PO4 ratio tracking.",
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
    q: "Can I backdate or edit a log entry?",
    a: "Yes. When logging, you can change the date to backdate an entry — useful if you forgot to log yesterday's test. You can also edit or delete previous log entries from the log history.",
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
    q: "What parameters can I track?",
    a: "NextUpReef supports 10 parameters: Alkalinity (dKH), Calcium (ppm), Magnesium (ppm), Nitrate (ppm), Nitrite (ppm), Phosphate (ppm), Salinity, pH, Temperature (°F), and Ammonia (ppm). You choose which ones to display based on what you test.",
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
    a: "Default ranges are set based on your tank type. For example, SPS tanks have tighter alkalinity and calcium ranges than soft coral tanks, ULNS systems have lower nutrient targets, and Fish Only tanks have more relaxed ranges across the board. You can always override them with custom values.",
  },
  {
    category: "Custom Targets & Ranges",
    q: "How do I add or remove parameters I track?",
    a: "On the Log screen, tap 'Edit' to open the parameter editor. Toggle parameters on or off — recommended ones are marked with 'REC'. The 6 core parameters (Alkalinity, Calcium, Magnesium, Nitrate, Phosphate, Salinity) are recommended for all reef types. pH, Temperature, Nitrite, and Ammonia are optional.",
  },

  // Reminders & Notifications
  {
    category: "Reminders & Notifications",
    q: "How do I set up water change reminders?",
    a: "Go to the Reminders tab and tap 'Set Up Water Changes'. Choose your frequency (Weekly, Biweekly, or Monthly), select which day of the week, and enter your water change percentage. The app tracks when you last did a water change and shows status cards — overdue, due today, or upcoming.",
  },
  {
    category: "Reminders & Notifications",
    q: "What are maintenance reminders?",
    a: "Maintenance reminders track recurring tasks like changing filter socks, replacing carbon, swapping RO/DI filters, cleaning equipment, and more. Choose from 7 quick-add presets or create your own custom reminders with any name, icon, and frequency. When adding a reminder, you can pick 'Just did it' to start the timer from now, or 'It's due on...' to set a specific next-due date.",
  },
  {
    category: "Reminders & Notifications",
    q: "How do push notifications work?",
    a: "NextUpReef sends three types of push notifications: Testing reminders (if you haven't logged in X days — you choose the interval), Water change alerts (day before, day of, and overdue), and Maintenance alerts (day before, day of, and overdue). You can toggle each type on or off in Settings under Notifications.",
  },
  {
    category: "Reminders & Notifications",
    q: "How do I mark a reminder as done?",
    a: "On the Reminders tab, tap the green 'Done' button on any reminder card. It logs the completion, awards relevant badges, and automatically calculates the next due date based on your frequency. You can also tap '+1 Day' to snooze a reminder.",
  },
  {
    category: "Reminders & Notifications",
    q: "Do reminders show on the Dashboard?",
    a: "Yes. Any reminders that are overdue, due today, or coming up this week appear as a callout on your Dashboard between the suggestions and parameter cards. Tap it to jump straight to the Reminders tab.",
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
    q: "How does peer comparison work?",
    a: "Your scores are compared against other tanks of the same type (Mixed, SPS, LPS, etc.). With fewer than 20 tanks in your pool, you'll see a rank like '#1 of 5'. As more reefers join, it switches to percentile rankings like 'Top 10%'. Peer averages and your position are shown on distribution bars.",
  },
  {
    category: "Dashboard & Scores",
    q: "What are Badges?",
    a: "Badges are achievements you earn based on your reefkeeping activity — like logging your first test, maintaining a streak, completing water changes, hitting score milestones, or rescuing a troubled tank. There are 63 badges across 11 categories. Badges are tied to your account (not a specific tank), so they carry across all your tanks.",
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

  // Tank Management
  {
    category: "Tank Management",
    q: "What can I track on the Tank page?",
    a: "The Tank tab is your tank's profile. You can manage your equipment list (skimmers, lights, pumps, reactors), livestock inventory (fish, corals, invertebrates), and dosing products. Tank age is calculated from your setup date and displayed at the top.",
  },
  {
    category: "Tank Management",
    q: "What tank types are supported?",
    a: "NextUpReef supports 7 tank types: Mixed Reef, SPS, LPS, Softies, Nano, ULNS, and Fish Only. Each type has tailored default parameter ranges and scoring targets. You can change your tank type at any time in Edit Tank.",
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
    a: "Yes. Go to Settings (gear icon in the header) and scroll to the bottom. 'Delete Account' will permanently remove all your tanks, logs, equipment, livestock, reminders, and badge data. This cannot be undone.",
  },
  {
    category: "Account & Privacy",
    q: "How do I change my password or display name?",
    a: "In Settings, tap 'Change Password' to receive a reset link via email. Your display name can be edited directly at the top of the Settings page — tap 'Edit' next to your name.",
  },
  {
    category: "Account & Privacy",
    q: "Is NextUpReef really free?",
    a: "Yes. NextUpReef is completely free with no subscription, no ads, and no paywalls. All features are available to every user.",
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