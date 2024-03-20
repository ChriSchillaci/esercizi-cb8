require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const Product = require("./models/product.js");

const app = express();
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URI);

app.use(express.json());

db.on("error", (err) => console.log(err));
db.once("open", () => console.log("db working"));

app.get("/products", async (req, res) => {
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
    console.log(error);
    res.status(400).send(error.message);
  }
});

app.post("/products", async (req, res) => {
  try {
    const newProduct = new Product(req.body);

    await newProduct.save();

    res
      .status(201)
      .send(`The product with the title "${req.body.title}" has been added`);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const updatedProduct = req.body;
    await Product.findByIdAndUpdate(id, updatedProduct);
    res
      .status(200)
      .send(`The product with the title "${req.body.title}" has been updated`);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = req.body;
    await Product.findByIdAndDelete(id, deletedProduct);
    res
      .status(200)
      .send(`The product with the title "${req.body.title}" has been deleted`);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(3000);
