import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import "./AboutPage.css";

type Scene = "park" | "cafe";

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;
  const [scene, setScene] = useState<Scene>("park");

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container about-hero__inner">
          <span className="mono-label">{a.eyebrow}</span>
          <h1 className="display-l about-hero__headline">{a.headline}</h1>
          <p className="about-hero__statement">
            {a.statementLine1}
            <br />
            {a.statementLine2}
          </p>
          <p className="body-muted about-hero__paragraph">{a.paragraph}</p>
        </div>
      </section>

      <section className="park-transition" aria-label="Calisthenics to everyday life">
        <div className="container">
          <div className="park-transition__stage">
            <img
              src="./assets/model/mannequin-park.webp"
              alt="Schaufensterfigur mit Cali Couture Shirt im Calisthenics Park"
              className={`park-transition__scene ${scene === "park" ? "is-active" : ""}`}
            />
            <img
              src="./assets/model/mannequin-cafe.webp"
              alt="Schaufensterfigur mit sandfarbenem Cali Couture Cropped Shirt und großem CC im Café"
              className={`park-transition__scene ${scene === "cafe" ? "is-active" : ""}`}
            />

            <div className="park-transition__copy">
              <p className="park-transition__line park-transition__line--1">{a.transitionLine1}</p>
              <p className="park-transition__line park-transition__line--2">{a.transitionLine2}</p>
            </div>

            <div className="park-transition__switch" role="group" aria-label="Szene wechseln">
              <button
                type="button"
                className={`park-transition__switch-btn ${scene === "park" ? "is-active" : ""}`}
                onClick={() => setScene("park")}
                aria-pressed={scene === "park"}
              >
                PARK
              </button>
              <button
                type="button"
                className={`park-transition__switch-btn ${scene === "cafe" ? "is-active" : ""}`}
                onClick={() => setScene("cafe")}
                aria-pressed={scene === "cafe"}
              >
                CAFÉ
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="about-statement">
        <div className="container about-statement__inner">
          <p className="about-statement__pull">{a.pullQuote}</p>
          <p className="mono-label about-statement__closing">{a.closing}</p>
        </div>
      </section>
    </main>
  );
}
