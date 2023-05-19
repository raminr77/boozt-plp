import classNames from 'classnames';

export function CodeBox({ children, className }: GCommonCompnentPropertiesWithChildren) {
  return (
    <div className={classNames('p-4 bg-gray-100 dark:bg-gray-700 w-full', className)}>
      {children}
    </div>
  );
}
