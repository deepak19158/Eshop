import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Footer from "./components/layout/Footer";
import Login from "./Login";
import Checkout from "./Checkout";
import Success from "./Success";
import Profile from "./Profile";
import Try from "./Try";
import ProtectedRoute from "./ProtectedRoute";
import OrderSummary from "./components/profile/OrderSummary";
import Loader from "./components/Loader";
import Navbar from "./components/layout/Navbar";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#ff7f23",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "#ff7f23",
      border: "rgba(250, 80, 10, 0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg, rgb(200 100 0) 0%, rgb(250 10 0) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1500));
      setLoading((loading) => !loading);
    };
    loadData();
  }, []);
  if (loading) {
    return <Loader />;
  } else
    return (
      <ThemeProvider theme={theme}>
        <Router>
          {/* <Header /> */}
          <Navbar />
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />

            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/success"
              element={
                <ProtectedRoute>
                  <Success />
                </ProtectedRoute>
              }
            />
            {/* <Route path="/profile" element={<Profile />} /> */}

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/orderSummary/:orderId" element={<OrderSummary />} />
            <Route path="/try" element={<Try />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    );
};

export default App;
