const jwt = require("jsonwebtoken");

const fetchuser = (req, res, next) => {
  // auth token is provided in req header
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "please authenticate using a valid token" });
  }
  try {
    // verifying and extracting data from the auth token
    const data = jwt.verify(token, process.env.JWT_SECRET);
    console.log("fetch user line 12", token);

    // and injecting the extracted data in req.user
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
