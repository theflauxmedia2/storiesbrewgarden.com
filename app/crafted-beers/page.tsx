import type { Metadata } from "next";
import Link from "next/link";
import { PourList } from "@/components/pour-list";
import { PourGallery } from "@/components/pour-gallery";
import { RESERVEGO_URL } from "@/lib/site";

const DESCRIPTION =
  "Eight crafted beers on the board: Wheat IPA, Jammu Witbier, Stories Hefeweizen, Apple Cider, Mango Cider, Belgian Wit, Triple Wit and Kölsch.";

export const metadata: Metadata = {
  title: "Crafted Beers | Stories Brew Garden, Yelahanka",
  description: DESCRIPTION,
  alternates: { canonical: "/crafted-beers" },
  openGraph: {
    title: "Crafted Beers | Stories Brew Garden, Yelahanka",
    description: DESCRIPTION,
    url: "/crafted-beers",
  },
};

export default function CraftedBeersPage() {
  return (
    <main id="main">
      <div className="hero">
        <div className="sun" aria-hidden="true" />
        <div className="wrap">
          <p className="eyebrow rise">Crafted Beers</p>
          <h1 className="rise">
            Crafted for
            <br />
            the Moment
          </h1>
          <p className="lede rise">
            Find a pour that suits your palate, your plate and your mood. Distinct
            pours. Different personalities. Your table is waiting to discover its
            favourite.
          </p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <p className="eyebrow">Pouring at Stories Brew Garden</p>
          <h2>Find Your Brew</h2>
          <PourList />
          <p style={{ marginTop: "22px", fontSize: "14.5px", color: "var(--stone)" }}>
            Beer styles and availability may vary. Pours are brewed by Stories
            Brewery &amp; Kitchen, BTM. This outlet does not brew on site.
          </p>
          <div className="btn-row">
            <a className="btn" href={RESERVEGO_URL} target="_blank" rel="noopener">
              Book a Table
            </a>
            <Link className="btn line" href="/food-and-drinks">
              See What to Eat With It
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">On the Board</p>
          <h2>A Closer Pour</h2>
          <p className="lede">
            The regulars, up close, alongside a rotating cast of seasonal
            specials from the brewery. Tap a photo to jump to its details
            above.
          </p>
          <PourGallery />
          <span className="tbc">
            Seasonal pours rotate and availability may vary. Ask your server
            what is on the board today.
          </span>
        </div>
      </section>

      <section className="band-dark dark">
        <div className="wrap">
          <div className="two">
            <div>
              <p className="eyebrow">Find Your Pour</p>
              <h2>
                Good Beer Deserves Good
                <br />
                Food and Good Company
              </h2>
              <p className="lede">
                At Stories Brew Garden, crafted beers are part of the experience.
                Explore refreshing pours, discover different flavour profiles and
                find the one that fits your mood.
              </p>
            </div>
            <div className="shot sq">
              <img
                src="/photos/bar-interior.webp"
                width={680}
                height={453}
                loading="lazy"
                decoding="async"
                alt="The bar area with pendant lighting and seating"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
