console.log("This is my new Node JS file");

var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var port = 3000;
var server = http.createServer(function (req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var filename = query['file'];
    var filepath = path.join(__dirname, filename);
    fs.readFile(filepath, function (err, data) {
        if (err) {
            res.writeHead(404, {
                'Content-Type': 'text/html'
            });
            res.write('<h1>404 Not Found</h1>');
            res.end();
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        }
        hhhhhh
    });
});
server.listen(port, function () {
    console.log('Server is running on port ' + port);
});
