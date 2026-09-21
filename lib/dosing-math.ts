// src/dosing/math.ts
// Dosing arithmetic shared by the Dosing hub, calculator and AI context.
// Strength = "`amount` `unit` of product raises `volume_l` liters by `rise`"
// (rise in dKH for alkalinity, ppm for calcium/magnesium).

export type TestParam = "alk" | "ca" | "mg";
export type Strength = { param: TestParam; rise: number; amount: number; unit: string; volume_l: number; source?: "label" | "chemistry" };

export const GAL_TO_L = 3.78541;
export const PARAM_UNIT: Record<TestParam, string> = { alk: "dKH", ca: "ppm", mg: "ppm" };
export const PARAM_LABEL: Record<TestParam, string> = { alk: "Alkalinity", ca: "Calcium", mg: "Magnesium" };
/** Safe maximum change per day when correcting a low reading. */
// Alk 1 dKH (BRS allows 1.4), Ca 25 ppm (Seachem / Randy Holmes-Farley), Mg 100 ppm (Randy / BRS).
export const DAILY_MAX_RISE: Record<TestParam, number> = { alk: 1, ca: 25, mg: 100 };
/** Drift per day we treat as "stable" (test noise). */
export const STABLE_SLOPE: Record<TestParam, number> = { alk: 0.03, ca: 1.5, mg: 4 };

export const isValidStrength = (s: Strength | null | undefined): s is Strength =>
  !!s && s.rise > 0 && s.amount > 0 && s.volume_l > 0 && (s.param === "alk" || s.param === "ca" || s.param === "mg");

/** Parameter change per unit of product per liter of water. */
export const effectPerUnitLiter = (s: Strength) => (s.rise * s.volume_l) / s.amount;
/** How much `dose` raises a tank of `tankL` liters. */
export const riseFor = (s: Strength, dose: number, tankL: number) => (effectPerUnitLiter(s) * dose) / tankL;
/** How much product raises a tank of `tankL` liters by `rise`. */
export const doseFor = (s: Strength, rise: number, tankL: number) => (rise * tankL) / effectPerUnitLiter(s);

export function roundDose(v: number, unit: string): number {
  if (!Number.isFinite(v)) return 0;
  const u = unit.toLowerCase();
  if (u === "g") return v < 10 ? Math.round(v * 10) / 10 : Math.round(v);
  if (u === "drops") return Math.max(1, Math.round(v));
  if (u === "tsp" || u === "tbsp" || u === "scoops") return Math.round(v * 4) / 4;
  return v < 10 ? Math.round(v * 10) / 10 : v < 50 ? Math.round(v * 2) / 2 : Math.round(v);
}

export type Pt = { t: number; v: number };
export type Trend = { slope: number; se: number; n: number; spanDays: number; last: Pt; first: Pt };

/** Linear trend (units per day) over the last `windowDays`. Needs 3+ readings spanning 4+ days. */
export function trendOf(points: Pt[], windowDays = 21, since = 0): Trend | null {
  const cut = Math.max(Date.now() - windowDays * 86400000, since);
  const pts = points.filter((p) => p.t >= cut && Number.isFinite(p.v)).sort((a, b) => a.t - b.t);
  if (pts.length < 3) return null;
  const spanDays = (pts[pts.length - 1].t - pts[0].t) / 86400000;
  if (spanDays < 4) return null;
  const t0 = pts[0].t, xs = pts.map((p) => (p.t - t0) / 86400000), ys = pts.map((p) => p.v);
  const n = pts.length, mx = xs.reduce((a, b) => a + b, 0) / n, my = ys.reduce((a, b) => a + b, 0) / n;
  let num = 0, den = 0;
  for (let i = 0; i < n; i++) { num += (xs[i] - mx) * (ys[i] - my); den += (xs[i] - mx) ** 2; }
  if (!den) return null;
  const slope = num / den;
  // Standard error of the slope, so a couple of noisy tests don't read as a trend.
  const resid = ys.reduce((a, y, i) => a + (y - (my + slope * (xs[i] - mx))) ** 2, 0);
  const se = n > 2 ? Math.sqrt(resid / (n - 2) / den) : Infinity;
  return { slope, se, n, spanDays, last: pts[pts.length - 1], first: pts[0] };
}

export type DialIn = {
  status: "stable" | "dropping" | "rising";
  method: "exact" | "percent";
  newDose: number;
  changePct: number;
  /** Tank's daily use in param units, when strength is known. */
  consumptionPerDay: number | null;
  /** True when we capped the step at 30%; retest and run the calculator again. */
  capped: boolean;
};

/**
 * Daily dose that holds the parameter steady. With a known strength this is exact
 * (dose - slope * tankL / effect); without one we fall back to the hobby rule of
 * adjusting ~10% and retesting.
 */
export function dialIn(args: { dose: number; unit: string; slope: number; slopeSE?: number; param: TestParam; tankL: number; strength?: Strength | null }): DialIn {
  const { dose, unit, slope, param, tankL, strength } = args;
  // "Stable" = inside the noise band, or not distinguishable from zero (slope < 2 x its SE).
  const noisy = args.slopeSE != null && Number.isFinite(args.slopeSE) && Math.abs(slope) < 2 * args.slopeSE;
  const status: DialIn["status"] = Math.abs(slope) <= STABLE_SLOPE[param] || noisy ? "stable" : slope < 0 ? "dropping" : "rising";
  const unitOk = !!strength && String(strength.unit).toLowerCase() === String(unit).toLowerCase();
  if (isValidStrength(strength) && strength.param === param && unitOk && tankL > 0) {
    const eff = effectPerUnitLiter(strength);
    const consumption = (eff * dose) / tankL - slope;
    let next = status === "stable" ? dose : dose - (slope * tankL) / eff;
    let capped = false;
    // Never change more than 30% in one step; retest and run it again.
    if (next > dose * 1.3 && dose > 0) { next = dose * 1.3; capped = true; }
    if (next < dose * 0.7) { next = dose * 0.7; capped = true; }
    next = Math.max(0, roundDose(next, unit));
    return { status, method: "exact", newDose: next, changePct: dose > 0 ? Math.round(((next - dose) / dose) * 100) : 0, consumptionPerDay: consumption, capped };
  }
  const pct = status === "stable" ? 0 : Math.abs(slope) > STABLE_SLOPE[param] * 4 ? 15 : 10;
  const signed = status === "dropping" ? pct : status === "rising" ? -pct : 0;
  const next = Math.max(0, roundDose(dose * (1 + signed / 100), unit));
  return { status, method: "percent", newDose: next, changePct: signed, consumptionPerDay: null, capped: false };
}

export type Correction = { totalRise: number; totalAmount: number; days: number; perDay: number };

/** One-time correction from `current` to `target`, split so no day exceeds the safe max. */
export function correctionPlan(args: { current: number; target: number; param: TestParam; tankL: number; strength: Strength; unit: string }): Correction | null {
  const { current, target, param, tankL, strength, unit } = args;
  const totalRise = target - current;
  if (!(totalRise > 0) || !isValidStrength(strength) || tankL <= 0) return null;
  const days = Math.max(1, Math.ceil(totalRise / DAILY_MAX_RISE[param] - 1e-9));
  const totalAmount = doseFor(strength, totalRise, tankL);
  return { totalRise, totalAmount: roundDose(totalAmount, unit), days, perDay: roundDose(totalAmount / days, unit) };
}

/** Local hour (0-23) <-> UTC hour for reminder scheduling. */
export const localHourToUtc = (h: number) => { const d = new Date(); d.setHours(h, 0, 0, 0); return d.getUTCHours(); };
export const utcHourToLocal = (h: number) => { const d = new Date(); d.setUTCHours(h, 0, 0, 0); return d.getHours(); };
export const hourLabel = (h: number) => (h === 0 ? "12 AM" : h < 12 ? h + " AM" : h === 12 ? "12 PM" : h - 12 + " PM");
