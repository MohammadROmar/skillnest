import { Link, useLocation } from 'react-router-dom';

import { navigationList } from '../data/navigationList';

function NavigationList() {
  const location = useLocation();

  return (
    <ul className="hidden items-center gap-6 text-sm md:flex">
      {navigationList.map(({ label, to }) => {
        const isActive = to === location.pathname;

        return (
          <li key={to}>
            <Link
              to={to}
              className={`hover:text-primary transition-colors duration-300 hover:underline ${isActive ? 'text-primary' : ''}`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavigationList;
