import React, { createContext, useState, ReactNode } from 'react';

// Define the type for a cart item
interface CartItem {
  id: string;
  name: string;
  price: number;
}

// Define the type for the context
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: string) => void;
}

// Create the context with a default value
export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode; // Type for the children prop
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]); // Type the cart state

  const addToCart = (product: CartItem) => {
    setCart((prevCart) => [...prevCart, product]); // Use the previous state to avoid issues
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
