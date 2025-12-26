import { Link, useRouteError } from 'react-router-dom';
import { House, RefreshCcw } from 'lucide-react';

import ErrorIcon from '../assets/icons/Error';
import { Layout } from '../layouts/RootLayout';

export default function ErrorPage() {
  const error = useRouteError() as Error;

  return (
    <Layout>
      <section className="section flex h-full max-w-lg flex-col items-center justify-center space-y-2 text-center">
        <ErrorIcon className="w-64" />
        <h1 className="mt-6 flex flex-col items-center justify-center text-2xl font-bold">
          <span className="text-primary">Oops!</span>
          <span>Something Went Wrong</span>
        </h1>
        <p className="text-text-muted max-w-lg text-sm">
          {error.message ||
            'We encountered an unexpected issue. Please go home or refresh the page.'}
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/" className="button">
            <House aria-hidden className="size-4" />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="button border border-gray-200 bg-transparent text-current shadow-none"
          >
            <RefreshCcw className="size-4" />
            <span>Refresh Page</span>
          </button>
        </div>
      </section>
    </Layout>
  );
}
