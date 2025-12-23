import { Link } from 'react-router-dom';
import { LogInIcon } from 'lucide-react';

import LogoIcon from '../assets/icons/Logo';
import NavigationList from './NavigationList';

export default function Header() {
  return (
    <header className="sticky top-0 border-b border-gray-200 bg-white backdrop-blur-xs supports-backdrop-filter:bg-white/25">
      <nav className="container mx-auto flex items-center justify-between px-4 py-2 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold text-black"
        >
          <LogoIcon className="size-6 shrink-0" />
          <span>SkillNest</span>
        </Link>

        <NavigationList />

        <Link
          to="/log-in"
          className="bg-primary flex items-center gap-2 rounded-2xl px-3 py-1 text-white"
        >
          <span>
            <LogInIcon aria-hidden className="size-5" />
          </span>
          <span>Log In</span>
        </Link>
      </nav>
    </header>
  );
}
