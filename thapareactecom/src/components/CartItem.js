import React from "react";
import FormatPrice from "../utils/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartcontext";

const CartItem = (item) => {
  let { productId, color, quantity, name, image, price } = item;
  const { removeItem, setDecrement, setIncrement } = useCartContext();

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={productId} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>

      {/* price */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* Quantity */}

      <CartAmountToggle
        quantity={quantity}
        setDecrease={() => setDecrement(productId + color)}
        setIncrease={() => setIncrement(productId + color)}
      />

      {/* Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * quantity} />
        </p>
      </div>

      <div>
        <FaTrash
          className="remove_icon"
          onClick={() => removeItem(productId + color)}
        />
      </div>
    </div>
  );
};

export default CartItem;
