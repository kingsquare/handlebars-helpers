"use strict";

var renderEngine = require('./inc/renderEngine.js');

var sample = {
	"positions": [
		{
			"title": "Commercieel Manager",
			"_active": false
		},
		{
			"title": "commercieel mgr",
			"_active": false,
			"salary": 10000
		},
		{
			"title": "Manager",
			"_active": true
		}
	]
};

exports.filter = function(test){
	var template = renderEngine.compile('{{#filter positions "_active" "eq" true}} {{results.0.title}} {{/filter}}');
	var result = template(sample);
	test.ok(result === ' Manager ', result);

	result = template({});
	test.ok(result === '', result);

	template = renderEngine.compile('{{#filter positions "_active" "neq" true}}{{#each results}}{{title}}{{/each}}{{/filter}}');
	result = template(sample);
	test.ok(result === 'Commercieel Managercommercieel mgr', result);

	template = renderEngine.compile('{{#filter positions "salary" "gt" 10000}}{{#each results}}{{title}}{{/each}}{{/filter}}');
	result = template(sample);
	test.ok(result === '', result);

	template = renderEngine.compile('{{#filter positions "salary" "gt" 5000}}{{#each results}}{{title}}{{/each}}{{/filter}}');
	result = template(sample);
	test.ok(result === 'commercieel mgr', result);

	template = renderEngine.compile('{{#filter positions "salary" 10000}}{{#each results}}{{title}}{{/each}}{{/filter}}');
	result = template(sample);
	test.ok(result === 'commercieel mgr', result);

	template = renderEngine.compile('{{#filter positions true "eq" "_active"}} {{results.0.title}} {{/filter}}');
	result = template(sample);
	test.ok(result === ' Manager ', result);


	template = renderEngine.compile('{{#filter positions "a" "eq" "a"}}{{results.0.title}}{{/filter}}');
	result = template(sample);
	test.ok(result === 'Commercieel Manager', result);

	template = renderEngine.compile('{{#filter positions "a" "eq" "b"}}{{results.0.title}}{{/filter}}');
	result = template(sample);
	test.ok(result === '', result);
	test.done();
};