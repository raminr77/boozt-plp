import classNames from 'classnames';

import { ProductCardDiscountBadge } from '../product-card-discount-badge';

interface Props extends GCommonCompnentProperties {
  prices: GPrice;
}
export function ProductCardPriceBox({ prices, className }: Props) {
  const { basePrice, actualPrice, discountPercent, discountPrice } = prices || {};
  return (
    <div className={classNames('flex flex-col relative', className)}>
      {discountPrice > 0 && (
        <del className='text-red-500 text-xs -mt-2'>
          <span className='font-normal mr-1 text-lg'>$</span>
          {basePrice}
        </del>
      )}
      <div className='font-bold text-sm'>
        <span className='font-normal mr-1 text-lg'>$</span>
        {actualPrice}
      </div>
      <ProductCardDiscountBadge value={discountPercent || 0} />
    </div>
  );
}
