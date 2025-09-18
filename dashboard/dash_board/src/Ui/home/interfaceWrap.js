import React from "react";
import Fav_left from "../fav";
import Holding_comp from "./holding";
import Equity from "./equity";
import Commodity from "./Commodity";
import Holding_graph from "./holding_graph";
import { react, useState, useEffect } from "react";
import axios from "axios";
import Market_Graph from "./Market_graph";


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
        right: 0, 
        bottom: 0,
        left: 0,
      },

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
  const data_doughnut= {
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
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data_bar= {
  labels,
  datasets: [
  {
    label: 'Dataset 1',
    data: [120, 340, 560, 220, 430, 800, 670, 510, 720, 390],
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
  },
  {
    label: 'Dataset 2',
    data: [200, 450, 300, 780, 600, 910, 400, 250, 580, 770],
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
  },
  ]
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
            data={data_doughnut}
            options={options}
            onbtn_click={handle_child_btn}
          ></Holding_graph>
        </div>
        <div className="col-6">
          <Market_Graph>
            
          </Market_Graph>
          </div>
        <div className="col">lund</div>
      </div>
      <div className="row">
        {/* <Market_Graph>
            
        </Market_Graph> */}
      </div>
    </>
  );
}

export default Interfacewrap;
