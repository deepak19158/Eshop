import React, { useState } from "react";
import { useCartContext } from "../../context/cartcontext";
// import { useUserContext } from "../../context/usercontext";
import "../../styles/Navbar.css";
import { MDBBadge, MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart, clearCart } = useCartContext();
  const [navBar, setNavBar] = useState(false);

  const handleNavBar = () => {
    setNavBar(!navBar);
    document.querySelector(".navBar").classList.toggle("active");
  };

  return (
    <header>
      <div className="topBar">
        <div className="subSection d-flex justify-content-center align-items-center">
          <div className="brandName">XYZ Company</div>
          <div className="extras">
            <div className="extrasBox">
              <div className="extrasLogo">
                <MDBIcon far icon="credit-card" />
              </div>
              <div className="extrasText">
                <span>100% Payment</span>
                <span>Monthly Installment</span>
              </div>
            </div>
            {/* <div className="extrasBox">
              <div className="extrasLogo">
                <MDBIcon fas icon="box-open" />
              </div>
              <div className="extrasText">
                <span>14-Day Returns</span>
                <span>Secure Payments</span>
              </div>
            </div> */}
          </div>
        </div>
        <div className="functional">
          <span>
            <Link to="/profile">
              <MDBIcon
                far
                icon="user-circle"
                style={{ color: "#333", marginLeft: "20px" }}
              />
            </Link>
          </span>

          {/* <span>
            <Link to="/checkout">
              <MDBIcon
                fas
                icon="exchange-alt"
                style={{ color: "#333", marginLeft: "20px" }}
              />
            </Link>
          </span> */}
          <span>
            <Link to="/cart">
              <MDBIcon
                fas
                icon="shopping-cart"
                style={{ color: "#333", marginLeft: "20px" }}
              />
              <MDBBadge
                color="danger"
                notification
                pill
                style={{ fontSize: "10px" }}
              >
                {cart.length}
              </MDBBadge>
            </Link>
          </span>

          {!localStorage.getItem("authToken") ? (
            <></>
          ) : (
            <span>
              <Link
                reloadDocument
                to="/"
                className="navbar-link"
                onClick={() => {
                  localStorage.clear();
                  // window.location.reload();
                  clearCart();
                }}
              >
                <MDBIcon
                  fas
                  icon="sign-out-alt"
                  style={{ color: "#333", marginLeft: "20px" }}
                />
              </Link>
            </span>
          )}
          <span className="menuBar" onClick={handleNavBar}>
            {navBar === true ? (
              <MDBIcon
                fas
                icon="xmark"
                style={{ color: "#333", marginLeft: "20px" }}
              />
            ) : (
              <MDBIcon
                fas
                icon="bars"
                style={{ color: "#333", marginLeft: "20px" }}
              />
            )}
          </span>
          {/* <span>
            <Link to="/wishlist">
              <MDBIcon
                far
                icon="heart"
                style={{ color: "#333", marginLeft: "20px" }}
              />
              <MDBBadge
                color="danger"
                notification
                pill
                style={{ fontSize: "10px" }}
              >
                3
              </MDBBadge>
            </Link>
          </span> */}
        </div>
      </div>
      <div className="navBar">
        <ul>
          <li>
            {/* <a href={"/"} rel="noreferer">
              Home
            </a> */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* <a href={"/about"} rel="noreferer">
              About
            </a> */}
            <Link to="/about">About</Link>
          </li>
          <li>
            {/* <a href={"/contact"} rel="noreferer">
              Contact
            </a> */}
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {/* <a href={"/products"} rel="noreferer">
              On Sale
            </a> */}
            <Link to="/products">Shop</Link>
          </li>
          <li>
            {/* <a href={"/products"} rel="noreferer">
              New Arrivals
            </a> */}
            <Link to="/products">New Arrivals</Link>
          </li>

          {navBar === true ? (
            <>
              <li>
                <Link to="/profile">
                  <MDBIcon
                    far
                    icon="user-circle"
                    style={{ color: "#fff", marginLeft: "20px" }}
                  />
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <MDBIcon
                    fas
                    icon="shopping-cart"
                    style={{ color: "#fff", marginLeft: "20px" }}
                  />
                  <MDBBadge
                    color="danger"
                    notification
                    pill
                    style={{ fontSize: "10px" }}
                  >
                    {cart.length}
                  </MDBBadge>
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
