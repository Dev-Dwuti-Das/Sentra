import React from "react";
import study from "../Media/study.png";
function Product() {
  return (
    <div className="row mx-1 mb-5">
      <div className="col justify-content-center">
        <h1 className="d-flex justify-content-center">
         Free and open market education
         </h1>
        <p className="px-5 ps-5 ms-3" >
          Varsity by Zerodha is the world’s largest online stock market
          education platform — a completely free and comprehensive resource for
          anyone looking to understand the markets. Whether you're a complete
          beginner or an aspiring pro, Varsity offers well-structured,
          easy-to-understand modules that cover everything from the fundamentals
          of investing to advanced trading strategies.
          <br />
        </p>
        {/* <p className="px-5 py-2">
          TradingQ&A is India’s most vibrant online community of traders and
          investors. Got a question about the markets? From beginner doubts to
          expert insights, this is the place to ask, share, and learn in real
          time. Join thousands of active members discussing stocks, strategies,
          and everything in between.
        </p> */}
      </div>
      <div className="col-5 d-flex justify-content-center">
        <img src={study} className="img-fluid Edu-image mb-5"></img>
      </div>
    </div>
  );
}

export default Product;
