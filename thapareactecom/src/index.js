import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontext";
import { FilterContextProvider } from "./context/filtercontext";
import { CartProvider } from "./context/cartcontext";
import { UserProvider } from "./context/usercontext";
import { OrderContextProvider } from "./context/ordercontext";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <GoogleOAuthProvider clientId="56983217497-43cbhi1ppbu817e7jvf9uok113rcn2qn.apps.googleusercontent.com">
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <UserProvider>
            <OrderContextProvider>
              <App />
            </OrderContextProvider>
          </UserProvider>
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
