import type { Metadata } from "next";
import Link from "next/link";
import { Faq, type FaqItem } from "@/components/faq";
import { RESERVEGO_URL } from "@/lib/site";

const TITLE = "Multicuisine Restaurant in Yelahanka | Stories Brew Garden Menu";
const DESCRIPTION =
  "The Stories Brew Garden menu: North Indian, regional Indian, Asian, continental and global food, desserts, signature cocktails, mocktails and craft beer in Yelahanka.";

const FAQS: FaqItem[] = [
  {
    q: "What Cuisines Does Stories Brew Garden Serve?",
    a: "A multicuisine menu: North Indian classics, regional Indian favourites, Asian plates, continental comfort food and global dishes, with sharing plates, hearty mains and desserts.",
  },
  {
    q: "Is It a Good Place for Lunch in Yelahanka?",
    a: "Yes. The kitchen opens at 12 noon every day, so it works for a quick lunch, a long weekend lunch or a Sunday lunch with the family on the rooftop.",
  },
  {
    q: "How Late Can I Come for Dinner?",
    a: "Stories Brew Garden is open until 1 am every day, so a late dinner in Yelahanka can run as long as the conversation does.",
  },
  {
    q: "Do You Serve Cocktails and Mocktails?",
    a: "Yes. Stories Signature Cocktails, classic cocktails and spirits sit alongside mocktails and refreshers, plus eight crafted beers and ciders.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/food-and-drinks" },
  openGraph: {
    title: TITLE,
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
          <h1 className="eyebrow rise">
            Food &amp; Drinks: Multicuisine Restaurant in Yelahanka
          </h1>
          <p className="display rise">
            Global Kitchen,
            <br />
            Local Soul
          </p>
          <p className="lede rise">
            Travel across flavours without leaving your table. The kitchen moves
            between global favourites, North Indian classics, Asian inspirations
            and regional Indian specialities: familiar comfort and unexpected
            discoveries on one menu.
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
            Explore global cuisine alongside regional Indian favourites, North
            Indian classics, Asian-inspired plates, continental comfort food,
            sharing plates, hearty mains and indulgent desserts. Pair your food with
            popular home-brewed craft beers from the collection of Stories
            Brewery &amp; Kitchen in BTM, Bengaluru, Stories Signature Cocktails,
            spirits, mocktails and refreshing beverages.
          </p>
          <p>
            Open from 12 noon to 1 am every day, it is an easy pick for lunch in
            Yelahanka, a long Sunday lunch with the family, a group dinner with
            friends or a late dinner under the open sky.
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
                alt="Rooftop dining tables at Stories Brew Garden, a multicuisine restaurant in Yelahanka"
              />
            </div>
            <div className="shot wide">
              <img
                src="/photos/ambience-lights.webp"
                width={680}
                height={453}
                loading="lazy"
                decoding="async"
                alt="Woven pendant lights over a mural in the dining area at Stories Brew Garden"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="band-dark dark">
        <div className="wrap">
          <p className="eyebrow">Something Good in Your Glass</p>
          <h2>Cocktails, Mocktails &amp; Craft Beer</h2>
          <ul className="reasons">
            <li>
              <h3>Crafted Beers</h3>
              <p>
                Eight crafted beers and ciders, made for easy afternoons and
                lively evenings.
              </p>
            </li>
            <li>
              <h3>Signature Cocktails</h3>
              <p>
                Stories Signature Cocktails, with personality and a Stories touch,
                poured at the rooftop bar.
              </p>
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

      <section>
        <div className="wrap">
          <p className="eyebrow">Before You Order</p>
          <h2>
            Lunch, Dinner &amp;
            <br />
            Everything Between
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
