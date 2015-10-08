"use strict";

var renderEngine = require('./inc/renderEngine.js');

exports.dateFormat = function(test){
	var template = renderEngine.compile('{{dateFormat a "DD-MM-YYYY"}}', { noEscape: true });
	var result = template({ a: new Date('2001-02-03') });
	test.ok(result === '03-02-2001', result);
	test.done();
};