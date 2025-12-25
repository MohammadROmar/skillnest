import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

import { useCart } from '../context/cart/useCart';
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
      <li>
        <CartNavLink isActive={location.pathname === '/cart'} />
      </li>
    </ul>
  );
}

export function CartNavLink({ isActive }: { isActive: boolean }) {
  const { totalItems } = useCart();

  return (
    <Link
      to="/cart"
      aria-label="Cart"
      title="Cart"
      className={`relative ${isActive ? 'text-primary fill-primary' : ''}`}
    >
      {totalItems !== 0 && (
        <div
          aria-label="Total items in cart"
          className="bg-primary absolute -top-[50%] -right-[50%] flex aspect-square size-full items-center justify-center rounded-full"
        >
          <p className="text-[8px] leading-none text-white">{totalItems}</p>
        </div>
      )}
      <ShoppingCart className="size-4" />
    </Link>
  );
}

export default NavigationList;
