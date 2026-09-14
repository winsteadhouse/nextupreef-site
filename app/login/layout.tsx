import type { Metadata } from "next";

// Account pages have no search value; keep them out of the index.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function NoIndexLayout({ children }: { children: React.ReactNode }) {
  return children;
}
