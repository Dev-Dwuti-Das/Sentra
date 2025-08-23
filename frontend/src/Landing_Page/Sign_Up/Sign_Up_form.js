import React from "react";
import woman from "../Media/women.png";
import { useState } from "react";

function Sign_Up_form() {
  const [isbtncliked, Setisbtncliked] = useState(true); // use boolean not string

  async function handleSubmit(e) {
    e.preventDefault(); // stop browser from reloading
    console.log("Submitting signup form...");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // send to backend
    const res = await fetch("http://localhost:3002/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    console.log(res);

    const result = await res.json();
    console.log(result);

    if (result.success) {
      Setisbtncliked(false);
    } else {
      alert("signup failed");
    }
  }

  return (
    <>
      <div>
        <h1 className="d-flex justify-content-center mt-5 mb-2">Sign up</h1>
        <div className="row mb-5">
          <div className="col m-5">
            <img src={woman} className="ps-5 img-fluid" />
          </div>

          {isbtncliked ? (
            <form
              className="col-8 g-3 signupform px-5 mt-5"
              onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="col-md-6 col-sm-4 offset-1">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="dev dwuti"
                    name="name"
                  />
                </div>

                <div className="col-md-3 col-sm-1">
                  <label htmlFor="mobile" className="form-label">
                    Mobile No.
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="mobile"
                    placeholder="+91"
                    name="mobile"
                  />
                </div>

                <div className="col-md-9 offset-1">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="a@b.com"
                    name="email"
                  />
                </div>

                <div className="col-md-9 offset-1">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="must contain @,#,number"
                    name="password"
                  />
                </div>

                <div className="row-6">
                  <button
                    type="submit"
                    className="btn btn-primary col-4 offset-4 px-3 rounded-pill mt-5"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <form
              className="col-8 g-3 signupform px-5 mt-5"
              onSubmit={async (e) => {
                e.preventDefault();
                console.log("OTP submitted");

                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData.entries());

                try {
                  const res = await fetch("http://localhost:3002/verifyotp", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data), 
                    credentials: "include", 
                  });

                  const result = await res.json();
                  console.log("Verify OTP result:", result);
                } catch (err) {
                  console.error("Error verifying OTP:", err);
                  alert("Something went wrong verifying OTP");
                }
              }}
            >
              <div className="col-6 offset-3">
                <label htmlFor="otp" className="form-label">
                  Otp
                </label>
                <input
                  type="string"
                  className="form-control"
                  id="otp"
                  placeholder="Otp"
                  name="otp"
                />
              </div>

              <div className="row">
                <button
                  type="submit"
                  className="btn btn-primary col-4 offset-4 px-3 rounded-pill mt-5"
                >
                  Enter
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default Sign_Up_form;
