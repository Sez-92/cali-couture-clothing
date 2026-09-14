import { PLAYLISTS } from "../data/product";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img
            src="./assets/logos/cali-couture-wordmark-web.png"
            alt="Cali Couture"
            className="footer__wordmark"
          />
          <img
            src="./assets/logos/cali-couture-mark-web.png"
            alt=""
            aria-hidden="true"
            className="footer__mark"
          />
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <span className="mono-label">NAVIGATE</span>
            <a href="#drop">Drop</a>
            <a href="#lookbook">Lookbook</a>
            <a href="#sound">Sound</a>
            <a href="#preorder">Preorder</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="footer__col">
            <span className="mono-label">INFO</span>
            <a href="#faq">Imprint</a>
            <a href="#faq">Privacy</a>
            <a href="#preorder">Returns</a>
          </div>

          <div className="footer__col">
            <span className="mono-label">FOLLOW</span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            {PLAYLISTS.map((p) => (
              <a key={p.url} href={p.url} target="_blank" rel="noopener noreferrer">
                {p.title}
              </a>
            ))}
          </div>
        </div>

        <div className="chrome-rule footer__rule" />

        <div className="footer__bottom">
          <span className="mono-label">© {new Date().getFullYear()} CALI COUTURE</span>
          <span className="mono-label">SYSTEM / CALI_COUTURE</span>
        </div>
      </div>
    </footer>
  );
}
