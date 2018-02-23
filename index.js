var http = require("http");

var options = {
  "method": "GET",
  "hostname": "api.icndb.com",
  "port": null,
  "path": "/jokes/random",

};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();