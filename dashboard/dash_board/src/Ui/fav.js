import React, { useState } from "react";
import { watchlist } from "./data/data.js";

function Favleft() {
  const [hoveredId, setHoveredId] = useState(null);
  const [buyingStockId, setBuyingStockId] = useState(null); 
  const [sellingStockId, setSellingStockId] = useState(null);

  function handle_mouse_enter(id) {
    setHoveredId(id);
  }

  function handle_mouse_exit() {
    setHoveredId(null);
  }

  function handle_buy(id) {
    setBuyingStockId(id);
    setSellingStockId(null); 
  }

  function handle_close_buy() {
    setBuyingStockId(null);
  }

  function handle_sell(id){
    setSellingStockId(id);
    setBuyingStockId(null);
  }

  function handle_sell_close(id){
    setSellingStockId(null);
  }

  return (
    <div className="fav position-relative">
      <div className="mb-3">
        <label htmlFor="search" className="mb-1 fw-semibold ms-3 fs-4">
          Search
        </label>
        <input
          className="form-control fav_input bg-dark border-0 rounded-pill px-4 text-white"
          placeholder="Search..."
          name="search"
        />
      </div>

      <div className="clicked">
        {watchlist.map((ele, idx) => (
          <div
            className="row clickfav m-0"
            onClick={() => handle_mouse_enter(ele.name)}
            onDoubleClick={handle_mouse_exit}
            key={idx}
          >
            <div className="col my-2 d-flex justify-content-center">
              {ele.name}
            </div>
            <div className="col my-2 d-flex justify-content-center">
              {ele.price}
            </div>
            <div
              className={`col my-2 d-flex justify-content-center ${
                parseFloat(ele.percent.replace("%", "")) > 0 ? "profit" : "loss"
              }`}
            >
              {ele.percent}
            </div>

            {hoveredId === ele.name && (
              <FavAction uid={ele.name} onBuy={handle_buy} onsell={handle_sell} />
            )}
          </div>
        ))}
      </div>

      {/* Slide-in Buy Window */}
      {buyingStockId && (
        <BuyWindow stockId={buyingStockId} onClose={handle_close_buy} />
      )}

      {sellingStockId && (
        <SellWindow stockId={sellingStockId} onClose={handle_sell_close}/>
        )}
    </div>
  );
}
export default Favleft;


const FavAction = ({ uid, onBuy, onsell}) => {
  return (
    <div className="row mb-2 mt-2 offset-1">
  <div className="col-2 mx-1">
    <button className="btn px-3 rounded-pill fav-button" onClick={() =>onBuy(uid)}>Buy</button>
  </div>
  <div className="col-2 mx-1">
    <button className="btn px-3 rounded-pill fav-button" onClick={() =>onsell(uid)}>Sell</button>
  </div>
  <div className="col-2 mx-1">
    <button className="btn px-3 rounded-pill fav-button">Sell</button>
  </div>
  <div className="col-2 mx-1">
    <button className="btn px-3 rounded-pill fav-button">Sell</button>
  </div>
</div>
  );
};

const BuyWindow = ({ stockId, onClose }) => {
  return (
    <>
      <hr></hr>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Buy {stockId}</h5>
        <button className="btn btn-sm px-1 m-0 bg-dark text-white rounded-pill" onClick={onClose}>
          X
        </button>
      </div>
      <form method="post" action='http://localhost:3002/neworders'>
        <input type="hidden" name="name" value={stockId} />
        <div className="row">
          <div className="col">
            <label htmlFor="qty" className="mb-1 fw-semibold">
              Quantity
            </label>
            <input
              type="number"
              className="form-control bg-dark mb-2 border-1 text-white rounded-pill"
              placeholder="Quantity"
              name="qty"
            />
          </div>
          <div className="col">
            <label htmlFor="price" className="mb-1 fw-semibold">
              Price
            </label>
            <input
              type="number"
              className="form-control bg-dark mb-2  border-1 rounded-pill text-white"
              placeholder="Quantity"
              name="price"
            />
          </div>
        </div>
        <button className="btn btn-success bg-dark rounded-pill w-100">
          Confirm Buy
        </button>
      </form>
    </>
  );
};

const SellWindow = ({ stockId, onClose }) => {
  return (
    <>
      <hr></hr>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Sell {stockId}</h5>
        <button className="btn btn-sm p-1 m-0 bg-dark text-white rounded-pill" onClick={onClose}>
          X
        </button>
      </div>
      <form method="post" action='http://localhost:3002/sellstock'>
        <input type="hidden" name="name" value={stockId} />
        <div className="row">
          <div className="col">
            <label htmlFor="qty" className="mb-1 fw-semibold">
              Quantity
            </label>
            <input
              type="number"
              className="form-control bg-dark mb-2 border-1 text-white rounded-pill"
              placeholder="Quantity"
              name="qty"
            />
          </div>
          <div className="col">
            <label htmlFor="price" className="mb-1 fw-semibold">
              Price
            </label>
            <input
              type="number"
              className="form-control bg-dark mb-2  border-1 rounded-pill text-white"
              placeholder="Quantity"
              name="price"
            />
          </div>
        </div>
        <button className="btn btn-danger  bg-dark rounded-pill w-100">
          Confirm sell 
        </button>
      </form>
    </>
  );
};