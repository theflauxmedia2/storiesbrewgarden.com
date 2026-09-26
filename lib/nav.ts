export type NavItem = { href: string; label: string; short?: string };

export const NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/food-and-drinks", label: "Food & Drinks", short: "Food & Drinks" },
  { href: "/crafted-beers", label: "Crafted Beers" },
  {
    href: "/rooftop-experience",
    label: "Rooftop Experience",
    short: "Rooftop",
  },
  {
    href: "/events-and-celebrations",
    label: "Events & Celebrations",
    short: "Events",
  },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us", short: "Contact" },
];
