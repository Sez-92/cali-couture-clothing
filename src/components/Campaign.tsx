import "./Campaign.css";

export default function Campaign() {
  return (
    <section className="campaign" aria-label="Editorial">
      <div className="container">
        <span className="mono-label campaign__tag">FOUNDATION 001</span>
      </div>

      <div className="campaign__wide">
        <img
          src="./assets/hero/foundation-001-hero-calisthenics-split.png"
          alt="Model im Calisthenics-Park trägt die FOUNDATION TEE, daneben eine Detailaufnahme des Shirt-Logos"
          className="campaign__wide-img"
        />
      </div>

      <div className="campaign__stack">
        <img
          src="./assets/hero/foundation-001-hero-model-mobile.png"
          alt="Model im Calisthenics-Park trägt die FOUNDATION TEE"
          className="campaign__stack-img"
        />
        <img
          src="./assets/hero/foundation-001-hero-detail-mobile.png"
          alt="Detailaufnahme des FOUNDATION TEE Shirt-Logos"
          className="campaign__stack-img"
        />
      </div>
    </section>
  );
}
