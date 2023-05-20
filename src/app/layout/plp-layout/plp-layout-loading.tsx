import { clsx } from 'clsx';

import styles from './plp-layout.module.scss';

export function PlpLayoutLoading({ className }: GCommonCompnentProperties) {
  return (
    <div
      id='plp-loading'
      className={clsx(
        'flex flex-col items-center w-full h-full pt-10 top-0 left-0 bottom-0 right-0 absolute pointer-events-none z-30',
        styles.PlpLayout__loading,
        className
      )}
    >
      <div className='loading mt-10'>
        <div className='lds-ellipsis'>
          <div className='dark:bg-white' />
          <div className='dark:bg-white' />
          <div className='dark:bg-white' />
          <div className='dark:bg-white' />
        </div>
      </div>
    </div>
  );
}
