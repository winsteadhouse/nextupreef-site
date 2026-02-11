import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://nextupreef.com'),
  title: {
    default: 'NextUpReef - Reef Aquarium Parameter Tracking App',
    template: '%s | NextUpReef'
  },
  description: 'Track your reef aquarium parameters with ease. Fast logging, smart analytics, reef scoring, and achievement badges. Available on iOS and Android.',
  keywords: ['reef aquarium', 'reef tank', 'aquarium tracking', 'parameter logging', 'reef keeper', 'saltwater aquarium', 'coral reef', 'aquarium app'],
  authors: [{ name: 'NextUpReef' }],
  creator: 'NextUpReef',
  publisher: 'NextUpReef',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nextupreef.com',
    siteName: 'NextUpReef',
    title: 'NextUpReef - Reef Aquarium Parameter Tracking',
    description: 'Track your reef aquarium parameters with ease. Fast logging, smart analytics, and achievement badges.',
    images: [
      {
        url: '/brand/splash2.png',
        width: 1200,
        height: 630,
        alt: 'NextUpReef - Reef Aquarium Tracking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextUpReef - Reef Aquarium Parameter Tracking',
    description: 'Track your reef aquarium parameters with ease. Fast logging, smart analytics, and achievement badges.',
    images: ['/brand/splash2.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when you have them:
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
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
