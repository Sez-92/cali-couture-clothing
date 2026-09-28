import { useState, type CSSProperties } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import "./PrelaunchPage.css";

export default function PrelaunchPage() {
  const { language, setLanguage } = useLanguage();
  const [reveal, setReveal] = useState(0);
  const instagramUrl = "https://www.instagram.com/calicouture.clothing/";
  const socialUrl = instagramUrl || "mailto:hello@calicouture.clothing";
  const en = language === "en";
  function focusFollow() {
    document.getElementById("follow-the-drop")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    document.getElementById("follow-link")?.focus({ preventScroll: true });
  }
  return (
    <div className="prelaunch">
      <a className="pl-skip" href="#follow-the-drop">{en ? "Skip to the drop" : "Zum Drop"}</a>
      <header className="pl-header">
        <a href="#/" aria-label="Cali Couture — Home"><img className="pl-wordmark" src="./assets/logos/cali-couture-wordmark-white.svg" alt="Cali Couture" /></a>
        <span className="pl-header-note">INDEPENDENT / IN MOTION</span>
        <div className="pl-header-actions">
          <button className="pl-language" onClick={() => setLanguage(en ? "de" : "en")} aria-label={en ? "Auf Deutsch wechseln" : "Switch to English"}>{en ? "DE" : "EN"}</button>
          <button className="pl-header-cta" onClick={focusFollow}>FOLLOW THE DROP <span aria-hidden="true">↗</span></button>
        </div>
      </header>
      <main>
        <section className="pl-hero" aria-labelledby="pl-title">
          <div className="pl-art">
            <img className="pl-hero-photo" src="./assets/prelaunch/hoodie-chocolate-embroidery.webp" alt={en ? "Chocolate hoodie with embroidered CC chest logo" : "Schokoladenbrauner Hoodie mit gesticktem CC auf der Brust"} fetchPriority="high" />
            <div className="pl-pixel-reveal" key={reveal} aria-hidden="true">{Array.from({ length: 144 }, (_, i) => <span key={i} style={{ "--pixel-delay": `${((i * 37) % 144) * 7}ms`, "--pixel-tone": ["#28261f", "#403a30", "#635644", "#8b7960", "#b29c7d"][i % 5] } as CSSProperties} />)}</div>
            <div className="pl-art-shade" />
            <div className="pl-art-top"><span className="pl-eyebrow">CALI COUTURE</span><span className="pl-eyebrow">DROP N°01 / FIRST LOOK</span></div>
            <div className="pl-title-wrap"><p className="pl-eyebrow">{en ? "A new form of everyday" : "Für Bewegung und jeden Tag"}</p><h1 id="pl-title">FIRST DROP<br /><span>SOON</span></h1></div>
            <div className="pl-art-bottom"><button className="pl-replay" onClick={() => setReveal(n => n + 1)} aria-label={en ? "Replay pixel reveal" : "Pixel-Reveal erneut abspielen"}>REVEAL AGAIN <span aria-hidden="true">↻</span></button><button onClick={focusFollow} aria-label={en ? "Follow the drop" : "Zum Drop"}>↓</button></div>
          </div>
          <div className="pl-access" id="follow-the-drop">
            <div className="pl-access-top"><span className="pl-eyebrow">BEFORE THE DROP</span><img src="./assets/logos/cali-couture-mark.svg" alt="" width="52" height="52" /></div>
            <div className="pl-access-main">
              <p className="pl-eyebrow pl-edition">THE FIRST CHAPTER / 001</p>
              <h2>{en ? <>YOU’RE<br />EARLY</> : <>DU BIST<br />FRÜH DRAN</>}</h2>
              <p className="pl-description">{en ? "The first chapter is taking shape — between movement and everyday life" : "Das erste Kapitel nimmt Form an — zwischen Bewegung und Alltag"}</p>
              <div className="pl-drop-note"><span className="pl-drop-number">01</span><p>{en ? <>First details<br />More to come</> : <>Erste Einblicke<br />Mehr kommt bald</>}</p></div>
              <a className="pl-follow-link" id="follow-link" href={socialUrl} {...(instagramUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{instagramUrl ? (en ? "FOLLOW ON INSTAGRAM" : "AUF INSTAGRAM FOLGEN") : (en ? "GET IN TOUCH" : "SCHREIB UNS")}<span aria-hidden="true">↗</span></a>
              <p className="pl-follow-note">{instagramUrl ? (en ? "Details, previews & news about the first drop" : "Details, Previews & News zum ersten Drop") : "hello@calicouture.clothing"}</p>
            </div>
            <div className="pl-access-bottom"><span className="pl-eyebrow">{en ? "IN THE MAKING / STAY CLOSE" : "IN ARBEIT / BLEIB DABEI"}</span><span aria-hidden="true">✳</span></div>
          </div>
        </section>
        <div className="pl-brandline" aria-label="Made to move / Built for everyday"><span>MADE TO MOVE</span><span className="pl-brandline-star" aria-hidden="true">✳</span><span>BUILT FOR EVERYDAY</span><span className="pl-brandline-star" aria-hidden="true">✳</span><span className="pl-brandline-last">CALI COUTURE</span></div>
        <section className="pl-preview" aria-labelledby="pl-preview-title">
          <div className="pl-preview-heading"><p className="pl-eyebrow">A FIRST LOOK / 001</p><h2 id="pl-preview-title">IN THE DETAILS</h2><p>{en ? "Born in movement, at home in everyday life" : "Aus Bewegung entstanden, im Alltag zuhause"}</p></div>
          <div className="pl-editorial-grid pl-detail-grid">
            <figure><img src="./assets/prelaunch/hoodie-chocolate-embroidery.webp" alt={en ? "Embroidered CC on the chocolate hoodie" : "Gesticktes CC auf dem schokoladenbraunen Hoodie"} loading="lazy" /><figcaption><span>01 / THE STITCH</span><span>CHOCOLATE</span></figcaption></figure>
            <figure><img src="./assets/prelaunch/hoodie-ivory-backprint.webp" alt={en ? "Cali Couture backprint on the ivory hoodie" : "Cali-Couture-Rückenprint auf dem elfenbeinfarbenen Hoodie"} loading="lazy" /><figcaption><span>02 / THE BACKPRINT</span><span>IVORY</span></figcaption></figure>
            <figure><img src="./assets/prelaunch/hoodie-fabric-details.webp" alt={en ? "Hoodie cuffs and fabric details in chocolate and ivory" : "Bündchen und Stoffdetails der Hoodies in Schoko und Elfenbein"} loading="lazy" /><figcaption><span>03 / THE TEXTURE</span><span>CHOCOLATE + IVORY</span></figcaption></figure>
          </div>
        </section>
      </main>
      <footer className="pl-footer"><img src="./assets/logos/cali-couture-wordmark-white.svg" alt="Cali Couture" /><span>© {new Date().getFullYear()} CALI COUTURE</span><a href="#/about">ABOUT CC ↗</a></footer>
    </div>
  );
}
