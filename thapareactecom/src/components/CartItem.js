import React, { useEffect } from "react";
import FormatPrice from "../utils/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartcontext";
import axios from "axios";
import { useState } from "react";

const CartItem = (item) => {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);

  let { productId, color, quantity } = item;
  // let id = productId;

  const getProduct = async (productId) => {
    const response = await axios.get(
      "http://localhost:5000/api/products/" + productId,
      {
        //api call to a product information
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setProduct(JSON.parse(JSON.stringify(response.data)));
    setLoading(false);
  };

  useEffect(() => {
    getProduct(productId);
  }, []);

  const { removeItem, setDecrement, setIncrement } = useCartContext();

  if (loading) return <h1>Loading</h1>;
  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={product.image[0].url} alt={productId} />
          </figure>
        </div>
        <div>
          <p>{product.name}</p>
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
          <FormatPrice price={product.price} />
        </p>
      </div>

      {/* Quantity */}

      <CartAmountToggle
        quantity={quantity}
        setDecrease={() => setDecrement(productId)}
        setIncrease={() => setIncrement(productId)}
      />

      {/* Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={product.price * quantity} />
        </p>
      </div>

      <div>
        <FaTrash
          className="remove_icon"
          onClick={() => removeItem(productId)}
        />
      </div>
    </div>
  );
};

export default CartItem;
