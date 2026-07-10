"use client";

import { useScrolled } from "@/hooks/useScrolled";
import { DEFAULT_WA_LINK } from "@/lib/content";

export default function Header() {
  const scrolled = useScrolled(0.55);

  const headerText = scrolled ? "#16181f" : "#ffffff";
  const headerBg = scrolled ? "rgba(250,248,244,0.82)" : "transparent";
  const headerBlur = scrolled ? "saturate(140%) blur(14px)" : "none";
  const headerBorder = scrolled ? "#e7e5e0" : "transparent";
  const headerBtnBorder = scrolled ? "#d9d6cf" : "rgba(255,255,255,0.6)";

  return (
    <header
      className="vp-header"
      style={{
        color: headerText,
        background: headerBg,
        WebkitBackdropFilter: headerBlur,
        backdropFilter: headerBlur,
        borderBottomColor: headerBorder,
      }}
    >
      <nav className="vp-nav">
        <a href="#cars" className="vp-nav-link">Cars &amp; Goods</a>
        <a href="#how" className="vp-nav-link">How it works</a>
        <a href="#request" className="vp-nav-link">Request a car</a>
      </nav>

      <a href="#top" className="vp-logo">
        The Verified Plug
        <span className="vp-logo-sub">China &rarr; Ghana</span>
      </a>

      <div className="vp-header-actions">
        <a
          href={DEFAULT_WA_LINK}
          target="_blank"
          rel="noopener"
          className="vp-wa-btn"
          style={{ borderColor: headerBtnBorder }}
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
    </header>
  );
}

export function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" style={{ width: size, height: size, fill: "currentColor" }} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.02c-.24.68-1.42 1.32-1.95 1.37-.5.05-1.14.07-1.84-.11-.42-.11-.97-.29-1.67-.59-2.94-1.27-4.86-4.23-5-4.43-.15-.2-1.2-1.6-1.2-3.05s.76-2.16 1.03-2.46c.27-.29.59-.37.79-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.59.83 2.03.9 2.18.07.15.12.32.02.51-.09.2-.14.32-.27.5-.14.17-.29.38-.41.51-.14.14-.28.29-.12.56.15.27.68 1.12 1.46 1.81 1 .89 1.85 1.17 2.12 1.31.27.14.42.11.58-.07.15-.17.66-.77.84-1.04.17-.27.35-.22.58-.13.24.09 1.53.72 1.79.85.27.14.44.2.51.31.06.11.06.66-.18 1.34z" />
    </svg>
  );
}
