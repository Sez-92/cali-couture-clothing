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
          src="./assets/model/model-new-back.webp"
          alt="Model trägt THE FORM in Charcoal mit großem CC-Backprint in einer alltäglichen Wohnsituation"
          className="campaign__wide-img"
        />
      </div>

      <div className="campaign__stack">
        <img
          src="./assets/model/model-new-front.webp"
          alt="Model trägt THE FORM in Charcoal in einer alltäglichen Wohnsituation"
          className="campaign__stack-img"
        />
        <img
          src="./assets/model/model-new-back.webp"
          alt="Rückansicht von THE FORM in Charcoal mit großem CC-Backprint"
          className="campaign__stack-img"
        />
      </div>
    </section>
  );
}
