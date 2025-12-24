import { Outlet, ScrollRestoration } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout() {
  return (
    <>
      <ScrollRestoration />

      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
