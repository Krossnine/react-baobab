"use strict";

var React = require("react");
var StoreMixin = require("../../stores/StoreMixin");
var SearchActions = require("../../actions/SearchActions");

var SearchBox = React.createClass({

  propTypes : {
    placeholder : React.PropTypes.string
  },

  mixins : [StoreMixin],

  getInitialState : function() {
    return {
      query : ''
    };
  },

  searchUsers : function(event) {
    event.preventDefault();
    if (this.state.query) {
      SearchActions.searchUsers(this.state.query);
    } else {
      this.clearSearch();
    }
  },

  handleChange: function(event) {
    this.state.query = event.target.value;
    if (!this.state.query && this.state.query.length == 0) {
      this.clearSearch();
    }
  },

  clearSearch : function() {
    SearchActions.clearSearch();
  },

  render : function() {
    return (
        <div className="row" id="search-box">
          <div className="col-md-6 col-md-offset-3">
            <form onSubmit={this.searchUsers}>
              <input type="text"
                  className="form-control input-lg"
                  onChange={this.handleChange}
                  placeholder={this.props.placeholder} />
            </form>
          </div>
        </div>
    );
  }
});

module.exports = SearchBox;
