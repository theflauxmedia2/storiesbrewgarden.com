"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLenis } from "lenis/react";
import { useCallback } from "react";
import { NAV } from "@/lib/nav";
import { RESERVEGO_URL } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();

  const current = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Logo → always the top of the landing page, wherever you are.
  const onLogoClick = useCallback(
    (e: React.MouseEvent) => {
      if (pathname === "/") {
        e.preventDefault();
        if (lenis) lenis.scrollTo(0, { duration: 0.9 });
        else window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.replaceState(null, "", "/");
      } else {
        router.push("/");
        requestAnimationFrame(() => {
          if (lenis) lenis.scrollTo(0, { immediate: true });
          else window.scrollTo(0, 0);
        });
      }
    },
    [pathname, lenis, router],
  );

  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Link
          className="mark"
          href="/"
          aria-label="Stories Brew Garden, home"
          onClick={onLogoClick}
        >
          <img
            className="mark-logo"
            src="/logo.png"
            width={556}
            height={378}
            alt="Stories Brew Garden"
          />
        </Link>
        <nav aria-label="Main">
          <ul className="nav">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={current(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn" href={RESERVEGO_URL} target="_blank" rel="noopener">
          <span className="cta-long">Book a Table</span>
          <span className="cta-short">Book</span>
        </a>
      </div>
    </header>
  );
}
