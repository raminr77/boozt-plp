import { useEffect } from 'react';

import { Image } from 'shared/components/image';
import { LOCAL_STORAGE_NAMES } from 'shared/constants/local-storage';
import { useToggle } from 'shared/hooks/use-toggle';

import DARK_MODE_IMAGE from 'shared/static/images/moon.svg';
import LIGHT_MODE_IMAGE from 'shared/static/images/sun.svg';

export function ToggleThemeButton() {
  const [isDarkMode, toggleDarkMode] = useToggle();

  const toggleTheme = () => {
    localStorage?.setItem(LOCAL_STORAGE_NAMES.BOOZT_PLP_DARK_MODE, `${!isDarkMode}`);
    document.body.classList.toggle('dark');
    toggleDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const isDarkModeUser =
      localStorage?.getItem(LOCAL_STORAGE_NAMES.BOOZT_PLP_DARK_MODE) === 'true';
    toggleDarkMode(isDarkModeUser);
    if (isDarkModeUser) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className='p-2 bg-gray-100 hover:bg-gray-200 rounded-full duration-300 dark:bg-gray-700 dark:hover:bg-gray-900'
    >
      <Image
        width={16}
        height={16}
        alt='THEME'
        className='invert opacity-90'
        src={isDarkMode ? LIGHT_MODE_IMAGE : DARK_MODE_IMAGE}
      />
    </button>
  );
}
