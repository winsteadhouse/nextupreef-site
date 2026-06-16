'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function SignOutButton() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const onClick = async () => {
    setBusy(true);
    try {
      const sb = createClient();
      await sb.auth.signOut();
    } finally {
      router.push('/login');
      router.refresh();
    }
  };
  return (
    <button onClick={onClick} disabled={busy} className='signout'>
      {busy ? 'Signing out...' : 'Sign out'}
    </button>
  );
}
