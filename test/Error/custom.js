'use strict';

module.exports = function (t, a) {
	var T = t, err = new T('My Error', 'MY_ERROR', 123);
	a(err instanceof Error, true, "Instance of error");
	a(err.code, 'MY_ERROR', "Code");
	a(err.errno, 123, "Errno");
	a(typeof err.stack, 'string', "Stack trace");
};
