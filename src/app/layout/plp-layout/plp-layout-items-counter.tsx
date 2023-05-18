import { PAGINATION_DATA } from 'shared/constants/pagination';

export function PlpLayoutItemsCounter({
  length,
  pagination
}: {
  length?: number;
  pagination: GPagination;
}) {
  const { page } = pagination || {};
  const currentItemsNumber = `[ ${PAGINATION_DATA.PAGE_SIZE * page - 11} to ${
    PAGINATION_DATA.PAGE_SIZE * page
  } ]`;
  return length ? (
    <p className='text-sm text-gray-400'>
      <span className='font-bold'>{`${currentItemsNumber} - ${length}`}</span> Products
    </p>
  ) : null;
}
