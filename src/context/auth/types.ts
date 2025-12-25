export interface AuthState {
  isLoggedIn: boolean;
}

export type AuthAction = { type: 'LOGIN' } | { type: 'LOGOUT' };

export interface AuthContextValue {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}
