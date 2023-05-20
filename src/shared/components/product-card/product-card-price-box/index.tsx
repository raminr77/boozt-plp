import { clsx } from 'clsx';

import { ProductCardDiscountBadge } from '../product-card-discount-badge';
import styles from './product-card-price-box.module.scss';

interface Props extends GCommonCompnentProperties {
  prices: GPrice;
}
export function ProductCardPriceBox({ prices, className }: Props) {
  const { basePrice, actualPrice, discountPercent, discountPrice } = prices || {};
  return (
    <div
      className={clsx(
        'flex flex-col relative justify-end',
        styles.ProductCardPriceBox__container,
        className
      )}
    >
      {discountPrice > 0 && (
        <div className='flex items-center text-red-500'>
          <span className='font-normal mr-1 text-lg'>$</span>
          <del className='text-sm'>{basePrice}</del>
        </div>
      )}
      <div className='font-bold text-lg'>
        <span className='font-normal mr-1 text-lg'>$</span>
        {actualPrice}
      </div>
      <ProductCardDiscountBadge value={discountPercent || 0} />
    </div>
  );
}
