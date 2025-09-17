import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ahomewrap from "./Landing_Page/home/Ahomewrap"
import Footer from "./Landing_Page/Footer";
import Navbar from "./Landing_Page/Navbar";
import Sign_Up_wrap from "./Landing_Page/Sign_Up/Sign_Up_wrap"
import Aboutwrap from "./Landing_Page/About/Aboutwrap";
import Princingwrap from "./Landing_Page/Pricing/Pricing_wrap";
import Supportwrap from "./Landing_Page/Support/Hero";
import Login_wrap from "./Landing_Page/login/loginwrap";
import "./Landing_Page/home/home.css"
import "../src/index.css"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Ahomewrap></Ahomewrap>,
  },
  {
    path:"/signup",
    element: <Sign_Up_wrap></Sign_Up_wrap>
  },
  {
    path:"/about",
    element: <Aboutwrap></Aboutwrap>
  },
  {
    path:"/pricing",
    element:<Princingwrap></Princingwrap>
  },
  {
    path:"/support",
    element:<Supportwrap></Supportwrap>
  },
  {
    path:"/login",
    element:<Login_wrap></Login_wrap>
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar></Navbar>
    <RouterProvider router={router} />
    <Footer></Footer>
  </React.StrictMode>
);
