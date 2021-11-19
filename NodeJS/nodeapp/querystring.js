
const http = require('http');
const port = 4553;
const strIP = '127.0.0.1';


var server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type' : 'text/html; charset-utf8'})
    res.write(req.url);
    res.end();
})

server.listen(port, strIP, () => {
    console.log(`Server running at http://${strIP}:${port}`);
});





























