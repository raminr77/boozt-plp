import clsx from 'clsx';
import { PAGINATION_DATA } from 'shared/constants/pagination';

interface Props extends GCommonCompnentProperties {
  length?: number;
  pagination: GPagination;
}

export function PlpLayoutItemsCounter({ length, pagination, className }: Props) {
  const { page } = pagination || {};
  const currentItemsNumber = `[ ${
    PAGINATION_DATA.PAGE_SIZE * page - PAGINATION_DATA.PAGE_SIZE + 1
  } to ${PAGINATION_DATA.PAGE_SIZE * page} ]`;

  return (
    <p className={clsx('text-sm text-gray-700 dark:text-gray-300', className)}>
      <span className='font-bold'>{`${currentItemsNumber} - ${length}`}</span>
      &nbsp;Products
    </p>
  );
}
