import { Link } from 'react-router-dom';
import { LogInIcon } from 'lucide-react';

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
          <Link
            to="/log-in"
            className="bg-primary flex items-center gap-2 rounded-2xl px-4 py-2 text-sm text-white"
          >
            <span>
              <LogInIcon aria-hidden className="size-4" />
            </span>
            <span>Log In</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
