'use strict';

var value = require('./valid-value')

  , forEach = Array.prototype.forEach, slice = Array.prototype.slice
  , defineProperties = Object.defineProperties
  , getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
  , getOwnPropertyNames = Object.getOwnPropertyNames

  , extend;

extend = function (properties, src) {
	getOwnPropertyNames(src).forEach(function (key) {
		var desc = getOwnPropertyDescriptor(this, key);
		if (desc && !desc.configurable) {
			if (!desc.writable) return;
			this[key] = src[key];
			return;
		}
		properties[key] = getOwnPropertyDescriptor(src, key);
	}, this);
};

module.exports = function (dest/*, …src*/) {
	var properties;
	forEach.call(arguments, value);
	slice.call(arguments, 1).forEach(extend.bind(dest, properties = {}));
	return defineProperties(dest, properties);
};