'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ITEMS = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/log', label: 'Log' },
  { href: '/my-reef', label: 'My Reef' },
  { href: '/control', label: 'Control' },
  { href: '/analytics', label: 'Analytics' },
  { href: '/settings', label: 'Settings' },
];

export default function PortalNav({ isAdmin = false }: { isAdmin?: boolean }) {
  const path = usePathname();
  const items = isAdmin ? [...ITEMS, { href: '/admin', label: 'Admin' }] : ITEMS;
  return (
    <>
      {items.map((it) => (
        <Link key={it.href} href={it.href} className={'nav' + (path === it.href || path.startsWith(it.href + '/') ? ' on' : '')}>{it.label}</Link>
      ))}
    </>
  );
}
