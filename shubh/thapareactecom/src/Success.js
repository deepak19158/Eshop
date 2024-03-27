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
  const [loading, setLoading] = useState(true); //loading variable - to render component - after all logic & api call

  useEffect(() => {
    // useEffect for gettting paymnet parameter
    const searchParams = new URLSearchParams(location.search);
    const jsonData = searchParams.get("data");
    const parsedData = JSON.parse(jsonData);

    axios
      .get(
        `http://localhost:5000/api/paymentInfo/${parsedData.razorpay_payment_id}`
      )
      .then((res) => {
        refillCompleteOrder(); //updating order details to state from local storage - orderDetails key
        updatePaymentDetails({
          //updating payment details of the order
          ...parsedData,
          modeOfPayment: res.data.method,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [location]);

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
            // ...JSON.parse(localStorage.getItem("prevOrderDetails")),
          },
          {
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("authToken"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          setData(res);
          localStorage.setItem("prevOrderDetails", JSON.stringify(state)); //updating prevOrder details with state having all correct values
          localStorage.removeItem("orderDetails");
          setLoading(false);
          clearCart();
          clearOrderContextState();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [state.paymentDetails]);

  return (
    <>
      {!loading ? (
        <section
          className="h-100 gradient-custom"
          style={{ backgroundColor: "#eee" }}
        >
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="10" xl="8">
                <MDBCard style={{ borderRadius: "10px" }}>
                  <Greeting />
                  <MDBCardBody className="p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <p
                        className="fw-normal mb-0"
                        style={{ color: "#a8729a", fontSize: "16px" }}
                      >
                        Order Details
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "14px" }}
                      >
                        Order Id : {data.data._id}
                      </p>
                    </div>
                    <Items />
                    <Details />
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      ) : (
        <div style={{ height: "50%" }}>
          <p>Can't open this Page, you can check your order in profile</p>
        </div>
      )}
    </>
  );
};

export default Success;
