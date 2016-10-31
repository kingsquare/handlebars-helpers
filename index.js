'use strict';

var helpers = {
    'compare': require('./src/compare.js'),
    'csvEscape': require('./src/csvEscape.js'),
    'dateFormat': require('./src/dateFormat.js'),
    'filter': require('./src/filter.js'),
    'fromContainer': require('./src/fromContainer.js'),
    'host': require('./src/host.js'),
    'nl2br': require('./src/nl2br.js'),
    'price': require('./src/price.js'),
    'untilDateFormat': require('./src/untilDateFormat.js'),
    'urlencode': require('./src/urlencode.js'),
    'concat': require('./src/concat.js')
};

module.exports = function (Handlebars) {
    if (!Handlebars) {
        return;
    }
    Object.keys(helpers).forEach(function (helper) {
        Handlebars.registerHelper(helper, helpers[helper]);
    });
    return Handlebars;
};

module.exports.helpers = helpers;