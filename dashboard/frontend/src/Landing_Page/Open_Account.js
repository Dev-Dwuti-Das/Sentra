import React from "react";
import man from "./Media/man.png";
function open_Account() {
  return (
    <>
      {/* <img src={man}></img> */}
      <div className="open_account w-50 mx-auto mb-5 ">
        <h1 className="d-flex justify-content-center">Open a Sentra account</h1>
        <p className="p-3">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button class="btn btn-primary col-6 offset-0 px-3 rounded-pill ">
          sign up for free
        </button>
      </div>
    </>
  );
}

export default open_Account;
