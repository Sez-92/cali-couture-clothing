import { useState, type CSSProperties } from "react";
import "./PrelaunchPage.css";

type Shot = { image: string; alt: string; fullProduct?: boolean };

const shirts: Shot[] = [
  { image: "../products/foundation-black-front.png", alt: "Ganzes Cali Couture T-Shirt in Anthrazit mit kleinem Brustprint", fullProduct: true },
  { image: "../products/foundation-sand-front.png", alt: "Ganzes Cali Couture T-Shirt in Sand mit kleinem Brustprint", fullProduct: true },
  { image: "tshirt-print.webp", alt: "Sandfarbener CC-Print auf einem gewaschenen anthrazitfarbenen T-Shirt" },
  { image: "tshirt-seam.webp", alt: "Nahaufnahme von Ärmel und Nähten des anthrazitfarbenen T-Shirts" },
  { image: "tshirt-charcoal.webp", alt: "Cali Couture T-Shirt mit großem sandfarbenem CC-Print" },
];
const hoodies: Shot[] = [
  { image: "hoodie-chocolate-embroidery.webp", alt: "Brauner Hoodie mit kleinem gesticktem CC auf der Brust" },
  { image: "hoodie-ivory-backprint.webp", alt: "Elfenbeinfarbener Hoodie mit Cali Couture Backprint" },
  { image: "hoodie-fabric-details.webp", alt: "Bündchen und Stoffdetails der braunen und elfenbeinfarbenen Hoodies" },
];

function Detail({ name, shots }: { name: string; shots: Shot[] }) {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  function next() { setReady(false); setIndex(current => (current + 1) % shots.length); }
  return (
    <figure className="drop-detail">
      <button className={`drop-photo${shots[index].fullProduct ? " drop-photo-full" : ""}`} onClick={next} aria-label={`Nächstes Bild ansehen — ${name}, Bild ${index + 1} von ${shots.length}`}>
        <img key={shots[index].image} src={`./assets/prelaunch/${shots[index].image}`} alt={shots[index].alt} onLoad={() => setReady(true)} fetchPriority="high" />
        {ready && <span className="drop-reveal" key={index} aria-hidden="true">{Array.from({ length: 64 }, (_, i) => <i key={i} style={{ "--delay": `${((i * 19) % 64) * 5}ms` } as CSSProperties} />)}</span>}
      </button>
      <figcaption><span>{name}</span><button onClick={next} aria-label={`Nächstes Detail — ${name}`}><span className="drop-count" aria-live="polite">{String(index + 1).padStart(2, "0")} / {String(shots.length).padStart(2, "0")}</span><span aria-hidden="true">→</span></button></figcaption>
    </figure>
  );
}

export default function PrelaunchPage() {
  return (
    <div className="drop-teaser">
      <header className="drop-header">
        <a href="#/" aria-label="Cali Couture — Startseite"><img src="./assets/logos/cali-couture-wordmark.svg" alt="Cali Couture" width="170" height="42" /></a>
      </header>
      <main className="drop-main">
        <div className="drop-gallery" aria-label="Einblicke in T-Shirts und Hoodies">
          <Detail name="T-Shirts" shots={shirts} />
          <Detail name="Hoodies" shots={hoodies} />
        </div>
        <div className="drop-message">
          <h1>First drop soon</h1>
          <a className="drop-instagram" href="https://www.instagram.com/calicouture.clothing/" target="_blank" rel="noopener noreferrer">Follow on Instagram <span aria-hidden="true">↗</span></a>
        </div>
      </main>
      <footer className="drop-footer"><span>© {new Date().getFullYear()} Cali Couture</span><a href="mailto:hello@calicouture.clothing">Contact</a></footer>
    </div>
  );
}
