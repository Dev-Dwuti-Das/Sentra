import logo from './logo.svg';
import './App.css';
import React from 'react';
import Fav_left from './Ui/fav';
import Interfacewrap from './Ui/home/interfaceWrap';
import Navbar from './Ui/navbar';
import Orderswrap from './Ui/orders/orderWrap';

function App() {
  return (
    <>
    <div className="row">
      <div className="col-3 ms-4 ">
        <Fav_left></Fav_left>
      </div>
      <div className="col"> 
      </div>
    </div>
    </>
  );
}

export default App;
