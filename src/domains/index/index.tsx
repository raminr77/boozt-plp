import { DATA } from 'data/data';

import { PlpLayout } from 'app/layout/plp-layout';

export function IndexPage() {
  const onSearch = (value: string) => console.log(value);
  const onPageChange = (page: number) => console.log(page);
  const onSortChange = (sortId: number) => console.log(sortId);
  return (
    <main>
      <PlpLayout
        pagination={{
          page: 1,
          pageSize: 10,
          siblingCount: 1,
          totalCount: DATA.length
        }}
        length={3}
        loading={false}
        onSearch={onSearch}
        onPageChange={onPageChange}
        onSortChange={onSortChange}
        products={DATA.slice(0, 20)}
        title="All Boozt's Products"
      />
    </main>
  );
}
