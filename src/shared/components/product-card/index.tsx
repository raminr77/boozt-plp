import classNames from 'classnames';

import { ProductCardPriceBox } from './product-card-price-box';
import styles from './product-card.module.scss';

interface Props extends GCommonCompnentProperties {
  product: GProduct;
}
export function ProductCard({ product }: Props) {
  const { imageUrl, title, brandName, prices } = product || {};
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
          'w-full h-full flex items-center justify-center bg-white',
          styles['ProductCard__image-container']
        )}
      >
        <img
          alt={title}
          src={imageUrl}
          loading='lazy'
          className='w-full rounded-md duration-500 scale-75'
        />
      </div>

      <div className='w-full p-4 flex flex-col justify-between sm:-mt-7 dark:bg-gray-800'>
        <div className='mb-4 w-full'>
          <h3 className='font-bold text-md dark:text-gray-300 leading-6 sm:whitespace-nowrap sm:text-ellipsis overflow-hidden'>
            {title}
          </h3>
          <p className='text-sm text-gray-500 dark:text-gray-300 mt-1'>{brandName}</p>
        </div>

        <ProductCardPriceBox prices={prices} />
      </div>
    </article>
  );
}
