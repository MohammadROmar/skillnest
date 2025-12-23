import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
