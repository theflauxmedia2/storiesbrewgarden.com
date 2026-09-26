import { Fraunces, Montserrat } from "next/font/google";

// Display / headline face. The brand guide specifies Qaftan (a high-contrast
// display serif) — it is not on Google Fonts and no file was supplied, so
// Fraunces stands in: a variable high-contrast serif with the same character.
// styles.css drives its SOFT / WONK axes via `font-variation-settings`.
// TODO: swap in Qaftan once the font files are provided.
export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-display",
});

// Body / UI face — from the brand guide.
export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
