import type { Metadata } from "next";
import { WhatsAppForm } from "@/components/whatsapp-form";
import {
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from "@/lib/site";

const DESCRIPTION =
  "Live music, acoustic evenings and sports screenings, plus private dining, banquet spaces and celebration packages for birthdays, anniversaries and corporate gatherings.";

export const metadata: Metadata = {
  title: "Events & Celebrations | Stories Brew Garden, Yelahanka",
  description: DESCRIPTION,
  alternates: { canonical: "/events-and-celebrations" },
  openGraph: {
    title: "Events & Celebrations | Stories Brew Garden, Yelahanka",
    description: DESCRIPTION,
    url: "/events-and-celebrations",
  },
};

export default function EventsAndCelebrationsPage() {
  return (
    <main id="main">
      <div className="hero">
        <div className="sun" aria-hidden="true" />
        <div className="wrap">
          <p className="eyebrow rise">Events &amp; Celebrations</p>
          <h1 className="rise">
            There&apos;s Always
            <br />
            Another Story
          </h1>
          <p className="lede rise">
            Stories Brew Garden brings together food, drinks and entertainment
            with a calendar of experiences designed to give you another reason to
            visit.
          </p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <p className="eyebrow">Events &amp; Experiences</p>
          <h2>Live on the Roof</h2>
          <ul className="reasons">
            <li>
              <h3>Live Music</h3>
              <p>Regular nights on the rooftop, with the city as the backdrop.</p>
            </li>
            <li>
              <h3>Acoustic Evenings</h3>
              <p>
                Quieter sets for the kind of night that wants a conversation in
                it.
              </p>
            </li>
            <li>
              <h3>Jamming Sessions</h3>
              <p>Open, loose and worth staying late for.</p>
            </li>
            <li>
              <h3>Themed Experiences</h3>
              <p>One-off nights and formats through the year.</p>
            </li>
            <li>
              <h3>Sports Screenings</h3>
              <p>The big matches, on the roof, with a full board of pours.</p>
            </li>
            <li>
              <h3>Seasonal Celebrations</h3>
              <p>The moments on the calendar worth marking together.</p>
            </li>
          </ul>
          <p style={{ marginTop: "8px" }}>
            Follow along for what&apos;s coming up.
          </p>
          <div className="btn-row">
            <a href={INSTAGRAM_URL} className="btn" target="_blank" rel="noopener">
              Follow Us on Instagram
            </a>
          </div>
          <p style={{ marginTop: "22px", fontSize: "14.5px", color: "var(--stone)" }}>
            Event schedules, artists, timings and experiences may vary.
          </p>
        </div>
      </section>

      <section className="band-dark dark" id="celebrations">
        <div className="wrap">
          <div className="two">
            <div>
              <p className="eyebrow">Celebrations &amp; Party Packages</p>
              <h2>
                Your People.
                <br />
                Your Occasion.
                <br />
                Your Story.
              </h2>
              <p className="lede">
                Birthdays, anniversaries, reunions and milestone moments deserve
                more than an ordinary table. Explore celebration and party
                packages designed around your group, occasion and requirements.
              </p>
              <p>
                Stories Brew Garden offers flexible spaces designed to make every
                occasion feel special, from intimate private dining and banquet
                spaces to larger group celebrations, with thoughtfully planned
                seating, food and beverage options and customisable packages to
                suit your requirements.
              </p>
              <p>
                For celebrations with little ones, our dedicated kids&apos; play
                area gives them their own space to play and have fun while you
                enjoy the occasion with your guests. Whether it&apos;s a
                close-knit gathering or a full-scale celebration, our team can
                help bring together the right space, menu and experience.
              </p>
            </div>
            <div className="shot tall">
              <img
                src="/photos/private-dining.webp"
                width={680}
                height={453}
                loading="lazy"
                decoding="async"
                alt="The private dining room with a long table and painted arched niches"
              />
            </div>
          </div>

          <div style={{ marginTop: "52px" }} id="enquiry">
            <h3 style={{ fontSize: "24px" }}>Tell Us What You&apos;re Celebrating</h3>
            <p className="lede" style={{ marginTop: "14px", marginBottom: "8px" }}>
              Fill in a few details and we&apos;ll pick it up on WhatsApp:
              packages, availability and arrangements, planned around your group.
            </p>
            <WhatsAppForm
              waNumber={WHATSAPP_NUMBER}
              messageTitle="Celebration enquiry, Stories Brew Garden"
              submitLabel="Send Celebration Enquiry"
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "mobile", label: "Mobile number", type: "tel", required: true },
                { name: "email", label: "Email", type: "email" },
                { name: "occasion", label: "Occasion / event type", required: true },
                { name: "date", label: "Preferred date", type: "date" },
                { name: "time", label: "Preferred time", type: "time" },
                { name: "guests", label: "Expected number of guests", type: "number" },
                { name: "fnb", label: "Food & beverage requirements", type: "textarea" },
                { name: "notes", label: "Special requirements / message", type: "textarea" },
              ]}
            />
            <p className="wa-alt">
              Prefer to talk? Call{" "}
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a> or{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener">
                message us on WhatsApp
              </a>
              .
            </p>
            {/* TODO: real capacities, package tiers and price ranges once confirmed. */}
          </div>
        </div>
      </section>
    </main>
  );
}
