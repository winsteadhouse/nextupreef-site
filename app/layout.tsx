import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nextupreef.com"),
  title: {
    default: "NextUpReef — Free Reef Tank Tracking App for iOS & Android",
    template: "%s | NextUpReef",
  },
  description:
    "The best free app to track and monitor your saltwater reef aquarium. Log alkalinity, calcium, magnesium, nitrate & more. Get a Reef Score, trend charts, water change reminders, and community features. Free on iOS and Android.",
  keywords: [
    "reef tank tracking app",
    "best reef aquarium app",
    "saltwater tank parameter tracker",
    "reef water parameter log",
    "free reef tank app",
    "reef aquarium monitor",
    "saltwater aquarium app",
    "reef parameter logging",
    "coral reef tank app",
    "SPS reef tracking",
    "LPS reef app",
    "alkalinity tracker",
    "reef score",
    "reef stability tracker",
    "water change reminder app",
    "reef keeper app",
    "aquarium parameter app iOS Android",
  ],
  authors: [{ name: "NextUpReef" }],
  creator: "NextUpReef",
  publisher: "NextUpReef",
  alternates: {
    canonical: "https://nextupreef.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextupreef.com",
    siteName: "NextUpReef",
    title: "NextUpReef — Free Reef Tank Tracking App for iOS & Android",
    description:
      "Track saltwater aquarium parameters, get a Reef Score, set water change reminders, and monitor trends. The best free reef tank app for iOS and Android.",
    images: [
      {
        url: "/brand/splash2.png",
        width: 1200,
        height: 630,
        alt: "NextUpReef — Free Reef Tank Tracking App for iOS and Android",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextUpReef — Free Reef Tank Tracking App",
    description:
      "Track saltwater aquarium parameters, get a Reef Score, set water change reminders, and monitor trends. Free on iOS and Android.",
    images: ["/brand/splash2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',  ← paste from Google Search Console
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/brand/logo.png" />
      </head>
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}