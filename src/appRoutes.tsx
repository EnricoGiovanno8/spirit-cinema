import { HomePage, LayoutPage, MovieDetailPage, SearchPage } from './pages';

const appRoutes = [
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/search', element: <SearchPage /> },
      {
        path: '/movie-detail',
        children: [
          {
            path: ':id',
            element: <MovieDetailPage />,
          },
        ],
      },
    ],
  },
];

export default appRoutes;
