"use strict";

var React = require('react/addons');
var StoreMixin = require("../../stores/StoreMixin");
var RouterState = require("react-router").State;
var GitHubActions = require("../../actions/GitHubActions");

var UserView = React.createClass({

  mixins : [RouterState, StoreMixin],

  cursors : {
    "user" : ["user"]
  },

  statics : {
    getInitialActions : function getInitialActions(state) {
      return GitHubActions.getCurrentUser(state);
    }
  },

  render : function render() {
    return (
        <div>
          <h1>ID : {this.state.user.login}</h1>
          <img src={this.state.user.avatar_url} />
        </div>
    );
  }

});

module.exports = UserView;
