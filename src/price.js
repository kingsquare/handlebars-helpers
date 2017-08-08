'use strict';

module.exports = function (number, currencySymbol) {
	const numberFloat = parseFloat(number);
	if (isNaN(numberFloat)) {
		return 'X';
	}

	if (typeof currencySymbol !== "string") {
		currencySymbol = '€ ';
	}

	return (currencySymbol || '€ ') + numberFloat.toFixed(2).replace(/\./g, ',');
};
