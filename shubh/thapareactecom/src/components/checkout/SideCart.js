import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import FormatPrice from "../../utils/FormatPrice";
import { useCartContext } from "../../context/cartcontext";
import { NavLink } from "react-router-dom";

const SideCart = () => {
  const { cart, total_price, shipping_fee, total_item } = useCartContext();

  return (
    <MDBCol md="12" className="mb-4 position-statics">
      <MDBCard className="mb-4">
        <MDBCardHeader className="py-3">
          <MDBTypography tag="h5" className="mb-0 text-font">
            {total_item} item
            <span className="float-end mt-1" style={{ fontSize: "13px" }}>
              <NavLink to="/cart">Edit</NavLink>
            </span>
          </MDBTypography>
        </MDBCardHeader>
        <MDBCardBody>
          {cart.map((curElem) => {
            return (
              <MDBRow key={curElem.productId} style={{ marginTop: "5px" }}>
                <MDBCol md="4">
                  <MDBCardImage
                    src={curElem.image}
                    className="rounded-3"
                    style={{ width: "100px" }}
                    alt="Blue Jeans Jacket"
                  />
                </MDBCol>
                <MDBCol md="6" className="ms-3">
                  <p className="mb-0 text-descriptions text-capitalize">
                    {curElem.name}{" "}
                  </p>
                  <span
                    className="mb-0 text-price"
                    style={{ fontSize: "14px" }}
                  >
                    <FormatPrice price={curElem.price} /> {"   "}x{" "}
                    {curElem.quantity}
                  </span>

                  {/* <p className="text-descriptions mt-0">
                    Qty:
                    <span className="text-descriptions fw-bold">
                    </span>
                  </p> */}
                </MDBCol>
              </MDBRow>
            );
          })}
        </MDBCardBody>
        <MDBCardFooter className="mt-4" style={{ fontSize: "14px" }}>
          <MDBListGroup flush>
            <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0 text-muted">
              Subtotal
              <span>
                <FormatPrice price={total_price} />
              </span>
            </MDBListGroupItem>

            <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0 text-muted">
              Shipping Fee
              <span>
                <FormatPrice price={shipping_fee} />
              </span>
            </MDBListGroupItem>

            <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0 fw-bold text-uppercase border-0">
              Total to pay
              <span>
                <FormatPrice price={total_price + shipping_fee} />
              </span>
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBCardFooter>
      </MDBCard>
    </MDBCol>
  );
};

export default SideCart;
