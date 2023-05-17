import classNames from 'classnames';

interface Props extends GCommonCompnentProperties {
  value: number;
}

export function ProductCardDiscountBadge({ value = 0, className }: Props) {
  return value > 0 ? (
    <div
      className={classNames(
        'bg-red-500 absolute right-0 bottom-0 text-white rounded-3xl px-2 text-sm font-bold py-1',
        className
      )}
    >
      {value}%
    </div>
  ) : null;
}
