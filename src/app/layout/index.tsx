import classNames from 'classnames';

import { Footer } from 'app/components/footer';
import { Header } from 'app/components/header';

export function Layout({ children, className }: GCommonCompnentPropertiesWithChildren) {
  return (
    <div
      className={classNames(
        'select-none flex flex-col items-center justify-center',
        className
      )}
    >
      <Header />
      <div className='w-full max-w-screen-2xl p-5'>{children}</div>
      <Footer />
    </div>
  );
}
