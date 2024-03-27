import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const OrderHistory = ({ orders }) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Kolkata",
  };

  return (
    <Wrapper className="order-history-container">
      <h2>Order History</h2>
      {orders && orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="order-history-box">
          {orders.map((order) => (
            <div key={order._id} className="order-box">
              {/* <NavLink to="/orderSummary"> */}
              <NavLink
                // to={{
                //   pathname: `/orderSummary`,
                //   state: { tt: "qw" },
                // }}
                to={`/orderSummary/${order._id}`}
                state={order}
              >
                <div className="order-id">
                  Order ID: {order.paymentDetails.orderId}
                </div>
                <div className="order-details">
                  <div className="inside">
                    <div className="order-status">Status: Shipped</div>
                    <div className="order-date">
                      Date:{" "}
                      {new Date(`${order.createdAt}`).toLocaleString(
                        "en-IN",
                        options
                      )}
                    </div>
                    <div className="order-amount">
                      Amount: $
                      {order.cartDetails.total_price +
                        order.cartDetails.shipping_fee}
                    </div>

                    <div className="order-payment">
                      Payment Method: {order.paymentDetails.modeOfPayment}
                    </div>
                  </div>
                  <div className="order-image-container">
                    <img src={order.cartDetails.cart[0].image} alt="product" />
                  </div>
                </div>
                {/* <Routes>
                  <Route
                    path="/orderSummary"
                    render={() => <OrderSummary order={order} />}
                  />
                </Routes> */}
              </NavLink>
            </div>
          ))}
        </div>
      )}
      {/* <Routes>
        {orders.map((order) => (
          <Route
            key={order._id}
            path={`/orderSummary/${order._id}`}
            element={<OrderSummary order={order} />}
          />
        ))}
      </Routes> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .order-history-container {
    width: 100%;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .order-history-box {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .order-box {
    width: 100%;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
  }

  .order-id {
    font-size: 18px;
    font-weight: bold;
  }

  /* Add some padding to the order details container */
  .order-details {
    display: flex;
    padding: 10px 10px 10px 10px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 12px;
  }

  .inside {
    flex: 1; /* Allow the inside div to take up the remaining width */
    padding: 0px 10px 0px 10px;
    background-color: #f9f9f9;
  }

  .order-image-container {
    height: 100px;
    width: 100px;
    display: flex; /* Display the image container as a flex container */
    justify-content: flex-end; /* Align the image to the right */
  }

  .order-box img {
    width: 100%; /* Make the image fill the width of the order-box */
    height: auto; /* Maintain the aspect ratio */
    display: block; /* Remove any default inline spacing */
  }

  .order-image-container img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 12px;
  }

  /* Style the order status based on different statuses */
  .order-status {
    font-size: 16px;
    font-weight: bold;
    color: #4caf50; /* Green color for 'Shipped' status */
  }

  /* Style the order amount */
  .order-amount {
    font-size: 16px;
    font-weight: bold;
  }

  /* Style the order date */
  .order-date {
    font-size: 14px;
    color: #777;
  }

  /* Style the payment method */
  .order-payment {
    font-size: 16px;
    font-weight: bold;
  }

  /* Add a hover effect to order boxes */
  .order-box:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  /* Center the 'No orders found' message */
  p {
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
    color: #777;
  }

  /* Add some margin to the page heading */
  h2 {
    margin: 0;
    padding: 10px;
    margin-bottom: 20px;
    background-color: #4caf50; /* Green color for the heading background */
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    border-radius: 5px;
  }
`;
export default OrderHistory;
