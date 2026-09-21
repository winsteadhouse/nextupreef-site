'use client';

// Dose calculator for the portal.
//
// Uses lib/dosing-math.ts, copied verbatim from the app so both give identical
// answers — a calculator that disagreed with the phone would be worse than none.
//
// Two modes, the same as the app:
//   Dial in  — the daily dose that holds a parameter steady, from the test trend
//   Fix low  — a one-time correction, split so no day exceeds the safe rise
import { useEffect, useMemo, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import {
  DAILY_MAX_RISE, GAL_TO_L, PARAM_LABEL, PARAM_UNIT,
  correctionPlan, dialIn, isValidStrength, roundDose, trendOf,
  type Pt, type Strength, type TestParam,
} from '@/lib/dosing-math';

type Product = {
  id: string;
  product_brand: string | null;
  product_name: string | null;
  dose_unit: string | null;
  daily_amount: number | null;
  strength: Strength | null;
  param: string | null;
};

const pan = { background: 'var(--panel)', border: '1px solid var(--hair)', borderRadius: 'var(--r)', padding: '17px 19px' } as const;
const fmt = (v: number, dec = 2) => String(Number(v.toFixed(dec)));
const productName = (p: Product) => `${p.product_brand ?? ''} ${p.product_name ?? ''}`.trim() || 'Unnamed product';

const inputStyle: React.CSSProperties = {
  width: '100%', background: 'var(--bg)', border: '1px solid var(--hair)', borderRadius: '10px',
  padding: '11px 13px', color: 'var(--text-light)', fontSize: '15px', fontWeight: 700,
};
const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '12px', fontWeight: 800, color: 'var(--text-muted)',
  textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px',
};

export default function DoseCalculatorClient({
  tankId, tankName, gallons, products, series,
}: {
  tankId: string | null;
  tankName: string;
  gallons: number;
  products: Product[];
  series: Record<TestParam, Pt[]>;
}) {
  const [mode, setMode] = useState<'dial' | 'fix'>('dial');
  const [param, setParam] = useState<TestParam>('alk');
  const [productId, setProductId] = useState<string | null>(products[0]?.id ?? null);
  const [vol, setVol] = useState(gallons ? String(gallons) : '');
  const [dose, setDose] = useState('');
  const [current, setCurrent] = useState('');
  const [target, setTarget] = useState('');

  // The calculator writes no row of its own, so engagement can't see it without this.
  useEffect(() => {
    const supabase = createClient();
    supabase.rpc('track_feature', { p_feature: 'dose_calculator', p_tank: tankId }).then(
      () => {}, () => {},
    );
  }, [tankId]);

  const forParam = products.filter((p) => !p.param || p.param === param);
  const product = forParam.find((p) => p.id === productId) ?? forParam[0] ?? null;
  const unit = product?.dose_unit ?? 'mL';
  const tankL = (Number(vol) || 0) * GAL_TO_L;

  useEffect(() => {
    if (product?.daily_amount != null && dose === '') setDose(String(product.daily_amount));
  }, [product, dose]);

  const trend = useMemo(() => trendOf(series[param] ?? []), [series, param]);

  const dial = useMemo(() => {
    if (mode !== 'dial' || !trend || tankL <= 0) return null;
    return dialIn({
      dose: Number(dose) || 0, unit, slope: trend.slope, slopeSE: trend.se,
      param, tankL, strength: product?.strength ?? null,
    });
  }, [mode, trend, tankL, dose, unit, param, product]);

  const fix = useMemo(() => {
    if (mode !== 'fix' || tankL <= 0) return null;
    const c = Number(current); const t = Number(target);
    if (!Number.isFinite(c) || !Number.isFinite(t) || t <= c) return null;
    if (!isValidStrength(product?.strength ?? null)) return null;
    return correctionPlan({ current: c, target: t, param, tankL, strength: product!.strength!, unit });
  }, [mode, tankL, current, target, param, product, unit]);

  const Tab = ({ v, label }: { v: 'dial' | 'fix'; label: string }) => (
    <button
      onClick={() => setMode(v)}
      style={{
        flex: 1, padding: '10px', borderRadius: '10px', border: '1px solid',
        borderColor: mode === v ? 'var(--reef)' : 'var(--hair)',
        background: mode === v ? 'rgba(44,196,214,0.10)' : 'transparent',
        color: mode === v ? 'var(--reef)' : 'var(--text-muted)',
        fontWeight: 900, fontSize: '14px', cursor: 'pointer',
      }}
    >{label}</button>
  );

  const Chip = ({ v }: { v: TestParam }) => (
    <button
      onClick={() => setParam(v)}
      style={{
        padding: '8px 15px', borderRadius: '10px', border: '1px solid',
        borderColor: param === v ? 'var(--reef)' : 'var(--hair)',
        background: param === v ? 'rgba(44,196,214,0.10)' : 'transparent',
        color: param === v ? 'var(--reef)' : 'var(--text-light)',
        fontWeight: 800, fontSize: '13.5px', cursor: 'pointer',
      }}
    >{PARAM_LABEL[v]}</button>
  );

  return (
    <div style={{ display: 'grid', gap: '16px', maxWidth: '760px' }}>
      <div style={pan}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          <Tab v='dial' label='Hold it steady' />
          <Tab v='fix' label='Bring it up' />
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
          {(['alk', 'ca', 'mg'] as TestParam[]).map((p) => <Chip key={p} v={p} />)}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '13px' }}>
          <div>
            <label style={labelStyle}>Water volume (gallons)</label>
            <input style={inputStyle} inputMode='decimal' value={vol} onChange={(e) => setVol(e.target.value)} placeholder='75' />
          </div>

          {forParam.length > 0 ? (
            <div>
              <label style={labelStyle}>Product</label>
              <select
                style={{ ...inputStyle, appearance: 'none' }}
                value={product?.id ?? ''}
                onChange={(e) => setProductId(e.target.value)}
              >
                {forParam.map((p) => <option key={p.id} value={p.id}>{productName(p)}</option>)}
              </select>
            </div>
          ) : null}

          {mode === 'dial' ? (
            <div>
              <label style={labelStyle}>Current daily dose ({unit})</label>
              <input style={inputStyle} inputMode='decimal' value={dose} onChange={(e) => setDose(e.target.value)} placeholder='10' />
            </div>
          ) : (
            <>
              <div>
                <label style={labelStyle}>Current {PARAM_LABEL[param].toLowerCase()} ({PARAM_UNIT[param]})</label>
                <input style={inputStyle} inputMode='decimal' value={current} onChange={(e) => setCurrent(e.target.value)} placeholder={param === 'alk' ? '7.2' : param === 'ca' ? '380' : '1200'} />
              </div>
              <div>
                <label style={labelStyle}>Target ({PARAM_UNIT[param]})</label>
                <input style={inputStyle} inputMode='decimal' value={target} onChange={(e) => setTarget(e.target.value)} placeholder={param === 'alk' ? '8.5' : param === 'ca' ? '430' : '1350'} />
              </div>
            </>
          )}
        </div>
      </div>

      {/* ---- result ---- */}
      {mode === 'dial' ? (
        <div style={pan}>
          {!trend ? (
            <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Not enough recent tests for <strong style={{ color: 'var(--text-light)' }}>{PARAM_LABEL[param].toLowerCase()}</strong> on {tankName} yet.
              Log it a few times over a week or two and this will work out the dose that holds it steady.
            </p>
          ) : !dial ? (
            <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--text-muted)' }}>Enter your water volume to see a suggested dose.</p>
          ) : (
            <>
              <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {dial.status === 'stable' ? 'Holding steady' : dial.status === 'dropping' ? 'Drifting down' : 'Drifting up'}
              </div>
              <div style={{ fontSize: '34px', fontWeight: 900, color: 'var(--text-light)', margin: '4px 0 2px' }}>
                {fmt(dial.newDose, 1)} <span style={{ fontSize: '17px', color: 'var(--text-muted)' }}>{unit}/day</span>
              </div>
              <p style={{ margin: '8px 0 0', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                {dial.status === 'stable'
                  ? `Your ${PARAM_LABEL[param].toLowerCase()} is steady over the last ${trend.spanDays} days across ${trend.n} tests, so keep your dose where it is.`
                  : `Over the last ${trend.spanDays} days across ${trend.n} tests it moved about ${fmt(trend.slope, 3)} ${PARAM_UNIT[param]} a day. That is a ${dial.changePct > 0 ? 'rise' : 'cut'} of ${Math.abs(dial.changePct)}%.`}
                {dial.method === 'percent' ? ' Your product has no known strength, so this is the usual adjust-by-10%-and-retest approach.' : ''}
                {dial.capped ? ' Capped at a 30% change — retest in a week and run this again rather than jumping further in one go.' : ''}
              </p>
              {dial.consumptionPerDay != null ? (
                <p style={{ margin: '8px 0 0', fontSize: '13px', color: 'var(--text-muted)' }}>
                  Your tank is consuming roughly {fmt(Math.abs(dial.consumptionPerDay), 3)} {PARAM_UNIT[param]} a day.
                </p>
              ) : null}
            </>
          )}
        </div>
      ) : (
        <div style={pan}>
          {!isValidStrength(product?.strength ?? null) ? (
            <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              To work out an exact correction we need to know how strong your product is — how much
              raises a known volume by how much. Add that to the product in the app under Dosing,
              or follow the dose chart on the label.
            </p>
          ) : !fix ? (
            <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--text-muted)' }}>
              Enter your water volume, where {PARAM_LABEL[param].toLowerCase()} is now, and where you want it.
            </p>
          ) : (
            <>
              <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Spread over {fix.days} {fix.days === 1 ? 'day' : 'days'}
              </div>
              <div style={{ fontSize: '34px', fontWeight: 900, color: 'var(--text-light)', margin: '4px 0 2px' }}>
                {fmt(fix.perDay, 1)} <span style={{ fontSize: '17px', color: 'var(--text-muted)' }}>{unit}/day</span>
              </div>
              <p style={{ margin: '8px 0 0', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                That raises {PARAM_LABEL[param].toLowerCase()} by {fmt(fix.totalRise, 2)} {PARAM_UNIT[param]} in total,
                using {fmt(fix.totalAmount, 1)} {unit} of {productName(product!)}.
                It is split across {fix.days} {fix.days === 1 ? 'day' : 'days'} so it never rises more than{' '}
                {DAILY_MAX_RISE[param]} {PARAM_UNIT[param]} in a day — going faster stresses corals more than being low does.
              </p>
              <p style={{ margin: '10px 0 0', fontSize: '13px', color: 'var(--text-muted)' }}>
                Keep your normal daily dose going as well — this is on top of it.
              </p>
            </>
          )}
        </div>
      )}

      <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
        Working on <strong style={{ color: 'var(--text-light)' }}>{tankName}</strong>
        {gallons ? ` (${gallons} gal)` : ''}. Change the volume above if you are calculating for something else.
        Always retest before making another change.
      </p>
    </div>
  );
}
