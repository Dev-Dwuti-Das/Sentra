const mongoose = require('mongoose');
const { Schema } = mongoose;

const order_Schema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode:String,
});

module.exports = mongoose.model("Order", order_Schema);