import type { Metadata } from "next";
import { WhatsAppForm } from "@/components/whatsapp-form";
import { Faq, type FaqItem } from "@/components/faq";
import {
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from "@/lib/site";

const TITLE = "Birthday & Corporate Party Venue in Yelahanka | Stories Brew Garden";
const DESCRIPTION =
  "Rooftop party venue in Yelahanka for birthdays, anniversaries, corporate parties, team outings and private dining, with live music and sports screenings.";

// Capacities and package pricing are still pending from the client, so no
// answer here quotes numbers.
const FAQS: FaqItem[] = [
  {
    q: "Can I Host a Birthday Party at Stories Brew Garden?",
    a: "Yes. Birthday dinners, rooftop birthday parties and family celebrations can be planned in the private dining space or on the rooftop, with celebration packages built around your group.",
  },
  {
    q: "Do You Have a Private Dining Space?",
    a: "Yes. There is a private dining room for intimate gatherings and small parties, and arrangements on the rooftop for larger groups.",
  },
  {
    q: "Can We Book a Corporate Team Lunch or Dinner?",
    a: "Yes. Team lunches, team dinners, office parties and team outings are planned with the outlet team. Send a corporate enquiry with your date and group size.",
  },
  {
    q: "Is It Suitable for Family Celebrations With Kids?",
    a: "Yes. The dedicated kids' play area gives children their own space during birthdays, anniversaries and family get-togethers.",
  },
  {
    q: "Do You Have Live Music?",
    a: "Yes. Live music, acoustic evenings, jamming sessions and sports screenings run on the rooftop. Follow @storiesbrewgarden.yelahanka on Instagram for what is coming up.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/events-and-celebrations" },
  openGraph: {
    title: TITLE,
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
          <h1 className="eyebrow rise">
            Events &amp; Celebrations: Party Venue in Yelahanka
          </h1>
          <p className="display rise">
            There&apos;s Always
            <br />
            Another Story
          </p>
          <p className="lede rise">
            Stories Brew Garden brings together food, drinks and entertainment
            with a calendar of experiences designed to give you another reason to
            visit, and a rooftop event venue for birthdays, anniversaries,
            corporate parties and team outings.
          </p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <p className="eyebrow">Live Music in Yelahanka</p>
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

      <section id="corporate">
        <div className="wrap">
          <p className="eyebrow">Corporate Events &amp; Team Outings</p>
          <h2>
            Corporate Parties &amp; Team
            <br />
            Outings in Yelahanka
          </h2>
          <p className="lede">
            For companies across Yelahanka and North Bengaluru, a rooftop that
            feels nothing like the office: food, drinks and open sky for the
            whole team.
          </p>
          <p>
            Whether it&apos;s a team lunch, a team dinner, an office party or a
            full company celebration, our team plans the space, the menu and the
            pours around your group size and schedule. Smaller teams can take the
            private dining room; larger groups can gather on the rooftop.
          </p>
          <ul className="reasons">
            <li>
              <h3>Team Lunches</h3>
              <p>A midday break that the whole team actually looks forward to.</p>
            </li>
            <li>
              <h3>Team Dinners</h3>
              <p>Dinner under the sky to close a quarter, a launch or a long week.</p>
            </li>
            <li>
              <h3>Office Parties</h3>
              <p>Annual parties, festive celebrations and milestones, on the roof.</p>
            </li>
            <li>
              <h3>Team Outings</h3>
              <p>A relaxed offsite with crafted beers, global food and room to talk.</p>
            </li>
            <li>
              <h3>Client &amp; Networking Evenings</h3>
              <p>Informal evenings that leave a better impression than a meeting room.</p>
            </li>
            <li>
              <h3>Farewells &amp; Welcomes</h3>
              <p>The send-offs and first days worth marking together.</p>
            </li>
          </ul>
          <div className="btn-row">
            <a className="btn" href="#enquiry">
              Send a Corporate Enquiry
            </a>
            <a className="btn line" href={`tel:${PHONE_TEL}`}>
              {`Call ${PHONE_DISPLAY}`}
            </a>
          </div>
        </div>
      </section>

      <section className="band-dark dark" id="celebrations">
        <div className="wrap">
          <div className="two">
            <div>
              <p className="eyebrow">Birthday &amp; Anniversary Celebrations</p>
              <h2>
                Your People.
                <br />
                Your Occasion.
                <br />
                Your Story.
              </h2>
              <p className="lede">
                Birthday parties, anniversary dinners, reunions, family
                get-togethers and milestone moments deserve more than an ordinary
                table. Explore celebration and party packages designed around your
                group, occasion and requirements.
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
                alt="The private dining room for parties and celebrations at Stories Brew Garden, Yelahanka"
              />
            </div>
          </div>

          <div style={{ marginTop: "52px" }} id="enquiry">
            <h3 style={{ fontSize: "24px" }}>
              Tell Us What You&apos;re Celebrating or Planning
            </h3>
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

      <section>
        <div className="wrap">
          <p className="eyebrow">Before You Plan</p>
          <h2>
            Parties &amp; Events,
            <br />
            Answered
          </h2>
          <Faq items={FAQS} />
        </div>
      </section>
    </main>
  );
}
