# Session handoff — storiesbrewgarden.com

Snapshot of where things stand so work can resume later. Last updated 2026-09-08.

## TL;DR

The approved static site in `html/` has been ported to a Next.js 16 app, motion
(smooth scroll + scroll reveal) added, pushed to GitHub, and deployed live to
Vercel's temporary domain. One manual step remains to enable auto-deploy on push.

## Live

| | |
| --- | --- |
| **Live site** | https://storiesbrewgarden-com.vercel.app |
| **GitHub repo** | https://github.com/aialetheiaworks/storiesbrewgarden.com (private, branch `master`) |
| **Vercel project** | `storiesbrewgarden-com` under the `amaans04` account (`amaans-projects-59ec70c7`) |
| **Vercel Git settings** | https://vercel.com/amaans-projects-59ec70c7/storiesbrewgarden-com/settings/git |

Deployed via `vercel deploy --prod` from the CLI. Verified on the live URL: all 8
routes 200, unknown paths 404, `/sitemap.xml` + `/robots.txt` serve, all four
`vercel.json` security headers present, correct `<title>`.

## The one open task

**Connect the GitHub repo to the Vercel project for push-to-deploy.**

The CLI (`vercel git connect`) fails: the repo is under the `aialetheiaworks`
GitHub account, and the Vercel GitHub App is not installed there. That install is
an interactive browser OAuth step.

To finish:
1. Open https://vercel.com/amaans-projects-59ec70c7/storiesbrewgarden-com/settings/git
2. **Connect Git Repository** → approve the Vercel app install for `aialetheiaworks`
   → select `storiesbrewgarden.com`

Until then, redeploy manually from the project folder:

```bash
npx vercel@latest deploy --prod
```

## Local dev

```bash
npm install
npm run dev      # http://localhost:3000 (was running during the session; now stopped)
npm run build    # static export to ./out
```

## What was built

### Port (commit `9c35d56`)

- Next.js 16, App Router, TypeScript, `output: 'export'`, `trailingSlash: true`.
- `html/` kept verbatim as the design reference. One route per HTML file:
  `/`, `/our-story`, `/food-and-drinks`, `/crafted-beers`, `/rooftop-experience`,
  `/events-and-celebrations`, `/gallery`, `/contact`.
- Header / footer / mobile drawer → shared components (`components/site-*.tsx`).
  `aria-current` derived from pathname; drawer toggle is `useState`.
- `app/styles.css` is the original stylesheet. **Only change:** the `font-family`
  stacks now lead with `var(--font-fraunces)` / `var(--font-hanken)`
  (`replace_all` of `font-family:"Fraunces",` and `font-family:"Hanken Grotesk",`).
  Custom properties, media queries, `.rise` stagger untouched.
- Fonts self-hosted via `next/font/google` (`lib/fonts.ts`): Fraunces variable
  with `axes: ['opsz','SOFT','WONK']` (the SOFT/WONK values are set in styles.css
  via `font-variation-settings`), Hanken Grotesk variable.
- Per-route `metadata`: exact title + description, `alternates.canonical`,
  per-page OpenGraph. `metadataBase` + shared OG/Twitter/`themeColor` in
  `app/layout.tsx`.
- Added: `vercel.json` security headers (X-Content-Type-Options, Referrer-Policy,
  X-Frame-Options, Permissions-Policy — `headers()` is a no-op under export);
  `app/sitemap.ts`, `app/robots.ts` (allows OAI-SearchBot / Claude-SearchBot /
  PerplexityBot / Perplexity-User, disallows GPTBot / ClaudeBot / Google-Extended,
  never `/_next/`); `components/json-ld.tsx` — `["Restaurant","BarOrPub"]`, NOT
  Brewery, with address/geo/tel/hours/priceRange omitted and `sameAs: []`;
  `app/not-found.tsx` → `out/404.html`; wordmark favicon (`app/icon.svg` +
  `app/favicon.ico`, golden dot on garden green — the original had none, 404'd).
- Every "To be confirmed" chip preserved (they render). TODO comments kept as
  JSX `{/* */}` — in source, not in shipped HTML (agreed tradeoff).

Verified: `out/` matches `html/` to the pixel in scrollHeight/scrollWidth at
390/768/1440 on all 8 pages. Pre-existing +1px horizontal overflow at 360px is
present in `html/` too (header CTA row) — not introduced, left alone. Hero `.rise`
stagger confirmed live. Mobile drawer parity confirmed.

### Motion (commit `41d3a23`)

- `components/smooth-scroll.tsx` — Lenis (`lenis` pkg) in `root` mode, `lerp: 0.1`.
  Sticky header + native anchors keep working. Fully bypassed under
  `prefers-reduced-motion`.
- `components/scroll-effects.tsx` — IntersectionObserver adds `.reveal-in` to
  `main > section > .wrap` as it scrolls in (fade + 22px rise, 0.8s, `--ease-slow`).
  `.reveal` class is JS-only and only applied to below-the-fold sections → no
  flash, no-JS renders normally. Also: hero-glow parallax, header shadow on
  scroll (`.hdr.is-stuck`), anchor scroll with sticky-header offset (`/contact#hours`).
- Hours strip / beer list / FAQ get **no** per-item animation (matches the
  original design notes: "read, not admired").
- `app/styles.css`: added `.hdr.is-stuck` shadow + `.reveal` / `.reveal-in` rules
  with a `prefers-reduced-motion` override, at the end of the file and next to `.hdr`.

## LIVE — deployed 2026-09-09

- **Live:** https://storiesbrewgarden-com.vercel.app (production, all routes 200,
  robots open, OG image + JSON-LD serving, security headers present)
- **GitHub:** https://github.com/Amaans04/storiesbrewgarden.com (private, branch
  `master`) — the personal **Amaan Saify** account, *not* `aialetheiaworks`. The
  old `aialetheiaworks` remote was removed from this clone. Commit author is
  `Amaan Saify <amaansaify64@gmail.com>`.
- **Vercel:** project `storiesbrewgarden-com` under team "Amaan's projects"
  (`amaans-projects-59ec70c7`), account `amaans04` / `amaansaify64@gmail.com`
  (the Amaan Saify account). **Git is now connected** (`vercel git connect`) —
  push to `master` auto-deploys to production.
- Custom domain `storiesbrewgarden.com` still needs to be added in the Vercel
  project (canonicals / sitemap / OG all point there). Until then the site is on
  the `*.vercel.app` URL.
- `storiesbrewgarden-hostinger.zip` at the repo root is the alternative static
  bundle for Apache/LiteSpeed hosting (gitignored).

## Copy polish — Title Case + no em dashes (this session, 2026-09-09)

- **Em / en dashes removed from all visible copy** (they read as AI-generated) —
  replaced with commas, colons, periods or restructured sentences. Verified:
  zero `—` / `–` in the rendered HTML of any page. Hyphens in compounds
  (`pet-friendly`, `open-air`, `four-legged`) are kept. Code comments untouched.
- **All headings → Title Case** — every `h1` / `h2` / `h3` / `.pull` and every
  eyebrow, plus CTA button labels, footer links, gallery chips and the
  hour-band sub-labels. Minor words (`a`, `the`, `and`, `of`, `for`, `to`, …)
  stay lowercase per standard title case.
- **Eyebrows** are no longer tracked ALL-CAPS — `.eyebrow` lost
  `text-transform:uppercase`; it now renders the Title-Case source text with
  near-zero tracking (still small, crimson). This was the biggest "templated"
  tell on the page.
- Page `<title>` tags switched from `Name — Brand` to `Name | Brand`.
- Slogan is now "Come for the Flavours. Discover Your Pour. Stay for the Story."
  (footer + JSON-LD `slogan`). `HOURS_DISPLAY` is "12:00 pm to 1:00 am".

## Pre-launch pass (this session, 2026-09-09)

- **Removed** the `html/` design-reference directory (port complete + verified),
  `scratchpad-shots/`, the unused `kids-play-rainbow.webp` (346KB), and stray
  `.DS_Store` files. *(Earlier sections below still mention `html/` as history.)*
- **robots.txt** now allows **every** crawler and bot — `User-Agent: * / Allow: /`
  plus `Host` + `Sitemap`. Removed all the GPTBot/ClaudeBot/Google-Extended
  disallows (client wants maximum reach).
- **OpenGraph / Twitter image** — `app/opengraph-image.jpg` (1200×630, branded
  rooftop card, generated) + `.alt.txt`. Applied to every route by Next's file
  convention. Root metadata now sets OG/Twitter title+description+locale, robots
  directives, keywords, `lang="en-IN"`.
- **FAQ rich results** — `FAQPage` JSON-LD on `/contact` (6 Q&As), generated from
  the same data that renders the visible list.
- **JSON-LD enriched** — `@id`, `description`, `slogan`, image array,
  `currenciesAccepted`, `paymentAccepted`, `areaServed`, `parentOrganization`.
- **Lighter / faster:**
  - `framer-motion` is now loaded via `next/dynamic({ssr:false})` **and**
    viewport-gated in `components/floating-menu-mount.tsx` — desktop never
    fetches it; mobile loads it after hydration. Confirmed: the framer chunk is
    not referenced in `out/index.html`.
  - `vercel.json` — 30-day `Cache-Control` + `stale-while-revalidate` on
    `/photos/*` and all image/font assets.
  - `next.config.mjs` — `poweredByHeader:false`, `productionBrowserSourceMaps:false`.
  - `out/` is 4.1 MB (was 4.4).
- **README.md** rewritten for the current state.

## Mobile menu → liquid-morph floating menu (this session, 2026-09-09)

Replaced the top-right hamburger + dropdown sheet with a **bottom-centre floating
pill** that morphs open (`components/ui/liquid-morph-floating-menu.tsx`, adapted
from a shadcn/Tailwind + framer-motion snippet — this project has neither, so the
Tailwind classes became `.fm-*` rules in styles.css with brand tokens).

- Crimson pill → charcoal (`--night`) circle wipes up → cream Fraunces uppercase
  nav items with a per-character roll on hover. Backdrop dim + blur behind.
- **Mobile/tablet only** (`.fm-root` hidden ≥1080px); desktop keeps the top nav.
- Real Next.js navigation, Escape + outside-click + route-change close, body
  scroll-lock while open, reduced-motion → plain fade, safe-area inset aware.
- Uses `NAV[].short` labels (added to `lib/nav.ts`) to fit 8 items.
- `footer` gets `padding-bottom:118px` below 1080px so the pill never covers it.
- **New dependency: `framer-motion`** (~45KB gz on the client bundle).
- `site-header.tsx` slimmed right down — no more drawer / scrim / focus-trap /
  menu button. It's logo (with the scroll-to-top handler) + desktop nav + Book.
- The earlier `menu-toggle-icon.tsx` (first design) was removed — superseded.

## Forms, cursor, scrollbar, logo (this session, 2026-09-09)

- **WhatsApp enquiry form** — `components/whatsapp-form.tsx`: a backend-free form
  that composes its answers into a `wa.me/919187920636` message and opens
  WhatsApp with the text pre-filled (works on static export). Used on
  **Events `#enquiry`** — celebration enquiry (Name / Mobile / Email / Occasion /
  Preferred date+time / Guests / F&B / Special requirements) → "Send celebration
  enquiry". Styled for the dark band; `color-scheme:dark` on date/time inputs.
  **Booking is ReserveGo only** — the client asked for no WhatsApp booking form;
  the Contact `#book` section is the ReserveGo widget + a Call button.
- **Themed scrollbar** — crimson thumb on cream track (`::-webkit-scrollbar` +
  Firefox `scrollbar-color`) in styles.css.
- **Custom cursor** — `components/cursor.tsx`: a crimson dot pinned to the real
  pointer + a ring that trails with a lerp, grows over interactive elements,
  dips on press, and swaps to cream over dark sections / solid buttons. Fine
  pointers only; native cursor kept on form fields; trail dropped under
  reduced-motion. Mounted in `layout.tsx`.
- **Logo → landing page** — `site-header.tsx` `onLogoClick`: from another page it
  routes to `/` and lands at the top; already on `/` it smooth-scrolls to the
  top (Lenis-aware). `data-scroll-behavior="smooth"` added to `<html>`.
- Skipped the events listing per the client.

### Client answers, applied 2026-09-09
- **Map coordinates** `13.138694646726178, 77.56961147054795` → `GEO` in
  `lib/site.ts`, schema `geo` + `hasMap`, and the "Get directions" links.
- **Email** — stays blank for now (client will send).
- **Food menu** — client will send later.
- **Events calendar + rooftop capacity** — skipped; the "to be confirmed" chips
  for both are removed.
- **Location** — stays Yelahanka in all copy (address block stays Avalahalli).
- **"Jammu Witbier"** — client's spelling, applied everywhere.
- **On-site brewing** — no; copy and the schema comment now say so explicitly.
- **Booking** — ReserveGo only (WhatsApp booking form removed).

The running list is now in `PENDING.md` at the repo root (the old
`html/PENDING.md` is superseded).

## Content aligned to client copy doc (this session, 2026-09-09)

Passed every page against `~/Downloads/new new new content.docx` ("FINAL WEBSITE
CONTENT"). Wording, headings and CTAs now follow the doc. The site keeps its own
sentence-case type styling rather than the doc's ALL-CAPS emphasis.

- **Home** — hero lede rewritten to the doc; added two missing sections:
  "The story continues — now in Yelahanka" (brand intro) and "A rooftop made for
  good times". "Why Stories Brew Garden" now has 7 reasons (added Entertainment)
  in the doc's wording and order. "A world of flavours" and the final CTA
  ("…Your favourite people beside you. / Stories Brew Garden, Yelahanka.") match.
- **Our Story** — hero + "The story behind our spaces" + "A Bar & Kitchen built
  around the joy of gathering" aligned to the doc.
- **Food & Drinks** — menu section reframed as "A world of flavours, made for
  your table"; Drinks list condensed to the doc's 3 items.
- **Crafted Beers** — "Pouring at Stories Brew Garden", "Good beer deserves good
  food and good company", "Beer styles and availability may vary."
- **Rooftop Experience** — hero lede aligned.
- **Events & Celebrations** — "Events & experiences" heading, added "Seasonal
  celebrations", a "Follow us on Instagram" button, celebrations copy expanded to
  the doc, and the enquiry block now offers Call + WhatsApp + "Plan your
  celebration".
- **Contact** — hero lede, booking copy, "Celebrating something?" all aligned;
  dropped the extra Kitchen row.

**Still not built (the doc asks for these, they need a backend the static export
doesn't have):**
- Booking form on Contact — currently handled by the **ReserveGo widget** (which
  is itself the booking form), so this is effectively covered.
- **Celebration Enquiry Form** (Name / Mobile / Email / Occasion / Preferred
  Date+Time / Guests / F&B / Special Requirements) — needs a form service
  (Formspree, Google Forms, or a serverless handler). For now the page offers
  Call + WhatsApp, which the doc also lists as the "prefer to speak directly"
  fallback. TODO in `events-and-celebrations/page.tsx`.
- Real events listing / "Discover Upcoming Events".
- Full food + drinks menus (crawlable HTML, not PDF).

**"Jammu" vs "Jamun" Witbier:** the doc says "Jammu Witbier" but the brewery's own
site says "**Jamun** Witbier" and describes it as "infused with real jamun" (the
fruit). Kept "Jamun" as the correct name — flag for the client to confirm.

## Favicon, brew data, address (this session, 2026-09-09)

- **Favicon** — client supplied a favicon.io set (`~/Downloads/favicon_io/`, the
  full wordmark). Installed: `app/favicon.ico` (48), `app/icon.png` (512),
  `app/apple-icon.png` (180); `app/icon.svg` (my martini mark) deleted so the
  identity is consistent. `app/manifest.ts` added (brand cream theme, points to
  `public/android-chrome-{192,512}.png`). Note: the wordmark is illegible at
  16–32px — the martini mark read better there; offer to restore it.
- **Beer specs** — `components/pour-list.tsx` filled with real ABV / IBU /
  tasting notes from Stories Brewery & Kitchen. "Jammu" → "Jamun" Witbier fixed
  (metadata too). Mobile pour-row layout fixed (note/spec were landing in the
  14px glass gutter — now stacked in column 2). Seasonal specials the brewery
  also makes (Maibock, Abbey Tripel, Lichtenhainer, Ginger & Spice) noted as a
  rotation option in a TODO on the crafted-beers page.
- **Home hero** — now copy-left / photo-right (`rooftop-dining-evening.webp`);
  `.hero-grid` / `.hero-media` in styles.css. The old empty right side is filled.
- **Address + hours** — client gave: *4th Floor, Chandre Gowda Arcade, next to
  Vajram Tiara Road, Avalahalli, Bengaluru 560119*; open **12:00–01:00 daily**.
  In `lib/site.ts` (`ADDRESS`, `ADDRESS_LINES`, `MAPS_URL`, `HOURS_*`), wired
  into the contact page facts list, the footer, and the JSON-LD (`address` +
  `openingHoursSpecification`). `geo` still omitted — needs precise lat/long.
- **Instagram + WhatsApp** — `INSTAGRAM_URL`
  (instagram.com/storiesbrewgarden.yelahanka) and `WHATSAPP_URL` / `WHATSAPP_DISPLAY`
  (+91 91879 20636, wa.me link with a prefilled message) in `lib/site.ts`. Wired
  into the footer ("Visit" list), the contact facts list, the celebration
  enquiry block, and the JSON-LD (`sameAs`). ReserveGo's per-channel widget URLs
  were reviewed — the site correctly uses `source=9` (Website) everywhere; the
  others are only for links placed on those external channels, no change needed.
- **LOCATION MISMATCH (unresolved):** that address is Avalahalli / off Kanakapura
  Road = **South** Bengaluru, but all the marketing copy still says "Yelahanka /
  North Bengaluru" (~40 refs across titles, meta, hero, body). Client chose
  "leave the copy for now, keep the address" — so the contact/footer/schema NAP
  is real, the rest of the copy is knowingly stale. Reconcile before any serious
  SEO push (Google cross-checks NAP).

## Interim photography (this session, 2026-09-09)

Client supplied 15 images (`~/Downloads/assets/`) — **no food photography yet**.
Copied the usable 13 to `public/photos/` with descriptive names and wired them into
every `.shot` slot + the gallery grid, replacing the striped placeholders.

- `.shot` in `styles.css` now frames a real `<img>` (`object-fit:cover`,
  `aspect-ratio` box so no CLS); the dev caption span is dropped on content pages
  and kept only on the gallery as a legible label chip over a floor gradient.
- Food/drinks page + "sharing plates" / "the eight lined up" slots use rooftop /
  bar / interior shots as **stand-ins** — swap to real food/beer shots when they
  arrive (`app/food-and-drinks/page.tsx`, `app/page.tsx`, `app/crafted-beers/page.tsx`).
- All images are `loading="lazy"` `decoding="async"` with real `alt`.
- Source webp are ~680px wide (small-ish for full-width desktop, fine for the
  half-width slots and the gallery). Re-export larger when real photography lands.
- Unused: `kids-play-rainbow.webp` (no kids-specific slot yet). `kids-play.webp`
  sits under gallery → "Celebrations".
- Still no OpenGraph image (`app/layout.tsx`) — add a 1200×630 crop once there's a
  hero-worthy shot.

## Mobile + desktop revamp — apple-design pass (this session, 2026-09-09)

Applied `~/Desktop/Projects/claude-SKILLS/apple-design` (Apple's fluid-interface
and typography principles) to both viewports:

- **Type** — tracking and leading are now size-specific: display type gets tighter
  tracking (`h1 -0.035em`) and tighter leading; body sits near `0` and looser.
  Sizes moved to `rem` so the browser font-size setting scales them. Eyebrows are
  smaller, tighter, and crimson (read as intentional, not chrome).
- **Header** — a real translucent material: `backdrop-filter` blur + saturate,
  the page scrolls under it, and the hard 1px divider is replaced by a soft
  scroll-edge shadow that fades in only once content is beneath it. Solid
  fallbacks via `@supports` + `prefers-reduced-transparency` / `prefers-contrast`.
  **Fix:** added a `browserslist` to `package.json` — the old targets were causing
  Lightning CSS to strip `backdrop-filter` entirely, so header glass never worked.
- **Mobile menu → a proper sheet** (`components/site-header.tsx` rewritten):
  frosted translucent panel that springs down from the header (`transform-origin:
  top right`), a dimming scrim behind it, body scroll-lock while open, `Esc` to
  close, focus moves in on open and returns to the button on close, enter/exit
  along the same path. Hamburger morphs to an X. Reduced-motion → opacity-only.
- **Press feedback** on every interactive element — nav links, drawer links,
  menu button, logo, buttons — instant `:active` scale/translate.
- Desktop nav gets a crimson underline indicator on the current page.
- Buttons: `min-height:44px` tap target, `touch-action:manipulation`,
  `-webkit-tap-highlight-color:transparent` globally.
- Section / hero padding is now fluid `clamp()` instead of two fixed breakpoints.
- Hero load-in stagger retuned to a soft settle (no overshoot), reduced-motion
  variant added.

## Brand palette + fonts (this session, 2026-09-09)

Applied the client's brand guide (`SBGY Brand Color & Fonts.pdf`) — strict:

| Brand hex | Role in the site |
| --- | --- |
| `#EDE9D0` cream | page ground (`--limewash`), raised surfaces |
| `#8E191C` / `#8F1B1F` crimson | every accent — links, buttons, eyebrow-current-nav, focus, hero glow, favicon |
| `#919682` sage | rules, decoration, secondary-text hue (darkened to `#5A5F4E` for AA on cream) |

- Dark sections keep the day→night rhythm but in brand colour: `--night #2B2D25`
  (sage taken to charcoal) for `.band-dark`, `--cellar #54100E` (deep crimson) for
  `.band-dusk`/`.evening`. Gold (`--pour #E9A93C`) is gone — every fill is crimson.
- Solid buttons flip to cream-on-crimson on dark grounds so they clear the ground.
- All text/ground pairs re-verified ≥4.5:1 (most ≥7:1) — see `:root` comments in
  `app/styles.css`.
- Fonts: **body → Montserrat** (`--font-sans`, Google Fonts, from the guide).
  Display stays **Fraunces** (`--font-display`) — the guide names **Qaftan**, which
  is not on Google Fonts and no file was supplied. **Caliro DEMO** (demo licence)
  skipped. Get the Qaftan file to finish the type side.
- Favicon redrawn in brand colours (cream martini glass on crimson).
- Hours-strip time chips + gradient rebranded (warm ramp resolving to crimson).

## Phone + logo (this session, 2026-09-09)

- **Phone `080 4026 5613`** (`tel:+918040265613`) wired site-wide via
  `lib/site.ts` (`PHONE_DISPLAY` / `PHONE_TEL`): footer (every page), contact
  page facts list + celebration section, and `telephone` in the JSON-LD.
  WhatsApp / address / hours still "To be confirmed".
- **Real logo** — client sent `Stories_Bar_Logo_Black…-removebg-preview.png`
  (603×414 transparent raster; no vector available). Trimmed to
  `public/logo.png` (556×378), used in header (`.mark-logo`, 52px) and footer
  (52px, `filter:brightness(0) invert(1)` for the dark bg). Replaced the old
  CSS dot + text wordmark.
- **Favicon** — hand-drawn martini-glass mark matching the logo:
  `app/icon.svg` (cream glass + gold pick on `--canopy` rounded square),
  `app/favicon.ico` (multi-size, via `png-to-ico`), `app/apple-icon.png` (180).
  Raster sources rendered with macOS `qlmanage` + `sips` (no ImageMagick/sharp
  on this machine); working files in `scratchpad-shots/logo/`.
- Logo is raster only — slightly soft at large sizes. Ask client for SVG or
  `.ai` with outlined text to sharpen header/footer + regenerate icons.

## Not done (by design)

- No content from `html/PENDING.md` was filled in — address, hours, food
  menu, beer specs, celebration packages, photography, analytics, etc.
  All still render as dashed "To be confirmed" chips with `TODO:` notes.
- No custom domain — using the `*.vercel.app` temp domain for now.
- `metadataBase` is pinned to `https://storiesbrewgarden.com`, so canonical / OG
  URLs already point at the real domain even on the Vercel temp domain.

## Notes / gotchas

- `next dev` auto-generates `AGENTS.md` / `CLAUDE.md` at the repo root — gitignored
  (commit `a3e5c66`). Disable with `agentRules: false` in `next.config.mjs` if unwanted.
- `.vercel/` and `.env.local` (holds a `VERCEL_OIDC_TOKEN`) are gitignored — do not commit.
- Git identity for this repo is set locally to `Amaan Saify <aialetheiaworks@gmail.com>`.
- QA screenshots from the session are in `scratchpad-shots/` (gitignored).

## Commits

```
41d3a23  Add smooth scrolling and scroll-reveal motion
a3e5c66  Ignore next dev auto-generated AGENTS.md / CLAUDE.md
9c35d56  Port static site to Next.js 16 static export
```
