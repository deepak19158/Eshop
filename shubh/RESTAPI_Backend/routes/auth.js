const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");

const {
  createUser,
  loginUser,
  getLoginDetails,
} = require("../controllers/auth");

// checking and validatig the information for new user creation
const validateSignUpUser = [
  body("name").isLength({ min: 4 }).withMessage("Name is required"),
  body("email").isEmail().withMessage("Email is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }
    next();
  },
];

//check for the login of new user
const validateLogin = [
  body("email", "Enter a valid email").isEmail(),
  body("password", "Password must be atleast 6 characters long").isLength({
    min: 5,
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }
    next();
  },
];

//ROUTE:1 -> post request ot create a new user
router.post("/createuser", validateSignUpUser, createUser);

//ROUTE:2 ->authencating a user with the given login credentail
router.post("/login", validateLogin, loginUser);

// ROUTE:3 --> get the user loggin details
router.get("/getuser", fetchuser, getLoginDetails);

module.exports = router;
