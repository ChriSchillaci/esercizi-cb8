const express = require("express");
const { products } = require("./data/products");

const app = express();
const PORT = 3001;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/products", (req, res) => {
  const { search, category } = req.query;

  let filterProduct = [...products];

  if (search)
    filterProduct = filterProduct.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  if (category)
    filterProduct = filterProduct.filter((product) =>
      product.category.toLowerCase().includes(category.toLowerCase())
    );
  if (!filterProduct.length) res.status(404).send("product not found");

   res.json(filterProduct);
});

app.get("/products/:productId", (req, res) => {
  const { productId } = req.params;
  const filterProduct = products.filter((product) => product.id == productId);

  if (!filterProduct.length) res.status(404).send("product not found");

   res.json(filterProduct);
});

app.listen(PORT, () => console.log("server running"));
