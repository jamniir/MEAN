var fs = require("fs");
var rdir = './readdir'

fs.readdir(rdir, (err, files) => {
  files.forEach(file => {
  console.log(files);
});
});
