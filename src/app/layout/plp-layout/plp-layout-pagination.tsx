import { clsx } from 'clsx';
import { PAGINATION_DATA } from 'shared/constants/pagination';
import { DOTS, usePagination } from 'shared/hooks/use-pagination';
import { isEmpty } from 'shared/utils/is-empty';

interface Props extends GCommonCompnentProperties {
  pagination: GPagination;
  onPageChange: (value: number) => void;
}
export function PlpLayoutPagination({ onPageChange, pagination }: Props) {
  const { page, count, limit } = pagination || {};

  const paginationRange = usePagination(pagination);
  const lastPage = +paginationRange[paginationRange.length - 1];

  const paginationLimit = limit || PAGINATION_DATA.PAGE_SIZE;
  const numberButtonClasses =
    'outline-none leading-10 rounded-lg px-3 text-sm duration-300';
  const buttonClasses =
    'outline-none bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-700 leading-10 rounded-lg px-3 text-sm duration-300';

  if (count <= paginationLimit || isEmpty(Object.keys(pagination))) {
    return null;
  }

  return (
    <div className='flex items-center justify-center mb-10 mt-5 gap-x-2 scale-75 sm:scale-100'>
      <button
        onClick={() => onPageChange(page - 1 > 0 ? page - 1 : 1)}
        className={clsx(buttonClasses, {
          'pointer-events-none opacity-30': page === 1
        })}
      >
        Prev
      </button>

      {paginationRange.map((pageNumber: string | number, index: number) => {
        if (pageNumber.toString() === DOTS) {
          return (
            <div
              key={`${pageNumber}_${index}`}
              className='p-2 flex items-center leading-7'
            >
              {DOTS}
            </div>
          );
        }
        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(+pageNumber)}
            className={clsx(numberButtonClasses, {
              'bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-700':
                page !== pageNumber,
              'hover:bg-red-500 dark:hover:bg-red-500 bg-red-500 dark:bg-red-500 font-bold text-white pointer-events-none':
                page === pageNumber
            })}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(page + 1 > lastPage ? lastPage : page + 1)}
        className={clsx(buttonClasses, {
          'pointer-events-none opacity-30': lastPage === page
        })}
      >
        Next
      </button>
    </div>
  );
}
