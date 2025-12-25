import { useReducer, type ReactNode } from 'react';

import { AuthContext } from './context';
import { authReducer } from './reducer';
import { loadLogin, STORAGE_KEY } from '../../utils/loadLoginState';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, {
    isLoggedIn: loadLogin(),
  });

  function login() {
    localStorage.setItem(STORAGE_KEY, 'true');
    dispatch({ type: 'LOGIN' });
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY);
    dispatch({ type: 'LOGOUT' });
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
