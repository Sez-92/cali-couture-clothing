export type ProductColor = "charcoal" | "sand";
export type ProductSide = "front" | "back";
export type Size = "XS" | "S" | "M" | "L" | "XL";
export type Cut = "boxy" | "cropped";

export const SIZES: Size[] = ["XS", "S", "M", "L", "XL"];
export const CUTS: Cut[] = ["boxy", "cropped"];

export const CUT_META: Record<Cut, { label: string }> = {
  boxy: { label: "BOXY" },
  cropped: { label: "CROPPED" },
};

export const PRODUCT_IMAGES: Record<ProductColor, Record<ProductSide, string>> = {
  charcoal: {
    front: "./assets/products/foundation-black-front.png",
    back: "./assets/products/foundation-black-back.png",
  },
  sand: {
    front: "./assets/products/foundation-sand-front.png",
    back: "./assets/products/foundation-sand-back.png",
  },
};

export const PRODUCT_INSIDE_IMAGES: Record<ProductColor, string> = {
  charcoal: "./assets/products/foundation-charcoal-inside-neck.png",
  sand: "./assets/products/foundation-sand-inside-neck.png",
};

export const COLOR_META: Record<ProductColor, { label: string; swatch: string }> = {
  charcoal: { label: "CHARCOAL", swatch: "#2b2c2d" },
  sand: { label: "SAND", swatch: "#b9a87d" },
};

export const PRODUCT = {
  drop: "DROP N°01",
  name: "THE FORM",
  material: "100% cotton",
  priceCents: 4990,
  laterPriceCents: 5990,
  currency: "EUR",
  fit: "Relaxed oversized",
};

export function formatPrice(cents: number, currency = "EUR") {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency,
  }).format(cents / 100);
}

export const MODEL_IMAGES: { src: string; alt: string; label: string }[] = [
  {
    src: "./assets/model/mannequin-boxy.webp",
    alt: "Zwei neutrale Schaufensterfiguren präsentieren THE FORM in Charcoal und Sand im lockeren Boxy Fit",
    label: "BOXY",
  },
  {
    src: "./assets/model/mannequin-fitted.webp",
    alt: "Zwei neutrale Schaufensterfiguren präsentieren eine körpernähere Cali Couture Silhouette",
    label: "FITTED",
  },
  {
    src: "./assets/model/mannequin-workspace.webp",
    alt: "Neutrale Schaufensterfigur trägt THE FORM in Charcoal an einem reduzierten Arbeitsplatz",
    label: "WORK",
  },
  {
    src: "./assets/model/mannequin-cafe.webp",
    alt: "Neutrale Schaufensterfigur trägt das sandfarbene Cropped Shirt mit großem CC auf dem Rücken im Café",
    label: "CAFÉ",
  },
  {
    src: "./assets/model/mannequin-park.webp",
    alt: "Neutrale Schaufensterfigur trägt Cali Couture im Calisthenics Park",
    label: "PARK",
  },
];

export const PLAYLISTS = [
  {
    title: "Cali Couture Vibes",
    url: "https://open.spotify.com/playlist/2Xl7vPuiW9l8qLJ7162ma6",
  },
  {
    title: "Cooking Couture",
    url: "https://open.spotify.com/playlist/2VPt838tyGbMo0UHW1Gaj8",
  },
];
