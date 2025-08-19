import React, { useEffect } from "react";
// import { holdings } from "../data/data";
import { replace } from "react-router";
import axios from "axios"
import { useState } from "react";


function Holdingwrap() {
  const [Holding, setHolding] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3002/holdingfetch").then((res) => {
      console.log(res.data);
      setHolding(res.data);
    })
  },[])
  return (
    <>
      <h3 className="ms-3 mb-3">Holding</h3>
      <div className="widget mb-3">
        <div className="row">
          <div className="col px-4 ">
            <div className="d-flex justify-content-center">
              Total investment
            </div>
            <h3 className="d-flex justify-content-center">13.876</h3>
          </div>
          <div className="col ">
            <div className="d-flex justify-content-center">Current value</div>
            <h3 className="d-flex justify-content-center">13.876</h3>
          </div>
          <div className="col ">
            <div className="d-flex justify-content-center">Day P&L</div>
            <h3 className="d-flex justify-content-center">13.876</h3>
          </div>
          <div className="col ">
            <div className="d-flex justify-content-center">Total P&L</div>
            <h3 className="d-flex justify-content-center">13.876</h3>
          </div>
        </div>
      </div>
      <div>
        <div className="widget pt-3 mx-2">
            <div className="row">
            <div className="col my-2 d-flex justify-content-center">Product</div>
            <div className="col my-2 d-flex justify-content-center">Qty</div>
            <div className="col my-2 d-flex justify-content-center">
              Avg.
            </div>
            <div className="col my-2 d-flex justify-content-center">
              Price
            </div>
            <div className="col my-2 d-flex justify-content-center">Net chg.</div>
            <div className="col my-2 d-flex justify-content-center">Day chg.</div>
          </div>
          <hr className="m-0"></hr>
          {Holding.map((ele, idx) => ( 
            <div className="row" key={idx}>
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
              <div className={`col my-2 d-flex justify-content-center ${parseFloat(ele.net.replace('%', '')) > 0 ?"profit":"loss"}`}>
                {ele.net}
              </div>
              <div className={`col my-2 d-flex justify-content-center ${parseFloat(ele.day.replace('%', '')) > 0 ?"profit":"loss"}`}>
                {ele.day}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Holdingwrap;
