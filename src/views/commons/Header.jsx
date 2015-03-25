"use strict";

var React = require('react/addons');
var Router = require("react-router");
var Link = Router.Link;

var Header = React.createClass({

  render : function render() {
    return (
        <Link to="index" id="github-link">
          <i id="github-logo" className="fa fa-github-alt fa-5x"></i>
        </Link>
    );
  }

});

module.exports = Header;
