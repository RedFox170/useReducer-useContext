import { useContext } from "react";
import CartContext from "./CartContext";

function ProductList() {
  const { cartDispatch } = useContext(CartContext);

  const products = [
    { id: 1, name: "Produkt 1", price: 10.99 },
    { id: 2, name: "Produkt 2", price: 19.99 },
    { id: 3, name: "Produkt 3", price: 7.49 },
  ];

  const addToCart = (product) => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
      },
    });
  };

  return (
    <div className="product-list">
      <h2>Produkte</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} €{" "}
            <button onClick={() => addToCart(product)}>
              Zum Warenkorb hinzufügen
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
