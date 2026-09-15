import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import "./Faq.css";

export default function Faq() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="display-l faq__heading">{t.faq.heading}</h2>

        <ul className="faq__list">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li className="faq__item" key={item.q}>
                <button
                  type="button"
                  className="faq__trigger"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="display-m faq__question">{item.q}</span>
                  <span className={`faq__icon ${isOpen ? "is-open" : ""}`} aria-hidden="true">
                    +
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  className={`faq__panel ${isOpen ? "is-open" : ""}`}
                  role="region"
                >
                  <p className="body-muted faq__answer">{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
