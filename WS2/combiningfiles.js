var fs = require("fs");

var data = fs.readFileSync('example.txt');
var data1 = fs.readFileSync('anotherfile.txt');

fs.writeFile('message.txt', 'I wrote this!\n', (err) => {
  if (err) throw err;
  console.log('I wrote this');
});

fs.appendFile('message.txt', data + '\n' + data1 + '\n', (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});

fs.appendFile('message.txt', 'I wrote this!', (err) => {
  if (err) throw err;
  console.log('I wrote this');
});
