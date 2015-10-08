"use strict";

var renderEngine = require('./inc/renderEngine.js');

exports.host = function(test){
	var template = renderEngine.compile('a {{host "www.kingsquare.nl"}} b');
	var result = template();
	test.ok(result === 'a www.kingsquare.nl b', result);
	test.done();
};