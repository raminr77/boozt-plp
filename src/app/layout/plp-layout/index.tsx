import { useState } from 'react';

import classNames from 'classnames';
import { ProductCard } from 'shared/components/product-card';
import { useScrollPosition } from 'shared/hooks/use-scroll-position';
import { animator } from 'shared/utils/animator';
import { debounce } from 'shared/utils/debounce';

import { PlpLayoutLoading } from './plp-layout-loading';
import { PlpLayoutPagination } from './plp-layout-pagination';
import { PlpLayoutSort } from './plp-layout-sort';
import styles from './plp-layout.module.scss';

interface Props extends GCommonCompnentProperties {
  page?: number;
  title: string;
  length: number;
  loading?: boolean;
  lastPage?: number;
  products: GProduct[];
  defaultSortId?: number;
  onSearch: (value: string) => void;
  onPageChange: (value: number) => void;
  onSortChange: (value: number) => void;
}

export function PlpLayout({
  title,
  page = 1,
  products,
  onSearch,
  length = 0,
  lastPage = 1,
  onPageChange,
  onSortChange,
  loading = false,
  defaultSortId = 1
}: Props) {
  const [showStickySort, setShowStickySort] = useState(false);

  const searchAction = debounce(onSearch);

  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = -1 * currPos.y > 300;
    if (isShow !== showStickySort && prevPos.y !== currPos.y) {
      setShowStickySort(isShow);
    }
  });

  return (
    <section>
      <h1
        className={classNames(
          'font-bold text-center text-3xl mb-5',
          animator({ name: 'fadeInUp' })
        )}
      >
        {title}
      </h1>

      <div className='w-full flex flex-col items-center justify-center mb-2 gap-y-12'>
        <input
          type='text'
          onChange={(e) => searchAction(e.target.value)}
          placeholder='Search For What You Like In Boozt ...'
          className='text-center text-xl outline-none border-b bg-transparent dark:text-white focus:border-black dark:focus:border-white duration-500 leading-10 border-solid w-full max-w-xl border-gray-200 dark:border-gray-600'
        />

        <div className='w-full flex items-center justify-between'>
          <PlpLayoutSort defaultSortId={defaultSortId} onSortChange={onSortChange} />
          {length && (
            <p className='text-sm text-gray-400'>
              <span className='font-bold'>{length}</span> Products
            </p>
          )}
        </div>
      </div>

      {showStickySort && (
        <div
          className={classNames(
            'w-full flex items-center bg-gray-100 dark:bg-gray-700 justify-between fixed max-w-screen-2xl mx-auto z-20 left-0 right-0 top-0 px-5 py-3 shadow-lg',
            animator({ name: 'fadeInDown' })
          )}
        >
          <PlpLayoutSort defaultSortId={defaultSortId} onSortChange={onSortChange} />
          {length && (
            <p className='text-sm text-gray-400'>
              <span className='font-bold'>{length}</span> Products
            </p>
          )}
        </div>
      )}

      <div
        className={classNames(
          'overflow-hidden w-full border border-solid border-gray-100 dark:border-gray-700 dark:bg-gray-700 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 relative',
          styles['PlpLayout__products-container'],
          {
            'pointer-events-none': loading
          }
        )}
      >
        <PlpLayoutLoading show={loading} />

        {products.map((item) => (
          <ProductCard key={item.index} product={item} />
        ))}
      </div>

      <PlpLayoutPagination page={page} lastPage={lastPage} onPageChange={onPageChange} />
    </section>
  );
}
