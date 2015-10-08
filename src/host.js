'use strict';

module.exports = function (host) {
	if (process && process.env && process.env.NODE_ENV === 'development') {
		host += '.localhost.kingsquare.nl';
	}
	return host;
};