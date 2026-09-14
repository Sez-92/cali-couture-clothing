import "./PreorderProcess.css";

const STEPS = [
  { n: "01", key: "OPEN", desc: "Preorder-Fenster öffnet. Größe & Farbe sichern." },
  { n: "02", key: "CLOSE", desc: "Fenster schließt. Finale Stückzahl wird fixiert." },
  { n: "03", key: "MAKE", desc: "Produktion startet exakt nach bestellter Menge." },
  { n: "04", key: "SHIP", desc: "Versand mit Tracking direkt zu dir." },
];

const SIZE_ROWS: { size: string; chest: string; length: string }[] = [
  { size: "XS", chest: "58 cm", length: "68 cm" },
  { size: "S", chest: "61 cm", length: "70 cm" },
  { size: "M", chest: "64 cm", length: "72 cm" },
  { size: "L", chest: "67 cm", length: "74 cm" },
  { size: "XL", chest: "70 cm", length: "76 cm" },
];

export default function PreorderProcess() {
  return (
    <section id="preorder" className="preorder">
      <div className="container">
        <div className="section-head">
          <span className="mono-label">HOW IT WORKS</span>
          <h2 className="display-l">PREORDER</h2>
          <p className="body-l body-muted preorder__lede">
            PREORDER. NOT NO-RETURN. Wir produzieren nach Bedarf statt auf
            Lager — transparent, ohne Overstock. Kein Artikel ist sofort
            versandfertig, solange das Fenster läuft.
          </p>
        </div>

        <ol className="preorder__steps">
          {STEPS.map((s) => (
            <li className="preorder__step" key={s.n}>
              <span className="mono-label preorder__step-n">{s.n}</span>
              <h3 className="display-m preorder__step-key">{s.key}</h3>
              <p className="body-muted">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="preorder__cols">
          <div className="preorder__block">
            <span className="mono-label">SIZE GUIDE / OVERSIZED FIT</span>
            <div className="preorder__table-wrap">
              <table className="preorder__table">
                <thead>
                  <tr>
                    <th>SIZE</th>
                    <th>BRUST (FLACH)</th>
                    <th>LÄNGE</th>
                  </tr>
                </thead>
                <tbody>
                  {SIZE_ROWS.map((r) => (
                    <tr key={r.size}>
                      <td>{r.size}</td>
                      <td>{r.chest}</td>
                      <td>{r.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <span className="mono-label preorder__table-hint">SWIPE FOR MORE →</span>
            <p className="preorder__fineprint body-muted">
              Richtwerte für den oversized Schnitt, ± 1–2 cm möglich. Finale
              Maße werden vor Produktionsstart bestätigt.
            </p>
          </div>

          <div className="preorder__block">
            <span className="mono-label">RETURNS / WIDERRUF</span>
            <ul className="preorder__list body-muted">
              <li>
                Als Verbraucher steht dir bei Bestellungen grundsätzlich ein
                14-tägiges Widerrufsrecht ab Erhalt der Ware zu — die genauen
                Bedingungen entnimmst du der finalen Widerrufsbelehrung im
                Checkout.
              </li>
              <li>
                Bei einem regulären Widerruf trägst du die unmittelbaren
                Kosten der Rücksendung, sofern dies vor Kauf klar
                kommuniziert wurde.
              </li>
              <li>Größentausch ist möglich, solange Bestand verfügbar ist.</li>
              <li>
                Fehlerhafte oder beschädigte Lieferungen werden gesondert und
                kostenfrei bearbeitet.
              </li>
            </ul>
            <p className="preorder__fineprint body-muted">
              Diese Angaben sind eine allgemeine Orientierung und ersetzen
              keine Rechtsberatung.
            </p>
          </div>
        </div>

        <div className="preorder__cta-row">
          <a href="#drop" className="btn btn-primary">
            ZUM PRODUKT
          </a>
        </div>
      </div>
    </section>
  );
}
