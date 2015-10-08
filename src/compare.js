'use strict';

var operators = {
	'eq': function (l, r) { return l == r; },
	'eqeq': function (l, r) { return l === r; },
	'neq': function (l, r) { return l != r; },
	'neqeq': function (l, r) { return l !== r; },
	'lt': function (l, r) { return l < r; },
	'gt': function (l, r) { return l > r; },
	'lte': function (l, r) { return l <= r; },
	'gte': function (l, r) { return l >= r; },
	'typeof': function (l, r) { return typeof l == r; },
	'regexp': function (l, r) { return (l && r && (l.match(new RegExp(r)) !== null)); },
	'mod': function (l, r) { return l % r; }
};

operators['=='] = operators.eq;
operators['==='] = operators.eqeq;
operators['!='] = operators.neq;
operators['!=='] = operators.neqeq;
operators['<'] = operators.lt;
operators['>'] = operators.gt;
operators['<='] = operators.lte;
operators['>='] = operators.gte;
operators['%'] = operators.mod;

function compare(lvalue, operator, rvalue) {
	if (!operators[operator]) {
		throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);
	}
	return (operators[operator](lvalue, rvalue));
}

module.exports = function (lvalue, operator, rvalue, options) {
	if (arguments.length < 3) {
		throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
	}

	if (options === undefined) {
		options = rvalue;
		rvalue = operator;
		operator = "eq";
	}

	if (compare(lvalue, operator, rvalue)) {
		return options.fn(this);
	}
	return options.inverse(this);
};

module.exports.compare = compare;
