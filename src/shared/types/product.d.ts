export {};

declare global {
  interface GProduct {
    id: GID;
    index: number;
    filename: string;
    brand_name: string;
    base_price: string;
    product_name: string;
    actual_price: string;
  }
}
