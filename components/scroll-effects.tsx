"use client";

import type Lenis from "lenis";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const HEADER_OFFSET = 84;

/**
 * Progressive-enhancement motion, all of it gated on `prefers-reduced-motion`:
 *  - section content fades up once as it scrolls into view
 *  - in-page anchors ease to their target, clearing the sticky header
 *  - the hero glow drifts a little slower than the page (parallax)
 *  - the header lifts a soft shadow once you leave the top
 * The reveal class is added by JS only, so with no JS every section stays visible.
 */
export function ScrollEffects() {
  const lenis = useLenis();
  const pathname = usePathname();

  // Fade-up reveal for section content
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("main > section > .wrap"),
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    for (const el of els) {
      // Anything already on screen at load stays put — no fade on first paint.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.85) continue;
      el.classList.add("reveal");
      io.observe(el);
    }

    return () => io.disconnect();
  }, [pathname]);

  // Ease in-page anchors, offset for the sticky header
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.includes("#")) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.pathname !== window.location.pathname || !url.hash) return;

      const target = document.querySelector<HTMLElement>(url.hash);
      if (!target) return;

      event.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -HEADER_OFFSET });
      else target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", url.hash);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);

  // Landing straight on a hash (e.g. /contact#hours) — clear the header
  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector<HTMLElement>(window.location.hash);
    if (!target) return;

    const id = requestAnimationFrame(() => {
      if (lenis) lenis.scrollTo(target, { offset: -HEADER_OFFSET, immediate: true });
      else target.scrollIntoView();
    });
    return () => cancelAnimationFrame(id);
  }, [lenis, pathname]);

  // Header shadow once scrolled away from the top (works with or without Lenis)
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".hdr");
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Parallax drift on the hero glow
  useLenis((instance: Lenis) => {
    const sun = document.querySelector<HTMLElement>(".hero .sun");
    if (sun) {
      const y = Math.min(instance.scroll * 0.12, 320);
      sun.style.transform = `translate3d(0, ${y}px, 0)`;
    }
  });

  return null;
}
