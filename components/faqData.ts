// FAQ content for /faq. Every answer was checked against the NextUpReef mobile app code.
// Plain text only (no markdown or HTML); answers feed the FAQPage schema as-is.

export type Faq = { q: string; a: string };
export type FaqCategory = { id: string; title: string; blurb: string; faqs: Faq[] };

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "getting-started",
    title: "Getting started",
    blurb: "Set up your first tank and find your way around the app.",
    faqs: [
      {
        q: "What is NextUpReef?",
        a: "NextUpReef is a free reef tank app for iOS and Android. You log your water tests, see them against targets for your tank type, track water changes, dosing and maintenance, and get a Reef Score and Stability Score for your tank. NextUpReef Pro adds AI tools, controller integrations, multiple tanks and full history.",
      },
      {
        q: "How do I get started?",
        a: "After you create an account, a two-step setup asks for your first name, a tank name, your tank type, display gallons, and optionally your sump size and refugium. Step two asks when you started the tank and which parameters you test. It takes about 30 seconds, and then the app offers the optional New Tank Guide.",
      },
      {
        q: "What do the five tabs do?",
        a: "Home is your at-a-glance view: greeting, live vitals if you have a controller, today's doses, your Next Up action, scores and upcoming reminders. My Reef holds your tank profile, monthly photo, livestock, equipment, dosing and lights. Log is where you enter test results. Reef Pulse shows your scores, parameters and trend charts, and Community is the public leaderboard of reef tanks.",
      },
      {
        q: "Where are Reminders, Dosing and Settings?",
        a: "Tap the menu icon at the top left for Dosing, Reminders & Alerts, devices, the Reef AI tools, Achievements and Settings. The bell icon in the top bar also opens Reminders and shows a count of anything overdue, and the gear icon opens Settings.",
      },
      {
        q: "What tank types are supported?",
        a: "Mixed Reef, SPS Dominant, LPS Dominant, Softies, Nano, ULNS, Fish Only, Quarantine and Frag Tank. Your tank type sets the default target ranges and how the scores judge your parameters. The first-tank setup offers the first seven; Quarantine and Frag Tank are available when you add or edit a tank.",
      },
      {
        q: "How do I add, switch or edit tanks?",
        a: "Open the menu and tap Add Tank. Multiple tanks are a Pro feature; the free plan includes one tank. To switch, tap the tank name at the top of the screen. To change a tank's name, type, size, refugium, salt mix or setup date, tap the pencil icon on your tank card in My Reef.",
      },
    ],
  },
  {
    id: "nextupreef-pro",
    title: "NextUpReef Pro",
    blurb: "What's free, what Pro adds, and how the trial and billing work.",
    faqs: [
      {
        q: "Is NextUpReef really free?",
        a: "Yes. The free plan includes one tank, parameter logging with color-coded targets, Reef and Stability Scores, Reef Pulse charts for up to 90 days, a water change schedule, up to 3 maintenance reminders, the Dosing screen for logging doses, the New Tank Guide, monthly tank photos and the Community leaderboard.",
      },
      {
        q: "What does Pro add?",
        a: "Pro adds the Reef AI Advisor, Reef AI Chat, Stocking Advisor and AI photo logging, the Tank Journal, multiple tanks, chart history beyond 90 days, unlimited reminders, the dose calculator and daily dosing reminder, Neptune Apex, CoralVue HYDROS and Shelly smart outlet integrations, deeper Community Insights and the web dashboard.",
      },
      {
        q: "How much does Pro cost?",
        a: "Pro is $4.99 a month or $39.99 a year. The yearly plan works out to about $3.33 a month, a 33% saving over paying monthly.",
      },
      {
        q: "How does the 30-day free trial work?",
        a: "Every new account gets full Pro access free for 30 days, with no credit card required. A banner in the app counts down the days left and lets you upgrade whenever you're ready.",
      },
      {
        q: "What happens when my trial ends?",
        a: "Your account moves to the free plan and Pro features lock until you subscribe. Nothing is deleted: if you created more than one tank, your first tank stays active and the others are kept but locked, and reminders beyond the free limit of 3 are kept but locked too. Because the trial never asks for payment details, nothing is charged when it ends.",
      },
      {
        q: "How do I cancel or restore my subscription?",
        a: "Subscriptions are billed and managed through the App Store or Google Play, so you cancel in your store account's subscription settings; they renew unless cancelled at least 24 hours before the period ends. On a new phone, sign in, open the upgrade screen from Settings and tap Restore Purchases.",
      },
    ],
  },
  {
    id: "logging-targets",
    title: "Logging & targets",
    blurb: "Entering test results, reading the colors and setting your own ranges.",
    faqs: [
      {
        q: "How do I log my test results?",
        a: "Open the Log tab. Each parameter you track has its own card showing your last value: type a new one, or use the + and - buttons to start from it. Leave any field blank to skip it (blanks are never saved as zero), then tap Save.",
      },
      {
        q: "Which parameters can I track?",
        a: "Alkalinity (dKH), calcium, magnesium, nitrate, phosphate, salinity, pH, temperature (F), ammonia and nitrite. Salinity can be logged as specific gravity (SG) or PPT. ORP is not a logged parameter.",
      },
      {
        q: "What do the colors mean while I type?",
        a: "Each card is checked against your tank's target the moment you type. Green means in range, amber means just outside it, and red means well outside it, and a small tag tells you whether you're Low or High. If a value looks like a typo, such as alkalinity entered in ppm instead of dKH, the app asks before saving.",
      },
      {
        q: "Can I backdate or edit a log?",
        a: "Yes. Tap Log Previous on the Log tab to enter a test from an earlier date. Tap View History to see past logs: tap one to edit it, or swipe or long-press to delete it.",
      },
      {
        q: "How do I set custom targets or change what I track?",
        a: "On the Log tab, tap Edit. Tap a parameter to add or remove it, tap Set custom target to enter your own min and max (or Use recommended to go back), and switch salinity between SG and PPT. The six core parameters, alkalinity, calcium, magnesium, nitrate, phosphate and salinity, are recommended because the scores are built on them.",
      },
      {
        q: "What are the default ranges based on?",
        a: "Your tank type. For example, a mixed reef defaults to alkalinity 8.0-9.5 dKH, calcium 400-450 ppm and nitrate 2-10 ppm, while a ULNS tank targets nitrate 1-5 ppm and phosphate 0.02-0.05 ppm. You can override any of them with custom targets.",
      },
      {
        q: "What is the Tank Journal?",
        a: "The Tank Journal is a Pro feature for dated notes with photos about your reef. Open it from the Journal button on the Log tab or the Journal card on Home. Journal entries are private and never shown on your community profile.",
      },
    ],
  },
  {
    id: "scores-analytics",
    title: "Scores & analytics",
    blurb: "How the Reef Score and Stability Score work, and what Reef Pulse shows.",
    faqs: [
      {
        q: "What is the Reef Score?",
        a: "The Reef Score (0-100) measures overall tank health. 40% is how close your core six parameters sit to your tank type's targets, with alkalinity weighted most, and the rest is split evenly between maintenance (water changes), testing (how recently and regularly you test), setup (livestock, equipment, dosing and lighting logged) and tank maturity.",
      },
      {
        q: "What is the Stability Score?",
        a: "The Stability Score (0-100) measures consistency. 45% is how little your core parameters swing, with recent readings counting more, 20% is testing on a regular interval, 15% is keeping water changes on a steady schedule, and 20% checks for parameters drifting steadily toward or out of range over three weeks or more. A tank that holds 8.0 dKH scores better than one bouncing between 7.5 and 9.0.",
      },
      {
        q: "How often do the scores update?",
        a: "Both scores are recalculated nightly. When you only have a little data, the scoring uses neutral middle values instead of punishing a new tank.",
      },
      {
        q: "How can I raise my scores?",
        a: "Log the core six together, test on a steady weekly rhythm, and keep alkalinity steady above everything else. Do regular 10-25% water changes and mark them done, set the correct tank type, fill in your livestock and equipment, and keep logging, since maturity and stability both reward time.",
      },
      {
        q: "What is Reef Pulse?",
        a: "Reef Pulse is the tab for your tank's health at a glance: your Reef Score, Stability Score, the share of parameters in range, then a trend chart for each parameter with your target band and water change markers drawn in. Free accounts can view 7, 30 and 90 days; Pro unlocks 6 months, 1 year and all history.",
      },
      {
        q: "What do the numbers on a Reef Pulse chart card mean?",
        a: "The big number is your most recent reading. The card also shows a Stable, Variable or Unstable tag, your target, In range (the share of readings inside your target for the selected period), the average, and for alkalinity, calcium and magnesium an estimate of daily use. Tap a card to see the individual logs.",
      },
      {
        q: "What is the NO3:PO4 ratio card?",
        a: "If you track both nitrate and phosphate, Reef Pulse divides your latest nitrate by your latest phosphate and compares it to a 50-160:1 target. It labels the result Balanced, NO3 dominant or PO4 dominant, with a short tip on what to adjust.",
      },
    ],
  },
  {
    id: "dosing",
    title: "Dosing",
    blurb: "Logging doses, the product catalog, the dose calculator and dosing reminders.",
    faqs: [
      {
        q: "What is the Dosing screen?",
        a: "The Dosing screen is free for every account; open it from the menu. It puts everything due today in one list, whether you dose by hand, with your own pump, or with a Shelly plug or Apex outlet. It also shows your alk, calcium and magnesium balance, your products, recent doses and the dose calculator.",
      },
      {
        q: "How do I log a dose?",
        a: "On the Dosing screen, tap Dosed next to a product that is due. Products you dose only as needed have a Log dose button instead. Products set to every few days appear on the day they are due, and you can tap a dose in Recent doses to remove it if you logged it by mistake.",
      },
      {
        q: "How do I add a dosing product?",
        a: "Tap + on the Dosing screen and search the catalog of 50+ common products from brands like Red Sea, Seachem, Brightwell, Tropic Marin, BRS, ESV, Fritz and Aquaforest, plus basics like baking soda and kalkwasser. Known strengths are filled in for you. Then pick which bottle it is, how it's dosed and how often (daily, every few days or as needed), and enter the amount.",
      },
      {
        q: "What does the alk, calcium and magnesium balance show?",
        a: "It looks at your tests from the last three weeks and tells you whether each parameter is steady, rising or falling, and by how much per day. Small wobbles that are just test noise are filtered out, and it needs at least three tests before it shows a trend.",
      },
      {
        q: "How does the dose calculator's Dial in mode work?",
        a: "Dial in (Pro) suggests a new daily dose from your own test trend since you last changed the dose. It needs at least 3 tests over at least 4 days since that change, otherwise it asks you to retest first. It never changes a dose by more than 30% in one step, so you retest and run it again.",
      },
      {
        q: "How does the Fix a low reading mode work?",
        a: "Fix (Pro) works out how much product it takes to raise a low reading to your target, then spreads it over as many days as needed so no day goes past a safe rise: 1 dKH of alkalinity, 25 ppm of calcium or 100 ppm of magnesium per day. Kalkwasser isn't offered for corrections because it is too slow and raises pH too much.",
      },
      {
        q: "Can the app remind me to dose?",
        a: "Yes, with Pro. In Reminders & Alerts, turn on the daily dosing reminder for a tank and pick the hour. You get one push a day listing the hand doses still due, and nothing is sent if you've already logged everything.",
      },
    ],
  },
  {
    id: "reminders-notifications",
    title: "Reminders & notifications",
    blurb: "Water change schedules, maintenance tasks and when push notifications arrive.",
    faqs: [
      {
        q: "How do I set up water change reminders?",
        a: "Open Reminders & Alerts and tap Set Up Water Changes. Choose Weekly, Every 2 Weeks or Monthly, pick the day, and enter the percentage you change. The app then shows whether your next change is upcoming, due today or overdue.",
      },
      {
        q: "How do I mark a reminder as done?",
        a: "Tap Done on the reminder card and the next due date is calculated from its frequency. Marking a water change done logs it, and it shows as a marker on your Reef Pulse charts. Tap +1 Day to push a reminder back a day.",
      },
      {
        q: "What are maintenance reminders?",
        a: "Recurring tasks like filter socks, carbon or GFO, the skimmer cup, RO/DI filters and membrane, powerheads and refractometer calibration. Pick a preset or make your own, then choose Just did it to start the timer now or It's due on to pick a date. Free accounts can have up to 3 maintenance reminders; Pro is unlimited.",
      },
      {
        q: "What push notifications does the app send?",
        a: "Testing reminders if you haven't logged a test within 3 days, a week, 2 weeks or a month (your choice), water change and maintenance reminders the day before, the day they're due and when overdue, and Missed Dose Alerts if a smart-plug doser stops dosing. Turn each type on or off in Settings under Notifications.",
      },
      {
        q: "What are notification hours?",
        a: "In Settings under Notifications, set a start hour (6 to 10 am) and an end hour (5 to 9 pm). Testing, water change and maintenance reminders are only delivered inside that window; one that comes due outside it waits until you're back inside. The daily dosing reminder arrives at the hour you choose for it, and Missed Dose Alerts go out when a problem is detected.",
      },
    ],
  },
  {
    id: "ai-features",
    title: "AI features",
    blurb: "The Reef AI Advisor, Reef AI Chat, Stocking Advisor and AI photo logging.",
    faqs: [
      {
        q: "What AI features does NextUpReef have?",
        a: "Four, all part of Pro: the Reef AI Advisor (a full analysis of your tank), Reef AI Chat (questions about your tank), the Stocking Advisor (livestock compatibility) and AI photo logging, which reads your test results from a photo.",
      },
      {
        q: "What does the Reef AI Advisor do?",
        a: "It reviews your tank's own data, including recent parameters and trends, water changes, livestock, equipment, dosing, lighting and maintenance, and gives you what's going well, what to watch this week, and ranked action items you can tap to mark done. It refreshes once every 24 hours. Open it from Reef Pulse, the Next Up card on Home, or the menu.",
      },
      {
        q: "What can I ask Reef AI Chat?",
        a: "Anything about your reef, such as why your alkalinity is dropping, whether your nitrate is too high for your corals, or what to add next. The chat knows your tank's water chemistry and livestock, so answers are specific to your setup. You get 10 messages a day, and the count resets at midnight.",
      },
      {
        q: "What is the Stocking Advisor?",
        a: "Once you've added livestock, the Stocking Advisor on the My Reef tab checks compatibility, bioload and what you could add next. You can re-run the check once a day.",
      },
      {
        q: "How does AI photo logging work?",
        a: "On the Log tab, tap AI Scan and take or choose a photo of your test results. It works with Hanna checkers, API kits, Salifert and controller displays, and can read several parameters at once. The values fill in the log form for you to review before saving, and anything it can't read is flagged so you can enter it by hand.",
      },
    ],
  },
  {
    id: "controllers-devices",
    title: "Controllers & devices",
    blurb: "Jebao pumps, Neptune Apex, CoralVue HYDROS and Shelly smart outlets.",
    faqs: [
      {
        q: "Which controllers and devices work with NextUpReef?",
        a: "Jebao and Jecod WiFi pumps (the models that sign in to a Jebao Aqua account, not the controller-only ones), Neptune Apex, CoralVue HYDROS and Shelly Plug US Gen4 smart outlets. All device integrations are part of NextUpReef Pro. Jebao pumps and HYDROS work from anywhere; Apex and Shelly work over your home WiFi. More brands are being added.",
      },
      {
        q: "How do I connect my Jebao or Jecod pump?",
        a: "Set the pump up in the free Jebao Aqua app first and make sure it is on your 2.4GHz WiFi, because pairing happens over Bluetooth between the pump and your phone. Then open Devices in NextUpReef, choose Jebao, and sign in with the same email or phone number and password you used in the Jebao app. Your pumps are listed and you pick which belong to this tank. You never have to find an IP address.",
      },
      {
        q: "What can I do with a Jebao pump in NextUpReef?",
        a: "Turn it on and off, set flow from 0 to 100 percent with a dial, pick any of the nine wave modes with a plain-English description of what each one does to your water, set pump linkage for multi-pump setups, and include it in Feed Mode. It also lands in My Reef as equipment with its real flow in GPH, so your turnover figure updates itself instead of being a number you typed once.",
      },
      {
        q: "Will NextUpReef tell me if a Jebao pump fails?",
        a: "Yes. The pumps report their own faults, and the two that matter most are a jammed impeller and running dry. Both show on the pump card and the dashboard. That is the real reason to connect a flow pump: a stopped powerhead is usually noticed hours later, by which time corals have suffered.",
      },
      {
        q: "Which Jebao pumps work?",
        a: "The WiFi models only. Jebao also sells pumps that come with a controller and no network, and those cannot be connected by any app. To check yours: turn WiFi off on your phone and open the Jebao Aqua app. If the pump still shows up, it is cloud-connected and will work here. A Bluetooth-only pump will not, because there is no account behind it. The GMP-40 is confirmed on real hardware; other WiFi models use the same platform and should work. This is not an official Jebao integration, so a firmware change on their side could interrupt it.",
      },
      {
        q: "How do I connect my Neptune Apex?",
        a: "Open the menu, tap Neptune Apex, and enter your Apex's local IP address or hostname plus its username and password. Your phone must be on the same WiFi as the Apex. It uses the Apex you already own, with no extra hardware.",
      },
      {
        q: "What does the Apex sync into my logs?",
        a: "Temperature, pH and salinity, plus alkalinity, calcium and magnesium if you have a Trident. ORP is not logged. On the Log tab, the Apex button pre-fills the latest values for you to review before saving.",
      },
      {
        q: "What can I control on my Apex?",
        a: "Outlets (On, Off or Auto), Feed Mode, and heater on and off temperatures. You can also dose with a pump on a regular Apex outlet, and every dosing program gets a built-in shutoff so a dose can't run long. Apex DOS and DDR dosing pumps aren't supported, and Apex dosing doesn't include per-dose confirmation or missed-dose alerts.",
      },
      {
        q: "How does the CoralVue HYDROS integration work?",
        a: "HYDROS is our newest integration and is in early access. Because it's cloud-connected, it works away from home, and readings sync every 15 minutes around the clock even with the app closed. pH, temperature, salinity and alkalinity tests from a HYDROS tester are saved to your logs; ORP is shown live on the HYDROS screen but not logged.",
      },
      {
        q: "How do I connect my HYDROS?",
        a: "In the HYDROS app, open your device's Properties, tap Manage API Keys and create a key with the Provider ID nextupreef. Choose Read & write, or Read only if you just want readings. Copy the key, then in NextUpReef open the menu, tap HYDROS and paste it in.",
      },
      {
        q: "What can I control on a HYDROS?",
        a: "With a Read & write key you can set outputs On, Off or Auto, adjust pump and light levels, switch between Feeding, Normal, Water Change and custom modes, start tests, and run a manual dose on HYDROS dosers. The app asks before any change and waits for the device to confirm it. Programs and schedules are still edited in the HYDROS app.",
      },
      {
        q: "What can a Shelly smart outlet do?",
        a: "Plug equipment into a Shelly Plug US Gen4, add it in NextUpReef (no Shelly app or hub needed) and control it from the app. Schedules are saved to the plug, so they run with your phone off or the internet down. For dosers, power draw confirms each dose and you get a missed-dose alert if doses stop. The plug needs 2.4 GHz WiFi, your phone must be on the same WiFi to change settings, and it has no water probes.",
      },
      {
        q: "Can NextUpReef automate my dosing pump?",
        a: "Yes. Plug your pump into a Shelly outlet, calibrate it once, set a daily mL target, and the app saves the schedule to the plug. On an Apex, tag the outlet your pump is plugged into as a doser, then calibrate and schedule it. Automated doses show on the Dosing screen with everything else.",
      },
    ],
  },
  {
    id: "new-tank-guide",
    title: "New Tank Guide",
    blurb: "A six-phase, step-by-step path through your first year.",
    faqs: [
      {
        q: "What is the New Tank Guide?",
        a: "An optional, built-in guide that walks a new reef tank through six phases, from setup day to an established reef. It lives on your Home screen as a phase card with a checklist, explains what's happening in your tank, links to detailed guides, and adds the tests you need for each phase (such as ammonia and nitrite during the cycle) to your Log tab.",
      },
      {
        q: "What are the six phases?",
        a: "Tank Setup (equipment, saltwater, rock and sand), The Cycle (growing the bacteria that process ammonia and nitrite), The Ugly Phase (riding out normal algae blooms), First Livestock (hardy fish, added slowly), Coral Ready (first corals, starting soft) and Established Reef. Each phase has its own checklist and explanation.",
      },
      {
        q: "How do I start the guide?",
        a: "When you create a tank, the app asks whether it's a brand new tank (start at Phase 1), a tank already in progress (pick your phase, with a suggestion based on your setup date), or whether you're an experienced reefer who wants to skip the guide.",
      },
      {
        q: "Why does the guide ask about rock type?",
        a: "In Phase 1 you choose dry rock, live rock or a mix, and it changes your cycle checklist. Dry rock has no bacteria, so you dose ammonia to start the cycle; live rock produces its own ammonia from die-off, so no dosing is needed, but you inspect it for pests. A mix follows the dry rock path.",
      },
      {
        q: "Can I skip ahead?",
        a: "Yes. Each phase has required and suggested steps, and many are checked off automatically from your logs. If you try to advance with required steps unfinished, the app lists them and lets you tap Skip ahead anyway.",
      },
      {
        q: "Do I have to use the guide?",
        a: "No. Logging, scores, reminders, dosing and the community all work the same without it. If you leave the guide partway through, you keep your tank data and the badges you've earned.",
      },
    ],
  },
  {
    id: "photos-community",
    title: "Tank photos & community",
    blurb: "Monthly photos, badges, the leaderboard and who can see your tank.",
    faqs: [
      {
        q: "How do tank photos work?",
        a: "Tap the photo at the top of the My Reef tab to add one photo per month and build a growth timeline of your reef. You can replace the current month's photo any time without touching earlier months, and delete any photo from the timeline (deletes are permanent).",
      },
      {
        q: "What are badges?",
        a: "Badges are achievements for reefkeeping milestones, such as creating your tank, logging your first test, completing water changes, adding photos and finishing New Tank Guide phases. There's a badge for your first tank photo and another for 12 months of photos in a row. See yours under Achievements in the menu.",
      },
      {
        q: "What is the Community tab?",
        a: "A leaderboard of public reef tanks. Tap any tank to see its water chemistry over the last 90 days, dosing, equipment, lighting, livestock, water changes, photos and badges, so you can learn from what's working in real tanks. You can like and comment on tanks too.",
      },
      {
        q: "How is the leaderboard ranked?",
        a: "By combined score, the average of a tank's Reef Score and Stability Score. Only public tanks with at least one log in the past year appear. Your rank card shows your current rank, your movement since last week and your personal best.",
      },
      {
        q: "Is my tank public, and how do I make it private?",
        a: "Tanks are public by default. To change one tank, tap the Public or Private chip on your tank card in My Reef. To hide every tank at once, go to Settings, then Community & Profile, and tap Hide All.",
      },
      {
        q: "What can other reefers see on my public tank?",
        a: "Your display name, tank name, type and size, tank age, Reef and Stability Scores, recent water chemistry, salt mix, sump and refugium, dosing, equipment, lighting, livestock, water change habits, badges and monthly photos, plus any social links you add. Your email, password and Tank Journal are never shown.",
      },
      {
        q: "What are Community Insights?",
        a: "Community Insights compare your tank with other public tanks like yours. Pro unlocks the full picture of what those tanks run, including median parameters, popular salt mixes, fish and corals, top equipment and lights, water change habits and dosing products.",
      },
    ],
  },
  {
    id: "web-dashboard",
    title: "Web dashboard",
    blurb: "Your tank data on a big screen at portal.nextupreef.com.",
    faqs: [
      {
        q: "Is there a web version of NextUpReef?",
        a: "Yes. The web dashboard at portal.nextupreef.com is built for a computer or tablet and uses the same account and tanks as the app, so everything stays in sync. It's included with NextUpReef Pro and during your 30-day free trial.",
      },
      {
        q: "How do I sign in to the web dashboard?",
        a: "Use the same email and password as the app. Accounts are created in the app, not on the web, so download NextUpReef and sign up there first. If you forget your password, use Reset password on the web sign-in page to get an email link.",
      },
      {
        q: "What's on the web dashboard?",
        a: "A dashboard with your scores, community rank, full-screen trend charts (average, standard deviation, time in range and a second-parameter overlay), your Reef AI Advisor report and a readings table with CSV export. There are also Log, My Reef, Analytics and Control (device status) pages, and Settings lets you download your full parameter history as a CSV.",
      },
    ],
  },
  {
    id: "account-privacy",
    title: "Account & privacy",
    blurb: "Passwords, your display name, deleting your account and how your data is used.",
    faqs: [
      {
        q: "What information is always private?",
        a: "Your email address, password and Tank Journal entries are never shown publicly. Your reef data appears in the Community only while a tank is set to public, and you can make any tank private at any time.",
      },
      {
        q: "How do I change my password?",
        a: "Go to Settings, then Account, and tap Change Password. We email you a link to set a new password.",
      },
      {
        q: "How do I change my display name?",
        a: "Your display name starts as the first name you entered during setup. To change it, go to Settings and tap Edit next to your name at the top. It's the name other reefers see on your public tanks and comments.",
      },
      {
        q: "Can I delete my account?",
        a: "Yes. Go to Settings, scroll to Danger Zone and tap Delete Account, then confirm twice. This permanently deletes your tanks, logs, equipment, livestock, reminders, photos and badges and cannot be undone. Subscriptions are billed by the App Store or Google Play, so cancel an active subscription there as well.",
      },
      {
        q: "Will my email be used for marketing?",
        a: "By creating an account you agree that NextUpReef may email you product updates, feature announcements, trial reminders and reef-keeping tips. You can unsubscribe from marketing emails at any time using the link in any email, and we do not sell your personal information to third parties.",
      },
    ],
  },
];
