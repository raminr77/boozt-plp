import { Link } from 'react-router-dom';

import {
  INDEX_PAGE_ROUTE,
  RAMIN_GITHUB_PAGE_ROUTE,
  RAMIN_PERSONAL_WEB_PAGE_ROUTE
} from 'shared/routes/route-path';
import BOOZT_LOGO_IMAGE from 'shared/static/images/Boozt.webp';

export function Header() {
  return (
    <header className='w-full border-b border-solid border-gray-200 flex items-center justify-center'>
      <div className='flex items-center justify-between max-w-screen-2xl w-full px-5'>
        <Link to={INDEX_PAGE_ROUTE}>
          <img width={137} height={30} src={BOOZT_LOGO_IMAGE} alt='BOOZT LOGO' />
        </Link>
        <div className='text-sm text-gray-500 leading-10 flex items-center'>
          <Link
            to={RAMIN_GITHUB_PAGE_ROUTE}
            className='hover:bg-gray-100 duration-100 border-b border-solid border-transparent hover:text-black hover:border-b-black px-4 py-2'
          >
            GitHub
          </Link>
          <Link
            to={RAMIN_PERSONAL_WEB_PAGE_ROUTE}
            className='hover:bg-gray-100 duration-100 border-b border-solid border-transparent hover:text-black hover:border-b-black px-4 py-2'
          >
            About Ramin
          </Link>
        </div>
      </div>
    </header>
  );
}
