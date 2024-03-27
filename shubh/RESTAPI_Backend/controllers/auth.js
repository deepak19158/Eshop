const User = require("../models/User");
const Cart = require("../models/Cart");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

const createUser = async (req, res) => {
  try {
    // checking whether user already exist or not
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(400)
        .json({ error: "sorry user already exist with this email id" });
    }

    // creating salt and hashing password using jwt token
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    // passing info to create new user in mongofb database
    user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
    });

    await Cart.create({
      userId: user.id,
    });

    const data = {
      user: {
        id: user.id,
      },
    };

    const authtoken = jwt.sign(data, process.env.JWT_SECRET);
    res.send({ authtoken, user });
  } catch (err) {
    console.log("auth controller at line 41", err);
    res.status(500).send("Some Error Occured");
  }
};

const loginUser = async (req, res) => {
  // validating email and password
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    // checking if the givben email exist
    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ errors: "please try correct login credentials" });
    }

    // checking for the given password
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res
        .status(400)
        .json({ errors: "please try correct login credentials" });
    }

    const data = {
      user: {
        id: user.id,
      },
    };

    const authtoken = jwt.sign(data, process.env.JWT_SECRET);
    res.send({ authtoken, user });
  } catch (err) {
    console.log("auth controller at line 80", err);
    res.status(500).send("Some Error Occured");
  }
};

const getLoginDetails = async (req, res) => {
  try {
    // extracitng userid from req which is injected in req in "fetchuser" middleware
    let userId = req.user.id;

    // take all the details except password
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error("auth controller at line 94", error);
    res.status(500).send("Internel server error");
  }
};

module.exports = { createUser, loginUser, getLoginDetails };
