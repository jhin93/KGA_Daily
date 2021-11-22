const fs = require("fs");

var readerStream = fs.createReadStream("input.txt");
var writeStream = fs.createWriteStream("output.txt");
// var readerStream = fs.createReadStream("metallica_seattle.mp4");
// var writeStream = fs.createWriteStream("seattle.mp4");

readerStream.pipe(writeStream);

console.log("Write pipe stream finished!!!");


