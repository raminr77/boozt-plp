export {};

declare global {
  interface GProduct {
    id: GID;
    title: string;
    gender: string;
    imageUrl: string;
    brandName: string;
    isActive: boolean;
    sizeDetail: string;
    colorDetail: string;
    availableSizes: string;

    prices: GPrice;
  }
}
