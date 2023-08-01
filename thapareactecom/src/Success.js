import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Greeting from "./components/success/Greeting";
import Items from "./components/success/Items";
import Details from "./components/success/Details";
import { useOrderContext } from "./context/ordercontext";
import { useCartContext } from "./context/cartcontext";
import axios from "axios";

const Success = () => {
  const location = useLocation();
  const {
    state,
    refillCompleteOrder,
    updatePaymentDetails,
    clearOrderContextState,
  } = useOrderContext();

  const [data, setData] = useState(null);
  const { clearCart } = useCartContext();
  const HandlePaymentDetails = async () => {
    const { razorpay_payment_id } = data;

    try {
      const payDetails = await axios.get(
        `http://localhost:5000/api/paymentInfo/${razorpay_payment_id}`
      );
      updatePaymentDetails({ ...data, modeOfPayment: payDetails.data.method });
      console.log("@sucess lin 36 order state ---> ", state);
    } catch (error) {
      console.log("Error @ Success line 29 ", error);
    }
  };

  useEffect(() => {
    // useEffect for gettting paymnet parameter
    const searchParams = new URLSearchParams(location.search);
    const jsonData = searchParams.get("data");
    const parsedData = JSON.parse(jsonData);

    setData(parsedData);
  }, [location]);

  useEffect(() => {
    console.log(data);
    if (data) {
      refillCompleteOrder(); //after refreshing order context gets erased completely so to preserve it
      HandlePaymentDetails(); //after updating order context payment details being filled
    }
  }, [data]);

  useEffect(() => {
    if (
      state.paymentDetails.modeOfPayment !== "" &&
      state.billingInfo.firstName !== "" //so that if user refresh the page palce order api shouldn't be called with empty feilds
    ) {
      console.log("line 67 Success.js going to place order");

      //this is called multiple time we need only once when it has complete information and modeofpayment is upadted very lastly
      axios
        .post(
          "http://localhost:5000/api/order/placeOrder",
          {
            ...state,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("authToken"),
            },
          }
        )
        .then((res) => {
          clearCart();
          localStorage.removeItem("orderDetails");
          clearOrderContextState();
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [state.paymentDetails]);

  return (
    <>
      {data ? (
        <section
          className="h-100 gradient-custom"
          style={{ backgroundColor: "#eee" }}
        >
          {}
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="10" xl="8">
                <MDBCard style={{ borderRadius: "10px" }}>
                  <Greeting />

                  <MDBCardBody className="p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <p
                        className="lead fw-normal mb-0"
                        style={{ color: "#a8729a" }}
                      >
                        Order Details
                      </p>
                      <p className="small text-muted mb-0">
                        Order Id : {data.razorpay_order_id}
                      </p>
                    </div>

                    <Items paymentId={data.razorpay_payment_id} />

                    <Details paymentId={data.razorpay_payment_id} />
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
};

export default Success;
