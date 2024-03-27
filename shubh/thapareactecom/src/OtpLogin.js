import React, { useState } from "react";
import axios from "axios";
import { useUserContext } from "./context/usercontext";
import "./styles/Login.css";
import { toast } from "react-toastify";

const OtpLogin = ({ setOtpMatched }) => {
  const { signup } = useUserContext();

  const [confirmOtp, setConfirmOtp] = useState("");
  const [sendOtp, setSendOtp] = useState(null);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [resendTimer, setResendTimer] = useState(30);

  const handleSendotp = () => {
    let otp = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    setSendOtp(otp);
    axios.post(
      "http://localhost:5000/api/emailverification/sendMail",
      {
        email: signup.email,
        otp,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(otp);
    setIsOtpSent(true);
    setResendDisabled(true);
    toast.info("OTP sent");

    let countdown = 30;
    const interval = setInterval(() => {
      countdown--;
      setResendTimer(countdown);
      if (countdown === 0) {
        clearInterval(interval);
        setResendDisabled(false);
      }
    }, 1000);
  };

  const handleConfirmOtp = (e) => {
    e.preventDefault();
    console.log(sendOtp, confirmOtp);
    if (sendOtp.toString() === confirmOtp) {
      setOtpMatched(true);
      toast.success("OTP matched");
    } else {
      toast.error("OTP doesn't match");
    }
  };

  return (
    <>
      <div className="mb-4 fields" style={{ gap: "5px" }}>
        <input
          placeholder="Confirm OTP"
          type="text"
          className="formField"
          id="form8"
          onChange={(e) => setConfirmOtp(e.target.value)}
          value={confirmOtp}
        />

        <div style={{ display: "flex", gap: "10px" }}>
          {!isOtpSent ? (
            <button
              id="otp-button"
              style={{ width: "50%" }}
              onClick={handleSendotp}
            >
              Send OTP
            </button>
          ) : (
            <button
              id="otp-button"
              style={{ width: "50%" }}
              onClick={handleSendotp}
              disabled={resendDisabled}
            >
              Resend OTP
            </button>
          )}

          <button id="otp-button" onClick={handleConfirmOtp}>
            Confirm OTP
          </button>
        </div>

        {/* {!isOtpSent ? (
          <button onClick={handleSendotp}>Send OTP</button>
        ) : (
          <button onClick={handleSendotp} disabled={resendDisabled}>
            Resend OTP
          </button>
        )} */}
        {/* <button onClick={handleConfirmOtp}>Confirm OTP</button> */}
        {isOtpSent ? (
          <p style={{ fontSize: "14px", fontWeight: 400 }}>
            Send OTP after {resendTimer} second.
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default OtpLogin;
