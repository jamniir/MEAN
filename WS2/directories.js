var fs = require("fs");

var data = fs.readFileSync('example.txt');
var data1 = fs.readFileSync('anotherfile.txt');

fs.mkdir('./newdata', { recursive: true }, (err) => {
  if (err) throw err;
})

fs.writeFile('./newdata/message.txt', 'I wrote this!\n', (err) => {
  if (err) throw err;
});

fs.appendFile('./newdata/message.txt', data + '\n' + data1 + '\n', (err) => {
  if (err) throw err;
});

fs.appendFile('./newdata/message.txt', 'I wrote this!', (err) => {
  if (err) throw err;
});
