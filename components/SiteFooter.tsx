import Image from "next/image";
import Link from "next/link";

const APP_STORE = "https://apps.apple.com/us/app/nextupreef/id6760728959";
const GOOGLE_PLAY = "https://play.google.com/store/apps/details?id=com.nextupreef.app";

type FooterLink = { href: string; label: string; external?: boolean };

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/features#compare", label: "Free vs Pro" },
      { href: "/devices", label: "Devices & integrations" },
      { href: "https://portal.nextupreef.com", label: "Web dashboard", external: true },
    ],
  },
  {
    title: "Guides",
    links: [
      { href: "/blog", label: "All guides" },
      { href: "/blog#journey", label: "New Tank Journey" },
      { href: "/blog/reef-tank-parameters-chart", label: "Parameters chart" },
      { href: "/blog/reef-tank-dosing-calculator", label: "Dosing calculator" },
      { href: "/blog/how-to-connect-apex", label: "Connect a Neptune Apex" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact us" },
      { href: "https://portal.nextupreef.com", label: "Sign in", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="footer site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-grid">
          <div className="site-footer-brand">
            <Link href="/" className="site-footer-logo" aria-label="NextUpReef home">
              <Image src="/brand/logo.png" alt="" width={32} height={32} />
              <span>NextUpReef</span>
            </Link>
            <p>The reef tank app for tracking parameters, dosing, scores and AI advice. Free on iOS and Android.</p>
            <div className="site-footer-stores">
              <a href={APP_STORE} target="_blank" rel="noopener noreferrer">App Store</a>
              <a href={GOOGLE_PLAY} target="_blank" rel="noopener noreferrer">Google Play</a>
            </div>
            <div className="footer-social">
              <a href="https://www.facebook.com/profile.php?id=61576553765840" target="_blank" rel="noopener noreferrer" aria-label="NextUpReef on Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/nextupreefapp/" target="_blank" rel="noopener noreferrer" aria-label="NextUpReef on Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} className="site-footer-col" aria-label={col.title}>
              <h2>{col.title}</h2>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.external ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                    ) : (
                      <Link href={l.href}>{l.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="site-footer-bottom">
          <p>© {new Date().getFullYear()} NextUpReef. All rights reserved.</p>
          <p>
            <a href="mailto:info@nextupreef.com">info@nextupreef.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
