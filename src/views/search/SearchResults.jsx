"use strict";
var React = require("react");
var StoreMixin = require("../../stores/StoreMixin");
var Router = require("react-router");
var Link = Router.Link;

var SearchResults = React.createClass({

  mixins : [StoreMixin],

  cursors : {
    results : ["search", "results"]
  },

  renderResult : function renderResult(result) {
    return (
      <li>
        <Link to="user" params={{userLogin: result.login}}>{result.login}</Link>
      </li>
    );
  },

  render : function() {
    return (
      <ul>
        {this.state.results.map(this.renderResult)}
      </ul>
    );
  }
});

module.exports = SearchResults;
