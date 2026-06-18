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
      const host = window.location.host;
      if (host.startsWith('portal.') && !host.includes('localhost')) {
        // Leave the portal subdomain for the public marketing site.
        window.location.href = 'https://' + host.slice(7) + '/';
      } else {
        // localhost (or any non-portal host): marketing home is served at /.
        router.push('/');
        router.refresh();
      }
    }
  };
  return (
    <button onClick={onClick} disabled={busy} className='signout'>
      {busy ? 'Signing out...' : 'Sign out'}
    </button>
  );
}
