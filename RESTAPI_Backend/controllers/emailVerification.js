const nodemailer = require("nodemailer");

const sendMail = (req, res) => {
  const { email, otp } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: "deepak19158@iiitd.ac.in",
      pass: "bkfkthtdopdncfvd",
    },
    from: "deepak19158@iiitd.ac.in",
  });

  const mailOptions = {
    from: "deepak19158@iiitd.ac.in",
    to: email,
    subject: "OTP verification for signUp",
    text: `Your OTP for the email verification is - ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: "Error sending email." });
    } else {
      console.log("Email sent:", info.response);
      res.json({ message: "Email sent successfully." });
    }
  });
  //   res.send("done");
};

module.exports = { sendMail };
