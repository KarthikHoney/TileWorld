import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import confetti from "canvas-confetti";
import "../components/style/style.css";

import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, totalAmount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = (event) => {
    event.preventDefault();
    confetti({
      particleCount: 500,
      spread: 360,
      origin: { y: 0.5 },
    });
    navigate("/order-confirmation");
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty. Please add items to your cart first.</p>
          <Link to="/cart">
            <button className="btn btn-primary">Back To Cart</button>
          </Link>
        </div>
      ) : (
        <div>
          <h3>Your Products:</h3>
          <div className="row">
            {cart.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">₹{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h4>Total Amount: ${totalAmount}</h4>

          {/* Checkout form */}
          <form onSubmit={handleCheckout}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input type="text" id="name" className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Shipping Address
              </label>
              <input
                type="text"
                id="address"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="payment" className="form-label">
                Payment Method
              </label>
              <select id="payment" className="form-control" required>
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank-transfer">Bank Transfer</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              Complete Purchase
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
