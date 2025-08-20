import React from "react";
import Fav_left from "../fav";
import Holding_comp from "./holding";
import Equity from "./equity";
import Commodity from "./Commodity";
import Holding_graph from "./holding_graph";
import { react, useState, useEffect } from "react";
import axios from "axios";

function Interfacewrap() {
  const [Holding, setHolding] = useState([]);
  const [child_btn_click, setchild_btn_cliked] = useState(null);

  function handle_child_btn(status) {
    setchild_btn_cliked(status);
    console.log("parent knowss" + status);
  }
  useEffect(() => {
    axios.get("http://localhost:3002/holdingfetch").then((res) => {
      console.log(res.data);
      setHolding(res.data);
    });
  }, []);
  const options = {
    layout: {
      padding: {
        top: 0,
        right: 0, // 👈 add spacing between chart and legend
        bottom: 0,
        left: 0,
      },
      // padding: {
      //   middle: 100, // 👈 adds 30px space between chart and legend
      // },
    },
    plugins: {
      legend: {
        position: "right",
        display: child_btn_click ? true : false,
        labels: {
          color: "white",
          font: {
            size: 14,
          },
          boxWidth: 30,
          boxHeight: 30,
          padding: 10,
          usePointStyle: true,
        },
      },
    },
  };
  const data = {
    labels: Holding.map((e) => e.name),
    datasets: [
      {
        label: `Stocks`,
        data: Holding.map((e) => e.qty),
        backgroundColor: [
          "rgb(243, 88, 101)",
          "rgb(73, 90, 251)",
          "rgb(255, 199, 88)",
          "rgb(68, 206, 141)",
          "rgb(242, 134, 179)",
          "rgba(255, 160, 64, 0.82)",
          "rgb(88, 190, 255)",
          "rgb(154, 106, 255)",
          "rgb(255, 112, 67)",
          "rgb(0, 200, 190)",
          "rgb(255, 120, 180)",
          "rgb(110, 220, 90)",
          "rgb(255, 87, 210)",
          "rgba(255, 99, 132, 0.85)",
          "rgba(75, 192, 192, 0.85)",
          "rgba(255, 206, 86, 0.85)",
        ],
        borderColor: [
          "rgb(23, 23, 23)",
          "rgb(23, 23, 23)",
          "rgb(23, 23, 23)",
          "rgb(23, 23, 23)",
          "rgb(23, 23, 23)",
          "rgb(23, 23, 23)",
          "rgb(23, 23, 23)",
          "rgb(23, 23, 23)",
          "rgb(23, 23, 23)",
          "rgb(23, 23, 23)",
          "rgb(23, 23, 23)",
          "rgb(23, 23, 23)",
        ],
        borderWidth: 2,
        spacing: 5,
      },
    ],
  };
  return (
    <>
      <div className="row">
        <div className="col-4">
          <Holding_comp></Holding_comp>
        </div>
        <div className="col-4">
          <Equity></Equity>
        </div>
        <div className="col-4">
          <Commodity></Commodity>
        </div>
      </div>
      <div className="row">
        <div className={`col ${child_btn_click ? "col-3" : "col-3"}`}>
          <Holding_graph
            data={data}
            options={options}
            onbtn_click={handle_child_btn}
          ></Holding_graph>
        </div>
        <div className="col">lund</div>
      </div>
    </>
  );
}

export default Interfacewrap;
