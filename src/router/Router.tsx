import { lazy, Suspense, type ElementType } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoaderCircle } from 'lucide-react';

import RootLayout from '../layouts/RootLayout';
import ErrorPage from '../pages/Error';
import LoginLayout from '../layouts/LoginLayout';
import HomePage from '../pages/Home';

const LogInPage = lazy(() => import('../pages/LogIn'));
const CoursesPage = lazy(() => import('../pages/Courses'));
const CourseDetailsPage = lazy(() => import('../pages/CourseDetails'));
const CartPage = lazy(() => import('../pages/Cart'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

function WithSuspense({ Component }: { Component: ElementType }) {
  return (
    <Suspense
      fallback={
        <section className="text-text-muted flex size-full flex-col items-center justify-center gap-2">
          <LoaderCircle className="size-10 animate-spin ease-initial" />
          <p className="animate-pulse text-lg font-semibold">Loading</p>
        </section>
      }
    >
      <Component />
    </Suspense>
  );
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <WithSuspense Component={ErrorPage} />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/courses',
        element: <WithSuspense Component={CoursesPage} />,
      },
      {
        path: '/courses/:id',
        element: <WithSuspense Component={CourseDetailsPage} />,
      },
      { path: '/cart', element: <WithSuspense Component={CartPage} /> },
      { path: '*', element: <WithSuspense Component={NotFoundPage} /> },
    ],
  },
  {
    path: '/log-in',
    element: <LoginLayout />,
    errorElement: <WithSuspense Component={ErrorPage} />,
    children: [
      { index: true, element: <WithSuspense Component={LogInPage} /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
