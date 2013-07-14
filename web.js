var express = require('express');
var fs = require('fs');
 
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buffer = fs.readFileSync('index.html');
  out = buffer.toString();
  response.send(out);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
