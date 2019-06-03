const http = require('http');
const url = process.argv[2];

function performHttpGet(url, callback) {
    http.get(url, function (response) {
            response.setEncoding("utf8");
            let responseArray = [];
            response.on('data', (chunk) => {
                responseArray.push(chunk);
            });
            response.on('end', () => {
                callback(null, responseArray);
            })
        })
        .on('error', (e) => {
            callback(e);
            return;
        })
}

function performHttpGetCallback(err, dataLines) {
    if (err) {
        console.error(err);
        return;
    }
    dataLines.forEach(dataLine => console.log(dataLine))
}

performHttpGet(url, performHttpGetCallback);