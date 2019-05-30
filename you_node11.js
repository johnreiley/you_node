const http = require('http');
const fs = require('fs');
const portNumber = Number(process.argv[2]);
const filepath = process.argv[3];


let server = http.createServer(function (request, response) {
    const fileStream = fs.createReadStream(filepath);
    fileStream.pipe(response);
});
server.listen(portNumber);