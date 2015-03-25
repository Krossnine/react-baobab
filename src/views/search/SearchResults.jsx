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
        <div className="col-md-3">
          <Link to="user" params={{userLogin : result.login}}>
            <img src={result.avatar_url} className="img-responsive" />
          </Link>
        </div>
    );
  },

  render : function() {
    return (
        <div className="row">
        {this.state.results.map(this.renderResult)}
        </div>
    );
  }
});

module.exports = SearchResults;
