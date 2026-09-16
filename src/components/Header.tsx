import { useLanguage } from "../i18n/LanguageContext";
import { useHashRoute, type Route } from "../router/useHashRoute";
import "./Header.css";

const NAV_ITEMS: { route: Route; label: string }[] = [
  { route: "about", label: "ABOUT CC" },
  { route: "drop", label: "DROP N°01" },
];

export default function Header({ bagCount }: { bagCount: number }) {
  const { language, setLanguage } = useLanguage();
  const [route, navigate] = useHashRoute();

  return (
    <header className="header">
      <div className="header__bg" aria-hidden="true" />
      <div className="header__inner container">
        <a
          href="#/drop"
          className="header__logo"
          aria-label="Cali Couture — Startseite"
          onClick={(e) => {
            e.preventDefault();
            navigate("drop");
          }}
        >
          <img src="./assets/logos/cali-couture-wordmark.svg" alt="Cali Couture" />
        </a>

        <nav className="header__nav" aria-label="Hauptnavigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.route}
              href={item.route === "about" ? "#/about" : "#/drop"}
              className={`header__nav-link mono-label ${route === item.route ? "is-active" : ""}`}
              aria-current={route === item.route ? "page" : undefined}
              onClick={(e) => {
                e.preventDefault();
                navigate(item.route);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <div className="header__lang" role="group" aria-label="Sprache / Language">
            {(["de", "en"] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                className={`header__lang-btn ${language === lang ? "is-active" : ""}`}
                onClick={() => setLanguage(lang)}
                aria-pressed={language === lang}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <button type="button" className="header__bag" aria-label={`Warenkorb, ${bagCount} Artikel`}>
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
        </div>
      </div>
    </header>
  );
}
