import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useUserContext } from "./context/usercontext";
import { useCartContext } from "./context/cartcontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineMail, HiKey } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

import { googleLogout, useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const {
    login,
    signup,
    onChangeLogin,
    onChangeSignup,
    SubmitLogin,
    SubmitSignUp,
  } = useUserContext();
  const { updateCartFromStorage } = useCartContext();

  const navigate = useNavigate(); //to redirect to other page
  const [activeTab, setActiveTab] = useState("tab1");

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      await SubmitLogin();
      updateCartFromStorage();
      navigate("/"); //redirecitng person to cart
    } catch (error) {
      console.log(error);
      // window.location.reload();
      alert("Incorrect credentials");
    }
  };

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();

    const passwordInput = document.getElementById("form7");
    const passwordValue = passwordInput.value.toString();

    if (signup.password !== passwordValue) {
      //confirming the password and repeat password
      alert("Password didn't matched.");
      return;
    }

    try {
      await SubmitSignUp();
      updateCartFromStorage();
      navigate("/"); //redirecitng person to cart
    } catch (error) {
      console.log(error);
      // window.location.reload();
      alert(error.response.data.error);
    }
  };

  const handleTabClick = (value) => {
    if (value === activeTab) {
      return;
    }
    setActiveTab(value);
  };

  const googlelogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      handleGoogleloginAndCart(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const handleGoogleloginAndCart = async (googleuser) => {
    try {
      const profile = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleuser.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${googleuser.access_token}`,
            Accept: "application/json",
          },
        }
      );

      const login = await axios.post(
        `http://localhost:5000/api/auth/google/login`,
        {
          name: profile.data.name,
          email: profile.data.email,
        }
      );

      localStorage.setItem("authToken", login.data.authtoken);

      const cart = await axios.get("http://localhost:5000/cart", {
        //extracting cart item from mongodb
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("authToken"),
        },
      });

      localStorage.setItem("thapaCart", JSON.stringify(cart.data.items)); //storing cart items in local storage

      navigate("/");
      navigate(0); //refreshing th page
    } catch (error) {
      console.log("line 113 ERROR", error);
    }
  };

  return (
    <Wrapper>
      {/* <div className="container p-3 my-5 d-flex flex-column w-50 text"> */}
      <div className="main">
        <div className="sub-main">
          <div className="tab-content">
            <ul className="nav nav-pills mb-3 d-flex flex-row justify-content-between">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "tab1" ? "active" : ""}`}
                  onClick={() => handleTabClick("tab1")}
                >
                  Login
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "tab2" ? "active" : ""}`}
                  onClick={() => handleTabClick("tab2")}
                >
                  Register
                </button>
              </li>
            </ul>

            <div className="imgs">
              <div className="container-image">
                <img src="./images/login1.png" alt="" className="profile" />
              </div>
            </div>

            <div
              className={`tab-pane ${
                activeTab === "tab1" ? "show active" : ""
              }`}
            >
              <form onSubmit={handleSubmitLogin}>
                <div className="text-center mb-3">
                  <p>Sign in with:</p>
                </div>

                <div className="mb-4">
                  {/* <label htmlFor="form1" className="form-label">
                    Email address
                  </label> */}
                  <input
                    placeholder="Email Address"
                    type="email"
                    className="form-control"
                    id="form1"
                    onChange={onChangeLogin}
                    value={login.email}
                    name="email"
                  />
                </div>
                <div className="mb-4">
                  {/* <label htmlFor="form2" className="form-label">
                    Password
                  </label> */}
                  <input
                    placeholder="Password"
                    type="password"
                    className="form-control"
                    id="form2"
                    onChange={onChangeLogin}
                    value={login.password}
                    name="password"
                  />
                </div>

                <button type="submit" className="btn btn-primary mb-4 w-100">
                  Sign in
                </button>
                <p className="text-center">
                  Not a member? <a href="#!">Register</a>
                </p>
              </form>
            </div>

            <div
              className={`tab-pane ${
                activeTab === "tab2" ? "show active" : ""
              }`}
            >
              <form onSubmit={handleSubmitSignUp}>
                <div className="text-center mb-3">
                  <p>Sign up with:</p>
                </div>

                <div className="mb-4">
                  <div className="row">
                    <div className="col-md-2 ">
                      {/* <label htmlFor="form3" className="form-label">
                        Name:
                      </label> */}
                      <FaUserAlt size={22} />
                    </div>
                    <div className="col-md-10">
                      <input
                        placeholder="Name"
                        type="text"
                        className="form-control"
                        id="form3"
                        onChange={onChangeSignup}
                        value={signup.name}
                        name="name"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="row">
                    <div className="col-md-2 ">
                      {/* <label htmlFor="form5" className="form-label">
                        Email:
                      </label> */}
                      <HiOutlineMail size={25} />
                    </div>
                    <div className="col-md-10">
                      <input
                        placeholder="Email"
                        type="email"
                        className="form-control"
                        id="form5"
                        onChange={onChangeSignup}
                        value={signup.email}
                        name="email"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="row">
                    <div className="col-md-2 ">
                      {/* <label htmlFor="form6" className="form-label">
                        Password
                      </label> */}

                      <RiLockPasswordLine size={23} />
                    </div>
                    <div className="col-md-10">
                      <input
                        placeholder="Password"
                        type="password"
                        className="form-control"
                        id="form6"
                        onChange={onChangeSignup}
                        value={signup.password}
                        name="password"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="row">
                    <div className="col-md-2 ">
                      {/* <label htmlFor="form6" className="form-label">
                        Password
                      </label> */}

                      <HiKey size={23} />
                    </div>
                    <div className="col-md-10">
                      <input
                        placeholder="Repeat Your Password"
                        type="password"
                        className="form-control"
                        id="form7"
                        name="password"
                      />
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary mb-4 w-100">
                  Sign up
                </button>
              </form>
            </div>

            <button onClick={googlelogin}>Sign in with Google </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    text-align: center;
    justify-content: center;
    display: flex;
    padding: 90px 0 90px 0;
  }

  .sub-main {
    display: flex;
    justify-content: center;
    height: 450px;
    width: 25%;
    box-shadow: 11px 12px 13px 12px rgb(207, 207, 207);
    padding-top: 30px;
    border-radius: 60px;
    background-color: white;
  }

  .imgs {
    padding-top: 10px;
    justify-content: center;
    display: flex;
  }

  .container-image {
    padding-top: 6px;
    border-radius: 150px;
    dispaly: flex;
    height: 110px;
    width: 110px;
  }

  .profile {
    height: 110px;
    width: 110px;
    border-radius: 100px;
  }

  .text {
    font-size: 12px;
    font-family: "Work Sans", sans-serif;
    font-weight: 400;
  }

  .form-control {
    text-transform: none;
  }
`;

export default Login;
