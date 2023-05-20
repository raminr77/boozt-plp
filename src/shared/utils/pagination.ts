import { PAGINATION_DATA } from 'shared/constants/pagination';

export const calculatePageItemsCount = (page: number): string => {
  const currentSize = PAGINATION_DATA.PAGE_SIZE * page;
  return `[ ${currentSize - PAGINATION_DATA.PAGE_SIZE + 1} to ${currentSize} ]`;
};
