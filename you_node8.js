const http = require('http');
const BufferList = require('bl');
const url = process.argv[2];

function performHttpGet(url, callback) {
    http.get(url, function (response) {
            response.setEncoding("utf8");
            let bl = new BufferList();
            let numChar = 0;
            response.on('data', (chunk) => {
                bl.append(chunk);
                numChar += chunk.length;
            });
            response.on('end', () => {
                callback(null, numChar, bl.toString())
            });
        })
        .on('error', (e) => {
            callback(e);
            return;
        })
}

function performHttpGetCallback(err, numCharacters, serverData) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(numCharacters);
    console.log(serverData);
}


performHttpGet(url, performHttpGetCallback);