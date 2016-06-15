"use strict";

// $ = jQuery = require('jquery');  two way to reference jquery, by dollor sign, or by the varible jquery

var React = require('react');

var Router = require('react-router');

var routes = require('./routes');

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});


