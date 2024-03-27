import React from "react";
import { MDBCardHeader, MDBTypography } from "mdb-react-ui-kit";

const Greeting = () => {
  return (
    <MDBCardHeader className="px-4 py-5">
      <MDBTypography tag="h3" className="text-muted mb-0">
        Thanks for your Order, <span style={{ color: "#a8729a" }}>Anna</span>!
      </MDBTypography>
    </MDBCardHeader>
  );
};

export default Greeting;
