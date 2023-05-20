import { clsx } from 'clsx';

export function CodeBox({ children, className }: GCommonCompnentPropertiesWithChildren) {
  return (
    <div className={clsx('p-4 bg-gray-100 dark:bg-gray-700 w-full', className)}>
      {children}
    </div>
  );
}
