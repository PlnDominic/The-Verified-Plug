"use client";

import { useEffect, useState } from "react";

/** True once the page has been scrolled past `threshold` of the viewport height. */
export function useScrolled(threshold = 0.55): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      const next = window.scrollY > window.innerHeight * threshold;
      setScrolled((prev) => (prev !== next ? next : prev));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
