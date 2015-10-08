var compareHelper = require('./compare.js');

module.exports = function (context, filterPropery, operator, filterValue, options) {

	if (options === undefined) {
		options = filterValue;
		filterValue = operator;
		operator = "eq";
	}

	if (context && context.filter) {
		options.data.root.results = context.filter(function (item) {
			return compareHelper.compare(item[filterPropery], operator, filterValue);
		});
		return options.fn(this, options);
	}
	return '';
};