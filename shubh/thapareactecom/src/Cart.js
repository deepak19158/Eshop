import styled from "styled-components";
import { useCartContext } from "./context/cartcontext";
import CartItem from "./components/CartItem";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
import FormatPrice from "./utils/FormatPrice";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  if (cart === undefined || !Array.isArray(cart)) {
    return <h3>loading</h3>;
  }
  if (cart.length === 0) {
    return (
      <EmptyDiv>
        <h3>No Item in Cart</h3>
      </EmptyDiv>
    );
  }

  return (
    <Wrapper>
      <div className="container">
        {cart.map((curElem) => {
          return (
            <CartItem key={curElem.productId + curElem.color} {...curElem} />
          );
        })}
        {/* <hr /> */}
        <div className="cart-two-button">
          <NavLink to="/products">
            <Button>continue Shopping</Button>
          </NavLink>
          <Button
            className="btn btn-clear"
            onClick={clearCart}
            style={{ fontSize: "16px" }}
          >
            Clear Cart
          </Button>
        </div>
      </div>
      <div className="order-total--amount">
        <div className="order-total--subdata">
          <div>
            <p>subtotal:</p>
            <p>
              <FormatPrice price={total_price} />
            </p>
          </div>

          <div>
            <p>shipping fee:</p>
            <p>
              <FormatPrice price={shipping_fee} />
            </p>
          </div>
          <hr />

          <div>
            <p>order total:</p>
            <p>
              <FormatPrice price={total_price + shipping_fee} />
            </p>
          </div>
          <hr />

          <div>
            <NavLink to="/checkout">
              <Button>Checkout</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const EmptyDiv = styled.div`
  display: grid;
  place-items: center;
  height: 50vh;

  h3 {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`;

const Wrapper = styled.div`
  padding: 50px 0;
  width: 100vw;
  min-width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  .container {
    width: 100%;
    max-width: 700px;
    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      .btn-clear {
        background-color: #e74c3c;
      }
    }
    .quantity-toggle {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2.4rem;
      font-size: 1.4rem;
      button {
        border: none;
        background-color: #fff;
        cursor: pointer;
      }
    }
  }
  .order-total--amount {
    width: 30%;
    min-width: 300px;
    margin: 20px 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .cart-hide {
      display: none;
    }
    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default Cart;
