'use client';
import '../(app)/portal.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

const APP_STORE = 'https://apps.apple.com/us/app/nextupreef/id6760728959';
const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.nextupreef.app';

const storeBtn: React.CSSProperties = {
  flex: 1,
  textAlign: 'center',
  padding: '10px 12px',
  borderRadius: 10,
  border: '1px solid rgba(255,255,255,0.14)',
  background: 'rgba(255,255,255,0.05)',
  color: 'var(--hi, #fff)',
  fontWeight: 800,
  fontSize: 13,
  textDecoration: 'none',
};

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();
  const [mode, setMode] = useState<'in' | 'forgot'>('in');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function signIn() {
    setErr(null);
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) {
      setErr(error.message);
      return;
    }
    router.push('/dashboard');
    router.refresh();
  }

  async function sendReset() {
    setErr(null);
    setMsg(null);
    if (!email) {
      setErr('Enter your account email first.');
      return;
    }
    setBusy(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + '/reset-password',
    });
    setBusy(false);
    if (error) {
      setErr(error.message);
      return;
    }
    setMsg('Check your email for a password reset link.');
  }

  return (
    <div className="authwrap">
      <div className="authcard">
        {mode === 'in' ? (
          <>
            <h2>Sign in</h2>
            <p className="sub">Your reef command center on the web.</p>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && signIn()}
              placeholder="you@email.com"
            />
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && signIn()}
              placeholder="••••••••"
            />
            <button className="primary" onClick={signIn} disabled={busy}>
              {busy ? '…' : 'Sign in'}
            </button>
            {err && <div className="err">{err}</div>}
            <div className="alt">
              <span className="link" onClick={() => { setMode('forgot'); setErr(null); setMsg(null); }}>
                Forgot password?
              </span>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '20px 0 14px' }} />
            <p className="sub" style={{ textAlign: 'center', marginTop: 0 }}>
              New to NextUpReef? Create your account in the app, then sign in here.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
              <a style={storeBtn} href={APP_STORE} target="_blank" rel="noopener noreferrer">App Store</a>
              <a style={storeBtn} href={PLAY_STORE} target="_blank" rel="noopener noreferrer">Google Play</a>
            </div>
          </>
        ) : (
          <>
            <h2>Reset password</h2>
            <p className="sub">We&apos;ll email you a link to set a new password.</p>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendReset()}
              placeholder="you@email.com"
            />
            <button className="primary" onClick={sendReset} disabled={busy}>
              {busy ? '…' : 'Send reset link'}
            </button>
            {err && <div className="err">{err}</div>}
            {msg && <div style={{ color: 'var(--reef, #2EE6CF)', fontSize: 13, fontWeight: 700, marginTop: 12, textAlign: 'center' }}>{msg}</div>}
            <div className="alt">
              <span className="link" onClick={() => { setMode('in'); setErr(null); setMsg(null); }}>
                Back to sign in
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
