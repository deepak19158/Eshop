import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { useState, useEffect } from "react";

const Items = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (cart) {
      setLoading(false);
    }
  }, [cart]);

  useEffect(() => {
    const prevOrder = JSON.parse(localStorage.getItem("prevOrderDetails"));
    console.log(prevOrder);
    console.log(prevOrder.cartDetails.cart[0]);
    setCart(prevOrder.cartDetails.cart);
    if (cart != null) setLoading(false);
  }, [localStorage.getItem("prevOrderDetails")]);

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
                        <p
                          style={{
                            fontSize: "16px",
                            textTransform: "capitalize",
                          }}
                        >
                          {element.name}
                        </p>
                      </MDBCol>
                      {/* <MDBCol
                        md="2"
                        className="text-center d-flex justify-content-center align-items-center"
                      >
                        <p className="text-muted mb-0 small">{element.color}</p>
                      </MDBCol> */}
                      <MDBCol
                        md="2"
                        className="text-center d-flex justify-content-center align-items-center"
                      >
                        <p
                          style={{
                            fontSize: "16px",
                            textTransform: "capitalize",
                          }}
                        >
                          Qty: {element.quantity}
                        </p>
                      </MDBCol>
                      <MDBCol md="2" className="d-flex align-items-center">
                        <p
                          style={{
                            fontSize: "16px",
                            textTransform: "capitalize",
                            fontWeight: "bold",
                          }}
                        >
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
