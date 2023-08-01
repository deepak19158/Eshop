const express = require("express");
const router = express.Router();
const {
  createOrder,
  checkout,
  verifyPayment,
  success,
} = require("../controllers/payment");

router.post("/createorder", createOrder);
router.post("/success", success);

router.post("/verifyPayment", verifyPayment);

module.exports = router;
