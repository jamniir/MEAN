var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {

  if (request.url === "/frontpage") {
    fs.readFile("frontpage.html", function (error, pageResponse) {
      if (error) {
        response.writeHead(404);
        response.write('Error 404: Not Found');
      }
      else {
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write(pageResponse);
      }
      response.end();
    });
  }

  else if (request.url === "/contact") {
    fs.readFile("contact.html", function (error, pageResponse) {
      if (error) {
        response.writeHead(404);
        response.write('Error 404: Not Found');
      }
      else {
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write(pageResponse);
      }
      response.end();
    });
  }

  else if (request.url === "/plaintext") {
    fs.readFile("plaintext.txt", function (error, pageResponse) {
      if (error) {
        response.writeHead(404);
        response.write('Error 404: Not Found');
      }
      else {
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write(pageResponse);
      }
      response.end();
    });
  }

  else {
    response.writeHead(200, {'Content-type': 'text/html'});
    response.write('Yrita /frontpage tai /contact');
    response.end();
  }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
