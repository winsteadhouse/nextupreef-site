"use client";

import Script from "next/script";
import { useEffect } from "react";

// Google Ads tag + one conversion: a click on any App Store / Google Play link.
// Store links live on ~30 pages, so one document-level listener covers them all.
const TAG_ID = "AW-18196843104";
const STORE_CLICK = `${TAG_ID}/RQ5uCLTVxv0cEOCU9-RD`;
const STORE_HOSTS = new Set(["apps.apple.com", "play.google.com"]);

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAdsTag() {
  useEffect(() => {
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
      window.gtag?.("event", "conversion", { send_to: STORE_CLICK, transport_type: "beacon" });
    };
    // "auxclick" catches middle-click / open-in-new-tab.
    document.addEventListener("click", onClick, { capture: true });
    document.addEventListener("auxclick", onClick, { capture: true });
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      document.removeEventListener("auxclick", onClick, { capture: true });
    };
  }, []);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${TAG_ID}`} strategy="afterInteractive" />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${TAG_ID}');`}
      </Script>
    </>
  );
}
