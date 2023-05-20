import { clsx } from 'clsx';

export function CodeBox({ children, className }: GCommonCompnentPropertiesWithChildren) {
  return (
    <div
      className={clsx(
        'px-4 py-2 bg-gray-100 text-sm text-gray-700 dark:text-gray-200 dark:bg-gray-700 w-full',
        className
      )}
    >
      {children}
    </div>
  );
}
