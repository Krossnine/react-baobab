"use strict";

var React = require('react/addons');
var Header = require("../commons/Header.jsx");
var SearchBox = require("./SearchBox.jsx");
var SearchResults = require("./SearchResults.jsx");

var SearchView = React.createClass({

	render : function render() {
		return (
				<div>
					<Header />
					<SearchBox placeholder="Search users on github..." />
					<SearchResults />
				</div>
		);
	}

});

module.exports = SearchView;
