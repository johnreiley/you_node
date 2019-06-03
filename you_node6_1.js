const dirModule = require('./you_node6_2');
dirModule(process.argv[2], process.argv[3], displayFilenames)

function displayFilenames(err, filenames) {
    if (err) {
        console.error(err);
        return;
    }
    filenames.forEach(filename => console.log(filename));
}