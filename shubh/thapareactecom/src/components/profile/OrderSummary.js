import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const OrderSummary = (props) => {
  let location = useLocation();
  const order = location.state;
  return (
    <Wrapper>
      <div className="container">
        <h3 style={{ color: "#ff7f23" }}>Order Information</h3>
        <br />
        <MDBRow>
          <MDBCol md="6" style={{ padding: "10px" }}>
            <h4>Billing Address</h4>
            <div>
              {order.billingInfo.firstName} {order.billingInfo.lastName}
              <br />
              {order.billingInfo.address}, {order.billingInfo.city},
              {order.billingInfo.state},<br /> {order.billingInfo.pinCode}
            </div>
            <div>Email: {order.billingInfo.email}</div>
            <div>Phone: {order.billingInfo.phone}</div>
          </MDBCol>
          <MDBCol md="6" style={{ padding: "10px 0px" }}>
            <h4>Shipping Address</h4>
            <div>
              {order.shippingInfo.firstName} {order.shippingInfo.lastName}
              <br />
              {order.shippingInfo.address}, {order.shippingInfo.state},
              {order.shippingInfo.city}, <br />
              {order.shippingInfo.pinCode}
            </div>
            <div>Email: {order.shippingInfo.email}</div>
            <div>Phone: {order.shippingInfo.phone}</div>
          </MDBCol>
          <br />
          <hr />
          <br />
          <MDBCol md="6">
            <h4>Payment Details</h4>
            <div>Mode of Payment: {order.paymentDetails.modeOfPayment}</div>
            <div>Order ID: {order.paymentDetails.orderId}</div>
            <div>Payment ID: {order.paymentDetails.paymentId}</div>
          </MDBCol>
        </MDBRow>
        <br />
        <hr />
        <br />
        <h3 style={{ color: "#ff7f23" }}>Cart Items</h3>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th className="cart-hide">Price</th>
              <th>Quantity</th>
              <th className="cart-hide">Color</th>
            </tr>
          </thead>
          <tbody>
            {order.cartDetails.cart.map((item) => (
              <tr key={item.productId}>
                <td style={{ width: "200px" }}>
                  <img src={item.image} alt={item.name} width={"100%"} />
                </td>
                <td>{item.name}</td>
                <td className="cart-hide">${item.price}</td>
                <td>{item.quantity}</td>
                <td className="cart-hide">
                  <span
                    style={{
                      backgroundColor: item.color,
                      color: item.color,
                      width: "15px",
                      height: "15px",
                      display: "inline-block",
                      borderRadius: "50%",
                    }}
                  ></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <hr />
        <br />
        <h3 style={{ color: "#ff7f23" }}>Subtotal</h3>
        <br />
        <div>Total Items: {order.cartDetails.total_item}</div>
        <div>Total Price: ${order.cartDetails.total_price}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .container {
    padding: 30px;
    margin: 30px;
    width: 90vw;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    h3 {
      font-weight: bold;
      text-transform: uppercase;
    }
    h4 {
      text-transform: uppercase;
      font-size: 15px;
      font-weight: bold;
    }
    div {
      font-size: 14px;
    }
    table {
      width: 100%;
      margin-top: 20px;
      th {
        font-weight: bold;
        font-size: 16px;
        padding: 5px;
        text-align: center;
        text-transform: uppercase;
      }
      td {
        padding: 5px;
        font-size: 14px;
        text-transform: capitalize;
        text-align: center;
      }
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .cart-hide {
        display: none;
      }
    }
  }
`;

export default OrderSummary;
