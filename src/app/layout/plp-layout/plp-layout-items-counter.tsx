import clsx from 'clsx';
import { EMPTY_OBJECT } from 'shared/constants/objects';
import { calculatePageItemsCount } from 'shared/utils/pagination';

interface Props extends GCommonCompnentProperties {
  length?: number;
  pagination: GPagination;
}

export function PlpLayoutItemsCounter({ length, pagination, className }: Props) {
  const { page } = pagination || EMPTY_OBJECT;
  const currentItemsNumber = calculatePageItemsCount(page);

  return (
    <p className={clsx('text-sm text-gray-700 dark:text-gray-300', className)}>
      <span className='font-bold'>{`${currentItemsNumber} - ${length}`}</span>
      &nbsp;Products
    </p>
  );
}
