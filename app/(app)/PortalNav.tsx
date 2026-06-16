'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ITEMS = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/my-reef', label: 'My Reef' },
  { href: '/control', label: 'Control' },
  { href: '/analytics', label: 'Analytics' },
  { href: '/settings', label: 'Settings' },
];

export default function PortalNav() {
  const path = usePathname();
  return (
    <>
      {ITEMS.map((it) => (
        <Link key={it.href} href={it.href} className={'nav' + (path === it.href || path.startsWith(it.href + '/') ? ' on' : '')}>{it.label}</Link>
      ))}
    </>
  );
}
