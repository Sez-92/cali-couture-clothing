import { useEffect, useState } from "react";
import "./Header.css";

const NAV_ITEMS = [
  { href: "#drop", label: "DROP" },
  { href: "#lookbook", label: "LOOKBOOK" },
  { href: "#sound", label: "SOUND" },
  { href: "#preorder", label: "PREORDER" },
  { href: "#faq", label: "FAQ" },
];

export default function Header({ bagCount }: { bagCount: number }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header__bg" aria-hidden="true" />
      <div className="header__inner container">
        <a href="#top" className="header__logo" aria-label="Cali Couture — Startseite">
          <img src="./assets/logos/cali-couture-wordmark-web.png" alt="Cali Couture" />
        </a>

        <nav className="header__nav" aria-label="Hauptnavigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="header__nav-link mono-label">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="header__bag"
            aria-label={`Warenkorb, ${bagCount} Artikel`}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M6 8h12l-1 12.5a1.5 1.5 0 0 1-1.5 1.5h-7a1.5 1.5 0 0 1-1.5-1.5L6 8Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path d="M9 8V6.5a3 3 0 0 1 6 0V8" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            <span className="header__bag-count">{bagCount}</span>
          </button>

          <button
            type="button"
            className="header__burger"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`header__burger-line ${menuOpen ? "is-open" : ""}`} />
            <span className={`header__burger-line ${menuOpen ? "is-open" : ""}`} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-menu__nav" aria-label="Mobile Navigation">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-menu__link display-m"
              style={{ transitionDelay: menuOpen ? `${i * 40 + 80}ms` : "0ms" }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <p className="mobile-menu__foot mono-label">SYSTEM / CALI_COUTURE</p>
      </div>
    </header>
  );
}
