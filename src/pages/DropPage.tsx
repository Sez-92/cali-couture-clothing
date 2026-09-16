import Hero from "../components/Hero";
import Campaign from "../components/Campaign";
import ProductViewer from "../components/ProductViewer";
import Lookbook from "../components/Lookbook";
import PreorderProcess from "../components/PreorderProcess";
import Faq from "../components/Faq";

export default function DropPage({ onPreorder }: { onPreorder: () => void }) {
  return (
    <main>
      <Hero />
      <Campaign />
      <ProductViewer onPreorder={onPreorder} />
      <Lookbook />
      <PreorderProcess />
      <Faq />
    </main>
  );
}
