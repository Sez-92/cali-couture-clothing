import { useLanguage } from "../i18n/LanguageContext";
import "./AboutPage.css";

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;

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
          <div className="park-transition__stage" tabIndex={0}>
            <img
              src="./assets/hero/foundation-001-hero-model-mobile.png"
              alt="Model trainiert Calisthenics im Park"
              className="park-transition__base"
              loading="lazy"
            />
            <img
              src="./assets/editorial/cali-couture-cafe-back-cc.png"
              alt="Model von hinten in einem Café, das große CC-Logo auf dem Rücken des Shirts sichtbar"
              className="park-transition__overlay"
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
