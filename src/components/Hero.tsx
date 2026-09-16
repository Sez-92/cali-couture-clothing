import { useEffect, useRef } from "react";
import { PRODUCT } from "../data/product";
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
      <div className="hero__inner container">
        <div className="hero__copy">
          <span className="display-m hero__drop">{PRODUCT.drop}</span>
          <h1 className="hero__headline display-xl">{PRODUCT.name}</h1>
          <p className="hero__sub">Made to move.</p>
        </div>

        <div ref={artRef} className="hero__art">
          <img
            src="./assets/products/foundation-black-front.png"
            alt="THE FORM, Charcoal, Vorderansicht"
            className="hero__shirt"
            fetchPriority="high"
          />
        </div>

        <a href="#product" className="btn btn-primary hero__cta">
          SHOP THE DROP
        </a>
      </div>
    </section>
  );
}
