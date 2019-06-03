let fs = require('fs');
const filePath = process.argv[2];
// console.log(filePath);

function countNewLines(filePath, callback) {
    fs.readFile(filePath, (err, fileBuffer) => {
        if (err) throw err
        // console.log(fileBuffer);
        let fileString = fileBuffer.toString();
        // console.log(fileString);
        let numLines = (fileString.split('\n').length - 1);
        callback(null, numLines);
    });
}

function logNumLines(err, numLines) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(numLines);
}

countNewLines(filePath, logNumLines);