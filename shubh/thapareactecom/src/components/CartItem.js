import React from "react";
import FormatPrice from "../utils/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";

import { useCartContext } from "../context/cartcontext";
import styled from "styled-components";

const CartItem = (item) => {
  let { productId, color, quantity, name, image, price } = item;
  const { removeItem, setDecrement, setIncrement } = useCartContext();

  return (
    <Wrapper>
      <div className="card">
        <div className="card-img">
          <img src={image} alt={productId} style={{ width: "100%" }} />
        </div>
        <div className="card-body">
          <strong>{name}</strong>
          <span className="colorCode">
            color:{"    "}
            <span
              style={{
                backgroundColor: color,
                color: color,
                width: "15px",
                height: "15px",
                display: "inline-block",
                borderRadius: "50%",
              }}
            ></span>
          </span>
          <br />
          <span className="priceTag">
            {/* Subtotal */}
            <FormatPrice price={price * quantity} />
            {/* <FormatPrice price={price} /> */}
          </span>
        </div>

        {/* Quantity */}
        <div className="card-qty">
          <CartAmountToggle
            quantity={quantity}
            setDecrease={() => setDecrement(productId + color)}
            setIncrease={() => setIncrement(productId + color)}
          />
          <span onClick={() => removeItem(productId + color)}>Remove</span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  min-width: 300px;
  border-radius: 10px;
  .card {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .card-img {
      width: 100%;
      max-width: 200px;
      padding: 10px;
      img {
        width: 100%;
      }
    }
    .card-body {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      strong {
        font-size: 20px;
        text-transform: capitalize;
        font-weight: 500;
      }
      .colorCode {
        font-size: 14px;
      }
      .priceTag {
        font-size: 20px;
        font-weight: 800;
      }
    }
    .card-qty {
      width: 200px;
      display: flex;
      align-items: center;
      flex-direction: column;
      span {
        font-size: 16px;
        color: red;
        cursor: pointer;
        font-weight: 500;
        margin-top: 10px;
      }
    }
  }
`;

export default CartItem;
