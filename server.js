if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

// Requiring our models for syncing
let db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize
    .sync({
        force: true
    })
    .then(function() {
        app.listen(PORT, function() {
            console.log("App listening on PORT " + PORT);
            console.log(`THIS IS OUR SECRET: ${process.env.SESSION_SECRET}`)

        });
    });