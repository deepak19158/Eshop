import React, { useState } from "react";
import styled from "styled-components";
import { useUserContext } from "./context/usercontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); //to redirect to other page
  const [activeTab, setActiveTab] = useState("tab1");
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [SignUpCred, setSignUpCred] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeLogin = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onChangeSignup = (e) => {
    setSignUpCred({ ...SignUpCred, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const auth = await axios.post(
      "http://localhost:5000/api/auth/login", //loging in the user and getting the auth token in return
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    localStorage.setItem("authToken", auth.data); //storing cart token in local sotrage

    const cart = await axios.get("http://localhost:5000/cart", {
      //extracting cart item from mongodb
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("authToken"),
      },
    });
    console.log(cart.data.items);
    localStorage.setItem("thapaCart", JSON.stringify(cart.data.items)); //storing cart items in local storage

    // const history = useHistory();

    navigate("/"); //redirecitng person to cart
    window.location.reload();
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    console.log(SignUpCred);
  };

  const handleTabClick = (value) => {
    if (value === activeTab) {
      return;
    }
    setActiveTab(value);
  };

  return (
    <Wrapper>
      <div
        className="container p-3 my-5 d-flex flex-column w-50 text"
        style={{}}
      >
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

        <div className="tab-content">
          <div
            className={`tab-pane ${activeTab === "tab1" ? "show active" : ""}`}
          >
            <form onSubmit={handleSubmitLogin}>
              <div className="text-center mb-3">
                <p>Sign in with:</p>
              </div>

              <div className="mb-4">
                <label htmlFor="form1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="form1"
                  onChange={onChangeLogin}
                  value={credentials.email}
                  name="email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="form2" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="form2"
                  onChange={onChangeLogin}
                  value={credentials.password}
                  name="password"
                />
              </div>

              <button className="btn btn-primary mb-4 w-100">Sign in</button>
              <p className="text-center">
                Not a member? <a href="#!">Register</a>
              </p>
            </form>
          </div>
          <div
            className={`tab-pane ${activeTab === "tab2" ? "show active" : ""}`}
          >
            <form onSubmit={handleSubmitSignUp}>
              <div className="text-center mb-3">
                <p>Sign up with:</p>
              </div>

              <div className="mb-4">
                <label htmlFor="form3" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="form3"
                  onChange={onChangeSignup}
                  value={SignUpCred.name}
                  name="name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="form5" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="form5"
                  onChange={onChangeSignup}
                  value={SignUpCred.email}
                  name="email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="form6" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="form6"
                  onChange={onChangeSignup}
                  value={SignUpCred.password}
                  name="password"
                />
              </div>

              <button className="btn btn-primary mb-4 w-100">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .w-50 {
    width: 20% !important;
  }

  .text {
    font-size: 12px;
    font-family: "Work Sans", sans-serif;
    font-weight: 400;
  }
`;

export default Login;
