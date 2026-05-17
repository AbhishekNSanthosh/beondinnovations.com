import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Beond Innovations — Software Development Studio",
    short_name: "Beond",
    description:
      "Software development studio in Kerala, India. Building web apps, mobile apps, APIs, and MVPs for startups and businesses globally.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#10b981",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["business", "productivity", "technology"],
    lang: "en-IN",
    dir: "ltr",
  };
}
