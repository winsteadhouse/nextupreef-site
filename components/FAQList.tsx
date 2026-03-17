const faqs = [
  // ── Getting Started ──────────────────────────────────────────
  {
    category: "Getting Started",
    q: "How do I get started with NextUpReef?",
    a: "When you create an account, a quick 2-step onboarding walks you through setting your display name, naming your first tank, choosing your reef type (Mixed, SPS, LPS, Softies, Nano, ULNS, or Fish Only), entering your display and sump gallons, and selecting which parameters you test. It takes about 30 seconds — then you're ready to start logging.",
  },
  {
    category: "Getting Started",
    q: "What is a display name and who can see it?",
    a: "Your display name is the name shown on your public community profile — for example 'Adam' or 'ReefKeeper42'. It's set during onboarding and can be changed at any time in Settings. Your display name is visible to other reefers in the Community feed alongside your tank's scores, parameters, photos, and dosing info. If you'd rather not appear in the community, you can opt out per-tank at any time.",
  },
  {
    category: "Getting Started",
    q: "How do I add a second tank?",
    a: "Go to the Tank tab, tap the + button in the top header, and fill in your new tank details. Each tank tracks its own parameters, logs, scores, water changes, and reminders independently. You can switch between tanks using the dropdown in the top header bar.",
  },
  {
    category: "Getting Started",
    q: "What do the five tabs do?",
    a: "Dashboard — your at-a-glance view with Reef Score, Stability Score, latest parameter values, upcoming reminders, badges, and personalized recommendations. Tank — manage your tank details, equipment, livestock, dosing products, and monthly photos. Log — enter your test results with real-time color feedback. Reminders — set up water change schedules and maintenance tasks with push notification alerts. Analytics — deep dive into trends with interactive charts, time-in-range stats, stability grades, and NO3:PO4 ratio tracking.",
  },

  // ── Logging ──────────────────────────────────────────────────
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

  // ── Custom Targets ───────────────────────────────────────────
  {
    category: "Custom Targets & Ranges",
    q: "Can I set custom target ranges?",
    a: "Yes. On the Log screen, tap 'Edit' (pencil icon) to open the parameter editor. Each parameter shows the recommended range for your reef type, and you can set your own custom min and max. Your custom targets are used everywhere — Log, Dashboard, and Analytics all respect them.",
  },
  {
    category: "Custom Targets & Ranges",
    q: "What are the default ranges based on?",
    a: "Default ranges are set based on your tank type. SPS tanks have tighter alkalinity and calcium ranges than soft coral tanks, ULNS systems have lower nutrient targets, and Fish Only tanks have more relaxed ranges across the board. You can always override them with custom values.",
  },
  {
    category: "Custom Targets & Ranges",
    q: "How do I add or remove parameters I track?",
    a: "On the Log screen, tap 'Edit' to open the parameter editor. Toggle parameters on or off — recommended ones are marked with 'REC'. The 6 core parameters (Alkalinity, Calcium, Magnesium, Nitrate, Phosphate, Salinity) are recommended for all reef types. pH, Temperature, Nitrite, and Ammonia are optional.",
  },

  // ── Reminders ────────────────────────────────────────────────
  {
    category: "Reminders & Notifications",
    q: "How do I set up water change reminders?",
    a: "Go to the Reminders tab and tap 'Set Up Water Changes'. Choose your frequency (Weekly, Biweekly, or Monthly), select which day of the week, and enter your water change percentage. The app tracks when you last did a water change and shows status cards — overdue, due today, or upcoming.",
  },
  {
    category: "Reminders & Notifications",
    q: "What are maintenance reminders?",
    a: "Maintenance reminders track recurring tasks like changing filter socks, replacing carbon, swapping RO/DI filters, cleaning equipment, and more. Choose from quick-add presets or create your own custom reminders with any name and frequency. When adding a reminder, pick 'Just did it' to start the timer from now, or 'It's due on...' to set a specific next-due date.",
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
    a: "Yes. Any reminders that are overdue, due today, or coming up this week appear as a callout on your Dashboard. Tap it to jump straight to the Reminders tab.",
  },

  // ── Dashboard & Scores ───────────────────────────────────────
  {
    category: "Dashboard & Scores",
    q: "What is the Reef Score?",
    a: "Your Reef Score (0-100) is a composite measure of your tank's overall health based on how well your parameters stay within target ranges. It factors in recency of logs, parameter balance, water change consistency, equipment diversity, and tank maturity. Tap the score card for a full breakdown.",
  },
  {
    category: "Dashboard & Scores",
    q: "What is the Stability Score?",
    a: "The Stability Score (0-100) measures how consistent your parameters are over time. Low variation in key readings like alkalinity and calcium earns a higher score. It rewards steady husbandry over chasing 'perfect' numbers — a tank consistently at 8.0 dKH scores better than one swinging between 7.5 and 9.0.",
  },
  {
    category: "Dashboard & Scores",
    q: "How does peer comparison work?",
    a: "Your scores are compared against other tanks of the same type (Mixed, SPS, LPS, etc.). You'll see your rank like '#1 of 5 Mixed Reef tanks', the community average score, and how your testing habits compare. Only tanks that are set to public participate in rankings.",
  },
  {
    category: "Dashboard & Scores",
    q: "What are Badges?",
    a: "Badges are achievements you earn based on your reefkeeping activity — like logging your first test, maintaining a streak, completing water changes, uploading monthly tank photos, or hitting score milestones. There are 60+ badges across multiple categories including Milestones, Mastery, Consistency, and Community. Badges are tied to your account, not a specific tank.",
  },

  // ── Tank Photos ──────────────────────────────────────────────
  {
    category: "Tank Photos",
    q: "How do tank photos work?",
    a: "On the Tank tab, you'll find a photo section where you can upload one photo per month to document your reef's growth. Each month gets its own slot — nothing from previous months is ever overwritten unless you choose to replace it. Over time you build a full visual growth timeline of your reef.",
  },
  {
    category: "Tank Photos",
    q: "How often can I upload a new photo?",
    a: "Once per month. After uploading your photo for the current month, the button changes to show when the next upload slot opens (the 1st of the following month). You can replace your current month's photo any time before the month ends.",
  },
  {
    category: "Tank Photos",
    q: "Can I delete a photo?",
    a: "Yes. Tap 'History' on the photo section of your Tank tab to view all your monthly photos. Each one has a Delete option. Deleted photos are removed permanently and cannot be recovered.",
  },
  {
    category: "Tank Photos",
    q: "Are my tank photos visible to other users?",
    a: "Only if your tank is set to public in the Community feed. If your tank is public, your most recent photo and full monthly growth timeline are visible on your community profile. You can opt out by setting your tank to private — go to the Tank tab and toggle 'Show in Community' off, or go to Settings and use 'Hide All' under Community.",
  },
  {
    category: "Tank Photos",
    q: "Are there photo badges?",
    a: "'First Snapshot' is awarded when you upload your first tank photo. 'Photo Historian' is awarded when you upload a photo every month for 12 consecutive months. Both show on your profile and community card.",
  },

  // ── Community Feed ───────────────────────────────────────────
  {
    category: "Reef Community",
    q: "What is the Reef Community feed?",
    a: "The Community feed is an in-app leaderboard showing public tanks ranked by their combined Reef + Stability score. You can browse other reefers' tanks, see their parameter readings, photos, dosing regimens, water change habits, and livestock counts. It's a way to learn from what's working in real tanks.",
  },
  {
    category: "Reef Community",
    q: "What information is visible on my community profile?",
    a: "When your tank is public, other reefers can see: your display name, tank name, tank type, size (display and sump gallons), setup date, Reef Score, Stability Score, most recent parameter readings, salt mix brand, dosing products, water change schedule, livestock count, badge count, and monthly photo history.",
  },
  {
    category: "Reef Community",
    q: "Is my tank public by default?",
    a: "Yes — new tanks are public by default so the community leaderboard stays active and useful for everyone. You can opt out at any time with one tap. Your email address, password, and personal account information are never shared publicly — only the reef data listed above.",
  },
  {
    category: "Reef Community",
    q: "How do I opt out of the community feed?",
    a: "Two ways. Per-tank: go to the Tank tab, scroll to the 'Reef Community' row, and toggle 'Show in Community' off. For all tanks at once: go to Settings, scroll to the Community section, and tap 'Hide All'. Your data is removed from the public feed immediately.",
  },
  {
    category: "Reef Community",
    q: "Can I see other users' full analytics?",
    a: "Yes — tap any tank card in the Community feed to open its full detail view. You'll see 90-day parameter averages, min/max ranges, % time in range, recent values, dosing regimen, water change schedule, and monthly photo timeline.",
  },
  {
    category: "Reef Community",
    q: "How is the leaderboard ranked?",
    a: "Tanks are ranked by combined score — the average of Reef Score and Stability Score. Only tanks that have logged at least one parameter in the past 365 days and are set to public appear. Rankings update after every log.",
  },

  // ── Analytics ────────────────────────────────────────────────
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
    a: "The ratio between your nitrate and phosphate levels. The ideal range is roughly 100:1 for most reef tanks. The Analytics page tracks this ratio over time and shows whether it's balanced, NO3-dominant, or PO4-dominant.",
  },

  // ── Tank Management ──────────────────────────────────────────
  {
    category: "Tank Management",
    q: "What can I track on the Tank page?",
    a: "Equipment list (skimmers, lights, pumps, reactors), livestock inventory (fish, corals, invertebrates), dosing products, salt mix brand, water change schedule, and monthly growth photos. Tank age is calculated from your setup date and displayed at the top.",
  },
  {
    category: "Tank Management",
    q: "What tank types are supported?",
    a: "NextUpReef supports 7 tank types: Mixed Reef, SPS, LPS, Softies, Nano, ULNS, and Fish Only. Each has tailored default parameter ranges and scoring targets. You can change your tank type at any time in Edit Tank.",
  },
  {
    category: "Tank Management",
    q: "Can I edit my tank name, size, or type after setup?",
    a: "Yes. Go to the Tank tab, tap 'Edit Tank', and you can update your tank name, display gallons, sump gallons, tank type, salt mix brand, and setup date at any time.",
  },

  // ── Account & Privacy ────────────────────────────────────────
  {
    category: "Account & Privacy",
    q: "What information is always private?",
    a: "Your email address, password, and account credentials are always private and never shared. Your reef data is shared publicly only if your tank is set to public in the Community feed. You can opt out per-tank or for all tanks at any time.",
  },
  {
    category: "Account & Privacy",
    q: "Can I delete my account?",
    a: "Yes. Go to Settings and scroll to the bottom. 'Delete Account' will permanently remove all your tanks, logs, equipment, livestock, reminders, photos, and badge data. This cannot be undone.",
  },
  {
    category: "Account & Privacy",
    q: "How do I change my password or display name?",
    a: "In Settings, tap 'Change Password' to receive a reset link via email. Your display name can be edited directly at the top of the Settings page — tap 'Edit' next to your name. Remember, your display name is visible to other reefers if your tank is public.",
  },
  {
    category: "Account & Privacy",
    q: "Will my email be used for marketing?",
    a: "By agreeing to our Terms of Service when creating your account, you acknowledge that your email may be used to send product updates, reef tips, and occasional announcements from NextUpReef. You can unsubscribe from any marketing email at any time. We never sell your email to third parties.",
  },
  {
    category: "Account & Privacy",
    q: "Is NextUpReef really free?",
    a: "Yes. NextUpReef is completely free with no subscription, no in-app purchases, and no paywalls. All features including the Community feed are available to every user.",
  },
];

const categories = [...new Set(faqs.map(f => f.category))];

export default function FAQList() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      {categories.map((cat) => (
        <div key={cat}>
          <h3 style={{
            fontSize: "14px",
            fontWeight: "900",
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "var(--reef)",
            marginBottom: "16px",
          }}>
            {cat}
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqs.filter(f => f.category === cat).map((f, idx) => (
              <details
                key={idx}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "24px",
                }}
              >
                <summary style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  cursor: "pointer",
                  listStyle: "none",
                  fontSize: "18px",
                  fontWeight: "900",
                  color: "var(--text-light)",
                  lineHeight: "1.4",
                }}>
                  <span>{f.q}</span>
                  <span style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.05)",
                    color: "var(--reef)",
                    fontSize: "20px",
                    fontWeight: "900",
                    flexShrink: 0,
                  }}>
                    +
                  </span>
                </summary>
                <div style={{
                  paddingTop: "16px",
                  color: "var(--text-muted)",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "1.7",
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