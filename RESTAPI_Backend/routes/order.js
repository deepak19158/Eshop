const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const {
  placeOrder,
  getOrderDetailsById,
  getAllOrder,
} = require("../controllers/order");

router.post("/placeOrder", fetchuser, placeOrder);
router.get("/getOrderDetails/:paymentId", getOrderDetailsById);
router.get("/getAllOrder", fetchuser, getAllOrder);

module.exports = router;
