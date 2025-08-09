import React from "react";
import woman from "../Media/women.png";

function Sign_Up_form() {
  return (
    <div>
      <h1 className="d-flex justify-content-center mt-5 mb-3"> Sign up</h1>
      <div className="row">
        <div className="col m-5">
          <img src={woman} className="ps-5 img-fluid"></img>
        </div>
        <form class="col-8 g-3 signupform px-5 mt-5">
            <div className="row">
          <div class="col-md-6 col-sm-4 offset-1">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail4"></input>
          </div>
          <div class="col-md-3 col-sm-1">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
            ></input>
          </div>
          <div class="col-md-9 offset-1">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            ></input>
          </div>
          <div class="col-md-9 offset-1">
            <label for="inputAddress2" class="form-label">
              Address 2
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            ></input>
          </div>
          <div class="col-md-7 offset-1">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity"></input>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Zip
            </label>
            <input type="text" class="form-control" id="inputZip"></input>
          </div>
          <div class="row-6">
            <button
              type="submit"
              class="btn btn-primary col-4 offset-4 px-3 rounded-pill mt-5"
            >
              Sign in
            </button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sign_Up_form;
