"use strict";

var isBrowser = !(global && Object.prototype.toString.call(global.process) === "[object process]");
var React = require("react/addons");
var store = require("./Store");

var StoreMixin = {

	mixins : [React.addons.PureRenderMixin],

	unsubscribeCursorsEvents : function unsubscribeCursorsEvents() {
		Object.keys(this.subscriptions).forEach(function(subscription) {
			this.subscriptions[subscription].cursor.off("update", subscription.callback);
		}, this);
	},

	subscribeCursorEvents : function subscribeCursorEvents(cursorKey, cursor) {
		return function updateComponentStateOnCursorEvents() {
			if (this.isMounted()) {
				var state = {};
				state[cursorKey] = cursor.get();
				this.setState(state);
			}
		}.bind(this);
	},

	subscribeCursorsEvents : function subscribeCursorsEvents() {
		if (!this.cursors) {
			return;
		}
		var state = this.getInitialState ? this.getInitialState() : {};
		Object.keys(this.cursors).forEach(function forEachCursorKey(cursorKey) {

			var cursor = this.store.select(this.cursors[cursorKey]);
			var callback = this.subscribeCursorEvents(cursorKey, cursor);
			var cursorData = cursor.get();
			if (cursorData) {
				state[cursorKey] = cursorData;
			}

			if (isBrowser) {
				this.subscriptions[cursorKey] = {
					cursor : cursor,
					callback : callback
				};
				cursor.on("update", callback);
			}

		}, this);

		this.setState(state);
	},

	componentWillMount : function componentWillMount() {
		this.subscriptions = {};
		this.store = store;
		this.subscribeCursorsEvents();
	},

	componentWillUnmount : function() {
		this.unsubscribeCursorsEvents(this);
	}

};

module.exports = StoreMixin;
