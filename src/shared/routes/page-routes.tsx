import React from 'react';

import { DOCUMENTS_ROUTE, INDEX_PAGE_ROUTE } from 'shared/routes/route-path';

import { DocumentsPage } from 'domains/documents';

import { IndexPage } from 'pages';

export const PAGE_ROUTES = [
  {
    id: 1,
    path: INDEX_PAGE_ROUTE,
    element: <IndexPage />
  },
  {
    id: 2,
    path: DOCUMENTS_ROUTE,
    element: <DocumentsPage />
  }
];
