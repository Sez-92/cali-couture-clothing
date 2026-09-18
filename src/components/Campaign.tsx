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
          src="./assets/model/mannequin-workspace.webp"
          alt="Schaufensterfigur trägt THE FORM in Charcoal an einem reduzierten Arbeitsplatz"
          className="campaign__wide-img"
        />
      </div>

      <div className="campaign__stack">
        <img
          src="./assets/model/mannequin-boxy.webp"
          alt="Schaufensterfiguren präsentieren THE FORM in Charcoal und Sand"
          className="campaign__stack-img"
        />
        <img
          src="./assets/model/mannequin-cafe.webp"
          alt="Cropped Cali Couture Shirt mit großem CC auf dem Rücken im Café"
          className="campaign__stack-img"
        />
      </div>
    </section>
  );
}
