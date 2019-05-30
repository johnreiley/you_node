const http = require('http');
const portNumber = process.argv[2];

let server = http.createServer(function (request, response) {
    if (request.method === "POST") {
        let body = "";
        request.on("data", (chunk) => {
            body += chunk.toString().toUpperCase();
        })
        request.on("end", () => {
            response.write(body);
        })
    }
});
server.listen(portNumber);