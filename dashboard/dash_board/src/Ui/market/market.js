import React, { useState, useEffect } from "react";
import axios from "axios";
import CachedIcon from "@mui/icons-material/Cached";

function Marketwrap() {
  const [Market, setMarket] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  function handle_mouse_enter(id) {
    setHoveredId(id);
    console.log("entered")
    console.log(hoveredId);
  }

  function handle_mouse_exit() {
    setHoveredId(null);
  }
  const MAX_LEN = "Berkshire Hathaway".length;

  useEffect(() => {
    axios
      .get("http://localhost:3002/APItest")
      .then((res) => {
        const merged = res.data.quotes.map((q) => {
          const profile = res.data.profiles.find((p) => p.symbol === q.symbol);
          return { ...q, ...profile };
        });
        setMarket(merged);
      })
      .catch((err) => console.error(err));
  }, []);

  const formatField = (value) => {
    if (!value) return "";
    const str = String(value);
    if (str.length > MAX_LEN) {
      return str.split(" ")[0];
    }
    return str;
  };

  return (
    <>
      <div className="d-flex">
        <h3 className="ms-3 fw-2">Market</h3>
        {/* <button className="btn m-0 p-0"><CachedIcon className="opacity-75"></CachedIcon></button> */}
      </div>
      <div className="widget pt-3 mx-1">
        <div className="row fw-bold ms-4 px-3">
          <div className="col d-flex justify-content-center">Name</div>
          <div className="col d-flex justify-content-center">chg.</div>
          <div className="col d-flex justify-content-center">price chg.</div>
          <div className="col d-flex justify-content-center">Price</div>
          <div className="col d-flex justify-content-center">High</div>
          <div className="col d-flex justify-content-center">Low</div>
        </div>
        <hr className="my-2" />

        {Market.filter(
          (ele) => ele.name && ele.c && ele.h && ele.logo && ele.l
        ).map((ele, idx) => (
          <div className="row px-3" onMouseEnter={() => handle_mouse_enter(ele.name)} onMouseLeave={handle_mouse_exit} key={idx}>
            {ele.logo ? (
              <img
                className="p-0 d-flex justify-content-center align-item-center my-2"
                src={ele.logo}
                alt={ele.symbol}
                style={{ width: "35px", height: "35px", borderRadius: "15px" }}
              />
            ) : (
              "—"
            )}
            <div className="col my-2 d-flex justify-content-center">
              {formatField(ele.name)}
            </div>
            <div
              className={`col my-2 d-flex justify-content-center ${
                ele.dp > 0 ? "profit" : ele.dp < 0 ? "loss" : "neutral"
              }`}
            >
              {ele.dp > 0
                ? `+${formatField(ele.dp)}%`
                : `${formatField(ele.dp)}%`}
            </div>
            <div
              className={`col my-2 d-flex justify-content-center${
                ele.dp > 0 ? " profit" : " loss"
              }`}
            >
              {ele.dp > 0 ? `+$${ele.dp}` : `-$${Math.abs(ele.dp)}`}
            </div>
            <div className="col my-2 d-flex justify-content-center">
              ${formatField(ele.c)}
            </div>
            <div className="col my-2 d-flex justify-content-center">
              {formatField(ele.h)}
            </div>
            <div className="col my-2 d-flex justify-content-center">
              {formatField(ele.l)}
            </div>
            {hoveredId === ele.name && (
            <div className="col my-2 d-flex justify-content-center">
              <button type="button" className=" btn buybtn px-2 rounded-pill mx-1">Buy</button>
              <button  className="btn sellbtn px-2 rounded-pill mx-1">Sell</button>
            </div>)}
          </div>
        ))}
      </div>
    </>
  );
}

export default Marketwrap;
