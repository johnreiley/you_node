let fs = require('fs');
let buffer = fs.readFileSync(process.argv[2]);
let file = buffer.toString();
let fileLineArray = file.split('\n');
let numLines = fileLineArray.length - 1;
console.log(numLines);