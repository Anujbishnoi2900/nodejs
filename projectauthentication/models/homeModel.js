// optional (dummy model if needed)
const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  title: String,
  price: Number,
});

module.exports = mongoose.model("Home", homeSchema);