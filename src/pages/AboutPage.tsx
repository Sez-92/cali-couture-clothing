import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import "./AboutPage.css";

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;
  const [isCafe, setIsCafe] = useState(false);

  const toggleScene = () => setIsCafe((current) => !current);

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

      <section className="park-transition" aria-label="Cali Couture in Bewegung und Alltag">
        <div className="container">
          <div
            className={`park-transition__stage ${isCafe ? "is-cafe" : ""}`}
            tabIndex={0}
            role="button"
            aria-pressed={isCafe}
            aria-label="Zwischen Cali Couture Look und Café Couture wechseln"
            onClick={toggleScene}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleScene();
              }
            }}
          >
            <img
              src="./assets/model/mannequin-boxy-duo-v4.png"
              alt="Gesichtslose Cali Couture Schaufensterpuppen in Charcoal und Sand"
              className="park-transition__base"
              loading="lazy"
            />
            <img
              src="./assets/editorial/mannequin-cafe-cropped-back-v4.png"
              alt="Gesichtslose Cali Couture Schaufensterpuppe von hinten an der Café-Bar mit großem CC-Backprint"
              className="park-transition__overlay"
              loading="lazy"
            />

            <div className="park-transition__copy">
              <p className="park-transition__line park-transition__line--1">{a.transitionLine1}</p>
              <p className="park-transition__line park-transition__line--2">{a.transitionLine2}</p>
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
