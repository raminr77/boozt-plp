import React from 'react';

import { IndexPage } from 'pages';

import { INDEX_PAGE_ROUTE } from 'shared/routes/route-path';

export const PAGE_ROUTES = [
  {
    id: 1,
    path: INDEX_PAGE_ROUTE,
    element: <IndexPage />
  }
];
