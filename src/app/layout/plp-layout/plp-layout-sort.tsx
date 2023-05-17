import { useState } from 'react';

import classNames from 'classnames';
import { SORT_OPTIONS } from 'shared/constants/sort-options';

import { PlpLayoutSortModal } from './plp-layout-sort-modal';

import SORT_ICON_IMAGE from 'shared/static/images/sort.png';

interface Props extends GCommonCompnentProperties {
  defaultSortId?: number;
  onSortChange: (value: number) => void;
}
export function PlpLayoutSort({ defaultSortId = 1, onSortChange }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [defaultSort, setDefaultSort] = useState(defaultSortId);
  const sortAction = (sortId: number) => {
    onSortChange(sortId);
    setDefaultSort(sortId);
  };

  const showSortModal = () => {
    if (window.innerWidth > 640) {
      return;
    }
    setShowModal(true);
  };

  return (
    <div className='flex items-center'>
      <button className='font-bold mr-2 flex items-center' onClick={showSortModal}>
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
              'leading-8 cursor-pointer text-md px-3 bg-gray-100 dark:bg-gray-700 rounded-lg duration-300',
              {
                'text-red-500 font-bold': defaultSort === id,
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
        defaultSortId={defaultSort}
        show={showModal}
        sortAction={sortAction}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}
