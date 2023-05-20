import { EMPTY_OBJECT } from 'shared/constants/objects';
import { apiRequestObject } from 'shared/services/api/request-opject';

const API_URL = '/api/v1/product.php';

interface apiResponse {
  totalCount: number;
  products: GProduct[];
  pagination: GPagination;
}

const priceTransformer = ({ data }: any): GPrice => {
  const { base_price, actual_price, discount_price, discount_percent } =
    data || EMPTY_OBJECT;

  return {
    basePrice: base_price,
    actualPrice: actual_price,
    discountPrice: discount_price,
    discountPercent: discount_percent
  };
};

const transformer = ({ data }: any): apiResponse => {
  return {
    totalCount: data.total_count,
    products: data.data.map((prod: any) => ({
      id: prod?.id,
      gender: prod?.gender,
      title: prod?.product_name,
      isActive: prod?.is_active,
      imageUrl: prod?.image_url,
      brandName: prod?.brand_name,
      sizeDetail: prod?.size_detail,
      colorDetail: prod?.color_detail,
      availableSizes: prod?.available_sizes,
      prices: priceTransformer({ data: prod?.prices })
    })),
    pagination: data?.pagination || EMPTY_OBJECT
  };
};

export const getIndexPageData = apiRequestObject({
  transformer,
  url: API_URL
});
