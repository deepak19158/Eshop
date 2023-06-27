const Cart = require("../models/Cart");
const ObjectId = require("mongoose").Types.ObjectId;

const getItem = async (req, res) => {
  try {
    const user = await Cart.findOne({ userId: req.user.id });
    res.send(user);
  } catch (error) {
    console.log("cart controller line 9",error);
    res.send(error);
  }
};

const addorUpdateItem = async (req, res) => {
  try {
    const user = await Cart.findOneAndUpdate(
      { userId: req.user.id },
      { items: req.body },
      { new: true }
    );
    res.send(user);
  } catch (error) {
    console.log("cart controller line 23",error);
    res.send(error);
  }
};

const deleteItem = async (req, res) => {
  const { productId, color } = req.body;

  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    let newItem = cart.items.filter((curElem) => {
      return (
        curElem.productId !== ObjectId(productId) && curElem.color !== color
      );
    });
    const newCart = await Cart.findOneAndUpdate(
      { userId: req.user.id },
      { items: newItem },
      { new: true }
    );
    res.send(newCart);
  } catch (error) {
    console.log("cart controller line 45",error);
    res.send(error);
  }
};

module.exports = { getItem, addorUpdateItem, addorUpdateItem, deleteItem };
