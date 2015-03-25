"use strict";

var React = require('react/addons');

var SearchBox = require("./SearchBox.jsx");
var SearchResults = require("./SearchResults.jsx");

var SearchView = React.createClass({

  render : function render() {
    return (
        <div className="container">
          <div className="row">
            <SearchBox placeholder="Search users on github..." />
            <SearchResults />
          </div>
        </div>
    );
  }

});

module.exports = SearchView;
