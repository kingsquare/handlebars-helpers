'use strict';

var moment = require('moment-timezone');
moment.locale('nl');

module.exports = function (date, block) {
	if (!date) {
		return '';
	}

	var format =  "DD-MM-YYYY";
	if (block && block.hash && block.hash.format) {
		format = block.hash.format;
	}
	if (typeof block === "string") {
		format = block;
	}

	return moment(date).tz('Europe/Amsterdam').format(format);
};