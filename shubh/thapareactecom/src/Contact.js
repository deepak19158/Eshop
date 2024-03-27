import React from "react";
import "./styles/Contact.css";
import { MDBIcon } from "mdb-react-ui-kit";
import imgText from "./utils/shipmentImg.jpg";
import HeroSection from "./styles/HeroSection";

const Contact = () => {
  return (
    <div>
      <HeroSection page="Contact Us" />
      <div className="Contact">
        <div className="ContactText">
          <h4>Contact With Us</h4>
          <h2>Speak with our Expert.</h2>
          <br />
          <br />
          <div className="Extras">
            <div className="Logo">
              <MDBIcon fas icon="phone" />
            </div>
            <div className="Text">
              <h5 className="text-muted">CALL ANYTIME</h5>
              <h3>92 666 888 0000</h3>
            </div>
          </div>
          <div className="Extras">
            <div className="Logo">
              <MDBIcon far icon="envelope" />
            </div>
            <div className="Text">
              <h5 className="text-muted">SEND EMAIL</h5>
              <h3>needhelp@company.com</h3>
            </div>
          </div>
          <div className="Extras">
            <div className="Logo">
              <MDBIcon fas icon="map-marker-alt" />
            </div>
            <div className="Text">
              <h5 className="text-muted">VISIT OFFICE</h5>
              <h3>350 New York, United States</h3>
            </div>
          </div>
        </div>
        <form className="ContactForm">
          <input type="text" value="" placeholder="Name" />
          <input type="text" value="" placeholder="Email" />
          <br />
          <input type="text" value="" placeholder="Phone" />
          <input type="text" value="" placeholder="Subject" />
          <br />
          <textarea placeholder="Your Message"></textarea>
          <br />
          <input type="submit" value="Send Message" />
        </form>
      </div>
      <div className="lastSection">
        <span className="shipmentLogo">
          <MDBIcon fas icon="truck" />
        </span>
        <div className="shipmentText">
          <h2>WE DELIVER THE BEST QUALITY</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered in some form, by injected words.
          </p>
        </div>
        <div
          className="textImage"
          style={{ borderLeft: "15px solid #ff7f23", paddingLeft: "10px" }}
        >
          <img src={imgText} alt="contactImg" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
