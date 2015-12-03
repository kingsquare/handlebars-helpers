"use strict";

var renderEngine = require('./inc/renderEngine.js');

exports.fromContainer = function(test){
	var template = renderEngine.compile('{{fromContainer a.b "c"}}');
	var result = template({ a: { b: { c: 'd' } }});
	test.ok(result === 'd', result);

	template = renderEngine.compile('{{fromContainer a "b.c"}}');
	result = template({ a: { b: { c: 'd' } }});
	test.ok(result === 'd', result);

	result = template({ x: { b: { c: 'd' } }});
	test.ok(result === '', result);


	test.done();
};