import { PAGINATION_DATA } from 'shared/constants/pagination';
import { titleGenerator } from 'shared/utils/title-generator';

import { PlpLayout } from 'app/layout/plp-layout';

export function IndexPage() {
  titleGenerator();
  const onSearch = (value: string) => console.log(value);
  const onPageChange = (page: number) => console.log(page);
  const onSortChange = (sortId: number) => console.log(sortId);
  return (
    <main>
      <PlpLayout
        pagination={{
          page: 1,
          count: [].length,
          limit: PAGINATION_DATA.PAGE_SIZE
        }}
        loading={false}
        onSearch={onSearch}
        length={[].length}
        onPageChange={onPageChange}
        onSortChange={onSortChange}
        title="All Boozt's Products"
        products={[].slice(0, PAGINATION_DATA.PAGE_SIZE)}
      />
    </main>
  );
}
