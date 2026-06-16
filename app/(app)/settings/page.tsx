import { createClient } from '@/lib/supabase/server';
import { evaluateWebAccess } from '@/lib/access';
import SettingsClient from './SettingsClient';

export default async function SettingsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return (<div><h1>Settings</h1></div>);
  const { data: profile } = await supabase
    .from('profiles')
    .select('display_name, email_marketing, subscription_tier, trial_ends_at, web_access_grant, web_access_until')
    .eq('id', user.id)
    .single();
  const access = evaluateWebAccess(profile);
  return (
    <SettingsClient
      userId={user.id}
      email={user.email || ''}
      name={profile?.display_name || ''}
      emailMarketing={!!profile?.email_marketing}
      statusLabel={access.label}
      isPro={access.isPro}
      daysLeft={access.daysLeft}
    />
  );
}
