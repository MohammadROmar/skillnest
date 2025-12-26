import { Link, useLocation } from 'react-router-dom';
import { LogInIcon, LogOut } from 'lucide-react';

import { useAuth } from '../context/auth/hooks';
import LogoIcon from '../assets/icons/Logo';
import NavigationList, { CartNavLink } from './NavigationList';

export default function Header() {
  return (
    <header className="bg-background sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto flex items-center justify-between px-4 py-2 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold text-black"
        >
          <LogoIcon className="size-6 shrink-0" />
          <span>SkillNest</span>
        </Link>

        <NavigationList />

        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <CartNavLink isActive={false} />
          </div>
          <LoginLogoutButton />
        </div>
      </nav>
    </header>
  );
}

function LoginLogoutButton() {
  const { isLoggedIn, logout } = useAuth();
  const { pathname } = useLocation();

  if (isLoggedIn) {
    return (
      <button onClick={logout} className="button bg-red-500 text-sm">
        <LogOut className="size-4" />
        <span>Logout</span>
      </button>
    );
  }

  return (
    <Link to="/log-in" state={{ from: pathname }} className="button text-sm">
      <span>
        <LogInIcon aria-hidden className="size-4" />
      </span>
      <span>Log In</span>
    </Link>
  );
}
