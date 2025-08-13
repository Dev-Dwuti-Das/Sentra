const express = require('express')
require('dotenv').config();
const mongoose = require("mongoose");
const app = express()

const URL = process.env.DB_URL;
const Port = process.env.port || 3002;


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`)
  mongoose.connect(URL)
  console.log("DB_connected !");
})
