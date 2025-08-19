import React from "react";
import axios from "axios"
import { useState,useEffect } from "react";

const now = new Date();
const dateOnly = now.toISOString().split('T')[0];

function Orderswrap() {
  const [order, setOrder] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3002/orderfetch").then((res) => {
      console.log(res.data);
      setOrder(res.data);
    })
  },[])
  return (
    <>
      <h3 className="ms-3">Open orders</h3>
      <div className="widget pt-3 mx-2">
        <div className="row">
          <div className="col d-flex justify-content-center">Date</div>
          <div className="col d-flex justify-content-center">Type</div>
          <div className="col d-flex justify-content-center">Instrument</div>
          <div className="col d-flex justify-content-center">Product</div>
          <div className="col d-flex justify-content-center">Qty</div>
          <div className="col d-flex justify-content-center">Price</div>
        </div>
        <hr className="my-2"></hr>
        {order.map((ele, idx) => (
          <div className="row" key={idx}>
            <div className="col my-2 d-flex justify-content-center">
              {dateOnly}
            </div>
            <div className="col my-2 d-flex justify-content-center">
              {ele.mode}
            </div>
            <div className="col my-2 d-flex justify-content-center">
              {}
            </div>
            <div className="col my-2 d-flex justify-content-center">
              {ele.name}
            </div>
            <div className="col my-2 d-flex justify-content-center">
              {ele.qty}
            </div>
            <div className="col my-2 d-flex justify-content-center">
              {ele.price}
            </div>
            {/* <div
              className={`col my-2 d-flex justify-content-center ${
                parseFloat(ele.net.replace("%", "")) > 0 ? "profit" : "loss"
              }`}
            >
              {ele.net}
            </div> */}
            {/*  -flex justify-content-center */}
          </div>
        ))}
      </div>
    </>
  );
}

export default Orderswrap;
