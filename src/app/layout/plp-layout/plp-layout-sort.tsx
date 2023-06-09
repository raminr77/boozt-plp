import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { clsx } from 'clsx';
import qs from 'qs';
import { Image } from 'shared/components/image';
import { SORT_OPTIONS } from 'shared/constants/sort-options';

import { PlpLayoutSortModal } from './plp-layout-sort-modal';

import SORT_ICON_IMAGE from 'shared/static/images/sort.svg';

interface Props extends GCommonCompnentProperties {
  onSortChange: (value: number) => void;
}
export function PlpLayoutSort({ onSortChange, className }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({});

  // This is because it may not be `searchParams` or equal to `null`
  const defaultSortId = searchParams.get('sort') || 1;
  const [defaultSort, setDefaultSort] = useState(+defaultSortId);

  const sortAction = (sortId: number) => {
    setSearchParams({
      ...qs.parse(location.search.substring(1)),
      page: '1',
      sort: sortId.toString()
    });
    scrollTo(0, 200);
    setDefaultSort(sortId);
    onSortChange(sortId);
  };

  const showSortModal = () => {
    if (innerWidth > 640) {
      return;
    }
    setShowModal(true);
  };

  useEffect(() => {
    const currentDefaultSortId = searchParams.get('sort') || 1;
    if (defaultSort !== currentDefaultSortId) {
      setDefaultSort(+currentDefaultSortId);
    }
  }, [searchParams]);

  return (
    <div className={clsx('flex items-center', className)}>
      <button
        className='mr-2 flex items-center sm:cursor-default'
        onClick={showSortModal}
      >
        <Image
          alt=''
          width={24}
          height={24}
          src={SORT_ICON_IMAGE}
          className='mr-1 dark:invert'
        />
        <div className='text-sm'>Sort:</div>
        <span className='block sm:hidden font-bold text-red-500 ml-1 text-sm'>
          {SORT_OPTIONS[defaultSort - 1].title}
        </span>
      </button>

      <div className='hidden sm:flex items-center gap-x-1'>
        {SORT_OPTIONS.map(({ id, title }) => (
          <button
            key={id}
            onClick={() => sortAction(id)}
            className={clsx(
              'leading-10 cursor-pointer text-sm px-3 bg-gray-100 dark:bg-gray-700 rounded-lg',
              {
                'text-red-500 font-bold pointer-events-none': defaultSort === id,
                'dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700':
                  defaultSort !== id
              }
            )}
          >
            {title}
          </button>
        ))}
      </div>

      <PlpLayoutSortModal
        show={showModal}
        sortAction={sortAction}
        defaultSortId={defaultSort}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}
