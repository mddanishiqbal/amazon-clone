import React from "react";
import "./Checkout.css";
import AddBanner from "../images/add-banner.jpg";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout_add" src={AddBanner} alt="Amazon add banner" />

        <div>
          <h2 className="checkout_title">Your shopping Basket</h2>
        </div>
      </div>

      <div className="checkout_right">
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  );
};

export default Checkout;
