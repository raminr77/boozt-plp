import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import classNames from 'classnames';
import qs from 'qs';
import { SORT_OPTIONS } from 'shared/constants/sort-options';

import { PlpLayoutSortModal } from './plp-layout-sort-modal';

import SORT_ICON_IMAGE from 'shared/static/images/sort.png';

interface Props extends GCommonCompnentProperties {
  onSortChange: (value: number) => void;
}
export function PlpLayoutSort({ onSortChange }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({});

  // This is because it may not be `searchParams` or equal to `null`
  const defaultSortId = searchParams.get('sort') || 1;
  const [defaultSort, setDefaultSort] = useState(+defaultSortId);

  const sortAction = (sortId: number) => {
    onSortChange(sortId);
    setDefaultSort(sortId);
    setSearchParams({
      ...qs.parse(window.location.search.substring(1)),
      sort: sortId.toString()
    });
  };

  const showSortModal = () => {
    if (window.innerWidth > 640) {
      return;
    }
    setShowModal(true);
  };

  useEffect(() => {
    if (searchParams.get('sort')) {
      const defaultSortId = searchParams.get('sort') || 1;
      setDefaultSort(+defaultSortId);
    }
  }, [searchParams]);

  return (
    <div className='flex items-center'>
      <button className='mr-2 flex items-center' onClick={showSortModal}>
        <img
          alt=''
          width={24}
          height={24}
          src={SORT_ICON_IMAGE}
          className='mr-1 dark:invert'
        />
        <div>Sort:</div>
        <span className='block sm:hidden font-bold text-red-500 ml-1 text-sm'>
          {SORT_OPTIONS[defaultSort - 1].title}
        </span>
      </button>

      <div className='hidden sm:flex items-center text-sm gap-x-1'>
        {SORT_OPTIONS.map(({ id, title }) => (
          <label
            key={id}
            onClick={() => sortAction(id)}
            className={classNames(
              'leading-8 cursor-pointer text-md px-3 bg-gray-100 dark:bg-gray-700 rounded-lg',
              {
                'text-red-500 font-bold pointer-events-none': defaultSort === id,
                'dark:text-white hover:bg-gray-200 dark:hover:bg-gray-900':
                  defaultSort !== id
              }
            )}
          >
            {title}
            <input type='radio' name='sort' value={id} hidden />
          </label>
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
