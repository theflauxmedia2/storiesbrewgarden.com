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
  "Stories Brew Garden | Rooftop Brew Garden in Yelahanka, Bengaluru";
const DESCRIPTION =
  "Rooftop brew garden in Yelahanka, Bengaluru, with crafted beers, a global kitchen, signature cocktails, open-air dining, a kids' play area and pet-friendly spaces.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Stories Brew Garden",
  authors: [{ name: "Stories Brew Garden" }],
  creator: "Stories Brew Garden",
  publisher: "Stories Brew Garden",
  category: "restaurant",
  keywords: [
    "Stories Brew Garden",
    "rooftop brew garden Yelahanka",
    "craft beer Bengaluru",
    "brewpub Bengaluru",
    "rooftop restaurant Yelahanka",
    "rooftop bar North Bengaluru",
    "sundowners Yelahanka",
    "date night rooftop Bengaluru",
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
