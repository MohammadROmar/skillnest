import Router from './router/Router';
import { CartProvider } from './context/cart/provider';

function App() {
  return (
    <CartProvider>
      <Router />
    </CartProvider>
  );
}

export default App;
