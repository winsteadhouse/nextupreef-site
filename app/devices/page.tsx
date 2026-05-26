import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compatible Devices — NextUpReef",
  description:
    "Shop Shelly smart outlets, leak detectors, and accessories that work with NextUpReef. Automate dosing, lighting, and equipment control — all managed from one app.",
  alternates: { canonical: "https://nextupreef.com/devices" },
  openGraph: {
    title: "Compatible Devices — NextUpReef",
    description:
      "Shop Shelly smart outlets and leak detectors that work with NextUpReef today. Plus the NextUpReef Hub — coming soon.",
    url: "https://nextupreef.com/devices",
    images: [{ url: "/brand/splash2.png", width: 1200, height: 630 }],
  },
};

// AFFILIATE LINK PLACEHOLDERS — replace tag=nextupreef-20 with your real Amazon affiliate tag
const shellyOutletUrl = "https://amzn.to/4dLhHOO";
const shellyLeakUrl = "https://amzn.to/4uvMrdN";
const shellyMfgUrl = "https://www.shelly.com/en-us/products/shelly-plug-us-gen4";
const shellyLeakMfgUrl = "https://www.shelly.com/en-us/products/flood";

function DeviceIcon({ name }: { name: string }) {
  const common = {
    width: 22, height: 22, viewBox: "0 0 24 24", fill: "none",
    stroke: "var(--reef)", strokeWidth: 2,
    strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "flash": return <svg {...common}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
    case "droplet": return <svg {...common}><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>;
    case "hub": return <svg {...common}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
    case "apex": return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/></svg>;
    case "check": return <svg {...common} stroke="#22C55E"><polyline points="20 6 9 17 4 12"/></svg>;
    case "external": return <svg {...common} width={14} height={14}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>;
    default: return <svg {...common}><circle cx="12" cy="12" r="9"/></svg>;
  }
}

const devices = [
  {
    id: "shelly-outlet",
    badge: "WORKS TODAY",
    badgeColor: "var(--reef)",
    icon: "flash",
    brand: "Shelly",
    name: "Plug US Gen4",
    tagline: "Smart outlet for dosing, lighting, heaters & more",
    price: "$24.99",
    image: "/devices/shelly-plug-gen4.webp",
    mfgUrl: shellyMfgUrl,
    buyUrl: shellyOutletUrl,
    specs: [
      "Wi-Fi smart plug — no hub required",
      "Max 15A / 1800W load",
      "Built-in energy monitoring",
      "Local schedule storage — runs offline",
      "Works on your home LAN — no cloud relay",
    ],
    whatYouGet: [
      "Automated dosing schedules",
      "Lighting on/off & ramp control",
      "Heater, skimmer & return pump control",
      "Live power draw in the app",
      "Control Center dashboard",
    ],
    setupGuide: "/blog/how-to-add-shelly-plug",
    dosingGuide: "/blog/how-to-setup-dosing-shelly",
  },
  {
    id: "shelly-leak",
    badge: "COMING SOON IN APP",
    badgeColor: "#A855F7",
    icon: "droplet",
    brand: "Shelly",
    name: "Flood Sensor",
    tagline: "Leak detection for under your sump or ATO reservoir",
    price: "$39.99",
    image: "/devices/shelly-flood-new.webp",
    mfgUrl: shellyLeakMfgUrl,
    buyUrl: shellyLeakUrl,
    specs: [
      "Wi-Fi flood/leak sensor",
      "Temperature sensing built in",
      "Battery powered — no wiring needed",
      "Instant local alerts",
      "Works with Shelly smart outlets for auto-shutoff",
    ],
    whatYouGet: [
      "Push notification on leak detected",
      "Auto-shutoff rules (with Shelly outlet)",
      "Temperature log from under your stand",
    ],
    setupGuide: null,
    dosingGuide: null,
  },
  {
    id: "nextupreef-hub",
    badge: "COMING SOON",
    badgeColor: "var(--yellow)",
    icon: "hub",
    brand: "NextUpReef",
    name: "Hub",
    tagline: "Our all-in-one controller — no separate hardware needed",
    price: "from $179",
    image: null,
    mfgUrl: "/hub",
    buyUrl: null,
    specs: [
      "Dedicated hardware — runs 24/7 on its own",
      "pH & temperature probe inputs",
      "Shelly smart plug control built in",
      "Leak sensor support",
      "Works standalone or alongside a Neptune Apex",
    ],
    whatYouGet: [
      "Live probe readings in the app",
      "AI Reef Advisor driven by real-time data",
      "Equipment control from the app",
      "Alerts when something goes wrong",
    ],
    setupGuide: null,
    dosingGuide: null,
  },
];

export default function DevicesPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: "80px 20px 48px", textAlign: "center", maxWidth: "860px", margin: "0 auto" }}>
        <div style={{
          display: "inline-block", padding: "6px 14px", borderRadius: "999px",
          background: "rgba(44,196,214,0.10)", border: "1px solid rgba(44,196,214,0.25)",
          color: "var(--reef)", fontWeight: 900, fontSize: "12px", letterSpacing: "0.6px", marginBottom: "22px",
        }}>
          ⚡ COMPATIBLE HARDWARE
        </div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.03em", margin: "0 0 18px" }}>
          The hardware that makes{" "}
          <span style={{
            background: "linear-gradient(135deg, var(--reef) 0%, var(--reef-soft) 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            your reef run itself.
          </span>
        </h1>
        <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.65, maxWidth: "580px", margin: "0 auto" }}>
          NextUpReef works with off-the-shelf Shelly smart outlets and leak sensors available on Amazon today — no proprietary hardware required. Our own Hub is coming soon for even deeper integration.
        </p>
      </section>

      {/* DEVICE CARDS */}
      <section style={{ padding: "0 20px 80px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {devices.map((d) => (
            <div key={d.id} style={{
              background: "var(--bg-card)", border: "1px solid var(--border)",
              borderRadius: "20px", overflow: "hidden",
            }}>
              <div style={{
                display: "grid", gridTemplateColumns: "240px 1fr",
                gap: "0",
              }} className="device-card-grid">

                {/* Image panel */}
                <div style={{
                  background: "rgba(44,196,214,0.04)",
                  borderRight: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "32px", minHeight: "220px",
                }}>
                  {d.image ? (
                    <img
                      src={d.image}
                      alt={`${d.brand} ${d.name}`}
                      style={{ maxWidth: "210px", maxHeight: "210px", objectFit: "contain" }}
                    />
                  ) : (
                    <div style={{
                      width: "80px", height: "80px", borderRadius: "20px",
                      background: "rgba(44,196,214,0.10)", border: "1px solid rgba(44,196,214,0.20)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <DeviceIcon name={d.icon} />
                    </div>
                  )}
                </div>

                {/* Content panel */}
                <div style={{ padding: "28px 28px 24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px", flexWrap: "wrap" }}>
                    <span style={{
                      fontSize: "10px", fontWeight: 900, letterSpacing: "0.7px",
                      color: d.badgeColor, border: `1px solid ${d.badgeColor}`,
                      padding: "3px 9px", borderRadius: "999px",
                    }}>{d.badge}</span>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--text-muted)" }}>{d.brand}</span>
                  </div>

                  <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "6px", flexWrap: "wrap" }}>
                    <h2 style={{ fontSize: "22px", fontWeight: 900, color: "var(--text-light)", margin: 0 }}>
                      {d.brand} {d.name}
                    </h2>
                    <span style={{ fontSize: "18px", fontWeight: 900, color: "var(--reef)" }}>{d.price}</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--text-muted)", margin: "0 0 20px", lineHeight: 1.5 }}>{d.tagline}</p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 24px", marginBottom: "20px" }} className="device-specs-grid">
                    {/* Specs */}
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: 900, color: "var(--text-muted)", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: "8px" }}>
                        Specs
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                        {d.specs.map((s) => (
                          <div key={s} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--text-muted)", flexShrink: 0, marginTop: "6px" }} />
                            <span style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.5 }}>{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* What you get in NextUpReef */}
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: 900, color: "var(--reef)", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: "8px" }}>
                        In NextUpReef
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                        {d.whatYouGet.map((w) => (
                          <div key={w} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                            <div style={{ flexShrink: 0, marginTop: "2px" }}><DeviceIcon name="check" /></div>
                            <span style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.5 }}>{w}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
                    {d.buyUrl ? (
                      <a href={d.buyUrl} target="_blank" rel="noopener noreferrer sponsored"
                        style={{
                          display: "inline-flex", alignItems: "center", gap: "7px",
                          padding: "10px 20px", borderRadius: "10px",
                          background: "var(--reef)", color: "white",
                          fontWeight: 900, fontSize: "14px", textDecoration: "none",
                        }}>
                        Buy on Amazon
                        <DeviceIcon name="external" />
                      </a>
                    ) : (
                      <Link href="/hub"
                        style={{
                          display: "inline-flex", alignItems: "center", gap: "7px",
                          padding: "10px 20px", borderRadius: "10px",
                          background: "rgba(44,196,214,0.10)", color: "var(--reef)",
                          fontWeight: 900, fontSize: "14px", textDecoration: "none",
                          border: "1px solid rgba(44,196,214,0.25)",
                        }}>
                        Join the waitlist →
                      </Link>
                    )}
                    {d.mfgUrl && d.mfgUrl.startsWith("http") && (
                      <a href={d.mfgUrl} target="_blank" rel="noopener noreferrer"
                        style={{
                          display: "inline-flex", alignItems: "center", gap: "6px",
                          fontSize: "13px", fontWeight: 700, color: "var(--text-muted)", textDecoration: "none",
                        }}>
                        Manufacturer site <DeviceIcon name="external" />
                      </a>
                    )}
                    {d.setupGuide && (
                      <Link href={d.setupGuide}
                        style={{ fontSize: "13px", fontWeight: 700, color: "var(--reef)", textDecoration: "none" }}>
                        Setup guide →
                      </Link>
                    )}
                    {d.dosingGuide && (
                      <Link href={d.dosingGuide}
                        style={{ fontSize: "13px", fontWeight: 700, color: "var(--reef)", textDecoration: "none" }}>
                        Dosing guide →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "16px", lineHeight: 1.6, fontStyle: "italic" }}>
          Amazon links above are affiliate links — we earn a small commission at no extra cost to you. This helps keep NextUpReef running. Prices shown are approximate and may vary.
        </p>
      </section>

      {/* NEPTUNE APEX SECTION */}
      <section style={{ padding: "40px 20px 60px", maxWidth: "1100px", margin: "0 auto", borderTop: "1px solid rgba(44,196,214,0.1)" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="section-label">ALSO WORKS WITH</div>
          <h2 style={{ fontSize: "clamp(27px, 4vw, 38px)", fontWeight: 900, margin: "12px 0 8px" }}>
            Already have a Neptune Apex?
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "16px", maxWidth: "580px", margin: "0 auto" }}>
            Connect your Apex to NextUpReef and pull probe readings straight into your parameter logs with one tap. No manual entry. No switching apps.
          </p>
        </div>

        {/* What you get today */}
        <div style={{
          background: "var(--bg-card)", border: "1px solid var(--border)",
          borderRadius: "18px", padding: "28px 24px", marginBottom: "24px",
        }}>
          <div style={{ fontSize: "12px", fontWeight: 900, color: "var(--reef)", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: "16px" }}>
            What you get with Apex + NextUpReef today
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>
            {[
              { title: "One-tap parameter sync", body: "Pull pH, ORP, salinity, and temperature from your Apex probes directly into your NextUpReef parameter logs." },
              { title: "AI Reef Advisor", body: "Your synced readings feed directly into the AI Advisor — get daily prioritized analysis of your tank health." },
              { title: "Reef & Stability Scores", body: "Your Apex probe data drives your Reef Score and Stability Score, giving you a clear 0–100 picture of tank health." },
              { title: "Trend detection", body: "NextUpReef watches your synced parameters for slow drift and flags issues early — before your corals feel it." },
            ].map((f) => (
              <div key={f.title} style={{
                background: "rgba(44,196,214,0.04)", border: "1px solid var(--border)",
                borderRadius: "12px", padding: "14px",
              }}>
                <div style={{ fontSize: "14px", fontWeight: 900, color: "var(--text-light)", marginBottom: "5px" }}>{f.title}</div>
                <div style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.55 }}>{f.body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div style={{
          background: "var(--bg-card)", border: "1px solid var(--border)",
          borderRadius: "18px", padding: "6px 18px", overflow: "hidden", marginBottom: "16px",
        }}>
          {/* Header */}
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: "10px", padding: "16px 0 14px", borderBottom: "1px solid var(--border)" }}>
            <div style={{ fontSize: "11px", fontWeight: 900, color: "var(--text-muted)", letterSpacing: "0.5px" }}>&nbsp;</div>
            <div style={{ fontSize: "12px", fontWeight: 900, color: "var(--reef)", textAlign: "center", letterSpacing: "0.4px" }}>NEXTUPREEF<br />+ SHELLY</div>
            <div style={{ fontSize: "12px", fontWeight: 900, color: "var(--text-muted)", textAlign: "center", letterSpacing: "0.4px" }}>APEX ONLY</div>
          </div>
          {[
            ["Hardware cost", "~$19/outlet", "$319 – $669+"],
            ["Equipment control", "Yes — per outlet", "Yes — EnergyBar"],
            ["Automated dosing", "Yes", "Yes (via programming)"],
            ["Works offline", "Yes — schedule on device", "Yes"],
            ["AI Reef Advisor", "Yes", "No"],
            ["Reef & Stability Scores", "Yes", "No"],
            ["Community & leaderboard", "Yes", "No"],
            ["Parameter logging app", "NextUpReef", "Apex Fusion"],
          ].map(([label, shelly, apex], i, arr) => (
            <div key={label} style={{
              display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: "10px",
              padding: "13px 0", borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none",
              alignItems: "center",
            }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-muted)" }}>{label}</div>
              <div style={{ fontSize: "13px", fontWeight: 800, color: "var(--reef)", textAlign: "center" }}>{shelly}</div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-muted)", textAlign: "center" }}>{apex}</div>
            </div>
          ))}
        </div>

        <div style={{
          padding: "16px 20px", borderRadius: "14px",
          background: "rgba(44,196,214,0.06)", border: "1px solid rgba(44,196,214,0.18)",
          fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6,
        }}>
          <strong style={{ color: "var(--text-light)" }}>Already have an Apex?</strong> Connect it to NextUpReef and add Shelly outlets for equipment control — you get the best of both. Or use Shelly outlets standalone without an Apex at a fraction of the cost.
        </div>

        <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "16px", lineHeight: 1.6, fontStyle: "italic" }}>
          Neptune Systems® and Apex® are trademarks of Neptune Systems. NextUpReef is independent and is not affiliated with, endorsed by, or sponsored by Neptune Systems. Pricing based on publicly listed retail prices as of May 2026 — verify current pricing with the manufacturer or retailer.
        </p>
      </section>

    </>
  );
}
