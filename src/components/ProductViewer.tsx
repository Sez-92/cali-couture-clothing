import { useEffect, useState } from "react";
import {
  COLOR_META,
  CUTS,
  CUT_META,
  PRODUCT,
  PRODUCT_IMAGES,
  PRODUCT_INSIDE_IMAGES,
  SIZES,
  formatPrice,
  type Cut,
  type ProductColor,
  type ProductSide,
  type Size,
} from "../data/product";
import { useLanguage } from "../i18n/LanguageContext";
import "./ProductViewer.css";

export default function ProductViewer({
  onPreorder,
}: {
  onPreorder: () => void;
}) {
  const { t } = useLanguage();
  const [cut, setCut] = useState<Cut>("boxy");
  const [color, setColor] = useState<ProductColor>("charcoal");
  const [side, setSide] = useState<ProductSide>("front");
  const [size, setSize] = useState<Size | null>(null);
  const [justAdded, setJustAdded] = useState(false);
  const [insideOpen, setInsideOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (!insideOpen) {
      setShowMessage(false);
      return;
    }
    const id = window.setTimeout(() => setShowMessage(true), 550);
    return () => window.clearTimeout(id);
  }, [insideOpen]);

  useEffect(() => {
    Object.values(PRODUCT_IMAGES).forEach((sides) =>
      Object.values(sides).forEach((src) => {
        const img = new Image();
        img.src = src;
      })
    );
    Object.values(PRODUCT_INSIDE_IMAGES).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const src = insideOpen ? PRODUCT_INSIDE_IMAGES[color] : PRODUCT_IMAGES[color][side];

  function handlePreorder() {
    if (!size) return;
    onPreorder();
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 2400);
  }

  return (
    <section id="product" className="viewer-section">
      <div className="container">
        <div className="viewer">
          <div className="viewer__stage-wrap">
            <div className={`viewer__stage ${insideOpen ? "is-inside" : ""}`} data-color={color}>
              <img
                key={src}
                src={src}
                alt={
                  insideOpen
                    ? `THE FORM, ${COLOR_META[color].label}, Innenetikett`
                    : `THE FORM, ${COLOR_META[color].label}, ${side === "front" ? "Vorderansicht" : "Rückansicht"}`
                }
                className="viewer__img"
              />

              <button
                type="button"
                className={`viewer__inside-trigger ${insideOpen ? "is-active" : ""}`}
                onClick={() => setInsideOpen((v) => !v)}
                aria-pressed={insideOpen}
                aria-label={t.viewer.insideLabel}
              >
                {insideOpen ? "BACK TO GARMENT" : "LOOK INSIDE ↗"}
              </button>

              <span className={`viewer__inside-message ${showMessage ? "is-visible" : ""}`} aria-hidden={!insideOpen}>
                FOLLOW YOUR DREAMS.
              </span>
            </div>

            <div
              className={`viewer__side-switch ${insideOpen ? "is-disabled" : ""}`}
              role="group"
              aria-label={t.viewer.viewLabel}
            >
              {(["front", "back"] as ProductSide[]).map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`viewer__pill ${side === s ? "is-active" : ""}`}
                  onClick={() => setSide(s)}
                  aria-pressed={side === s}
                  disabled={insideOpen}
                >
                  {s === "front" ? "FRONT" : "BACK"}
                </button>
              ))}
            </div>
          </div>

          <div className="viewer__panel">
            <span className="mono-label viewer__drop">{PRODUCT.drop}</span>
            <h3 className="display-m">{PRODUCT.name}</h3>
            <p className="viewer__material body-muted">{PRODUCT.material}</p>
            <span className="viewer__price-now">{formatPrice(PRODUCT.priceCents)}</span>

            <div className="viewer__control-block">
              <div className="viewer__cuts" role="group" aria-label={t.viewer.cutLabel}>
                {CUTS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`viewer__pill ${cut === c ? "is-active" : ""}`}
                    onClick={() => setCut(c)}
                    aria-pressed={cut === c}
                  >
                    {CUT_META[c].label}
                  </button>
                ))}
              </div>
            </div>

            <div className="viewer__control-block">
              <div className="viewer__swatches" role="group" aria-label={t.viewer.colorLabel}>
                {(Object.keys(COLOR_META) as ProductColor[]).map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`viewer__swatch ${color === c ? "is-active" : ""}`}
                    style={{ ["--swatch" as string]: COLOR_META[c].swatch }}
                    onClick={() => setColor(c)}
                    aria-pressed={color === c}
                    aria-label={COLOR_META[c].label}
                  />
                ))}
              </div>
            </div>

            <div className="viewer__control-block">
              <div className="viewer__sizes" role="group" aria-label={t.viewer.sizeLabel}>
                {SIZES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`viewer__size ${size === s ? "is-active" : ""}`}
                    onClick={() => setSize(s)}
                    aria-pressed={size === s}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary btn-block viewer__cta"
              onClick={handlePreorder}
              disabled={!size}
            >
              {justAdded
                ? t.viewer.added
                : size
                ? `${t.viewer.preorderPrefix} ${formatPrice(PRODUCT.priceCents)}`
                : t.viewer.selectSize}
            </button>

            <p className="viewer__fineprint body-muted">{t.viewer.fineprint}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
