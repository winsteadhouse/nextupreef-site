'use client';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

type Target = { param: string; min: number; max: number; ideal: number };
type Field = { key: string; label: string; unit: string; step: string; dp: number };

const FIELDS: Field[] = [
  { key: 'alk', label: 'Alkalinity', unit: 'dKH', step: '0.1', dp: 1 },
  { key: 'ca', label: 'Calcium', unit: 'ppm', step: '1', dp: 0 },
  { key: 'mg', label: 'Magnesium', unit: 'ppm', step: '1', dp: 0 },
  { key: 'no3', label: 'Nitrate (NO3)', unit: 'ppm', step: '0.1', dp: 1 },
  { key: 'po4', label: 'Phosphate (PO4)', unit: 'ppm', step: '0.01', dp: 2 },
  { key: 'ph', label: 'pH', unit: '', step: '0.01', dp: 2 },
  { key: 'salinity', label: 'Salinity', unit: 'sg', step: '0.001', dp: 3 },
  { key: 'temp', label: 'Temperature', unit: 'F', step: '0.1', dp: 1 },
  { key: 'nh3', label: 'Ammonia (NH3)', unit: 'ppm', step: '0.01', dp: 2 },
  { key: 'no2', label: 'Nitrite (NO2)', unit: 'ppm', step: '0.01', dp: 2 },
];

const TYPE_LABEL: Record<string, string> = {
  mixed: 'Mixed reef', sps: 'SPS', lps: 'LPS', softie: 'Soft coral',
  nano: 'Nano', ulns: 'ULNS', fish_only: 'Fish only',
};

const fmtNum = (v: number | string, dp: number) => Number(v).toFixed(dp);

export default function LogClient({ userId, tankId, tankName, tankType, targets }: { userId: string; tankId: string; tankName: string; tankType: string; targets: Target[] }) {
  const router = useRouter();
  const supabase = createClient();
  const [vals, setVals] = useState<Record<string, string>>({});
  const [notes, setNotes] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [ok, setOk] = useState(false);

  const tmap = useMemo(() => {
    const m: Record<string, Target> = {};
    for (const t of targets) m[t.param] = t;
    return m;
  }, [targets]);

  const filledCount = Object.values(vals).filter((v) => v.trim() !== '').length;

  function status(key: string, raw: string): 'good' | 'low' | 'high' | null {
    const t = tmap[key];
    if (!t || raw.trim() === '') return null;
    const v = Number(raw);
    if (isNaN(v)) return null;
    if (v < Number(t.min)) return 'low';
    if (v > Number(t.max)) return 'high';
    return 'good';
  }

  async function save() {
    setErr(null);
    setOk(false);
    if (filledCount === 0) { setErr('Enter at least one value.'); return; }
    const row: Record<string, unknown> = { user_id: userId, tank_id: tankId, source: 'web' };
    for (const f of FIELDS) {
      const raw = (vals[f.key] || '').trim();
      if (raw === '') continue;
      const n = Number(raw);
      if (isNaN(n)) { setErr(f.label + ' is not a valid number.'); return; }
      row[f.key] = n;
    }
    if (notes.trim()) row.notes = notes.trim();
    setBusy(true);
    const { error } = await supabase.from('parameter_logs').insert(row);
    setBusy(false);
    if (error) { setErr(error.message); return; }
    setOk(true);
    setVals({});
    setNotes('');
    router.refresh();
  }

  return (
    <div>
      <h1 style={{ marginBottom: 4 }}>Log Parameters</h1>
      <p style={{ color: 'var(--mid)', marginBottom: 18, fontWeight: 600 }}>
        {tankName} · {TYPE_LABEL[tankType] || tankType} targets
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 14 }}>
        {FIELDS.map((f) => {
          const st = status(f.key, vals[f.key] || '');
          const t = tmap[f.key];
          const edge = st === 'low' || st === 'high' ? 'rgba(246,166,35,.45)' : st === 'good' ? 'rgba(54,216,155,.45)' : 'var(--hair)';
          const hintColor = st === 'good' ? 'var(--good)' : st ? 'var(--amber)' : 'var(--dim)';
          return (
            <div key={f.key} style={{ background: 'var(--panel)', border: '1px solid ' + edge, borderRadius: 12, padding: '12px 14px' }}>
              <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, color: 'var(--mid)', fontWeight: 700, marginBottom: 6 }}>
                <span>{f.label}</span>{f.unit ? <span style={{ color: 'var(--dim)' }}>{f.unit}</span> : null}
              </label>
              <input
                type="number"
                inputMode="decimal"
                step={f.step}
                value={vals[f.key] || ''}
                onChange={(e) => setVals((p) => ({ ...p, [f.key]: e.target.value }))}
                placeholder={t ? String(t.ideal) : ''}
                style={{ width: '100%', padding: '9px 11px', borderRadius: 9, border: '1px solid var(--hair)', background: 'rgba(255,255,255,0.05)', color: 'var(--hi)', fontSize: 15, fontWeight: 700, outline: 'none', boxSizing: 'border-box' }}
              />
              <div style={{ fontSize: 11, marginTop: 5, color: hintColor, fontWeight: 600 }}>
                {t ? 'target ' + fmtNum(t.min, f.dp) + '–' + fmtNum(t.max, f.dp) : 'no target'}
                {st === 'low' ? ' · low' : st === 'high' ? ' · high' : st === 'good' ? ' · in range' : ''}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 16 }}>
        <label style={{ display: 'block', fontSize: 12.5, color: 'var(--mid)', fontWeight: 700, marginBottom: 6 }}>Notes (optional)</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={2}
          placeholder="Anything notable about this reading…"
          style={{ width: '100%', padding: '10px 12px', borderRadius: 10, border: '1px solid var(--hair)', background: 'rgba(255,255,255,0.05)', color: 'var(--hi)', fontSize: 14, fontWeight: 600, outline: 'none', boxSizing: 'border-box', resize: 'vertical' }}
        />
      </div>
      {err && <div style={{ color: 'var(--bad)', marginTop: 14, fontWeight: 700 }}>{err}</div>}
      {ok && (
        <div style={{ color: 'var(--good)', marginTop: 14, fontWeight: 700 }}>
          Saved. <span onClick={() => router.push('/dashboard')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>View on dashboard</span>
        </div>
      )}
      <button
        onClick={save}
        disabled={busy}
        style={{ marginTop: 18, padding: '12px 24px', borderRadius: 10, border: 'none', background: 'var(--reef, #2EE6CF)', color: '#04201b', fontWeight: 900, fontSize: 15, cursor: busy ? 'default' : 'pointer', opacity: busy ? 0.6 : 1 }}
      >
        {busy ? 'Saving…' : 'Save log' + (filledCount ? ' (' + filledCount + ')' : '')}
      </button>
    </div>
  );
}
