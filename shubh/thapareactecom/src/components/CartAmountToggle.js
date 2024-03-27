import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ quantity, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="quantity-toggle">
        <button onClick={setDecrease} style={{ fontSize: "14px" }}>
          <FaMinus />
        </button>
        <div className="quantity-style" style={{ fontSize: "16px", color:'#444' }}>
          {quantity}
        </div>
        <button onClick={setIncrease} style={{ fontSize: "14px" }}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
