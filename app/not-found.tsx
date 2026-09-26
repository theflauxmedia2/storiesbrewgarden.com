import type { Metadata } from "next";
import Link from "next/link";
import { RESERVEGO_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found | Stories Brew Garden, Yelahanka",
  description:
    "The page you were looking for isn't here. Head back to Stories Brew Garden.",
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <main id="main">
      <div className="hero">
        <div className="sun" aria-hidden="true" />
        <div className="wrap">
          <p className="eyebrow rise">404, Page Not Found</p>
          <h1 className="rise">
            This Page
            <br />
            Wandered Off
          </h1>
          <p className="lede rise">
            The page you were looking for isn&apos;t here. It may have moved, or
            the link might be out of date. The rooftop hasn&apos;t gone anywhere,
            though.
          </p>
          <div className="btn-row rise">
            <Link className="btn" href="/">
              Back to Home
            </Link>
            <a className="btn line" href={RESERVEGO_URL} target="_blank" rel="noopener">
              Book a Table
            </a>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <p className="eyebrow">Find Your Way Back</p>
          <h2>Where to Next</h2>
          <ul className="reasons">
            <li>
              <h3>
                <Link href="/food-and-drinks">Food &amp; Drinks</Link>
              </h3>
              <p>A global kitchen, crafted beers, signature cocktails.</p>
            </li>
            <li>
              <h3>
                <Link href="/crafted-beers">Crafted Beers</Link>
              </h3>
              <p>Eight pours on the board.</p>
            </li>
            <li>
              <h3>
                <Link href="/rooftop-experience">Rooftop Experience</Link>
              </h3>
              <p>From lunch in the sun to late under the sky.</p>
            </li>
            <li>
              <h3>
                <Link href="/contact">Contact Us</Link>
              </h3>
              <p>Find us in Yelahanka, or book a table.</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
