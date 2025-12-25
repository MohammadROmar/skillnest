import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Trash2 } from 'lucide-react';

import { useCart } from '../context/cart/useCart';
import { formatPrice } from '../utils/format-price';
import type { CartItem } from '../context/cart/types';
import EmptyCartIcon from '../assets/icons/EmtyCart';

export default function CartPage() {
  const { items, totalItems, clearCart } = useCart();

  if (items.length === 0) return <EmptyCart />;

  return (
    <>
      <section className="section flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-black">
            Your Cart
          </h1>
          <p className="text-text-muted mt-1 text-sm">
            {totalItems} courses in your cart
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-xs">
          <button
            onClick={clearCart}
            className="flex cursor-pointer items-center gap-2 text-red-500"
          >
            <Trash2 className="size-3" />
            <span>Clear Cart</span>
          </button>
          <Link to="/courses" className="text-primary flex items-center gap-1">
            <ArrowLeft className="size-3" />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </section>

      <div className="section grid grid-cols-1 gap-6 lg:grid-cols-7">
        <section className="lg:col-span-5">
          <ul className="space-y-4">
            {items.map((item) => (
              <CourseCard key={item.courseId} item={item} />
            ))}
          </ul>
        </section>
        <OrderSummary />
      </div>
    </>
  );
}

function OrderSummary() {
  const { totalPrice } = useCart();

  return (
    <section className="bg-background border-primary/20 h-fit space-y-4 rounded-2xl border p-4 lg:col-span-2">
      <h2 className="text-xl font-semibold">Order Summary</h2>

      <div className="space-y-2">
        <p className="text-text-muted flex items-center justify-between gap-4 text-sm">
          <span>Original Price</span>
          <span>{formatPrice(totalPrice)}</span>
        </p>
        <p className="text-text-muted flex items-center justify-between gap-4 text-sm">
          <span>Tax</span>
          <span>{formatPrice(0)}</span>
        </p>
      </div>

      <hr className="text-gray-200" />

      <p className="flex items-center justify-between gap-4 text-lg font-semibold">
        <span>Total</span>
        <span>{formatPrice(totalPrice)}</span>
      </p>

      <form>
        <label htmlFor="coupon" className="text-text-muted text-sm uppercase">
          coupon code
        </label>
        <div className="mt-1 flex items-center gap-2">
          <input
            id="coupon"
            type="text"
            className="input rounded-lg bg-white"
          />
          <button
            type="button"
            className="cursor-pointer rounded-lg border border-gray-200 bg-white px-4 py-2"
          >
            Apply
          </button>
        </div>
      </form>

      <button className="bg-primary flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2 text-white">
        <span>Proceed to Checkout</span>
        <ArrowRight className="size-4" />
      </button>
    </section>
  );
}

function CourseCard({ item }: { item: CartItem }) {
  const { removeFromCart } = useCart();

  return (
    <li className="bg-background flex flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-gray-200 lg:flex-row lg:items-center lg:p-4">
      <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-center">
        <img
          src={item.image}
          aria-labelledby=""
          className="h-48 w-full object-cover object-center lg:h-24 lg:w-44 lg:rounded-lg"
        />

        <div className="px-4 lg:p-0">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <Link
            to={`/courses/${item.courseId}`}
            className="text-primary flex items-center gap-2 text-xs"
          >
            <span>View course</span>
            <ArrowRight className="size-3" />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 p-4 pt-0 lg:p-0">
        <h3 className="text-lg font-semibold">{formatPrice(item.price)}</h3>
        <button
          aria-label="Remove from cart"
          title="Remove from cart"
          onClick={() => removeFromCart(item.courseId)}
          className="cursor-pointer rounded-lg bg-red-100 p-1"
        >
          <Trash2 className="size-5 text-red-500" />
        </button>
      </div>
    </li>
  );
}

function EmptyCart() {
  return (
    <section className="section flex h-full flex-col items-center justify-center space-y-2 text-center">
      <EmptyCartIcon className="w-64" />
      <h1 className="text-3xl font-bold text-black">
        Your cart is <span className="text-primary">Empty</span>
      </h1>
      <p className="text-text-muted max-w-lg text-sm">
        It looks like you haven&apos;t enrolled in any new adventures yet. The
        next step in your journey is waiting.
      </p>
      <Link to="/courses" className="button mt-4">
        <span>Browse Courses</span>
        <ArrowRight className="size-4" />
      </Link>
    </section>
  );
}
