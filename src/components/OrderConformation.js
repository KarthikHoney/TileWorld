import React from "react";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  return (
    <div className="order-confirmation-container">
      <div className="order-confirmation-card">
        <h2 className="confirmation-title">Order Confirmation</h2>
        <p className="confirmation-message">
          Your order has been successfully placed. Thank you for shopping with
          us!
        </p>
        <p className="email-notification">
          We will send a confirmation email shortly.
        </p>
        <Link to='/catalog'><button className="shop-again-btn">Continue Shopping</button></Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
