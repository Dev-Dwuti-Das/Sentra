import React from "react";
import dev from "../Media/dev.jpg";
import "../About/about.css";

function people() {
  return (
    <>
      <h3 className="d-flex justify-content-center my-3 mt-5 mb-5">People</h3>
      <div className="row">
        <div className="col-4 d-flex justify-content-center flex-column offset-2 ">
          <img src={dev} className="dwuti img-fluid" height={300} width={300}></img>
          <div className="d-flex justify-content-center p-1 mt-1"> DEV DWUTI DAS</div>
          <div className="d-flex justify-content-center fw-light opacity-75">Developer. Founder. Visionary.</div>
        </div>
        <div className="col-4 ">
            <p className="p-3">
                Dev bootstrapped and started his coding journey in 2020 to overcome the hurdles he faced during his early projects as a self-taught developer. Today, he is building projects that merge AI with modern web technologies, aiming to change the way people interact with software.
            </p>
            <p className="p-3">
                He experiments with cutting-edge APIs to push the limits of what can be built.
                Which is inluded in this project as well.
            </p>

        </div>
      </div>
    </>
  );
}

export default people;
