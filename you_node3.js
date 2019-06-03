let fs = require('fs');
let file = fs.readFileSync(process.argv[2], "utf8");
let fileLineArray = file.split('\n');
let numLines = fileLineArray.length - 1;
console.log(numLines);