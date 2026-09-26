import { POURS } from "@/lib/pours";

// Seasonal / rotating specials, also brewed by Stories Brewery & Kitchen (BTM).
// Names, ABV/IBU and tasting notes are the client's own — sourced from their
// supplied menu-card graphics, not previously in the site's pour data.
const SEASONAL = [
  {
    id: "smoky-german-wheat",
    img: "/photos/beers/lichtenhainer.webp",
    name: "Smoky German Wheat",
    style: "Smoked Wheat Beer",
    note: "Smoked German wheat with toasty, campfire depth.",
    abv: "5.0%",
    ibu: "6",
  },
  {
    id: "ginger-wheat",
    img: "/photos/beers/ginger-spice-wheat.webp",
    name: "Ginger Wheat",
    style: "Spiced Wheat Ale",
    note: "A classic wheat beer with a refreshing ginger kick and a spiced finish.",
    abv: "5.0%",
    ibu: "17",
  },
  {
    id: "vino-bier",
    img: "/photos/beers/vino-bier.webp",
    name: "Vino Bier",
    style: "Grape-Infused Ale",
    note: "Plush grapes blended with German malts for a velvety, wine-like finish.",
    abv: "5.0%",
    ibu: "6",
  },
  {
    id: "grapefruit-passion-wit",
    img: "/photos/beers/grapefruit-passion-wit.webp",
    name: "Grape Fruit Passion Wit",
    style: "Fruited Witbier",
    note: "A vivid witbier brightened with grapefruit and passion fruit. Tart and juicy.",
    abv: "5.5%",
    ibu: "6",
  },
  {
    id: "abbey-tripel",
    img: "/photos/beers/abbey-tripel.webp",
    name: "Abbey Tripel",
    style: "Belgian Tripel",
    note: "A strong Belgian ale with warm spice notes and a bold, rounded finish.",
    abv: "7.0%",
    ibu: "15",
  },
];

const ON_TAP = POURS.filter(
  (p): p is (typeof POURS)[number] & { img: string } => Boolean(p.img),
);

export function PourGallery() {
  return (
    <div className="flight">
      {ON_TAP.map((p) => (
        <a className="flight-card" href={`#${p.id}`} key={p.id}>
          <img src={p.img} alt="" loading="lazy" decoding="async" />
          <span className="flight-tag">On Tap</span>
          <span className="flight-label">
            {p.name}
            <em>
              {p.abv} ABV · {p.ibu} IBU
            </em>
          </span>
        </a>
      ))}
      {SEASONAL.map((p) => (
        <div className="flight-card" id={p.id} key={p.id}>
          <img src={p.img} alt="" loading="lazy" decoding="async" />
          <span className="flight-tag flight-tag-seasonal">Seasonal</span>
          <span className="flight-label">
            {p.name}
            <em>
              {p.abv} ABV · {p.ibu} IBU
            </em>
          </span>
        </div>
      ))}
    </div>
  );
}
