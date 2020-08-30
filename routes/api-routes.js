// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================



// Grabbing our models

const Foods = require("../models/food.js");
//Foods is not a model is function call function pass seqelize data types 
// Routes
// =============================================================
module.exports = function(app) {

    // Get all foods
    app.get("/api/all", function(req, res) {
        Foods.findAll({})
            .then(function(Foods) {
                // results are available to us inside the .then
                res.json(Foods);
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