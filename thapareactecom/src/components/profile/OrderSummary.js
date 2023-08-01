import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const OrderSummary = (props) => {
  let location = useLocation();
  const order = location.state;
  return (
    <Wrapper>
      <OrderInfo>
        <h2>Order Information</h2>
        <Section>
          <h3>Billing Address</h3>
          <p>
            Name: {order.billingInfo.firstName} {order.billingInfo.lastName}
          </p>
          <p>Address: {order.billingInfo.address}</p>
          <p>Email: {order.billingInfo.email}</p>
          <p>Phone: {order.billingInfo.phone}</p>
          <p>State: {order.billingInfo.state}</p>
          <p>City: {order.billingInfo.city}</p>
          <p>Pin Code: {order.billingInfo.pinCode}</p>
        </Section>
        <Section>
          <h3>Shipping Address</h3>
          <p>
            Name: {order.shippingInfo.firstName} {order.shippingInfo.lastName}
          </p>
          <p>Address: {order.shippingInfo.address}</p>
          <p>Email: {order.shippingInfo.email}</p>
          <p>Phone: {order.shippingInfo.phone}</p>
          <p>State: {order.shippingInfo.state}</p>
          <p>City: {order.shippingInfo.city}</p>
          <p>Pin Code: {order.shippingInfo.pinCode}</p>
        </Section>
        <Section>
          <h3>Payment Details</h3>
          <p>Mode of Payment: {order.paymentDetails.modeOfPayment}</p>
          <p>Order ID: {order.paymentDetails.orderId}</p>
          <p>Payment ID: {order.paymentDetails.paymentId}</p>
        </Section>
      </OrderInfo>
      <CartInfo>
        <h2>Cart Items</h2>
        {order.cartDetails.cart.map((item) => (
          <CartItem key={item.productId}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Color: {item.color}</p>
            </div>
          </CartItem>
        ))}
        <SubTotal>
          <h3>Subtotal</h3>
          <p>Total Items: {order.cartDetails.total_item}</p>
          <p>Total Price: ${order.cartDetails.total_price}</p>
        </SubTotal>
      </CartInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const OrderInfo = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  margin-bottom: 20px;
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  p {
    margin: 5px 0;
  }
`;

const CartInfo = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const CartItem = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
  }
  div {
    flex: 1;
  }
  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  p {
    margin: 2px 0;
  }
`;

const SubTotal = styled.div`
  text-align: right;
  margin-top: 20px;
  p {
    margin: 5px 0;
  }
`;
export default OrderSummary;
