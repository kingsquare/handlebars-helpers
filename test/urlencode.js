"use strict";

var renderEngine = require('./inc/renderEngine.js');

exports.urlencode = function(test){
	var template = renderEngine.compile('{{urlencode a}}');
	var result = template({ a: '"<b b>"' });
	test.ok(result === '%22%3Cb%20b%3E%22', result);
	test.done();
};