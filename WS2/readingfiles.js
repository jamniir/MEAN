var fs = require("fs");

console.log("Program started");
var data = fs.readFileSync('example.txt');
console.log(data.toString());
var data1 = fs.readFileSync('anotherfile.txt');
console.log(data1.toString());

console.log("Program ended");
