const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const user = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    default: "example432@gmail.com",
  },
});

module.exports = mongoose.model("User", user);
