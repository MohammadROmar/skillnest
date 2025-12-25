import { toast } from 'sonner';
import { useEffect, useMemo, useReducer, type ReactNode } from 'react';

import { CartContext } from './context';
import { cartReducer } from './reducer';
import { loadCart, saveCart } from '../../utils/cartStorage';
import type { CartContextValue, CartItem, CartState } from './types';

const initialState: CartState = {
  items: [],
};
export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => ({
    items: loadCart(),
  }));

  useEffect(() => {
    saveCart(state.items);
  }, [state.items]);

  function isInCart(courseId: number) {
    return state.items.some((i) => i.courseId === courseId);
  }

  function addToCart(item: CartItem) {
    if (isInCart(item.courseId)) {
      return false;
    }

    dispatch({ type: 'ADD_ITEM', payload: item });
    toast.success('Course added to your cart successfully.', {
      classNames: { icon: 'text-green-500' },
    });
    return true;
  }

  function removeFromCart(courseId: number) {
    toast.error('Course removed from cart.', {
      classNames: { icon: 'text-red-500' },
    });
    dispatch({ type: 'REMOVE_ITEM', payload: courseId });
  }

  function clearCart() {
    toast.error('Your cart has been cleared.', {
      classNames: { icon: 'text-red-500' },
    });
    dispatch({ type: 'CLEAR_CART' });
  }

  const totalItems = state.items.length;

  const totalPrice = useMemo(
    () => state.items.reduce((sum, item) => sum + item.price, 0),
    [state.items],
  );

  const value: CartContextValue = {
    items: state.items,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart,
    isInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
