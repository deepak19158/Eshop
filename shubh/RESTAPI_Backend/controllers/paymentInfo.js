const Razorpay = require("razorpay");

const key_id = "rzp_test_dKhJ2jiI5qasOl";
const key_secret = "D61il1o1X8IOa20g6OvRa4yT";

const instance = new Razorpay({
  key_id,
  key_secret,
});

const getPayment = async (req, res) => {
  const paymentId = req.params.id;
  console.log("req.param.id", paymentId);
  try {
    const paymentDetails = await instance.payments.fetch(paymentId);
    // console.log("Payment Details --->  ", paymentDetails);
    res.send(paymentDetails);
  } catch (error) {
    console.log("paymentInfo line 17", error);
  }
};

module.exports = { getPayment };
