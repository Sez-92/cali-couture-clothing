import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import DropPage from "./pages/DropPage";
import { LanguageProvider } from "./i18n/LanguageContext";
import { useHashRoute } from "./router/useHashRoute";

export default function App() {
  const [bagCount, setBagCount] = useState(0);
  const [route] = useHashRoute();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  return (
    <LanguageProvider>
      <div className="no-overflow-guard">
        <Header bagCount={bagCount} />
        {route === "about" ? (
          <AboutPage />
        ) : (
          <DropPage onPreorder={() => setBagCount((c) => c + 1)} />
        )}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
