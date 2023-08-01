const express = require("express");
const router = express.Router();
const { getPayment } = require("../controllers/paymentInfo");

router.get("/:id", getPayment);

module.exports = router;
