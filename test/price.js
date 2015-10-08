"use strict";

var renderEngine = require('./inc/renderEngine.js');

exports.price = function(test){
	var template = renderEngine.compile('{{price a}}');
	var result = template({ a: 1.1123 });
	test.ok(result === '€ 1,11', result);
	result = template({ a: 1.1153 });
	test.ok(result === '€ 1,12', result);
	test.done();
};