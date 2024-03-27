const orderReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_BILLING_ADDRESS":
      const { name, value } = action.payload;
      return {
        ...state,
        billingInfo: {
          ...state.billingInfo,
          [name]: value,
        },
      };

    case "UPDATE_SHIPPING_ADDRESS":
      const { name: shippingName, value: shippingValue } = action.payload; // Renamed variables
      return {
        ...state,
        shippingInfo: {
          ...state.shippingInfo,
          [shippingName]: shippingValue,
        },
      };

    case "CLEAR_ALL_THE_SHIPPING_INFO":
      return {
        ...state,
        shippingInfo: {
          ...state.shippingInfo,
          firstName: "",
          lastName: "",
          address: "",
          email: "",
          phone: "",
          state: "",
          city: "",
          pinCode: "",
        },
      };

    case "UPDATE_SHIPPING_EQUALS_TO_BILLING_ADDRESS":
      return {
        ...state,
        shippingInfo: {
          ...state.shippingInfo,
          ...state.billingInfo, // Copy values from billingInfo
        },
      };

    case "UPDATE_CART_DETAILS":
      const { cart, total_price, shipping_fee, total_item } = action.payload;
      return {
        ...state,
        cartDetails: {
          ...state.cartDetails,
          cart,
          shipping_fee,
          total_item,
          total_price,
        },
      };

    case "UPDATE_COMPLETE_ORDER":
      const order = JSON.parse(localStorage.getItem("orderDetails"));
      console.log(
        "line 63 orderReducer updating orderdetails to context",
        order
      );
      return {
        ...state,
        ...order,
      };

    case "UPDATE_PAYMENT_DETAILS":
      console.log("state @ time of updating payment details", state);
      console.log("orderReducer update payment details ----> ", action.payload);
      const { razorpay_order_id, razorpay_payment_id, modeOfPayment } =
        action.payload;
      return {
        ...state,
        paymentDetails: {
          ...state.paymentDetails,
          orderId: razorpay_order_id,
          paymentId: razorpay_payment_id,
          modeOfPayment,
        },
      };

    case "CLEAR_STATE":
      return {
        ...state,
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

    default:
      return state;
  }
};

export default orderReducer;
