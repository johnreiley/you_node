const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, (err, filenames) => {
        if (err) return callback(err);
        filenames = filenames.filter(f => path.extname(f) === ("." + ext))
        callback(null, filenames);
    })
}