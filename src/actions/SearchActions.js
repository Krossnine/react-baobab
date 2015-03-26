"use strict";
var GithubClient = require("./GitHubClient");
var Store = require("../stores/Store");

var SearchActions = {

  searchUsers : function(query) {
    return GithubClient.searchUsers(query).then(function(users) {
        Store.select("search").edit({
          query : query,
          results : users
        });
        Store.commit();
      }
    );
  },

  getCurrentUser : function(state) {
    var userLogin = state.params.userLogin;
    return GithubClient.getUser(userLogin).then(function(user) {
      Store.select("user").edit(user);
      Store.commit();
    });
  },

  clearSearch : function() {
    Store.select("search").edit({
      query : "",
      results : []
    });
    Store.commit();
  }
};

module.exports = SearchActions;
