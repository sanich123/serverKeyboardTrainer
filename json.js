const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) { 
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify('This is Joseph Stalin Object Notation'));
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});