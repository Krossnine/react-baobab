"use strict";

var React = require('react/addons');

var UserDetailField = React.createClass({

  render : function render() {
    return (
        <div className="user-detail">
          <div className="user-detail-field">{this.props.field}</div>
          <div className="user-detail-value">{this.props.value}</div>
        </div>
    );
  }

});

module.exports = UserDetailField;
