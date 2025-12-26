import { Outlet } from 'react-router-dom';

export default function LoginLayout() {
  console.log('first');
  return (
    <main className="group/login flex min-h-dvh w-screen gap-6">
      <Outlet />
    </main>
  );
}
