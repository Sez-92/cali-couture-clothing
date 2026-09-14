# Cali Couture — Design-Prinzipien

Jede Designentscheidung auf dieser Seite wird gegen diese Ecommerce-Prinzipien bewertet:

1. Keep it simple
2. Express the brand
3. Make navigation intuitive
4. Design from the customer's perspective
5. Prioritize high-quality product imagery
6. Maintain a professional and trustworthy appearance
7. Add social proof only when real content is available (keine erfundenen Reviews/Zitate — Platz darf reserviert werden)
8. Keep the purchase / preorder path as short and clear as possible

## PRODUCT FIRST

Fokus liegt immer zuerst auf dem Produkt. Entfernen, was vom Produkt ablenkt, keinen Kaufnutzen hat, Infos wiederholt, rein dekorativ ist, oder wie ein technisches Showcase statt wie ein Shop wirkt.

Inhalts-Priorität (gilt für Reihenfolge innerhalb einer Section, besonders bei Mobile-Stacking):

1. Produktbild
2. Produktname
3. Preis
4. Farbe
5. Größe
6. Preorder-CTA
7. Fit / Material
8. Versand / Retouren

Erst danach: Brand Story, Editorial Content, sonstige Inhalte.

Die Marke kommuniziert über Fotografie, Typografie, Farben, Materialität, Logo, Spacing — nicht über viel Text.

## Ausnahme: technisches Grid im Produktbereich

Das feine Hintergrund-Grid in Hero (`.hero`, erstes Shirt ganz oben) und Product-Viewer-Section (`.viewer-section`) ist bewusstes Markenelement und bleibt:

- sehr fein, geringe Deckkraft, in den warmen Greige-/Mineral-Hintergrund integriert
- keine harte technische UI-Wirkung, keine zusätzlichen Labels deswegen
- Shirt bleibt klar im Mittelpunkt (Grid tritt hinter dem Licht-Halo um das Produkt zurück)

Regel: nicht "alles Dekorative entfernen", sondern "alles entfernen, was nicht zur Marke beiträgt". Das Grid trägt zur Marke bei.

## Checkout / Preorder

So wenige Schritte wie möglich, CTA immer eindeutig, keine verwirrenden Zwischenschritte. Mobile (375px) muss den Kaufprozess genauso klar abbilden wie Desktop (1440px).

## Workflow

Alle Änderungen zuerst lokal testen (1440 / 768 / 375px) und per `npm run build` verifizieren. Nicht committen oder pushen, bevor der User die Preview freigegeben hat.
