let express = require("express");
let app = express();
let PORT = process.env.PORT || 3060
let db = require("./models");

app.use(express.urlendcoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

require("./routes/firstapi-routes.js")(app);

db.sequelize.sync({ force: true }).then(funcion()) {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});
