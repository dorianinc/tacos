
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Static directory
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
var router = require("./controllers/tacos_controller.js");

app.use('/', router);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT @ http://localhost:" + PORT);
  });
});
