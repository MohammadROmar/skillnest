import type { AuthAction, AuthState } from './types';

export function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN':
      return { isLoggedIn: true };

    case 'LOGOUT':
      return { isLoggedIn: false };

    default:
      return state;
  }
}
