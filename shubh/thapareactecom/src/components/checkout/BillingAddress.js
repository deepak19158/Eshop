import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { useOrderContext } from "../../context/ordercontext";
import styled from "styled-components";

const BillingAddress = () => {
  const { updateBillingInfo } = useOrderContext();

  const handleOnChange = (event) => {
    updateBillingInfo(event);
  };

  return (
    <Wrapper>
      <MDBContainer>
        <h4>Billing address</h4>
        <MDBRow>
          <MDBCol md="6">
            <label htmlFor="firstName">
              First Name <span>*</span>
            </label>
            <input
              name="firstName"
              onChange={handleOnChange}
              placeholder="First name"
              type="text"
              required
              id="firstName"
            />
          </MDBCol>
          <MDBCol md="6">
            <label htmlFor="lastName">
              Last Name <span>*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              onChange={handleOnChange}
              placeholder="Last name"
              type="text"
              required
            />
          </MDBCol>
          <MDBCol md="6">
            <label htmlFor="address">
              Address <span>*</span>
            </label>
            <input
              name="address"
              onChange={handleOnChange}
              placeholder="Address"
              type="text"
              required
              id="address"
            />
          </MDBCol>
          <MDBCol md="6">
            <label htmlFor="city">
              City <span>*</span>
            </label>
            <input
              name="city"
              onChange={handleOnChange}
              placeholder="City"
              type="text"
              id="city"
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
              placeholder="State"
              type="text"
              id="state"
              required
            />
          </MDBCol>
          <MDBCol md="6">
            <label htmlFor="pinCode">
              Pin Code <span>*</span>
            </label>
            <input
              type="number"
              name="pinCode"
              onChange={handleOnChange}
              placeholder="Pin-Code"
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
              type="email"
              className="mb-4"
              required
              id="email"
            />
          </MDBCol>
          <MDBCol md="6">
            <label htmlFor="phone">
              Phone Number <span>*</span>
            </label>
            <input
              type="number"
              name="phone"
              onChange={handleOnChange}
              placeholder="Phone Number"
              className="mb-4"
              required
              id="phone"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Wrapper>
  );
};

export default BillingAddress;

const Wrapper = styled.div`
  margin: 2rem 0;
  border-radius: 5px;
  padding: 10px;
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
