"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { POURS } from "@/lib/pours";

export function PourList() {
  const [openId, setOpenId] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  // tap-to-toggle for touch, click-away + Escape to dismiss — hover alone
  // handles the desktop case via CSS, this only needs to cover the rest.
  useEffect(() => {
    if (!openId) return;
    const closeIfOutside = (e: Event) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpenId(null);
      } else if (
        e.target instanceof Element &&
        !e.target.closest(`#${CSS.escape(openId)}`)
      ) {
        setOpenId(null);
      }
    };
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    document.addEventListener("pointerdown", closeIfOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeIfOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [openId]);

  return (
    <div className="pours" ref={rootRef}>
      {POURS.map((p) => (
        <div
          className={`pour-row${p.img ? " has-preview" : ""}${openId === p.id ? " is-open" : ""}`}
          id={p.id}
          key={p.id}
          onClick={p.img ? () => setOpenId(openId === p.id ? null : p.id) : undefined}
        >
          {p.img ? (
            <span className="glass has-photo" aria-hidden="true">
              <img src={p.img} alt="" loading="lazy" decoding="async" />
            </span>
          ) : (
            <span
              className="glass"
              style={{ "--beer": p.beer } as CSSProperties}
              aria-hidden="true"
            />
          )}
          <div>
            <span className="pour-name">
              {p.name}
              <span className="pour-style">{p.style}</span>
            </span>
          </div>
          <p className="pour-note">{p.note}</p>
          <span className="pour-spec">
            {p.abv} ABV · {p.ibu} IBU
          </span>
          {p.img && p.imgFull ? (
            <span className="row-preview" aria-hidden="true">
              <img src={p.imgFull} alt="" loading="lazy" decoding="async" />
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
