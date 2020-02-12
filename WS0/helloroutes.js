var http = require("http");
http.createServer(function (request, response) {
  if (request.url === "/helloworld") {
    response.writeHead(200, {'Content-type': 'text/html'});
    response.write('Hello World\n');
    response.end('');
  }
  else if (request.url === "/homepage") {
    response.writeHead(200, {'Content-type': 'text/html'});
    response.write('Hello Homepage\n');
    response.end('');
  }
  else {
    response.writeHead(200, {'Content-type': 'text/html'});
    response.write('Hello Else\n');
    response.end('');
  }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
