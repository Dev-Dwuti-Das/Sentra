import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { symbol } from "framer-motion/client";
const axios = require("axios");

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Market_Graph() {
  const [Marketgraph, setMarketgraph] = useState([]);
  const [stockCode, setStockCode] = useState("");

  const fetchData = async (symbol) => {
    axios
      .get(`http://localhost:3002/Market_graph?symbol=${symbol}`)
      .then((res) => {
        const timeSeries = res.data["Time Series (Daily)"];
        console.log(timeSeries);
        setMarketgraph(timeSeries);
      });
  };
  useEffect(() => {
    fetchData(stockCode);
  }, []);

  function handle_search() {
    fetchData(stockCode);
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 7,
          boxWidth: 9,
          boxHeight: 9,
          color: "white",
          font: {
            size: 14,
          },
        },
        display: true,
        position: "bottom",
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
      y1: {
        type: "linear", // right y-axis for volume
        grid: { drawOnChartArea: false }, // don’t overlap grids
      },
    },
  };

  const allDates = Object.keys(Marketgraph).reverse().slice(-50);
  const labels = allDates.map((date) => {
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${month}-${day}`;
  });
  const data_line = {
    labels,
    datasets: [
      {
        label: "OPEN",
        borderWidth: 4,
        pointRadius: 0,
        tension: 0.3,
        data: Object.values(Marketgraph).map((d) => Number(d["1. open"])),
        borderColor: "rgb(243, 88, 101)",
        backgroundColor: "rgb(243, 88, 101)",
      },
      {
        label: "CLOSE",
        borderWidth: 4,
        pointRadius: 0,
        tension: 0.3,
        data: Object.values(Marketgraph).map((d) => Number(d["4. close"])),
        borderColor: "rgb(73, 90, 251)",
        backgroundColor: "rgb(73, 90, 251)",
      },
      {
        label: "VOL",
        borderWidth: 4,
        pointRadius: 0,
        tension: 0.3,
        data: Object.values(Marketgraph).map((d) => Number(d["5. volume"])),
        borderColor: "rgba(169, 207, 16, 1)",
        backgroundColor: "rgba(169, 207, 16, 1)",
        yAxisID: "y1",
      },
      {
        label: "HIGH",
        borderWidth: 4,
        pointRadius: 0,
        tension: 0.3,
        data: Object.values(Marketgraph).map((d) => Number(d["2. high"])),
        borderColor: "rgba(255, 193, 7, 1)",
        backgroundColor: "rgba(255, 193, 7, 0.5)",
      },
      {
        label: "LOW",
        borderWidth: 4,
        pointRadius: 0,
        tension: 0.3,
        data: Object.values(Marketgraph).map((d) => Number(d["3. low"])),
        borderColor: "rgba(0, 200, 83, 1)",
        backgroundColor: "rgba(0, 200, 83, 0.5)",
      },
    ],
  };

  return (
    <div className="widget mt-2 p-3 pb-1">
      <div className="row">
        <div className="col">
          <h4>Market</h4>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-8">
              <input
                className="form-control bg-dark m-0 border-0 rounded-pill px-4 text-white"
                placeholder="Search..."
                name="Stock_code"
                onChange={(e) => setStockCode(e.target.value)}
              />
            </div>
            <div className="col-4">
              <button
                className="btn btn-primary m-0 d-flex align-items-center justify-content-center"
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  padding: "0",
                }}
                onClick={handle_search}
              >
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Line options={options} data={data_line} />
    </div>
  );
}

export default Market_Graph;
