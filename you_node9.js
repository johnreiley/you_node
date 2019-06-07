const http = require('http');
const BufferList = require('bl');
let urlArray = createUrlArray();
let dataArray = createEmptyDataArray();

getLearnYouNodeData(urlArray, getLearnYouNodeDataCallback);

function getLearnYouNodeDataCallback(err, dataArray) {
    if (err) {
        console.error(err);
        return;
    }
    dataArray.forEach(d => console.log(d));
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
                dataArray[i] = data;
                if (!dataArray.includes("")) {
                    callback(null, dataArray);
                }
            });
        }).on('error', (e) => {
            callback(e)
            return;
        })
    });
}

function createUrlArray() {
    let urlArray = []
    for (let i = 2; i < process.argv.length; i++) {
        urlArray.push(process.argv[i]);
    }
    return urlArray;
}

function createEmptyDataArray() {
    let results = [];
    for (let i = 2; i < process.argv.length; i++) {
        results.push("");
    }
    return results;
}