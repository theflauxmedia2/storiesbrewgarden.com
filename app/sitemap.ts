import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// Bump this when page content actually changes. A fresh timestamp on every
// build makes lastmod meaningless to crawlers.
const UPDATED = new Date("2026-09-26");

const ROUTES: { path: string; priority: number; image: string }[] = [
  { path: "/", priority: 1, image: "/photos/rooftop-dining-evening.webp" },
  { path: "/our-story/", priority: 0.6, image: "/photos/lounge.webp" },
  {
    path: "/food-and-drinks/",
    priority: 0.8,
    image: "/photos/rooftop-dining-wide.webp",
  },
  { path: "/crafted-beers/", priority: 0.8, image: "/photos/bar-counter.webp" },
  {
    path: "/rooftop-experience/",
    priority: 0.8,
    image: "/photos/rooftop-terrace-dusk.webp",
  },
  {
    path: "/events-and-celebrations/",
    priority: 0.7,
    image: "/photos/private-dining.webp",
  },
  { path: "/gallery/", priority: 0.5, image: "/photos/rooftop-city-view.webp" },
  {
    path: "/contact/",
    priority: 0.9,
    image: "/photos/rooftop-courtyard-night.webp",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: UPDATED,
    changeFrequency: "monthly",
    priority: route.priority,
    images: [`${SITE_URL}${route.image}`],
  }));
}
