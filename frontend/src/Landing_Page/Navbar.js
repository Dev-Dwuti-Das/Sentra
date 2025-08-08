import React from "react";
import Logo from "./Media/Logo.png";

function Navbar() {
  return (
    <nav className="navbar shadow-card navbar-expand-lg col-10 offset-1 rounded-pill mt-3 p-2">
      <div className="container-fluid">
        <a
          className="navbar-brand text-white d-flex align-item-center"
          href="#"
        >
          <img className="me-2" src={Logo} height={30} width={32}></img>
          <b>SENTRA</b>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>

        <div
          className="collapse  navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-white" href="#">
                Sign up
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-white" href="#">
                About
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-white" href="#">
                Products
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-white" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-white" href="#">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
