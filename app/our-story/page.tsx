import type { Metadata } from "next";

const DESCRIPTION =
  "From the house of Stories: Stories Brewery & Kitchen, Macaw, MOAI, Fernway and Stories Lounge. Founded by Nerall Bakhai, now in Yelahanka.";

export const metadata: Metadata = {
  title: "Our Story | Stories Brew Garden, Yelahanka",
  description: DESCRIPTION,
  alternates: { canonical: "/our-story" },
  openGraph: {
    title: "Our Story | Stories Brew Garden, Yelahanka",
    description: DESCRIPTION,
    url: "/our-story",
  },
};

export default function OurStoryPage() {
  return (
    <main id="main">
      <div className="hero">
        <div className="sun" aria-hidden="true" />
        <div className="wrap">
          <p className="eyebrow rise">Our Story</p>
          <h1 className="rise">
            Every Place
            <br />
            Has a Story
          </h1>
          <p className="lede rise">
            This one unfolds through people, romantic moments and changing skies.
            Stories Brew Garden was created around a simple idea: the best
            hospitality experiences aren&apos;t defined by just what&apos;s on the
            table, but by how a place makes you feel and who you share it with.
          </p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="two wide-left">
            <div>
              <p className="eyebrow">The Story Behind Our Spaces</p>
              <h2 className="pull">
                Great Hospitality Is About Creating Destinations, Not Just
                Opening Locations.
              </h2>
              <p style={{ marginTop: "28px" }}>
                Founded by Nerall Bakhai, Stories is built on a simple belief.
                From the house of Stories Brewery &amp; Kitchen, Stories Bar &amp;
                Kitchen, Macaw by Stories, MOAI, Stories Lounge and Fernway by
                Stories, Stories Brew Garden continues a journey built around
                creating places people want to return to.
              </p>
              <p>
                What began in Bengaluru with a vision for green, experience-led
                dining spaces and globally inspired food gradually evolved into a
                family of distinctive hospitality concepts. The idea was never
                simply to build restaurants. It was to create destinations with
                personality, places where food, drinks, ambience and people
                naturally come together.
              </p>
              <p>
                Over time, that philosophy travelled into different formats,
                cities and experiences. Today, that journey finds its newest
                address in Yelahanka.
              </p>
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

      <section className="band-dark dark">
        <div className="wrap">
          <div className="two">
            <div>
              <p className="eyebrow">Stories Brew Garden</p>
              <h2>
                A Bar &amp; Kitchen Built
                <br />
                Around the Joy of Gathering
              </h2>
              <p className="lede">
                It&apos;s a place for the unplanned lunch that turns into a long
                afternoon, the after-work catch-up that becomes an evening, the
                family gathering that brings everyone around one table, the
                rooftop date that lasts past sunset, and the celebration that
                deserves a little more than the usual.
              </p>
              <p>
                With crafted beers, a globally inspired kitchen, signature
                cocktails, rooftop seating and a lively atmosphere, Stories Brew
                Garden brings together the ingredients for a good outing without
                requiring a special occasion.
              </p>
              <p style={{ fontSize: "19px", marginTop: "26px" }}>
                <em>
                  Because sometimes, the best stories are the ones you
                  didn&apos;t plan.
                </em>
              </p>
            </div>
            <div className="shot sq">
              <img
                src="/photos/rooftop-terrace-dusk.webp"
                width={680}
                height={453}
                loading="lazy"
                decoding="async"
                alt="High tables on the open rooftop terrace with the skyline behind at dusk"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
