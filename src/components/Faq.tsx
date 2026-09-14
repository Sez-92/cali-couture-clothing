import { useState } from "react";
import "./Faq.css";

const FAQ_ITEMS = [
  {
    q: "Warum Preorder?",
    a: "Wir produzieren bewusst nach Nachfrage statt auf Lager. Das reduziert Überproduktion und lässt uns in kleiner, sauberer Stückzahl fertigen — ohne Kompromisse bei der Qualität.",
  },
  {
    q: "Wann wird geliefert?",
    a: "Nach Ende des Preorder-Fensters startet die Produktion. Den genauen Zeitraum kommunizieren wir transparent auf dieser Seite und per E-Mail, sobald das Fenster schließt.",
  },
  {
    q: "Kann ich die Größe ändern?",
    a: "Ja, solange das Preorder-Fenster offen ist. Wähle im Produkt-Viewer einfach erneut deine Größe. Nach Fensterschluss ist ein Tausch nur nach Verfügbarkeit möglich.",
  },
  {
    q: "Was passiert, wenn das Preorder-Ziel nicht erreicht wird?",
    a: "Wird eine Mindestmenge nicht erreicht, informieren wir alle Preorder-Kund:innen aktiv und transparent über die nächsten Schritte, inklusive vollständiger Rückerstattung.",
  },
  {
    q: "Wie funktionieren Rückgaben?",
    a: "Es gilt das gesetzliche 14-tägige Widerrufsrecht ab Erhalt der Ware. Details dazu findest du im Bereich PREORDER sowie in der finalen Widerrufsbelehrung im Checkout.",
  },
  {
    q: "Ist SAND genauso verfügbar wie CHARCOAL?",
    a: "Beide Farbwege laufen im selben Preorder-Fenster und in vergleichbarer Stückzahl. Verfügbarkeit je Größe kann sich dennoch farbabhängig unterscheiden.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-head">
          <span className="mono-label">SUPPORT</span>
          <h2 className="display-l">FAQ</h2>
        </div>

        <ul className="faq__list">
          {FAQ_ITEMS.map((item, i) => {
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
