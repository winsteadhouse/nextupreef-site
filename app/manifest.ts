import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NextUpReef — Reef Tank Tracking App",
    short_name: "NextUpReef",
    description: "Track reef tank parameters, dosing, scores and AI advice.",
    start_url: "/",
    display: "standalone",
    background_color: "#061321",
    theme_color: "#061321",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
