"use strict";
var Promise = require("bluebird");
var request = require("superagent");
var GITHUB_API_HOST = "https://api.github.com";

var GithubClient = {

  searchUsers : function searchUsers(query) {
    return new Promise(function Promise(resolve, reject) {
      request
          .get(GITHUB_API_HOST + '/search/users')
          .query({q : query})
          .set('Accept', 'application/json')
          .end(function(err, res) {
            if (err) {
              reject(err);
            } else {
              resolve(res.body.items);
            }
          });
    });
  },

  getUser : function getUser(username) {
    return new Promise(function Promise(resolve, reject) {
      request
          .get(GITHUB_API_HOST + '/users/'+username)
          .set('Accept', 'application/json')
          .end(function(err, res) {
            if (err) {
              reject(err);
            } else {
              resolve(res.body);
            }
          });
    });
  }

};

module.exports = GithubClient;
