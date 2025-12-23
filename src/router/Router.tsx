import { lazy, Suspense, type ElementType } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '../layouts/RootLayout';

const HomePage = lazy(() => import('../pages/Home'));
const LogInPage = lazy(() => import('../pages/LogIn'));
const CoursesPage = lazy(() => import('../pages/Courses'));
const CartPage = lazy(() => import('../pages/Cart'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

function WithSuspense({ Component }: { Component: ElementType }) {
  return (
    <Suspense>
      <Component />
    </Suspense>
  );
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <WithSuspense Component={HomePage} /> },
      { path: '/courses', element: <WithSuspense Component={CoursesPage} /> },
      { path: '/cart', element: <WithSuspense Component={CartPage} /> },
      { path: '*', element: <WithSuspense Component={NotFoundPage} /> },
    ],
  },
  { path: '/log-in', element: <WithSuspense Component={LogInPage} /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
