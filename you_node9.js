const http = require('http');
const BufferList = require('bl');
let urlArray = createUrlArray();
let dataArray = createEmptyDataArray();

getLearnYouNodeData();

function getLearnYouNodeData() {
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
                    dataArray.forEach(d => console.log(d));
                }
            });
        }).on('error', (e) => {
            throw e;
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
    let dataArray = [];
    for (let i = 2; i < process.argv.length; i++) {
        dataArray.push("");
    }
    return dataArray;
}


