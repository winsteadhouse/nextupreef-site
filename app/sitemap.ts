import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nextupreef.com";
  return [
    { url: `${baseUrl}`,                                                    lastModified: new Date("2026-06-12"), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${baseUrl}/features`,                                           lastModified: new Date("2026-06-12"), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${baseUrl}/devices`,                                            lastModified: new Date("2026-05-26"), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${baseUrl}/hub`,                                                lastModified: new Date("2026-05-20"), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${baseUrl}/blog`,                                               lastModified: new Date("2026-05-26"), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${baseUrl}/blog/how-to-setup-dosing-shelly`,                   lastModified: new Date("2026-05-26"), changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/blog/how-to-add-shelly-plug`,                       lastModified: new Date("2026-05-26"), changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/blog/ai-reef-tank-advisor`,                         lastModified: new Date("2026-06-12"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blog/my-reef-tank-tracking`,                          lastModified: new Date("2026-06-12"), changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/blog/best-reef-tank-tracking-app`,                  lastModified: new Date("2026-05-10"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blog/nextupreef-hub-vs-neptune-apex`,               lastModified: new Date("2026-05-15"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blog/how-to-track-saltwater-aquarium-parameters`,   lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/blog/reef-tank-alkalinity-calcium-magnesium-guide`, lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/blog/nano-reef-tank-guide`,                         lastModified: new Date("2026-04-15"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/blog/reef-tank-ph-guide`,                           lastModified: new Date("2026-04-15"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/blog/reef-tank-sump-guide`,                         lastModified: new Date("2026-04-15"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/blog/reef-tank-salinity-guide`,                     lastModified: new Date("2026-04-15"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/blog/reef-tank-temperature-guide`,                  lastModified: new Date("2026-04-15"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/blog/cyanobacteria-dinoflagellates-algae-reef-pests`, lastModified: new Date("2026-04-15"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/blog/frag-tank-setup-guide`,                        lastModified: new Date("2026-04-15"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/blog/live-rock-vs-dry-rock`,                        lastModified: new Date("2026-04-15"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/blog/tank-setup`,                                   lastModified: new Date("2026-03-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog/cycling-your-tank`,                            lastModified: new Date("2026-03-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog/the-ugly-phase`,                               lastModified: new Date("2026-03-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog/first-livestock`,                              lastModified: new Date("2026-03-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog/adding-first-corals`,                          lastModified: new Date("2026-03-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog/established-reef`,                             lastModified: new Date("2026-03-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`,                                            lastModified: new Date("2026-05-26"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy`,                                            lastModified: new Date("2026-04-01"), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${baseUrl}/terms`,                                              lastModified: new Date("2026-04-01"), changeFrequency: "yearly",  priority: 0.3 },
  ];
}
