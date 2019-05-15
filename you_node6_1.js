const dirModule = require('./you_node6_2');
dirModule(process.argv[2], process.argv[3], displayFiles)

function displayFiles(err, files) {
    if (err) throw err
    files.forEach(f => console.log(f));
}