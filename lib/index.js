"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function (next) {
	return function (action) {
		if (action.then instanceof Function) {
			return action;
		} else {
			var future = next(action);
			return action instanceof Function ? Promise.resolve(future) : future;
		}
	};
};

module.exports = exports["default"];