"use strict";

var renderEngine = require('./inc/renderEngine.js');

var sample = {
	"positions": [
		{
			"_id": "5273db87c4f4be447100432a",
			"comment": "",
			"companyId": "5273d9412e3f515908000a19",
			"companyRolId": 3583887,
			"endDate": "2014-07-31T22:00:00.000Z",
			"preferredTypeOfContact": "email",
			"rolId": 3583921,
			"startDate": "2012-11-06T23:00:00.000Z",
			"title": "Commercieel Manager",
			"ignoreMailing": false,
			"isMeelezer": false,
			"phoneNumberReference": null,
			"emailAddressReference": null,
			"addressReference": null
		},
		{
			"_id": "5273db8719c1a93dbd004329",
			"comment": "Manager",
			"companyId": "5273d90b2e3f5159080001a5",
			"companyRolId": 3244138,
			"endDate": "2012-10-30T23:00:00.000Z",
			"preferredTypeOfContact": "mail",
			"rolId": 3248684,
			"startDate": "1979-12-31T23:00:00.000Z",
			"title": "commercieel mgr",
			"ignoreMailing": false,
			"isMeelezer": false,
			"phoneNumberReference": null,
			"emailAddressReference": null,
			"addressReference": null
		},
		{
			"_id": "53db451b49a426a7db000146",
			"title": "Manager",
			"companyId": "53db4517fd79a43a002e7760",
			"startDate": "2014-12-31T23:00:00.000Z",
			"endDate": null,
			"comment": "",
			"ignoreMailing": false,
			"isMeelezer": false,
			"phoneNumberReference": null,
			"emailAddressReference": null,
			"addressReference": null
		}
	]
};

var poep = 'positions.filter(function (postion) {\
	if (postion.startDate && new Date(postion.startDate) > new Date()) {\
		return false;\
	}\
	if (postion.endDate && new Date(postion.endDate) < new Date()) {\
		return false;\
	}\
	return true;\
})[0].title';

exports.eval = function(test){
	var template = renderEngine.compile('{{eval ' + JSON.stringify(poep) + '}}');
	var result = template(sample);
	test.ok(result === 'Manager', result);

	result = template({});
	test.ok(result === '', result);

	test.done();
};