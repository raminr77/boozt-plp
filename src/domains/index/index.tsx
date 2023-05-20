import qs from 'qs';
import { getIndexPageData } from 'shared/api/product/get-product-data';
import { EMPTY_OBJECT } from 'shared/constants/objects';
import { PAGINATION_DATA } from 'shared/constants/pagination';
import { usePageData } from 'shared/hooks/use-page-data';
import { debounce } from 'shared/utils/debounce';
import { titleGenerator } from 'shared/utils/title-generator';

import { PlpLayout } from 'app/layout/plp-layout';

export function IndexPage() {
  titleGenerator();
  const { data, pending, reload } = usePageData({
    apiMethod: getIndexPageData,
    apiData: qs.parse(location.search.substring(1))
  });

  const { products, totalCount, pagination } = data || EMPTY_OBJECT;

  const onPageChange = () => reload(qs.parse(location.search.substring(1)));
  const onSortChange = () => reload(qs.parse(location.search.substring(1)));
  const onSearch = debounce(() => reload(qs.parse(location.search.substring(1))));

  return (
    <main>
      <PlpLayout
        loading={pending}
        onSearch={onSearch}
        length={totalCount || 0}
        products={products || []}
        onPageChange={onPageChange}
        onSortChange={onSortChange}
        title="All Boozt's Products"
        pagination={pagination || PAGINATION_DATA.DEFAULT_VALUE}
      />
    </main>
  );
}
