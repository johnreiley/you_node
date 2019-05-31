const http = require('http');
const url = require('url');
const portNumber = process.argv[2];


function parseTime(date) {
    return {
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
    }
}

function parseUnix(date) {
    return {
        "unixtime": date.getTime()
    }
}

let server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-type': 'application/json'
    });

    const requestUrl = url.parse(req.url, true);

    const query = requestUrl.query.iso;
    if (query === undefined) {
        res.writeHead(400, {
            'Content-type': 'application/json'
        });
        res.end(null);
    }
    const date = new Date(query);

    let JSONresponse;
    if (requestUrl.pathname === "/api/parsetime") {
        JSONresponse = parseTime(date);
    } else if (requestUrl.pathname === "/api/unixtime") {
        JSONresponse = parseUnix(date);
    }
    JSONresponse = JSON.stringify(JSONresponse);
    res.end(JSONresponse);

});
server.listen(portNumber);