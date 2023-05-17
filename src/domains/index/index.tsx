import { DATA } from 'data/data';

import { PlpLayout } from 'app/layout/plp-layout';

export function IndexPage() {
  const onSearch = (value: string) => console.log(value);
  const onPageChange = (page: number) => console.log(page);
  const onSortChange = (sortId: number) => console.log(sortId);
  return (
    <main>
      <PlpLayout
        page={1}
        length={3}
        lastPage={3}
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
