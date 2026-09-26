import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// One allow-all group. `*` covers every other crawler, including future ones.
// Named agents are listed so search and answer-engine bots are explicitly welcome.
const CRAWLERS = [
  "*",
  "Googlebot",
  "Googlebot-Image",
  "Googlebot-Video",
  "Google-Extended",
  "Bingbot",
  "DuckDuckBot",
  "Applebot",
  "Slurp",
  "Yandex",
  "Baiduspider",
  "facebookexternalhit",
  "Twitterbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Claude-SearchBot",
  "Claude-User",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: CRAWLERS, allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
