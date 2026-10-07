import type { Metadata } from "next";
import Link from "next/link";
import { HoursStrip } from "@/components/hours-strip";
import { Faq, type FaqItem } from "@/components/faq";
import { RESERVEGO_URL } from "@/lib/site";

const TITLE = "Rooftop Dining & Bar in Yelahanka | Stories Brew Garden";
const DESCRIPTION =
  "Open-air rooftop restaurant and bar in Yelahanka, North Bengaluru: lunch in the sun, sunset dining and sundowners, romantic date nights and late dinners until 1 am.";

const FAQS: FaqItem[] = [
  {
    q: "Is the Rooftop Open-Air?",
    a: "Yes. Stories Brew Garden is an open-air rooftop restaurant and bar in Yelahanka, with outdoor seating under the sky and views across North Bengaluru.",
  },
  {
    q: "When Is the Best Time for Sundowners?",
    a: "Golden hour, just before sunset, when the light turns gold across the whole roof. It is the busiest hour of the day, so book ahead for a sunset table.",
  },
  {
    q: "How Late Is the Rooftop Open?",
    a: "From 12 noon to 1 am, every day. Late evenings bring music, a full room and dinner under the sky.",
  },
  {
    q: "Is It Good for a Date Night?",
    a: "Yes. A table for two on the rooftop, cocktails at golden hour and dinner under the open sky make it a romantic spot for date nights and anniversary dinners in Yelahanka.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/rooftop-experience" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/rooftop-experience",
  },
};

export default function RooftopExperiencePage() {
  return (
    <main id="main">
      <div className="hero">
        <div className="sun" aria-hidden="true" />
        <div className="wrap">
          <h1 className="eyebrow rise">
            Rooftop Experience: Rooftop Dining in Yelahanka
          </h1>
          <p className="display rise">
            Above the
            <br />
            Ordinary
          </p>
          <p className="lede rise">
            Take your plans a notch higher, in latitude and experience. Open
            skies, comfortable outdoor seating, global flavours, crafted pours
            and an easy-going atmosphere that moves naturally from sunny
            afternoons and golden-hour sundowners to lively late nights.
          </p>
          <div className="btn-row rise">
            <a className="btn" href={RESERVEGO_URL} target="_blank" rel="noopener">
              Book a Table
            </a>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <p className="eyebrow">The Rooftop, Hour by Hour</p>
          <h2>
            One Roof,
            <br />
            Five Different Places
          </h2>
          <p className="lede">
            Come for a casual lunch, plan a sunset dinner, gather the office
            crew, or simply claim a table and watch Yelahanka slow down around
            you. Open-air dining from noon until 1 am, every day.
          </p>
          <HoursStrip />
        </div>
      </section>

      <section className="band-dusk evening">
        <div className="wrap">
          <div className="two">
            <div>
              <p className="eyebrow">Date Nights &amp; Romantic Dinners</p>
              <h2>
                Table for Two,
                <br />
                Rooftop Under
                <br />
                the Open Skies
              </h2>
              <p className="lede">
                Golden-hour skies, cocktails on the table, dinner under the open
                sky, and enough time for the conversation to go wherever it
                wants. Make your next date night in Yelahanka a rooftop story.
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
              </div>
            </div>
            <div className="shot tall">
              <img
                src="/photos/rooftop-dusk-sky.webp"
                width={382}
                height={510}
                loading="lazy"
                decoding="async"
                alt="A table for two on the rooftop at Stories Brew Garden against a dusk sky"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="two">
            <div>
              <p className="eyebrow">Corporate &amp; Group Gatherings</p>
              <h2>
                Beyond the
                <br />
                Boardroom
              </h2>
              <p className="lede">
                From team lunches, team dinners and corporate parties to milestone
                celebrations and informal networking evenings, everyone together
                over food, drinks and a rooftop that feels nothing like another
                meeting.
              </p>
              <div className="btn-row">
                <Link
                  className="btn line"
                  href="/events-and-celebrations#corporate"
                >
                  Plan a Corporate Event
                </Link>
              </div>
            </div>
            <div className="shot wide">
              <img
                src="/photos/rooftop-city-view.webp"
                width={680}
                height={453}
                loading="lazy"
                decoding="async"
                alt="Rooftop seating along the edge with the North Bengaluru skyline behind"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="band-paper">
        <div className="wrap">
          <p className="eyebrow">Planning Your Visit</p>
          <h2>
            Up on the Roof,
            <br />
            Good to Know
          </h2>
          <Faq items={FAQS} />
          <div className="btn-row">
            <a className="btn" href={RESERVEGO_URL} target="_blank" rel="noopener">
              Book a Rooftop Table
            </a>
          </div>
        </div>
      </section>

      <section className="band-dark dark">
        <div className="wrap">
          <h2 className="pull">
            Come Up for the Flavours. Stay for the Atmosphere. Leave With Another
            Story.
          </h2>
        </div>
      </section>
    </main>
  );
}
