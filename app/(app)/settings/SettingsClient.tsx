'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

const panel = { background: 'var(--panel)', border: '1px solid var(--hair)', borderRadius: 'var(--r)', padding: '18px 20px', marginTop: 16 } as const;
const labelStyle = { fontSize: 11, color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '.4px', marginBottom: 6 } as const;
const inputStyle = { width: '100%', maxWidth: 360, background: '#0C121D', border: '1px solid var(--hair)', borderRadius: 8, padding: '9px 11px', color: 'var(--hi)', font: 'inherit', fontSize: 14, outline: 'none' } as const;
const NL = String.fromCharCode(10);

function badgeClass(label: string, isPro: boolean) {
  if (isPro) return 'pro';
  if (label.indexOf('Pro trial') === 0) return 'trial';
  if (label.indexOf('Portal') === 0) return 'portal';
  return 'free';
}

export default function SettingsClient({ userId, email, name, emailMarketing, statusLabel, isPro, daysLeft }: { userId: string; email: string; name: string; emailMarketing: boolean; statusLabel: string; isPro: boolean; daysLeft: number | null }) {
  const router = useRouter();
  const sb = createClient();
  const [dn, setDn] = useState(name);
  const [savingName, setSavingName] = useState(false);
  const [savedName, setSavedName] = useState(false);
  const [mkt, setMkt] = useState(emailMarketing);
  const [exporting, setExporting] = useState(false);
  const [busyOut, setBusyOut] = useState(false);

  const saveName = async () => {
    setSavingName(true); setSavedName(false);
    await sb.from('profiles').update({ display_name: dn.trim() || null }).eq('id', userId);
    setSavingName(false); setSavedName(true);
    router.refresh();
  };
  const toggleMkt = async () => {
    const v = !mkt; setMkt(v);
    await sb.from('profiles').update({ email_marketing: v }).eq('id', userId);
  };
  const exportCsv = async () => {
    setExporting(true);
    try {
      const { data } = await sb.from('parameter_logs').select('logged_at, alk, ca, mg, no3, po4, salinity, ph, temp, source').order('logged_at', { ascending: false });
      const rows = (data || []) as Record<string, unknown>[];
      const header = ['logged_at', 'alk', 'ca', 'mg', 'no3', 'po4', 'salinity', 'ph', 'temp', 'source'];
      const lines = [header.join(',')].concat(rows.map((r) => header.map((h) => (r[h] == null ? '' : String(r[h]))).join(',')));
      const blob = new Blob([lines.join(NL)], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'nextupreef-parameter-logs.csv';
      document.body.appendChild(a); a.click(); a.remove();
      URL.revokeObjectURL(url);
    } finally {
      setExporting(false);
    }
  };
  const signOut = async () => {
    setBusyOut(true);
    try { await sb.auth.signOut(); } finally { router.push('/login'); router.refresh(); }
  };

  const btn = { cursor: 'pointer', fontSize: 13, fontWeight: 600, padding: '9px 16px', borderRadius: 8, border: '1px solid var(--hair)', background: 'transparent', color: 'var(--mid)' } as const;
  const btnPrimary = { ...btn, border: '1px solid var(--cyan)', background: 'rgba(46,230,207,.12)', color: 'var(--cyan)' } as const;

  return (
    <div>
      <h1>Settings</h1>

      <div style={panel}>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--hi)', marginBottom: 14 }}>Account</div>
        <div style={{ marginBottom: 16 }}>
          <div style={labelStyle}>Display name</div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <input style={inputStyle} value={dn} onChange={(e) => { setDn(e.target.value); setSavedName(false); }} placeholder='Your name' />
            <button onClick={saveName} disabled={savingName || dn === name} style={savingName || dn === name ? btn : btnPrimary}>{savingName ? 'Saving...' : savedName ? 'Saved' : 'Save'}</button>
          </div>
        </div>
        <div>
          <div style={labelStyle}>Email</div>
          <div style={{ fontSize: 14, color: 'var(--mid)' }}>{email}</div>
        </div>
      </div>

      <div style={panel}>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--hi)', marginBottom: 14 }}>Subscription</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span className={'acct-badge ' + badgeClass(statusLabel, isPro)} style={{ fontSize: 10.5 }}>{daysLeft != null ? statusLabel + ' . ' + daysLeft + 'd left' : statusLabel}</span>
          <span style={{ fontSize: 13, color: 'var(--mid)' }}>{isPro ? 'You have full access to the web portal.' : 'You have limited access.'}</span>
        </div>
        {!isPro ? (
          <div style={{ fontSize: 13, color: 'var(--mid)', marginTop: 12, lineHeight: 1.5 }}>
            The full web portal is part of NextUpReef Pro. Open the NextUpReef app on your phone to start a Pro subscription or trial - your access syncs here automatically.
          </div>
        ) : (
          <div style={{ fontSize: 12.5, color: 'var(--dim)', marginTop: 10 }}>Billing is managed in the app stores through the NextUpReef mobile app.</div>
        )}
      </div>

      <div style={panel}>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--hi)', marginBottom: 14 }}>Email preferences</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <div>
            <div style={{ fontSize: 13.5, color: 'var(--hi)', fontWeight: 600 }}>Product news and tips</div>
            <div style={{ fontSize: 12, color: 'var(--dim)', marginTop: 2 }}>Occasional emails about new features and reef tips. Reminder emails are unaffected.</div>
          </div>
          <button onClick={toggleMkt} style={{ flex: 'none', cursor: 'pointer', width: 46, height: 27, borderRadius: 14, border: 'none', padding: 3, background: mkt ? 'var(--cyan)' : 'var(--raised)', display: 'flex', alignItems: 'center', justifyContent: mkt ? 'flex-end' : 'flex-start', transition: 'background .15s' }}>
            <span style={{ width: 21, height: 21, borderRadius: 11, background: 'white', display: 'block' }} />
          </button>
        </div>
      </div>

      <div style={panel}>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--hi)', marginBottom: 6 }}>Your data</div>
        <div style={{ fontSize: 13, color: 'var(--mid)', marginBottom: 12 }}>Download your full parameter log history as a CSV.</div>
        <button onClick={exportCsv} disabled={exporting} style={btn}>{exporting ? 'Preparing...' : 'Export parameter logs (CSV)'}</button>
      </div>

      <div style={{ ...panel, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--hi)' }}>Sign out</div>
          <div style={{ fontSize: 12.5, color: 'var(--dim)', marginTop: 2 }}>End your session on this device.</div>
        </div>
        <button onClick={signOut} disabled={busyOut} style={btn}>{busyOut ? 'Signing out...' : 'Sign out'}</button>
      </div>
    </div>
  );
}
