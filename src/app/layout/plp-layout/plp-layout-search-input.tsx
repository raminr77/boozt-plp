import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { clsx } from 'clsx';
import qs from 'qs';
import { animator } from 'shared/utils/animator';

import CLEAN_INPUT_IMAGE from 'shared/static/images/close.png';
import SEARCH_ICON_IMAGE from 'shared/static/images/search.png';

interface Props extends GCommonCompnentProperties {
  onSearch: (value?: string) => void;
}
export function PlpLayoutSeachInput({ onSearch, className }: Props) {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [search, setSearch] = useState(searchParams.get('q') || '');

  const searchAction = (value: string) => {
    setSearchParams({
      ...qs.parse(window.location.search.substring(1)),
      page: '1',
      q: value
    });
    onSearch(value);
    setSearch(value);
  };
  return (
    <div className={clsx('relative w-full max-w-xl', className)}>
      <input
        type='text'
        value={search}
        onChange={({ target }) => searchAction(target.value)}
        placeholder='Search For What You Like In Boozt ...'
        className='w-full text-center text-sm sm:text-md outline-none border-2 bg-transparent dark:text-white focus:border-black dark:focus:border-white leading-10 border-solid border-gray-300 dark:border-gray-600'
      />

      {search.length !== 0 ? (
        <button
          className={clsx('p-3 absolute right-0 top-0', animator({ name: 'fadeIn' }))}
          onClick={() => searchAction('')}
        >
          <img
            alt='Clean'
            width={18}
            height={18}
            className='dark:invert'
            src={CLEAN_INPUT_IMAGE}
          />
        </button>
      ) : (
        <div className={clsx('p-2 absolute right-0 top-0', animator({ name: 'fadeIn' }))}>
          <img
            alt='Clean'
            width={26}
            height={26}
            src={SEARCH_ICON_IMAGE}
            className='dark:invert'
          />
        </div>
      )}
    </div>
  );
}
