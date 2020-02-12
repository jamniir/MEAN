var http = require("http");
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-type': 'text/html'});

  response.write('Sisalto ennen responsen lopettamista.\n<h1>Hello World</h1>');

  response.write('<table style="border: 1px solid black;"><tr><td><b>Name</b></td><td><b>Address</b></td><td><b>City</b></td></tr><tr><td>Matti Meikäläinen</td><td>Timotie 1, as 10</td><td>Tampere</td></tr><tr><td>Maija Virtanen</td><td>Asematia 12</td><td>Kiljava</td></tr></table>')

  response.end('Hello World\n');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
