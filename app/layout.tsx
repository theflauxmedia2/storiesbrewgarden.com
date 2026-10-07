import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { fraunces, montserrat } from "@/lib/fonts";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ScrollEffects } from "@/components/scroll-effects";
import { Cursor } from "@/components/cursor";
import { JsonLd } from "@/components/json-ld";
import { FloatingMenuMount } from "@/components/floating-menu-mount";
import { NAV } from "@/lib/nav";
import { SITE_URL } from "@/lib/site";
import "./styles.css";

const TITLE =
  "Stories Brew Garden | Rooftop Restaurant & Bar in Yelahanka, Bengaluru";
const DESCRIPTION =
  "Rooftop restaurant, bar and brew garden in Yelahanka, North Bengaluru, with craft beer, multicuisine food, cocktails, open-air dining, a kids' play area and pet-friendly seating.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Stories Brew Garden",
  authors: [{ name: "Stories Brew Garden" }],
  creator: "Stories Brew Garden",
  publisher: "Stories Brew Garden",
  category: "restaurant",
  // Google ignores this tag; kept short as a record of the site's head terms.
  keywords: [
    "Stories Brew Garden",
    "Stories Brew Garden Yelahanka",
    "restaurants in Yelahanka",
    "rooftop restaurant in Yelahanka",
    "rooftop bar in Yelahanka",
    "brew garden in Yelahanka",
    "craft beer in Yelahanka",
    "family restaurant in Yelahanka",
    "party venue in Yelahanka",
    "corporate party venue in Yelahanka",
    "restaurants in North Bengaluru",
    "rooftop restaurants in North Bangalore",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Stories Brew Garden",
    locale: "en_IN",
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#EDE9D0",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${montserrat.variable}`}
    >
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SmoothScroll>
          <SiteHeader />
          {children}
          <SiteFooter />
          <ScrollEffects />
          <FloatingMenuMount
            items={NAV.map((n) => ({ label: n.short ?? n.label, href: n.href }))}
          />
        </SmoothScroll>
        <Cursor />
        <JsonLd />
      </body>
    </html>
  );
}
