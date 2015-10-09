var compareHelper = require('./compare.js');

module.exports = function (context, filterPropery, operator, filterValue, options) {

	if (options === undefined) {
		options = filterValue;
		filterValue = operator;
		operator = "eq";
	}

	if (context && context.filter) {
		this.results = context.filter(function (item) {
			var leftValue = ((typeof filterPropery === 'string') ? item[filterPropery] || filterPropery : filterPropery);
			var rightValue = ((typeof filterValue === 'string') ? item[filterValue] || filterValue : filterValue);
			return compareHelper.compare(leftValue, operator, rightValue);
		});
		return options.fn(this, options);
	}
	return '';
};