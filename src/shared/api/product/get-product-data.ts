import { REQUEST_TYPES } from 'shared/constants/request-types';
import { apiRequestObject } from 'shared/services/api/request-opject';

const API_URL = '/api/v1/product.php';

interface apiResponse {
  totalCount: number;
  products: GProduct[];
  pagination: GPagination;
}

export const transformer = ({ data }: any): apiResponse => {
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
      prices: {
        basePrice: prod?.prices?.base_price,
        actualPrice: prod?.prices?.actual_price,
        discountPrice: prod?.prices?.discount_price,
        discountPercent: prod?.prices?.discount_percent
      }
    })),
    pagination: data?.pagination || {}
  };
};

export const getIndexPageData = apiRequestObject({
  transformer,
  url: API_URL,
  type: REQUEST_TYPES.GET
});
