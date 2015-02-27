'use strict';

var moment = require('moment-timezone');
moment.locale('nl');

module.exports = function (date, block) {
	if (!date) {
		return '';
	}
	return moment(date).tz('Europe/Amsterdam').format(block.hash.format || "DD-MM-YYYY");
};