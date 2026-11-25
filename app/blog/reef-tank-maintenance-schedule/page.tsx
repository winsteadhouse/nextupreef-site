import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import YouTubeVideo from "@/components/YouTubeVideo";

export const metadata: Metadata = {
  title: "Reef Tank Maintenance Schedule: Daily to Yearly",
  description:
    "A reef tank maintenance schedule you can keep: what to do daily, weekly, monthly and yearly, how it changes by tank type, and how to make it stick.",
  alternates: {
    canonical: "https://nextupreef.com/blog/reef-tank-maintenance-schedule",
  },
  openGraph: {
    title: "Reef Tank Maintenance Schedule: Daily to Yearly",
    description:
      "A reef tank maintenance checklist by frequency: daily checks, weekly testing and cleaning, monthly equipment care and the yearly jobs people forget.",
    url: "https://nextupreef.com/blog/reef-tank-maintenance-schedule",
    images: [{ url: "/brand/og-image-v2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Reef Tank Maintenance Schedule: Daily to Yearly",
  description:
    "What to do on a reef tank daily, every few days, weekly, monthly and yearly, how the schedule changes by tank type, and how to keep to it.",
  image: "https://nextupreef.com/brand/og-image-v2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo-v2.png" },
  },
  datePublished: "2026-11-25",
  dateModified: "2026-11-25",
  mainEntityOfPage: "https://nextupreef.com/blog/reef-tank-maintenance-schedule",
};

const faqs = [
  {
    q: "How often should you clean a reef tank?",
    a: "Most tanks do well with a quick look every day, glass cleaning and filter sock changes every few days, about an hour of testing and cleaning once a week, and a deeper equipment clean about once a month. Treat those as starting points and adjust to what your tank shows you.",
  },
  {
    q: "How much time does a reef tank take each week?",
    a: "A common pattern is a few minutes a day plus roughly an hour once a week, with a longer session about once a month for pumps and the skimmer. Small simple tanks can take less, and large or heavily stocked coral tanks can take more.",
  },
  {
    q: "What maintenance does a saltwater aquarium need every week?",
    a: "Test the parameters that matter for your tank, do a water change if that is part of your routine, top up any dosing containers and the top-off reservoir, wipe away salt creep, and empty the skimmer cup if you have not already.",
  },
  {
    q: "Can you clean a reef tank too much?",
    a: "Yes. Scrubbing rock, deep cleaning the sand, replacing all the filter media at once or changing several things in the same week can unsettle a stable tank. Keep the routine steady and change one thing at a time.",
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

const tasks = [
  {
    task: "Look at the fish and corals",
    often: "Daily",
    why: "Behavior, appetite and polyp extension change before test results do. This is the most useful check you have.",
  },
  {
    task: "Check the temperature",
    often: "Daily",
    why: "A stuck or failed heater is one of the fastest ways to lose a tank. A glance at the thermometer catches it early.",
  },
  {
    task: "Top off, or check the auto top-off reservoir",
    often: "Daily",
    why: "Evaporation raises salinity. An empty reservoir means the tank has stopped being topped off.",
  },
  {
    task: "Feed, and watch everyone eat",
    often: "Daily, or on your feeding plan",
    why: "A fish that stops eating is an early warning. Uneaten food is a sign you are feeding too much.",
  },
  {
    task: "Clean the glass",
    often: "Every 2 to 4 days",
    why: "Film algae is easier to remove before it hardens, and clear glass lets you see problems.",
  },
  {
    task: "Change or rinse filter socks or floss",
    often: "Every 2 to 4 days",
    why: "Trapped waste breaks down in the water if it stays there, and a clogged sock overflows.",
  },
  {
    task: "Empty the skimmer cup",
    often: "Every few days to weekly",
    why: "A full cup stops collecting, and a dirty neck makes the skimmer less effective.",
  },
  {
    task: "Test the key parameters",
    often: "Weekly",
    why: "Regular numbers show a drift while it is still small. Which ones are key depends on what you keep.",
  },
  {
    task: "Water change, if that is your routine",
    often: "Weekly to every 2 weeks",
    why: "Removes built-up nutrients and replaces trace elements. Size and frequency vary by tank.",
  },
  {
    task: "Top up dosing containers and the top-off reservoir",
    often: "Weekly",
    why: "A container that runs dry causes the swing you were dosing to prevent.",
  },
  {
    task: "Wipe salt creep",
    often: "Weekly",
    why: "Salt crust builds on rims, lids, cords and light fixtures, and it is corrosive to equipment.",
  },
  {
    task: "Clean pumps and powerheads",
    often: "Monthly to every 3 months",
    why: "Algae and mineral buildup slow the flow gradually, so you do not notice until it is well down.",
  },
  {
    task: "Change carbon or other filter media",
    often: "As the product label says, often every few weeks",
    why: "Media becomes exhausted and stops working. Follow the product label for amount and timing.",
  },
  {
    task: "Check and clean the skimmer body",
    often: "Monthly to every few months",
    why: "A clogged air intake or dirty pump reduces foam long before the skimmer stops.",
  },
  {
    task: "Test the less frequent parameters",
    often: "Monthly",
    why: "Values that move slowly in your tank still need a regular check so they do not drift unseen.",
  },
  {
    task: "Calibrate or check the refractometer",
    often: "Monthly",
    why: "Every salinity decision rests on this one tool reading correctly.",
  },
  {
    task: "Inspect heaters and cables",
    often: "Monthly",
    why: "Look for cracks, corrosion, salt on plugs and missing drip loops. Unplug equipment before handling it.",
  },
  {
    task: "Replace RODI filters and resin",
    often: "When TDS says so, often every 6 to 12 months",
    why: "A worn unit keeps making water that is no longer pure.",
  },
  {
    task: "Replace the UV bulb, if you run a UV unit",
    often: "About once a year, per the maker",
    why: "A UV lamp loses output long before it stops glowing.",
  },
  {
    task: "Deep clean the return pump and plumbing",
    often: "Every 6 to 12 months",
    why: "Restores flow and gives you a chance to check seals, unions and hoses.",
  },
  {
    task: "Replace expired test kits",
    often: "Check dates every 6 to 12 months",
    why: "Old reagents can give wrong readings, and you will act on them.",
  },
  {
    task: "Check the heater and keep a spare",
    often: "Yearly",
    why: "Heaters wear out. Many reefers replace them on a schedule instead of waiting for a failure.",
  },
];

const tankTypes = [
  {
    type: "Nano",
    change: "Less water means faster swings. Check top-off and temperature daily without fail. Small, regular water changes do much of the work, and there is less equipment to clean.",
  },
  {
    type: "Soft coral and LPS",
    change: "The schedule above fits as written. Weekly testing of salinity, alkalinity, nitrate and phosphate is usually enough once the tank is stable.",
  },
  {
    type: "SPS",
    change: "Stability matters most. Many keepers test alkalinity several times a week or daily, test calcium and magnesium weekly, and keep pumps cleaner because flow matters more.",
  },
  {
    type: "Fish only",
    change: "More forgiving. Focus on feeding, nitrate, water changes and mechanical filtration. Calcium, alkalinity and magnesium need little attention without corals.",
  },
];

export default function ReefTankMaintenanceSchedulePost() {
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
          Reef Tank Maintenance Schedule
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Maintenance", "Checklist", "Routine"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Reef Tank Maintenance Schedule: Daily to Yearly
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          November 25, 2026 · 8 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            A reef tank needs <strong style={strong}>a few minutes a day, about an hour a week, and a deeper clean about once a month.</strong>
          </p>
          <p>
            The frequencies below are typical ranges, not rules. Use them as a starting point, then adjust to your tank.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>Quick Answer:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={strong}>Daily:</strong> look at the livestock, check temperature and top-off, feed</li>
              <li><strong style={strong}>Every few days:</strong> clean the glass, change filter socks, empty the skimmer cup</li>
              <li><strong style={strong}>Weekly:</strong> test, water change if that is your routine, refill containers, wipe salt</li>
              <li><strong style={strong}>Monthly:</strong> clean pumps and skimmer, change media, check the refractometer and heaters</li>
              <li><strong style={strong}>Yearly:</strong> RODI filters, UV bulb, return pump, test kits, a spare heater</li>
            </ul>
          </div>

          <h2 style={h2Style}>The Reef Tank Maintenance Checklist</h2>
          <p>
            Here is the full list, ordered from most to least frequent. Skip any row for equipment you do not have.
          </p>
          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Task</th>
                  <th style={th}>How often</th>
                  <th style={th}>Why</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((row) => (
                  <tr key={row.task}>
                    <td style={td}>{row.task}</td>
                    <td style={td}>{row.often}</td>
                    <td style={td}>{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={h2Style}>Daily: Mostly Looking</h2>
          <p>
            The daily routine is observation, not cleaning. Nothing needs to be emptied or scrubbed every day.
          </p>
          <p>
            Check the temperature every time you walk past. The{" "}
            <Link href="/blog/reef-tank-temperature-guide" style={link}>reef tank temperature guide</Link> covers the safe range and what to do when it moves. If you top off by hand, add fresh RODI water, never saltwater.
          </p>

          <h2 style={h2Style}>Every Few Days: Glass, Socks and the Skimmer Cup</h2>
          <p>
            These three jobs take about ten minutes together. If the sock is overflowing or the cup is full before you get to it, shorten the gap.
          </p>
          <p>
            Filter floss is thrown away and replaced. Socks can be rinsed and reused, so keep a few spares and swap in a clean one. If you are not sure where these sit in your system, the{" "}
            <Link href="/blog/reef-tank-sump-guide" style={link}>reef tank sump guide</Link> shows the layout.
          </p>

          <h2 style={h2Style}>Weekly: Test, Change Water, Refill</h2>
          <p>
            This is the main session. For a tank with corals, the usual weekly tests are salinity, alkalinity, nitrate and phosphate, with calcium and magnesium added once stony corals are using them. Our guide to{" "}
            <Link href="/blog/how-to-track-saltwater-aquarium-parameters" style={link}>tracking saltwater aquarium parameters</Link> explains what to test and how to read the trend.
          </p>
          <p>
            Water changes are where hobbyists disagree most. A common starting point is 10 to 20 percent every one to two weeks, though some keepers change less and lean on testing and dosing. The{" "}
            <Link href="/blog/reef-tank-water-change-guide" style={link}>reef tank water change guide</Link> covers how to choose and how to do it safely.
          </p>
          <p>
            Finish by refilling the top-off reservoir and any dosing containers, then wipe salt creep from the rim, lids and cords.
          </p>

          <h2 style={h2Style}>Monthly: Equipment Care</h2>
          <p>
            Pumps and powerheads lose flow slowly as algae and mineral deposits build up. Take them apart and clean them according to the maker&apos;s instructions. Clean one pump at a time so the tank is never without flow.
          </p>
          <p>
            Replace carbon and other chemical media on the schedule printed on the product label, and use the amount the label gives.
          </p>
          <p>
            Check the refractometer against calibration fluid, as described in the{" "}
            <Link href="/blog/reef-tank-salinity-guide" style={link}>reef tank salinity guide</Link>. Then unplug and inspect each heater and cable for cracks, corrosion and salt.
          </p>

          <h2 style={h2Style}>Every Few Months to Yearly: The Jobs People Forget</h2>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>RODI filters.</strong> Go by the TDS meter, not the calendar. The{" "}
              <Link href="/blog/rodi-water-for-reef-tank" style={link}>RODI water guide</Link> explains what each reading means.</li>
            <li><strong style={strong}>UV bulb.</strong> If you run a UV unit, the lamp needs replacing at the maker&apos;s interval, commonly about a year. See the{" "}
              <Link href="/blog/uv-sterilizer-reef-tank" style={link}>UV sterilizer guide</Link>.</li>
            <li><strong style={strong}>Return pump and plumbing.</strong> A deep clean restores flow.</li>
            <li><strong style={strong}>Test kits.</strong> Reagents expire. Check the dates and replace any kit that is past them or giving odd results.</li>
            <li><strong style={strong}>Heater.</strong> Confirm it still holds the set temperature, and keep a spare in the cupboard.</li>
          </ul>

          <h2 style={h2Style}>How the Schedule Changes by Tank Type</h2>
          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Tank type</th>
                  <th style={th}>What changes</th>
                </tr>
              </thead>
              <tbody>
                {tankTypes.map((row) => (
                  <tr key={row.type}>
                    <td style={td}>{row.type}</td>
                    <td style={td}>{row.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            If you keep a small tank, the{" "}
            <Link href="/blog/nano-reef-tank-guide" style={link}>nano reef tank guide</Link> goes into more detail on why small volumes need closer watching.
          </p>

          <h2 style={h2Style}>Signs You Are Doing Too Little</h2>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li>Nitrate and phosphate climb from one test to the next.</li>
            <li>Nuisance algae spreads, or the glass needs cleaning more often than it used to.</li>
            <li>Flow looks weaker and detritus settles in places it did not before.</li>
            <li>Salinity drifts because the top-off reservoir keeps running dry.</li>
          </ul>

          <h2 style={h2Style}>Signs You Are Doing Too Much</h2>
          <p>
            A reef tank rewards stability more than effort. Over-cleaning is a real problem.
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>Cleaning everything at once.</strong> Replacing all the media, deep cleaning the sand and scrubbing the rock in one session removes a lot of beneficial bacteria together. Spread the jobs out.</li>
            <li><strong style={strong}>Changing several things in one week.</strong> If you adjust the lights, the dosing and the feeding together, you cannot tell which change caused the result. Change one thing, then wait and test.</li>
            <li><strong style={strong}>Chasing numbers.</strong> Reacting to every small test variation with a correction creates swings. Look at the trend across several tests first.</li>
            <li><strong style={strong}>Very large water changes on a stable tank.</strong> A sudden shift in salinity, temperature or alkalinity can stress corals more than the problem you were fixing.</li>
          </ul>

          <h2 style={h2Style}>How to Make It Stick</h2>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strong}>Same day each week.</strong> Pick one day for the weekly session and keep it.</li>
            <li><strong style={strong}>Reminders.</strong> The monthly and yearly jobs are the ones that slip. NextUpReef lets you set water change and custom maintenance reminders with push notifications, and it keeps an equipment list for each tank so you know what needs servicing.</li>
            <li><strong style={strong}>A log.</strong> Note what you did and what you tested. When something goes wrong, the log tells you what changed.</li>
          </ul>

          <div style={{ textAlign: "center", margin: "40px 0" }}>
            <Image
              src="/screenshots/site-v3/phone-reminders.png"
              alt="NextUpReef Reminders screen showing recurring maintenance reminders for a water change, filter socks and feeding, each with Done and +1 Day buttons"
              width={777}
              height={1557}
              style={{ width: "100%", maxWidth: 300, height: "auto" }}
            />
            <p style={{ fontSize: "13px", color: "var(--text-muted)", textAlign: "center", marginTop: "12px" }}>
              Maintenance reminders in NextUpReef: a 20% water change every two weeks, filter socks and more.
            </p>
          </div>

          <YouTubeVideo
            id="KfoJ6QRFDMM"
            title="Never Miss a Reef Tank Water Change"
            description="How to set water change and maintenance reminders in the NextUpReef reef tank app and mark them done."
            uploadDate="2026-11-25"
            duration="PT40S"
            caption="Video: setting and completing reminders in NextUpReef."
          />

          <h2 style={h2Style}>Frequently Asked Questions</h2>

          {faqs.map((faq) => (
            <div key={faq.q}>
              <p><strong style={strong}>{faq.q}</strong></p>
              <p>{faq.a}</p>
            </div>
          ))}

          <h2 style={h2Style}>Final Thought</h2>
          <p>
            A good maintenance schedule is one you keep. Start with the ranges above, watch how your tank responds, and adjust one interval at a time.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Keep your maintenance schedule in NextUpReef, free.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Set water change and custom maintenance reminders with push notifications, log water tests with trend charts, and keep an equipment list for each tank. iOS and Android, with a 30-day Pro trial and no credit card.
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
