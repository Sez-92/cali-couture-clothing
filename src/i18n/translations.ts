export type Language = "de" | "en";

type Translation = {
  viewer: {
    selectSize: string;
    added: string;
    preorderPrefix: string;
    fineprint: string;
    colorLabel: string;
    sizeLabel: string;
    viewLabel: string;
  };
  preorder: {
    lede: string;
    sizeGuide: string;
    fitHint: string;
    tableHeaders: { size: string; chest: string; length: string };
    tableFineprint: string;
    returns: string;
    returnsText: string;
  };
  faq: {
    heading: string;
    items: { q: string; a: string }[];
  };
};

export const translations: Record<Language, Translation> = {
  de: {
    viewer: {
      selectSize: "GRÖSSE WÄHLEN",
      added: "HINZUGEFÜGT",
      preorderPrefix: "PREORDER —",
      fineprint: "Wird gefertigt, sobald der Drop schließt.",
      colorLabel: "Farbe wählen",
      sizeLabel: "Größe wählen",
      viewLabel: "Ansicht wechseln",
    },
    preorder: {
      lede: "Produktion beginnt, sobald der Preorder-Zeitraum endet. Versand erfolgt nach Fertigstellung.",
      sizeGuide: "Size Guide",
      fitHint: "Lockere, oversized Passform.",
      tableHeaders: { size: "SIZE", chest: "BRUST (FLACH)", length: "LÄNGE" },
      tableFineprint: "Richtwerte, relaxed oversized Schnitt, ± 1–2 cm möglich.",
      returns: "Rückgabe",
      returnsText:
        "14-tägiges Widerrufsrecht ab Erhalt der Ware. Rücksendekosten trägt der Kunde. Größentausch nach Verfügbarkeit.",
    },
    faq: {
      heading: "FAQ",
      items: [
        {
          q: "Wann wird geliefert?",
          a: "Nach Ende des Preorder-Zeitraums startet die Produktion. Versand erfolgt, sobald die Ware fertiggestellt ist.",
        },
        {
          q: "Wie fällt die Passform aus?",
          a: "Relaxed oversized. Die Größentabelle findest du im Size Guide.",
        },
        {
          q: "Kann ich meine Bestellung zurückgeben?",
          a: "14-tägiges Widerrufsrecht ab Erhalt der Ware. Rücksendekosten trägt der Kunde.",
        },
        {
          q: "Woraus besteht das Shirt?",
          a: "100% cotton.",
        },
      ],
    },
  },
  en: {
    viewer: {
      selectSize: "SELECT SIZE",
      added: "ADDED",
      preorderPrefix: "PREORDER —",
      fineprint: "Made after the drop closes.",
      colorLabel: "Select colour",
      sizeLabel: "Select size",
      viewLabel: "Switch view",
    },
    preorder: {
      lede: "Production begins once the preorder window closes. Shipping follows once the item is made.",
      sizeGuide: "Size Guide",
      fitHint: "Relaxed oversized fit.",
      tableHeaders: { size: "SIZE", chest: "CHEST (FLAT)", length: "LENGTH" },
      tableFineprint: "Approximate, relaxed oversized fit, ± 1–2 cm possible.",
      returns: "Returns",
      returnsText:
        "14-day right of withdrawal from receipt of goods. Return shipping is covered by the customer. Size exchange subject to availability.",
    },
    faq: {
      heading: "FAQ",
      items: [
        {
          q: "When will my order ship?",
          a: "Production begins once the preorder window closes. Shipping follows once the item is made.",
        },
        {
          q: "How does the fit run?",
          a: "Relaxed oversized. See the size guide for measurements.",
        },
        {
          q: "Can I return my order?",
          a: "14-day right of withdrawal from receipt of goods. Return shipping is covered by the customer.",
        },
        {
          q: "What is the shirt made from?",
          a: "100% cotton.",
        },
      ],
    },
  },
};
