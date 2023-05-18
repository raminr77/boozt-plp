export {};

declare global {
  interface GPrice {
    basePrice: number;
    actualPrice: number;
    discountPrice: number;
    discountPercent: number;
  }
}
