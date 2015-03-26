"use strict";

var React = require('react/addons');

var UserView = React.createClass({

  render : function render() {
    return (
        <div className="panel panel-default">
          <div className="panel-body">
            <div>
              <img className="user-avatar" src={this.props.avatarUrl} />
            </div>
          </div>
        </div>
    );
  }

});

module.exports = UserView;
