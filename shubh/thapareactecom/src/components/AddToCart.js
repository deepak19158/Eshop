import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/cartcontext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AddToCart = ({ product }) => {
  const navigate = useNavigate();

  const { _id, colors, stock } = product;
  const productId = _id;
  const { addToCart } = useCartContext();
  
  const [color, setColor] = useState(colors[0]);
  const [quantity, setQuanity] = useState(1);

  const handleOnClick = () => {
    if (localStorage.getItem("authToken") === null) {
      navigate("/login");
      toast.error("Please login ");
    } else {
      addToCart(productId, color, quantity, product);
      toast.success("Product Added to Cart");
    }
  };

  const setDecrease = () => {
    quantity > 1 ? setQuanity(quantity - 1) : setQuanity(1);
  };

  const setIncrease = () => {
    quantity < stock ? setQuanity(quantity + 1) : setQuanity(stock);
  };

  return (
    <Wrapper>
      <div className="colors">
        <ToastContainer />
        <p>
          Color:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>
      {/* add to cart  */}
      <CartAmountToggle
        quantity={quantity}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      {/* <NavLink
        to="/cart"
        onClick={() => addToCart(productId, color, quantity, product)}
      > */}
      <Button
        onClick={handleOnClick}
        className="btn"
        style={{ fontSize: "16px" }}
      >
        Add To Cart
      </Button>
      {/* </NavLink> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    border: none;
    outline: none;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .quantity-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .quantity-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToCart;
