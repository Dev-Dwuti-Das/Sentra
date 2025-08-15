import mongoose from "mongoose";
const { Schema } = mongoose;

const fav_Schema = new Schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
});

module.exports = new mongoose.model(favorite,fav_Schema);