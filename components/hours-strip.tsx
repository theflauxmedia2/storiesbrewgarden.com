import type { CSSProperties } from "react";

const HOURS = [
  {
    chip: "#E4E6D2",
    t: "From Noon",
    n: "Lunch in the Sun",
    d: "Long tables, a slow plate, and the kind of afternoon that was only meant to be an hour.",
  },
  {
    chip: "#EFD9A0",
    t: "Afternoon",
    n: "The Easy Stretch",
    d: "The quiet part of the day. A cold pour, the kids in the play area, the dog under the table.",
  },
  {
    chip: "#C58A3B",
    t: "Golden Hour",
    n: "Sundowners",
    d: "The reason to book ahead. The light goes gold across the whole roof and stays there a while.",
  },
  {
    chip: "#A6472E",
    t: "Evening",
    n: "Dinner Under the Sky",
    d: "Global plates, signature cocktails, and the city cooling down around you.",
  },
  {
    chip: "#8E191C",
    t: "Late",
    n: "The Night Side",
    d: "Music, a full room, and the last pour of something you'll come back for.",
  },
];

export function HoursStrip() {
  return (
    <div className="hours-strip">
      <div className="hours-grad" aria-hidden="true" />
      <ul className="hours">
        {HOURS.map((h) => (
          <li key={h.t} style={{ "--chip": h.chip } as CSSProperties}>
            <span className="t">{h.t}</span>
            <span className="n">{h.n}</span>
            <p className="d">{h.d}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
