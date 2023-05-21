import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes as Switch
} from 'react-router-dom';

import { PAGE_ROUTES } from 'shared/routes/page-routes';
import { NOT_FOUND_ROUTE } from 'shared/routes/route-path';
import { ScrollToTop } from 'shared/routes/scroll-to-top';

import { MainLayout } from 'app/layout/main-layout';

import { NotFoundPage } from 'pages/404';

export function Routes() {
  return (
    <Router>
      <MainLayout>
        <ScrollToTop />
        <Switch>
          {PAGE_ROUTES.map(({ id, path, element }) => (
            <Route key={id} path={path} element={element} />
          ))}
          <Route path={NOT_FOUND_ROUTE} element={<NotFoundPage />} />
          <Route path='*' element={<Navigate to={NOT_FOUND_ROUTE} />} />
        </Switch>
      </MainLayout>
    </Router>
  );
}
