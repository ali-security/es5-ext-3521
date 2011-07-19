'use strict';

var f      = require('../Function/functionalize')
  , k      = require('../Function/k')
  , pad    = require('../Number/pad').call(2).call
  , invoke = require('../Object/invoke').call;

var o = {
	d: function () {
		return pad(this.getDate());
	},
	j: function () {
		return String(this.getDate());
	},
	N: function () {
		return String(this.getDay() + 1);
	},
	w: function () {
		return String(this.getDay());
	},
	m: function () {
		return pad(this.getMonth() + 1);
	},
	n: function () {
		return String(this.getMonth());
	},
	Y: function () {
		return String(this.getFullYear());
	},
	G: function () {
		return String(this.getHours());
	},
	H: function () {
		return pad(this.getHours());
	},
	i: function () {
		return pad(this.getMinutes());
	},
	s: function () {
		return pad(this.getSeconds());
	},
	u: function () {
		return String(this.getMilliseconds());
	}
};

module.exports = function (format) {
	var i, t, s = '', r = [];
	for (i = 0; t = format[i]; ++i) {
		if (o[t]) {
			if (s) {
				r.push(k(s));
				s = '';
			}
			r.push(o[t]);
		} else if (t === '\\') {
			s += format[++i];
		} else {
			s += t;
		}
	}
	if (s) {
		r.push(k(s));
	}

	return f(function () {
		return r.map(invoke(this)).join('');
	});
};