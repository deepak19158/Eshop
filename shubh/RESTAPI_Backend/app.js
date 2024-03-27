require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const products_routes = require("./routes/products");
const order_routes = require("./routes/order");
const cart_routes = require("./routes/cart");
const auth_routes = require("./routes/auth");
const payment_route = require("./routes/payment");
const payment_info = require("./routes/paymentInfo");
const email_verification = require("./routes/emailVerification");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGODB_URL;

// middleware or to set router
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/products", products_routes);
app.use("/api/auth", auth_routes);
app.use("/api/payment", payment_route);
app.use("/api/paymentInfo", payment_info);
app.use("/api/order", order_routes);
app.use("/api/emailverification", email_verification);
app.use("/cart", cart_routes);

app.get("/", (req, res) => {
  res.send("Hi, I am live ");
});

const start = async () => {
  console.log(uri);
  try {
    await connectDB(uri);
    app.listen(PORT, () => {
      console.log(`${PORT} Yes I am connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
