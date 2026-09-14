import { useEffect, useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const artRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches || reduce.matches) return;

    const el = artRef.current;
    if (!el) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        el.style.setProperty("--mx", x.toFixed(3));
        el.style.setProperty("--my", y.toFixed(3));
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <img
        className="hero__mark"
        src="./assets/logos/cali-couture-mark-white.svg"
        alt=""
        aria-hidden="true"
      />

      <div className="hero__inner container">
        <div className="hero__meta">
          <span className="mono-label">DROP_001</span>
          <span className="mono-label">PREORDER_WINDOW / 14 DAYS</span>
          <span className="mono-label">SYSTEM / CALI_COUTURE</span>
        </div>

        <h1 className="hero__headline display-xl">
          FOUNDATION
          <br />
          001
        </h1>

        <div ref={artRef} className="hero__art">
          <img
            src="./assets/products/foundation-black-front.png"
            alt="FOUNDATION TEE, Charcoal, Vorderansicht"
            className="hero__shirt"
            fetchPriority="high"
          />
        </div>

        <div className="hero__foot">
          <p className="body-l hero__tagline">
            BUILT BETWEEN STREET &amp; MOVEMENT.
            <br />
            QUIET FRONT. LOUD BACK.
          </p>
          <a href="#drop" className="btn btn-primary">
            EXPLORE DROP
          </a>
        </div>
      </div>

      <div className="hero__scroll mono-label" aria-hidden="true">
        SCROLL
      </div>
    </section>
  );
}
