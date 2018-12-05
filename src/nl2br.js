'use strict';

var Handlebars = require("handlebars/dist/handlebars");

module.exports = function (text) {
	text = Handlebars.Utils.escapeExpression(text);
	var nl2br = (text + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');
	return new Handlebars.SafeString(nl2br);
};
