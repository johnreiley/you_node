module.exports = function (dir, ext, callback) {
    const fs = require('fs');
    const path = require('path');
    fs.readdir(dir, (err, files) => {
        if (err) return callback(err);
        callback(null, files.filter(f =>
            path.extname(f) === ("." + ext)))
    })
}