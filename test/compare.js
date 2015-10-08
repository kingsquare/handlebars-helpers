"use strict";

var renderEngine = require('./inc/renderEngine.js');

exports.compare_eq = function(test){
	var template = renderEngine.compile('{{#compare a "eq" "a"}}a_eq_a{{/compare}} {{#compare a "==" "b"}}a_eq_b{{else}}a_neq_b{{/compare}}');
	var result = template({ a: 'a' });
	test.ok(result === 'a_eq_a a_neq_b', result);
	test.done();
};

exports.compare_eqeq = function(test){
	var template = renderEngine.compile('{{#compare a "eqeq" "1"}}a_eqeq_1a{{/compare}}{{#compare a "===" 1}}a_eqeq_1b{{/compare}}');
	var result = template({ a: '1' });
	test.ok(result === 'a_eqeq_1a', result);
	test.done();
};

exports.compare_neq = function(test){
	var template = renderEngine.compile('{{#compare a "neq" "a"}}a_eq_a{{/compare}} {{#compare a "!=" "b"}}a_neq_b{{else}}a_neq_b{{/compare}}');
	var result = template({ a: 'a' });
	test.ok(result === ' a_neq_b', result);
	test.done();
};

exports.compare_neqeq = function(test){
	var template = renderEngine.compile('{{#compare a "neqeq" "a"}}a_eq_a{{/compare}} {{#compare a "!==" "b"}}a_neqeq_b{{else}}a_neq_b{{/compare}}');
	var result = template({ a: 'a' });
	test.ok(result === ' a_neqeq_b', result);
	test.done();
};

exports.compare_lt = function(test){
	var template = renderEngine.compile('{{#compare a "lt" 2}}a_lt_2{{/compare}} {{#compare a "<" 1}}a_lt_1{{else}}a_nlt_1{{/compare}}');
	var result = template({ a: 1 });
	test.ok(result === 'a_lt_2 a_nlt_1', result);
	test.done();
};

exports.compare_gt = function(test){
	var template = renderEngine.compile('{{#compare a "gt" 2}}a_gt_2{{/compare}} {{#compare a ">" 1}}a_gt_1{{else}}a_ngt_1{{/compare}} {{#compare b "gt" 2}}b_gt_2{{/compare}}');
	var result = template({ a: 1, b: 3 });
	test.ok(result === ' a_ngt_1 b_gt_2', result);
	test.done();
};

exports.compare_lte = function(test){
	var template = renderEngine.compile('{{#compare a "lte" 2}}a_lte_2{{/compare}} {{#compare a "<=" 2}}a_lte_2{{else}}a_nlt_1{{/compare}}');
	var result = template({ a: 1 });
	test.ok(result === 'a_lte_2 a_lte_2', result);
	test.done();
};

exports.compare_gte = function(test){
	var template = renderEngine.compile('{{#compare a "gte" 2}}a_gte_2{{/compare}} {{#compare a ">=" 2}}a_gte_2{{else}}a_ngte_2{{/compare}}');
	var result = template({ a: 2 });
	test.ok(result === 'a_gte_2 a_gte_2', result);
	test.done();
};

exports.compare_typeof = function(test){
	var template = renderEngine.compile('a is {{#compare a "typeof" "string"}}a string{{else}} something weird{{/compare}} b is {{#compare b "typeof" "string"}}a string{{else}}shomething weird{{/compare}}');
	var result = template({ a: "2", b: true });
	test.ok(result === 'a is a string b is shomething weird', result);
	test.done();
};

exports.compare_regexp = function(test){
	var template = renderEngine.compile('a is {{#compare a "regexp" "[a-z]"}}a letter{{else}} something weird{{/compare}} b is{{#compare b "regexp" "[a-z]"}} a letter{{else}} something weird{{/compare}}');
	var result = template({ a: "a", b: "0" });
	test.ok(result === 'a is a letter b is something weird', result);
	test.done();
};

exports.compare_mod = function(test){
	var template = renderEngine.compile('a is {{#compare a "mod" 2}}even{{else}}uneven{{/compare}} b is {{#compare b "%" 2}}even{{else}}uneven{{/compare}}');
	var result = template({ a: 2, b: 3});
	test.ok(result === 'a is uneven b is even', result);
	test.done();
};