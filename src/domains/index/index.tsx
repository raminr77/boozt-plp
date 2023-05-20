import { useState } from 'react';

import qs from 'qs';
import { getIndexPageData } from 'shared/api/product/get-product-data';
import { PAGINATION_DATA } from 'shared/constants/pagination';
import { usePageData } from 'shared/hooks/use-page-data';
import { debounce } from 'shared/utils/debounce';
import { titleGenerator } from 'shared/utils/title-generator';

import { PlpLayout } from 'app/layout/plp-layout';

export function IndexPage() {
  titleGenerator();
  const [data, setData] = useState<{
    totalCount: number;
    products: GProduct[];
    pagination: GPagination;
  }>();

  const { pending, reload } = usePageData({
    apiMethod: getIndexPageData,
    onSuccess: (response) => setData(response),
    apiData: qs.parse(location.search.substring(1))
  });

  const onPageChange = () => reload(qs.parse(location.search.substring(1)));
  const onSortChange = () => reload(qs.parse(location.search.substring(1)));
  const onSearch = debounce(() => reload(qs.parse(location.search.substring(1))));

  return (
    <main>
      <PlpLayout
        loading={pending}
        onSearch={onSearch}
        onPageChange={onPageChange}
        onSortChange={onSortChange}
        title="All Boozt's Products"
        length={data?.totalCount || 0}
        products={data?.products || []}
        pagination={data?.pagination || PAGINATION_DATA.DEFAULT_VALUE}
      />
    </main>
  );
}
