import { Toaster } from 'sonner';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import type { PropsWithChildren } from 'react';

export default function RootLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <ScrollRestoration />

      <Header />
      <main>
        <Toaster position="top-center" className="font-lexend!" />
        {children}
      </main>
      <Footer />
    </>
  );
}
