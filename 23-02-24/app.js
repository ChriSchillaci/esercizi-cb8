const express = require("express");
const bodyParser = require("body-parser");

const auth = require("./middlewares/auth.js");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public/html"));

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/html/form.html");
});

app.get("/dashboard", auth, (req, res) => {
  const { role } = req.query;
  res.send(`Welcome ${role}`);
});



app.post("/mostra-dati", (req, res) => {
  const { firstName, lastName} = req.body;

  if (firstName && lastName) {
    res.send(`Welcome ${firstName} ${lastName}.`)
  }

  res.status(404).send('Please insert valid data');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
