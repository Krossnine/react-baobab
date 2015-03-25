"use strict";
var React = require('react');
var Router = require('react-router');
var Routes = require('./Routes.jsx');
var RoutesHandler = require("./RoutesHandler");

document.addEventListener("DOMContentLoaded", function() {
	Router.run(Routes, Router.HistoryLocation, function(Handler, state) {
    React.render(<Handler />, document.body);
    RoutesHandler.run(state);
	});
});
