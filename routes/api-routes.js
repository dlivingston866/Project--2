var db = require("../models");


//Routes

module.exports = function(app) {

    //GET route for getting all items
    app.get("/api/posts/", function(req, res) {
        db.Post.findAll({})
            .then(function(dbPost) {
                res.json(dbPost);
            });
    });

    //POST route for saving a new post
    app.post("/api/posts", function(req, res) {
        console.log(req.body);
        db.Post.create({
            item: req.body.item,
            category: req.body.category,
            number: req.body.number

        })
    })







}