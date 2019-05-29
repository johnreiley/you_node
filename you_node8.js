const http = require('http');
const BufferList = require('bl');
const url = process.argv[2];

function performHttpGet() {
    http.get(url, callback)
        .on('error', (e) => {
            throw e;
        })
}

function callback(response) {
    response.setEncoding("utf8");
    let bl = new BufferList();
    let numChar = 0;
    response.on('data', (chunk) => {
        bl.append(chunk);
        numChar += chunk.length;
    });
    response.on('end', () => {
        console.log(numChar);
        console.log(bl.toString());
    });
}

performHttpGet();

