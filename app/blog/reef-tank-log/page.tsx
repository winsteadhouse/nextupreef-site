import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import YouTubeVideo from "@/components/YouTubeVideo";

export const metadata: Metadata = {
  title: "Reef Tank Log: What to Record and How Often",
  description:
    "What to write in a reef tank log, how often to test at each tank stage, paper vs spreadsheet vs app, and how to read your own trends.",
  alternates: {
    canonical: "https://nextupreef.com/blog/reef-tank-log",
  },
  openGraph: {
    title: "Reef Tank Log: What to Record and How Often",
    description:
      "A practical aquarium log book: what to record, a testing schedule by tank stage, notebook vs spreadsheet vs app, and a simple weekly routine.",
    url: "https://nextupreef.com/blog/reef-tank-log",
    images: [{ url: "/brand/og-image-v2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Reef Tank Log: What to Record and How Often",
  description:
    "What to record in a reef tank log, a testing schedule by tank stage, how a notebook, spreadsheet and app compare, and how to read your own log.",
  image: "https://nextupreef.com/brand/og-image-v2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo-v2.png" },
  },
  datePublished: "2026-11-25",
  dateModified: "2026-11-25",
  mainEntityOfPage: "https://nextupreef.com/blog/reef-tank-log",
};

const faqs = [
  {
    q: "What should I record in a reef tank log?",
    a: "Every water test result with the date, plus anything you change: water changes and their size, doses, new livestock and losses, equipment changes and feeding changes. Add short notes on how the tank looks and a photo from the same angle every week or two.",
  },
  {
    q: "How often should I test my reef tank?",
    a: "It depends on the stage of the tank. During the cycle, test ammonia, nitrite and nitrate every 2 to 3 days. An established soft coral or LPS tank usually does well on weekly testing. SPS and heavily stocked tanks often test alkalinity several times a week.",
  },
  {
    q: "Is a paper aquarium log book good enough?",
    a: "Yes, if you use it. A notebook is fast and never needs charging. Its weakness is that trends are hard to see in a column of handwriting, and it cannot remind you of anything.",
  },
  {
    q: "Do I need to log results when everything looks fine?",
    a: "Yes. Normal readings are the baseline you compare against when something goes wrong. If you only log during problems, you will know the number is bad but not what it was when the tank was healthy.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const h2Style: CSSProperties = {
  fontSize: "28px", fontWeight: "900", color: "var(--text-light)", marginTop: "48px", marginBottom: "16px",
};
const tableStyle: CSSProperties = { width: "100%", borderCollapse: "collapse", fontSize: "15px" };
const th: CSSProperties = {
  color: "var(--text-light)", textAlign: "left", padding: "10px 12px",
  borderBottom: "1px solid rgba(255,255,255,0.12)",
};
const td: CSSProperties = { padding: "10px 12px", borderTop: "1px solid rgba(255,255,255,0.06)" };
const strong: CSSProperties = { color: "var(--text-light)" };
const link: CSSProperties = { color: "var(--reef)", fontWeight: 700 };

const records = [
  {
    what: "Water test results, by parameter",
    often: "Every time you test",
    why: "The core of the log. One entry per parameter, with the date.",
  },
  {
    what: "Water changes, with the amount",
    often: "Every water change",
    why: "A water change shifts nutrients and can shift alkalinity and salinity.",
  },
  {
    what: "Doses and dosing changes",
    often: "Every manual dose, and every change to an automatic schedule",
    why: "When alkalinity or calcium moves, the first question is whether the dose changed.",
  },
  {
    what: "New livestock and losses",
    often: "As they happen",
    why: "More fish means more waste. More coral means more alkalinity and calcium used. A loss is a data point too.",
  },
  {
    what: "Equipment changes",
    often: "As they happen",
    why: "A new light, a cleaned skimmer, a replaced pump or fresh filter media can all move the numbers within days.",
  },
  {
    what: "Feeding changes",
    often: "When you change food, amount or frequency",
    why: "Feeding is the main source of nitrate and phosphate in most tanks.",
  },
  {
    what: "Observations",
    often: "Weekly, and whenever something looks different",
    why: "Algae on the sand, coral colour, polyp extension, a fish hiding. These often change before a test kit shows anything.",
  },
  {
    what: "Photos",
    often: "Every 1 to 2 weeks, same angle and lighting",
    why: "Slow changes are invisible day to day. Two photos a month apart make them obvious.",
  },
];

const schedule = [
  {
    stage: "Cycling",
    tests: "Ammonia, nitrite and nitrate every 2 to 3 days. Temperature and salinity every day or two.",
    note: "You are watching for ammonia and nitrite to rise and then fall to zero.",
  },
  {
    stage: "New tank, under 6 months",
    tests: "Salinity and temperature daily to a few times a week. Nitrate and phosphate weekly. Alkalinity weekly, or 2 to 3 times a week once corals go in. Calcium and magnesium every 1 to 2 weeks.",
    note: "Young tanks swing more. Test again after each livestock addition.",
  },
  {
    stage: "Established soft coral or LPS",
    tests: "Alkalinity, nitrate and phosphate weekly. Calcium every 1 to 2 weeks. Magnesium every 2 weeks to monthly. Salinity weekly and temperature at a glance each day.",
    note: "A stable tank can stretch these a little.",
  },
  {
    stage: "SPS or heavily stocked",
    tests: "Alkalinity 2 to 3 times a week, up to daily while adjusting dosing. Calcium, nitrate and phosphate weekly. Magnesium every 1 to 2 weeks. Salinity a few times a week.",
    note: "Fast-growing stony corals use alkalinity quickly, so it can drift within days.",
  },
];

const methods = [
  {
    method: "Paper notebook",
    good: "Fast, cheap, sits next to the tank, works with wet hands nearby.",
    bad: "No charts, no reminders, hard to search, and one spill can ruin it.",
    fits: "People who like writing by hand and keep a simple tank.",
  },
  {
    method: "Spreadsheet",
    good: "Free, fully yours, and you can chart anything any way you like.",
    bad: "You build and maintain it yourself. Awkward on a phone at the tank, and no reminders unless you add them elsewhere.",
    fits: "People who enjoy spreadsheets and want full control.",
  },
  {
    method: "App",
    good: "Quick entry on your phone, charts drawn for you, reminders, and everything for the tank in one place.",
    bad: "You depend on the app and its maker, features vary a lot, and some charge for parts of it.",
    fits: "People who want trends and reminders without building anything.",
  },
];

export default function ReefTankLogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 20px" }}>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "32px" }}>
          <Link href="/" style={{ color: "var(--reef)" }}>Home</Link>
          {" › "}
          <Link href="/blog" style={{ color: "var(--reef)" }}>Blog</Link>
          {" › "}
          Reef Tank Log
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Tank Log", "Testing Schedule", "Tracking"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Reef Tank Log: What to Record and How Often
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          November 25, 2026 · 7 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            A reef tank log is a dated record of your test results and of everything you change in the tank. <strong style={strong}>Record every test, every water change, every dose change and every livestock or equipment change, and add a short note on how the tank looks.</strong> That is enough to answer most questions the tank will ever ask you.
          </p>
          <p>
            Call it an aquarium log book, a reef tank journal or a spreadsheet. What matters is that you write things down on the day, including the days when nothing is wrong.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Quick Answer:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={strong}>Record:</strong> test results, water changes, doses, livestock, equipment, feeding, observations and photos</li>
              <li><strong style={strong}>Cycling tank:</strong> ammonia, nitrite and nitrate every 2 to 3 days</li>
              <li><strong style={strong}>Established soft coral or LPS tank:</strong> weekly testing suits most</li>
              <li><strong style={strong}>SPS or heavily stocked:</strong> alkalinity 2 to 3 times a week</li>
              <li><strong style={strong}>Always note:</strong> the date, the test kit and roughly what time you tested</li>
            </ul>
          </div>

          <h2 style={h2Style}>Why a Log Matters</h2>
          <p>
            <strong style={strong}>Trends beat single readings.</strong> One alkalinity result tells you where the tank is today. Four results in a row tell you where it is going. Hobby test kits also have some error in them, so a single odd number may be the kit. A run of numbers moving the same way is real.
          </p>
          <p>
            <strong style={strong}>It shows what changed before a problem.</strong> Corals often react days or weeks after the cause. When something looks wrong, the useful question is what happened in the three weeks before. Nobody remembers that accurately. A log does.
          </p>
          <p>
            <strong style={strong}>It tells you whether a fix worked.</strong> If you cut feeding to bring nitrate down, the only proof is the readings before and after. Without them you are guessing.
          </p>

          <h2 style={h2Style}>What to Record in a Reef Tank Log</h2>
          <p>
            Test results are the obvious part. The entries people skip are the changes, and those are what make the numbers explainable later.
          </p>
          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>What</th>
                  <th style={th}>How often</th>
                  <th style={th}>Why</th>
                </tr>
              </thead>
              <tbody>
                {records.map((row) => (
                  <tr key={row.what}>
                    <td style={td}>{row.what}</td>
                    <td style={td}>{row.often}</td>
                    <td style={td}>{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            For the tests themselves, the usual set is salinity, temperature, alkalinity, calcium, magnesium, nitrate, phosphate and pH, plus ammonia and nitrite while the tank is cycling. Target ranges for each are in the{" "}
            <Link href="/blog/reef-tank-parameters-chart" style={link}>reef tank parameters chart</Link>.
          </p>

          <h2 style={h2Style}>Reef Tank Testing Schedule by Tank Stage</h2>
          <p>
            How often to test depends on how fast the tank can change. These are typical ranges, not rules. Hobbyists disagree on the details.
          </p>
          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Tank stage</th>
                  <th style={th}>Typical testing</th>
                  <th style={th}>Note</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row) => (
                  <tr key={row.stage}>
                    <td style={td}>{row.stage}</td>
                    <td style={td}>{row.tests}</td>
                    <td style={td}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            At any stage, test more often for a week or two after you change something: new livestock, a new dosing schedule, different salt, or equipment that failed. If you are still in the first weeks, the{" "}
            <Link href="/blog/cycling-your-tank" style={link}>guide to cycling your tank</Link> explains what the ammonia, nitrite and nitrate readings should do. For the big three in a coral tank, see the{" "}
            <Link href="/blog/reef-tank-alkalinity-calcium-magnesium-guide" style={link}>alkalinity, calcium and magnesium guide</Link>.
          </p>

          <h2 style={h2Style}>Paper Notebook, Spreadsheet or App</h2>
          <p>
            All three work. The best one is the one you will still be using in six months.
          </p>
          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Method</th>
                  <th style={th}>Good at</th>
                  <th style={th}>Weak at</th>
                  <th style={th}>Fits</th>
                </tr>
              </thead>
              <tbody>
                {methods.map((row) => (
                  <tr key={row.method}>
                    <td style={td}>{row.method}</td>
                    <td style={td}>{row.good}</td>
                    <td style={td}>{row.bad}</td>
                    <td style={td}>{row.fits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            If you go the app route, NextUpReef is free on iOS and Android. It logs all the common saltwater parameters with trend charts and target ranges by tank type, keeps water changes, doses, livestock, equipment and a journal for each tank, and sends water change and maintenance reminders. We compare the options, ours included, in the{" "}
            <Link href="/blog/best-reef-tank-tracking-app" style={link}>reef tank tracking app roundup</Link>.
          </p>

          <div style={{ textAlign: "center", margin: "40px 0" }}>
            <Image
              src="/screenshots/site-v3/phone-reminders.png"
              alt="NextUpReef Reminders screen showing a 20% every-2-weeks water change reminder alongside filter sock and feeding reminders, each with Done and +1 Day buttons"
              width={777}
              height={1557}
              style={{ width: "100%", maxWidth: 300, height: "auto" }}
            />
            <p style={{ fontSize: "13px", color: "var(--text-muted)", textAlign: "center", marginTop: "12px" }}>
              Maintenance reminders in NextUpReef: a 20% water change every two weeks, filter socks and more.
            </p>
          </div>

          <h2 style={h2Style}>How to Read Your Own Log</h2>
          <p>
            <strong style={strong}>Look at direction and rate, not one number.</strong> Alkalinity readings of 8.6, 8.3 and 8.0 over three weeks are all inside a normal range, yet they tell you the tank is using more than you are putting back. Catching that at 8.0 is a small adjustment. Catching it much later is a problem.
          </p>
          <p>
            <strong style={strong}>Compare before and after a change.</strong> Pick the date you changed something and look at the readings on either side. Give it time, because nutrients can take a couple of weeks to settle after a change in feeding or filtration. More in the{" "}
            <Link href="/blog/reef-tank-nitrate-phosphate-guide" style={link}>nitrate and phosphate guide</Link>.
          </p>
          <p>
            <strong style={strong}>Note test kit changes.</strong> Two kits can read the same water a little differently. If a number steps up or down on the day you opened a new kit or switched to a different one, suspect the kit before the tank.
          </p>

          <h2 style={h2Style}>Common Mistakes</h2>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={strong}>Logging only when something is wrong.</strong> You end up with a record of bad days and no idea what normal looked like. The boring readings are your baseline.</li>
            <li><strong style={strong}>Changing several things at once.</strong> If you change the light, the feeding and the dose in one weekend, the log cannot tell you which one mattered. Change one thing, then wait and watch.</li>
            <li><strong style={strong}>Not noting the test kit or the time of day.</strong> pH rises through the light period and falls overnight, and alkalinity can dip between doses. Test at about the same time each time and write down which kit you used.</li>
            <li><strong style={strong}>Rounding.</strong> Writing 8 for a reading of 8.3 throws away exactly the detail a trend is made of. Record what the kit shows, at the precision it shows it.</li>
          </ul>

          <YouTubeVideo
            id="5HtHAeS0Shc"
            title="How to Log a Reef Tank Water Test in Seconds"
            description="How to log a saltwater aquarium water test in the NextUpReef reef tank app, by voice, typing or by hand, then see your scores and a trend chart for every parameter."
            uploadDate="2026-11-25"
            duration="PT1M9S"
            caption="Video: logging a water test in NextUpReef and reading the trend charts."
          />

          <h2 style={h2Style}>A Simple Weekly Routine</h2>
          <p>
            A log lasts when it is tied to a routine. Adjust the tests to your stage using the schedule above.
          </p>
          <ol style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={strong}>Pick a day and a time.</strong> The same slot each week keeps readings comparable.</li>
            <li><strong style={strong}>Look before you test.</strong> Spend two minutes on the tank. Note anything new: algae, colour, polyp extension, fish behaviour.</li>
            <li><strong style={strong}>Run your tests and write the results down straight away.</strong> Salinity, temperature, alkalinity, nitrate and phosphate for most tanks, with calcium and magnesium on a slower rhythm.</li>
            <li><strong style={strong}>Log anything you changed this week.</strong> Water change and amount, dose changes, new livestock, equipment, feeding. The{" "}
              <Link href="/blog/reef-tank-water-change-guide" style={link}>water change guide</Link> covers how much and how often.</li>
            <li><strong style={strong}>Take a photo every week or two.</strong> Same spot, same lighting.</li>
            <li><strong style={strong}>Glance back four weeks.</strong> Ask one question: is anything moving steadily in one direction?</li>
          </ol>
          <p>
            For more on building the testing habit itself, see{" "}
            <Link href="/blog/how-to-track-saltwater-aquarium-parameters" style={link}>how to track saltwater aquarium parameters</Link>.
          </p>

          <h2 style={h2Style}>Frequently Asked Questions</h2>

          {faqs.map((faq) => (
            <div key={faq.q}>
              <p><strong style={strong}>{faq.q}</strong></p>
              <p>{faq.a}</p>
            </div>
          ))}

          <h2 style={h2Style}>Final Thought</h2>
          <p>
            A reef tank log does not need to be detailed to be useful. It needs to be regular. Write down the tests and the changes on the day they happen, and look back over the last month each week.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Keep your reef tank log in NextUpReef, free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Log your tests against target ranges for your tank type, see the trend charts, keep water changes, doses, livestock, equipment and a journal per tank, and get water change and maintenance reminders. iOS and Android, with a 30-day Pro trial and no credit card.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://apps.apple.com/us/app/nextupreef/id6760728959" target="_blank" rel="noopener noreferrer" className="btn primary">
                Download on App Store
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.nextupreef.app" target="_blank" rel="noopener noreferrer" className="btn secondary">
                Download on Google Play
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
