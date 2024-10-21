const mongoose = require("mongoose");

//schema
const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

//model
const User = mongoose.model("User", userSchema);
module.exports = User;
