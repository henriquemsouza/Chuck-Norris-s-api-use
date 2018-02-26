

// const request = require('request');

// var http = require('http');
var portt =8070;


var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

var server = app.listen(portt, function () {
    console.log("app running on port.", server.address().port);
});


var appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).send(myJoke);
  });
}

module.exports = appRouter;