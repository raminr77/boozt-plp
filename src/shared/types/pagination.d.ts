export {};

declare global {
  interface GPagination {
    page: number;
    pageSize?: number;
    totalCount: number;
    siblingCount?: number;
  }
}
