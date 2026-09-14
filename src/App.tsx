import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Campaign from "./components/Campaign";
import ProductViewer from "./components/ProductViewer";
import Lookbook from "./components/Lookbook";
import Sound from "./components/Sound";
import PreorderProcess from "./components/PreorderProcess";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  const [bagCount, setBagCount] = useState(0);

  return (
    <div className="no-overflow-guard">
      <Header bagCount={bagCount} />
      <main>
        <Hero />
        <Campaign />
        <ProductViewer onPreorder={() => setBagCount((c) => c + 1)} />
        <Lookbook />
        <Sound />
        <PreorderProcess />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
