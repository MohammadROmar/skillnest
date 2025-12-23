import { Link } from 'react-router-dom';

import LogoIcon from '../assets/icons/Logo';
import NavigationList from './NavigationList';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="container mx-auto p-4 lg:px-8">
        <nav className="flex items-end justify-between gap-4">
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-lg font-semibold text-black"
            >
              <LogoIcon className="size-7 shrink-0" />
              <span>SkillNest</span>
            </Link>

            <p className="text-text-muted mt-4 text-xs">
              Empowering learners with the skills of tomorrow.
            </p>
            <p className="text-text-muted text-xs">Start your journey today.</p>
          </div>

          <NavigationList />
        </nav>

        <hr className="my-4 text-gray-200" />

        <p className="text-text-muted text-xs">
          &copy; 2025 SkillNest. All rights reserved
        </p>
      </div>
    </footer>
  );
}
