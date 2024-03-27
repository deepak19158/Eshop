import React from "react";
// import { useProductContext } from "./context/productcontext";
import AboutBgShipping from "./utils/AboutBgShipping.jpg";
import { MDBIcon, MDBTypography } from "mdb-react-ui-kit";
import HeroSection from "./styles/HeroSection";
import { HeroSection as HeroSection2 } from "./components/HeroSection";

export default function About() {
  // const { myName } = useProductContext();

  const data = {
    name: "XYZ Company",
  };
  return (
    <header>
      <HeroSection page="About Us" />
      <br />
      <br />
      <HeroSection2 myData={data} />
      {/* <MDBContainer
        breakpoint="md"
        style={{ width: "100vw", padding: "100px 0px" }}
      >
        <h2 className="text-center">
          Welcome to <span style={{ fontWeight: "bold" }}>{data.name}</span>
        </h2>
        <MDBTypography
          tag="h3"
          className="p-5 d-flex justify-content-center align-items-center"
        >
          <p
            style={{
              maxWidth: "1000px",
              lineHeight: "30px",
              textAlign: "justify",
            }}
          >
            Welcome to {data.name}, your one-stop destination for all your
            furniture needs. Whether you are looking for a new sofa, a dining
            table, a bed, or anything else, we have it all at affordable prices
            and fast delivery. Browse our wide selection of products, from
            classic to contemporary, and find the perfect fit for your home. At
            FurniShop, we believe that furniture is more than just functional,
            it is an expression of your personality and taste. That's why we are
            committed to providing you with the best quality, service and value.
          </p>
        </MDBTypography>
      </MDBContainer> */}
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url(${AboutBgShipping})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px",
        }}
      >
        <div className="d-flex justify-content-center align-items-center flex-column h-100">
          <MDBTypography tag="h1" className="text-white">
            <MDBIcon fas icon="shipping-fast" />
          </MDBTypography>
          <br />
          <br />
          <MDBTypography tag="h2" className="text-white">
            All Orders Are Free Shipping
          </MDBTypography>
          <br />
          <br />
          <br />
          <MDBTypography tag="h4">
            <p
              style={{
                color: "#fff",
                maxWidth: "700px",
                lineHeight: "25px",
                textAlign: "center",
              }}
            >
              Donec vehicula cursus vestibulum lectus, sit eros integer varius
              cum turpis et quam congue accumsan ac bibendum ac in erat. Donec
              posuere consectetuer volutpat rutrum ac sollicitudin quam quisque
              at interdum dignissim fringilla elit risus lorem condimentum eros
              mollis.
            </p>
          </MDBTypography>
        </div>
      </div>
    </header>
  );
}
