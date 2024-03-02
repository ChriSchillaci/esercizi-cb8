const express = require("express");
const recipes = require("./data");
const hbs = require('hbs')

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'))

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials')

app.get("/", (_, res) => res.render("index"));

app.get("/recipes", (_, res) => {
  res.render("recipes", { recipes });
});

app.get("/recipes/:recipeId", (req, res) => {
  const {recipeId} = req.params
  const filterRecipe = recipes.filter(recipe => recipe.id == recipeId)

  if (!filterRecipe.length) {res.status(404).send("We couldn't find the recipe")}
  
  res.render('ingredients', {filterRecipe})

})

app.listen(port);
