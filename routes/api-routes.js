// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================



// Grabbing our models

let db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the todos
    app.get("/api/new_foodsDB", function(req, res) {
        // findAll returns all entries for a table when used with no options
        new_foodsDB.findAll({}).then(function(new_foodsDB) {
            // We have access to the newfoods as an argument inside of the callback function
            res.json(new_foodsDB);
        });
    });

    // POST route for saving a new todo. You can create a todo using the data on req.body
    app.post("/api/new_foodsDB", function(req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property
        new_foodsDB.create({
            text: req.body.text,
            complete: req.body.complete
        }).then(function(new_foodsDB) {
            // We have access to the new new_foods as an argument inside of the callback function
            res.json(new_foodsDB);
        });
    });

    // DELETE route for deleting todos. You can access the todo's id in req.params.id
    app.delete("/api/new_foodsDB/:id", function(req, res) {
        // We just have to specify which new_foods we want to destroy with "where"
        new_foodsDB.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(new_foodsDB) {
            res.json(new_foodsDB);
        });
    });

    // PUT route for updating todos. The updated todo will be available in req.body
    app.put("/api/new_foodsDB", function(req, res) {
        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        new_foodsDB.update({
            text: req.body.text,
            complete: req.body.complete
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(new_foodsDB) {
            res.json(new_foodsDB);
        });
    });

};