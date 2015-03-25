"use strict";

var React = require("react");
var StoreMixin = require("../../stores/StoreMixin");
var GitHubActions = require("../../actions/GitHubActions");

var SearchBox = React.createClass({

  propTypes : {
    placeholder : React.PropTypes.string
  },

  mixins : [StoreMixin, React.addons.LinkedStateMixin],

  getInitialState : function() {
    return {
      query : ''
    };
  },

  searchUsers : function(event) {
    event.preventDefault();
    if (this.state.query) {
      GitHubActions.searchUsers(this.state.query);
    }
  },

  render : function() {
    return (
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <form onSubmit={this.searchUsers}>
              <input type="text"
                  className="form-control input-lg"
                  valueLink={this.linkState('query')}
                  placeholder={this.props.placeholder} />
            </form>
          </div>
        </div>
    );
  }
});

module.exports = SearchBox;
