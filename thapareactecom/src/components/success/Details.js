import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import axios from "axios";

const Details = ({ paymentId }) => {
  const [Order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  const getOrder = async () => {
    const ordr = await axios.get(
      `http://localhost:5000/api/order/getOrderDetails/${paymentId}`
    );
    setOrder(ordr.data);
  };

  useEffect(() => {
    if (Order) {
      setLoading(false);
    } else {
      getOrder();
    }
  }, [Order]);

  return (
    <>
      {loading ? (
        <h1>LOading</h1>
      ) : (
        <div>
          <MDBRow className="justify-content-between">
            <MDBCol md="3" className="mb-4">
              <MDBCard className="h-100">
                <MDBCardBody>
                  <MDBCardTitle>Shipping Address</MDBCardTitle>
                  <MDBCardText>
                    Address: {Order.shippingInfo.address}
                    <br />
                    City: {Order.shippingInfo.city}
                    <br />
                    State: {Order.shippingInfo.state}
                    <br />
                    Postal Code: {Order.shippingInfo.pinCode}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol md="3" className="mb-4">
              <MDBCard className="h-100">
                <MDBCardBody>
                  <MDBCardTitle>Billing Address</MDBCardTitle>
                  <MDBCardText>
                    Address: {Order.billingInfo.address}
                    <br />
                    City: {Order.billingInfo.city}
                    <br />
                    State: {Order.billingInfo.state}
                    <br />
                    Postal Code: {Order.billingInfo.pinCode}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol md="3" className="mb-4">
              <MDBCard className="h-100">
                <MDBCardBody>
                  <MDBCardTitle>Payment Details</MDBCardTitle>
                  <MDBCardText>
                    Mode of Payment: {Order.paymentDetails.modeOfPayment}
                    <br />
                    Payment Id : {Order.paymentDetails.paymentId}
                    <br />
                    Order Id: ${Order.paymentDetails.orderId}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol md="3" className="mb-4">
              <MDBCard className="h-100">
                <MDBCardBody>
                  <MDBCardTitle>Total Amount</MDBCardTitle>
                  <MDBCardText>
                    Subtotal: ${Order.cartDetails.total_price / 100}
                    <br />
                    Shipping Fee: ${Order.cartDetails.shipping_fee / 100}
                    <br />
                    Total Amount to pay: $
                    {Order.cartDetails.total_price / 100 +
                      Order.cartDetails.shipping_fee / 100}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      )}
    </>
  );
};

export default Details;
