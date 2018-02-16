var http = require('http');
var dt = require('./firstmodule');
var url = require('url');

var requestListener = function (req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	// res.write("The date and time are currently:" + dt.myDateTime());
	// res.write(req.url);
	var q = url.parse(req.url, true).query;
	var txt = q.year + " " + q.month;
	res.end(txt);
}
http.createServer(requestListener).listen(8080);