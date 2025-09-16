import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Orderswrap from "./Ui/orders/orderWrap";
import Interfacewrap from "./Ui/home/interfaceWrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Holding from "./Ui/holding/holdingwrap";
import Positionswrap from "./Ui/positions/positionswrap";
import Navbarwrap from "./Navbarwrap";
import Fav_left from "./Ui/fav";
import Marketwrap from "./Ui/market/market";
import Marketnews from "./Ui/home/marketnews";


const router = createBrowserRouter([
  {
    path: "/order", 
    element: <Orderswrap />
  },
  {
    path: "/dashboard",
    element: <Interfacewrap />,
  },
  {
    path :"/holding",
    element : <Holding></Holding>
  },
  {
    path:"/position",
    element:<Positionswrap></Positionswrap>
  },
  {
    path:"/Market",
    element:<Marketwrap></Marketwrap>
  }


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    
    
    <Navbarwrap></Navbarwrap>
    <Marketnews></Marketnews>
    <div className="row mx-2">
      
      <div className="col-3  widget me-3">
        <Fav_left></Fav_left>
      </div>
      <div className="col">
        <RouterProvider router={router} />
      </div>
    </div>    
  </React.StrictMode>
);
