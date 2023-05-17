import classNames from 'classnames';

interface Props extends GCommonCompnentProperties {
  page: number;
  lastPage: number;
  onPageChange: (value: number) => void;
}
export function PlpLayoutPagination({ onPageChange, page, lastPage }: Props) {
  const buttonClasses =
    'outline-none bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-900 leading-10 rounded-lg px-3 text-sm duration-300';
  return (
    <div className='flex items-center justify-center mb-10 mt-5 gap-x-2'>
      <button
        onClick={() => onPageChange(page - 1 > 0 ? page - 1 : 1)}
        className={classNames(buttonClasses, {
          'pointer-events-none opacity-30': page === 1
        })}
      >
        Prev
      </button>

      {[1, 2, 3, 4, 5].map((item) => (
        <button
          key={item}
          onClick={() => onPageChange(item)}
          className={classNames(buttonClasses, {
            'hover:bg-red-500 dark:hover:bg-red-500 bg-red-500 dark:bg-red-500 font-bold text-white':
              page === item
          })}
        >
          {item}
        </button>
      ))}

      <button
        onClick={() => onPageChange(page + 1 > lastPage ? lastPage : page + 1)}
        className={classNames(buttonClasses, {
          'pointer-events-none opacity-30': lastPage === page
        })}
      >
        Next
      </button>
    </div>
  );
}
