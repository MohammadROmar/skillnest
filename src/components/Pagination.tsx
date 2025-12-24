import { useMemo } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import { generatePageNumbers } from '../utils/generate-page-numbers';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  maxButtons?: number;
  basePath: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  maxButtons = 5,
  basePath,
}: PaginationProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const pageNumbers = useMemo(
    () => generatePageNumbers(currentPage, totalPages, maxButtons),
    [currentPage, totalPages, maxButtons],
  );

  function buildUrl(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(page));
    return `${basePath}?${params.toString()}`;
  }

  function goToPage(page: number) {
    navigate(buildUrl(page));
  }

  return (
    <nav className="flex items-center justify-center gap-4">
      <button
        onClick={() => goToPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1 || totalPages === 0}
        aria-disabled={currentPage === 1 || totalPages === 0}
        className="bg-background disabled:text-text-muted hidden rounded-xl border border-gray-200 p-2 md:block"
      >
        <ArrowLeftIcon className="size-4" />
      </button>

      <div className="bg-background flex items-center gap-2 rounded-xl border border-gray-200 p-1">
        {pageNumbers.map((page, idx) => {
          if (page === 'ellipsis') {
            return (
              <span key={`ellipsis-${idx}`} className="text-text-muted">
                …
              </span>
            );
          }

          return (
            <Link
              key={page}
              to={buildUrl(page)}
              aria-current={page === currentPage ? 'page' : undefined}
              className={`text-text-muted flex size-8 items-center justify-center rounded-lg p-2 ${page === currentPage ? 'bg-primary text-white' : ''}`}
            >
              {page}
            </Link>
          );
        })}
      </div>

      <button
        onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages || totalPages === 0}
        aria-disabled={currentPage === totalPages || totalPages === 0}
        className="bg-background disabled:text-text-muted hidden rounded-xl border border-gray-200 p-2 md:block"
      >
        <ArrowRightIcon className="size-4" />
      </button>
    </nav>
  );
}
