export const isEmpty = (arr: any[] = []): boolean => {
  return Array.isArray(arr) && !arr.length;
};
