import type { Metadata } from "next";
import { RESERVEGO_URL } from "@/lib/site";

const TITLE = "Gallery: Rooftop, Food & Craft Beer | Stories Brew Garden Yelahanka";
const DESCRIPTION =
  "Photos of the rooftop, the food, the crafted beers, the ambience, the kids' play area and the private dining space at Stories Brew Garden, Yelahanka.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/gallery",
  },
};

const SETS = [
  {
    label: "Rooftop",
    src: "/photos/rooftop-city-view.webp",
    alt: "Rooftop seating at Stories Brew Garden, Yelahanka, with the North Bengaluru skyline behind",
  },
  {
    label: "Date Nights",
    src: "/photos/rooftop-dusk-sky.webp",
    alt: "A rooftop table for a date night against a dusk sky",
  },
  {
    label: "Food",
    src: "/photos/rooftop-dining-wide.webp",
    alt: "Rooftop dining tables at Stories Brew Garden",
  },
  {
    label: "Crafted Beers",
    src: "/photos/bar-counter.webp",
    alt: "The craft beer bar counter with seating",
  },
  {
    label: "Drinks",
    src: "/photos/bar-interior.webp",
    alt: "The cocktail bar area with pendant lighting",
  },
  {
    label: "Ambience",
    src: "/photos/ambience-lights.webp",
    alt: "Woven pendant lights over a mural in the restaurant",
  },
  {
    label: "Events",
    src: "/photos/private-dining.webp",
    alt: "The private dining room, used for parties and corporate dinners",
  },
  {
    label: "Celebrations",
    src: "/photos/kids-play.webp",
    alt: "The kids' play area with a ball pit and jungle mural",
  },
  {
    label: "Guest Moments",
    src: "/photos/rooftop-terrace-dusk.webp",
    alt: "High tables on the rooftop terrace at dusk",
  },
];

export default function GalleryPage() {
  return (
    <main id="main">
      <div className="hero">
        <div className="sun" aria-hidden="true" />
        <div className="wrap">
          <h1 className="eyebrow rise">Gallery: Stories Brew Garden, Yelahanka</h1>
          <p className="display rise">
            A Glimpse
            <br />
            of Stories
          </p>
          <p className="lede rise">
            Get a glimpse of the experience before you arrive.
          </p>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div style={{ marginBottom: "8px" }}>
            <span className="tbc">
              An interim set. The full gallery follows once the space is shot.
            </span>
          </div>
          <div className="gal">
            {SETS.map((s) => (
              <div className="shot sq" key={s.label}>
                <img
                  src={s.src}
                  width={680}
                  height={453}
                  loading="lazy"
                  decoding="async"
                  alt={s.alt}
                />
                <span>{s.label}</span>
              </div>
            ))}
          </div>
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
