import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from 'reportWebVitals';
import { Routes } from 'shared/routes';
import 'shared/styles/index.min.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);

reportWebVitals();
