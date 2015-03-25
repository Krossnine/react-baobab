"use strict";
var Promise = require("bluebird");

var RoutesHandler = function RoutesHandler(state) {
  var allInitialActions = [];

  state.routes.forEach(function forMatchingRoutes(matchingRoute) {
    var getInitialActions = matchingRoute.handler["getInitialActions"];
    if (getInitialActions) {
      allInitialActions.push(getInitialActions(state));
    }
  });

  return Promise.all(allInitialActions);
};

module.exports = {
  run : RoutesHandler
};
