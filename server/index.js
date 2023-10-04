const express = require("express");
const app = express();

app.use(express.json());

const db = require("./models");

// Routers
const recipeRouter = require("./routes/Recipes");
app.use("/recipes", recipeRouter);

// Checks if there are any tables to be created. If not, create them.
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
