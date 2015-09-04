var express = require('express');
require("babel/register");
var React = require('react');
var path = require('path');
var app = express();
var routes = require('./routes.json');

app.get('/*', function (req, res) {

    //var url = req.originalUrl;
    //var template = routes.route.filter(function(route){
    //	return route.path === url;
    //})[0].template;

    var HelloComponent = require('./component/hello-component.jsx');
    var HelloComponentInstance = React.createElement(HelloComponent, { name: "World" });

    res.send(React.renderToString(HelloComponentInstance));

});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
