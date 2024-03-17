const express = require("express");
const productsData = require("../data.json");
const sortArray = require("../utils/sort.js");
const route = express.Router();

route.get("/", (req, res) => {
  const { opt, sort } = req.query;
  let sortedData;

  if (!sort) {
    return res.json(productsData);
  }

  try {
    if (
      (sort !== "asc" && sort !== "desc") ||
      (opt !== "price" && opt !== "description" && opt !== "title")
    ) {
      throw new Error();
    }
    sortedData = sortArray(productsData, opt, sort);
  } catch (_) {
    return res.status(404).send("Invalid sort");
  }

  return res.json(sortedData);
});

route.post("/", (req, res) => {
  const { title, description, price } = req.body;
  const id = productsData.length + 1;

  try {
    if (!title || !description || !price) {
      throw new Error();
    }

    productsData.push({
      id,
      title,
      description,
      price,
      thumbnail: `https://cdn.dummyjson.com/product-images/${id}/thumbnail.jpg`,
    });

    return res.status(201).send("Post worked successfully");
  } catch (_) {
    return res.status(400).send("Please add the required data");
  }
});

route.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const { title, description, price } = req.body;
  const indexId = productsData.findIndex((data) => data.id === id);

  try {
    if (indexId === -1) {
      throw new Error();
    }

    productsData[indexId] = {
      id,
      title,
      description,
      price,
      thumbnail: `https://cdn.dummyjson.com/product-images/${id}/thumbnail.jpg`,
    };

    return res.status(200).send("Put worked successfully");
  } catch (error) {
    return res.status(404).send("Id not found");
  }
});

route.delete("/:id", (req, res) => {
  const { id } = req.params;
  const indexId = productsData.findIndex((data) => data.id == id);

  try {
    if (indexId === -1) {
      throw new Error();
    }

    productsData.splice(indexId, 1);

    return res.status(200).send("Delete worked successfully");
  } catch (error) {
    return res.status(404).send("Delete failed");
  }
});

module.exports = route;
