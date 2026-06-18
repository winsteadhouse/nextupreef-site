import Image from "next/image";
import Link from "next/link";

export default function SiteNav() {
  return (
    <header className="site-header">
      <div className="nav-container">
        <Link href="/" className="logo">
          <Image
            src="/brand/logo.png"
            alt="NextUpReef"
            width={36}
            height={36}
          />
          <span>NextUpReef</span>
        </Link>

        <nav className="nav-links">
          <Link href="/features">Features</Link><Link href="/devices">Devices</Link><Link href="/hub">Hub</Link>
          <Link href="/blog">Blog</Link>
          <a href="https://portal.nextupreef.com" className="nav-signin">Sign in</a>
        </nav>
      </div>
    </header>
  );
}