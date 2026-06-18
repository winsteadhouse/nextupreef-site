import { getActiveTank } from '@/lib/active-tank';
import { createClient } from '@/lib/supabase/server';
import LogClient from './LogClient';

export const dynamic = 'force-dynamic';

export default async function LogPage() {
  const { user, tanks, activeTankId } = await getActiveTank();
  const tank = tanks.find((t) => t.id === activeTankId) ?? null;
  if (!tank || !user) {
    return (
      <div>
        <h1>Log Parameters</h1>
        <p style={{ color: 'var(--mid)', marginTop: 8 }}>No tank selected yet.</p>
      </div>
    );
  }
  const supabase = await createClient();
  const meta = (await supabase.from('tanks').select('tank_type').eq('id', tank.id).maybeSingle()).data as { tank_type?: string } | null;
  const tankType = meta?.tank_type || 'mixed';
  const targets = ((await supabase.from('param_targets').select('param, min, max, ideal').eq('tank_type', tankType)).data ?? []) as { param: string; min: number; max: number; ideal: number }[];
  return (
    <LogClient
      userId={user.id}
      tankId={tank.id}
      tankName={tank.name}
      tankType={tankType}
      targets={targets}
    />
  );
}
