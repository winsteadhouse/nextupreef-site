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
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
    </header>
  );
}