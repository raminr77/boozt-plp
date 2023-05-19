import { PAGINATION_DATA } from 'shared/constants/pagination';

export function PlpLayoutItemsCounter({
  length,
  pagination
}: {
  length?: number;
  pagination: GPagination;
}) {
  const { page } = pagination || {};
  const currentItemsNumber = `[ ${
    PAGINATION_DATA.PAGE_SIZE * page - PAGINATION_DATA.PAGE_SIZE + 1
  } to ${PAGINATION_DATA.PAGE_SIZE * page} ]`;
  return length ? (
    <p className='text-sm text-gray-700 dark:text-gray-300'>
      <span className='font-bold'>{`${currentItemsNumber} - ${length}`}</span> Products
    </p>
  ) : null;
}
