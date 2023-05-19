import { useEffect, useState } from 'react';

import { LOCAL_STORAGE_NAMES } from 'shared/constants/local-storage';

import DARK_MODE_IMAGE from 'shared/static/images/moon.svg';
import LIGHT_MODE_IMAGE from 'shared/static/images/sun.svg';

export function ToggleThemeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    window?.localStorage?.setItem(
      LOCAL_STORAGE_NAMES.BOOZT_PLP_DARK_MODE,
      (!isDarkMode).toString()
    );
    document?.body?.classList.toggle('dark');
    setIsDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    const isDarkModeUser =
      window?.localStorage?.getItem(LOCAL_STORAGE_NAMES.BOOZT_PLP_DARK_MODE) === 'true';
    setIsDarkMode(isDarkModeUser);
    if (isDarkModeUser) {
      document?.body?.classList.add('dark');
    } else {
      document?.body?.classList.remove('dark');
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className='p-2 bg-gray-100 hover:bg-gray-200 rounded-full duration-300 dark:bg-gray-700 dark:hover:bg-gray-900'
    >
      <img
        width={16}
        height={16}
        alt='THEME'
        className='invert opacity-90'
        src={isDarkMode ? LIGHT_MODE_IMAGE : DARK_MODE_IMAGE}
      />
    </button>
  );
}
