var http = require('http');

var app = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello world!\n');
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on port " + port);
});
