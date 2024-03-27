/* eslint-disable react-hooks/exhaustive-deps */
import { MDBContainer } from "mdb-react-ui-kit";
import BillingAddress from "./components/checkout/BillingAddress";
import ShippingAddress from "./components/checkout/ShippingAddress";
import { useCartContext } from "./context/cartcontext";
import { useOrderContext } from "./context/ordercontext";
import axios from "axios";
// import { useEffect } from "react";
import SideCart from "./components/checkout/SideCart";

const Checkout = () => {
  const { total_price, shipping_fee } = useCartContext();
  const { state, cartDetails } = useOrderContext();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("orderDetails", JSON.stringify(state)); //right now state doesn;t have paymnet info - it will be updated at success page
    localStorage.setItem("prevOrderDetails", JSON.stringify(state));
    try {
      const order = await axios({
        method: "post",
        url: "http://localhost:5000/api/payment/createorder",
        data: {
          amount: total_price + shipping_fee,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { id: order_id, amount } = order.data;

      const options = {
        key: "rzp_test_dKhJ2jiI5qasOl", // Enter the Key ID generated from the Dashboard
        amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:5000/api/payment/success",
        // callback_url: "http://localhost:3000/try",
        prefill: {
          name: "deepak gupta",
          email: "dg91918@gmail.com",
          contact: "8527878887",
        },
        notes: {
          address: "Razorpay Corporate Office",
          cart: JSON.stringify(cartDetails),
        },
        theme: {
          color: "#3399cc",
        },
      };
      console.log(options);
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error", error);
      throw error;
    }
  };

  return (
    <>
      <MDBContainer className="my-5 py-5" style={{ maxWidth: "1100px" }}>
        <SideCart />
        <form onSubmit={HandleSubmit}>
          <BillingAddress />
          <ShippingAddress />
          <div className="text-center">
            <button
              type="Submit"
              className="btn btn-success btn-block mx-auto"
              style={{
                height: "50px",
                fontSize: "16px",
                borderRadius: "10px",
                width: "50%",
              }}
            >
              Place order
            </button>
          </div>
        </form>
      </MDBContainer>
    </>
  );
};

export default Checkout;
