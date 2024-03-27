import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";
import { MDBIcon } from "mdb-react-ui-kit";

const ListLink = ({ to, value }) => (
  <li>
    <Link to={to} style={{ color: "#bbb" }}>
      {value}
    </Link>
  </li>
);

export default function App() {
  return (
    <div className="footer">
      <div className="footerLinks">
        <div className="footerContact">
          <h5>Need Help</h5>
          <p className="contact">+91 1234 5678 90</p>
          <p>Monday - Friday: 9:00-20:00</p>
          <p>Saturday: 11:00 - 15:00</p>
          <h6>
            <Link to="/contact" style={{ color: "#bbb" }}>
              abcd@gmail.com
            </Link>
          </h6>
          <div
            className="socialMedia"
            style={{ marginTop: "10px", fontSize: "18px" }}
          >
            <Link to={"#"} style={{ padding: "10px", color: "#ff7f23" }}>
              <MDBIcon fab icon="facebook-f" />
            </Link>
            <Link to={"#"} style={{ padding: "10px", color: "#ff7f23" }}>
              <MDBIcon fab icon="twitter" />
            </Link>
            <Link to={"#"} style={{ padding: "10px", color: "#ff7f23" }}>
              <MDBIcon fab icon="instagram" />
            </Link>
            <Link to={"#"} style={{ padding: "10px", color: "#ff7f23" }}>
              <MDBIcon fab icon="youtube" />
            </Link>
            <Link to={"#"} style={{ padding: "10px", color: "#ff7f23" }}>
              <MDBIcon fab icon="pinterest" />
            </Link>
          </div>
        </div>
        <div className="footerLink1">
          <ul>
            <li>
              <Link to="/contact" style={{ color: "#ff7f23" }}>
                Useful Links
              </Link>
            </li>
            <ListLink to={"/privacy"} value="Privacy Policy" />
            {/* <ListLink to={"/returns"} value="Returns" /> */}
            <ListLink to={"/termsandconditions"} value="Terms & Conditions" />
            <ListLink to={"/contact"} value="Contact Us" />
            {/* <ListLink to={"/contact"} value="Latest News" />
            <ListLink to={"/contact"} value="Our Sitemap" /> */}
          </ul>
        </div>
        {/* <div className="footerLink2">
          <ul>
            <li>
              <Link to="/contact" style={{ color: "#ff7f23" }}>
                Our Stores
              </Link>
            </li>
            <ListLink to={"/contact"} value="Our Stores" />
            <ListLink to={"/contact"} value="New York" />
            <ListLink to={"/contact"} value="London SF" />
            <ListLink to={"/contact"} value="Cockfosters BP" />
            <ListLink to={"/contact"} value="Los Angeles" />
            <ListLink to={"/contact"} value="Chicago" />
            <ListLink to={"/contact"} value="Las Vegas" />
          </ul>
        </div> */}
        <div className="footerLink3">
          <ul>
            <li>
              <Link to="/contact" style={{ color: "#ff7f23" }}>
                My Account
              </Link>
            </li>
            <ListLink to={"/profile"} value="My Account" />
            <ListLink to={"/profile"} value="Order" />
            {/* <ListLink to={"/contact"} value="History" />
            <ListLink to={"/contact"} value="Wish List" />
            <ListLink to={"/contact"} value="Newsletter" />
            <ListLink to={"/contact"} value="Shipping & Returns" /> */}
          </ul>
        </div>
        {/* <div className="footerLink4">
          <ul>
            <li>
              <Link to="/contact" style={{ color: "#ff7f23" }}>
                Customer Service
              </Link>
            </li>
            <ListLink to={"/contact"} value="Search Terms" />
            <ListLink to={"/contact"} value="Advanced Search" />
            <ListLink to={"/contact"} value="Help & FAQs" />
            <ListLink to={"/contact"} value="Furniture Expert" />
            <ListLink to={"/contact"} value="Our Sitemap" />
            <ListLink to={"/contact"} value="Find A Store" />
          </ul>
        </div> */}
      </div>
      {/* <div className="signUpFooter">
        <span>Sign up for our Newsletter</span>
        <span className="inputText">
          <input type="text" placeholder="Enter Email ID ..." />
          <input type="submit" value="SEND" />
        </span>
      </div> */}
      <br />
      <br />
      <div className="text-center h4 p-3">
        Copyright ©2023. All Rights Reserved
      </div>
    </div>
  );
}
