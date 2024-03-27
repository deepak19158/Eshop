import React from "react";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
} from "mdb-react-ui-kit";

const PersonalInfo = ({ user }) => {
  return (
    <MDBCard className="mb-4">
      <MDBCardBody>
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>
              <strong>Full Name</strong>
            </MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">{user.name}</MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>
              <strong>Email</strong>
            </MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">{user.email}</MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>
              <strong>Phone</strong>
            </MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>
              <strong>Mobile</strong>
            </MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>
              <strong>Address</strong>
            </MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">
              Bay Area, San Francisco, CA
            </MDBCardText>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default PersonalInfo;
