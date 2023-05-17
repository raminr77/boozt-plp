import { Link } from 'react-router-dom';

import { BOOZT_WEB_PAGE_ROUTE } from 'shared/routes/route-path';

export function Footer() {
  return (
    <footer className='w-full flex flex-col items-center justify-center text-center text-gray-300 dark:text-gray-500 py-6 border-t border-solid border-gray-100 dark:border-gray-700 relative'>
      <Link
        to={BOOZT_WEB_PAGE_ROUTE}
        className='text-sm hover:text-black dark:hover:text-white duration-500 font-bold'
      >
        BOOZT.COM
      </Link>
      <p className='text-xs mt-1'>Senior Front-end Task - WebShop</p>
    </footer>
  );
}
