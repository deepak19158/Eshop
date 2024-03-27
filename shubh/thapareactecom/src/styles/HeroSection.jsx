import { MDBTypography } from "mdb-react-ui-kit";
import React from "react";
import AboutBg from "../utils/AboutBg.jpg";

const HeroSection = ({ page }) => {
  return (
    <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage: `url(${AboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "400px",
      }}
    >
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-white">
          <MDBTypography tag="h2">{page}</MDBTypography>
          <br />
          <MDBTypography tag="h3" className="text-muted">
            Home / {page}
          </MDBTypography>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
