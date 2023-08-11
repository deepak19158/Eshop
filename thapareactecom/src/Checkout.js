import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import BillingAddress from "./components/checkout/BillingAddress";
import ShippingAddress from "./components/checkout/ShippingAddress";
import styled from "styled-components";
import SideCart from "./components/checkout/SideCart";
import { useCartContext } from "./context/cartcontext";
import { useOrderContext } from "./context/ordercontext";
import axios from "axios";
import { useEffect } from "react";

const Checkout = () => {
  const { total_price, shipping_fee } = useCartContext();
  const { state, cartDetails, clearOrderContextState, billingInfo } =
    useOrderContext();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("orderDetails", JSON.stringify(state));
    try {
      console.log("line 33", total_price + shipping_fee);

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
        prefill: {
          name: `${billingInfo.firstName} ${billingInfo.lastName}`,
          email: `${billingInfo.email}`,
          contact: `${billingInfo.phone}`,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error", error);
      throw error;
    }
  };

  useEffect(() => {
    clearOrderContextState(); //clear all the previous value of the order state context
  }, []);

  return (
    <Wrapper>
      <MDBContainer className="my-5 py-5" style={{ maxWidth: "1100px" }}>
        <form onSubmit={HandleSubmit}>
          <section style={{ marginLeft: "6rem" }}>
            <MDBRow>
              <BillingAddress />
              <SideCart />
            </MDBRow>
            <MDBRow>
              <ShippingAddress />
            </MDBRow>
          </section>
          <div className="text-center">
            <button
              type="Submit"
              className="btn btn-success button-order col-md-2"
            >
              Place order
            </button>
          </div>
        </form>
      </MDBContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .text-font {
    font-family: futura-pt, Tahoma, Geneva, Verdana, Arial, sans-serif;
    font-weight: 700;
    letter-spacing: 0.156rem;
    font-size: 1.125rem;
  }
  .text-price {
    padding: 0 0.625rem;
    font-family: futura-pt, Tahoma, Geneva, Verdana, Arial, sans-serif;
    font-style: normal;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 0.813rem;
    letter-spacing: 1.6px;
  }
  .text-descriptions {
    font-family: futura-pt, Tahoma, Geneva, Verdana, Arial, sans-serif;
    font-style: normal;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.125rem;
    margin: 0.313rem 0 0.938rem;
    padding: 0 0.625rem;
  }
  .button-color {
    color: #4e4e4e;
    border-color: #4e4e4e;
  }
  .button-order {
    font-family: futura-pt, Tahoma, Geneva, Verdana, Arial, sans-serif;
    font-style: normal;
    font-size: 0.75rem;
    font-weight: 700;
    background-color: hsl(90, 40%, 50%);
    color: white;
  }
`;

export default Checkout;
