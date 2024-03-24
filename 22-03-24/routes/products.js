const express = require("express");
const route = express.Router();

const Product = require("../models/product.js");
const authToken = require("../middlewares/authToken.js");

route.get("/", authToken, async (req, res) => {
  const { page = 1, limit = 5 } = req.query;

  try {
    if (isNaN(page) || isNaN(limit)) {
      throw new Error("Number is mandatory");
    }

    const products = await Product.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const countDocs = await Product.countDocuments();

    res.status(200).json({
      products,
      meta: {
        totalItems: countDocs,
        itemCount: products.length,
        totalPages: Math.ceil(countDocs / limit),
        currentPage: Number(page),
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

route.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);

    await newProduct.save();

    res.status(201).json({
      message: `The product with the title "${req.body.title}" has been added`,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "The product couldn't be added. Please try again" });
  }
});

route.put("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const updatedProduct = req.body;
    await Product.findByIdAndUpdate(id, updatedProduct);
    res.status(200).json({
      message: `The product with the title "${req.body.title}" has been updated`,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "The product couldn't be updated. Please try again." });
  }
});

route.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = req.body;
    await Product.findByIdAndDelete(id, deletedProduct);
    res.status(200).json({
      message: `The product with the title "${req.body.title}" has been deleted`,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "The product couldn't be deleted. Please try again." });
  }
});

module.exports = route;
