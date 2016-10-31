"use strict";

var handlebars = require('handlebars');
var helpers = require('../../index.js').helpers;

Object.keys(helpers).forEach(function (helperName) {
    handlebars.registerHelper(helperName, helpers[helperName]);
});

module.exports = handlebars;