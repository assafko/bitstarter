var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //var frosty = new Buffer(24);
  //fs.readFileSync(index.html)
  //buf.toString(, "utf-8"))
  //response.send('Hello World3!');
  
  fs.readFile('.index.html', 'utf8', function(err, data) {
  if (err) throw err;
  response.send(data);
});

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
