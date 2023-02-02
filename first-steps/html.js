const http = require("http");
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    fs.readFile(__dirname + '/index.html').then((success) => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(success);
    }).catch((err) => {
        res.writeHead(500);
        res.end(err);
        return;
    });
};


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
