import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useOrderContext } from "../../context/ordercontext";

const BillingAddress = () => {
  const { updateBillingInfo } = useOrderContext();

  const handleOnChange = (event) => {
    updateBillingInfo(event);
  };

  return (
    <MDBCol md="8">
      <MDBCol md="10" className="mb-4">
        <MDBCard className="mb-4">
          <MDBCardHeader className="py-3">
            <MDBTypography tag="h5" className="mb-0 text-font text-uppercase">
              Billing address
            </MDBTypography>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBRow className="mb-4">
              <MDBCol>
                <MDBInput
                  name="firstName"
                  onChange={handleOnChange}
                  placeholder="First name"
                  type="text"
                  required
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  name="lastName"
                  onChange={handleOnChange}
                  placeholder="Last name"
                  type="text"
                  required
                />
              </MDBCol>
            </MDBRow>
            <MDBInput
              name="address"
              onChange={handleOnChange}
              placeholder="Address"
              type="text"
              className="mb-4"
              required
            />
            <MDBInput
              name="email"
              onChange={handleOnChange}
              placeholder="Email"
              type="text"
              className="mb-4"
              required
            />
            <MDBInput
              name="phone"
              onChange={handleOnChange}
              placeholder="Phone"
              type="text"
              className="mb-4"
              required
            />
            <MDBRow className="mb-4">
              <MDBCol>
                <MDBInput
                  name="state"
                  onChange={handleOnChange}
                  placeholder="State"
                  type="text"
                  required
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  name="city"
                  onChange={handleOnChange}
                  placeholder="City"
                  type="text"
                  required
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  name="pinCode"
                  onChange={handleOnChange}
                  placeholder="Pin-Code"
                  type="text"
                  required
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>

        <hr />
      </MDBCol>
    </MDBCol>
  );
};

export default BillingAddress;
