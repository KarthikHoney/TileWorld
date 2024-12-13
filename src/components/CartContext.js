import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount,setCartCount] = useState(0);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setCartCount((prevCount)=>prevCount+1)
  };
  const totalAmount = cart.reduce((acc, product) => acc + product.price, 0);

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(product => product.id !== productId));
    setCartCount((prevCount)=>prevCount-1)

  };

  return (
    <CartContext.Provider value={{ cart, addToCart,cartCount,totalAmount, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
