const net = require('net');
const port = process.argv[2];

let server = net.createServer(function (socket) {
    socket.end(getDate());
});
server.listen(port);

function getDate() {
    const date = new Date();
    let formattedDate = date.getFullYear() + "-"

    if (date.getMonth() < 9) {
        formattedDate += ("0" + (Number(date.getMonth()) + 1).toString())
    } else formattedDate += date.getMonth();

    formattedDate += ("-" + date.getDate() + " " +
        date.getHours() + ":");

    if (date.getMinutes() < 10) {
        formattedDate += "0" + date.getMinutes();
    } else formattedDate += date.getMinutes();

    return (formattedDate += "\n");
}


