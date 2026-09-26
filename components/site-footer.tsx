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
  WHATSAPP_URL,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="dark">
      <div className="wrap">
        <div className="foot">
          <div>
            <Link
              className="mark"
              href="/"
              aria-label="Stories Brew Garden, home"
            >
              <img
                className="mark-logo"
                src="/logo.png"
                width={556}
                height={378}
                alt="Stories Brew Garden"
              />
            </Link>
            <p>
              A rooftop brew garden in North Bengaluru, from the house of
              Stories: Stories Brewery &amp; Kitchen, Stories Bar &amp; Kitchen,
              Macaw by Stories, MOAI, Fernway by Stories and Stories Lounge.
            </p>
            <p className="foot-call">
              Reservations &amp; enquiries:{" "}
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            </p>
            <address className="foot-addr">
              {ADDRESS_LINES.map((line) => (
                <span key={line}>{line}</span>
              ))}
              <span>
                {HOURS_DISPLAY} · {HOURS_NOTE}
              </span>
              <a href={MAPS_URL} target="_blank" rel="noopener">
                Get Directions
              </a>
            </address>
          </div>
          <div>
            <h4>Visit</h4>
            <ul>
              <li>
                <Link href="/contact">Address &amp; Directions</Link>
              </li>
              <li>
                <Link href="/contact#hours">Opening Hours</Link>
              </li>
              <li>
                <a href={RESERVEGO_URL} target="_blank" rel="noopener">
                  Book a Table
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_TEL}`}>{`Call ${PHONE_DISPLAY}`}</a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener">
                  Message on WhatsApp
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener">
                  Instagram
                </a>
              </li>
              <li>
                <Link href="/events-and-celebrations#celebrations">
                  Plan a Celebration
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li>
                <Link href="/food-and-drinks">Food &amp; Drinks</Link>
              </li>
              <li>
                <Link href="/crafted-beers">Crafted Beers</Link>
              </li>
              <li>
                <Link href="/rooftop-experience">The Rooftop</Link>
              </li>
              <li>
                <Link href="/our-story">Our Story</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-btm">
          <span>Stories Brew Garden, Bengaluru</span>
          <span>
            Come for the Flavours. Discover Your Pour. Stay for the Story.
          </span>
        </div>
      </div>
    </footer>
  );
}
