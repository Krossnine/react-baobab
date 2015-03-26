"use strict";
var GithubClient = require("./GitHubClient");
var Store = require("../stores/Store");

var UserActions = {

  getCurrentUser : function(state) {
    var userLogin = state.params.userLogin;
    return GithubClient.getUser(userLogin).then(function(user) {
      Store.select("user").edit(user);
      Store.commit();
    });
  }
};

module.exports = UserActions;
