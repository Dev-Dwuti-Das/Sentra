import mongoose from "mongoose";
const { Schema } = mongoose;

const order_Schema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode:String,
});

module.exports = mongoose.model('holding', holding_Schema);  