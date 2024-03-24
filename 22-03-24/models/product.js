const mongoose = require("mongoose");

const product = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "title",
  },

  description: {
    type: String,
    required: true,
    default: "description",
  },

  price: {
    type: Number,
    required: true,
    default: "price",
  },

  thumbnail: {
    type: String,
    required: true,
    default: "thumbnail",
  },
});

module.exports = mongoose.model("Product", product);
