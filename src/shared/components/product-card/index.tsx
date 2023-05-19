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
      className='bg-white dark:bg-gray-800 w-full flex sm:flex-col border border-solid border-transparent duration-100 hover:border-gray-400 dark:hover:border-transparent'
    >
      <div
        className={classNames(
          'w-full h-full flex items-center justify-center bg-white relative overflow-hidden',
          styles['ProductCard__image-container']
        )}
      >
        <img
          alt={title}
          width='100%'
          height='100%'
          loading='lazy'
          src={imageUrl}
          className={classNames(
            'w-full rounded-md',
            styles['ProductCard__image-container--image']
          )}
        />

        {sizeDetail && (
          <div className='product-size font-bold text-xs text-gray-600 bg-gray-100 top-0 left-0 whitespace-nowrap leading-10 px-5 absolute'>
            {sizeDetail}
          </div>
        )}
      </div>

      <div className='w-full p-4 flex flex-col justify-between sm:-mt-7 dark:bg-gray-800 z-10'>
        <div className='mb-4 w-full'>
          <h1 className='font-bold text-md dark:text-white leading-6 sm:whitespace-nowrap sm:text-ellipsis overflow-hidden'>
            {title}
          </h1>
          <p className='text-sm text-gray-700 dark:text-gray-200 mt-1'>
            Brand: {brandName}
          </p>

          <p className='text-sm text-gray-700 dark:text-gray-200 mt-1 flex items-center'>
            Color: {colorDetail}
          </p>
        </div>

        <ProductCardPriceBox prices={prices} />
      </div>
    </article>
  );
}
