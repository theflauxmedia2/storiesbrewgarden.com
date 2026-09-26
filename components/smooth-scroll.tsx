"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState, type ReactNode } from "react";
import "lenis/dist/lenis.css";

/**
 * Momentum smooth-scroll (Lenis) in `root` mode, so the document itself still
 * scrolls — `position: sticky` header and native anchors keep working.
 * Fully bypassed when the visitor asks for reduced motion.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const [smooth, setSmooth] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setSmooth(!mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  if (!smooth) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.1, wheelMultiplier: 1 }}>
      {children}
    </ReactLenis>
  );
}
