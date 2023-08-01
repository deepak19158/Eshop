import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { useOrderContext } from "../../context/ordercontext";

const ShippingAddress = () => {
  const {
    updateShippingInfo,
    shippingEqualsBillingInfo,
    shippingInfo,
    clearShippingInfo,
  } = useOrderContext();

  const [checked, setCheck] = useState(false);

  const handleCheckboxChange = () => {
    setCheck(!checked);
    !checked ? shippingEqualsBillingInfo() : clearShippingInfo();
  };

  const handleOnChange = (event) => {
    updateShippingInfo(event);
  };

  return (
    <MDBCol md="8">
      <MDBCol md="10" className="mb-4">
        <MDBCard className="mb-4">
          <MDBCardHeader className="py-3">
            <MDBTypography tag="h5" className="mb-0 text-font text-uppercase">
              Shipping address
            </MDBTypography>
          </MDBCardHeader>
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              onClick={handleCheckboxChange}
              id="flexCheckChecked"
              checked={checked}
              style={{ width: "4px", height: "4px" }}
            />
            <label class="form-check-label" htmlFor="flexCheckChecked">
              Same as Billing Address
            </label>
          </div>
          <MDBCardBody>
            <MDBRow className="mb-4">
              <MDBCol>
                <MDBInput
                  name="firstName"
                  onChange={handleOnChange}
                  placeholder="First name"
                  value={shippingInfo.firstName}
                  type="text"
                  readOnly={checked}
                  required
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  name="lastName"
                  onChange={handleOnChange}
                  placeholder="Last name"
                  value={shippingInfo.lastName}
                  type="text"
                  readOnly={checked}
                  required
                />
              </MDBCol>
            </MDBRow>
            <MDBInput
              name="address"
              onChange={handleOnChange}
              placeholder="Address"
              value={shippingInfo.address}
              type="text"
              className="mb-4"
              readOnly={checked}
              required
            />
            <MDBInput
              name="email"
              onChange={handleOnChange}
              placeholder="Email"
              value={shippingInfo.email}
              type="text"
              className="mb-4"
              readOnly={checked}
              required
            />
            <MDBInput
              name="phone"
              onChange={handleOnChange}
              placeholder="Phone"
              type="text"
              value={shippingInfo.phone}
              className="mb-4"
              readOnly={checked}
              required
            />
            <MDBRow className="mb-4">
              <MDBCol>
                <MDBInput
                  name="state"
                  onChange={handleOnChange}
                  value={shippingInfo.state}
                  placeholder="State"
                  type="text"
                  readOnly={checked}
                  required
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  name="city"
                  onChange={handleOnChange}
                  placeholder="City"
                  value={shippingInfo.city}
                  type="text"
                  readOnly={checked}
                  required
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  name="pinCode"
                  onChange={handleOnChange}
                  value={shippingInfo.pinCode}
                  placeholder="Pin-Code"
                  type="text"
                  readOnly={checked}
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

export default ShippingAddress;
