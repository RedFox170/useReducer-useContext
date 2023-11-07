import { CartProvider } from "./components/CartContext.jsx";
import ProductList from "./components/ProductList.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";

function App() {
  return (
    // Wickele deine Anwendung in den CartProvider ein, um den Warenkorbkontext verfügbar zu machen.
    // Alle gewrapten Kompos können jetzt auf den Context zugreifen
    <CartProvider>
      <div className="App">
        <h1>Warenkorb-App</h1>
        <ProductList />
        <ShoppingCart />
      </div>
    </CartProvider>
  );
}

export default App;
