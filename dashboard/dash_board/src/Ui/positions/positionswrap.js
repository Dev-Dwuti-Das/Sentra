import React from "react";
import { positions } from "../data/data";
import axios from "axios"
import { useState, useEffect } from "react";

function Positionswrap() {
  const [Position, setPosition] = useState([]);
    useEffect(()=>{
      axios.get("http://localhost:3002/positionfetch").then((res) => {
        console.log(res.data);
        setPosition(res.data);
      })
    },[])
  return (
    <div>
      <div className="widget pt-3 mx-2">
        <div className="row">
          <div className="col d-flex justify-content-center ">Product</div>
          <div className="col d-flex justify-content-center">Name</div>
          <div className="col d-flex justify-content-center">Qty</div>
          <div className="col d-flex justify-content-center">Avg</div>
          <div className="col d-flex justify-content-center">Price</div>
          <div className="col d-flex justify-content-center">Net</div>
          <div className="col d-flex justify-content-center">Day chg.</div>
        </div>
        <hr className="my-2"></hr>
        {Position.map((ele, idx) => (
          <div className="row" key={idx}>
            <div className="col my-2 d-flex justify-content-center">
              {ele.product}
            </div>
            <div className="col my-2 d-flex justify-content-center">
              {ele.name}
            </div>
            <div className="col my-2 d-flex justify-content-center">
              {ele.qty}
            </div>
            <div className="col my-2 d-flex justify-content-center">
              {ele.avg}
            </div>
            <div className="col my-2 d-flex justify-content-center">
              {ele.price}
            </div>
            <div
              className={`col my-2 d-flex justify-content-center ${
                parseFloat(ele.net.replace("%", "")) > 0 ? "profit" : "loss"
              }`}
            >
              {ele.net}
            </div>
            <div
              className={`col my-2 d-flex justify-content-center ${
                parseFloat(ele.day.replace("%", "")) > 0 ? "profit" : "loss"
              }`}
            >
              {ele.day}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Positionswrap;
