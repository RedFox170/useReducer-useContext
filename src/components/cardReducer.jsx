// cartReducer.js

// Der Reducer ist eine Funktion, die den vorherigen Zustand und eine Aktion annimmt und einen neuen Zustand zurückgibt.

export function cartReducer(state, action) {
  switch (action.type) {
    // Fall "ADD_TO_CART": Wenn die Aktion "ADD_TO_CART" ausgelöst wird, fügen wir ein Produkt zum Warenkorb hinzu.
    case "ADD_TO_CART":
      return {
        ...state, // Wir erstellen eine Kopie des vorherigen Zustands.
        cart: [...state.cart, action.payload],
        // Wir fügen das neue Produkt zur Warenkorbliste im Zustand hinzu.
        // action.payload = In unserem beispiel speichert es unser Produkt welches in den Korb soll
      };

    // Fall "REMOVE_FROM_CART": Wenn die Aktion "REMOVE_FROM_CART" ausgelöst wird, entfernen wir ein Produkt aus dem Warenkorb.
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id), // Wir filtern die Warenkorbliste, um das Produkt mit der angegebenen ID zu entfernen.
      };

    // Standardfall: Wenn keine der oben genannten Aktionen zutrifft, geben wir einfach den aktuellen Zustand unverändert zurück.
    default:
      return state;
  }
}
