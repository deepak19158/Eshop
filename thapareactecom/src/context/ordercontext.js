import React, { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../reducer/orderReducer";
import { useCartContext } from "./cartcontext";

const OrderContext = createContext();

const initialState = {
  billingInfo: {
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    pinCode: "",
  },
  shippingInfo: {
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    pinCode: "",
  },
  cartDetails: {
    cart: [],
    shipping_fee: "",
    total_item: "",
    total_price: "", //excluding shipping fee
  },
  paymentDetails: {
    modeOfPayment: "",
    orderId: "",
    paymentId: "",
  },
};

export const OrderContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cart, total_price, shipping_fee, total_item } = useCartContext();

  const updateBillingInfo = (event) => {
    const { name, value } = event.target;
    return dispatch({
      type: "UPDATE_BILLING_ADDRESS",
      payload: { name, value },
    });
  };

  const updateShippingInfo = (event) => {
    const { name, value } = event.target;
    return dispatch({
      type: "UPDATE_SHIPPING_ADDRESS",
      payload: { name, value },
    });
  };

  const shippingEqualsBillingInfo = () => {
    return dispatch({
      type: "UPDATE_SHIPPING_EQUALS_TO_BILLING_ADDRESS",
    });
  };

  const clearShippingInfo = () => {
    return dispatch({ type: "CLEAR_ALL_THE_SHIPPING_INFO" });
  };

  const updatePaymentDetails = (data) => {
    console.log("line 72 order context", data);
    return dispatch({ type: "UPDATE_PAYMENT_DETAILS", payload: data });
  };

  const refillCompleteOrder = () => {
    return dispatch({ type: "UPDATE_COMPLETE_ORDER" });
  };

  const clearOrderContextState = () => {
    return dispatch({ type: "CLEAR_STATE" });
  };

  useEffect(() => {
    dispatch({
      type: "UPDATE_CART_DETAILS",
      payload: { cart, total_price, shipping_fee, total_item },
    });
  }, [cart, total_price, total_item, shipping_fee]);

  return (
    <OrderContext.Provider
      value={{
        ...state,
        state,
        updateBillingInfo,
        updateShippingInfo,
        shippingEqualsBillingInfo,
        clearShippingInfo,
        updatePaymentDetails,
        refillCompleteOrder,
        clearOrderContextState,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  return useContext(OrderContext);
};
