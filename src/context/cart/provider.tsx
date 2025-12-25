import { useEffect, useMemo, useReducer, type ReactNode } from 'react';

import type { CartContextValue, CartItem, CartState } from './types';

import { CartContext } from './context';
import { cartReducer } from './reducer';
import { loadCart, saveCart } from '../../utils/cartStorage';

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
    return true;
  }

  function removeFromCart(courseId: number) {
    dispatch({ type: 'REMOVE_ITEM', payload: courseId });
  }

  function clearCart() {
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
