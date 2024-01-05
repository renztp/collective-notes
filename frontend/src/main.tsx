import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AllNotes from './components/pages/all-notes/all-notes';
import Root from './components/pages/root';
import SettingsPage from './components/pages/settings/settings.page';
import './index.css';
import { CollectionsComponent } from './components/pages/collection-notes/collections.component';
import { CollectionComponent, loader as CollectionComponentLoader } from './components/pages/collection-notes/collection.component';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <div>404</div>,
    children: [
      {
        path: '/collections',
        element: <CollectionsComponent />,
      },
      {
        path: '/collection/:collectionId',
        loader: CollectionComponentLoader,
        element: <CollectionComponent />,
      },
      {
        path: '/all-notes',
        element: <AllNotes />
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
