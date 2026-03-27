"use client";

/**
 * NextUp-Scout Dashboard v1.5.0
 * 
 * What's new:
 * - Loads unified_rankings.json (ONE file instead of 4)
 * - eBay links on Live Auctions, BIN, Sold buttons
 * - Fixed field name inconsistencies
 * - Better error handling
 * - Removed redundant merge logic (300+ lines saved!)
 */

import { useEffect, useMemo, useState } from "react";

const DASHBOARD_VERSION = "1.5.0";
type AnyRow = Record<string, any>;

const HOT_OPS_DELTA = 0.09; // 🔥 7-day OPS breakout threshold

// -------------------------------
// Formatting + Safety Helpers
// -------------------------------
function safeNum(v: any, fallback = 0) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}
function fmtMoney(v: any) {
  const n = safeNum(v, NaN);
  return Number.isFinite(n) ? `$${n.toFixed(0)}` : "N/A";
}
function fmtPct(v: any, digits = 0) {
  const n = safeNum(v, NaN);
  return Number.isFinite(n) ? `${(n * 100).toFixed(digits)}%` : "N/A";
}
function fmt3(v: any) {
  const n = safeNum(v, NaN);
  return Number.isFinite(n) ? n.toFixed(3) : "N/A";
}
function fmt1(v: any) {
  const n = safeNum(v, NaN);
  return Number.isFinite(n) ? n.toFixed(1) : "N/A";
}
function fmt0(v: any) {
  const n = safeNum(v, NaN);
  return Number.isFinite(n) ? n.toFixed(0) : "N/A";
}

// -------------------------------
// Player Typing + Scoring
// -------------------------------
function getPlayerId(p: AnyRow) {
  return p.player_id ?? p.MLBAMID ?? p.id ?? null;
}

function getPlayerType(p: AnyRow) {
  // Use source field from unified rankings (already determined by build script)
  if (p.source === "MLB") return "MLB";
  if (p.source === "Prospect") return "Prospect";
  
  // Fallback: use Level field if source missing
  const level = p.Level || p.level || "";
  if (level === "MLB") return "MLB";
  if (level === "AAA" || level === "AA") return "Prospect";
  
  return "MLB"; // Safe default
}

function computeBreakoutScore(p: AnyRow) {
  // breakoutScore is now standardized in unified_rankings.json
  return safeNum(p.breakoutScore, 0);
}

function isBowmanFirst(p: AnyRow) {
  const type = getPlayerType(p);
  const score = computeBreakoutScore(p);
  const callUp = safeNum(p.callUpRisk, 0);
  const age = safeNum(p.Age, 99);
  return type !== "MLB" && age <= 24 && callUp >= 60 && score >= 45;
}

function tierFromScore(score: number) {
  if (score >= 75) return { text: "ELITE", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" };
  if (score >= 60) return { text: "HIGH", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" };
  if (score >= 45) return { text: "MEDIUM", color: "bg-green-500/20 text-green-300 border-green-500/30" };
  return { text: "LOW", color: "bg-slate-500/20 text-slate-300 border-slate-500/30" };
}

function investmentCallout(p: AnyRow) {
  const type = getPlayerType(p);
  const score = computeBreakoutScore(p);
  const callUp = safeNum(p.callUpRisk, 0);

  if (isBowmanFirst(p)) return "💎 Bowman First Target";
  if (type !== "MLB" && callUp >= 75) return "🚀 Call-Up Watch";
  if (type === "MLB" && score >= 70) return "💎 Strong Buy";
  if (score >= 60) return "✅ Strong Buy";
  if (score >= 45) return "👀 Watch";
  return "⏸️ Hold";
}

// -------------------------------
// Bowman Chrome 1st PSA 10 "Asset Universe"
// -------------------------------
type CardTierKey =
  | "base"
  | "refractor"
  | "blue150"
  | "gold50"
  | "orange25"
  | "baseAuto"
  | "refractorAuto"
  | "blue150Auto"
  | "gold50Auto"
  | "orange25Auto";

const CARD_TIERS: { key: CardTierKey; label: string; group: "nonauto" | "auto" }[] = [
  { key: "base", label: "Base", group: "nonauto" },
  { key: "refractor", label: "Refractor", group: "nonauto" },
  { key: "blue150", label: "/150", group: "nonauto" },
  { key: "gold50", label: "Gold /50", group: "nonauto" },
  { key: "orange25", label: "Orange /25", group: "nonauto" },

  { key: "baseAuto", label: "Base Auto", group: "auto" },
  { key: "refractorAuto", label: "Refractor Auto", group: "auto" },
  { key: "blue150Auto", label: "/150 Auto", group: "auto" },
  { key: "gold50Auto", label: "Gold Auto /50", group: "auto" },
  { key: "orange25Auto", label: "Orange Auto /25", group: "auto" },
];

function cardTierToSearchPhrase(tier: CardTierKey) {
  switch (tier) {
    case "base":
      return "Bowman Chrome 1st PSA 10";
    case "refractor":
      return "Bowman Chrome 1st Refractor PSA 10";
    case "blue150":
      return "Bowman Chrome 1st Blue /150 PSA 10";
    case "gold50":
      return "Bowman Chrome 1st Gold /50 PSA 10";
    case "orange25":
      return "Bowman Chrome 1st Orange /25 PSA 10";

    case "baseAuto":
      return "Bowman Chrome 1st Auto Autograph PSA 10";
    case "refractorAuto":
      return "Bowman Chrome 1st Refractor Auto Autograph PSA 10";
    case "blue150Auto":
      return "Bowman Chrome 1st Blue /150 Auto Autograph PSA 10";
    case "gold50Auto":
      return "Bowman Chrome 1st Gold /50 Auto Autograph PSA 10";
    case "orange25Auto":
      return "Bowman Chrome 1st Orange /25 Auto Autograph PSA 10";
    default:
      return "Bowman Chrome 1st PSA 10";
  }
}

// Build eBay search URL
function buildEbaySearchUrl(playerName: string, tier: CardTierKey, opts: {
  includeAuctions?: boolean;
  includeBIN?: boolean;
  soldOnly?: boolean;
} = {}) {
  const { includeAuctions = true, includeBIN = true, soldOnly = false } = opts;
  
  const kw = `${playerName} ${cardTierToSearchPhrase(tier)}`;
  const params = new URLSearchParams();
  params.set("_nkw", kw);
  
  if (soldOnly) {
    // Sold listings only
    params.set("LH_Sold", "1");
    params.set("LH_Complete", "1");
    params.set("_sop", "13"); // Sort by recently ended
  } else {
    // Active listings
    params.set("_sop", "1"); // Sort by ending soonest
    
    const auctions = includeAuctions || (!includeAuctions && !includeBIN);
    const bin = includeBIN || (!includeAuctions && !includeBIN);
    
    if (auctions) params.set("LH_Auction", "1");
    if (bin) params.set("LH_BIN", "1");
  }

  return `https://www.ebay.com/sch/i.html?${params.toString()}`;
}

// -------------------------------
// Market Model (Mock for UI-first)
// -------------------------------
type MarketSnapshot = {
  tier: CardTierKey;
  avg5d: number;
  avg30d: number;
  trend5d: number;
  liveAuctions: number;
  liveBIN: number;
  sold5d: number;
  sellThrough: number;
  bestAuctionPrice: number | null;
  bestAuctionEndsMins: number | null;
  bestBINPrice: number | null;
  fairValue: number;
  edgeAuction: number | null;
  edgeBIN: number | null;
};

function clamp(n: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, n));
}

function mockMarketForPlayer(player: AnyRow, tier: CardTierKey, feeRate: number, shipFlat: number): MarketSnapshot {
  const score = computeBreakoutScore(player);
  const callUp = safeNum(player.callUpRisk, 0) / 100;
  const hotBoost = player.isHot ? 0.08 : 0;
  const viralBoost = player.isViral ? 0.10 : 0;

  const base = 90 + score * 6 + callUp * 180;

  const mult = (() => {
    switch (tier) {
      case "base": return 1.0;
      case "refractor": return 1.6;
      case "blue150": return 2.3;
      case "gold50": return 3.8;
      case "orange25": return 5.5;
      case "baseAuto": return 3.0;
      case "refractorAuto": return 5.2;
      case "blue150Auto": return 6.8;
      case "gold50Auto": return 9.8;
      case "orange25Auto": return 13.5;
      default: return 1.0;
    }
  })();

  const avg30d = Math.round(clamp(base * mult, 60, 9500));
  const trend5d = clamp((score - 50) / 300 + hotBoost + viralBoost - 0.02, -0.15, 0.30);
  const avg5d = Math.round(avg30d * (1 + trend5d * 0.55));

  const depthBase = tier.includes("orange") ? 4 : tier.includes("gold") ? 8 : tier.includes("blue150") ? 12 : tier.includes("refractor") ? 18 : 26;
  const liquidityTilt = clamp(1.0 + (player.isViral ? 0.25 : 0) + (player.isHot ? 0.15 : 0) + callUp * 0.25, 0.7, 1.6);

  const liveBIN = Math.max(0, Math.round(depthBase * liquidityTilt * (tier.includes("Auto") ? 0.7 : 1.0)));
  const liveAuctions = Math.max(0, Math.round(liveBIN * 0.45));
  const sold5d = Math.max(0, Math.round(liveBIN * 0.35));
  const sellThrough = clamp(sold5d / Math.max(1, liveBIN + liveAuctions), 0.05, 0.95);

  const bestAuctionPrice =
    liveAuctions > 0 ? Math.round(avg5d * clamp(0.86 - (player.isHot ? 0.04 : 0) - (player.isViral ? 0.03 : 0), 0.72, 0.92)) : null;
  const bestBINPrice = liveBIN > 0 ? Math.round(avg5d * clamp(0.94 - (player.isViral ? 0.05 : 0), 0.82, 0.98)) : null;
  const bestAuctionEndsMins = bestAuctionPrice != null ? Math.round(clamp(10 + (1 - sellThrough) * 80, 5, 120)) : null;

  const fairValue = Math.round(avg30d * (1 + clamp((score - 55) / 140, -0.15, 0.45)) * (1 + trend5d * 0.65));
  const edgeAuction = bestAuctionPrice != null ? (fairValue - bestAuctionPrice) / bestAuctionPrice : null;
  const edgeBIN = bestBINPrice != null ? (fairValue - bestBINPrice) / bestBINPrice : null;

  void feeRate;
  void shipFlat;

  return {
    tier,
    avg5d,
    avg30d,
    trend5d,
    liveAuctions,
    liveBIN,
    sold5d,
    sellThrough,
    bestAuctionPrice,
    bestAuctionEndsMins,
    bestBINPrice,
    fairValue,
    edgeAuction,
    edgeBIN,
  };
}

function netAfterFees(sellPrice: number, feeRate: number, shipFlat: number) {
  return sellPrice * (1 - feeRate) - shipFlat;
}

function actionFromEdge(edge: number | null) {
  if (edge == null) return { text: "—", pill: "bg-slate-700/40 text-slate-200 border border-slate-600/40" };
  if (edge >= 0.25) return { text: "STRONG BUY", pill: "bg-emerald-500/20 text-emerald-200 border border-emerald-500/30" };
  if (edge >= 0.12) return { text: "BUY", pill: "bg-green-500/20 text-green-200 border border-green-500/30" };
  if (edge >= 0.05) return { text: "WATCH", pill: "bg-yellow-500/15 text-yellow-200 border border-yellow-500/25" };
  return { text: "HOLD", pill: "bg-slate-700/40 text-slate-200 border border-slate-600/40" };
}

// -------------------------------
// Main Component
// -------------------------------
export default function Dashboard() {
  const [players, setPlayers] = useState<AnyRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("breakoutScore");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [filter, setFilter] = useState<"all" | "mlb" | "prospects" | "viral" | "bowman" | "hot">("all");
  const [dataTimestamp, setDataTimestamp] = useState("");

  // Market UI controls
  const [cardTier, setCardTier] = useState<CardTierKey>("refractor");
  const [includeAuctions, setIncludeAuctions] = useState(true);
  const [includeBIN, setIncludeBIN] = useState(true);

  // Fee model inputs
  const [feeRate, setFeeRate] = useState(0.13);
  const [shipFlat, setShipFlat] = useState(5.5);
  const [minRoi, setMinRoi] = useState(0.25);

  const loadData = async () => {
    setLoading(true);
    setLoadError(null);
    
    try {
      const t = Date.now();
      const response = await fetch(`/data/mlb/unified_rankings.json?v=${t}`);
      
      if (!response.ok) {
        throw new Error(`Failed to load data: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error("Invalid data format: expected array");
      }
      
      setPlayers(data);
      setDataTimestamp(new Date().toLocaleString());
    } catch (error) {
      console.error("Data load error:", error);
      setLoadError(error instanceof Error ? error.message : "Unknown error");
      setPlayers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Filter and sort players
  const filteredPlayers = useMemo(() => {
    let filtered = [...players];

    // Apply filter
    if (filter === "mlb") filtered = filtered.filter((p) => p.source === "MLB");
    if (filter === "prospects") filtered = filtered.filter((p) => p.source === "Prospect");
    if (filter === "viral") filtered = filtered.filter((p) => p.isViral === true);
    if (filter === "bowman") filtered = filtered.filter((p) => isBowmanFirst(p));
    if (filter === "hot") filtered = filtered.filter((p) => p.isHot === true);

    // Apply search
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      filtered = filtered.filter((p) => String(p?.Name ?? "").toLowerCase().includes(q));
    }

    // Apply sort
    filtered.sort((a, b) => {
      const av = safeNum(a?.[sortBy], 0);
      const bv = safeNum(b?.[sortBy], 0);
      return sortOrder === "desc" ? bv - av : av - bv;
    });

    console.log(`Filter: ${filter}, Results: ${filtered.length}`); // Debug logging
    return filtered;
  }, [players, filter, searchQuery, sortBy, sortOrder]);

  // Stats
  const stats = useMemo(() => {
    const mlb = players.filter(p => p.source === "MLB").length;
    const prospects = players.filter(p => p.source === "Prospect").length;
    const viral = players.filter(p => p.isViral).length;
    const hot = players.filter(p => p.isHot).length;
    const bowman = players.filter(p => isBowmanFirst(p)).length;
    
    return { mlb, prospects, viral, hot, bowman, total: players.length };
  }, [players]);

  const getMarketForPlayer = (player: AnyRow) => {
    return mockMarketForPlayer(player, cardTier, feeRate, shipFlat);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-2xl">Loading unified rankings…</div>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-2xl mb-4">❌ Data Load Error</div>
          <div className="text-slate-300 mb-4">{loadError}</div>
          <button
            onClick={loadData}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const nonAuto = CARD_TIERS.filter((t) => t.group === "nonauto");
  const autos = CARD_TIERS.filter((t) => t.group === "auto");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-blue-500/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
          {/* Row 1: Title + filters */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-baseline gap-3 mr-3">
              <h1 className="text-2xl font-bold text-white">NextUp-Scout</h1>
              <span className="text-xs text-slate-400 font-mono">v{DASHBOARD_VERSION}</span>
            </div>

            {["all", "mlb", "prospects", "viral", "hot", "bowman"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
                  filter === f ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                }`}
              >
                {f === "hot" ? "🔥 Hot (7d)" : f === "bowman" ? "💎 Bowman First" : f === "viral" ? "🔥 Viral" : f}
              </button>
            ))}

            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search…"
              className="ml-auto px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white w-[220px] max-w-full"
            />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white"
            >
              <option value="breakoutScore">Score</option>
              <option value="OPS">OPS</option>
              <option value="hotOPS">Hot Δ OPS</option>
              <option value="Age">Age</option>
              <option value="callUpRisk">Call-Up %</option>
            </select>

            <button
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className="px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white hover:bg-slate-700 transition"
              title="Toggle sort order"
            >
              {sortOrder === "desc" ? "↓" : "↑"}
            </button>
          </div>

          {/* Row 2: Card controls */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 font-semibold mr-2">Card Type (Bowman Chrome 1st PSA 10):</span>

              <div className="flex flex-wrap gap-2">
                {nonAuto.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setCardTier(t.key)}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
                      cardTier === t.key ? "bg-emerald-600 text-white" : "bg-slate-700 text-slate-200 hover:bg-slate-600"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <span className="text-slate-600 mx-2">|</span>

              <div className="flex flex-wrap gap-2">
                {autos.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setCardTier(t.key)}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
                      cardTier === t.key ? "bg-purple-600 text-white" : "bg-slate-700 text-slate-200 hover:bg-slate-600"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="ml-auto flex flex-wrap items-center gap-2">
                <label className="flex items-center gap-2 text-xs text-slate-300 bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-2">
                  <input
                    type="checkbox"
                    checked={includeAuctions}
                    onChange={(e) => setIncludeAuctions(e.target.checked)}
                    className="accent-blue-500"
                  />
                  Auctions
                </label>
                <label className="flex items-center gap-2 text-xs text-slate-300 bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-2">
                  <input type="checkbox" checked={includeBIN} onChange={(e) => setIncludeBIN(e.target.checked)} className="accent-blue-500" />
                  BIN
                </label>

                <div className="flex flex-wrap items-center gap-2 bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-2">
                  <span className="text-xs text-slate-400 font-semibold">Fees:</span>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">eBay</span>
                    <input
                      value={Math.round(feeRate * 100)}
                      onChange={(e) => setFeeRate(clamp(safeNum(e.target.value, 13) / 100, 0.05, 0.25))}
                      className="w-[56px] px-2 py-1 bg-slate-900 border border-slate-700 rounded text-white text-xs"
                    />
                    <span className="text-xs text-slate-400">%</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">Ship</span>
                    <input
                      value={shipFlat}
                      onChange={(e) => setShipFlat(clamp(safeNum(e.target.value, 5.5), 0, 50))}
                      className="w-[56px] px-2 py-1 bg-slate-900 border border-slate-700 rounded text-white text-xs"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">Min ROI</span>
                    <input
                      value={Math.round(minRoi * 100)}
                      onChange={(e) => setMinRoi(clamp(safeNum(e.target.value, 25) / 100, 0.05, 1.0))}
                      className="w-[56px] px-2 py-1 bg-slate-900 border border-slate-700 rounded text-white text-xs"
                    />
                    <span className="text-xs text-slate-400">%</span>
                  </div>
                </div>

                <button
                  onClick={loadData}
                  className="px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white hover:bg-slate-700 transition"
                  title="Reload data"
                >
                  Refresh
                </button>
              </div>
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span className="px-2 py-1 rounded-md bg-slate-800/60 border border-slate-700">
                MLB: <b className="text-white">{stats.mlb}</b>
              </span>
              <span className="px-2 py-1 rounded-md bg-slate-800/60 border border-slate-700">
                Prospects: <b className="text-white">{stats.prospects}</b>
              </span>
              <span className="px-2 py-1 rounded-md bg-slate-800/60 border border-slate-700">
                Viral: <b className="text-white">{stats.viral}</b>
              </span>
              <span className="px-2 py-1 rounded-md bg-slate-800/60 border border-slate-700">
                Bowman First: <b className="text-white">{stats.bowman}</b>
              </span>
              <span className="px-2 py-1 rounded-md bg-slate-800/60 border border-slate-700">
                Hot (7d): <b className="text-white">{stats.hot}</b>
              </span>

              <span className="ml-auto text-slate-400">Data loaded: {dataTimestamp || "—"}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPlayers.map((p, i) => (
          <PlayerCard
            key={`${p.source || 'unknown'}-${p.Name || i}`}
            player={p}
            rank={i + 1}
            cardTier={cardTier}
            includeAuctions={includeAuctions}
            includeBIN={includeBIN}
            feeRate={feeRate}
            shipFlat={shipFlat}
            minRoi={minRoi}
            getMarketForPlayer={getMarketForPlayer}
          />
        ))}
      </main>
    </div>
  );
}

// -------------------------------
// Player Card
// -------------------------------
function PlayerCard({
  player,
  rank,
  cardTier,
  includeAuctions,
  includeBIN,
  feeRate,
  shipFlat,
  minRoi,
  getMarketForPlayer,
}: any) {
  const score = computeBreakoutScore(player);
  const isProspect = getPlayerType(player) !== "MLB";
  const tier = tierFromScore(score);
  const callout = investmentCallout({ ...player, source: isProspect ? "Prospect" : "MLB" });

  const [tab, setTab] = useState<"player" | "market">("player");

  const market: MarketSnapshot = getMarketForPlayer(player);

  const bestDealPrice = market.bestBINPrice ?? market.bestAuctionPrice;
  const bestDealEdge = market.bestBINPrice != null ? market.edgeBIN : market.edgeAuction;
  const action = actionFromEdge(bestDealEdge);
  
  const projectedNet = netAfterFees(market.fairValue, feeRate, shipFlat);
  const netProfit = bestDealPrice != null ? projectedNet - bestDealPrice : null;
  const roi = bestDealPrice != null ? netProfit! / bestDealPrice : null;
  const meetsRoi = roi != null && roi >= minRoi;

  const backStats = [
    { k: "PA", v: player.PA },
    { k: "AB", v: player.AB },
    { k: "H", v: player.H },
    { k: "HR", v: player.HR },
    { k: "RBI", v: player.RBI },
    { k: "SB", v: player.SB },
    { k: "BB%", v: player["BB%"] },
    { k: "K%", v: player["K%"] },
    { k: "ISO", v: player.ISO },
    { k: "EV", v: player.avgEV },
    { k: "maxEV", v: player.maxEV },
    { k: "Barrel%", v: player.barrel_pct },
  ];

  const showBuzz = safeNum(player.buzz_score, 0) > 0;
  const buzz = safeNum(player.buzz_score, 0);

  // eBay URLs
  const ebayUrlAll = buildEbaySearchUrl(String(player.Name ?? ""), cardTier, { includeAuctions, includeBIN });
  const ebayUrlAuctions = buildEbaySearchUrl(String(player.Name ?? ""), cardTier, { includeAuctions: true, includeBIN: false });
  const ebayUrlBIN = buildEbaySearchUrl(String(player.Name ?? ""), cardTier, { includeAuctions: false, includeBIN: true });
  const ebayUrlSold = buildEbaySearchUrl(String(player.Name ?? ""), cardTier, { soldOnly: true });

  return (
    <div
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 border-l-4 rounded-xl p-6 hover:bg-slate-800/70 transition-all hover:shadow-xl"
      style={{
        borderLeftColor:
          score >= 75 ? "rgb(234 179 8)" : score >= 60 ? "rgb(59 130 246)" : score >= 45 ? "rgb(34 197 94)" : "rgb(100 116 139)",
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4 gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="text-slate-500 font-mono text-lg font-bold">#{rank}</span>
            <h3 className="text-2xl font-bold text-white truncate">{player.Name}</h3>
            {player.isHot && <span className="text-2xl" title="Hot OPS mover (7d)">🔥</span>}
            {player.isViral && <span className="text-2xl" title="Viral momentum">📈</span>}
            {showBuzz && (
              <span className="text-xs px-2 py-1 rounded-md bg-pink-500/15 text-pink-200 border border-pink-500/25" title="Social buzz score">
                Buzz {fmt0(buzz)}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-400 flex-wrap">
            <span className="font-medium">{player.Team || "N/A"}</span>
            <span>•</span>
            <span>Age {player.Age || "?"}</span>
            <span>•</span>
            <span
              className={`px-2 py-1 rounded-md text-xs font-semibold border ${
                isProspect ? "bg-purple-500/20 text-purple-300 border-purple-500/30" : "bg-blue-500/20 text-blue-300 border-blue-500/30"
              }`}
            >
              {isProspect ? (player.Level || "Prospect") : "MLB"}
            </span>

            <span className="px-2 py-1 rounded-md text-xs font-semibold bg-slate-700/40 text-slate-200 border border-slate-600/40">
              {callout}
            </span>

            <span className={`px-2 py-1 rounded-md text-xs font-semibold ${action.pill}`} title="Market signal (mocked until API)">
              {action.text}
              {bestDealEdge != null ? ` • Edge ${fmtPct(bestDealEdge, 0)}` : ""}
            </span>

            {meetsRoi && (
              <span className="px-2 py-1 rounded-md text-xs font-semibold bg-emerald-500/15 text-emerald-200 border border-emerald-500/25" title="Meets your Min ROI">
                ✅ ROI {fmtPct(roi, 0)}
              </span>
            )}
          </div>
        </div>

        <div className="text-right shrink-0">
          <div className={`text-3xl font-bold mb-2 ${score >= 70 ? "text-yellow-300" : score >= 60 ? "text-blue-300" : score >= 45 ? "text-green-300" : "text-slate-400"}`}>
            {score.toFixed(1)}
          </div>
          <div className={`text-xs px-3 py-1 rounded-md font-bold border ${tier.color}`}>{tier.text}</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => setTab("player")}
          className={`px-3 py-2 rounded-lg text-sm font-semibold border transition ${
            tab === "player" ? "bg-slate-900/60 text-white border-slate-600" : "bg-slate-900/30 text-slate-300 border-slate-700 hover:bg-slate-900/45"
          }`}
        >
          Player Stats
        </button>
        <button
          onClick={() => setTab("market")}
          className={`px-3 py-2 rounded-lg text-sm font-semibold border transition ${
            tab === "market" ? "bg-slate-900/60 text-white border-slate-600" : "bg-slate-900/30 text-slate-300 border-slate-700 hover:bg-slate-900/45"
          }`}
        >
          Card Market
        </button>
      </div>

      {/* Player Tab */}
      {tab === "player" && (
        <>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <Stat label="AVG" value={player.AVG != null ? fmt3(player.AVG) : "N/A"} />
            <Stat label="HR" value={player.HR != null ? String(player.HR) : "N/A"} />
            <Stat label="RBI" value={player.RBI != null ? String(player.RBI) : "N/A"} />
            <Stat label="OPS" value={player.OPS != null ? fmt3(player.OPS) : "N/A"} />
            <Stat label="Hits" value={player.H != null ? String(player.H) : "N/A"} />
            <Stat label="Call-Up" value={player.callUpRisk != null ? `${fmt0(player.callUpRisk)}%` : "N/A"} />
          </div>

          <div className="bg-slate-900/40 border border-slate-700 rounded-xl p-4">
            <div className="text-xs text-slate-500 font-semibold mb-2">More stats</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 text-xs">
              {backStats.map((s: any) => (
                <div key={s.k} className="flex items-center justify-between gap-2">
                  <span className="text-slate-500">{s.k}</span>
                  <span className="text-slate-200 font-mono">
                    {s.k === "BB%" || s.k === "K%" || s.k === "Barrel%"
                      ? `${fmt1(s.v)}%`
                      : s.k === "EV" || s.k === "maxEV"
                      ? fmt1(s.v)
                      : s.k === "ISO"
                      ? fmt3(s.v)
                      : String(s.v ?? "—")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Market Tab */}
      {tab === "market" && (
        <div className="space-y-4">
          <div className="bg-slate-900/40 border border-slate-700 rounded-xl p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs text-slate-500 font-semibold">Tracking</div>
                <div className="text-white font-semibold">{cardTierToSearchPhrase(market.tier)}</div>
                <div className="text-xs text-slate-400 mt-1">*UI mock values until API is wired</div>
              </div>

              <div className="text-right">
                <div className="text-xs text-slate-500 font-semibold">Fair Value (model)</div>
                <div className="text-2xl font-bold text-white">{fmtMoney(market.fairValue)}</div>
                <div className="text-xs text-slate-400">
                  5d avg {fmtMoney(market.avg5d)} • 30d avg {fmtMoney(market.avg30d)} • trend {fmtPct(market.trend5d, 1)}
                </div>
              </div>
            </div>
          </div>

          {/* Supply/Demand - NOW WITH EBAY LINKS! */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <a
              href={ebayUrlAuctions}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/40 border border-slate-700 rounded-xl p-3 hover:border-blue-500/50 hover:bg-slate-900/60 transition cursor-pointer"
            >
              <div className="text-xs text-slate-500 font-semibold mb-1">Live Auctions</div>
              <div className="text-lg font-bold text-white">{market.liveAuctions}</div>
              <div className="text-xs text-blue-400 mt-1">View on eBay →</div>
            </a>
            
            <a
              href={ebayUrlBIN}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/40 border border-slate-700 rounded-xl p-3 hover:border-blue-500/50 hover:bg-slate-900/60 transition cursor-pointer"
            >
              <div className="text-xs text-slate-500 font-semibold mb-1">Buy It Now</div>
              <div className="text-lg font-bold text-white">{market.liveBIN}</div>
              <div className="text-xs text-blue-400 mt-1">View on eBay →</div>
            </a>
            
            <a
              href={ebayUrlSold}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/40 border border-slate-700 rounded-xl p-3 hover:border-blue-500/50 hover:bg-slate-900/60 transition cursor-pointer"
            >
              <div className="text-xs text-slate-500 font-semibold mb-1">Sold (5d)</div>
              <div className="text-lg font-bold text-white">{market.sold5d}</div>
              <div className="text-xs text-blue-400 mt-1">View on eBay →</div>
            </a>
            
            <div className="bg-slate-900/40 border border-slate-700 rounded-xl p-3">
              <div className="text-xs text-slate-500 font-semibold mb-1">Sell-through</div>
              <div className="text-lg font-bold text-white">{fmtPct(market.sellThrough, 0)}</div>
            </div>
          </div>

          {/* Deal Panel */}
          <div className="bg-slate-900/40 border border-slate-700 rounded-xl p-4">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <div className="text-xs text-slate-500 font-semibold">Deal Panel</div>
                <div className="text-sm text-slate-300">BIN is prioritized because great deals often appear there first.</div>
              </div>
              <div className="text-xs text-slate-400 text-right">
                Fees: {Math.round(feeRate * 100)}% • Ship: {fmtMoney(shipFlat)} • Min ROI: {Math.round(minRoi * 100)}%
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="bg-slate-950/40 border border-slate-700 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-semibold text-white">Best Buy It Now</div>
                  <span className={`text-xs px-2 py-1 rounded-md border ${actionFromEdge(market.edgeBIN).pill}`}>
                    {actionFromEdge(market.edgeBIN).text}
                    {market.edgeBIN != null ? ` • ${fmtPct(market.edgeBIN, 0)}` : ""}
                  </span>
                </div>
                <div className="text-2xl font-bold text-white">{market.bestBINPrice != null ? fmtMoney(market.bestBINPrice) : "—"}</div>
                <div className="text-xs text-slate-400 mt-1">Fair {fmtMoney(market.fairValue)} • 5d avg {fmtMoney(market.avg5d)}</div>
              </div>

              <div className="bg-slate-950/40 border border-slate-700 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-semibold text-white">Best Auction</div>
                  <span className={`text-xs px-2 py-1 rounded-md border ${actionFromEdge(market.edgeAuction).pill}`}>
                    {actionFromEdge(market.edgeAuction).text}
                    {market.edgeAuction != null ? ` • ${fmtPct(market.edgeAuction, 0)}` : ""}
                  </span>
                </div>
                <div className="text-2xl font-bold text-white">{market.bestAuctionPrice != null ? fmtMoney(market.bestAuctionPrice) : "—"}</div>
                <div className="text-xs text-slate-400 mt-1">
                  {market.bestAuctionEndsMins != null ? `Ends ~${market.bestAuctionEndsMins} min` : "No auctions detected"}
                </div>
              </div>
            </div>

            {/* ROI estimate */}
            <div className="mt-4 bg-slate-950/30 border border-slate-700 rounded-xl p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Profit Snapshot (after fees)</div>
                  <div className="text-sm text-slate-300">
                    Assumes you sell at <b className="text-white">{fmtMoney(market.fairValue)}</b> and pay fees/shipping.
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-xs text-slate-500 font-semibold">Net after fees</div>
                    <div className="text-lg font-bold text-white">{fmtMoney(projectedNet)}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500 font-semibold">Best deal</div>
                    <div className="text-lg font-bold text-white">{bestDealPrice != null ? fmtMoney(bestDealPrice) : "—"}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500 font-semibold">Net profit</div>
                    <div className={`text-lg font-bold ${netProfit != null && netProfit > 0 ? "text-emerald-200" : "text-slate-300"}`}>
                      {netProfit != null ? fmtMoney(netProfit) : "—"}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500 font-semibold">ROI</div>
                    <div className={`text-lg font-bold ${roi != null && roi >= minRoi ? "text-emerald-200" : "text-slate-300"}`}>
                      {roi != null ? fmtPct(roi, 0) : "—"}
                    </div>
                  </div>
                </div>
              </div>

              {roi != null && roi < minRoi && (
                <div className="text-xs text-slate-400 mt-3">
                  Tip: If ROI is below target, you usually <b className="text-white">WATCH</b> unless player is about to call up / trend spikes.
                </div>
              )}
            </div>
          </div>

          {/* Future eBay API buttons (placeholders for now) */}
          <div className="flex flex-wrap gap-2">
            <a
              href={ebayUrlAll}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg text-sm font-semibold bg-blue-600 border border-blue-500 text-white hover:bg-blue-700 transition"
            >
              Open in eBay
            </a>
            <button
              className="px-3 py-2 rounded-lg text-sm font-semibold bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition"
              title="eBay API integration coming next"
              onClick={() => alert("Watchlist feature coming with eBay API integration")}
            >
              + Watch
            </button>
            <button
              className="px-3 py-2 rounded-lg text-sm font-semibold bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition"
              title="eBay API integration coming next"
              onClick={() => alert("Max Bid feature coming with eBay API integration")}
            >
              Set Max Bid
            </button>
            <button
              className="px-3 py-2 rounded-lg text-sm font-semibold bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition"
              title="eBay API integration coming next"
              onClick={() => alert("Sniper Mode coming with eBay API integration")}
            >
              Enable Sniper Mode
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// -------------------------------
// UI Components
// -------------------------------
function Stat({ label, value }: any) {
  return (
    <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700">
      <div className="text-xs text-slate-500 mb-1 font-medium">{label}</div>
      <div className="text-base font-bold text-white">{value}</div>
    </div>
  );
}
