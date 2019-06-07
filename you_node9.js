const http = require('http');
const BufferList = require('bl');
let urls = process.argv.slice(2);
let results = urls.map(() => "");

getLearnYouNodeData(urls, getLearnYouNodeDataCallback);

function getLearnYouNodeDataCallback(err, results) {
    if (err) {
        console.error(err);
        return;
    }
    results.forEach(r => console.log(r));
}

function getLearnYouNodeData(urlArray, callback) {
    urlArray.forEach((url, i) => {
        http.get(url, (response) => {
            response.setEncoding("utf8");
            let data = "";
            response.on('data', (chunk) => {
                data += chunk;
            });
            response.on('end', () => {
                results[i] = data;
                if (!results.includes("")) {
                    callback(null, results);
                }
            });
        }).on('error', (e) => {
            callback(e)
            return;
        })
    });
}