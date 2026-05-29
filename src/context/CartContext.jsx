import { createContext, useState, useContext } from "react";

// 1. Create the Context object
const CartContext = createContext();

// 2. Create a Provider component that hold the global state
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Function to add a product with a specific quantity to the cart
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      // Check if the item already exists in the cart
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // If it exists, update its quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      // If its a new item, add it to the array
      return [...prevCart, { ...product, quantity }];
    });
  };

  // Helper calculation to get total item count (e.g., 2 shirts + 1 hat = 3 items)
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}

// 3. Custom hook for easy access to the context
export function useCart() {
  return useContext(CartContext);
}
