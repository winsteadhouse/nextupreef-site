import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      // One canonical host: www.nextupreef.com serves the same pages as nextupreef.com,
      // so send it to the non-www address every canonical tag and the sitemap already use.
      // (If Vercel is ever set to redirect nextupreef.com -> www, remove this to avoid a loop.)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.nextupreef.com" }],
        destination: "https://nextupreef.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
