import { Link } from 'react-router-dom';

import { BOOZT_WEB_PAGE_ROUTE } from 'shared/routes/route-path';

export function Footer() {
  return (
    <footer className='w-full flex flex-col items-center justify-center text-center text-gray-400 py-6 border-t border-solid border-gray-100 dark:border-gray-700 relative'>
      <Link
        to={BOOZT_WEB_PAGE_ROUTE}
        className='text-sm hover:text-black dark:hover:text-white duration-500 font-bold'
      >
        BOOZT-PLP.COM
      </Link>
      <p className='text-sm mt-1'>Senior Front-end Task - WebShop</p>
    </footer>
  );
}
