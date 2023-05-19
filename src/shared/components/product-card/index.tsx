import classNames from 'classnames';

import { ProductCardPriceBox } from './product-card-price-box';
import styles from './product-card.module.scss';

interface Props extends GCommonCompnentProperties {
  product: GProduct;
}
export function ProductCard({ product }: Props) {
  const { imageUrl, title, brandName, prices, sizeDetail, colorDetail } = product || {};

  return (
    <article
      title={title}
      className={classNames(
        'bg-white dark:bg-gray-800 w-full flex sm:flex-col',
        styles.ProductCard__container
      )}
    >
      <div
        className={classNames(
          'w-full h-full flex items-center justify-center bg-white relative overflow-hidden',
          styles['ProductCard__image-container']
        )}
      >
        <img
          alt={title}
          src={imageUrl}
          loading='lazy'
          className='w-full rounded-md duration-500 scale-75'
        />

        {sizeDetail && (
          <div className='product-size font-bold text-xs text-gray-600 bg-gray-50 top-0 left-0 whitespace-nowrap leading-10 px-5 absolute'>
            {sizeDetail}
          </div>
        )}
      </div>

      <div className='w-full p-4 flex flex-col justify-between sm:-mt-7 dark:bg-gray-800 z-10'>
        <div className='mb-4 w-full'>
          <h3 className='font-bold text-md dark:text-gray-300 leading-6 sm:whitespace-nowrap sm:text-ellipsis overflow-hidden'>
            {title}
          </h3>
          <p className='text-xs text-gray-500 dark:text-gray-300 mt-1'>
            Brand: {brandName}
          </p>
          <p className='text-sm text-gray-500 dark:text-gray-300 mt-1'>
            Color: {colorDetail}
          </p>
        </div>

        <ProductCardPriceBox prices={prices} />
      </div>
    </article>
  );
}
