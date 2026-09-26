# Pending — Stories Brew Garden (Next.js site)

Live status and detail: `HANDOFF.md`. Search the code for `TODO:` or the
`tbc` class to find the exact spot for anything still marked on-page.
Last updated 2026-09-09.

---

## Still needed from the client

| # | Missing | Where it goes | Notes |
| --- | --- | --- | --- |
| 1 | **Email address** | contact facts, footer, schema | Client will send later — row shows "To be confirmed" |
| 2 | **Full food menu** (as crawlable HTML text) | `/food-and-drinks` | Highest-intent search on the site. Never a PDF or image. Client will send later |
| 3 | **Drinks menu** — signature cocktail names + prices | `/food-and-drinks` | |
| 4 | **Kitchen last-order time** | contact facts | Venue hours are set (12:00–01:00 daily); kitchen close time still open |
| 5 | **Celebration packages** — capacities, package tiers, pricing, minimum spend, notice period | `/events-and-celebrations` | Highest-value, lowest-competition page |
| 6 | **Approx cost for two** | schema `priceRange` | Currently omitted |
| 7 | **Real food + beer photography** | `/food-and-drinks`, `/crafted-beers`, home "Find your pour" | Those slots use rooftop / bar stand-ins right now |
| 8 | **Larger photo files** | all `.shot` slots + gallery | Interim webp are ~680px — a bit soft for full-width use |
| 9 | **Logo as SVG or .ai** (text outlined) | header, footer, favicon | Current logo is a raster PNG, slightly soft |
| 10 | **Qaftan font file** (`.woff2` / `.otf`) | display headings | Brand guide font; Fraunces is standing in |
| 11 | **Social share image** — 1200×630 | `app/layout.tsx` OpenGraph | None set — links preview as plain text |
| 12 | **Legal** — FSSAI number, liquor licence display, privacy policy, terms, careers | footer | Footer has no legal links yet |
| 13 | **Analytics** property (GA4 / Plausible / Vercel) | all pages | Not installed |
| 14 | **Sister-venue URLs** (Stories Brewery & Kitchen, Bar & Kitchen, Macaw, MOAI, Fernway, Stories Lounge) | `/our-story`, schema `sameAs` | |
| 15 | **Listing URLs** — Zomato, Swiggy Dineout, EazyDiner, Google Business Profile | footer, schema `sameAs` | |
| 16 | **Favicon decision** | `app/icon.*` | Client's favicon is the full wordmark — an unreadable blob at 16–32px. Offer to restore the martini-glass mark for small sizes |

---

## Deploy checklist

Status as of 2026-09-09 — see `HANDOFF.md` "LIVE" section.

| # | Task | Status |
| --- | --- | --- |
| D1 | Commit + deploy this work | ✅ done — pushed to `github.com/Amaans04/storiesbrewgarden.com`, deployed to Vercel prod |
| D2 | **Add the domain `storiesbrewgarden.com` in the Vercel project + point DNS** | ⬜ open — canonicals / sitemap / OG / robots all reference it; on `*.vercel.app` until done |
| D3 | Connect GitHub → Vercel for push-to-deploy | ✅ done — `vercel git connect` linked the `Amaans04` repo; push to `master` auto-deploys |
| D4 | Turn off Vercel Deployment Protection for production | ✅ not blocking — the production alias returns 200 to anonymous requests / crawlers |
| D5 | Submit `storiesbrewgarden.com/sitemap.xml` in Google Search Console + verify the property | ⬜ open — do after D2 |
| D6 | Create the **Google Business Profile** (address, hours, photos, phone) and link it | ⬜ open — biggest lever for "near me" / Maps |
| D7 | Delete the old `aialetheiaworks/storiesbrewgarden.com` GitHub repo | ⬜ open — token lacks `delete_repo` scope; do it in the GitHub web UI (Settings → Danger Zone) or run `gh auth refresh -s delete_repo -u aialetheiaworks` first |

---

## Decisions made (do not re-open without the client)

- **Location wording stays "Yelahanka / North Bengaluru"** across all copy, even
  though the confirmed address is **Avalahalli, off Kanakapura Road, 560119
  (South Bengaluru)**. The contact facts, footer and schema carry the real
  address + `geo` (13.138695, 77.569611); the marketing copy keeps Yelahanka.
  Client is aware of the mismatch and chose this.
- **Beer is not brewed on site.** Brewed by Stories Brewery & Kitchen, BTM.
  Schema type stays `["Restaurant","BarOrPub"]` — never `Brewery`.
- **"Jammu Witbier"** — client's spelling, kept as-is (brewery's own site spells
  it "Jamun"; not our call).
- **Booking = ReserveGo only.** Every "Book a Table" → the ReserveGo widget with
  `?source=9` (Website). No WhatsApp booking form. Never change the `source`
  value — it miscredits their channel reporting.
- **Celebration enquiries = WhatsApp form.** The form on `/events-and-celebrations`
  composes a prefilled `wa.me/919187920636` message (no backend). Also offered on
  the contact page as Call / WhatsApp / "Plan your celebration".
- **Events calendar / listing — skipped** for now (client). Page points to
  Instagram instead.
- **Rooftop capacity / covered seating / monsoon plan — skipped** for now (client).
- **Fonts:** body = Montserrat (brand guide, self-hosted). Display = Fraunces
  standing in for Qaftan.
- **No age gate.** Restaurant, not a direct alcohol retailer. If one is ever
  required it must be a CSS/JS overlay on rendered content, never a redirect.
- **Mobile nav** is the bottom-centre "liquid morph" floating pill
  (`components/ui/liquid-morph-floating-menu.tsx`, needs `framer-motion`).
  Desktop keeps the top nav. Custom trailing cursor + crimson themed scrollbar
  are in. Logo click always returns to the top of the home page.
