import { Link } from 'react-router-dom';
import { House } from 'lucide-react';

import NotFoundIcon from '../assets/icons/NotFound';

export default function NotFoundPage() {
  return (
    <>
      <title>Not Found - SkillNest</title>

      <section className="section flex h-full max-w-lg flex-col items-center justify-center space-y-2 text-center">
        <NotFoundIcon className="w-64" />
        <h1 className="mt-6 text-xl font-bold text-black uppercase">
          404 - Page Not Found
        </h1>
        <p className="text-text-muted text-sm">
          Sorry, the page you&apos;re looking for could not be found.
        </p>
        <Link to="/" className="button">
          <House aria-hidden className="size-4" />
          <span>Go Home</span>
        </Link>
      </section>
    </>
  );
}
