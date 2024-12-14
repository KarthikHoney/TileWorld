import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((eachItem) =>
        eachItem.id === product.id
          ? { ...eachItem, quantity: eachItem.quantity + 1 }
          : eachItem
      );
      setCart(updatedCart);
      setCartCount((prevCount) => prevCount + 1);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      setCartCount((prevCount) => prevCount + 1);
    }
  };

  const totalAmount = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const removeFromCart = (productId) => {
    const productToRemove = cart.find((product) => product.id === productId);

    if (productToRemove) {
      if (productToRemove.quantity > 1) {
        const updatedCart = cart.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
        setCart(updatedCart);
      } else {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
      }
      setCartCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, cartCount, totalAmount, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
