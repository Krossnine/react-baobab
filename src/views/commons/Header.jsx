"use strict";

var React = require('react/addons');
var Router = require("react-router");
var Link = Router.Link;

var Header = React.createClass({

  render : function render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-offset-5 col-md-2">
              <Link to="index" id="github-link">
                <i id="github-logo" className="fa fa-github-alt fa-5x"></i>
              </Link>
            </div>
          </div>
        </div>
    );
  }

});

module.exports = Header;
