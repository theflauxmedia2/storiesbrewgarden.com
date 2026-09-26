# storiesbrewgarden.com

Marketing site for **Stories Brew Garden, Yelahanka** — a rooftop brew garden in
North Bengaluru.

## Stack

- **Next.js 16**, App Router, TypeScript
- `output: 'export'` + `trailingSlash: true` — builds to static HTML in `./out`
- Plain CSS (`app/styles.css`), brand palette as CSS custom properties in `:root`
- Fonts self-hosted via `next/font/google` — **Fraunces** (variable, display) and
  **Montserrat** (body). *(Brand guide specifies Qaftan for display; not on Google
  Fonts — Fraunces stands in until the font file is supplied.)*
- `framer-motion` for the mobile menu only (deferred + desktop-gated)
- `lenis` for smooth scrolling (bypassed under `prefers-reduced-motion`)

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # emits ./out
npx serve out      # preview the static build
```

## Structure

| Path | What |
| --- | --- |
| `app/*/page.tsx` | one route per page (`/`, `/our-story`, `/food-and-drinks`, `/crafted-beers`, `/rooftop-experience`, `/events-and-celebrations`, `/gallery`, `/contact`) |
| `app/layout.tsx` | shell, metadata, OpenGraph, JSON-LD, header/footer/menu mounts |
| `app/robots.ts`, `app/sitemap.ts` | generated `/robots.txt` + `/sitemap.xml` |
| `app/opengraph-image.jpg` | 1200×630 social share card (all routes) |
| `components/` | header, footer, floating menu, cursor, forms, scroll effects |
| `lib/site.ts` | address, phone, hours, WhatsApp, Instagram, map — single source of truth |
| `lib/nav.ts` | nav items (with `short` labels for the mobile menu) |
| `public/photos/` | interim photography (client-supplied) |

## SEO

- Per-page `<title>` + description, canonical, OpenGraph + Twitter card with image
- `robots.txt` allows **all** crawlers and bots
- JSON-LD: `Restaurant` + `BarOrPub` (address, geo, hours, telephone, cuisine),
  plus `FAQPage` on `/contact`
- Security + long-cache headers in `vercel.json` (`next.config` `headers()` is a
  no-op under `output: 'export'`)

## Deploy

Vercel, framework preset **Next.js**, zero config.

## What's pending

See **[`PENDING.md`](./PENDING.md)** and **[`HANDOFF.md`](./HANDOFF.md)**.
