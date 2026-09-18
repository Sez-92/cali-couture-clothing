import { PRODUCT } from "../data/product";
import { MANNEQUIN_BOXY_DUO, MANNEQUIN_DESK_CHARCOAL } from "../data/mannequinAssets";
import "./Campaign.css";

export default function Campaign() {
  return (
    <section className="campaign" aria-label="Editorial">
      <div className="container">
        <span className="mono-label campaign__tag">{PRODUCT.drop}</span>
      </div>

      <div className="campaign__wide">
        <img
          src={MANNEQUIN_DESK_CHARCOAL}
          alt="Gesichtslose Cali Couture Schaufensterpuppe arbeitet am Schreibtisch im Charcoal Shirt"
          className="campaign__wide-img"
        />
      </div>

      <div className="campaign__stack">
        <img
          src={MANNEQUIN_DESK_CHARCOAL}
          alt="Gesichtslose Cali Couture Schaufensterpuppe arbeitet am Schreibtisch im Charcoal Shirt"
          className="campaign__stack-img"
        />
        <img
          src={MANNEQUIN_BOXY_DUO}
          alt="Cali Couture BOXY Silhouetten in Charcoal und Sand auf gesichtslosen Schaufensterpuppen"
          className="campaign__stack-img"
        />
      </div>
    </section>
  );
}
