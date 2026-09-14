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
        <div className="section-head">
          <span className="mono-label">{PRODUCT.drop} / PRODUCT VIEWER</span>
          <h2 className="display-l">{PRODUCT.collection}</h2>
        </div>

        <div className="viewer">
          <div className="viewer__stage-wrap">
            <div className="viewer__stage" data-color={color}>
              <span className="viewer__tag viewer__tag--tl mono-label">FOUNDATION_TEE</span>
              <span className="viewer__tag viewer__tag--tr mono-label">
                {side === "front" ? "01" : "02"}/02
              </span>
              <img key={src} src={src} alt={`FOUNDATION TEE, ${COLOR_META[color].label}, ${side === "front" ? "Vorderansicht" : "Rückansicht"}`} className="viewer__img" />
              <span className="viewer__tag viewer__tag--bl mono-label">{COLOR_META[color].label}</span>
              <span className="viewer__tag viewer__tag--br mono-label">{PRODUCT.drop}</span>
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
            <p className="mono-label">{PRODUCT.production}</p>
            <h3 className="display-m">{PRODUCT.name}</h3>

            <div className="viewer__price">
              <span className="viewer__price-now">{formatPrice(PRODUCT.priceCents)}</span>
              <span className="viewer__price-later">
                später {formatPrice(PRODUCT.laterPriceCents)}
              </span>
            </div>

            <div className="viewer__control-block">
              <span className="mono-label">FARBE / {COLOR_META[color].label}</span>
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
              <span className="mono-label">GRÖSSE {size ? `/ ${size}` : ""}</span>
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
              {justAdded ? "ZUM PREORDER HINZUGEFÜGT" : size ? `PREORDER — ${formatPrice(PRODUCT.priceCents)}` : "GRÖSSE WÄHLEN"}
            </button>
            <p className="viewer__note body-muted">
              Preorder-Artikel. Keine sofortige Lieferung — Details unter{" "}
              <a href="#preorder" className="viewer__note-link">
                PREORDER
              </a>
              .
            </p>
          </div>
        </div>

        <TechSpecsInline />
      </div>
    </section>
  );
}

function TechSpecsInline() {
  const rows: [string, string][] = [
    ["FIT", PRODUCT.fit],
    ["WEIGHT", PRODUCT.weight],
    ["DROP", "001"],
    ["FRONT", PRODUCT.frontDetail],
    ["BACK", PRODUCT.backDetail],
    ["PRODUCTION", PRODUCT.production],
  ];
  return (
    <div className="specs">
      <span className="mono-label specs__label">SPEC_SHEET / FOUNDATION_TEE</span>
      <div className="specs__grid">
        {rows.map(([k, v]) => (
          <div className="specs__row" key={k}>
            <span className="specs__key mono-label">{k}</span>
            <span className="specs__value">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
