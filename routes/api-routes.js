// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the items
    app.get("/api/newfoods", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.NewFoods.findAll({}).then(function(dbNewFoods) {
            // We have access to the todos as an argument inside of the callback function
            res.json(dbNewFoods);
        });
    });

    // POST route for saving a new todo
    app.post("/api/newfoods", function(req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property
        db.NewFoods.create({
            text: req.body.text,
            complete: req.body.complete
        }).then(function(dbNewFoods) {
            // We have access to the new todo as an argument inside of the callback function
            res.json(dbNewFoods);
        });
    });

    // DELETE route for deleting todos. We can get the id of the todo to be deleted from
    // req.params.id
    app.delete("/api/newfoods/:id", function(req, res) {
        // We just have to specify which todo we want to destroy with "where"
        db.NewFoods.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbNewFoods) {
            res.json(dbNewFoods);
        });

    });

    // PUT route for updating todos. We can get the updated todo data from req.body
    app.put("/api/newfoods", function(req, res) {
        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        db.Todo.update({
            text: req.body.text,
            complete: req.body.complete
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbNewFoods) {
            res.json(dbNewFoods);
        });
    });

};