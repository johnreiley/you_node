const fs = require('fs');
const path = require('path');
const dir = process.argv[2];
const ext = ("." + process.argv[3]);

function displayDirFiles() {
    fs.readdir(dir, (err, fileList) => {
        if (err) throw err;
        fileList.filter((filename) => {
            return (path.extname(filename) === ext);
        }).forEach(file => console.log(file));
    })
}

displayDirFiles();