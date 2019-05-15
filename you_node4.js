let fs = require('fs');
let numLines = 0;
let filePath = process.argv[2];
// console.log(filePath);

function countNewLines(callback) {
    fs.readFile(filePath, (err, fileBuffer) => {
        if (err) throw err
        // console.log(fileBuffer);
        let fileString = fileBuffer.toString();
        // console.log(fileString);
        numLines = (fileString.split('\n').length - 1);
        callback();
    });
}

function logNumLines() {
    console.log(numLines);
}

countNewLines(logNumLines);