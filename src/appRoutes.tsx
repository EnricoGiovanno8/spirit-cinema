import { HomePage, LayoutPage, SearchPage } from './pages';

const appRoutes = [
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/search', element: <SearchPage /> },
    ],
  },
];

export default appRoutes;
