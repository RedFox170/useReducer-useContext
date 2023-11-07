import { useContext } from "react";
import CartContext from "./CartContext";

function ShoppingCart() {
  const { cartState, cartDispatch } = useContext(CartContext);

  const removeFromCart = (productId) => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: { id: productId },
    });
  };

  return (
    <div className="shopping-cart">
      <h2>Warenkorb</h2>
      {cartState.cart.length === 0 ? (
        <p>Der Warenkorb ist leer.</p>
      ) : (
        <ul>
          {cartState.cart.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price} €{" "}
              <button onClick={() => removeFromCart(product.id)}>
                Entfernen
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingCart;
