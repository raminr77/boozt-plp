/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { clsx } from 'clsx';
import qs from 'qs';
import { ProductCard } from 'shared/components/product-card';
import { useScrollPosition } from 'shared/hooks/use-scroll-position';
import { animator } from 'shared/utils/animator';

import { PlpLayoutItemsCounter } from './plp-layout-items-counter';
import { PlpLayoutLoading } from './plp-layout-loading';
import { PlpLayoutPagination } from './plp-layout-pagination';
import { PlpLayoutSeachInput } from './plp-layout-search-input';
import { PlpLayoutSort } from './plp-layout-sort';
import styles from './plp-layout.module.scss';

interface Props extends GCommonCompnentProperties {
  title: string;
  length: number;
  loading?: boolean;
  products: GProduct[];
  pagination: GPagination;
  onSearch: (value?: string) => void;
  onPageChange: (value?: number) => void;
  onSortChange: (value?: number) => void;
}

export function PlpLayout({
  title,
  products,
  onSearch,
  pagination,
  length = 0,
  onPageChange,
  onSortChange,
  loading = false
}: Props) {
  const [showStickySort, setShowStickySort] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({});

  const pageAction = (page: number) => {
    setSearchParams({
      ...qs.parse(window.location.search.substring(1)),
      page: page.toString()
    });
    window.scrollTo(0, 200);
    onPageChange(page);
  };

  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = -1 * currPos.y > 300;
    if (isShow !== showStickySort && prevPos.y !== currPos.y) {
      setShowStickySort(isShow);
    }
  });

  return (
    <section>
      <h1
        className={clsx(
          'font-bold text-center text-3xl mb-5',
          animator({ name: 'fadeInUp' })
        )}
      >
        {title}
      </h1>

      <div className='w-full flex flex-col items-center justify-center mb-3 gap-y-12'>
        <PlpLayoutSeachInput onSearch={onSearch} />

        <div className='w-full flex items-center justify-between'>
          <PlpLayoutSort onSortChange={onSortChange} />
          {length && <PlpLayoutItemsCounter length={length} pagination={pagination} />}
        </div>
      </div>

      {showStickySort && (
        <div
          className={clsx(
            'w-full flex items-center bg-gray-100 dark:bg-gray-700 justify-between fixed max-w-screen-2xl mx-auto z-20 left-0 right-0 top-0 px-5 py-3 shadow-lg',
            animator({ name: 'fadeInDown' })
          )}
        >
          <PlpLayoutSort onSortChange={onSortChange} />
          {length && <PlpLayoutItemsCounter length={length} pagination={pagination} />}
        </div>
      )}

      {products?.length === 0 && (
        <div className='w-full h-80 flex items-center justify-center'>No Products</div>
      )}

      <div
        className={clsx(
          'overflow-hidden w-full border border-solid border-gray-200 dark:border-gray-600 dark:bg-gray-700 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative',
          styles['PlpLayout__products-container'],
          {
            'pointer-events-none': loading,
            hidden: products?.length === 0
          }
        )}
      >
        {loading && <PlpLayoutLoading />}

        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      <PlpLayoutPagination pagination={pagination} onPageChange={pageAction} />
    </section>
  );
}
