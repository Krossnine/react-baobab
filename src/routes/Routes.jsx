"use strict";

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var App = require('../App.jsx');
var SearchView = require('../views/search/SearchView.jsx');
var UserView = require('../views/user/UserView.jsx');
var NotFoundView = require('../views/404/NotFoundView.jsx');

var routes = (
  <Route name="index" path="/" handler={App}>
    <DefaultRoute name="search" handler={SearchView} />
	  <Route name="user" path="/user/:userLogin" handler={UserView} />
    <NotFoundRoute name="404" handler={NotFoundView}/>
  </Route>
);

module.exports = routes;
