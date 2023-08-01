import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import axios from "axios";

const Items = ({ paymentId }) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  const getOrder = async () => {
    const ordr = await axios.get(
      `http://localhost:5000/api/order/getOrderDetails/${paymentId}`
    );
    console.log(paymentId);
    setCart(ordr.data.cartDetails.cart);
    console.log("cart in items ", cart);
  };

  useEffect(() => {
    if (cart) {
      setLoading(false);
    } else {
      getOrder();
    }
  }, [cart]);

  return (
    <>
      {loading ? (
        <p>laoding</p>
      ) : (
        <div>
          {cart.map((element) => {
            return (
              <div>
                <MDBCard className="shadow-0 border mb-4">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol md="3">
                        <MDBCardImage src={element.image} fluid alt="Phone" />
                      </MDBCol>
                      <MDBCol
                        md="3"
                        className="text-center d-flex justify-content-center align-items-center"
                      >
                        <p className="text-muted mb-0">{element.name}</p>
                      </MDBCol>

                      <MDBCol
                        md="2"
                        className="text-center d-flex justify-content-center align-items-center"
                      >
                        <p className="text-muted mb-0 small">{element.color}</p>
                      </MDBCol>

                      <MDBCol
                        md="2"
                        className="text-center d-flex justify-content-center align-items-center"
                      >
                        <p className="text-muted mb-0 small">
                          Qty: {element.quantity}
                        </p>
                      </MDBCol>
                      <MDBCol
                        md="2"
                        className="text-center d-flex justify-content-center align-items-center"
                      >
                        <p className="text-muted mb-0 small">
                          ${element.price / 100}
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Items;
