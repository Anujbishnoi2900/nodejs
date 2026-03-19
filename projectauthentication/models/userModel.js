const mongoose = require("mongoose");

// user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: "user", // user or admin
  },
});

module.exports = mongoose.model("User", userSchema);