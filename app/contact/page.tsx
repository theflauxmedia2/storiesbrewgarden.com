import type { Metadata } from "next";
import Link from "next/link";
import {
  ADDRESS_LINES,
  HOURS_DISPLAY,
  HOURS_NOTE,
  INSTAGRAM_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  RESERVEGO_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/site";

const FAQS: { q: string; a: string }[] = [
  {
    q: "Do You Take Reservations?",
    a: "Yes. You can book a table through our booking system at any time, and larger groups are best arranged with the outlet team directly.",
  },
  {
    q: "Is the Rooftop Pet-Friendly?",
    a: "Yes. Stories Brew Garden has pet-friendly spaces, for plans that include your four-legged companion.",
  },
  {
    q: "Is There Anything for Children?",
    a: "Yes. A dedicated kids' play area, so family lunches and celebrations have something in them for every age.",
  },
  {
    q: "Can I Book the Space for a Celebration?",
    a: "Yes. There are private dining and banquet spaces for intimate gatherings, and arrangements for larger group celebrations.",
  },
  {
    q: "Do You Have Live Music?",
    a: "Yes. Live music, acoustic evenings, jamming sessions, themed nights and sports screenings run through the calendar.",
  },
  {
    q: "Where Exactly Are You?",
    a: "4th Floor, Chandre Gowda Arcade, next to Vajram Tiara Road, Avalahalli, Yelahanka, Bengaluru 560119.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const DESCRIPTION =
  "Find Stories Brew Garden in Yelahanka, Bengaluru. Book a table, check opening hours, or speak to the team about a celebration.";

export const metadata: Metadata = {
  title: "Contact & Book a Table | Stories Brew Garden, Yelahanka",
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact & Book a Table | Stories Brew Garden, Yelahanka",
    description: DESCRIPTION,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main id="main">
      <div className="hero">
        <div className="sun" aria-hidden="true" />
        <div className="wrap">
          <p className="eyebrow rise">Contact Us</p>
          <h1 className="rise">
            Come Find
            <br />
            Your Story
          </h1>
          <p className="lede rise">
            Whether you&apos;re planning a rooftop evening, a date, a celebration,
            a family outing or simply looking for your next place to unwind,
            we&apos;d love to have you.
          </p>
          <div className="btn-row rise">
            <a className="btn" href={RESERVEGO_URL} target="_blank" rel="noopener">
              Book a Table
            </a>
          </div>
        </div>
      </div>

      <section id="hours">
        <div className="wrap">
          <div className="two">
            <div>
              <p className="eyebrow">Stories Brew Garden</p>
              <h2>Where to Find Us</h2>
              <dl className="facts">
                <div>
                  <dt>Address</dt>
                  <dd>
                    {ADDRESS_LINES.map((line, i) => (
                      <span key={line}>
                        {line}
                        {i < ADDRESS_LINES.length - 1 && <br />}
                      </span>
                    ))}
                    <br />
                    <a href={MAPS_URL} target="_blank" rel="noopener">
                      Get directions
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Landmark</dt>
                  <dd>Next to Vajram Tiara Road, Avalahalli</dd>
                </div>
                <div>
                  <dt>Hours</dt>
                  <dd>
                    {HOURS_DISPLAY}
                    <br />
                    <span style={{ color: "var(--stone)" }}>{HOURS_NOTE}</span>
                  </dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd>
                    <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
                  </dd>
                </div>
                <div>
                  <dt>WhatsApp</dt>
                  <dd>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener">
                      {WHATSAPP_DISPLAY}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Instagram</dt>
                  <dd>
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener">
                      @storiesbrewgarden.yelahanka
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <span className="tbc">To be confirmed</span>
                  </dd>
                </div>
              </dl>
              {/* TODO: geo coordinates (5+ dp) for the schema + map pin; kitchen last-order time; WhatsApp; email. */}
            </div>
            <div className="shot tall">
              <img
                src="/photos/rooftop-courtyard-night.webp"
                width={680}
                height={510}
                loading="lazy"
                decoding="async"
                alt="The rooftop courtyard with cabana seating and planters, lit at night"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="band-dark dark" id="book">
        <div className="wrap">
          <div className="two">
            <div>
              <p className="eyebrow">Book a Table</p>
              <h2>
                Ready to Reserve
                <br />
                Your Table?
              </h2>
              <p className="lede">
                Choose your preferred date, time and number of guests, and
                we&apos;ll save you a place for your next story.
              </p>
              <div className="btn-row">
                <a
                  className="btn"
                  href={RESERVEGO_URL}
                  target="_blank"
                  rel="noopener"
                >
                  Book a Table
                </a>
                <a className="btn line" href={`tel:${PHONE_TEL}`}>
                  {`Call ${PHONE_DISPLAY}`}
                </a>
              </div>
            </div>

            <div id="enquiry">
            <p className="eyebrow">Celebrating Something?</p>
            <h3 style={{ fontSize: "24px" }}>
              Birthdays, Anniversaries, Corporate Gatherings, Team Outings and
              Larger Groups May Need a Little More Planning
            </h3>
            <p>
              Speak directly with our team to check available celebration
              packages, group arrangements and event options.
            </p>
            <div
              style={{
                marginTop: "22px",
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <Link className="btn" href="/events-and-celebrations#enquiry">
                Plan Your Celebration
              </Link>
              <a className="btn line" href={`tel:${PHONE_TEL}`}>
                {`Call ${PHONE_DISPLAY}`}
              </a>
              <a
                className="btn line"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
              >
                WhatsApp Us
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">Before You Come</p>
          <h2>
            Questions We
            <br />
            Get Asked
          </h2>
          <div className="faq">
            {FAQS.map((f) => (
              <div key={f.q}>
                <h3>{f.q}</h3>
                <p>
                  {f.a}
                  {f.q === "Where Exactly Are You?" && (
                    <>
                      {" "}
                      <a href={MAPS_URL} target="_blank" rel="noopener">
                        Open in Maps
                      </a>
                      .
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}
