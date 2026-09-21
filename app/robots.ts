import type { MetadataRoute } from "next";
import { headers } from "next/headers";

// This app answers on more than one host, so robots.txt has to look at which one.
// portal.nextupreef.com is the signed-in web app: there is nothing there for a search
// engine, every route redirects to a login, and Search Console showed Google already
// spending crawl requests on it. Keep it out of the index entirely.
export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = (await headers()).get("host")?.toLowerCase() ?? "";

  if (host.startsWith("portal.")) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: "https://nextupreef.com/sitemap.xml",
  };
}
