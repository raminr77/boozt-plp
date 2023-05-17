import {
  DOCUMENTS_ROUTE,
  INDEX_PAGE_ROUTE,
  RAMIN_GITHUB_PAGE_ROUTE,
  RAMIN_PERSONAL_WEB_PAGE_ROUTE
} from 'shared/routes/route-path';

export const MENU_DATA = [
  {
    id: 1,
    target: '',
    title: 'Home',
    url: INDEX_PAGE_ROUTE
  },
  {
    id: 2,
    target: '',
    title: 'Docs',
    url: DOCUMENTS_ROUTE
  },
  {
    id: 3,
    target: 'block',
    title: 'GitHub',
    url: RAMIN_GITHUB_PAGE_ROUTE
  },
  {
    id: 4,
    target: 'block',
    title: 'About Ramin',
    url: RAMIN_PERSONAL_WEB_PAGE_ROUTE
  }
];
