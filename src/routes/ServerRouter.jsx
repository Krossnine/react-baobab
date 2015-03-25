"use strict";

require("node-jsx").install({extension : ".jsx"});

var React = require("react");
var Router = require("react-router");
var Routes = require("./routes.jsx");
var RoutesHandler = require("./RoutesHandler");
var Store = require("../stores/Store");
var fs = require("fs");
var path = require("path");
var index = fs.readFileSync(path.resolve(__dirname, "../index.html")).toString();

var ServerRouter = function ServerRouter(req, res, next) {
  Router.run(Routes, req.url, function run(Handler, state) {

    RoutesHandler.run(state).then(function allInitialActionsDone() {
      var markup = React.renderToStaticMarkup(<Handler />);
      var html = index.replace("{{app}}", markup)
                      .replace("{{store}}", JSON.stringify(Store));

      res.type("html");
      res.send(html);

      // 404
      if (state.routes.length === 0) {
        return next();
      }

    }).error(function allInitialActionsOnError(err) {
      next(err);
    });
  });
};

module.exports = ServerRouter;
