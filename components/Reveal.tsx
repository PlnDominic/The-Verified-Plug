"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  index?: number;
  as?: "div" | "article";
  className?: string;
  style?: React.CSSProperties;
};

/** Fades/rises children into view the first time they cross into the viewport. */
export default function Reveal({ children, index = 0, as = "div", className, style }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible]);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`vp-reveal ${visible ? "vp-in" : ""} ${className ?? ""}`}
      style={{ transitionDelay: `${(index % 4) * 0.06}s`, ...style }}
    >
      {children}
    </Tag>
  );
}
