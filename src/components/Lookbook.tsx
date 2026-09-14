import { useEffect, useRef, useState } from "react";
import { MODEL_IMAGES } from "../data/product";
import "./Lookbook.css";

export default function Lookbook() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const count = MODEL_IMAGES.length;
  const goto = (i: number) => setIndex(((i % count) + count) % count);
  const next = () => goto(index + 1);
  const prev = () => goto(index - 1);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [index]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      delta < 0 ? next() : prev();
    }
    touchStartX.current = null;
  }

  const current = MODEL_IMAGES[index];

  return (
    <section id="lookbook" className="lookbook" aria-label="Lookbook">
      <div
        className="lookbook__stage"
        ref={sectionRef}
        tabIndex={0}
        role="group"
        aria-roledescription="Bildkarussell"
        aria-label="On-Body Lookbook"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img key={current.src} src={current.src} alt={current.alt} className="lookbook__img" />

        <button type="button" className="lookbook__nav lookbook__nav--prev" onClick={prev} aria-label="Vorheriges Bild">
          <ArrowIcon direction="left" />
        </button>
        <button type="button" className="lookbook__nav lookbook__nav--next" onClick={next} aria-label="Nächstes Bild">
          <ArrowIcon direction="right" />
        </button>
      </div>

      <div className="container">
        <div className="lookbook__dots" role="tablist" aria-label="Bild wählen">
          {MODEL_IMAGES.map((img, i) => (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={img.label}
              className={`lookbook__dot ${i === index ? "is-active" : ""}`}
              onClick={() => goto(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
