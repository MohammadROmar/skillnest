import type { CartAction, CartState } from './types';

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exists = state.items.some(
        (i) => i.courseId === action.payload.courseId,
      );

      if (exists) {
        return state;
      }

      return {
        items: [...state.items, { ...action.payload }],
      };
    }

    case 'REMOVE_ITEM':
      return {
        items: state.items.filter((i) => i.courseId !== action.payload),
      };

    case 'CLEAR_CART':
      return { items: [] };

    default:
      return state;
  }
}
