import { clsx } from 'clsx';

import { Footer } from 'app/components/footer';
import { Header } from 'app/components/header';

export function MainLayout({
  children,
  className
}: GCommonCompnentPropertiesWithChildren) {
  return (
    <div
      className={clsx(
        'select-none flex flex-col items-center text-black dark:bg-gray-800 dark:text-white min-h-screen',
        className
      )}
    >
      <Header />
      <div className='w-full max-w-screen-2xl p-5'>{children}</div>
      <Footer />
    </div>
  );
}
