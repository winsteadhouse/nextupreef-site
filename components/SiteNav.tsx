"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Keep this list short: it has to fit beside the logo on a 375px phone.
const LINKS = [
  { href: "/features", label: "Features" },
  { href: "/devices", label: "Devices" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export default function SiteNav() {
  const pathname = usePathname() || "/";
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="site-header">
      <div className="nav-container">
        <Link href="/" className="logo" aria-label="NextUpReef home">
          <Image src="/brand/logo.png" alt="" width={36} height={36} priority />
          <span>NextUpReef</span>
        </Link>

        <nav className="nav-links" aria-label="Main">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={isActive(l.href) ? "active" : undefined} aria-current={isActive(l.href) ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
          <a href="https://portal.nextupreef.com" className="nav-signin">Sign in</a>
          <Link href="/#get-the-app" className="nav-cta">Get the app</Link>
        </nav>
      </div>
    </header>
  );
}
