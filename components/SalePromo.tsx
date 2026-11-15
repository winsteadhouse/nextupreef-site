"use client";

// The sale card on the home page. It is the same sale as the banner inside the app,
// read from the same database row (public.site_promo()), so the two start and stop
// together and nothing here needs editing or redeploying for the next one.
//
// Renders nothing unless a sale marked "show on site" is inside its dates right now,
// and nothing at all if the lookup fails: a missing ad is fine, a broken hero is not.
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Promo = {
  eyebrow?: string | null;
  headline?: string | null;
  subtext?: string | null;
  badge_top?: string | null;
  badge_bottom?: string | null;
};

// Local development only: /?promo=preview shows a sample card without a live sale.
const DEV_SAMPLE: Promo = {
  eyebrow: "LIMITED TIME",
  headline: "Half off your first year of Pro",
  subtext: "Reef AI, automation and every controller integration. Ends Nov 30.",
  badge_top: "50%",
  badge_bottom: "OFF",
};

export default function SalePromo() {
  const [promo, setPromo] = useState<Promo | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const preview = process.env.NODE_ENV === "development"
          && new URLSearchParams(window.location.search).get("promo") === "preview";
        let found: Promo | null = preview ? DEV_SAMPLE : null;
        if (!found) {
          const { data, error } = await createClient().rpc("site_promo");
          if (!error && data && (data as Promo).headline) found = data as Promo;
        }
        if (!cancelled && found) setPromo(found);
      } catch {
        /* no sale card */
      }
    })();
    return () => { cancelled = true; };
  }, []);

  if (!promo) return null;

  return (
    <aside className="sale-promo" aria-label="Limited-time offer">
      <div className="sale-promo-eyebrow">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
        {promo.eyebrow || "LIMITED TIME"}
      </div>
      <div className="sale-promo-body">
        {promo.badge_top ? (
          <div className="sale-promo-badge" aria-hidden="true">
            <span className="sale-promo-badge-top">{promo.badge_top}</span>
            {promo.badge_bottom ? <span className="sale-promo-badge-bottom">{promo.badge_bottom}</span> : null}
          </div>
        ) : null}
        <div className="sale-promo-text">
          <p className="sale-promo-headline">{promo.headline}</p>
          {promo.subtext ? <p className="sale-promo-subtext">{promo.subtext}</p> : null}
        </div>
      </div>
      <p className="sale-promo-fine">For new Pro subscribers. Download the app, then upgrade inside it.</p>
    </aside>
  );
}
