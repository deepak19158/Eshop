const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { getItem, addorUpdateItem, deleteItem } = require("../controllers/cart");

// Route:1 --> to get the items from the cart
router.get("/", fetchuser, getItem);

// Route:2 --> to add teh items in the cart
router.post("/addItem/", fetchuser, addorUpdateItem);

// Route:3 --> to edit the items quantity in the cart
router.patch("/editItem/", fetchuser, addorUpdateItem);

// Route:4 --> to delete the items quantity in the cart
router.delete("/delete/", fetchuser, deleteItem);

module.exports = router;
