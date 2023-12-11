import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AllNotes from './components/pages/all-notes/all-notes.tsx';
import { CollectionNotes } from './components/pages/collection-notes/collection-notes.tsx';
import CollectionSingle, { loader as CollectionSingleLoader } from './components/pages/collection-notes/collection-single.tsx';
import Root from './components/pages/root.tsx';
import SettingsPage from './components/pages/settings/settings.page.tsx';
import './index.css';
import { Collections } from './components/pages/collection-notes/collections.tsx';
import { Collection } from './components/pages/collection-notes/collection.tsx';
import CollectionSingleEdit from './components/pages/collection-notes/collection-single-edit.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <div>404</div>,
    children: [
      {
        path: '/collections',
        element: <Collections />,
      },
      {
        path: '/collection',
        element: <Collection />,
        children: [
          {
            path: ':collectionId', loader: CollectionSingleLoader,
            element: <CollectionSingle />,
          },
        ],
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
