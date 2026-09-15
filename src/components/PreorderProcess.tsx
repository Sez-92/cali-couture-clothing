import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import "./PreorderProcess.css";

const SIZE_ROWS: { size: string; chest: string; length: string }[] = [
  { size: "XS", chest: "58 cm", length: "68 cm" },
  { size: "S", chest: "61 cm", length: "70 cm" },
  { size: "M", chest: "64 cm", length: "72 cm" },
  { size: "L", chest: "67 cm", length: "74 cm" },
  { size: "XL", chest: "70 cm", length: "76 cm" },
];

export default function PreorderProcess() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<"size" | "returns" | null>(null);

  return (
    <section id="preorder" className="preorder">
      <div className="container">
        <p className="preorder__lede body-muted">{t.preorder.lede}</p>

        <ul className="faq__list preorder__accordion">
          <li className="faq__item">
            <button
              type="button"
              className="faq__trigger"
              aria-expanded={open === "size"}
              aria-controls="panel-size"
              onClick={() => setOpen(open === "size" ? null : "size")}
            >
              <span className="display-m faq__question">{t.preorder.sizeGuide}</span>
              <span className={`faq__icon ${open === "size" ? "is-open" : ""}`} aria-hidden="true">
                +
              </span>
            </button>
            <div id="panel-size" className={`faq__panel ${open === "size" ? "is-open" : ""}`} role="region">
              <div className="faq__answer">
                <p className="preorder__fit-hint body-muted">{t.preorder.fitHint}</p>
                <div className="preorder__table-wrap">
                  <table className="preorder__table">
                    <thead>
                      <tr>
                        <th>{t.preorder.tableHeaders.size}</th>
                        <th>{t.preorder.tableHeaders.chest}</th>
                        <th>{t.preorder.tableHeaders.length}</th>
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
                <p className="preorder__fineprint body-muted">{t.preorder.tableFineprint}</p>
              </div>
            </div>
          </li>

          <li className="faq__item">
            <button
              type="button"
              className="faq__trigger"
              aria-expanded={open === "returns"}
              aria-controls="panel-returns"
              onClick={() => setOpen(open === "returns" ? null : "returns")}
            >
              <span className="display-m faq__question">{t.preorder.returns}</span>
              <span className={`faq__icon ${open === "returns" ? "is-open" : ""}`} aria-hidden="true">
                +
              </span>
            </button>
            <div
              id="panel-returns"
              className={`faq__panel ${open === "returns" ? "is-open" : ""}`}
              role="region"
            >
              <p className="body-muted faq__answer">{t.preorder.returnsText}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
