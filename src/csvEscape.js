'use strict';

/**
 * Based on https://github.com/wdavidw/node-csv-stringify/blob/master/lib/index.js
 * 
 * @param string
 * @returns {*}
 */
module.exports = function(string) {
	var delimiter = ";";
	var escape = '"';
	var quote = '"';

	var containsdelimiter = string.indexOf(delimiter) >= 0;
	var containsQuote = string.indexOf(quote) >= 0;
	var containsLinebreak = string.indexOf('\r') >= 0 || string.indexOf('\n') >= 0;
	if (containsQuote) {
		var regexp = new RegExp(quote, 'g');
		string = string.replace(regexp, escape + quote);
	}
	if (containsQuote || containsdelimiter || containsLinebreak) {
		string = quote + string + quote;
	}
	return string;
};