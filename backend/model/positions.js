const mongoose = require('mongoose');
const { Schema } = mongoose;

const position_schema = new Schema( {
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
  },
); 

module.exports = mongoose.model('position', position_schema);