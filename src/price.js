'use strict';

module.exports = function (number, currencySymbol) {
	if (!number) {
		number = 0;
	}

	if (typeof currencySymbol !== "string") {
		currencySymbol = '€ ';
	}

	return (currencySymbol || '€ ') + number.toFixed(2).replace(/\./g, ',');
};