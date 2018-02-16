var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    'use strict';
    fs.readFile('./demohtml.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.write(req.url);
        if (err) {
            res.write(err);
        }
        res.end();
    });
}).listen(8080);