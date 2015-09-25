'use strict';
var dateFormat = require('./dateFormat.js');
var moment = require('moment-timezone');
moment.locale('nl');

module.exports = function (date, block) {
	if (!date) {
		return '';
	}
	date = moment(date).tz('Europe/Amsterdam').subtract(1, 'days').toDate();
	return dateFormat.apply(this, [date, block]);
};