const Order = require("../models/Order");

const placeOrder = async (req, res) => {
  const userId = req.user.id;
  console.log("Details of state sent for placing order ----> ", req.body);
  const data = {
    userId,
    ...req.body,
  };

  try {
    const placedOrder = await Order.create(data);
    console.log("----------------->>>>>>>>>>> Order is placed", placedOrder);
    res.send(placedOrder);
  } catch (error) {
    //if already order exist then return that
    console.log("Error @placing order @controller order line 17 ", error);

    res.send(error);
  }
};

const getOrderDetailsById = async (req, res) => {
  const { paymentId } = req.params;
  console.log("--------------> payment Id - ", paymentId);

  try {
    Order.findOne({ "paymentDetails.paymentId": paymentId }, (err, order) => {
      if (err) {
        console.error("Error finding order:", err);
        res.send(err);
        return;
      }
      // Order found
      console.log("Order:", order);
      res.send(order);
    });
  } catch (error) {
    console.log(
      "Error in getting order details by payment ID @ order controller"
    );
    res.send(error);
  }
};

const getAllOrder = async (req, res) => {
  const userId = req.user.id;
  try {
    const order = await Order.find({ userId: userId });
    console.log(order.length);
    res.send(order);
  } catch (error) {
    console.log("Errpr in getting all the order details");
    res.send(error);
  }
};

module.exports = { placeOrder, getOrderDetailsById, getAllOrder };
