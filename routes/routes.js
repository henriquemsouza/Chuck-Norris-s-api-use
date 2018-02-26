var faker = require("faker");

const request = require('request');
//var http = require('http');


var myJoke;
request('https://api.icndb.com/jokes/random', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.value.joke);
  myJoke =body.value.joke;
});


var appRouter = function (app) {



  app.get("/", function (req, res) {
    res.status(200).send( myJoke );
  });


}

module.exports = appRouter;