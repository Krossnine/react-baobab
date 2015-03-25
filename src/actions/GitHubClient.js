"use strict";
var Promise = require("bluebird");
var SearchData = require("./search.json");

var GithubClient = {

  searchUsers : function searchUsers(query) {
    return new Promise(function Promise(resolve, reject) {
      if (!query) {
        reject(new Error("Empty query term."));
      }
      else {
        resolve(SearchData.items);
      }
    });
  },

  getUser : function getUser(login) {
    return new Promise(function Promise(resolve, reject) {
      var data = SearchData.items;
      var result = null;
      for (var i=0;i<data.length;i++) {
        if (data[i].login === login) {
          result = data[i];
        }
      }
      result ? resolve(result) : reject(new Error("User not found"));
    });
  }

};

module.exports = GithubClient;
