import type { Metadata } from "next";
import Link from "next/link";
import { HoursStrip } from "@/components/hours-strip";
import { PourList } from "@/components/pour-list";
import { Faq, type FaqItem } from "@/components/faq";
import { RESERVEGO_URL } from "@/lib/site";

const TITLE =
  "Stories Brew Garden | Rooftop Restaurant & Bar in Yelahanka, Bengaluru";
const DESCRIPTION =
  "Rooftop restaurant, bar and brew garden in Yelahanka, North Bengaluru, with craft beer, multicuisine food, cocktails, open-air dining, a kids' play area and pet-friendly seating.";

const FAQS: FaqItem[] = [
  {
    q: "Where Is Stories Brew Garden in Yelahanka?",
    a: "On the 4th floor of Chandre Gowda Arcade, next to Vajram Tiara Road, Avalahalli, Yelahanka, in North Bengaluru (560119). It is a rooftop restaurant and bar, open every day from 12 noon to 1 am.",
  },
  {
    q: "What Kind of Restaurant Is Stories Brew Garden?",
    a: "A rooftop brew garden: an open-air bar and multicuisine restaurant with eight crafted beers and ciders, signature cocktails, and a kitchen that covers North Indian, regional Indian, Asian, continental and global food.",
  },
  {
    q: "Is It a Good Family Restaurant?",
    a: "Yes. There is a dedicated kids' play area, pet-friendly seating and a menu built for sharing, which makes it an easy pick for family lunches, weekend dinners and get-togethers with friends.",
  },
  {
    q: "Can I Celebrate a Birthday or Host a Corporate Party Here?",
    a: "Yes. There is a private dining space for smaller groups and room on the rooftop for larger parties, from birthdays and anniversaries to team lunches, team outings and office celebrations.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
  },
};

export default function HomePage() {
  return (
    <main id="main">
      <div className="hero hero--home">
        <div className="sun" aria-hidden="true" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1 className="eyebrow rise">
              Rooftop Restaurant &amp; Bar in Yelahanka, Bengaluru
            </h1>
            <p className="display rise">
              Crafted Beers.
              <br />
              Global Flavours.
              <br />
              Rooftop Stories.
            </p>
            <p className="lede rise">
              Stories finally arrives in Yelahanka, bringing crafted pours, a
              globally inspired multicuisine kitchen, open-air rooftop dining and
              an atmosphere made for everything from sundowners to celebrations.
            </p>
            <div className="btn-row rise">
              <a
                className="btn"
                href={RESERVEGO_URL}
                target="_blank"
                rel="noopener"
              >
                Book a Table
              </a>
              <Link className="btn line" href="/food-and-drinks">
                Explore the Menu
              </Link>
            </div>
          </div>
          <div className="hero-media">
            <img
              src="/photos/rooftop-dining-evening.webp"
              width={680}
              height={453}
              fetchPriority="high"
              decoding="async"
              alt="Rooftop dining tables at Stories Brew Garden, Yelahanka, lit for the evening"
            />
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="two wide-left">
            <div>
              <p className="eyebrow">The Story Continues, Now in Yelahanka</p>
              <h2>
                A New Address.
                <br />
                The Same Love for
                <br />
                Creating Stories.
              </h2>
              <p className="lede">
                Stories began with a vision to create spaces that offered more
                than a place to dine, shaped by distinctive ambience, memorable
                food and drinks, and the simple joy of bringing people together.
              </p>
              <p>
                Over the years, that philosophy has grown into a wider family of
                hospitality concepts: Stories Brewery, Stories Bar &amp; Kitchen,
                Macaw by Stories, MOAI, Fernway by Stories and Stories Lounge,
                with experiences across Bengaluru, Chennai and Dubai.
              </p>
              <p>
                Now the next chapter begins in Avalahalli, Yelahanka. Stories
                Brew Garden brings the Stories philosophy to North Bengaluru in a
                new form: a rooftop brew garden, bar and restaurant built around
                signature crafted beers, global cuisine, curated cocktails, open
                skies, live music and moments meant to be shared.
              </p>
              <div className="btn-row">
                <Link className="btn line" href="/our-story">
                  Read Our Story
                </Link>
              </div>
            </div>
            <div className="shot tall">
              <img
                src="/photos/lounge.webp"
                width={680}
                height={453}
                loading="lazy"
                decoding="async"
                alt="The lounge seating area with upholstered chairs and cane columns"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="band-paper">
        <div className="wrap">
          <p className="eyebrow">A Rooftop Made for Good Times</p>
          <h2>Everything That Makes Stepping Out Worth It</h2>
          <p className="lede">
            Freshly crafted pours, a diverse kitchen serving global flavours and
            regional favourites, signature cocktails, open-air rooftop seating
            and an atmosphere that changes beautifully from day to night.
          </p>
          <p>
            Whether it&apos;s a family lunch, a weekend dinner, a catch-up with
            friends, an after-work team dinner, a celebration or simply a reason
            to get out, Stories Brew Garden gives you the space to settle in and
            enjoy. When the sun begins to set, the rooftop becomes one of
            Yelahanka&apos;s perfect settings for date nights, sundowners and
            conversations that deserve a little more time. With a dedicated
            kids&apos; play area, pet-friendly seating and a private celebration
            space for small gatherings, there&apos;s something for every age and
            every occasion.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">The Rooftop, Hour by Hour</p>
          <h2>
            Every Hour Brings a
            <br />
            Different Side of the Roof
          </h2>
          <HoursStrip />
          <div className="btn-row">
            <Link className="btn line" href="/rooftop-experience">
              Explore the Rooftop
            </Link>
          </div>
        </div>
      </section>

      <section className="band-dark dark">
        <div className="wrap">
          <div className="two">
            <div>
              <p className="eyebrow">Craft Beer in Yelahanka</p>
              <h2>Find Your Pour</h2>
              <p className="lede">
                Eight crafted beers and ciders, from a hoppy Wheat IPA and a
                classic Hefeweizen to a crisp Kölsch and Belgian witbier, made to
                pair effortlessly with the table. Good beer deserves good food and
                good company.
              </p>
            </div>
            <div className="shot tall">
              <img
                src="/photos/bar-counter.webp"
                width={680}
                height={453}
                loading="lazy"
                decoding="async"
                alt="The craft beer bar counter at Stories Brew Garden, Yelahanka"
              />
            </div>
          </div>
          <PourList />
          <div className="btn-row">
            <Link className="btn" href="/crafted-beers">
              Explore Crafted Beers
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">Why Stories Brew Garden</p>
          <h2>
            One Rooftop, Many
            <br />
            Reasons to Come Back
          </h2>
          <ul className="reasons">
            <li>
              <h3>A Kitchen That Travels</h3>
              <p>
                From North Indian classics and regional Indian favourites to Asian
                plates, continental comfort food and dishes designed for sharing.
              </p>
            </li>
            <li>
              <h3>Crafted Beers for Every Mood</h3>
              <p>
                From refreshing daytime pours to rich, full-bodied favourites for
                relaxed evenings.
              </p>
            </li>
            <li>
              <h3>Open-Air, Open Sky</h3>
              <p>
                Made for golden-hour sundowners, breezy evenings and date nights
                under the sky.
              </p>
            </li>
            <li>
              <h3>Live Music &amp; Late Nights</h3>
              <p>
                Live music, acoustic evenings and lively nights on the roof, open
                until 1 am, for when you want the night to come alive.
              </p>
            </li>
            <li>
              <h3>Room for the Occasion</h3>
              <p>
                A welcoming destination for family lunches, birthday parties,
                anniversary dinners, corporate parties, team outings and larger
                group celebrations.
              </p>
            </li>
            <li>
              <h3>Pet-Friendly</h3>
              <p>
                A pet-friendly restaurant in Yelahanka, for plans that include
                your four-legged companion.
              </p>
            </li>
            <li>
              <h3>A Dedicated Kids&apos; Play Area</h3>
              <p>
                A family restaurant with its own kids&apos; play area, so outings
                have something for everyone, not just the adults.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="band-paper">
        <div className="wrap">
          <div className="two">
            <div>
              <p className="eyebrow">The Flavours of Stories</p>
              <h2>
                A World of Flavours,
                <br />
                Made for Your Table
              </h2>
              <p className="lede">
                Our menu is created for the way people actually enjoy going out:
                ordering a little more, sharing a little more and staying a
                little longer.
              </p>
              <p>
                Explore global cuisine alongside North Indian classics, regional
                Indian favourites, Asian-inspired plates, continental comfort food,
                sharing plates, hearty mains and indulgent desserts. Pair your
                food with popular home-brewed craft beers from the collection of
                Stories Brewery &amp; Kitchen in BTM, Bengaluru, Stories
                Signature Cocktails, spirits, mocktails and refreshing beverages.
              </p>
              <div className="btn-row">
                <Link className="btn line" href="/food-and-drinks">
                  View the Menu
                </Link>
              </div>
            </div>
            <div className="shot sq">
              <img
                src="/photos/ambience-lights.webp"
                width={680}
                height={453}
                loading="lazy"
                decoding="async"
                alt="Woven pendant lights over a mural and bougainvillea in the restaurant at Stories Brew Garden"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="band-dusk evening">
        <div className="wrap">
          <div className="two">
            <div>
              <p className="eyebrow">Date Nights in Yelahanka</p>
              <h2>
                Table for Two,
                <br />
                Under Open Skies
              </h2>
              <p className="lede">
                Golden-hour skies, cocktails on the table, dinner under the open
                sky, and enough time for the conversation to go wherever it
                wants.
              </p>
              <div className="btn-row">
                <a
                  className="btn"
                  href={RESERVEGO_URL}
                  target="_blank"
                  rel="noopener"
                >
                  Book Your Date Night
                </a>
                <Link className="btn line" href="/events-and-celebrations">
                  Plan a Celebration
                </Link>
              </div>
            </div>
            <div className="shot tall">
              <img
                src="/photos/rooftop-dusk-sky.webp"
                width={382}
                height={510}
                loading="lazy"
                decoding="async"
                alt="The open-air rooftop at Stories Brew Garden under a deep dusk sky"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="band-paper">
        <div className="wrap">
          <p className="eyebrow">Good to Know</p>
          <h2>
            Stories Brew Garden,
            <br />
            Yelahanka
          </h2>
          <Faq items={FAQS} />
          <div className="btn-row">
            <Link className="btn line" href="/contact">
              Location, Hours &amp; Table Booking
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">Your Next Story Starts Up Here</p>
          <h2 className="pull">
            Global Flavours on the Table. A Crafted Pour in Your Glass. Open
            Skies Above You. Your Favourite People Beside You.
          </h2>
          <p className="lede" style={{ marginTop: "24px" }}>
            And Yelahanka&apos;s newest rooftop restaurant, waiting to become
            part of your story. Stories Brew Garden, Yelahanka.
          </p>
          <div className="btn-row">
            <a className="btn" href={RESERVEGO_URL} target="_blank" rel="noopener">
              Book a Table
            </a>
            <Link className="btn line" href="/food-and-drinks">
              Explore the Menu
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
