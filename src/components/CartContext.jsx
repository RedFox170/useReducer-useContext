import { createContext, useReducer } from "react";
import { cartReducer } from "./cardReducer.jsx";

// Schritt 1: Erstelle einen Kontext mit createContext.
const CartContext = createContext();

// Schritt 2: Erstelle einen Provider, der den Warenkorbzustand und die Dispatch-Funktion bereitstellt.
export const CartProvider = ({ children }) => {
  // Schritt 3: Verwende useReducer, um den Warenkorbzustand zu verwalten.
  const [cartState, cartDispatch] = useReducer(cartReducer, { cart: [] });

  return (
    // Schritt 4: Verwende den CartContext.Provider, um den Zustand und die Dispatch-Funktion bereitzustellen.
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Schritt 5: Exportiere den CartContext für die Verwendung in anderen Teilen der Anwendung.
export default CartContext;
