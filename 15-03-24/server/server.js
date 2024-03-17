const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const products = require('./router/products')

app.use(cors())
app.use(express.json())

app.use('/products', products)

app.listen(port)