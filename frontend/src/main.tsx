import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import SettingsPage from './components/pages/settings/settings.page.tsx';
import { CollectionNotes } from './components/pages/collection-notes/collection-notes.tsx';
import AllNotes from './components/pages/all-notes/all-notes.tsx';
import Root from './components/pages/root.tsx';
import CollectionSingle from './components/pages/collection-notes/collection-single.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <div>404</div>,
    children: [
      {
        path: '/collection',
        element: <CollectionNotes />,
        children: [
          {
            path: ':collectionId',
            loader: async ({params}) => {
              return params;
            },
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
