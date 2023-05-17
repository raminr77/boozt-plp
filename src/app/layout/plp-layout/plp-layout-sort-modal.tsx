import classNames from 'classnames';
import { SORT_OPTIONS } from 'shared/constants/sort-options';
import { animator } from 'shared/utils/animator';

import styles from './plp-layout.module.scss';

interface Props extends GCommonCompnentProperties {
  show: boolean;
  defaultSortId: number;
  onClose: GVoidFunction;
  sortAction: (id: number) => void;
}
export function PlpLayoutSortModal({
  onClose,
  className,
  sortAction,
  show = false,
  defaultSortId
}: Props) {
  const closeWithOverlay = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClose();
  };

  return show ? (
    <div
      onClick={closeWithOverlay}
      className={classNames(
        'w-full h-screen fixed top-0 left-0 right-0 bottom-0 z-10 flex items-center justify-center',
        animator({ name: 'fadeIn' }),
        styles['PlpLayout__sort-modal-overlay'],
        className
      )}
    >
      <div className='bg-gray-100 dark:bg-gray-700 rounded-lg p-4 w-10/12 shadow-lg flex flex-col gap-y-2'>
        {SORT_OPTIONS.map(({ id, title }) => (
          <label
            key={id}
            onClick={() => sortAction(id)}
            className={classNames(
              'w-full leading-10 py-1 bg-gray-200 dark:bg-gray-800 rounded-lg text-sm text-center',
              {
                'text-red-500 font-bold': defaultSortId === id,
                'dark:text-white': defaultSortId !== id
              }
            )}
          >
            {title}
            <input type='radio' name='sort' value={id} hidden />
          </label>
        ))}
      </div>
    </div>
  ) : null;
}
