import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stories Brew Garden, Yelahanka",
    short_name: "Stories Brew Garden",
    description:
      "A rooftop brew garden in Yelahanka, North Bengaluru, with crafted beers, a globally inspired kitchen and open-air rooftop seating.",
    start_url: "/",
    display: "standalone",
    background_color: "#EDE9D0",
    theme_color: "#EDE9D0",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
