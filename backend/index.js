const express = require('express')
require('dotenv').config();
const mongoose = require("mongoose");
const holding = require('../backend/model/holding')
const position = require("../backend/model/positions")
const app = express()
const URL = process.env.DB_URL;
const Port = process.env.port || 3002;
const cors = require("cors");
const bodyparser = require("body-parser");

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/holdingfetch', async(req, res) => {
  let holdingfetch = await holding.find({});
  res.json(holdingfetch);
})

app.get('/positionfetch', async(req, res) => {
  let positionfetch = await position.find({});
  res.json(positionfetch);
})

app.get('/tempdatapos', async(req, res) => {
  tempholding = [
    {
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,
  },
]
  tempholding.forEach(element => {
    let data = new position({
    product: element.product,
    name: element.name,
    qty: element.qty,
    avg: element.avg,
    price: element.price,
    net: element.net,
    day: element.day,
    isLoss: element.isLoss,
  })
  data.save();
});
  res.send("done !");
});

app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`)
  mongoose.connect(URL)
  console.log("DB_connected !");
})
