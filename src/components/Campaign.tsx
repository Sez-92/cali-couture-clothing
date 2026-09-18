import { PRODUCT } from "../data/product";
import "./Campaign.css";

export default function Campaign() {
  return (
    <section className="campaign" aria-label="Editorial">
      <div className="container">
        <span className="mono-label campaign__tag">{PRODUCT.drop}</span>
      </div>

      <div className="campaign__wide">
        <img
          src="./assets/editorial/mannequin-desk-charcoal.png"
          alt="Gesichtslose Cali Couture Schaufensterpuppe arbeitet am Schreibtisch im Charcoal Shirt"
          className="campaign__wide-img"
          loading="lazy"
        />
      </div>

      <div className="campaign__stack">
        <img
          src="./assets/model/mannequin-boxy-duo.png"
          alt="Cali Couture BOXY Silhouetten in Charcoal und Sand auf gesichtslosen Schaufensterpuppen"
          className="campaign__stack-img"
          loading="lazy"
        />
        <img
          src="./assets/model/mannequin-tech-duo.png"
          alt="Cali Couture Tech-Shirt Silhouetten in Charcoal und Sand auf gesichtslosen Schaufensterpuppen"
          className="campaign__stack-img"
          loading="lazy"
        />
      </div>
    </section>
  );
}
