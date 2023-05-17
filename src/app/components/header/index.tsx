import { useState } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';
import { MENU_DATA } from 'shared/constants/menu';
import { INDEX_PAGE_ROUTE } from 'shared/routes/route-path';
import { animator } from 'shared/utils/animator';

import BOOZT_LOGO_IMAGE from 'shared/static/images/Boozt.webp';
import MOBILE_CLOSE_MENU_ICON_IMAGE from 'shared/static/images/close.png';
import MOBILE_MENU_ICON_IMAGE from 'shared/static/images/menu.png';

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu((prevValue) => !prevValue);
  };

  return (
    <header
      className={classNames(
        'w-full border-b border-solid border-gray-200 flex flex-col items-center justify-center',
        animator({ name: 'fadeInDown' })
      )}
    >
      <div className='flex items-center justify-between max-w-screen-2xl w-full px-5 h-12'>
        <Link to={INDEX_PAGE_ROUTE}>
          <img width={137} height={30} alt='BOOZT LOGO' src={BOOZT_LOGO_IMAGE} />
        </Link>

        {/* Desktop Menu */}
        <div className='items-center hidden sm:flex text-sm text-gray-400'>
          {MENU_DATA.map(({ id, title, url, target }) => (
            <Link
              key={id}
              to={url}
              target={target}
              className='px-2 hover:text-black duration-300'
            >
              {title}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Trigger */}
        <button className='block sm:hidden' onClick={toggleShowMenu}>
          <img
            alt='MENU'
            width={24}
            height={24}
            src={showMenu ? MOBILE_CLOSE_MENU_ICON_IMAGE : MOBILE_MENU_ICON_IMAGE}
          />
        </button>
      </div>

      {/* Mobile Menu Content */}
      {showMenu && (
        <div
          className={classNames(
            'items-center flex text-sm text-gray-400',
            animator({ name: 'fadeIn' })
          )}
        >
          {MENU_DATA.map(({ id, title, url, target }) => (
            <Link
              key={id}
              to={url}
              target={target}
              className='p-2 leading-10 hover:text-black duration-300'
            >
              {title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
