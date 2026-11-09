import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const TITLE = "Reef Tank Build Planner: What It Costs, and Where to Build It in the Open";
const DESCRIPTION =
  "Price a reef tank build before you buy anything — upfront and first-year running costs by size and goal — then share the build as it comes together and get answers before you spend, not after.";
const URL = "https://nextupreef.com/blog/reef-tank-build-planner";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: "What a reef tank really costs before you buy, and a build thread that knows which of your questions nobody has answered.",
    url: URL,
    images: [{ url: "/brand/og-image-v2.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  image: "https://nextupreef.com/brand/og-image-v2.png",
  author: { "@type": "Organization", name: "NextUpReef" },
  publisher: {
    "@type": "Organization",
    name: "NextUpReef",
    logo: { "@type": "ImageObject", url: "https://nextupreef.com/brand/logo-v2.png" },
  },
  datePublished: "2026-11-07",
  dateModified: "2026-11-07",
  mainEntityOfPage: URL,
};

const faqs: { q: string; a: string }[] = [
  {
    q: "How much does a reef tank cost to set up?",
    a: "It depends far more on what you want to keep than on the tank itself. The Build Planner gives you a range for your size and goal, covering the tank and stand, light, flow, heating, filtration, testing and water, then a separate first-year running figure for salt, test reagents, filter media and the rest. A nano fish-only build and a large SPS build of the same gallonage are not close to the same number — the light alone swings by more than three times between them.",
  },
  {
    q: "What size reef tank should a beginner get?",
    a: "Mid-size, 40 to 75 gallons, is the sweet spot for a first reef. Nanos look like the easy option because they are cheapest, but a small volume swings fast: a heater failure or a hot day moves temperature and salinity much further in 20 gallons than in 75. More water is more forgiving, and forgiving is the single biggest factor in a beginner succeeding.",
  },
  {
    q: "Do I need a tank already to use the Build Planner?",
    a: "No, and that is rather the point. You can set up an account in planning mode with no tank at all. Older versions of the app asked for a tank size, a setup date and a salt brand before letting anyone in, which left someone researching their first reef nothing truthful to enter. Now you plan first and tell the app you bought it when you actually do.",
  },
  {
    q: "What is a tank build thread?",
    a: "It is a running record of a tank as it comes together — what you are running, what you are still deciding on, photos as it fills in, and questions along the way. Reefers have kept them on forums for twenty years. Tank Builds is the same idea inside NextUpReef, with the advantage that the equipment, livestock and photos you already log fill most of it in for you.",
  },
  {
    q: "Who can see my tank build?",
    a: "Anyone using the app, once you start one. Browsing builds is free for everyone, so people without Pro can still read and reply. You can turn a build off at any time from the build page — it comes off Tank Builds immediately and nobody can see it, while your posts and replies are kept in case you turn it back on. Hiding all your tanks in Settings turns any build off too.",
  },
  {
    q: "Is Tank Builds free?",
    a: "Browsing and replying to other people's builds is always free. Starting your own build and posting to it is free for everyone until January 5, 2027, and part of Pro after that. Every new account also gets a 30-day Pro trial, no credit card needed.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const h2: React.CSSProperties = { fontSize: "28px", fontWeight: 900, color: "var(--text-light)", marginTop: "56px", marginBottom: "16px", lineHeight: 1.25 };
const h3: React.CSSProperties = { fontSize: "20px", fontWeight: 900, color: "var(--text-light)", marginTop: "32px", marginBottom: "10px" };
const strong: React.CSSProperties = { color: "var(--text-light)" };
const link: React.CSSProperties = { color: "var(--reef)", fontWeight: 700 };
const callout: React.CSSProperties = { background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.15)", borderRadius: "14px", padding: "18px 22px", margin: "24px 0" };
const warn: React.CSSProperties = { background: "rgba(245,158,11,0.07)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: "14px", padding: "18px 22px", margin: "24px 0" };
const list: React.CSSProperties = { paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" };

const SIZES: { name: string; range: string; blurb: string; watch: string }[] = [
  {
    name: "Nano",
    range: "10–30 gallons",
    blurb: "An all-in-one on a desk or counter. Cheapest to buy, hardest to keep stable.",
    watch: "Every dosing or top-off error is proportionally larger, and most reef fish outgrow it. A filled 20 is around 230 lb — check the span of whatever it sits on.",
  },
  {
    name: "Mid-size",
    range: "40–75 gallons",
    blurb: "The sweet spot for a first reef. Forgiving enough to learn in, small enough to afford.",
    watch: "Needs a proper stand and a thought about the floor. A 75 filled with rock is over 850 lb.",
  },
  {
    name: "Large",
    range: "90–220 gallons",
    blurb: "The most stable water you can own, and the most expensive mistake if you rush it.",
    watch: "Everything scales: salt, light, flow, and the cost of a bad week.",
  },
];

const GOALS: { name: string; blurb: string; demands: string }[] = [
  { name: "Fish only", blurb: "Fish, rock and a cleanup crew. No corals, so no coral chemistry.", demands: "Basic light is fine — you are lighting it to look at, not to grow coral." },
  { name: "Softies & zoas", blurb: "Mushrooms, zoanthids, leathers, GSP. The most forgiving corals there are.", demands: "Modest reef light. Alkalinity and calcium testing, but little or no dosing at first." },
  { name: "Mixed reef", blurb: "Softies plus LPS — hammer, torch, frogspawn, acans. The most common end state.", demands: "Good reef light, weekly alk/Ca/Mg testing, and dosing once corals start consuming." },
  { name: "SPS reef", blurb: "Acropora and friends. Beautiful, fast-growing, unforgiving of instability.", demands: "High-output light, 40x+ turnover, automated dosing, and near-constant alkalinity. That last one is the whole game." },
];

const BUY_ORDER: { n: number; label: string; detail: string }[] = [
  { n: 1, label: "RODI, refractometer, test kits", detail: "Before the tank. You cannot even mix water without these, and they are what make everything else measurable." },
  { n: 2, label: "Tank, stand, rock, sand, salt", detail: "The build itself. Place the rock dry and play with the aquascape before water goes in." },
  { n: 3, label: "Heater + controller, flow, light", detail: "Running hardware. The light can be last of these — it stays off through the cycle anyway." },
  { n: 4, label: "Skimmer, ATO, sump", detail: "Quality of life. Add once the tank is cycling and you know your routine." },
  { n: 5, label: "Quarantine tank", detail: "Before the first fish, not after the first outbreak." },
  { n: 6, label: "Dosing", detail: "Only when coral growth outpaces your water changes." },
];

export default function ReefTankBuildPlannerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 20px" }}>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: 700, marginBottom: "32px" }}>
          <Link href="/" style={{ color: "var(--reef)" }}>Home</Link>
          {" › "}
          <Link href="/blog" style={{ color: "var(--reef)" }}>Blog</Link>
          {" › "}
          Build Planner and Tank Builds
        </p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Build Planner", "Tank Builds", "Cost", "Planning", "Community"].map((tag) => (
            <span key={tag} style={{ fontSize: "12px", fontWeight: 700, padding: "4px 12px", borderRadius: "999px", background: "rgba(44,196,214,0.08)", border: "1px solid rgba(44,196,214,0.12)", color: "var(--reef)" }}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "40px", fontWeight: 900, lineHeight: 1.2, marginBottom: "16px" }}>{TITLE}</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: 700, marginBottom: "48px" }}>
          Updated November 7, 2026 · 10 min read · By NextUpReef
        </p>

        <div style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: 1.8 }}>
          <p>
            Almost every reef tank that fails does so for a reason that was decided before any water went in. The tank was too small to be forgiving. The light was bought for softies and the owner fell for acropora six months later. The budget covered the display and nothing that keeps it alive.
          </p>
          <p>
            None of that is a knowledge problem, exactly. The information is out there. The trouble is that it arrives in the wrong order — you find out what an RODI unit is for after you have spent a year hauling water, and you learn what alkalinity does three weeks into your first coral losses.
          </p>
          <p>
            NextUpReef has two features aimed squarely at that. The <strong style={strong}>Build Planner</strong> puts real numbers in front of you before you buy anything. <strong style={strong}>Tank Builds</strong> gives you somewhere to work through the decisions in the open, with other reefers reading.
          </p>

          <h2 style={h2}>Part one: the Build Planner</h2>
          <p>
            The Build Planner is Phase 0 of the <Link href="/features" style={link}>New Tank Guide</Link>, and it comes before everything else for a reason: it is the only moment the app can still save you money.
          </p>
          <p>
            You can use it with no tank at all. Set up an account in planning mode and there is nothing to invent — no setup date, no salt brand, no gallonage you have not chosen yet.
          </p>

          <div style={callout}>
            <p style={{ margin: 0 }}>
              <strong style={strong}>Why that matters more than it sounds.</strong> The app used to demand a tank size, a setup date and a salt brand before letting anyone in. Someone researching their first reef had nothing truthful to enter, so they either made a tank up — poisoning their tank age, their Reef Score maturity and their cycle timeline permanently — or they left. Planning mode exists because both of those outcomes are bad.
            </p>
          </div>

          <h3 style={h3}>Step one: how big are you thinking?</h3>
          <p>
            Three tiers, with the honest trade-offs rather than the sales pitch:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", margin: "24px 0" }}>
            {SIZES.map((s) => (
              <div key={s.name} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 18px" }}>
                <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)" }}>{s.name}</div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--reef)", margin: "3px 0 6px" }}>{s.range}</div>
                <div style={{ fontSize: "14.5px", lineHeight: 1.6, marginBottom: "8px" }}>{s.blurb}</div>
                <div style={{ fontSize: "13.5px", lineHeight: 1.55, color: "var(--text-muted)", opacity: 0.85 }}>{s.watch}</div>
              </div>
            ))}
          </div>
          <p>
            The counter-intuitive part is that <strong style={strong}>the nano is the hard one</strong>. It is cheapest, it fits on a desk, and it is what most people buy first. It also swings fastest: a heater sticking on, a day of evaporation, or a dose measured slightly generously all move a 20-gallon tank much further than they move a 75. Volume is forgiveness, and forgiveness is what a beginner actually needs.
          </p>

          <h3 style={h3}>Step two: what do you want to keep?</h3>
          <p>
            This is the choice that sets your budget, and the one people skip. A tank is a tank; a light for acropora costs more than three times a light for fish.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", margin: "24px 0" }}>
            {GOALS.map((g) => (
              <div key={g.name} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 18px" }}>
                <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--text-light)" }}>{g.name}</div>
                <div style={{ fontSize: "14.5px", lineHeight: 1.6, margin: "4px 0 8px" }}>{g.blurb}</div>
                <div style={{ fontSize: "13.5px", lineHeight: 1.55, color: "var(--reef)", fontWeight: 600 }}>{g.demands}</div>
              </div>
            ))}
          </div>
          <p>
            Answer honestly rather than ambitiously. If you intend to end up at SPS, plan for SPS now — buying a mixed-reef light and replacing it in a year costs more than buying the right one once.
          </p>

          <h3 style={h3}>Step three: what it actually costs</h3>
          <p>
            Two figures come back: <strong style={strong}>upfront</strong>, and <strong style={strong}>first year running</strong>. Both are ranges, deliberately. The point is to set expectations before you walk into a store, not to quote a cart.
          </p>
          <p>
            Underneath them is the line-by-line breakdown, with every item tagged one of three ways:
          </p>
          <ul style={list}>
            <li><strong style={strong}>Essential</strong> — the tank does not run without it.</li>
            <li><strong style={strong}>Recommended</strong> — you will buy it eventually; buying it later costs more in hassle than in money.</li>
            <li><strong style={strong}>Optional</strong> — genuinely optional, whatever the forum says.</li>
          </ul>
          <p>
            You can tick items off and watch the total move, which is the honest way to find out whether the build you are imagining is the build you can afford.
          </p>

          <div style={{ margin: "32px 0", display: "flex", justifyContent: "center" }}>
            <Image
              src="/screenshots/site-v3/phones-planner.png"
              alt="The NextUpReef Build Planner working out which tank size suits a first reef, alongside the Ugly Phase screen from the New Tank Guide"
              width={1227}
              height={1434}
              style={{ width: "100%", maxWidth: "520px", height: "auto" }}
            />
          </div>

          <h3 style={h3}>The running cost nobody budgets for</h3>
          <p>
            The first-year figure is the one that surprises people, because it is counted as <em>whole purchases</em> rather than smoothed into a monthly average. A 30-month RODI membrane is not a first-year cost. A filter change due every six months happens twice. Averaging those into a tidy monthly number is exactly what makes a running-cost estimate impossible to check against your own receipts.
          </p>
          <p>
            Salt, test reagents, filter media, replacement bulbs or pucks, top-off water, food — each one shows what it costs, how often you buy it, and why.
          </p>

          <h3 style={h3}>Where your water comes from</h3>
          <p>
            A small decision with a long tail. Buying from your fish store has no upfront cost and nothing to maintain, which is genuinely sensible on a nano where a weekly change is a few gallons. It also means carrying water every week, forever, and trusting someone else&apos;s filter maintenance.
          </p>
          <p>
            An RODI unit costs money up front and needs a drain and somewhere to mount it. It pays for itself somewhere past roughly 300 gallons produced — a figure worth doing for your own tank size before you decide.
          </p>
          <div style={warn}>
            <p style={{ margin: 0 }}>
              <strong style={strong}>If you buy water, ask two questions.</strong> When did they last change their filters, and what does their TDS meter read? A store that cannot answer both is selling you tap water at a markup, and you will spend a year fighting algae you did not cause.
            </p>
          </div>

          <h3 style={h3}>Buy in this order</h3>
          <p>
            The sequence matters as much as the list. This is the order the planner gives you:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "24px 0" }}>
            {BUY_ORDER.map((b) => (
              <div key={b.n} style={{ display: "flex", gap: "14px", alignItems: "flex-start", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "14px 16px" }}>
                <div style={{ fontSize: "13px", fontWeight: 900, color: "var(--reef)", minWidth: "20px", paddingTop: "2px" }}>{b.n}</div>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 900, color: "var(--text-light)", marginBottom: "3px" }}>{b.label}</div>
                  <div style={{ fontSize: "14px", lineHeight: 1.6 }}>{b.detail}</div>
                </div>
              </div>
            ))}
          </div>
          <p>
            Two of those are worth arguing about, so here is the argument. <strong style={strong}>Test kits come before the tank</strong> because you cannot mix water without a refractometer and you cannot judge a cycle without tests — they are not accessories, they are the instruments. And <strong style={strong}>the quarantine tank comes before the first fish</strong>, not after the first outbreak, which is when almost everyone actually buys one.
          </p>

          <h3 style={h3}>What you could keep, and what others ran</h3>
          <p>
            The planner finishes with a starter list for your size — hardy fish, corals in the order to add them, and a cleanup crew — plus what other builds of your size and goal actually run, drawn from real tanks in the app rather than from a manufacturer&apos;s recommendation.
          </p>
          <p>
            If something is still unclear, you can ask the <Link href="/blog/ai-reef-tank-advisor" style={link}>Reef AI</Link> about your specific build. It already knows the size and goal you picked, so &ldquo;what light would you recommend and why?&rdquo; gets an answer about your tank rather than a general one.
          </p>
          <p>
            When you have actually bought it, one button — <em>I bought my tank, start the build</em> — turns the plan into a real tank and moves you into Phase 1 of the guide.
          </p>

          <h2 style={h2}>Part two: Tank Builds</h2>
          <p>
            Reefers have kept build threads on forums for twenty years, and for good reason: a reef is slow, and a thread is the only format that matches it. You post the stand going in, then the rock, then the first fish, and people who have done it before tell you what is about to go wrong.
          </p>
          <p>
            Tank Builds is that, inside the app, in <strong style={strong}>Community → Tank Builds</strong>. The difference is that most of the thread writes itself.
          </p>

          <h3 style={h3}>The equipment and livestock you already log fill it in</h3>
          <p>
            On a forum, your build thread and your actual tank are separate things, and the thread goes stale the moment you stop typing. Here they are the same data. Every piece of equipment with an install date and every animal with a date added lands on the build&apos;s timeline automatically, so the record stays true whether or not you felt like writing that week.
          </p>
          <p>
            The app also notices the gaps — a piece of gear with no install date, an animal with no date added — and asks, rather than quietly drawing an incomplete timeline.
          </p>

          <h3 style={h3}>Questions that cannot get buried</h3>
          <p>
            This is the part a forum structurally cannot do. When you post to a build, you choose whether it is an <strong style={strong}>update</strong> or a <strong style={strong}>question</strong> — and because the app knows which is which, it also knows which questions have no answer yet.
          </p>
          <ul style={list}>
            <li>An unanswered question is promoted to the top of your build page, rather than sitting at post #47 where nobody scrolls.</li>
            <li>The Tank Builds index has a <strong style={strong}>Needs answers</strong> filter, so a reefer with ten minutes can go straight to the people actually stuck.</li>
          </ul>
          <p>
            On a busy forum thread, &ldquo;has anyone run this skimmer on a 75?&rdquo; gets three replies about something else and then disappears. That is a format problem, not a community one.
          </p>

          <h3 style={h3}>&ldquo;Still deciding on&rdquo;</h3>
          <p>
            Mark a piece of equipment as still being decided and it joins a standing list on your build — not a question that scrolls away, a list that sits there.
          </p>
          <p>
            Which means someone arriving three weeks after you asked can still tell you what they think of that light. Most build-thread advice is given late; this is the one place where late is fine.
          </p>

          <h3 style={h3}>Who sees it, and turning it off</h3>
          <p>
            Browsing builds is free for everyone, Pro or not — a community nobody can look at is not a community. Starting your own and posting to it is <strong style={strong}>free for everyone until January 5, 2027</strong>, and part of Pro after that.
          </p>
          <p>
            Turning it off takes one tap on the build page. It comes off Tank Builds immediately and nobody can see it, and your posts and replies are kept — turn it back on and the thread is still there. Hiding all your tanks in Settings turns any build off too, so the two settings can never disagree about whether you are sharing.
          </p>
          <p>
            You can also report a post or block someone outright, in which case you stop seeing their builds, posts and replies anywhere in the app. They are not told.
          </p>

          <h2 style={h2}>Using both: plan it, then build it in the open</h2>
          <p>
            The two features are halves of the same thing. The planner tells you what the build costs and what order to buy it in. Tank Builds is where the decisions the planner cannot make for you — <em>this</em> light or <em>that</em> one, this skimmer on this sump — get argued out by people who have run them.
          </p>
          <p>
            A reasonable path through both:
          </p>
          <ul style={list}>
            <li><strong style={strong}>Before you spend anything</strong> — run the planner. Pick the size, pick the goal honestly, look at the upfront and first-year numbers together.</li>
            <li><strong style={strong}>While you shop</strong> — start a build, add the gear you are considering, and mark the undecided pieces. The standing list does the asking for you.</li>
            <li><strong style={strong}>Through the cycle</strong> — post updates with photos, and ask questions as questions so they reach the top of the page instead of the bottom.</li>
            <li><strong style={strong}>After it is running</strong> — the build keeps filling itself in from your logs, and becomes the thing you send someone when they ask how you did it.</li>
          </ul>

          <div style={callout}>
            <p style={{ margin: "0 0 8px" }}><strong style={strong}>Start planning</strong></p>
            <p style={{ margin: 0 }}>
              NextUpReef is free on <Link href="/" style={link}>iPhone and Android</Link>, and the Build Planner works before you own a tank. See the rest of the app on the{" "}
              <Link href="/features" style={link}>features page</Link>, or read the{" "}
              <Link href="/blog/tank-setup" style={link}>first-tank setup guide</Link> next.
            </p>
          </div>

          <h2 style={h2}>FAQ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "20px" }}>
            {faqs.map((f) => (
              <div key={f.q}>
                <p style={{ fontWeight: 900, color: "var(--text-light)", margin: "0 0 6px", fontSize: "17px" }}>{f.q}</p>
                <p style={{ margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
