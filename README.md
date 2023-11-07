# Warenkorb mit useReducer & useContext

### Schritt 1

einrichten des Projekts

### Schritt 2 useReducer-Funktion erstellen

- Reducer in spereraten Datei erstellen (in dieser Übung "cardReducer.jsx")
- Vorteil: Wiederverwendbarkeit, Organisation und erleichterne Tests
- useReducer und useContext werden oft zsm benutzt

<<IM FOLGENDEN GIBTS IN DEN KOMPONENTEN VIELE KOMMENTARE>>

Wichtige Dinge, auf die ich achten solltest:

1. **Immer eine Kopie des vorherigen Zustands erstellen:** In jedem Fall innerhalb des Reducers erstellen wir eine Kopie des vorherigen Zustands, um unerwünschte Seiteneffekte zu vermeiden. Dies wird normalerweise mit dem Spread-Operator (`...`) erreicht, wie in den Zeilen `...state` gezeigt.

2. **Klare Unterscheidung von Aktionen:** Der Reducer ist dafür verantwortlich, auf unterschiedliche Aktionen zu reagieren. Hier haben wir zwei Aktionen: "ADD_TO_CART" und "REMOVE_FROM_CART". In der `switch`-Anweisung unterscheiden wir zwischen diesen Aktionen und führen die entsprechenden Änderungen am Zustand durch.

3. **Rückgabe des aktualisierten Zustands:** Der Reducer sollte immer einen neuen Zustand zurückgeben, der auf den vorherigen Zustand und die durchgeführten Aktionen basiert. Dies ermöglicht es React, den Komponenten mitzuteilen, dass sich der Zustand geändert hat und eine Aktualisierung erforderlich ist.

Der Reducer ist ein entscheidender Teil von `useReducer`, da er die Logik für die Aktualisierung des Zustands deiner Anwendung enthält. Mit diesem Verständnis kannst du nun die Reducer-Funktion nutzen, um den Warenkorbzustand in deiner Anwendung zu verwalten.

### Schritt 3 useContext (Zustandskontext erstellen)

CartContext.jsx - mit erklärungen Kommentaren

1: Erstellung des Kontexts
Wir importieren createContext aus React und erstellen einen neuen Kontext namens CartContext mit createContext(). Ein Kontext ist wie ein "Container" für gemeinsame Daten, die zwischen Komponenten geteilt werden sollen.

2: Erstellung des Providers
Wir erstellen eine Komponente namens CartProvider, die die Aufgabe hat, den Warenkorbzustand und die Dispatch-Funktion für diesen Kontext bereitzustellen. Diese Komponente wird als Prop (children) alle darunter liegenden Komponenten erhalten, die den Zustand und die Aktionen benötigen.

3: Verwendung von useReducer
In CartProvider verwenden wir useReducer, um den Warenkorbzustand zu verwalten. Dabei verwenden wir die cartReducer-Funktion, die wir zuvor erstellt haben. Der Anfangszustand des Warenkorbs ist { cart: [] }.

4: Verwendung von CartContext.Provider
Wir verwenden CartContext.Provider, um den Zustand (cartState) und die Dispatch-Funktion (cartDispatch) innerhalb des Kontexts zu übertragen. Dies ermöglicht es Kindkomponenten, auf diese Werte zuzugreifen, ohne sie direkt zu übergeben.

5: Export des Kontexts
Zum Schluss exportieren wir CartContext, damit andere Teile der Anwendung auf den Kontext zugreifen können.
Der Kontext bietet eine Möglichkeit, Daten in der Anwendung zu teilen, ohne Prop-Übertragung über mehrere Ebenen von Komponenten. Kindkomponenten, die in den CartProvider eingebettet sind, können nun auf den Warenkorbzustand und die Dispatch-Funktion zugreifen, um Aktionen auszulösen und den Zustand zu aktualisieren.

### Schritt 4: Hauptanwendungskomponente erstellen

In diesem Schritt haben wir die Hauptanwendungskomponente erstellt und den CartProvider darum gewickelt. Dadurch wird der Warenkorbkontext für alle Kindkomponenten verfügbar.

### Schritt 5: Produktliste erstellen

In dieser ProductList-Komponente verwenden wir useContext, um auf den Warenkorbkontext zuzugreifen, und cartDispatch, um die Aktion "ADD_TO_CART" auszulösen, wenn ein Produkt hinzugefügt wird. Du kannst die Produktdaten entsprechend anpassen, um deine eigenen Produkte darzustellen.

- Verwende useContext zur Verbindung mit dem Warenkorbkontext.
- Nutze map, um Produkte aus der Liste zu rendern.
- Weise jedem gerenderten Produkt einen eindeutigen key zu.
- Die "Zum Warenkorb hinzufügen"-Schaltfläche löst die addToCart-Funktion aus.
- Überprüfe, ob die Aktion korrekt erstellt wird und die Produktinformationen im payload-Objekt enthalten sind.
- Teste die Funktionalität, um sicherzustellen, dass Produkte dem Warenkorb erfolgreich hinzugefügt werden.
- Passe die Produktdaten an deine Anforderungen an.

### Schritt 6: ShoppingCart.jsx-Komponente:

- Verwende useContext, um auf den Warenkorbkontext zuzugreifen, einschließlich cartState und cartDispatch.
- Zeige den aktuellen Warenkorb an und prüfe, ob er leer ist.
- Verwende die map-Funktion, um die Produkte im Warenkorb zu durchlaufen und sie anzuzeigen.
- Weise jedem gerenderten Produkt im Warenkorb einen eindeutigen key zu.
- Die "Entfernen"-Schaltfläche löst die removeFromCart-Funktion aus und gibt die Produkt-ID als Argument.
- Überprüfe, ob die Aktion "REMOVE_FROM_CART" korrekt erstellt wird und die Produkt-ID im payload-Objekt enthält.
- Teste die Funktionalität, um sicherzustellen, dass Produkte erfolgreich aus dem Warenkorb entfernt werden können.
- Stelle sicher, dass das Layout und die Anzeige des Warenkorbs den Anforderungen deiner Anwendung entsprechen.
- Falls erforderlich, füge weitere Funktionen zur Warenkorboptimierung hinzu, wie die Anzeige des Gesamtpreises oder das Aktualisieren der Produktmengen im Warenkorb.

### Vom Prinzip fertig!
