var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

var requestListener = function (req, res) {
    'use strict';
    var targetpath = '/home/alexis/Documents/';
    if (req.url === '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = targetpath + files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) {
                    throw err;
                }
                res.write('File uploaded and moved!');
                res.end();
            });
            if (err) {
                res.write('<pre>Error: ' + err + '</pre>');
            }
            if (files) {
                res.write('<pre>Files: ' + JSON.stringify(files) + '</pre>');
            }
            if (fields) {
                res.write('<pre>Fields : ' + fields + '</pre>');
            }
        });
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.write('<pre>' + req.url + '</pre>');
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
};

http.createServer(requestListener).listen(8080);