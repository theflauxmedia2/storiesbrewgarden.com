"use client";

import { useEffect } from "react";

/**
 * A two-part cursor for fine pointers: a crisp dot pinned to the real pointer
 * position (so clicking stays accurate) and a ring that trails it with a soft
 * lerp. The ring grows over interactive elements and dips on press. Disabled on
 * touch; the trail is dropped under prefers-reduced-motion.
 */
export function Cursor() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    dot.style.opacity = "0";
    const ring = document.createElement("div");
    ring.className = "cursor-ring";
    ring.style.opacity = "0";
    document.body.append(dot, ring);
    document.documentElement.classList.add("has-cursor");

    let mx = innerWidth / 2;
    let my = innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;
    let shown = false;

    const HOT = "a,button,[role='button'],label,summary,select,input,textarea";
    const TEXTY = "input,textarea,select,[contenteditable]";

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
      if (reduce) ring.style.transform = `translate(${mx}px, ${my}px)`;
      if (!shown) {
        shown = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
      const el = document.elementFromPoint(mx, my);
      const onDark = !!el?.closest?.(
        ".dark,.evening,.band-dark,.band-dusk,footer,.btn:not(.line),.fm-pill,.fm-backdrop",
      );
      const hot = !!el?.closest?.(HOT);
      const texty = !!el?.closest?.(TEXTY);
      dot.classList.toggle("on-dark", onDark);
      ring.classList.toggle("on-dark", onDark);
      ring.classList.toggle("is-hot", hot && !texty);
      dot.classList.toggle("is-hot", hot && !texty);
    };
    const onDown = () => ring.classList.add("is-down");
    const onUp = () => ring.classList.remove("is-down");
    const onLeave = () => {
      shown = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(tick);
    };
    if (!reduce) raf = requestAnimationFrame(tick);

    addEventListener("pointermove", onMove, { passive: true });
    addEventListener("pointerdown", onDown, { passive: true });
    addEventListener("pointerup", onUp, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("pointermove", onMove);
      removeEventListener("pointerdown", onDown);
      removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerleave", onLeave);
      dot.remove();
      ring.remove();
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return null;
}
