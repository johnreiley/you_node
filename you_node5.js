const fs = require('fs');
const path = require('path');
const dir = process.argv[2];
const ext = ("." + process.argv[3]);

function displayDirFiles(directory, extension, callback) {
    fs.readdir(directory, (err, fileList) => {
        if (err) {
            callback(err);
            return;
        }
        const filenames = fileList.filter((filename) => {
            return (path.extname(filename) === extension);
        })
        callback(null, filenames);
    })
}

displayDirFiles(dir, ext, (err, filenames) => {
    if (err) {
        console.error(err);
        return;
    }
    filenames.forEach(filename => {
        console.log(filename);
    });
});