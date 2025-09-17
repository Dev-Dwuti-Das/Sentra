import {React, useState} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Button } from "bootstrap";
ChartJS.register(ArcElement, Tooltip, Legend);


export default function DoughnutChart({ data, options,onbtn_click}){
  const[ispressed, setispressed] = useState(false);

  function handle_btn_press(){
    setispressed(!ispressed);
    onbtn_click(!ispressed);
    console.log("is pressed");
  }

  return (
    <div className="widget p-3 mt-2">
      <h4 className="">
        Holding
      </h4>
      <div className="position-relative d-flex justify-content-center align-items-center">
        <Doughnut data={data} options={options} />
        <div
          className="position-absolute top-50 start-50 translate-middle text-white fw-bold"
          style={{ pointerEvents: "none" }}   
        >
          {ispressed?null:<h3>20.3k</h3>}
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn rounded-pill fav-button" onClick={handle_btn_press}>show more</button>
      </div>
    </div>
  );
}
