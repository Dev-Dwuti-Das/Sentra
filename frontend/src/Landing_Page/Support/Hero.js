import React from "react";
import "../Support/support.css"

function support_function() {
  return (
    <div className="support-hero">
      <div className="row">
        <div className="col-6 offset-1">
          <h5 className="fw-bold mt-5">Support Portal</h5>
          <h2>search for an answer or browse help topics</h2>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="how to activate F&O, why is my order getting rejected ?"
            ></input>
            <span><a href="#" className="px-2">Track ticket</a></span>
            <span><a href="#" className="px-2">Track account opening</a></span>
            <span><a href="#" className="px-2">Intra day</a></span>
            <span><a href="#" className="px-2">Margins</a></span>
          </div>
        </div>
        <div className="col offset-1">
            <h5 className="fw-semibold mt-5 ">Features</h5>
            <ol>
                <li><a href="#">Current take overs and Delisting</a></li>
                <li><a href="#">Latest intraday leverages</a></li>
            </ol>
        </div>
      </div>
    </div>
  );
}

export default support_function;
