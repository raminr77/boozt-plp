import { clsx } from 'clsx';

import styles from './plp-layout.module.scss';

export function PlpLayoutLoading({ show = false }: { show?: boolean }) {
  return show ? (
    <div
      id='plp-loading'
      className={clsx(
        'flex flex-col justify-center items-center w-full h-full top-0 left-0 bottom-0 right-0 absolute pointer-events-none z-10',
        styles.PlpLayout__loading
      )}
    >
      <div className='loading mt-4'>
        <div className='lds-ellipsis'>
          <div className='dark:bg-white' />
          <div className='dark:bg-white' />
          <div className='dark:bg-white' />
          <div className='dark:bg-white' />
        </div>
      </div>
    </div>
  ) : null;
}
