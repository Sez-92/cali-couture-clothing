import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <img
          src="./assets/logos/cali-couture-wordmark-white.svg"
          alt="Cali Couture"
          className="footer__wordmark"
        />

        <nav className="footer__links" aria-label="Footer">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="#faq">Impressum</a>
          <a href="#faq">Datenschutz</a>
        </nav>
      </div>
    </footer>
  );
}
