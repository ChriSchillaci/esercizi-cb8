const express = require("express");
const products = require('./routes/products.js')

const app = express();
const port = 3000;

app.use(express.static('./public'))

app.set('view engine', 'hbs')

app.get("/", (_, res) => res.render('index'));

app.use('/products', products)


app.listen(port);
