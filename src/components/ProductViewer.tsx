import { useEffect, useState } from "react";
import {
  COLOR_META,
  PRODUCT,
  PRODUCT_IMAGES,
  SIZES,
  formatPrice,
  type ProductColor,
  type ProductSide,
  type Size,
} from "../data/product";
import "./ProductViewer.css";

export default function ProductViewer({
  onPreorder,
}: {
  onPreorder: () => void;
}) {
  const [color, setColor] = useState<ProductColor>("charcoal");
  const [side, setSide] = useState<ProductSide>("front");
  const [size, setSize] = useState<Size | null>(null);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    Object.values(PRODUCT_IMAGES).forEach((sides) =>
      Object.values(sides).forEach((src) => {
        const img = new Image();
        img.src = src;
      })
    );
  }, []);

  const src = PRODUCT_IMAGES[color][side];

  function handlePreorder() {
    if (!size) return;
    onPreorder();
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 2400);
  }

  return (
    <section id="drop" className="viewer-section">
      <div className="container">
        <div className="viewer">
          <div className="viewer__stage-wrap">
            <div className="viewer__stage" data-color={color}>
              <img
                key={src}
                src={src}
                alt={`FOUNDATION TEE, ${COLOR_META[color].label}, ${side === "front" ? "Vorderansicht" : "Rückansicht"}`}
                className="viewer__img"
              />
            </div>

            <div className="viewer__side-switch" role="group" aria-label="Ansicht wechseln">
              {(["front", "back"] as ProductSide[]).map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`viewer__pill ${side === s ? "is-active" : ""}`}
                  onClick={() => setSide(s)}
                  aria-pressed={side === s}
                >
                  {s === "front" ? "FRONT" : "BACK"}
                </button>
              ))}
            </div>
          </div>

          <div className="viewer__panel">
            <h3 className="display-m">{PRODUCT.name}</h3>
            <span className="viewer__price-now">{formatPrice(PRODUCT.priceCents)}</span>

            <div className="viewer__control-block">
              <div className="viewer__swatches" role="group" aria-label="Farbe wählen">
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
              <div className="viewer__sizes" role="group" aria-label="Größe wählen">
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
              {justAdded ? "HINZUGEFÜGT" : size ? `PREORDER — ${formatPrice(PRODUCT.priceCents)}` : "GRÖSSE WÄHLEN"}
            </button>

            <p className="viewer__fit">OVERSIZED FIT · HEAVYWEIGHT COTTON · PREORDER</p>
          </div>
        </div>
      </div>
    </section>
  );
}
