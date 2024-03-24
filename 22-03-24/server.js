require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const products = require("./routes/products.js");
const authUser = require("./routes/authUser.js");

const app = express();
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URI);

app.use(express.json());

db.on("error", (err) => console.log(err));
db.once("open", () => console.log("db working"));

app.use("/", authUser);
app.use("/products", products);

app.listen(3000);
