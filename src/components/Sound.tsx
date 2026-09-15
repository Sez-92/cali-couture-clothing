import { PLAYLISTS } from "../data/product";
import "./Sound.css";

export default function Sound() {
  return (
    <section id="sound" className="sound">
      <div className="container">
        <div className="section-head">
          <h2 className="display-l">CALI SOUND</h2>
        </div>

        <div className="sound__grid">
          {PLAYLISTS.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="sound__card"
            >
              <div className="sound__card-art" aria-hidden="true">
                <img src="./assets/logos/cali-couture-mark-white.svg" alt="" />
              </div>
              <div className="sound__card-body">
                <h3 className="display-m sound__card-title">{p.title}</h3>
                <span className="sound__card-cta">
                  OPEN ON SPOTIFY
                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                    <path
                      d="M7 17 17 7M17 7H9M17 7v8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
