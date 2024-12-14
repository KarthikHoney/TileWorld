import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import '../components/style/style.css'

import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/catalog">Browse Products</Link></p>
      ) : (
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} className="cart-item-img" />
              <div className="cart-item-details">
                <h3>{product.name}</h3>
                <p><strong>Price:</strong> ${product.price}</p>
                <Link to="/checkout"> <button className="btn btn-primary">Proceed To CheckOut</button>
                </Link>
                <button onClick={() => handleRemoveFromCart(product.id)} className="btn btn-danger">
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
