const mongoose = require('mongoose');

const { Schema } = mongoose;

const account_Schema = new Schema({
  name: {
    type:String,
    required:true,
  },
  mobile:{
    type:Number,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true,
  } 
});

module.exports = mongoose.model('account', account_Schema);