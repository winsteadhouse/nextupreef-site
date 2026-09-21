"use client";

import Script from "next/script";
import { useEffect } from "react";

// Reddit pixel + the same conversion GoogleAdsTag measures: a click on any
// App Store / Google Play link.
//
// Without this, Reddit sees the click that leaves Reddit and nothing after it,
// which is why the dashboard reported 1,652 impressions, 11 clicks and 0 results.
// It also means Reddit's optimiser has no signal to bid on, so the campaign
// cannot improve on its own.
//
// From Reddit Ads -> Events Manager. Public by design: it ships in the client
// bundle either way, exactly like the Google Ads tag ID next door.
const ADVERTISER_ID = process.env.NEXT_PUBLIC_REDDIT_PIXEL_ID ?? "a2_jpmpfssjw6vb";
const STORE_HOSTS = new Set(["apps.apple.com", "play.google.com"]);

declare global {
  interface Window {
    rdt?: ((...args: unknown[]) => void) & { callQueue?: unknown[] };
  }
}

export default function RedditPixel() {
  useEffect(() => {
    if (!ADVERTISER_ID) return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      let host = "";
      try {
        host = new URL(link.href).hostname;
      } catch {
        return;
      }
      if (!STORE_HOSTS.has(host)) return;
      // "Lead" is Reddit's closest standard event to intent-to-install.
      window.rdt?.("track", "Lead");
    };
    // "auxclick" catches middle-click / open-in-new-tab.
    document.addEventListener("click", onClick, { capture: true });
    document.addEventListener("auxclick", onClick, { capture: true });
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      document.removeEventListener("auxclick", onClick, { capture: true });
    };
  }, []);

  if (!ADVERTISER_ID) return null;

  return (
    <Script id="reddit-pixel" strategy="afterInteractive">
      {`!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js";t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','${ADVERTISER_ID}');rdt('track','PageVisit');`}
    </Script>
  );
}
