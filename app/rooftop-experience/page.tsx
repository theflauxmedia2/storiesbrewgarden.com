import type { Metadata } from "next";
import Link from "next/link";
import { HoursStrip } from "@/components/hours-strip";
import { RESERVEGO_URL } from "@/lib/site";

const DESCRIPTION =
  "An open-air rooftop in North Bengaluru that runs from lunch in the sun through golden-hour sundowners to dinner under the sky.";

export const metadata: Metadata = {
  title: "Rooftop Experience | Stories Brew Garden, Yelahanka",
  description: DESCRIPTION,
  alternates: { canonical: "/rooftop-experience" },
  openGraph: {
    title: "Rooftop Experience | Stories Brew Garden, Yelahanka",
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
          <p className="eyebrow rise">Rooftop Experience</p>
          <h1 className="rise">
            Above the
            <br />
            Ordinary
          </h1>
          <p className="lede rise">
            Take your plans a notch higher, in latitude and experience. Open
            skies, comfortable seating, global flavours, crafted pours and an
            easy-going atmosphere that moves naturally from sunny afternoons and
            golden-hour sundowners to lively evenings.
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
            Come for a casual lunch, plan a sunset date, gather the office crew,
            or simply claim a table and watch Yelahanka slow down around you.
          </p>
          <HoursStrip />
        </div>
      </section>

      <section className="band-dusk evening">
        <div className="wrap">
          <div className="two">
            <div>
              <p className="eyebrow">Date Nights</p>
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
                wants. Make your next date a rooftop story.
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
                alt="A table on the rooftop against a dramatic dusk sky"
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
                From team dinners and corporate get-togethers to milestone
                celebrations and informal networking evenings, everyone together
                over food, drinks and a rooftop that feels nothing like another
                meeting.
              </p>
              <div className="btn-row">
                <Link
                  className="btn line"
                  href="/events-and-celebrations#celebrations"
                >
                  Plan an Out-of-Office
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
