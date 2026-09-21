import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reef Tank Water Changes: How Much, How Often, and When You Can Skip Them",
  description:
    "How often to do water changes on a reef tank, how much water to change, and the dilution math behind a good schedule — plus what 125 real reef tanks actually do.",
  alternates: {
    canonical: "https://nextupreef.com/blog/reef-tank-water-change-guide",
  },
  openGraph: {
    title: "Reef Tank Water Changes: How Much, How Often, and When You Can Skip Them",
    description:
      "The 10–20% every 1–2 weeks baseline, the math that explains it, real app data from 646 water changes, and a safe step-by-step routine.",
    url: "https://nextupreef.com/blog/reef-tank-water-change-guide",
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Reef Tank Water Changes: How Much, How Often, and When You Can Skip Them",
  description:
    "A practical reef tank water change schedule: how much to change, how often, the dilution math, real NextUpReef app data, and when fewer changes are reasonable.",
  image: "https://nextupreef.com/brand/og-image.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo.png" },
  },
  datePublished: "2026-09-14",
  dateModified: "2026-09-14",
  mainEntityOfPage: "https://nextupreef.com/blog/reef-tank-water-change-guide",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How often should I do water changes on a reef tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most reef tanks, 10–20% every 1–2 weeks is a common, safe baseline. In NextUpReef app data (646 logged water changes across 125 tanks), the typical tank with repeat changes swapped 20% about every 9–10 days, with the middle half of tanks changing every 7.6–14 days.",
      },
    },
    {
      "@type": "Question",
      name: "How much water should I change in my reef tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Routine water changes of 10–25% are the standard range. For a 40-gallon tank, 10% is 4 gallons. Save bigger changes for emergencies, and always match the new saltwater's salinity and temperature to the tank.",
      },
    },
    {
      "@type": "Question",
      name: "Is it better to do small frequent water changes or large infrequent ones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Small, regular changes are better for most reef tanks. 10% weekly replaces about 34% of the old water over four weeks, while a single 25% monthly change replaces only 25%. Smaller changes also cause smaller swings in salinity, temperature and chemistry, which is what corals care about.",
      },
    },
    {
      "@type": "Question",
      name: "Can I skip water changes in a reef tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some established tanks with a light bioload, or tanks on an all-in-one or full-element dosing regime, can do fewer or smaller changes. Base that decision on regular test results for nitrate, phosphate, alkalinity, calcium and magnesium rather than guessing, and go back to regular changes if the numbers drift.",
      },
    },
    {
      "@type": "Question",
      name: "How long should new saltwater mix before a water change?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mix new saltwater with RO/DI water at 0 TDS and let it circulate, aerated and heated, for about 24 hours. Then check that its salinity and temperature match the tank before adding it.",
      },
    },
  ],
};

const h2Style = {
  fontSize: "28px",
  fontWeight: "900",
  color: "var(--text-light)",
  marginTop: "48px",
  marginBottom: "16px",
} as const;

const linkStyle = { color: "var(--reef)", fontWeight: 700 } as const;
const strongStyle = { color: "var(--text-light)" } as const;

const thStyle = {
  color: "var(--text-light)",
  textAlign: "left",
  padding: "10px 12px",
  borderBottom: "1px solid rgba(255,255,255,0.12)",
} as const;

const tdStyle = {
  padding: "10px 12px",
  borderTop: "1px solid rgba(255,255,255,0.06)",
} as const;

const tdNumStyle = { ...tdStyle, fontVariantNumeric: "tabular-nums" } as const;

export default function ReefTankWaterChangeGuidePost() {
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
          Water Change Guide
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Water Changes", "Maintenance", "Original Data"].map((tag) => (
            <span key={tag} style={{
              fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)",
            }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1.2", marginBottom: "16px" }}>
          Reef Tank Water Changes: How Much, How Often, and When You Can Skip Them
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "700", marginBottom: "48px" }}>
          September 14, 2026 · 9 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: "1.8" }}>
          <p>
            <strong style={strongStyle}>The short answer: change 10–20% of your water every 1–2 weeks.</strong> That is the common, safe baseline for most reef tanks, and it is close to what real reefers actually do. For a 40-gallon tank, 10% is 4 gallons. Routine changes should stay in the 10–25% range; bigger changes are for emergencies, not maintenance.
          </p>
          <p>
            The rest of this guide explains <em>why</em> that range works. There is simple dilution math behind it, real data from NextUpReef tanks that backs it up, and a few situations where an established tank can reasonably do less. We&apos;ll also cover the step-by-step routine and the mistakes that turn a routine water change into a stressed-out tank.
          </p>

          <p>
            A water change moves several parameters at once. The <Link href="/blog/reef-tank-parameters-chart" style={{ color: "var(--reef)", fontWeight: 700 }}>reef tank parameters chart</Link> shows the ranges you are trying to land in for each of them.
          </p>
          <h2 style={h2Style}>What Water Changes Actually Do</h2>
          <p>
            A reef tank is a closed box. Everything you add (food, supplements, salt mix) stays in there until something takes it out. Water changes are the one tool that does three jobs at once:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strongStyle}>Export nutrients and organics.</strong> Nitrate, phosphate and dissolved organic compounds build up from fish waste and uneaten food. Removing old water removes a share of all of it.</li>
            <li><strong style={strongStyle}>Replenish major and trace elements.</strong> Corals and coralline algae pull alkalinity, calcium and magnesium out of the water, along with many trace elements you probably don&apos;t test for. Fresh salt mix puts a baseline back.</li>
            <li><strong style={strongStyle}>Dilute whatever accumulates.</strong> Some things build up that no test kit shows: leftovers from dosing, compounds released by corals, byproducts of everyday life in the tank. Dilution handles them without you needing to know exactly what they are.</li>
          </ul>
          <p>
            Filtration, skimming and dosing each cover part of that list. Water changes are the only thing that covers all of it, which is why they remain the backbone of most maintenance routines.
          </p>

          <h2 style={h2Style}>The Math That Decides Your Schedule</h2>
          <p>
            Here is the part most guides skip. When you change water, you don&apos;t replace &quot;old&quot; water one-for-one. Some of what you siphon out is new water you added last time. That means splitting the same total volume into more, smaller changes replaces less old water than you might expect, and the size of each change matters more than the total gallons you mix.
          </p>

          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px" }}>
              <thead>
                <tr>
                  <th style={thStyle}>Schedule</th>
                  <th style={thStyle}>Water you mix</th>
                  <th style={thStyle}>Old water actually replaced</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>10% weekly, for 4 weeks</td>
                  <td style={tdNumStyle}>40%</td>
                  <td style={tdNumStyle}><strong style={strongStyle}>34%</strong></td>
                </tr>
                <tr>
                  <td style={tdStyle}>20% every 2 weeks, for 4 weeks</td>
                  <td style={tdNumStyle}>40%</td>
                  <td style={tdNumStyle}><strong style={strongStyle}>36%</strong></td>
                </tr>
                <tr>
                  <td style={tdStyle}>25% once a month</td>
                  <td style={tdNumStyle}>25%</td>
                  <td style={tdNumStyle}><strong style={strongStyle}>25%</strong></td>
                </tr>
                <tr>
                  <td style={tdStyle}>One 50% change</td>
                  <td style={tdNumStyle}>50%</td>
                  <td style={tdNumStyle}><strong style={strongStyle}>50%</strong></td>
                </tr>
                <tr>
                  <td style={tdStyle}>Two separate 25% changes</td>
                  <td style={tdNumStyle}>50%</td>
                  <td style={tdNumStyle}><strong style={strongStyle}>44%</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Two takeaways. First, 10% weekly and 20% every two weeks land in almost the same place over a month (34% vs 36%), so pick whichever you will actually keep up with. Second, a lone 25% monthly change replaces noticeably less old water than either, even though it feels like a bigger job on the day.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)",
            borderRadius: "16px", padding: "24px", marginBottom: "32px"
          }}>
            <p style={{ fontWeight: "900", color: "var(--text-light)", margin: "0 0 8px 0" }}>The steady-state idea:</p>
            <p style={{ margin: "0 0 12px 0" }}>
              If nitrate (or anything else) builds up at a steady rate and water changes are the only thing removing it, the level eventually settles at about <strong style={strongStyle}>1 ÷ (fraction changed)</strong> times what builds up between changes.
            </p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong style={strongStyle}>10% changes:</strong> settles near 10× the build-up between changes</li>
              <li><strong style={strongStyle}>20% changes:</strong> about 5×</li>
              <li><strong style={strongStyle}>30% changes:</strong> about 3.3×</li>
            </ul>
            <p style={{ margin: "12px 0 0 0" }}>
              Bigger changes lower the ceiling. Frequency sets how fast you get there.
            </p>
          </div>

          <p>
            That is why a tank that does tiny changes can still creep upward on nitrate: the ceiling is high, and the tank just keeps climbing toward it. It is also why real tanks rarely rely on water changes alone for nutrient control. Skimming, refugiums, carbon and phosphate media all lower the build-up side of that equation. Our{" "}
            <Link href="/blog/reef-tank-nitrate-phosphate-guide" style={linkStyle}>nitrate and phosphate guide</Link>{" "}
            covers those tools in detail.
          </p>

          <h2 style={h2Style}>What Real Reef Tanks Do</h2>
          <p>
            Advice is one thing. Here is what reefers actually log. From NextUpReef app data, we looked at <strong style={strongStyle}>646 logged water changes across 125 tanks</strong>. Among tanks with repeat changes, we took each tank&apos;s own typical change size and gap between changes, then looked at the spread across tanks, so a tank that changes water every few days doesn&apos;t outweigh one that changes monthly.
          </p>

          <div style={{ overflowX: "auto", margin: "24px 0 32px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px" }}>
              <thead>
                <tr>
                  <th style={thStyle}>Measure</th>
                  <th style={thStyle}>Typical tank</th>
                  <th style={thStyle}>Middle half of tanks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Change size</td>
                  <td style={tdNumStyle}>20%</td>
                  <td style={tdNumStyle}>12–20%</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Time between changes</td>
                  <td style={tdNumStyle}>about every 9–10 days</td>
                  <td style={tdNumStyle}>every 7.6–14 days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            In other words, the typical reef tank in the app sits right inside the 10–20% every 1–2 weeks baseline. These are self-selected app users, not a controlled study, so the numbers show what real hobby tanks run rather than what is optimal. Still, it is reassuring: the textbook advice and everyday practice agree.
          </p>

          <h2 style={h2Style}>Small and Frequent vs Big and Rare</h2>
          <p>
            Look back at the math table and a single 50% change actually replaces more old water than two 25% changes (50% vs 44%). So why does nearly every experienced reefer recommend smaller, regular changes?
          </p>
          <p>
            <strong style={strongStyle}>Because corals care about stability more than they care about perfect water.</strong> Every water change is a small disturbance. If your new saltwater is slightly off on salinity, temperature, alkalinity or magnesium, a 10% change nudges the tank a little. A 50% change shoves it hard. Your salt mix&apos;s alkalinity may not match what your tank runs, and a big change can move alkalinity and pH in a single afternoon.
          </p>
          <p>
            Regular changes also keep nutrients from climbing between changes. A tank on a monthly schedule spends the last week of every month at its highest nitrate and phosphate, then gets a sudden drop. A tank on a weekly or biweekly rhythm stays flatter. Flat lines on a trend chart are what you want. That same logic runs through our{" "}
            <Link href="/blog/established-reef" style={linkStyle}>established reef guide</Link>: consistency beats heroics.
          </p>

          <h2 style={h2Style}>Step-by-Step: A Safe Reef Tank Water Change</h2>
          <ol style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={strongStyle}>Start with RO/DI water at 0 TDS.</strong> Tap water can carry phosphate, nitrate, silicate, chlorine or chloramine and metals. Check your RO/DI output with a TDS meter and change filters or the DI resin when it rises.</li>
            <li><strong style={strongStyle}>Mix saltwater about 24 hours ahead.</strong> Add salt to the RO/DI water in a clean container with a pump for circulation and a heater. Let it mix, aerated and heated, for around a day so the salt fully dissolves and the chemistry settles.</li>
            <li><strong style={strongStyle}>Match salinity and temperature to the tank.</strong> Test the new water with a calibrated refractometer or meter, and adjust with more salt or more RO/DI until it matches. Bring the temperature in line with the display too. See our{" "}
              <Link href="/blog/reef-tank-salinity-guide" style={linkStyle}>salinity guide</Link> and{" "}
              <Link href="/blog/reef-tank-temperature-guide" style={linkStyle}>temperature guide</Link> for target ranges.</li>
            <li><strong style={strongStyle}>Turn off the ATO, return pump and heaters.</strong> Otherwise the ATO will try to &quot;top off&quot; the falling water level with fresh RO/DI, and a heater left out of the water can be damaged.</li>
            <li><strong style={strongStyle}>Siphon out old water, and grab detritus while you do.</strong> Aim the siphon at dead spots, behind rock and the bottom of the sump where debris settles. That way the water you remove carries waste with it.</li>
            <li><strong style={strongStyle}>Refill slowly.</strong> Pour or pump the new water in gradually, away from corals, so you don&apos;t blast sand or shock anything with a local pocket of different water.</li>
            <li><strong style={strongStyle}>Turn everything back on.</strong> Return pump, heaters, ATO, skimmer. Then walk away for a minute and come back to check that each piece is actually running.</li>
            <li><strong style={strongStyle}>Log it.</strong> Record the date and percentage. You&apos;ll want that history when you&apos;re trying to figure out why nitrate moved.</li>
          </ol>

          <h2 style={h2Style}>When You Can Do Fewer or Smaller Changes</h2>
          <p>
            Water changes aren&apos;t a religion. Some tanks legitimately need less:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strongStyle}>An established tank with a light bioload.</strong> Few fish, light feeding and good export (a solid skimmer or refugium) can keep nutrients steady on less frequent changes.</li>
            <li><strong style={strongStyle}>A tank on an all-in-one or full-element dosing regime.</strong> These products are designed to replace trace elements as well as alkalinity, calcium and magnesium, so the &quot;replenish&quot; job of water changes matters less. The trade-offs between approaches are covered in{" "}
              <Link href="/blog/two-part-vs-all-in-one-vs-kalkwasser" style={linkStyle}>two-part vs all-in-one vs kalkwasser</Link>.</li>
          </ul>
          <p>
            Be careful here, and stay balanced. Cutting back on water changes removes a safety margin. Dosing can replace elements, but it doesn&apos;t dilute the things you can&apos;t test for, and it doesn&apos;t export nutrients. <strong style={strongStyle}>Test rather than guess.</strong> Before stretching your schedule, get a baseline for nitrate, phosphate, alkalinity, calcium and magnesium, then keep testing after the change. If nutrients drift upward or your major elements start wandering, go back to regular changes.
          </p>
          <p>
            The opposite problem exists too. In NextUpReef app data, about 1 in 10 nitrate readings (11%) were zero and about 9% of phosphate readings were zero. If your nutrients are bottomed out, more water changes won&apos;t help, and the fix is usually on the input side. The{" "}
            <Link href="/blog/reef-tank-nitrate-phosphate-guide" style={linkStyle}>nitrate and phosphate guide</Link> covers that situation.
          </p>

          <h2 style={h2Style}>Common Water Change Mistakes</h2>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong style={strongStyle}>Mismatched salinity or temperature.</strong> The most common way a water change stresses a tank. Always test the new water before it goes in.</li>
            <li><strong style={strongStyle}>Untested tap water.</strong> Using tap water, or RO/DI that nobody has checked in months, can add the very nutrients you&apos;re trying to remove. Aim for 0 TDS.</li>
            <li><strong style={strongStyle}>Huge, infrequent changes.</strong> A big change after weeks of nothing is a large swing in every parameter at once. Keep routine changes in the 10–25% range.</li>
            <li><strong style={strongStyle}>Forgetting the ATO or return is off.</strong> An ATO left running during the drain can pour fresh water into the tank. A return pump left off after the refill leaves the display without flow. Make turning everything back on part of the routine.</li>
            <li><strong style={strongStyle}>Not keeping a record.</strong> Without a log you can&apos;t connect a nitrate drop, a coral&apos;s reaction or an alkalinity dip to the change that caused it. And it&apos;s easy to believe you did one &quot;last week&quot; when it was a month ago.</li>
          </ul>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
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

          <h2 style={h2Style}>How NextUpReef Keeps You on Schedule</h2>
          <p>
            The best water change schedule is the one you actually keep. NextUpReef is built to make that the easy part:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><strong style={strongStyle}>Set the schedule once.</strong> Choose Weekly, Every 2 Weeks or Monthly, pick the day and set the percentage you change.</li>
            <li><strong style={strongStyle}>Reminders on your hours.</strong> Push reminders arrive inside your own notification hours (Settings → Notifications, with a start between 6 and 10 am and an end between 5 and 9 pm), so nothing buzzes at midnight.</li>
            <li><strong style={strongStyle}>Mark it done.</strong> Tapping Done logs the water change, and it shows up as a marker on your Reef Pulse trend charts. You can see nitrate and phosphate respond right next to the change that moved them.</li>
            <li><strong style={strongStyle}>It counts toward your Reef Score.</strong> Maintenance makes up part of the Reef Score: a change in the last 7 days scores best, 2–5 changes a month earns the most, and changes of 10–25% earn a bonus. The Stability Score also rewards changes on a steady schedule. The full breakdown is in{" "}
              <Link href="/blog/reef-score-stability-score-explained" style={linkStyle}>Reef Score and Stability Score explained</Link>.</li>
          </ul>
          <p>
            Free accounts get up to 3 maintenance reminders, which covers a water change plus a couple of other recurring jobs. Pro removes the limit, and every new account starts with a 30-day Pro trial, no credit card.
          </p>

          <h2 style={h2Style}>FAQ</h2>
          <p><strong style={strongStyle}>How often should I do water changes on a reef tank?</strong></p>
          <p>
            For most reef tanks, 10–20% every 1–2 weeks is a common, safe baseline. In NextUpReef app data, the typical tank with repeat changes swapped 20% about every 9–10 days, and the middle half of tanks changed every 7.6–14 days.
          </p>
          <p><strong style={strongStyle}>How much water should I change in my reef tank?</strong></p>
          <p>
            Routine changes of 10–25% are the standard range. For a 40-gallon tank, 10% is 4 gallons. Save bigger changes for emergencies, and always match salinity and temperature.
          </p>
          <p><strong style={strongStyle}>Is it better to do small frequent water changes or large infrequent ones?</strong></p>
          <p>
            Small and regular wins for most tanks. 10% weekly replaces about 34% of the old water over four weeks, while one 25% monthly change replaces 25%. Smaller changes also mean smaller swings, and stability is what corals respond to.
          </p>
          <p><strong style={strongStyle}>Can I skip water changes in a reef tank?</strong></p>
          <p>
            An established tank with a light bioload, or one on an all-in-one or full-element dosing regime, can often do fewer or smaller changes. Make that call from regular tests of nitrate, phosphate, alkalinity, calcium and magnesium, not from a guess, and return to regular changes if the numbers drift.
          </p>
          <p><strong style={strongStyle}>How long should new saltwater mix before a water change?</strong></p>
          <p>
            About 24 hours, using RO/DI water at 0 TDS, with circulation, aeration and a heater. Check salinity and temperature against the tank before you add it.
          </p>

          <div style={{
            background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.2)",
            borderRadius: "16px", padding: "28px", marginTop: "48px", textAlign: "center"
          }}>
            <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-light)", marginBottom: "8px" }}>
              Never lose track of a water change again.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "15px" }}>
              Schedule water changes, get reminders on your hours, and see every change on your trend charts. Free on iOS and Android.
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
