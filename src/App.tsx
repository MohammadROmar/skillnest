import Router from './router/Router';
import { CartProvider } from './context/cart/provider';
import { AuthProvider } from './context/auth/provides';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
