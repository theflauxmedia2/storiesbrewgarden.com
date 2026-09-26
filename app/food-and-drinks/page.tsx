import type { Metadata } from "next";
import Link from "next/link";

const DESCRIPTION =
  "A global kitchen moving between Indian classics, Asian plates and continental comfort food, with crafted beers, signature cocktails, mocktails and refreshers.";

export const metadata: Metadata = {
  title: "Food & Drinks | Stories Brew Garden, Yelahanka",
  description: DESCRIPTION,
  alternates: { canonical: "/food-and-drinks" },
  openGraph: {
    title: "Food & Drinks | Stories Brew Garden, Yelahanka",
    description: DESCRIPTION,
    url: "/food-and-drinks",
  },
};

export default function FoodAndDrinksPage() {
  return (
    <main id="main">
      <div className="hero">
        <div className="sun" aria-hidden="true" />
        <div className="wrap">
          <p className="eyebrow rise">Food &amp; Drinks</p>
          <h1 className="rise">
            Global Kitchen,
            <br />
            Local Soul
          </h1>
          <p className="lede rise">
            Travel across flavours without leaving your table. The kitchen moves
            between global favourites, Indian classics, Asian inspirations and
            regional specialities: familiar comfort and unexpected discoveries on
            one menu.
          </p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <p className="eyebrow">The Flavours of Stories</p>
          <h2>
            A World of Flavours,
            <br />
            Made for Your Table
          </h2>
          <p className="lede">
            Our menu is created for the way people actually enjoy going out:
            ordering a little more, sharing a little more and staying a little
            longer.
          </p>
          <p>
            Explore global cuisine alongside regional favourites, Indian
            classics, Asian-inspired plates, continental comfort food, sharing
            plates, hearty mains and indulgent desserts. Pair your food with
            popular home-brewed craft beers from the collection of Stories
            Brewery &amp; Kitchen in BTM, Bengaluru, Stories Signature Cocktails,
            spirits, mocktails and refreshing beverages.
          </p>
          <div style={{ marginTop: "26px" }}>
            <span className="tbc">
              Full food menu to be added: dishes, descriptions and prices
            </span>
          </div>
          {/* TODO: full food menu as HTML (crawlable, never a PDF or image). Doc calls for "View Food Menu" + "View Drinks Menu" buttons here. */}
          <div className="gal" style={{ marginTop: "38px" }}>
            <div className="shot wide">
              <img
                src="/photos/rooftop-dining-wide.webp"
                width={680}
                height={453}
                loading="lazy"
                decoding="async"
                alt="Rooftop dining tables set under the pitched roof"
              />
            </div>
            <div className="shot wide">
              <img
                src="/photos/ambience-lights.webp"
                width={680}
                height={453}
                loading="lazy"
                decoding="async"
                alt="A cluster of woven pendant lights over a mural, with bougainvillea"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="band-dark dark">
        <div className="wrap">
          <p className="eyebrow">Something Good in Your Glass</p>
          <h2>Drinks</h2>
          <ul className="reasons">
            <li>
              <h3>Crafted Beers</h3>
              <p>Refreshing pours made for easy afternoons and lively evenings.</p>
            </li>
            <li>
              <h3>Signature Cocktails</h3>
              <p>Cocktails with personality and a Stories touch.</p>
            </li>
            <li>
              <h3>Classics, Spirits, Mocktails &amp; Refreshers</h3>
              <p>Something for every mood and occasion.</p>
            </li>
          </ul>
          <p style={{ marginTop: "34px", fontSize: "19px" }}>
            <em>Every good story deserves a signature.</em>
          </p>
          <div className="btn-row">
            <Link className="btn" href="/crafted-beers">
              See the Beers
            </Link>
          </div>
          <p style={{ marginTop: "34px", fontSize: "14.5px" }}>
            Menu items, prices and availability are subject to change. Guests with
            allergies or dietary restrictions should inform the service team before
            ordering.
          </p>
        </div>
      </section>
    </main>
  );
}
