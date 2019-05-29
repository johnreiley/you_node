const http = require('http');
const url = process.argv[2];

function performHttpGet() {
    http.get(url, callback)
        .on('error', (e) => {
            throw e;
        })
}

function callback(response) {
    response.setEncoding("utf8");
    response.on('data', (chunk) => {
        console.log(chunk);
    });
}

performHttpGet();