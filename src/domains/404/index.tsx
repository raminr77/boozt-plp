import { Link } from 'react-router-dom';

import classNames from 'classnames';
import { INDEX_PAGE_ROUTE } from 'shared/routes/route-path';

import styles from './404.module.scss';

import NOT_FOUND_IMAGE from 'shared/static/images/404.png';

export function NotFoundPage() {
  return (
    <main
      className={classNames(
        'w-full flex items-center justify-center',
        styles.NotFoundPage__container
      )}
    >
      <div className='flex flex-col'>
        <img
          width={46}
          height={46}
          src={NOT_FOUND_IMAGE}
          alt='404'
          className='mb-8 dark:invert opacity-70'
        />
        <h1 className='text-2xl font-bold mb-2'>404 - Page Not Found</h1>
        <p>This page you requested does not exist.</p>

        <ul className='list-disc ml-5 mt-1 text-sm'>
          <li>The page may have been deleted or moved.</li>
          <li>The address (URL) may not be correct.</li>
        </ul>

        <p className='flex items-center justify-center mt-4'>
          <Link className='text-sky-500 mr-1' to={INDEX_PAGE_ROUTE}>
            Click here
          </Link>
          to return to the home page.
        </p>
      </div>
    </main>
  );
}
