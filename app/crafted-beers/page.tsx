import type { Metadata } from "next";
import Link from "next/link";
import { PourList } from "@/components/pour-list";
import { PourGallery } from "@/components/pour-gallery";
import { Faq, type FaqItem } from "@/components/faq";
import { RESERVEGO_URL } from "@/lib/site";

const TITLE = "Craft Beer in Yelahanka | Crafted Beers at Stories Brew Garden";
const DESCRIPTION =
  "Craft beer in Yelahanka, North Bengaluru: Wheat IPA, Belgian witbier, Hefeweizen, Kölsch, a strong wheat ale, and apple and mango cider at a rooftop brew garden.";

// "Is the beer brewed here?" is answered plainly: the pours come from Stories
// Brewery & Kitchen, BTM. Never imply on-site brewing (see PENDING.md).
const FAQS: FaqItem[] = [
  {
    q: "Which Craft Beers Are on Tap?",
    a: "Eight pours: Wheat IPA, Jammu Witbier, Stories Hefeweizen, Belgian Wit, Triple Wit (a strong wheat ale), Kölsch, Apple Cider and Mango Cider. Seasonal specials rotate through the board.",
  },
  {
    q: "Is the Beer Brewed on Site?",
    a: "No. The beers are brewed by Stories Brewery & Kitchen in BTM, Bengaluru, and poured fresh at Stories Brew Garden in Yelahanka.",
  },
  {
    q: "Do You Serve Cider?",
    a: "Yes, two: a crisp Apple Cider and a lush Mango Cider, both light at 4% ABV with no bitterness.",
  },
  {
    q: "Is Stories Brew Garden a Pub or a Restaurant?",
    a: "Both. It is a rooftop bar and beer garden with a full multicuisine kitchen, so you can come for a pint, a long dinner or both.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/crafted-beers" },
  openGraph: {
    title: TITLE,
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
          <h1 className="eyebrow rise">Crafted Beers: Craft Beer in Yelahanka</h1>
          <p className="display rise">
            Crafted for
            <br />
            the Moment
          </p>
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
          <p className="lede">
            From a hoppy Wheat IPA and a classic German Hefeweizen to a crisp
            Kölsch, two Belgian witbiers, a strong wheat ale and two easy ciders,
            apple and mango, this is the craft beer menu at Stories Brew Garden.
          </p>
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
                This is a rooftop beer garden and bar in North Bengaluru, so
                explore refreshing pours, discover different flavour profiles and
                find the one that fits your mood, then{" "}
                <Link href="/food-and-drinks">pair it with the food</Link>.
              </p>
            </div>
            <div className="shot sq">
              <img
                src="/photos/bar-interior.webp"
                width={680}
                height={453}
                loading="lazy"
                decoding="async"
                alt="The bar at Stories Brew Garden, Yelahanka, with pendant lighting and seating"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">Before You Order</p>
          <h2>
            Beer Questions,
            <br />
            Answered
          </h2>
          <Faq items={FAQS} />
          <div className="btn-row">
            <a className="btn" href={RESERVEGO_URL} target="_blank" rel="noopener">
              Book a Table
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
