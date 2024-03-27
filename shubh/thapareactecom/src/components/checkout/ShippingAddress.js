import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { useState } from "react";
import { useOrderContext } from "../../context/ordercontext";
import styled from "styled-components";

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
    <Wrapper>
      <MDBContainer>
        <h4>Shipping address</h4>
        <MDBRow>
          <div>
            <input
              type="checkbox"
              onChange={handleCheckboxChange}
              id="flexCheckChecked"
              checked={checked}
              style={{ width: "12px", height: "12px" }}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Same as Billing Address
            </label>
          </div>
          <MDBCol md="6">
            <label htmlFor="firstName">
              First Name <span>*</span>
            </label>
            <input
              name="firstName"
              onChange={handleOnChange}
              placeholder="First name"
              value={shippingInfo.firstName}
              type="text"
              readOnly={checked}
              required
              id="firstName"
            />
          </MDBCol>
          <MDBCol md="6">
            <label htmlFor="lastName">
              Last Name <span>*</span>
            </label>
            <input
              name="lastName"
              id="lastName"
              onChange={handleOnChange}
              placeholder="Last name"
              value={shippingInfo.lastName}
              type="text"
              readOnly={checked}
              required
            />
          </MDBCol>
          <MDBCol md="6">
            <label htmlFor="address">
              Address <span>*</span>
            </label>
            <input
              name="address"
              id="address"
              onChange={handleOnChange}
              placeholder="Address"
              value={shippingInfo.address}
              type="text"
              readOnly={checked}
              required
            />
          </MDBCol>
          <MDBCol md="6">
            <label htmlFor="city">
              City <span>*</span>
            </label>
            <input
              name="city"
              id="city"
              onChange={handleOnChange}
              placeholder="City"
              value={shippingInfo.city}
              type="text"
              readOnly={checked}
              required
            />
          </MDBCol>
          <MDBCol md="6">
            <label htmlFor="state">
              State <span>*</span>
            </label>
            <input
              name="state"
              onChange={handleOnChange}
              value={shippingInfo.state}
              placeholder="State"
              id="state"
              type="text"
              readOnly={checked}
              required
            />
          </MDBCol>
          <MDBCol md="6">
            <label htmlFor="pinCode">
              Pin Code <span>*</span>
            </label>
            <input
              name="pinCode"
              id="pinCode"
              onChange={handleOnChange}
              value={shippingInfo.pinCode}
              placeholder="Pin-Code"
              type="text"
              readOnly={checked}
              required
            />
          </MDBCol>
          <MDBCol md="6">
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              name="email"
              onChange={handleOnChange}
              placeholder="Email"
              value={shippingInfo.email}
              type="text"
              id="email"
              readOnly={checked}
              required
            />
          </MDBCol>
          <MDBCol md="6">
            <label htmlFor="phone">
              Phone Number <span>*</span>
            </label>
            <input
              name="phone"
              onChange={handleOnChange}
              placeholder="Phone"
              type="text"
              value={shippingInfo.phone}
              id="phone"
              readOnly={checked}
              required
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Wrapper>
  );
};

export default ShippingAddress;

const Wrapper = styled.div`
  margin: 2rem 0;
  border-radius: 5px;
  padding: 10px;
  padding-bottom: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  h4 {
    font-size: 24px;
    font-weight: 700;
    text-transform: capitalize;
    padding: 15px 0;
  }
  label {
    font-size: 16px;
    margin-top: 15px;
    margin-bottom: 5px;
    span {
      color: red;
    }
  }
  input {
    width: 100%;
    font-size: 14px;
    padding: 8px 12px;
    text-transform: lowercase;
    outline: #ccc;
    box-shadow: none;
    border: 1px solid #ccc;
  }
  input:focus {
    outline: #ff7f23 auto 1px;
  }
`;
