const Razorpay = require("razorpay");
const crypto = require("crypto");

const key_id = "rzp_test_dKhJ2jiI5qasOl";
const key_secret = "D61il1o1X8IOa20g6OvRa4yT";

var instance = new Razorpay({
  key_id: key_id,
  key_secret: key_secret,
});

const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;
    console.log("createorder lien 15", req.body);
    const options = {
      amount: amount, // amount in the smallest currency unit
      currency: "INR",
      receipt: "order_rcptid_11",
    };

    const order = await instance.orders.create(options);
    res.send(order);
  } catch (error) {
    console.log("Error occurred:", error);
    res.status(500).send("An error occurred while creating the order.");
  }
};

const verifyPayment = (req, res) => {
  console.log("line 25", req.body);
  const {
    order_id,
    paidOut: { razorpay_payment_id, razorpay_order_id, razorpay_signature },
  } = req.body;

  const hmac = crypto.createHmac("sha256", key_secret);
  const generated_signature = hmac
    .update(order_id + "|" + razorpay_payment_id)
    .digest("hex");

  let data;
  if (generated_signature === razorpay_signature) {
    data = { message: "payment is successful" };
  } else {
    data = { message: "payment is unsuccessful" };
  }
  res.redirect(`http://localhost:3000/success?data=${JSON.stringify(data)}`);
  // res.status(200).json({ redirectTo: `/success?data=${JSON.stringify(data)}` });
};

const success = (req, res) => {
  //   console.log(res.body);
  const { razorpay_payment_id, razorpay_order_id } = req.body;

  const data = req.body;
  console.log("success ---> ", data);
  res.redirect(`http://localhost:3000/success?data=${JSON.stringify(data)}`);
};

module.exports = { createOrder, success, verifyPayment };
