const express = require("express");
const router = express.Router();
const { Recipes } = require("../models");

router.get("/", async (req, res) => {
  const listOfRecipes = await Recipes.findAll();
  res.json(listOfRecipes);
});

// Wait for data to be inserted into database before anything else starts
router.post("/", async (req, res) => {
  const post = req.body;
  await Recipes.create(post);
  res.json(post);
});

module.exports = router;
