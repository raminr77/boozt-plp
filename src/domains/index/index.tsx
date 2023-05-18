import { DATA } from 'data/data';
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
          pageSize: 12,
          siblingCount: 1,
          totalCount: DATA.length
        }}
        loading={false}
        onSearch={onSearch}
        length={DATA.length}
        onPageChange={onPageChange}
        onSortChange={onSortChange}
        products={DATA.slice(0, 12)}
        title="All Boozt's Products"
      />
    </main>
  );
}
