import type { Metadata } from 'next';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { getActiveTank } from '@/lib/active-tank';
import DoseCalculatorClient from './DoseCalculatorClient';
import type { Pt, TestParam } from '@/lib/dosing-math';

export const metadata: Metadata = {
  title: 'Dose Calculator',
  robots: { index: false, follow: false },
};

const pan = { background: 'var(--panel)', border: '1px solid var(--hair)', borderRadius: 'var(--r)', padding: '17px 19px' } as const;

export default async function DoseCalculatorPage() {
  const { user, tanks, activeTankId } = await getActiveTank();
  if (!user) return null;

  const tank = tanks.find((t) => t.id === activeTankId) ?? tanks[0] ?? null;

  if (!tank) {
    return (
      <div style={{ ...pan, maxWidth: '620px' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 900, margin: '0 0 8px' }}>Dose calculator</h1>
        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14.5px', lineHeight: 1.7 }}>
          Add a tank in the app first, then this will work from your own test history.
        </p>
      </div>
    );
  }

  const supabase = await createClient();

  // Sump volume is not on TankLite, and it matters for dosing, so read it here.
  const [{ data: full }, { data: prodRows }, { data: logs }] = await Promise.all([
    supabase.from('tanks').select('display_gallons, sump_gallons').eq('id', tank.id).maybeSingle(),
    supabase.from('dosing_products')
      .select('id, product_brand, product_name, dose_unit, daily_amount, strength')
      .eq('user_id', user.id).eq('tank_id', tank.id).eq('is_active', true)
      .order('created_at', { ascending: true }),
    supabase.from('parameter_logs')
      .select('logged_at, alk, ca, mg')
      .eq('tank_id', tank.id)
      .gte('logged_at', new Date(Date.now() - 60 * 86400000).toISOString())
      .order('logged_at', { ascending: true }),
  ]);

  const gallons = (Number(full?.display_gallons) || 0) + (Number(full?.sump_gallons) || 0);

  // dosing_products has no param column - which parameter a product moves lives
  // inside its strength blob.
  const products = (prodRows ?? []).map((p: any) => ({
    id: p.id,
    product_brand: p.product_brand,
    product_name: p.product_name,
    dose_unit: p.dose_unit,
    daily_amount: p.daily_amount != null ? Number(p.daily_amount) : null,
    strength: p.strength ?? null,
    param: p.strength?.param ?? null,
  }));

  const series: Record<TestParam, Pt[]> = { alk: [], ca: [], mg: [] };
  for (const row of (logs ?? []) as any[]) {
    const t = new Date(row.logged_at).getTime();
    (['alk', 'ca', 'mg'] as TestParam[]).forEach((k) => {
      const v = row[k];
      if (v != null && Number.isFinite(Number(v))) series[k].push({ t, v: Number(v) });
    });
  }

  return (
    <div style={{ display: 'grid', gap: '18px' }}>
      <div>
        <Link href='/control' style={{ fontSize: '13px', fontWeight: 800, color: 'var(--reef)', textDecoration: 'none' }}>
          {'<- Dosing & control'}
        </Link>
        <h1 style={{ fontSize: '24px', fontWeight: 900, margin: '10px 0 4px', color: 'var(--text-light)' }}>
          Dose calculator
        </h1>
        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14.5px', lineHeight: 1.7, maxWidth: '620px' }}>
          Works out the daily dose that holds a parameter steady, using your own test history —
          or a one-time correction split so nothing rises faster than is safe.
        </p>
      </div>

      <DoseCalculatorClient
        tankId={tank.id}
        tankName={tank.name}
        gallons={gallons}
        products={products}
        series={series}
      />
    </div>
  );
}
