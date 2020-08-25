let mysql = require("mysql");
let inquirer = require("inquirer");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "17800MykT",
    database: "new_foodsDB"
})

connection.connect(function(err) {
    if (err) throw err;
    runSearch();
});

function runSearch() {
    inquirer
    .prompt({
        name:
        type:
        message:
        choices: [
            "Find food by type",
            "Find food by category",
            "Find food by price",
            "Find food by region of origin"
        ]
    })
    .then(function(answer) {
        switch (answer.action) {
            case "Find food by type":
                typeSearch();
                break;

            case "Find food by category":
                categorySearch();
                break;

            case "Find food by price":
                priceSearch();
                break;

            case "Find food by region of origin":
                foodoriginSearch();
                break;
        }
    });
}

function typeSearch() {
    inquirer
    .prompt({
        name: "food type"
        type: "input"
        message: "What food would you like to look for?"
    })
    .then(function(answer) {
        let query = "SELECT position, food, category, price, region FROM food5000 WHERE ?";
        connection.query(query, {artist: answer.artist }, function (err, res) {
            for (var i = 0; i < res.length; i++) {
                console.log("Position: " + res[i].position + "|| Song: " + res[i].song + " || Year; " + res[i].year);
            }
            runSearch();
        });
    });
}

function categorySearch() {
    let query = "SELECT food FROM food5000 GROUP BY category"
    connection.query(query, function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].artist);
        }
        runSearch();
        });
    }
}

function priceSearch() {
    inquirer
    .prompt({
        name: "price",
        type: "input",
        message: "Item price target",
        validate: function(value) {
            if (isNaN(value) === false) {
                return true;
            }
            return false;
        }
    })
    .then(function(answer) {
        let query = "SELECT price FROM food5000 WHERE position BETWEEN ? and ?";
        connection.query(query, [answer.start, answer.end], function(err, res) {
            for (let i= 0; i < res.length; i++) {
                console.log(
                    res[i].price
                );
            }
            runSearch();
        }):
    
    });
});

function foodoriginSearch() {
    inquirer
    .prompt({})
}