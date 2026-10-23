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
      // The Hub product was dropped in 24c4a28 ("Remove Hub, add Apex integration to
      // devices") and this post went with it, but Google still has the URL indexed
      // (last crawled 2026-08-19) and it was hard-404ing. /devices is where that
      // content moved, and it answers what the searcher actually wants: does this
      // work with my Apex.
      {
        source: "/blog/nextupreef-hub-vs-neptune-apex",
        destination: "/devices",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
