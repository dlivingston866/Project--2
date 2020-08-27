// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================



// Grabbing our models

const Foods = require("../models/food.js");

// Routes
// =============================================================
module.exports = function(app) {

  // Get all foods
  app.get("/api/all", function(req, res) {

    // Finding all Foods, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Foods.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a food
  app.post("/api/new", function(req, res) {

    console.log("Food Data:");
    console.log(req.body);

    Foods.create({
      food: req.body.food,
      category: req.body.category
      })
        .then(function(results) {
      // `results` here would be the newly created food
          res.end();
          });

  });

};