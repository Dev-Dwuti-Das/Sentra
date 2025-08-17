
import React from 'react'
import woman from "../Media/women.png";

function Login_wrap() {
    return ( 
        <div>
      <h1 className="d-flex justify-content-center mt-5 mb-2">Login </h1>
      <div className="row mb-5">
        <div className="col m-5">
          <img src={woman} className="ps-5 img-fluid"></img>
        </div>
        <form class="col-8 g-3 signupform px-5 mt-5" action={'http://localhost:3002/login'} method='post'>
            <div className="row">
          <div class="col-md-6 offset-3">
            <label for="email" class="form-label">
             Email
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="a@b.com"
              name="email"
            ></input>
          </div>
          <div class="col-md-6 offset-3 mt-1">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="inputAddress2"
              placeholder="must contain @,#,number"
              name="password"
            ></input>
          </div>
          {/* <div class="col-md-7 offset-1">
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
          </div> */}
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

export default Login_wrap;