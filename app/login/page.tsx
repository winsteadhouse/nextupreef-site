'use client';
import '../(app)/portal.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();
  const [mode, setMode] = useState<'in' | 'up'>('in');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit() {
    setErr(null);
    setBusy(true);
    const fn =
      mode === 'in'
        ? supabase.auth.signInWithPassword({ email, password })
        : supabase.auth.signUp({ email, password });
    const { error } = await fn;
    setBusy(false);
    if (error) {
      setErr(error.message);
      return;
    }
    router.push('/dashboard');
    router.refresh();
  }

  return (
    <div className="authwrap">
      <div className="authcard">
        <h2>{mode === 'in' ? 'Sign in' : 'Start your trial'}</h2>
        <p className="sub">
          {mode === 'in'
            ? 'Your reef command center on the web.'
            : 'New accounts get a 30-day Pro trial.'}
        </p>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && submit()}
          placeholder="you@email.com"
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && submit()}
          placeholder="••••••••"
        />

        <button className="primary" onClick={submit} disabled={busy}>
          {busy ? '…' : mode === 'in' ? 'Sign in' : 'Create account'}
        </button>
        {err && <div className="err">{err}</div>}

        <div className="alt">
          {mode === 'in' ? (
            <>
              New here?{' '}
              <span className="link" onClick={() => setMode('up')}>
                Start a 30-day Pro trial
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span className="link" onClick={() => setMode('in')}>
                Sign in
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
