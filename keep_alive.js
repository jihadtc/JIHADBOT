var http = require('http');

http.createserver(function (req, res) {
  res.write("I'm alive");
  res.end();
}).lissten(8080);
