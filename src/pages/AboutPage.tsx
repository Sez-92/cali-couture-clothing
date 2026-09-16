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

      <section className="about-contrast" aria-label="Calisthenics to everyday life">
        <div className="container about-contrast__grid">
          <figure className="about-contrast__item about-contrast__item--park">
            <img
              src="./assets/hero/foundation-001-hero-model-mobile.png"
              alt="Model trainiert Calisthenics im Park"
              className="about-contrast__img"
            />
            <figcaption className="about-contrast__caption">CALISTHENICS / PARK</figcaption>
          </figure>
          <figure className="about-contrast__item about-contrast__item--cafe">
            <img
              src="./assets/editorial/cali-couture-cafe-back-cc.png"
              alt="Model von hinten in einem Café, das große CC-Logo auf dem Rücken des Shirts sichtbar"
              className="about-contrast__img"
            />
            <figcaption className="about-contrast__caption">EVERYDAY / CITY, CAFÉ, WORK</figcaption>
          </figure>
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
