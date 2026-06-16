'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Tank = { id: string; name: string };

export default function TankSwitcher({ tanks, activeTankId }: { tanks: Tank[]; activeTankId: string | null }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const active = tanks.find((t) => t.id === activeTankId);
  if (!tanks.length) return null;

  function pick(id: string) {
    document.cookie = 'active_tank_id=' + id + '; path=/; max-age=31536000';
    setOpen(false);
    router.refresh();
  }

  return (
    <div style={{ position: 'relative', marginTop: 6, marginBottom: 10 }}>
      <button className='tankswitch' onClick={() => setOpen((v) => !v)}>
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{active ? active.name : 'Select tank'}</span>
        <span className={'caret' + (open ? ' up' : '')} />
      </button>
      {open && (
        <div className='tankmenu'>
          {tanks.map((t) => (
            <div key={t.id} className={'tankopt' + (t.id === activeTankId ? ' on' : '')} onClick={() => pick(t.id)}>{t.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}
