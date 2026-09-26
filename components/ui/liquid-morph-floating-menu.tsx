"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export type FloatingMenuItem = { label: string; href: string };

/**
 * Liquid-morph floating menu, adapted from a shadcn/Tailwind + framer-motion
 * snippet to this project: brand colours (crimson pill → charcoal wipe, cream
 * type), Fraunces for the labels, real Next.js navigation, scroll-lock, Escape
 * and outside-click to close, and a reduced-motion fallback. Mobile / tablet
 * only — the `.fm-root` wrapper is hidden from 1080px up.
 */
function MenuLink({
  label,
  href,
  isOpen,
  index,
  onNavigate,
}: {
  label: string;
  href: string;
  isOpen: boolean;
  index: number;
  onNavigate: (href: string) => void;
}) {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const animatingRef = useRef(false);
  const pendingLeaveRef = useRef(false);
  const chars = label.split("");
  const lockDuration = 30 * chars.length + 300;

  const handleEnter = useCallback(() => {
    pendingLeaveRef.current = false;
    if (hovered) return;
    setHovered(true);
    animatingRef.current = true;
    window.setTimeout(() => {
      animatingRef.current = false;
      if (pendingLeaveRef.current) {
        pendingLeaveRef.current = false;
        setHovered(false);
      }
    }, lockDuration);
  }, [hovered, lockDuration]);

  const handleLeave = useCallback(() => {
    if (animatingRef.current) pendingLeaveRef.current = true;
    else setHovered(false);
  }, []);

  return (
    <motion.a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(href);
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="fm-link"
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{
        duration: reduce ? 0.15 : 0.4,
        delay: isOpen && !reduce ? 0.4 + 0.07 * index : 0,
        ease,
      }}
    >
      <span className="fm-link-inner">
        {chars.map((char, i) => (
          <span key={i} className="fm-char">
            <span
              className="fm-char-roll"
              style={{
                transitionDuration: hovered && !reduce ? "760ms" : "0ms",
                transitionDelay: hovered && !reduce ? `${30 * i}ms` : "0ms",
                transform: hovered && !reduce
                  ? "translateY(-50%)"
                  : "translateY(0%)",
              }}
            >
              <span className="fm-char-face">{char === " " ? " " : char}</span>
              <span className="fm-char-face" aria-hidden>
                {char === " " ? " " : char}
              </span>
            </span>
          </span>
        ))}
      </span>
    </motion.a>
  );
}

export default function FloatingMenu({ items }: { items: FloatingMenuItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const reduce = useReducedMotion();
  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const openHeight = 96 + items.length * 44;

  const close = useCallback(() => setIsOpen(false), []);

  const navigate = useCallback(
    (href: string) => {
      setIsOpen(false);
      if (href === pathname) {
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      } else {
        router.push(href);
      }
    },
    [pathname, router, reduce],
  );

  // route change closes it
  useEffect(() => setIsOpen(false), [pathname]);

  // outside click + Escape + scroll lock while open
  useEffect(() => {
    if (!isOpen) return;
    const onDown = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = prev;
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <div className="fm-root" data-open={isOpen}>
      <motion.div
        className="fm-backdrop"
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: reduce ? 0.001 : 0.4, ease }}
        onClick={close}
        aria-hidden
      />
      <motion.div
        ref={containerRef}
        className="fm-anchor"
        style={{ x: "-50%" }}
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease }}
      >
        <motion.div
          className="fm-pill"
          onClick={() => {
            if (!isOpen) setIsOpen(true);
          }}
          style={{ cursor: isOpen ? "default" : "pointer" }}
          animate={{
            width: isOpen ? 288 : 148,
            height: isOpen ? openHeight : 50,
            borderRadius: isOpen ? 30 : 999,
          }}
          whileHover={isOpen || reduce ? undefined : { scale: 1.04 }}
          transition={{
            duration: reduce ? 0.001 : 0.8,
            ease,
            height: { duration: reduce ? 0.001 : isOpen ? 0.8 : 0.16 },
            scale: { duration: 0.25, ease },
          }}
        >
          {/* base pill */}
          <div className="fm-bg" />

          {/* charcoal circle wiping up from the bottom */}
          <motion.div
            className="fm-wipe"
            initial={false}
            animate={{ bottom: isOpen ? "-14%" : "-212%" }}
            transition={{
              duration: reduce ? 0.001 : 0.8,
              ease,
              delay: isOpen && !reduce ? 0.1 : 0,
            }}
          />

          {/* links */}
          <div
            className="fm-links"
            style={{
              pointerEvents: isOpen ? "auto" : "none",
              opacity: isOpen ? 1 : 0,
              flex: isOpen ? 1 : 0,
            }}
          >
            {items.map((item, idx) => (
              <MenuLink
                key={item.href}
                label={item.label}
                href={item.href}
                isOpen={isOpen}
                index={idx}
                onNavigate={navigate}
              />
            ))}
          </div>

          {/* toggle bar */}
          <motion.button
            type="button"
            className="fm-bar"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen((v) => !v);
            }}
            animate={{
              paddingLeft: isOpen ? 22 : 20,
              paddingRight: isOpen ? 22 : 20,
              paddingBottom: isOpen ? 20 : 0,
            }}
            transition={{ duration: reduce ? 0.001 : 0.8, ease }}
          >
            <span className="fm-bar-label">Menu</span>
            <span className="fm-bars" aria-hidden>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -3 }}
                transition={{ duration: reduce ? 0.001 : 0.4, ease }}
              />
              <motion.span
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 3 }}
                transition={{ duration: reduce ? 0.001 : 0.4, ease }}
              />
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
