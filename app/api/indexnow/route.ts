import { NextResponse } from "next/server";

const KEY = "nextupreefa8f3d2b1c9e4";
const HOST = "nextupreef.com";

const URLS = [
  "https://nextupreef.com",
  "https://nextupreef.com/devices",
  "https://nextupreef.com/hub",
  "https://nextupreef.com/blog",
  "https://nextupreef.com/blog/how-to-setup-dosing-shelly",
  "https://nextupreef.com/blog/how-to-add-shelly-plug",
  "https://nextupreef.com/blog/ai-reef-tank-advisor",
  "https://nextupreef.com/blog/best-reef-tank-tracking-app",
  "https://nextupreef.com/blog/nextupreef-hub-vs-neptune-apex",
  "https://nextupreef.com/blog/how-to-track-saltwater-aquarium-parameters",
  "https://nextupreef.com/blog/reef-tank-alkalinity-calcium-magnesium-guide",
  "https://nextupreef.com/blog/nano-reef-tank-guide",
  "https://nextupreef.com/blog/reef-tank-ph-guide",
  "https://nextupreef.com/blog/reef-tank-sump-guide",
  "https://nextupreef.com/blog/reef-tank-salinity-guide",
  "https://nextupreef.com/blog/reef-tank-temperature-guide",
  "https://nextupreef.com/blog/cyanobacteria-dinoflagellates-algae-reef-pests",
  "https://nextupreef.com/blog/frag-tank-setup-guide",
  "https://nextupreef.com/blog/live-rock-vs-dry-rock",
];

export async function GET() {
  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: URLS }),
    });
    return NextResponse.json({ ok: true, status: res.status });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
