import React from "react";
import coin from "../Media/Coin.png";

function PricingDetails() {
  return (
    <div className="row text-center mb-5">
      {/* Free Tier */}
      <div className="col pt-3">
        <img src={coin} height={250} width={250} className="mx-auto d-block" />
        <h4>Free tier</h4>
        <ul className="list-unstyled opacity-75">
          <li className="my-1">Real-time Market Data (15-min delay)</li>
          <li className="my-1">AI Market Insights (Lite) – 5 tips/day</li>
          <li className="my-1">Portfolio Tracking – Up to 5 stocks</li>
          <li className="my-1">1-Year Historical Data</li>
          <li className="my-1">Basic Charting Tools</li>
          <li className="my-1">Educational Resources</li>
          <li className="my-1">Email Support (48 hr response)</li>
        </ul>
      </div>

      {/* $20 Tier */}
      <div className="col pt-3">
        <img src={coin} height={250} width={250} className="mx-auto d-block" />
        <h4>$20/month</h4>
        <ul className="list-unstyled opacity-75">
          <li className="my-1">Real-time market data</li>
          <li className="my-1">AI Insights Pro (50 tips/day)</li>
          <li className="my-1">Portfolio Tracking – Unlimited stocks</li>
          <li className="my-1"> 10-Year Historical Data</li>
          <li className="my-1">Advanced Paper Trading Mode</li>
          <li className="my-1">Advanced Charting & Technical Indicators</li>
          <li className="my-1">Custom Alerts & Notifications</li>
        </ul>
      </div>

      {/* $100 Tier */}
      <div className="col pt-3">
        <img src={coin} height={250} width={250} className="mx-auto d-block" />
        <h4>$100/month</h4>
        <ul className="list-unstyled opacity-75">
          <li className="my-1">All tier features+</li>
          <li className="my-1">Ultra-low latency market data (sub-ms)</li>
          <li className="my-1">AI Auto-Trading Bots with strategy customization</li>
          <li className="my-1">Institution-grade risk management tools</li>
          <li className="my-1">Private AI model training with your own data</li>
          <li className="my-1">Dedicated Account Manager</li>
          <li className="my-1">Exclusive research & early market reports</li>
        </ul>
      </div>
    </div>
  );
}

export default PricingDetails;
