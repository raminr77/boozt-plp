import classNames from 'classnames';

import { ProductCardDiscountBadge } from '../product-card-discount-badge';

interface Props extends GCommonCompnentProperties {
  basePrice: string;
  actualPrice: string;
  discountValue: number;
  discountPercentage: number;
}
export function ProductCardPriceBox({
  basePrice,
  actualPrice,
  discountValue,
  discountPercentage,
  className
}: Props) {
  return (
    <div className={classNames('flex flex-col relative', className)}>
      {discountValue > 0 && (
        <del className='text-red-500 text-xs -mt-2'>
          <span className='font-normal mr-1 text-lg'>$</span>
          {basePrice}
        </del>
      )}
      <div className='font-bold text-sm'>
        <span className='font-normal mr-1 text-lg'>$</span>
        {actualPrice}
      </div>
      <ProductCardDiscountBadge value={discountPercentage || 0} />
    </div>
  );
}
