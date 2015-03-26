"use strict";

var React = require('react/addons');
var StoreMixin = require("../../stores/StoreMixin");
var RouterState = require("react-router").State;
var UserAvatar = require("./UserAvatar.jsx");
var UserDetails = require("./UserDetails.jsx");
var UserActions = require("../../actions/UserActions");

var UserView = React.createClass({

  mixins : [RouterState, StoreMixin],

  cursors : {
    "user" : ["user"]
  },

  statics : {
    getInitialActions : function getInitialActions(state) {
      return UserActions.getCurrentUser(state);
    }
  },

  render : function render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <UserAvatar avatarUrl={this.state.user.avatar_url} />
            </div>
            <div className="col-md-9">
              <UserDetails user={this.state.user} />
            </div>
          </div>
        </div>
    );
  }

});

module.exports = UserView;
