var express = require('express');
require("babel/register");
var React = require('react');
var path = require('path');
var app = express();
var routes = require('./routes.json');

app.get('/*', function (req, res) {

    var url = req.originalUrl;
    var template = routes.route.filter(function(route){
    	return route.path === url;
    })[0].template;

    var PageComponent = require('./component/' + template + '.jsx');
    var pageComponent = React.createElement(PageComponent, {});

    res.send(React.renderToString(pageComponent));

});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
