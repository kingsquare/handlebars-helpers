'use strict';

module.exports = function (number, currencySymbol) {
	if (!number) {
		number = 0;
	}
	return (currencySymbol || '€ ') + number.toFixed(2).replace(/\./g, ',');
};