export {};

declare global {
  interface GPagination {
    page: number;
    count: number;
    pages?: number;
    limit?: number;
    siblingCount?: number;
    prevPage?: number | null;
    nextPage?: number | null;
  }
}
