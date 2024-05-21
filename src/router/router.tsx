import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage from '../pages/LoginPage/LoginPage';
import { Routes } from './routes';
import { Spinner } from '../components';
import { PublicRoute } from '../routes/PublicRoute';
import PrivateRoute from '../routes/PrivateRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NewsItemPage = lazy(() => import('../pages/NewsItemPage/NewsItemPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const router = createBrowserRouter([
  {
    path: Routes.LoginPage,
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: Routes.HomePage,
    element: (
      <PrivateRoute>
        <Suspense fallback={<Spinner />}>
          <HomePage />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: `${Routes.NewsItemPage}`,
    element: (
      <PrivateRoute>
        <Suspense fallback={<Spinner />}>
          <NewsItemPage />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: Routes.NotFoundPage,
    element: (
      <Suspense fallback={<Spinner />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
]);

export const NewsRouter = () => {
  return <RouterProvider router={router} />;
};
