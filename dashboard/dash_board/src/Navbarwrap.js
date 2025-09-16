import React from "react";
import Navbar from "./Ui/navbar";
import sentra from "./Ui/Media/SENTRA.png"
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { blue, A100, Purple, deepPurple } from "@mui/material/colors";

function Navbarwrap() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3002/accountfetch", {
      method: "GET",
      credentials: "include", // send cookies
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) setUser(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
  <div className="row">
    <div className="col-2 m-0 d-flex justify-content-start align-items-center ms-3"><img src={sentra} height={20} width={140}></img></div>
    <div className="col-7"><Navbar></Navbar></div>
    <div className="col-2 d-flex justify-content-end align-items-center ms-5">
      <Stack direction="row">
      <Avatar sx={{ bgcolor:deepPurple.A400, pl:0, mr:1.5, width: 37, height: 37} }>{user?.name}</Avatar>
      <span className="d-flex justify-content-center align-item-center mt-2 mb-1"><h6>{user?.name}</h6></span>
    </Stack>
    </div>
  </div>
  )
}

export default Navbarwrap;
