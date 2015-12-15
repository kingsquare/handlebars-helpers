"use strict";

var fs = require('fs');
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

	template = renderEngine.compile(fs.readFileSync(__dirname + '/resources/eventCsvTemplate.hbs', 'utf-8'));
	result = template({ records: [JSON.parse(fs.readFileSync(__dirname + '/resources/event.json', 'utf-8'))] });
	test.ok(result === 'test positioncompanytitle', result);

	template = renderEngine.compile('{{#each participants}}{{#filter ../sessions "_id" "eq" "sid"}}{{ personId }}!{{/filter}}{{/each}}');
	result = template({
		participants: [{
			sessionId: 'sid',
			personId: 'pid'
		}],
		sessions: [{
			'_id': 'sid'
		}]
	});
	test.ok(result === 'pid!', result);
	test.done();
};