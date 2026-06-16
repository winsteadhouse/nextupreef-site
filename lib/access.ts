export type WebAccess = {
  hasAccess: boolean;
  reason: 'pro' | 'trial' | 'portal' | 'grant' | 'none';
  isPro: boolean;
  label: string;
  daysLeft: number | null;
};

type ProfileLike = {
  subscription_tier?: string | null;
  trial_ends_at?: string | null;
  web_access_grant?: boolean | null;
  web_access_until?: string | null;
} | null;

function daysFrom(iso?: string | null): number | null {
  if (!iso) return null;
  return Math.ceil((new Date(iso).getTime() - Date.now()) / 86400000);
}

export function evaluateWebAccess(profile: ProfileLike): WebAccess {
  if (!profile) return { hasAccess: false, reason: 'none', isPro: false, label: 'Free', daysLeft: null };
  const isPro = profile.subscription_tier === 'pro';
  const trialDays = daysFrom(profile.trial_ends_at);
  const portalDays = daysFrom(profile.web_access_until);

  if (isPro) return { hasAccess: true, reason: 'pro', isPro: true, label: 'Pro', daysLeft: null };
  if (trialDays !== null && trialDays > 0) return { hasAccess: true, reason: 'trial', isPro: false, label: 'Pro trial', daysLeft: trialDays };
  if (portalDays !== null && portalDays > 0) return { hasAccess: true, reason: 'portal', isPro: false, label: 'Portal trial', daysLeft: portalDays };
  if (profile.web_access_grant) return { hasAccess: true, reason: 'grant', isPro: false, label: 'Portal access', daysLeft: null };
  return { hasAccess: false, reason: 'none', isPro: false, label: 'Free', daysLeft: null };
}
