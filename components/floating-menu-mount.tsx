"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import type { FloatingMenuItem } from "@/components/ui/liquid-morph-floating-menu";

// Deferred *and* gated on viewport — framer-motion is never fetched on desktop,
// and on mobile it loads after hydration (the menu is fixed at the bottom and
// isn't needed for first paint).
const FloatingMenu = dynamic(
  () => import("@/components/ui/liquid-morph-floating-menu"),
  { ssr: false },
);

export function FloatingMenuMount({ items }: { items: FloatingMenuItem[] }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1079px)");
    const sync = () => setShow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (!show) return null;
  return <FloatingMenu items={items} />;
}
