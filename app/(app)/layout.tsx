import './portal.css';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { evaluateWebAccess } from '@/lib/access';
import { getActiveTank } from '@/lib/active-tank';
import Image from 'next/image';
import Link from 'next/link';
import SignOutButton from './SignOutButton';
import PortalNav from './PortalNav';
import TankSwitcher from './TankSwitcher';

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const { data: profile } = await supabase
    .from('profiles')
    .select('display_name, subscription_tier, trial_ends_at, web_access_grant, web_access_until')
    .eq('id', user.id)
    .single();

  const access = evaluateWebAccess(profile);
  if (!access.hasAccess) redirect('/upgrade');

  const { tanks, activeTankId } = await getActiveTank();
  const name = profile?.display_name || user.email;

  return (
    <div className='portal'>
      <div className='grid'>
        <aside className='rail'>
          <Link href='/dashboard' className='brand'><Image src='/brand/logo_transparent.png' alt='NextUpReef' width={30} height={30} className='logo' />NextUpReef</Link>
          <TankSwitcher tanks={tanks} activeTankId={activeTankId} />
          <PortalNav isAdmin={user.id === '311089a8-5d8f-4e8d-a3d6-97d35bd89e60'} />
          <div className='acct'>
            <div className='acct-row'>
              <span className='acct-name'>{name}</span>
              <span className={'acct-badge ' + (access.isPro ? 'pro' : access.reason === 'trial' ? 'trial' : (access.reason === 'portal' || access.reason === 'grant') ? 'portal' : 'free')}>{access.daysLeft != null ? access.label + ' . ' + access.daysLeft + 'd' : access.label}</span>
            </div>
            {!access.isPro ? <div className='acct-upsell'>Open the NextUpReef app to start Pro and unlock everything.</div> : null}
            <SignOutButton />
          </div>
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
