"use strict";
var Baobab = require("baobab");
var storeSchema = require("./StoreSchema");
var assign = require("react/lib/Object.assign");

var storeTree = new Baobab(
  assign({shiftReferences : true}, storeSchema)
);

module.exports = storeTree;
