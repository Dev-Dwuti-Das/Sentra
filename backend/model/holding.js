const mongoose = require('mongoose');

const { Schema } = mongoose;

const holding_Schema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

module.exports = mongoose.model('Holding', holding_Schema);