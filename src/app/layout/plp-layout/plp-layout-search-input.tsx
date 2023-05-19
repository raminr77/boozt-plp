import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import classNames from 'classnames';
import qs from 'qs';
import { animator } from 'shared/utils/animator';

import CLEAN_INPUT_IMAGE from 'shared/static/images/close.png';

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
    <div className={classNames('relative w-full max-w-xl', className)}>
      <input
        type='text'
        value={search}
        onChange={({ target }) => searchAction(target.value)}
        placeholder='Search For What You Like In Boozt ...'
        className='w-full text-center text-xl outline-none border-b bg-transparent dark:text-white focus:border-black dark:focus:border-white duration-500 leading-10 border-solid border-gray-200 dark:border-gray-600'
      />

      {search.length !== 0 && (
        <button
          className={classNames(
            'p-3 absolute right-0 top-0',
            animator({ name: 'fadeIn' })
          )}
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
      )}
    </div>
  );
}
