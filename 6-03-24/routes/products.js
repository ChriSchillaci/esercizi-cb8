const express = require("express");
const data = require("../data.json");
const router = express.Router();

router.get("/", (req, res) => {
  const { category } = req.query;

  let filterProducts = data;

  if (category === "man" || category === "woman" || category === "child") {
    filterProducts = data.filter(product => product.gender === category)
   return res.render('products', {filterProducts})
  }

  if (!category) {
   return res.render("products", {filterProducts});
  }

 return res.render("products", {error: "Couldn't find any product" });
});

module.exports = router;
