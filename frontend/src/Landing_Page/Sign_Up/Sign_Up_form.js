import React, { useState } from "react";
import woman from "../Media/women.png";

function Sign_Up_form() {
  const [isbtncliked, Setisbtncliked] = useState(true);
  const [userData, setUserData] = useState(null); // store signup data

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting signup form...");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("http://localhost:3002/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include"
      });

      const result = await res.json();
      console.log(result);

      if (result.success) {
        setUserData(data); // save user info for OTP step
        Setisbtncliked(false); // switch to OTP form
      } else {
        alert(result.message || result.error || "signup failed");
      }
    } catch (err) {
      console.error("Error submitting signup:", err);
      alert("Something went wrong");
    }
  }

  async function handleOtpSubmit(e) {
    e.preventDefault();
    console.log("OTP submitted");

    const formData = new FormData(e.target);
    const otpData = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("http://localhost:3002/verifyotp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...userData, otp: otpData.otp }),
        credentials: "include"
      });

      const result = await res.json();
      console.log("Verify OTP result:", result);

      if (result.success) {
        window.location.href = result.redirectUrl;
      } else {
        alert(result.message || "OTP verification failed");
      }
    } catch (err) {
      console.error("Error verifying OTP:", err);
      alert("Something went wrong verifying OTP");
    }
  }

  return (
    <div>
      <h1 className="d-flex justify-content-center mt-5 mb-2">Sign up</h1>
      <div className="row mb-5">
        <div className="col m-5">
          <img src={woman} className="ps-5 img-fluid" />
        </div>

        {isbtncliked ? (
          // Signup Form
          <form className="col-8 g-3 signupform px-5 mt-5" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 col-sm-4 offset-1">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" name="name" required />
              </div>

              <div className="col-md-3 col-sm-1">
                <label htmlFor="mobile" className="form-label">Mobile No.</label>
                <input type="number" className="form-control" id="mobile" name="mobile" required />
              </div>

              <div className="col-md-9 offset-1">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>

              <div className="col-md-9 offset-1">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" required />
              </div>

              <div className="row-6">
                <button type="submit" className="btn btn-primary col-4 offset-4 px-3 rounded-pill mt-5">
                  Sign up
                </button>
              </div>
            </div>
          </form>
        ) : (
          // OTP Form
          <form className="col-8 g-3 signupform px-5 mt-5" onSubmit={handleOtpSubmit}>
            <div className="col-6 offset-3">
              <label htmlFor="otp" className="form-label">Otp</label>
              <input type="text" className="form-control" id="otp" name="otp" required />
            </div>

            <div className="row">
              <button type="submit" className="btn btn-primary col-4 offset-4 px-3 rounded-pill mt-5">
                Enter
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Sign_Up_form;
