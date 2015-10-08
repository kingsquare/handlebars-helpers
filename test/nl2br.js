"use strict";

var renderEngine = require('./inc/renderEngine.js');

exports.host = function(test){
	var template = renderEngine.compile('{{nl2br a}}');
	var result = template({
		a: 'a\nb'
	});
	test.ok(result === 'a<br>\nb', result);
	test.done();
};