const express = require("express");
const router = express.Router();
const Product = require("../models/product");

const { getAllProducts, getOneProduct } = require("../controllers/products");

router.get("/", getAllProducts);

router.get("/:productId", getOneProduct);

module.exports = router;
