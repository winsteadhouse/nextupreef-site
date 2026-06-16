import { cookies } from 'next/headers';
import { createClient } from '@/lib/supabase/server';

export type TankLite = { id: string; name: string; tank_type: string | null; display_gallons: number | null };

export async function getActiveTank() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { user: null, tanks: [] as TankLite[], activeTankId: null as string | null };

  const { data } = await supabase
    .from('tanks')
    .select('id, name, tank_type, display_gallons')
    .eq('user_id', user.id)
    .order('created_at', { ascending: true });

  const tanks = (data ?? []) as TankLite[];
  const cookieStore = await cookies();
  const wanted = cookieStore.get('active_tank_id')?.value ?? null;
  const valid = tanks.find((t) => t.id === wanted);
  const activeTankId = valid ? valid.id : (tanks[0]?.id ?? null);
  return { user, tanks, activeTankId };
}
