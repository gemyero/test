var http = require('http');
var server = http.createServer();

server.on('request', (request, response) => {
  response.writeHead(200);
  response.write('Hello, Gemy');
  response.end();
});

server.listen(9009);
