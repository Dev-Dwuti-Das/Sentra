import React from "react";
import logo from "./Media/Logo.png"
import sentra from "./Media/SENTRA.png"

function navbar() {
  return (
    <div>
      <nav class="navbar  navbar-expand-lg text-white col">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">
            <img src = {sentra} height={20} width={120}></img>
          </a> */}
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center mb-2 mt-1" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active text-white  mx-4" aria-current="page" href="http://localhost:3000/dashboard">
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white  mx-4" href="http://localhost:3001/Market" >
                  Market
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white mx-4" href="http://localhost:3000/order">
                  Orders
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white  mx-4" href="http://localhost:3000/holding">
                  Holding
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white  mx-4" href="http://localhost:3000/position">
                  positions
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white  mx-4" >
                  Funds
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
