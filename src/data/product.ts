export type ProductColor = "charcoal" | "sand";
export type ProductSide = "front" | "back";
export type Size = "XS" | "S" | "M" | "L" | "XL";

export const SIZES: Size[] = ["XS", "S", "M", "L", "XL"];

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

export const COLOR_META: Record<ProductColor, { label: string; swatch: string }> = {
  charcoal: { label: "CHARCOAL", swatch: "#2b2c2d" },
  sand: { label: "SAND", swatch: "#b9a87d" },
};

export const PRODUCT = {
  drop: "DROP_001",
  name: "FOUNDATION TEE",
  collection: "FOUNDATION 001",
  priceCents: 4990,
  laterPriceCents: 5990,
  currency: "EUR",
  fit: "OVERSIZED",
  weight: "HEAVYWEIGHT / TBC GSM",
  frontDetail: "WORDMARK / LEFT CHEST",
  backDetail: "CC LINK MARK / CENTER BACK",
  production: "PREORDER",
};

export function formatPrice(cents: number, currency = "EUR") {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency,
  }).format(cents / 100);
}

export const MODEL_IMAGES: { src: string; alt: string; label: string }[] = [
  {
    src: "./assets/model/model-black-front.webp",
    alt: "Model trägt FOUNDATION TEE in Charcoal, Vorderansicht",
    label: "ON_BODY / FRONT",
  },
  {
    src: "./assets/model/model-black-back.webp",
    alt: "Model trägt FOUNDATION TEE in Charcoal, Rückansicht",
    label: "ON_BODY / BACK",
  },
];

export const PLAYLISTS = [
  {
    title: "Cali Couture Vibes",
    url: "https://open.spotify.com/playlist/2Xl7vPuiW9l8qLJ7162ma6",
    tag: "PLAYLIST_01",
  },
  {
    title: "Cooking Couture",
    url: "https://open.spotify.com/playlist/2VPt838tyGbMo0UHW1Gaj8",
    tag: "PLAYLIST_02",
  },
];
