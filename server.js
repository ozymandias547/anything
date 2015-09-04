var express = require('express');
var path = require('path');
var app = express();
var routes = require('./routes.json');

app.get('/*', function (req, res) {

    var url = req.originalUrl;
    var template = routes[url];

    res.sendFile(path.join(__dirname + "/templates/" + template));

app.get('/', function (req, res) {
	  res.sendFile(path.join(__dirname+'/templates/home.html'));
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

      console.log('Example app listening at http://%s:%s', host, port);
});
