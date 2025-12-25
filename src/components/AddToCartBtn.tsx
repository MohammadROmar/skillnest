import { BadgeCheck, LogIn, ShoppingCart } from 'lucide-react';

import { useAuth } from '../context/auth/hooks';
import { useCart } from '../context/cart/hooks';
import type { Course } from '../data/courses';
import { Link } from 'react-router-dom';

type Props = { course: Course; short?: boolean };

function AddToCartBtn({ course, short = false }: Props) {
  const { isLoggedIn } = useAuth();
  const { addToCart, isInCart } = useCart();

  function handleAdd() {
    addToCart({
      courseId: course.id,
      title: course.title,
      price: course.price,
      image: course.image,
    });
  }

  if (!isLoggedIn) {
    return (
      <Link
        to="/log-in"
        className="button w-full rounded-lg text-center text-sm"
      >
        <div className={`p-0.5 ${short ? '' : 'hidden'}`}>
          <LogIn className="size-5" />
        </div>
        <span className={`${short ? 'sr-only' : ''}`}>
          You need to be loggged in to add courses to your cart
        </span>
      </Link>
    );
  }

  if (isInCart(course.id))
    return (
      <p className="button w-full cursor-default rounded-lg">
        <div className={short ? 'p-0.5' : undefined}>
          <BadgeCheck className="size-5" />
        </div>
        <span className={`${short ? 'sr-only' : ''}`}>
          Course already in Cart
        </span>
      </p>
    );

  return (
    <button onClick={handleAdd} className="button w-full rounded-lg">
      <div className={short ? 'p-0.5' : undefined}>
        <ShoppingCart className="size-5" />
      </div>
      <span className={`font-medium ${short ? 'sr-only' : ''}`}>
        Add to Cart
      </span>
    </button>
  );
}
export default AddToCartBtn;
