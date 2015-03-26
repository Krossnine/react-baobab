"use strict";

var React = require('react/addons');
var UserDetail = require("./UserDetail.jsx");

var UserView = React.createClass({

  render : function render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading user-details-title">Profile of <strong>{this.props.user.login}</strong></div>
        <div>
          <UserDetail field="Id" value={this.props.user.id} />
          <UserDetail field="Login" value={this.props.user.login} />
          <UserDetail field="Name" value={this.props.user.name} />
          <UserDetail field="Email" value={this.props.user.email} />
          <UserDetail field="Location" value={this.props.user.location} />
          <UserDetail field="Company" value={this.props.user.company} />
          <UserDetail field="Followers" value={this.props.user.followers} />
        </div>
      </div>
    );
  }

});

module.exports = UserView;
