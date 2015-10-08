"use strict";

var renderEngine = require('./inc/renderEngine.js');

exports.csvEscape = function(test){
	var template = renderEngine.compile(';{{csvEscape a}};', { noEscape: true });
	var result = template({ a: '!;";\'11 ' });
	test.ok(result === ';"!;"";\'11 ";', result);
	test.done();
};