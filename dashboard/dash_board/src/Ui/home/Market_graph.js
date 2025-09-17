import React from "react";
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
  const stockData = {
    "7PM": {
      "1. open": "257.5200",
      "4. close": "357.2200",
      "5. volume": "570.695",
    },
    "6PM": {
      "1. open": "257.2200",
      "4. close": "437.0100",
      "5. volume": "571.085",
    },
    "5PM": {
      "1. open": "257.2000",
      "4. close": "390.2400",
      "5. volume": "797",
    },
    "4PM": {
      "1. open": "357.5900",
      "4. close": "857.4800",
      "5. volume": "181.2398",
    },
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      title: {
        display: false,
        text: "Stock Prices",
      },
    },
  };

  // Use stockData keys as labels (timestamps)
  const labels = Object.keys(stockData);

  const data_line = {
    labels,
    datasets: [
      {
        label: "Open Price",
        borderWidth: 5,
        data: Object.values(stockData).map((d) => Number(d["1. open"])),
        borderColor: "rgb(243, 88, 101)", // red
        backgroundColor: "rgba(243, 88, 101, 0.5)",
      },
      {
        label: "Close Price",
        borderWidth: 5,
        data: Object.values(stockData).map((d) => Number(d["4. close"])),
        borderColor: "rgb(73, 90, 251)", // blue
        backgroundColor: "rgba(73, 90, 251, 0.5)",
      },
      {
        label: "Volume",
        borderWidth: 5,
        data: Object.values(stockData).map((d) => Number(d["5. volume"])),
        borderColor: "rgba(169, 207, 16, 1)", // green
        backgroundColor: "rgba(169, 207, 16, 0.5)",
      },
    ],
  };

  return (
    <div className="widget mt-2 p-3">
        <h4>Market</h4>
      <Line options={options} data={data_line} />
    </div>
  );
}

export default Market_Graph;
